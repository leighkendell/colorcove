const Sentry = require('@sentry/browser');
const LogRocket = require('logrocket');

async function loadPolyfills() {
  await import('intersection-observer');
  const smoothscroll = await import('smoothscroll-polyfill');
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
