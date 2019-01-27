export const convertToHttps = link => {
  return 'https' + link.slice(4);
};

export const formatQuery = input => {
  return input
    .toLowerCase()
    .split(' ')
    .join('+');
};
