import React from 'react';
import { SanityBlock } from '../types/graphql-types';
import RichText from './rich-text';
import Heading from './heading';
import Text from './text';
import List from './list';
import ListItem from './list-item';
import TextLink from './text-link';
import InlineImage from './inline-image';
import { isBrowser } from '../utils/helpers';
const { getFluidGatsbyImage } = require('gatsby-source-sanity');
const BlockContent = require('@sanity/block-content-to-react');

const BlockRenderer = ({ children, node }: any) => {
  const style = node.style || 'normal';

  switch (style) {
    case 'h2':
      return <Heading type="h2">{children}</Heading>;
    case 'h3':
      return <Heading type="h3">{children}</Heading>;
    default:
      return <Text>{children}</Text>;
  }
};

const ListRenderer = ({ children }: any) => {
  return <List>{children}</List>;
};

const ListItemRenderer = ({ children }: any) => {
  return <ListItem>{children}</ListItem>;
};

const LinkRenderer = ({ children, mark }: any) => {
  return <TextLink to={mark.href}>{children}</TextLink>;
};

const InternalLinkRenderer = ({ children, mark }: any) => {
  if (mark.reference.slug) {
    const slug = mark.reference.slug.current;
    const link =
      mark.reference._type === 'product' ? `/products/${slug}/` : `/${slug}/`;

    return <TextLink to={link}>{children}</TextLink>;
  }

  return children;
};

const InlineImageRenderer = ({ node }: any) => {
  const sanityConfig = {
    projectId: 'vv0x27yc',
    dataset: 'production',
  };
  const { _ref } = node.image.asset;
  const image = getFluidGatsbyImage(_ref, { maxWidth: 2000 }, sanityConfig);
  const loading = isBrowser && window.location.search ? 'eager' : 'lazy';

  return (
    <InlineImage alt={node.alt} image={image} width="2000" loading={loading} />
  );
};

const serializers = {
  types: {
    block: BlockRenderer,
    inlineImage: InlineImageRenderer,
  },
  list: ListRenderer,
  listItem: ListItemRenderer,
  marks: {
    link: LinkRenderer,
    internalLink: InternalLinkRenderer,
  },
  container: RichText,
};

interface Props {
  blocks: SanityBlock[];
}

const PortableText: React.FC<Props> = ({ blocks }) => (
  <BlockContent blocks={blocks} serializers={serializers} />
);

export default PortableText;
