import React, { useCallback, useEffect, useState } from 'react';
import './MenuDetailPage.scss';
import { useLocation } from 'react-router';
import DoughnutGraph from '../components/Common/DoughnutGraph';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFoodKinds, getParamsId } from '../utils/getParamsId';
import MenuCategories from '../components/Detail/MenuCategories';
import { AiOutlineClose } from 'react-icons/ai';

const MenuDetailPage = ({ match, history }) => {
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

  const [locationKeys, setLocationKeys] = useState([]);

  useEffect(() => {
    // 뒷정리 함수
    return history.listen((location) => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key]);
      }

      if (history.action === 'POP') {
        console.log('현재 위치 키 : ', location.key);
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);

          // 앞으로 가기
        } else {
          setLocationKeys((keys) => [location.key, ...keys]);

          // 뒤로 가기
          history.push('/detail');
        }
      }
    });
  }, [locationKeys, history]);

  const goDetailPage = useCallback(() => {
    history.push('/detail');
  }, [history]);

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
        <MenuCategories
          totalMealInfo={totalMealInfo}
          totalSnackInfo={totalSnackInfo}
          curUrl={history.location.pathname}
        />
        <div className="MenuInfo">
          <div className="MainImageContainer">
            <img
              className="MainImg"
              src={currentMeal.largeImgUrl}
              alt="Menu Img"
            />
            <AiOutlineClose className="CloseButton" onClick={goDetailPage} />
          </div>
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
