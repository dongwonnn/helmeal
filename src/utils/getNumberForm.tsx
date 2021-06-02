export const getNumberForm = (str: String) => {
  const numberForm = str.replace(/,/g, '').replace('원', '');

  return numberForm;
};
