# REST API

HTTP 요청 리스트(ajax)

## 로그인

### POST /users/login

- 로그인
- body: { email: string(이메일), password: string(비밀번호) }
- return: user 정보

### GET /users

- 내 로그인 정보를 가져옴, 로그인되어있지 않으면 false
- return: IUser | false

### POST /users

- 회원가입
- body: { email: string(이메일), nickname: string(닉네임), password: string(비밀번호) }
- return: 'ok'

### POST /users/logout

- 로그아웃
- return: 'ok'

## 식사 / 간식 데이터

### GET / meal

- 식사 정보 가져오기
- return: { name: string(식사 이름), protein: number(프로틴 양), carb: number(탄수화물 양), fat: number(지방 양), cal: number( 칼로리 양), ingredient: string(소고기 프로틴, 돼지고기 프로틴...), imgUrl: stirng(이미지 url)}

### GET / snack

- 간식 정보 가져오기
- return: { name: string(간식 이름), protein: number(프로틴 양), carb: number(탄수화물 양), fat: number(지방 양), cal: number( 칼로리 양), ingredient: string(소고기 프로틴, 돼지고기 프로틴...), imgUrl: stirng(이미지 url)}

## 구독 옵션

### POST / subscribe/option

- 구독 옵션 선택
- body : { ingredent: string(성분), date: string(주 2/3/5회), cost: number(주 비용), term: string(1주, 2주..), deliveryStart: string(2021~2022), totalPlrice: number(총 결제 금액)}

## 프로필

### POST / address

- 주소 설정
- body: { address: string( 주소 )}

### GET / profile

- 개인 정보 가져오기
- return : {구독옵션, 주소}
