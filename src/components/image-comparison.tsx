import React, { useState } from 'react';
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
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  width: ${spacing(10)};
  height: ${spacing(10)};
  background-color: ${props => props.theme.colorBlue};
  border: 0;
  border-radius: 100%;
  transform: translate(-${spacing(5)}, -50%);
  cursor: ew-resize;
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

  return (
    <>
      <Wrapper ratio={(height / width) * 100}>
        {resizeListener}
        <ImageWrapper style={wrapperStyle}>
          <AnimatedImage src={beforeImage} style={imageStyle} />
        </ImageWrapper>
        <Image src={afterImage} />
        <Handle style={handleStyle} {...gestureEvents()} />
      </Wrapper>
    </>
  );
};

export default ImageComparison;
