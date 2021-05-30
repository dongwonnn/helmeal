import React, { useEffect, useState } from 'react';
import './MenuDetailPage.scss';
import { useLocation } from 'react-router';
import DoughnutGraph from '../components/Common/DoughnutGraph';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFoodKinds, getParamsId } from '../utils/getParamsId';

const MenuDetailPage = ({ match }) => {
  const { id } = match.params;

  const [currentMeal, setCurrentMeal] = useState(null);

  const { totalMealInfo, totalSnackInfo } = useSelector(({ food }) => ({
    totalMealInfo: food.totalMealInfo,
    totalSnackInfo: food.totalSnackInfo,
  }));

  useEffect(() => {
    if (getFoodKinds(id) === 'meal') {
      setCurrentMeal(totalMealInfo[getParamsId(id)]);
    } else {
      setCurrentMeal(totalSnackInfo[getParamsId(id)]);
    }
  }, [id, totalMealInfo, totalSnackInfo]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (currentMeal === null) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="MenuDetailPage">
      <div className="MenuDetailContainer">
        <div className="MenuCategories">
          <ul>
            {totalMealInfo.map((meal) => (
              <Link to={`/menu-detail/${meal.id}`} key={meal.id}>
                <li className="MenuImg">
                  <div></div>
                </li>
              </Link>
            ))}
            {totalSnackInfo.map((snack) => (
              <Link to={`/menu-detail/${snack.id}`} key={snack.id}>
                <li className="MenuImg">
                  <div></div>
                </li>
              </Link>
            ))}
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
