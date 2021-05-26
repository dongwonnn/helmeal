export const getDeliveryDate = (subscribeTerm) => {
  // 주 -> 일로 변환
  const nextday = Number(subscribeTerm.split('')[0]) * 7;

  const today = new Date();
  const year = today.getFullYear();
  const month = 1 + today.getMonth();
  const day = today.getDate();

  const deadLineDate = new Date(today.setDate(today.getDate() + nextday));
  const deadLineYear = deadLineDate.getFullYear();
  const deadLineMonth = 1 + deadLineDate.getMonth();
  const deadLineDay = deadLineDate.getDate();

  const deliveryTerm = `${year}년 ${month}월 ${day}일 ~ ${deadLineYear}년 ${deadLineMonth}월 ${deadLineDay}일`;
  return deliveryTerm;
};
