import React from 'react';
import './MealMenus.scss';
import MenuCard from './MenuCard';
import LargeMeal_02 from '../../assets/images/large/Large_Meal_02.png';
import { Link } from 'react-router-dom';

const MealMenus = () => {
  return (
    <div className="MealMenusContainer">
      <div className="MenuCarsdContainer">
        <Link to="/menu-detail">
          <MenuCard>
            <img src={LargeMeal_02} alt="MenuImage" />
            <p>프로틴:38g | 탄수화물:38g </p>
            <h2>데리야끼 연어 스테이크와 그린빈 볶음 그리고 퀴노아</h2>
          </MenuCard>
        </Link>

        <Link to="/menu-detail">
          <MenuCard>
            <img src={LargeMeal_02} alt="MenuImage" />
            <p>프로틴:38g | 탄수화물:38g </p>
            <h2 className="MenuTtitle">
              미니 양배추 볶음 소고기 미트볼 밀 크림 파스타
            </h2>
          </MenuCard>
        </Link>
        <Link to="/menu-detail">
          <MenuCard>
            <img src={LargeMeal_02} alt="MenuImage" />
            <p>프로틴:38g | 탄수화물:38g </p>
            <h2>두부 샐러드와 브로콜리 오리엔탈 드래싱과 오트밀 밥</h2>
          </MenuCard>
        </Link>
        <Link to="/menu-detail">
          <MenuCard>
            <img src={LargeMeal_02} alt="MenuImage" />
            <p>프로틴:38g | 탄수화물:38g </p>
            <h2>비건용 식물성 고기 야채 볶음과 부면 파스타</h2>
          </MenuCard>
        </Link>
        <Link to="/menu-detail">
          <MenuCard>
            <img src={LargeMeal_02} alt="MenuImage" />
            <p>프로틴:38g | 탄수화물:38g </p>
            <h2>새우 브로콜리 단호박 볶음과 흑미 검은콩 볶음밥</h2>
          </MenuCard>
        </Link>
      </div>
    </div>
  );
};

export default MealMenus;
