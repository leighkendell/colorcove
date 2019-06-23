import React from 'react';
import { SanityHero } from '../types/graphql-types';
import Header from './header';
import { FluidObject } from 'gatsby-image';
import { getNestedObject } from '../utils/helpers';

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

  return (
    <Header
      title={hero.title ? hero.title : ''}
      description={hero.intro ? hero.intro : ''}
      image={image}
      backgroundColor={backgroundColor}
    >
      {children}
    </Header>
  );
};

export default Hero;
