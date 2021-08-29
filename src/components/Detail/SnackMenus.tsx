import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ITotalSnackInfo } from 'types/ITotalSnackInfo';
import { RootState } from 'reducers';
import MenuCard from './MenuCard';
import { SnackCarsdContainer } from './styles';

const SnackMenus = () => {
  const { totalSnackInfo } = useSelector(({ food }: RootState) => ({
    totalSnackInfo: food.totalSnackInfo,
  }));

  if (!totalSnackInfo) {
    return <div>로딩중..</div>;
  }

  return (
    <SnackCarsdContainer>
      {totalSnackInfo.map((snack: ITotalSnackInfo) => {
        return (
          <Link key={snack.id} to={`/menu-detail/${snack.id}`}>
            <MenuCard food={snack} />
          </Link>
        );
      })}
    </SnackCarsdContainer>
  );
};

export default SnackMenus;
