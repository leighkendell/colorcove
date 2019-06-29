import React, { useRef } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { spacing, breakpoint, fontSize } from '../utils/style-helpers';
import { useGesture } from 'react-use-gesture';
import { FluidObject } from 'gatsby-image';
import Image from './image';

interface Props {
  beforeImage: FluidObject;
  afterImage: FluidObject;
  beforeLabel: string;
  afterLabel: string;
}

const StyledImageComparison = styled.div`
  background-color: ${props => props.theme.colorBlack};
`;

const Wrapper = styled(animated.div)`
  position: relative;
  overflow: hidden;
`;

const ImageWrapper = styled(animated.figure)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  transform-origin: left;
`;

const StyledImage = styled(Image)`
  transform-origin: left;
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

const AnimatedImage = animated(StyledImage);

const ImageComparison: React.FC<Props> = ({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
}) => {
  const wrapperEl = useRef<HTMLDivElement>(null);
  const imageCount = useRef(0);

  // Animations
  const [{ progress }, setSpring] = useSpring(() => ({ progress: 50 }));
  const [wrapperAnimation, setWrapperAnimation] = useSpring(() => ({
    opacity: 0,
  }));

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
  // FIXME: Remove "any" when types are fixed
  const gestureEvents = useGesture<any>(
    {
      onDrag: ({ event, active, delta, temp = progress.getValue(), last }) => {
        if (event) {
          event.preventDefault();
        }

        if (wrapperEl.current) {
          const width = wrapperEl.current.offsetWidth;

          const [x] = delta;
          let newProgress = (x / width) * 100 + temp;

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
        }

        return temp;
      },
    },
    { event: { passive: false } }
  );

  const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (wrapperEl.current) {
      const x = event.clientX - wrapperEl.current.getBoundingClientRect().left;
      const width = wrapperEl.current.offsetWidth;

      setSpring({
        progress: Math.round((x / width) * 100),
      });
    }
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

  // Check both images are loaded before showing the comparison
  const handleImageLoaded = () => {
    imageCount.current += 1;

    if (imageCount.current === 2) {
      setWrapperAnimation({
        opacity: 1,
      });
    }
  };

  return (
    <StyledImageComparison>
      <Wrapper
        onClick={handleWrapperClick}
        ref={wrapperEl}
        style={wrapperAnimation}
      >
        <ImageWrapper style={wrapperStyle}>
          <AnimatedImage
            image={beforeImage}
            alt="Before"
            style={imageStyle}
            onLoad={handleImageLoaded}
          />
        </ImageWrapper>
        <StyledImage
          image={afterImage}
          alt="After"
          onLoad={handleImageLoaded}
        />
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
          <strong>{beforeLabel}</strong>
        </ContentItem>
        <ContentItem>
          <strong>{afterLabel}</strong>
        </ContentItem>
      </Content>
    </StyledImageComparison>
  );
};

export default ImageComparison;
