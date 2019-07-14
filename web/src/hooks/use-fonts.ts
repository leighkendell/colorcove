import { useEffect } from 'react';

// Fonts
import ManropeLightWoff2 from '../fonts/manrope-light-hint-all.woff2';
import ManropeLightWoff from '../fonts/manrope-light-hint-all.woff';
import ManropeBoldWoff2 from '../fonts/manrope-bold-hint-all.woff2';
import ManropeBoldWoff from '../fonts/manrope-bold-hint-all.woff';

const useFonts = () => {
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
};

export default useFonts;
