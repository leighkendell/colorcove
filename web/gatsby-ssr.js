import React from 'react';

// Load FB Pixel script
export const onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV !== `production`) {
    return null;
  }

  setHeadComponents([
    <script
      key="fb-pixel-script"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${process.env.FB_PIXEL_ID});
          fbq('track', 'PageView');
        `,
      }}
    ></script>,
    <noscript
      key="fb-pixel-noscript"
      dangerouslySetInnerHTML={{
        __html: `
          <img height="1" width="1"
          src="https://www.facebook.com/tr?id=${process.env.FB_PIXEL_ID}&ev=PageView
          &noscript=1"/>
        `,
      }}
    ></noscript>,
  ]);
};
