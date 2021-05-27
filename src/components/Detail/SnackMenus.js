import React from 'react';
import MenuCard from './MenuCard';
import { snackInfo } from '../../utils/data';

import './SnackMenus.scss';
import { Link } from 'react-router-dom';

const SnackMenus = () => {
  if (!snackInfo) {
    return <div>로딩중..</div>;
  }

  return (
    <div className="SnackCarsdContainer">
      {snackInfo.map((snack) => {
        return (
          <Link key={snack.id} to={`/menu-detail/${snack.id}`}>
            <MenuCard>
              <img src={snack.imgUrl} alt="MenuImage" />
              <p>
                프로틴:{snack.protein}g | 탄수화물:{snack.carb}g
              </p>
              <h2>{snack.title}</h2>
            </MenuCard>
          </Link>
        );
      })}
    </div>
  );
};

export default SnackMenus;
