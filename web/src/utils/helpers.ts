/** Returns the value of an object key given a path (foo.bar.baz) and object, checking for undefined along the way */
// TODO: Look into a way to infer the type of the value that's returned
export function getNestedObject<T>(nestedObj: any, path: string): T {
  const pathArr = path.split('.');

  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
    nestedObj
  );
}

/** Check for browser/node environment */
export const isBrowser = typeof window !== 'undefined';

/** Format a number to USD currency format */
export const formatCurrency = (amount: string | number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
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
