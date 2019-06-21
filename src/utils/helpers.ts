export const getNestedObject = (nestedObj: any, path: string) => {
  const pathArr = path.split('.');

  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
    nestedObj
  );
};

export const isBrowser = typeof window !== 'undefined';
