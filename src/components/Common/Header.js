import React from 'react';
import './Header.scss';
// height : 48px

const Header = ({ children }) => {
  const [leftArrow, title, side] = children;

  return (
    <div className="HeaderContainer">
      <div className="LeftArrow">{leftArrow}</div>
      <div className="Side">{side}</div>
      <div className="Title">{title}</div>
    </div>
  );
};

export default Header;
