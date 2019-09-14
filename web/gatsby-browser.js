const Sentry = require('@sentry/browser');

async function loadPolyfills() {
  await import('intersection-observer');
  const smoothscroll = await import('smoothscroll-polyfill');
  smoothscroll.polyfill();
}

function loadTracking() {
  Sentry.init({ dsn: process.env.GATSBY_SENTRY_DSN });
}

exports.onClientEntry = () => {
  loadPolyfills();
  loadTracking();
};
