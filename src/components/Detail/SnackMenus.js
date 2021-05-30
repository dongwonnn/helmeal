import React from 'react';
import MenuCard from './MenuCard';

import './SnackMenus.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SnackMenus = () => {
  const { totalSnackInfo } = useSelector(({ food }) => ({
    totalSnackInfo: food.totalSnackInfo,
  }));

  if (!totalSnackInfo) {
    return <div>로딩중..</div>;
  }

  return (
    <div className="SnackCarsdContainer">
      {totalSnackInfo.map((snack) => {
        return (
          <Link key={snack.id} to={`/menu-detail/${snack.id}`}>
            <MenuCard food={snack} />
          </Link>
        );
      })}
    </div>
  );
};

export default SnackMenus;
