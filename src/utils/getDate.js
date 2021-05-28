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

export const getReceiveDay = () => {
  const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

  const today = new Date();

  // 2일 후 계산
  const receiveDay = WEEKDAY[(today.getDay() + 2) % 7];

  return receiveDay;
};
