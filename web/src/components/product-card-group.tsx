import React from 'react';
import CardGroup from './card-group';
import {
  SanityProductEdge,
  SanityProductReference,
} from '../types/graphql-types';
import { FluidObject } from 'gatsby-image';
import { getNestedObject } from '../utils/helpers';
import Card from './card';

type product = SanityProductEdge | SanityProductReference;

interface Props {
  products: product[];
}

const ProductCardGroup: React.FC<Props> = ({ products }) => {
  // Check if the product is a reference
  const isReference = (product: product): product is SanityProductReference => {
    return (product as SanityProductReference).product !== undefined;
  };

  return (
    <CardGroup>
      {products.map(item => {
        let product;

        // Set the correct product value based on whether it's a reference or node
        if (isReference(item)) {
          product = item.product;
        } else {
          product = item.node;
        }

        // Check the product exists
        if (product) {
          const { id, title, description, image, slug } = product;
          const link = `/products/${slug && slug.current}/`;
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
        }

        return null;
      })}
    </CardGroup>
  );
};

export default ProductCardGroup;
