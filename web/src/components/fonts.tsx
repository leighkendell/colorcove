import React from 'react';
import Helmet from 'react-helmet';

// Fonts
import ManropeLightWoff2 from '../fonts/Manrope3-Light.woff2';
import ManropeBoldWoff2 from '../fonts/Manrope3-Bold.woff2';
import ManropeLightWoff from '../fonts/Manrope3-Light.woff';
import ManropeBoldWoff from '../fonts/Manrope3-Bold.woff';

const Fonts: React.FC = () => {
  return (
    <Helmet>
      <link
        rel="preload"
        href={ManropeLightWoff2}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="preload"
        href={ManropeBoldWoff2}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      ></link>
      <style type="text/css">{`
        @font-face {
          font-weight: 300;
          font-family: 'Manrope';
          font-style: normal;
          src: url(${ManropeLightWoff2}) format('woff2'),
            url(${ManropeLightWoff}) format('woff');
          font-display: swap;
        }
        @font-face {
          font-weight: bold;
          font-family: 'Manrope';
          font-style: normal;
          src: url(${ManropeBoldWoff2}) format('woff2'),
            url(${ManropeBoldWoff}) format('woff');
          font-display: swap;
        }
      `}</style>
    </Helmet>
  );
};

export default Fonts;
