/** Returns the value of an object key given a path (foo.bar.baz) and object, checking for undefined along the way */
// TODO: Look into a way to infer the type of the value that's returned
export const getNestedObject = (nestedObj: any, path: string) => {
  const pathArr = path.split('.');

  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
    nestedObj
  );
};

/** Check for browser/node environment */
export const isBrowser = typeof window !== 'undefined';

/** Format a number to AUD currency format */
export const formatCurrency = (amount: string | number) =>
  new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(typeof amount === 'string' ? parseFloat(amount) : amount);

export const springSlowConfig = {
  tension: 280,
  friction: 40,
  clamp: true,
};

export const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
