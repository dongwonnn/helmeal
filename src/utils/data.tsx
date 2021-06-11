// 동영상
export const videoUrl =
  'https://helmeal.s3.ap-northeast-2.amazonaws.com/%ED%97%AC%EB%B0%80_%EC%B5%9C%EC%A2%85.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0yIkcwRQIgGuDPstAoXPda%2BeU20L%2ByPHdpX7ncK2zNM2YYuP48qpECIQCUW5aLI9JJdMHpL7Yq7XRl8ZtC1Xpg2BdIUTT9p86OZCr%2FAgi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDUzNDQzOTYyOTYxNCIM2fU1oplODpl95788KtMCyVaz1DkhVeGCSOd9AeTENJtR9lvA%2Br4ngofMlZqo5bprTetRYESHqBBY8Rt%2Bt9g5D7S%2FD1eVQwqgCKMNiKI6j5G5RMtBGe089iyw2RpB4AZ2IjRosTEE9ylYlvXDtB5MdILlRZnAHKIrsxcpsL5qGhCzfqe7ZZTs8ymUIFiVBfwl%2Bs3a0NTxtOpyYzBUSvywzrNyGP%2FPuiHoC58r%2F%2B43Vg3YpkmPuV8Aq8uhCz2v5%2Fd5x6PtFgmqfn0NFzQvHjKjV%2F510sW1N49XywwHvKcncPotqD%2Bym9ich7JAeViiUS7%2FnpvcS8N9ZxW5wKBtyXi6S78%2FqK8vxPizc996HDa4jZV2BVNx%2FiKv3O71%2FXADp%2F6afefioaylB9UITjFey8oXTo8KRx2%2FbMUl38l518sLQwUVJU%2B9e4Ls0BeGxgrASk6lMUSjBjQ3HJrmiNbDYoapfXwVMLmcjIYGOrMCIYuF7QgPeajjb83ry4LvncoosglCdpNaVfy4fiR9xwH0%2F8TZ6HGB9OjlT78Mubyw3zu2r%2Fm8eyQF0kLhgnx%2F2wTV8M42b8YOMnBtT7YLmyYzePUf%2FFHRPGLiEgZJV%2BqGzgC0ecnE86SVS%2FSc3kwY4PkxFkAe2IbR%2BsxjjKZrHTlbQW1qGHOKesX60bm6NT7PBhg7eMEyM%2FdTI6WBw%2FvcilovyMS%2BDn3gwesYmsot8odvrFckBm58lPVnjh1ilgcLAr%2F5G1MMwIy17zxzDbp1skKRvU54wvGtB%2FEf1bxlWHVyHK%2Fr6I8VCroZOppO0o844u%2BKvMwUilCynjpE18LyOMHeB096vepA6cTwLPo6hWT5EyF0BoyxM9UT%2FF92KPhQyFhXc7%2BY6yxTaATjCmDXMgMLtA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210611T080944Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXY3YVSMXHXKDEWJB%2F20210611%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=d97e15f643a7093fdde3a3f7ba876caca957e32501dc6dd079dcae00a449aacc';

// 지불 방법
export const payWay = [
  {
    id: '0',
    way: '네이버 페이',
  },
  {
    id: '1',
    way: '카카오 페이',
  },
  {
    id: '2',
    way: '신용/체크 카드',
  },
  {
    id: '3',
    way: '휴대폰 결제',
  },
];

// MEAL 정보
export const mealInfo = [
  {
    id: 'meal_0',
    title: '데리야끼 연어 스테이크와 그린빈 볶음 그리고 퀴노아',
    protein: 10,
    carb: 36,
    fat: 15,
    cal: 510,
    integrity: '소고기 프로틴',
    proteinImgUrl:
      'https://user-images.githubusercontent.com/59330828/119790514-f5402080-bf0e-11eb-90d2-ef9b50929b3e.png',
    largeImgUrl:
      'https://user-images.githubusercontent.com/59330828/119785354-16ead900-bf0a-11eb-86af-6a32e351f7ed.png',
    smallImgUrl:
      'https://user-images.githubusercontent.com/59330828/120132385-3f721c00-c205-11eb-8523-dae627c2604f.png',
  },
  {
    id: 'meal_1',
    title: '미니 양배추 볶음 소고기 미트볼 통밀 크림 파스타',
    protein: 15,
    carb: 10,
    fat: 20,
    cal: 480,
    integrity: '돼지고기 프로틴',
    proteinImgUrl:
      'https://user-images.githubusercontent.com/59330828/119790521-f709e400-bf0e-11eb-8853-149c1324b638.png',
    largeImgUrl:
      'https://user-images.githubusercontent.com/59330828/119785377-1c482380-bf0a-11eb-982e-be05f31df481.png',
    smallImgUrl:
      'https://user-images.githubusercontent.com/59330828/120132394-41d47600-c205-11eb-8a99-a57643d9e5d3.png',
  },
  {
    id: 'meal_2',
    title: '두부 샐러드와 브로콜리 오리엔탈 드래싱과 오트밀 밥',
    protein: 20,
    carb: 48,
    fat: 30,
    cal: 600,
    integrity: '닭고기 프로틴',
    proteinImgUrl:
      'https://user-images.githubusercontent.com/59330828/119790527-f8d3a780-bf0e-11eb-89d2-6aed96d7088d.png',
    largeImgUrl:
      'https://user-images.githubusercontent.com/59330828/119785395-1fdbaa80-bf0a-11eb-831c-8bebfe995627.png',
    smallImgUrl:
      'https://user-images.githubusercontent.com/59330828/120132399-4436d000-c205-11eb-8e3c-7891f050151e.png',
  },
  {
    id: 'meal_3',
    title: '비건용 식물성 고기 야채 볶음과 두부면 파스타',
    protein: 30,
    carb: 15,
    fat: 25,
    cal: 700,
    integrity: '생선 프로틴',
    proteinImgUrl:
      'https://user-images.githubusercontent.com/59330828/119790537-fa04d480-bf0e-11eb-9612-a9784196857d.png',
    largeImgUrl:
      'https://user-images.githubusercontent.com/59330828/119785409-210cd780-bf0a-11eb-9983-842667838a45.png',
    smallImgUrl:
      'https://user-images.githubusercontent.com/59330828/120132404-46992a00-c205-11eb-8b1b-cbc1872864cb.png',
  },
  {
    id: 'meal_4',
    title: '비건용 식물성 고기 야채 볶음과 두부면 파스타',
    protein: 15,
    carb: 36,
    fat: 25,
    cal: 410,
    integrity: '식물성 프로틴',
    proteinImgUrl:
      'https://user-images.githubusercontent.com/59330828/119790544-fbce9800-bf0e-11eb-845a-8f5454cf1e1e.png',
    largeImgUrl:
      'https://user-images.githubusercontent.com/59330828/119785418-22d69b00-bf0a-11eb-986a-f449967abd02.png',
    smallImgUrl:
      'https://user-images.githubusercontent.com/59330828/120132409-47ca5700-c205-11eb-9df3-425e2ad58bc7.png',
  },
];

// SNACK 정보
export const snackInfo = [
  {
    id: 'snack_0',
    title: '식물성 프로틴 미니볼 (초코,흑임자,바닐라 맛)',
    protein: 13,
    carb: 16,
    fat: 25,
    cal: 410,
    integrity: '식물성 프로틴',
    proteinImgUrl:
      'https://user-images.githubusercontent.com/59330828/119790544-fbce9800-bf0e-11eb-845a-8f5454cf1e1e.png',
    largeImgUrl:
      'https://user-images.githubusercontent.com/59330828/119785436-279b4f00-bf0a-11eb-8a96-1d6772a0aae4.png',
    smallImgUrl:
      'https://user-images.githubusercontent.com/59330828/120132415-49941a80-c205-11eb-87ce-e958df5e3346.png',
  },
  {
    id: 'snack_1',
    title: '프로틴 파우더와 오트밀로 만든 피칸+월넛 머핀',
    protein: 35,
    carb: 12,
    fat: 24,
    cal: 480,
    integrity: '돼지고기 프로틴',
    proteinImgUrl:
      'https://user-images.githubusercontent.com/59330828/119790521-f709e400-bf0e-11eb-8853-149c1324b638.png',
    largeImgUrl:
      'https://user-images.githubusercontent.com/59330828/119785448-29651280-bf0a-11eb-8604-a3d5b97eb554.png',
    smallImgUrl:
      'https://user-images.githubusercontent.com/59330828/120132420-4b5dde00-c205-11eb-98b4-bb57a5e6ca44.png',
  },
  {
    id: 'snack_2',
    title: '식물성 프로틴 바닐라빈 라즈베리 스콘',
    protein: 40,
    carb: 28,
    fat: 30,
    cal: 600,
    integrity: '닭고기 프로틴',
    proteinImgUrl:
      'https://user-images.githubusercontent.com/59330828/119790527-f8d3a780-bf0e-11eb-89d2-6aed96d7088d.png',
    largeImgUrl:
      'https://user-images.githubusercontent.com/59330828/119785461-2b2ed600-bf0a-11eb-9db0-41cd77f2486f.png',
    smallImgUrl:
      'https://user-images.githubusercontent.com/59330828/120132424-4d27a180-c205-11eb-8312-0b36e70f7087.png',
  },
  {
    id: 'snack_3',
    title: '두부 밀크 프로틴 푸딩과 식물성 생크림',
    protein: 45,
    carb: 25,
    fat: 15,
    cal: 700,
    integrity: '생선 프로틴',
    proteinImgUrl:
      'https://user-images.githubusercontent.com/59330828/119790537-fa04d480-bf0e-11eb-9612-a9784196857d.png',
    largeImgUrl:
      'https://user-images.githubusercontent.com/59330828/119785465-2cf89980-bf0a-11eb-842a-534771308f6f.png',
    smallImgUrl:
      'https://user-images.githubusercontent.com/59330828/120132425-4e58ce80-c205-11eb-98e1-f3480a7e886a.png',
  },
  {
    id: 'snack_4',
    title: '프로틴 파우더 오트밀 팬케익과 메이플시럽',
    protein: 45,
    carb: 26,
    fat: 35,
    cal: 410,
    integrity: '소고기 프로틴',
    proteinImgUrl:
      'https://user-images.githubusercontent.com/59330828/119790514-f5402080-bf0e-11eb-90d2-ef9b50929b3e.png',
    largeImgUrl:
      'https://user-images.githubusercontent.com/59330828/119785472-2ec25d00-bf0a-11eb-8885-7d8665c17988.png',
    smallImgUrl:
      'https://user-images.githubusercontent.com/59330828/120132429-4f89fb80-c205-11eb-9566-ba986925906d.png',
  },
];

// 개인정보
export const userData = [
  {
    id: 0,
    emial: 'test@gmail.com',
    name: '테스트',
    address: '서울시 강동구 올림픽아파트 103동 1201호',
    protein: '소고기 프로틴',
    freq: 5,
    terms: 2,
    startDate: '',
    endDate: '',
    amountPaymont: 100,
  },
];
