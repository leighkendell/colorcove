import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { isBrowser } from '../utils/helpers';
import PortableText from '../components/portable-text';
import { SanityBlock } from '../types/graphql-types';
import { ReactComponent as Logo } from '../images/colorcove-logo.svg';
import Wrapper from '../components/wrapper';
import { spacing } from '../utils/style-helpers';
const sanityClient = require('@sanity/client');

const GlobalStyle = createGlobalStyle`
  nav,
  aside,
  footer {
    position: absolute !important;
    visibility: hidden;
    opacity: 0;
  }
`;

const Header = styled.header`
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: ${spacing(5)};
  padding-bottom: ${spacing(4)};
  border-bottom: 1px solid ${props => props.theme.colorMidGrey};

  svg {
    width: ${spacing(20)};
  }
`;

const GenerateDocumentPage: React.FC = () => {
  const [blocks, setBlocks] = useState<SanityBlock[] | null>(null);

  useEffect(() => {
    if (isBrowser) {
      const { search } = window.location;
      const params = new URLSearchParams(search);
      const id = params.get('id');

      const client = sanityClient({
        projectId: process.env.SANITY_PROJECT,
        dataset: process.env.SANITY_DATASET,
        useCdn: false,
      });

      client.getDocument(id).then((data: any) => {
        setBlocks(data.content.blocks);
      });
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      {blocks && (
        <Wrapper>
          <Header>
            <Logo />
          </Header>
          <PortableText blocks={blocks} />
        </Wrapper>
      )}
    </>
  );
};

export default GenerateDocumentPage;
