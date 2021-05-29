import React, { useEffect, useState } from 'react';
import './MenuDetailPage.scss';
import { useLocation } from 'react-router';
import DoughnutGraph from '../components/Common/DoughnutGraph';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MenuDetailPage = ({ match }) => {
  const { id } = match.params;

  const { totalMealInfo } = useSelector(({ food }) => ({
    totalMealInfo: food.totalMealInfo,
  }));

  const [currentMeal] = useState(totalMealInfo[id]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (currentMeal === undefined) {
    return <div>로딩중...</div>;
  }

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
          <img src={currentMeal.imgUrl} alt="Menu Img" className="MainImg" />
          <div className="MenuDetail">
            <h3>헬밀P 프로틴</h3>
            <h2>{currentMeal.title}</h2>
            <div className="MenuIntegrity">
              <div className="MenuCalorie">
                <p className="Calorie">{currentMeal.cal}</p>
                <p className="CalorieText">칼로리</p>
              </div>
              <div className="Gap"></div>
              <div className="MenuProtein">
                <img src={currentMeal.proteinImgUrl} alt="Integrity" />
                <p className="ProteinText">{currentMeal.integrity}</p>
              </div>
            </div>
            <div className="MenuNutrient">
              <div className="DoughnutContainer">
                <DoughnutGraph
                  ingredient="단백질"
                  amount={currentMeal.protein}
                />
              </div>
              <div className="DoughnutContainer">
                <DoughnutGraph ingredient="지방" amount={currentMeal.fat} />
              </div>
              <div className="DoughnutContainer">
                <DoughnutGraph
                  ingredient="탄수화물"
                  amount={currentMeal.carb}
                />
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
