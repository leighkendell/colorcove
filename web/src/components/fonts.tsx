import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Fonts
import ManropeStage1LightWoff2 from '../fonts/manrope-light-kern-latin.woff2';
import ManropeStage1LightWoff from '../fonts/manrope-light-kern-latin.woff';
import ManropeStage1BoldWoff2 from '../fonts/manrope-bold-kern-latin.woff2';
import ManropeStage1BoldWoff from '../fonts/manrope-bold-kern-latin.woff';
import ManropeLightWoff2 from '../fonts/manrope-light-hint-all.woff2';
import ManropeLightWoff from '../fonts/manrope-light-hint-all.woff';
import ManropeBoldWoff2 from '../fonts/manrope-bold-hint-all.woff2';
import ManropeBoldWoff from '../fonts/manrope-bold-hint-all.woff';

const Fonts: React.FC = () => {
  // Load full stage 2 version of the font
  useEffect(() => {
    if ('fonts' in document) {
      const light = new FontFace(
        'Manrope',
        `url(${ManropeLightWoff2}) format('woff2'), url(${ManropeLightWoff}) format('woff')`,
        { weight: '300' }
      );
      const bold = new FontFace(
        'Manrope',
        `url(${ManropeBoldWoff2}) format('woff2'), url(${ManropeBoldWoff}) format('woff')`,
        { weight: 'bold' }
      );
      Promise.all([bold.load(), light.load()]).then(function(fonts) {
        fonts.forEach(function(font) {
          document.fonts.add(font);
        });
      });
    }
  }, []);

  // Preload stage 1 version of the font
  return (
    <Helmet>
      <link
        rel="preload"
        href={ManropeStage1LightWoff2}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="preload"
        href={ManropeStage1BoldWoff2}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      ></link>
      <style>{`
        @font-face {
          font-weight: 300;
          font-family: 'Manrope';
          font-style: normal;
          src: url(${ManropeStage1LightWoff2}) format('woff2'),
            url(${ManropeStage1LightWoff}) format('woff');
          font-display: swap;
        }
        @font-face {
          font-weight: bold;
          font-family: 'Manrope';
          font-style: normal;
          src: url(${ManropeStage1BoldWoff2}) format('woff2'),
            url(${ManropeStage1BoldWoff}) format('woff');
          font-display: swap;
        }
      `}</style>
    </Helmet>
  );
};

export default Fonts;
