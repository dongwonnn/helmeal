import React, { FC } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import Home from '../../assets/images/Home.svg';
import Routine from '../../assets/images/Routine.svg';
import ColorRoutine from '../../assets/images/ColorRoutine.svg';
import Profile from '../../assets/images/Profile.svg';

interface NavBarProps {
  path: string;
}

const NavBar:FC<NavBarProps> = ({ path }) => {
  return (
    <ul className="NavBarContainer">
      <li className={path === '/' ? 'Cliked' : ''}>
        <Link to="/">
          <img src={Home} alt="Home" />
          <p>홈</p>
        </Link>
      </li>
      <li className={path === '/detail' ? 'DetailClick' : ''}>
        <Link to="/detail">
          {path === '/detail' ? (
            <img src={ColorRoutine} alt="Detail" />
          ) : (
            <img src={Routine} alt="Detail" />
          )}
          <p>루틴시작</p>
        </Link>
      </li>
      <li className={path === '/profile' ? 'Cliked' : ''}>
        <Link to="/profile">
          <img src={Profile} alt="Profile" />
          <p>마이페이지</p>
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
