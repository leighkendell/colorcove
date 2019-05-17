import React from 'react';
import styled, { css } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { spacing, breakpoint } from '../utils/style-helpers';
import { useGesture } from 'react-use-gesture';
import useResizeAware from 'react-resize-aware';

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

const ImageWrapper = styled(animated.div)`
  ${imagePosition}
  z-index: 1;
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

const Handle = styled(animated.button)`
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
    width: ${spacing(1.5)};
    height: ${spacing(1.5)};
    border: 2px solid ${props => props.theme.colorWhite};
    transform: translateY(-50%) rotate(45deg);
    content: '';
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

const AnimatedImage = animated(Image);

const ImageComparison: React.FC<Props> = ({
  beforeImage,
  afterImage,
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

  // Drag behaviour
  // Sets the spring "progress" state based on the drag value
  const gestureEvents = useGesture(
    {
      onDrag: ({ event, active, delta, temp = progress.getValue() }) => {
        event.preventDefault();

        const [x] = delta;
        const newProgress = (x / sizes.width) * 100 + temp;

        if (newProgress > 100 || newProgress < 0) {
          return;
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
      progress: (x / sizes.width) * 100,
    });
  };

  const handleHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <Wrapper ratio={(height / width) * 100} onClick={handleWrapperClick}>
        {resizeListener}
        <ImageWrapper style={wrapperStyle}>
          <AnimatedImage src={beforeImage} style={imageStyle} />
        </ImageWrapper>
        <Image src={afterImage} />
        <Handle
          style={handleStyle}
          {...gestureEvents()}
          onClick={handleHandleClick}
        />
      </Wrapper>
    </>
  );
};

export default ImageComparison;
