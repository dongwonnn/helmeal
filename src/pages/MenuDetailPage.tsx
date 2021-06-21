import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import MenuCategories from '../components/MenuDetail/MenuCategories';
import { ITotalMealInfo } from '../types/ITotalMealInfo';
import MenuInfo from '../components/MenuDetail/MenuInfo';
import { getFoodKinds, getParamsId } from '../utils/getParamsId';

import {
  MenuDetailContainer,
  MenuDetailPageContainer,
} from '../components/MenuDetail/styles';
import { RootState } from '../reducers';

interface ParamTypes {
  id: string;
}

const MenuDetailPage = () => {
  const history = useHistory();
  const { id } = useParams<ParamTypes>();
  const { pathname } = useLocation();

  const [locationKeys, setLocationKeys] = useState<any[]>([]);

  const [currentMeal, setCurrentMeal] = useState<ITotalMealInfo | null>(null);

  const { totalMealInfo, totalSnackInfo } = useSelector(
    ({ food }: RootState) => ({
      totalMealInfo: food.totalMealInfo,
      totalSnackInfo: food.totalSnackInfo,
    }),
  );

  useEffect(() => {
    if (getFoodKinds(id) === 'meal') {
      setCurrentMeal(totalMealInfo[getParamsId(id)]);
    } else {
      setCurrentMeal(totalSnackInfo[getParamsId(id)]);
    }
  }, [id, totalMealInfo, totalSnackInfo, setCurrentMeal]);

  useEffect(() => {
    // 뒷정리 함수
    return history.listen((location) => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key]);
      }

      if (history.action === 'POP') {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (currentMeal === null) {
    return <div>로딩중...</div>;
  }

  return (
    <MenuDetailPageContainer>
      <MenuDetailContainer>
        <MenuCategories
          totalMealInfo={totalMealInfo}
          totalSnackInfo={totalSnackInfo}
          curUrl={history.location.pathname}
        />
        <MenuInfo currentMeal={currentMeal} />
      </MenuDetailContainer>
    </MenuDetailPageContainer>
  );
};

export default MenuDetailPage;
