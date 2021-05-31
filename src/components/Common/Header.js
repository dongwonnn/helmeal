import React from 'react';
import './Header.scss';
// height : 48px

const Header = ({ children }) => {
  const [leftArrow, title, side] = children;

  return (
    <header className="HeaderContainer">
      <div className="LeftArrow">{leftArrow}</div>
      <div className="Side">{side}</div>
      <div className="Title">{title}</div>
    </header>
  );
};

export default Header;
