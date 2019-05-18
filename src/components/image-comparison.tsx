import React from 'react';
import styled, { css } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { spacing, breakpoint, fontSize } from '../utils/style-helpers';
import { useGesture } from 'react-use-gesture';
const useResizeAware = require('react-resize-aware');

interface Props {
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  width: number;
  height: number;
}

const imagePosition = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div<{ ratio: number }>`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${props => props.ratio}%;
  overflow: hidden;
`;

const ImageWrapper = styled(animated.figure)`
  ${imagePosition}
  z-index: 1;
  margin: 0;
  overflow: hidden;
  transform-origin: left;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  transform-origin: left;
  ${imagePosition}
`;

const Handle = styled(animated.div)`
  --spacing: ${spacing(5)};
  --scale: 1;

  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  width: var(--spacing);
  height: var(--spacing);
  background-color: ${props => props.theme.colorBlue};
  border: 0;
  border-radius: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  transform: translate(calc((var(--spacing) * -1) / 2), -50%)
    scale(var(--scale));
  cursor: ew-resize;
  transition: transform 0.25s ease-in-out;

  ${breakpoint('small')} {
    --spacing: ${spacing(7)};
  }

  ${breakpoint('medium')} {
    --spacing: ${spacing(8)};
  }

  ${breakpoint('large')} {
    --spacing: ${spacing(10)};
  }

  &:hover,
  &:active {
    --scale: 1.25;
  }

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    width: ${spacing(1)};
    height: ${spacing(1)};
    border: 2px solid ${props => props.theme.colorWhite};
    border-radius: 2px;
    transform: translateY(-50%) rotate(45deg);
    content: '';

    ${breakpoint('medium')} {
      width: ${spacing(1.5)};
      height: ${spacing(1.5)};
    }
  }

  &::before {
    left: ${spacing(1.5)};
    border-top: 0;
    border-right: 0;

    ${breakpoint('medium')} {
      left: ${spacing(2)};
    }
  }

  &::after {
    right: ${spacing(1.5)};
    border-bottom: 0;
    border-left: 0;

    ${breakpoint('medium')} {
      right: ${spacing(2)};
    }
  }
`;

const Content = styled(animated.div)`
  display: grid;
  overflow: hidden;
`;

const ContentItem = styled.div`
  padding: ${spacing(1)};
  text-align: center;
  background-color: ${props => props.theme.colorLightGrey};

  ${breakpoint('medium')} {
    padding: ${spacing(2)};
  }

  ${breakpoint('large')} {
    padding: ${spacing(3)};
  }

  &:last-child {
    background-color: ${props => props.theme.colorMidGrey};
  }

  strong {
    display: block;
    overflow: hidden;
    ${fontSize(13, 3)};
    white-space: nowrap;
    text-overflow: ellipsis;

    ${breakpoint('medium')} {
      ${fontSize(14, 3)};
    }

    ${breakpoint('large')} {
      ${fontSize(15, 3)};
    }
  }
`;

const AnimatedImage = animated(Image);

const ImageComparison: React.FC<Props> = ({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  width,
  height,
}) => {
  const [resizeListener, sizes] = useResizeAware();

  // Animations
  const [{ progress }, setSpring] = useSpring(() => ({ progress: 50 }));

  const wrapperStyle = {
    transform: progress.interpolate(x => `scaleX(${x / 100})`),
  };

  const imageStyle = {
    transform: progress.interpolate(x => `scaleX(${100 / x})`),
  };

  const handleStyle = {
    left: progress.interpolate(x => `${x}%`),
  };

  const contentStyle = {
    gridTemplateColumns: progress.interpolate(x => `${x}% ${100 - x}%`),
  };

  // Drag behaviour
  // Sets the spring "progress" state based on the drag value
  const gestureEvents = useGesture(
    {
      onDrag: ({ event, active, delta, temp = progress.getValue(), last }) => {
        event.preventDefault();

        const [x] = delta;
        let newProgress = (x / sizes.width) * 100 + temp;

        if (newProgress > 100 || newProgress < 0) {
          return;
        }

        if (last) {
          newProgress = Math.round(newProgress);
        }

        setSpring({
          progress: newProgress,
          immediate: active,
        });

        return temp;
      },
    },
    { event: { passive: false } }
  );

  const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const x =
      event.clientX -
      (event.target as HTMLDivElement).getBoundingClientRect().left;
    setSpring({
      progress: Math.round((x / sizes.width) * 100),
    });
  };

  const handleHandleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    const currentProgress = progress.getValue();

    if (key === 'ArrowUp' || key === 'ArrowRight') {
      setSpring({
        progress: Math.round(currentProgress + 1),
      });
    }

    if (key === 'ArrowDown' || key === 'ArrowLeft') {
      setSpring({
        progress: Math.round(currentProgress - 1),
      });
    }
  };

  const valueNow = progress.interpolate(progress =>
    parseFloat(progress.toFixed(0))
  );

  return (
    <>
      <Wrapper ratio={(height / width) * 100} onClick={handleWrapperClick}>
        {resizeListener}
        <ImageWrapper style={wrapperStyle}>
          <AnimatedImage
            src={beforeImage}
            alt="Before"
            aria-labelledby="beforeLabel"
            style={imageStyle}
          />
        </ImageWrapper>
        <Image src={afterImage} alt="After" aria-labelledby="afterLabel" />
        <Handle
          style={handleStyle}
          onClick={handleHandleClick}
          onKeyDown={handleKeyDown}
          aria-label="Compare images"
          role="slider"
          aria-valuemin={1}
          aria-valuemax={100}
          aria-valuenow={valueNow}
          tabIndex={0}
          {...gestureEvents()}
        />
      </Wrapper>
      <Content style={contentStyle}>
        <ContentItem>
          <strong id="beforeLabel">{beforeLabel}</strong>
        </ContentItem>
        <ContentItem>
          <strong id="afterLabel">{afterLabel}</strong>
        </ContentItem>
      </Content>
    </>
  );
};

export default ImageComparison;
