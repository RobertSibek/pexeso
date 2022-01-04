export const setVal = (key, value) => {
  localStorage.setItem(key, value);
};

export const getVal = (key) => {
  return localStorage.getItem(key);
};
