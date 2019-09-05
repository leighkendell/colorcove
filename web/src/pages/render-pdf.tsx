import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { isBrowser } from '../utils/helpers';
import PortableText from '../components/portable-text';
import { ReactComponent as Logo } from '../images/colorcove-logo.svg';
import Wrapper from '../components/wrapper';
import { spacing } from '../utils/style-helpers';
const sanityClient = require('@sanity/client');

const GlobalStyle = createGlobalStyle`
  nav,
  aside,
  footer {
    position: absolute !important;
    display: none;
    visibility: hidden;
    opacity: 0;
  }

  html {
    font-size: 12px;
  }

  @page {
    size: A4 portait;
    margin: 1.25cm 0;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: ${spacing(4)};
  padding-bottom: ${spacing(4)};
  font-weight: bold;
  border-bottom: 1px solid ${props => props.theme.colorMidGrey};

  svg {
    width: ${spacing(15)};
  }
`;

const GenerateDocumentPage: React.FC = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    if (isBrowser) {
      const { search } = window.location;
      const params = new URLSearchParams(search);
      const id = params.get('id');

      const client = sanityClient({
        projectId: 'vv0x27yc',
        dataset: 'production',
        useCdn: false,
      });

      client.getDocument(id).then((data: any) => {
        setData(data);
      });
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      {data && (
        <Wrapper>
          <Header>
            <Logo />
            {data.title}
          </Header>
          <PortableText blocks={data.content.blocks} />
        </Wrapper>
      )}
    </>
  );
};

export default GenerateDocumentPage;
