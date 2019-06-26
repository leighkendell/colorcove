import React from 'react';
import Helmet from 'react-helmet';
import '../fonts/fonts.css';

// Fonts
import ManropeLightWoff2 from '../fonts/Manrope3-Light.woff2';
import ManropeBoldWoff2 from '../fonts/Manrope3-Bold.woff2';

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
    </Helmet>
  );
};

export default Fonts;
