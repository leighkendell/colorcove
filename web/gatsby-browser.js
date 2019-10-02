require('intersection-observer');
const smoothscroll = require('smoothscroll-polyfill');
const Sentry = require('@sentry/browser');

function loadPolyfills() {
  smoothscroll.polyfill();
}

function loadTracking() {
  Sentry.init({ dsn: process.env.GATSBY_SENTRY_DSN });
}

exports.onClientEntry = () => {
  loadPolyfills();
  loadTracking();
};

// Track FB pixel page view
exports.onRouteUpdate = () => {
  if (process.env.NODE_ENV !== `production` || typeof fbq !== `function`) {
    return null;
  }
  window.fbq('track', 'ViewContent');
};
