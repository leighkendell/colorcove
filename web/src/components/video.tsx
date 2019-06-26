import React, { useRef, useEffect, useState } from 'react';
import Player from '@vimeo/player';
import styled from 'styled-components';
import { colorcoveTheme } from '../utils/theme';
import { spacing, breakpoint } from '../utils/style-helpers';
import { animated, useSpring } from 'react-spring';
import { ReactComponent as PlayIcon } from '../images/play.svg';
import Image from './image';
import { FluidObject } from 'gatsby-image';

interface Props {
  url: string;
  width: number;
  height: number;
  image: FluidObject;
}

interface WrapperProps {
  ratio: number;
}

const VideoWrapper = styled.div<WrapperProps>`
  position: relative;
  width: 100%;
  padding-bottom: ${props => props.ratio}%;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const VideoOverlay = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colorBlack};
`;

const OverlayImage = styled(Image)`
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

const PlayButton = styled.button`
  --scale: 1;

  position: absolute;
  top: 50%;
  left: 50%;
  width: ${spacing(5)};
  height: ${spacing(5)};
  background-color: transparent;
  border: 0;
  transform: translate(-50%, -50%) scale(var(--scale));
  cursor: pointer;
  transition: 0.25s ease-in-out;

  ${breakpoint('small')} {
    width: ${spacing(7)};
    height: ${spacing(7)};
  }

  ${breakpoint('medium')} {
    width: ${spacing(8)};
    height: ${spacing(8)};
  }

  ${breakpoint('large')} {
    width: ${spacing(10)};
    height: ${spacing(10)};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    * {
      fill: ${props => props.theme.colorWhite};
    }
  }

  &:hover {
    --scale: 1.1;
  }
`;

const Video: React.FC<Props> = ({ url, width, height, image }) => {
  // State
  const [overlayVisible, setOverlayVisible] = useState(true);

  // Refs
  const videoEl = useRef<HTMLDivElement>(null);
  const player = useRef<Player>();

  // Set up the player
  useEffect(() => {
    // Return if the video el doesn't exist yet
    if (!videoEl.current) {
      return;
    }

    player.current = new Player(videoEl.current, {
      url,
      width,
      height,
      color: colorcoveTheme.colorBlue,
      title: false,
      portrait: false,
      byline: false,
    });
  }, [height, url, width]);

  const handlePlayback = () => {
    // Return if the player doesn't exist yet
    if (!player.current) {
      return;
    }

    // Hide the overlay
    setOverlayVisible(false);

    // Start playback
    player.current.play();
  };

  // Animations
  const overlaySpring = useSpring({
    opacity: overlayVisible ? 1 : 0,
    pointerEvents: overlayVisible ? 'auto' : 'none',
  });

  return (
    <VideoWrapper ref={videoEl} ratio={(height / width) * 100}>
      <VideoOverlay style={overlaySpring} onClick={handlePlayback}>
        <OverlayImage image={image} alt="" />
        <PlayButton onClick={handlePlayback} aria-label="Play video">
          <PlayIcon role="img" />
        </PlayButton>
      </VideoOverlay>
    </VideoWrapper>
  );
};

export default Video;
