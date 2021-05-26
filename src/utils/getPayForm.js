export const getPayForm = (pay) => {
  pay = pay + '';

  let point = pay.length % 3;
  const len = pay.length;

  let strPay = pay.substring(0, point);
  while (point < len) {
    if (strPay !== '') strPay += ',';
    strPay += pay.substring(point, point + 3);
    point += 3;
  }

  return strPay;
};
