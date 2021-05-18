import React from 'react';
import './MenuCard.scss';

const MenuCard = ({ children }) => {
  const [menuImg, detail, menu] = children;
  return (
    <div className="MenuCardContainer">
      {menuImg}
      {detail}
      {menu}
    </div>
  );
};

export default MenuCard;
