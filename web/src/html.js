import React from 'react';
import PropTypes from 'prop-types';

// Fonts
import ManropeStage1LightWoff2 from './fonts/manrope-light-kern-latin.woff2';
import ManropeStage1LightWoff from './fonts/manrope-light-kern-latin.woff';
import ManropeStage1BoldWoff2 from './fonts/manrope-bold-kern-latin.woff2';
import ManropeStage1BoldWoff from './fonts/manrope-bold-kern-latin.woff';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
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

        <style>
          {`
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
          `}
        </style>

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
