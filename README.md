Healmeal 프로젝트

- SWR
- chart.js
- daum-postcode

## 아직 남은 기능들

- oAuth 인증 방식
- 결제 수단 연동

### HTML, CSS

- [ ] 시맨틱태그 표현

### DetailPage

- [ ] Carousel 추가할 이미지
- [ ] Carousel 상태 색상넣기
- [ ] 프로틴별 Scroll Spy -> API 적용 후에

### Address Page

- [ ] 주소 설정하기
- [ ] 디자인 대로 구현하려면 주소 DB 필요함
- [ ] 최근 3개 까지만 설정하기
- [ ] 현재 주소 체크하기

### Profile Page

- [ ] 시작할 때 로그인 하는데 마이페이지에 로그인/회원가입

### Menu Detail Page

- [ ] 올라오는 팝업 css 구현 -> 보류

### 처리해야 할 것.

- css font size 크기 반응형 구현
- 결제 한 상태에서 또 결제할 때 로직 처리

### TS 적용

- {children} : 그냥 FC 추가
- history: RouteComponentProps 추가 (import)
- location :

```javascript
  import { Location } from 'history';
  import { StaticContext } from 'react-router';

  interface LocationProps{
  // from 사용시
  from : Location;
  }

  const LoginPage = ({ location }:RouteComponentProps<{}, StaticContext, LocationProps>) => {
```

- reducer 관련 velopert
- 객체 타입 - ITotalMealInfo 처럼 만들기
- useSelector 오류 : Default -> any로 치환
