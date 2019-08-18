import React from 'react';
import { SanityHero } from '../types/graphql-types';
import Header from './header';
import { FluidObject } from 'gatsby-image';
import { getNestedObject } from '../utils/helpers';
import Button from './button';
import { Link } from 'gatsby';

interface Props {
  hero: SanityHero;
}

const Hero: React.FC<Props> = ({ hero, children }) => {
  // Image Data
  const image: FluidObject | undefined = getNestedObject(
    hero,
    'image.asset.fluid'
  );
  const backgroundColor: string | undefined = getNestedObject(
    hero,
    'image.asset.metadata.palette.dominant.background'
  );

  // Button
  const { button } = hero;
  const buttonText = button && button.text;
  const buttonLink = getNestedObject(button, 'link.slug.current');

  return (
    <Header
      title={hero.title ? hero.title : ''}
      description={hero.intro ? hero.intro : ''}
      image={image}
      backgroundColor={backgroundColor}
    >
      {button && buttonText && buttonLink ? (
        // TODO: Make a specific component to handle links to pages i.e. home
        <Button to={`/${buttonLink}/`} as={Link}>
          {buttonText}
        </Button>
      ) : (
        <>{children}</>
      )}
    </Header>
  );
};

export default Hero;
