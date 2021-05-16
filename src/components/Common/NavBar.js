import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import Divider from './Divider';

import { ReactComponent as Home } from '../..//assets/images/Home.svg';
import { ReactComponent as Routine } from '../../assets/images/Routine.svg';
import { ReactComponent as Profile } from '../../assets/images/Profile.svg';

const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <Divider />
      <ul className="NavBar">
        <li>
          <Link to="/">
            <Home />
            <p>홈</p>
          </Link>
        </li>
        <li>
          <Link to="/detail">
            <Routine />
            <p>루틴시작</p>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <Profile />
            <p>마이페이지</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
