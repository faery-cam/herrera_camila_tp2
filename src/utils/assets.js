export const getAsset = (path) => {
  return import.meta.env.BASE_URL + path;
};