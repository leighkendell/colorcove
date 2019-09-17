require('intersection-observer');
const smoothscroll = require('smoothscroll-polyfill');
const Sentry = require('@sentry/browser');
const LogRocket = require('logrocket');

function loadPolyfills() {
  smoothscroll.polyfill();
}

function loadTracking() {
  Sentry.init({ dsn: process.env.GATSBY_SENTRY_DSN });
  LogRocket.init(process.env.GATSBY_LOGROCKET_KEY);
  LogRocket.getSessionURL(sessionURL => {
    Sentry.configureScope(scope => {
      scope.setExtra('sessionURL', sessionURL);
    });
  });
}

exports.onClientEntry = () => {
  loadPolyfills();
  loadTracking();
};
