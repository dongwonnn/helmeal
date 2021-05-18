import React, { useState } from 'react';

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
import StartRoutine from '../components/Common/StartRoutine';
import MealCategories from '../components/Detail/MealCategories';

const DetailPage = () => {
  const [isMeal, setIsMeal] = useState(true);

  return (
    <div className="DetaiPageContainer">
      <StartRoutine />
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
      <SelectMenu setIsMeal={setIsMeal} />
      {isMeal ? (
        <>
          <MealCategories />
          <MealMenus />
        </>
      ) : (
        <SnackMenus />
      )}
    </div>
  );
};

export default DetailPage;
