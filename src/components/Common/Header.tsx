import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router';
import './Header.scss';

interface HeaderProps{
  children: JSX.Element[];
  pathname: string;
}

const Header :FC<HeaderProps> = ({ children, pathname}) => {
  const [leftArrow, title, side] = children;

  const history = useHistory();

  const onBackPage = useCallback(() => {
    history.push(pathname);
  }, [history,pathname]);

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
