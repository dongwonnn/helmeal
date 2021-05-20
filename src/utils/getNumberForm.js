export const getNumberForm = (str) => {
  const numberForm = str.replace(/,/g, '').replace('원', '');

  return numberForm;
};
