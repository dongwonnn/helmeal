### 1. Navbar 컴포넌트

#### 페이지 컴포넌트

`history.location.pathname`를 이용해 현재 페이지의 경로를 `Navbar` 컴포넌트로 전달합니다.

```javascript
<NavBar path={history.location.pathname} />
```

#### Navbar 컴포넌트

1. `<Link>`태그를 이용해 페이지 이동 처리를 했습니다.
2. `clicked` 변수는 현재 페이지를 클릭했는 지 판단하는 `boolean`형 변수입니다.
3. `styled-components`에서 `clicked` 변수를 이용해 클릭 시 색 변화를 표현했습니다. `detailClicked`는 svg파일을 위한 변수입니다.

```javascript
const NavBar: FC<NavBarProps> = ({ path }) => {
  return (
    <NavBarContainer>
      <ListContainer clicked={path === '/'} detailClicked={false}>
        <Link to="/">
          <img src={Home} alt="Home" />
          <p>홈</p>
        </Link>
      </ListContainer>
      <ListContainer clicked={path === '/detail'} detailClicked={true}>
        <Link to="/detail">
          {path === '/detail' ? (
            <img src={ColorRoutine} alt="Detail" />
          ) : (
            <img src={Routine} alt="Detail" />
          )}
          <p>루틴시작</p>
        </Link>
      </ListContainer>
      <ListContainer clicked={path === '/profile'} detailClicked={false}>
        <Link to="/profile">
          <img src={Profile} alt="Profile" />
          <p>마이페이지</p>
        </Link>
      </ListContainer>
    </NavBarContainer>
  );
};
```

### 2. Header 컴포넌트

#### 페이지 컴포넌트

헤더는 이전 페이지 이동, title, side 기능 3가지 요소가 있습니다. 아래의 페이지의 이전 페이지는 `homepage`이므로 `Header` 컴포넌트에 `home url`을 전달, 3가지 요소를 `children`으로 전달했습니다.

```javascript
// DetailPage
<Header pathname="/">
  <LeftIcon /> // 뒤로가기 icon
  <h3>헬밀 프로틴</h3>
  <ShareLogo />
</Header>
```

#### 3. 헤더 컴포넌트

1. 뒤로가기 로고를 클릭했을 때 전달받은 `pathname`으로 이동하는 이벤트 함수입니다.

```javascript
const history = useHistory();

const onBackPage = useCallback(() => {
  history.push(pathname);
}, [history, pathname]);

return (
  <HeaderContainerStyle>
    <LeftArrow onClick={onBackPage}>{leftArrow}</LeftArrow>
    <Side>{side}</Side>
    <Title>{title}</Title>
  </HeaderContainerStyle>
);
```

#### HomePage 컴포넌트

#### 비디오 컴포넌트

1. 비디오 태그와 속성을 이용해 자동 재생되게 설정했습니다.
   구글에서 `autoplay` 속성 이슈를 막기 위해 `muted` 설정으로 해결했고, `loop`를 이용해 무한반복 기능을 구현했습니다.

```javascript
const VideoContainer = () => {
  return (
    <VideoStyle>
      <video autoPlay muted loop>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </VideoStyle>
  );
};
```

#### Article 컴포넌트

텍스트 문서들을 재사용하기 위해 스타일을 지정한 컴포넌트 입니다.

#### Backgroud 스타일링

이미지 보단 백그라운드라고 판단, css의 `background`를 이용해 디자인했습니다.

### 4. DetailPage

#### SelectMenu 컴포넌트

1. 식사/간식을 구분해 보여주기 위한 컴포넌트입니다.
2. `isMeal`는 식사 / 간식을 구분하는 `boolean`형 타입 변수입니다.

```javascript
  const onClickMeal = useCallback(() => {
    setIsMeal(true);
  }, [setIsMeal]);

  const onClickSnack = useCallback(() => {
    setIsMeal(false);
  }, [setIsMeal]);

  return (
      <SelectMenu
        onClickMeal={onClickMeal}
        onClickSnack={onClickSnack}
        isMeal={isMeal}
      />
      {isMeal ? (
        <>
          <MealCategories />
          <MealMenus />
        </>
      ) : (
        <SnackMenus />
      )}
};

```
