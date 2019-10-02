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
