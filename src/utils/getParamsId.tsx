export const getParamsId = (params: string) => {
  // parmas : meal_0, meal_1...
  const arrParams = params.split('');
  const paramsLen = arrParams.length;

  return Number(arrParams[paramsLen - 1]);
};

export const getFoodKinds = (params: string) => {
  const arrParmas = params.split('');

  if (arrParmas[0] === 'm') return 'meal';
  else return 'snack';
};
