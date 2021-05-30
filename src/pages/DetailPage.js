import React, { useEffect, useState } from 'react';

import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import { ReactComponent as ShareLogo } from '../assets/images/ShareLogo.svg';
import LargeMeal_02 from '../assets/images/large/Large_Meal_02.png';

import Carousel from '../components/Common/Carousel';
import MealInfomation from '../components/Detail/MealInfomation';
import Header from '../components/Common/Header';
import MealMenus from '../components/Detail/MealMenus';
import SnackMenus from '../components/Detail/SnackMenus';
import SelectMenu from '../components/Detail/SelectMenu';
import DetailBackground from '../components/Detail/DetailBackground';

import './DetailPage.scss';
import MealCategories from '../components/Detail/MealCategories';
import Button from '../components/Common/Button';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import NavBar from '../components/Common/NavBar';
import { useDispatch } from 'react-redux';
import { currentSnackInfo } from '../reducers/food';
import { snackInfo } from '../utils/data';

const DetailPage = ({ history }) => {
  const [isMeal, setIsMeal] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentSnackInfo(snackInfo));
  }, [dispatch]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="DetailPage">
      <Header>
        <LeftIcon />
        <h3>헬밀 프로틴</h3>
        <ShareLogo />
      </Header>
      <Carousel>
        <img src={LargeMeal_02} alt="LargeMeal_02" />
      </Carousel>
      <MealInfomation />
      <DetailBackground />
      <SelectMenu setIsMeal={setIsMeal} isMeal={isMeal} />
      {isMeal ? (
        <>
          <MealCategories />
          <MealMenus />
        </>
      ) : (
        <SnackMenus />
      )}
      <div className="ButtonContainer">
        <Link to="/subscribe-option">
          <Button>루틴 시작하기</Button>
        </Link>
      </div>
      <NavBar path={history.location.pathname} />
    </div>
  );
};

export default DetailPage;
