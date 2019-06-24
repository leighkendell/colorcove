import React from 'react';
import CardGroup from './card-group';
import { SanityProductEdge } from '../types/graphql-types';
import { FluidObject } from 'gatsby-image';
import { getNestedObject } from '../utils/helpers';
import Card from './card';

interface Props {
  products: SanityProductEdge[];
}

const ProductCardGroup: React.FC<Props> = ({ products }) => {
  return (
    <CardGroup>
      {products.map(product => {
        const { id, title, description, image, slug } = product.node;
        const link = `/products/${slug && slug.current}`;
        const cardImage: FluidObject = getNestedObject(image, 'asset.fluid');

        // Render the card
        if (title && link && description && cardImage) {
          return (
            <Card
              title={title}
              description={description}
              link={link}
              image={cardImage}
              key={id}
            />
          );
        }

        return null;
      })}
    </CardGroup>
  );
};

export default ProductCardGroup;
