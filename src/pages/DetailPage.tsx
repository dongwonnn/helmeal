import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import { ReactComponent as ShareLogo } from '../assets/images/ShareLogo.svg';
import LargeMeal_02 from '../assets/images/large/Large_Meal_02.png';

import Carousel from '../components/Common/Carousel';
import Header from '../components/Common/Header';
import MealMenus from '../components/Detail/MealMenus';
import SnackMenus from '../components/Detail/SnackMenus';
import SelectMenu from '../components/Detail/SelectMenu';
import DetailBackground from '../components/Detail/DetailBackground';
import MealCategories from '../components/Detail/MealCategories';
import Button from '../components/Common/Button';
import NavBar from '../components/Common/NavBar';

import { snackInfo } from '../utils/data';
import { useDispatch } from 'react-redux';
import { currentSnackInfo } from '../reducers/food';

import {
  StartButtonContainer,
  DetailPageContainer,
} from '../components/Detail/styles';
import FoodInfomation from '../components/Detail/FoodInfomation';

const DetailPage = () => {
  const [isMeal, setIsMeal] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentSnackInfo(snackInfo));
  }, [dispatch]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onClickMeal = useCallback(() => {
    setIsMeal(true);
  }, [setIsMeal]);

  const onClickSnack = useCallback(() => {
    setIsMeal(false);
  }, [setIsMeal]);

  return (
    <DetailPageContainer>
      <Header pathname="/">
        <LeftIcon />
        <h3>헬밀 프로틴</h3>
        <ShareLogo />
      </Header>
      <Carousel>
        <img src={LargeMeal_02} alt="LargeMeal_02" />
      </Carousel>
      <FoodInfomation />
      <DetailBackground />
      <SelectMenu
        onClickMeal={onClickMeal}
        onClickSnack={onClickSnack}
        isMeal={isMeal}
      />
      {isMeal ? (
        <>
          {/* <MealCategories /> */}
          <MealMenus />
        </>
      ) : (
        <SnackMenus />
      )}
      <StartButtonContainer>
        <Link to="/subscribe-option">
          <Button>루틴 시작하기</Button>
        </Link>
      </StartButtonContainer>
      <NavBar path={pathname} />
    </DetailPageContainer>
  );
};

export default DetailPage;
