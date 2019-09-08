const Sentry = require('@sentry/browser');

async function loadPolyfills() {
  if (typeof window.IntersectionObserver === 'undefined') {
    await import('intersection-observer');
  }
}

function loadTracking() {
  Sentry.init({ dsn: process.env.GATSBY_SENTRY_DSN });
}

exports.onClientEntry = () => {
  loadPolyfills();
  loadTracking();
};
