import React, { useCallback } from 'react';
import './Header.scss';
// height : 48px

const Header = ({ children, history }) => {
  const [leftArrow, title, side] = children;

  const onBackPage = useCallback(() => {
    history.go(-1);
  }, [history]);

  return (
    <header className="HeaderContainer">
      <div className="LeftArrow" onClick={onBackPage}>
        {leftArrow}
      </div>
      <div className="Side">{side}</div>
      <div className="Title">{title}</div>
    </header>
  );
};

export default Header;
