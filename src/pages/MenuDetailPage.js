import React, { useEffect } from 'react';
import './MenuDetailPage.scss';
import { useLocation } from 'react-router';
import LargeMeal_02 from '../assets/images/large/Large_Meal_02.png';
import DoughnutGraph from '../components/Common/DoughnutGraph';
import { ReactComponent as FishProtein } from '../assets/images/ingredients/Fish_Protein.svg';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';

const MenuDetailPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="MenuDetailPage">
      <div className="MenuDetailContainer">
        <div className="MenuCategories">
          <ul>
            <li className="MenuImg">
              <div></div>
            </li>
            <li className="MenuImg">
              <div></div>
            </li>
            <li className="MenuImg">
              <div></div>
            </li>
            <li className="MenuImg">
              <div></div>
            </li>
            <li className="MenuImg">
              <div></div>
            </li>
            <li className="MenuImg">
              <div></div>
            </li>
            <li className="MenuImg">
              <div></div>
            </li>
          </ul>
        </div>
        <div className="MenuInfo">
          <img src={LargeMeal_02} alt="Menu Img" />
          <div className="MenuDetail">
            <h3>헬밀P 프로틴</h3>
            <h2>데리야끼 연어 스테이크와 그린빈 볶음 그리고 퀴노아</h2>
            <div className="MenuIntegrity">
              <div className="MenuCalorie">
                <p className="Calorie">510</p>
                <p className="CalorieText">칼로리</p>
              </div>
              <div className="Gap"></div>
              <div className="MenuProtein">
                <FishProtein />
                <p className="ProteinText">프리미엄 단백질</p>
              </div>
            </div>
            <div className="MenuNutrient">
              <div className="DoughnutContainer">
                <DoughnutGraph ingredient="단백질" amount="36" />
              </div>
              <div className="DoughnutContainer">
                <DoughnutGraph ingredient="지방" amount="15" />
              </div>
              <div className="DoughnutContainer">
                <DoughnutGraph ingredient="탄수화물" amount="10" />
              </div>
            </div>
          </div>
          <Link to="/subscribe-option">
            <Button>루틴 시작하기</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuDetailPage;
