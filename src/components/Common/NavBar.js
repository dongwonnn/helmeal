import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import Home from '../../assets/images/Home.svg';
import Routine from '../../assets/images/Routine.svg';
import ColorRoutine from '../../assets/images/ColorRoutine.svg';
import Profile from '../../assets/images/Profile.svg';

const NavBar = () => {
  const [isHomeClicked, setIsHomeClicked] = useState(true);
  const [isDetailClicked, setIsDetailClicked] = useState(false);
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const onClickHome = (e) => {
    setIsHomeClicked(true);
    setIsDetailClicked(false);
    setIsProfileClicked(false);
  };

  const onClickDetail = (e) => {
    setIsHomeClicked(false);
    setIsDetailClicked(true);
    setIsProfileClicked(false);
  };

  const onClickProfile = (e) => {
    setIsHomeClicked(false);
    setIsDetailClicked(false);
    setIsProfileClicked(true);
  };

  return (
    <ul className="NavBarContainer">
      <li onClick={onClickHome} className={`${isHomeClicked ? 'Cliked' : ''}`}>
        <Link to="/">
          <img src={Home} alt="Home" />
          <p>홈</p>
        </Link>
      </li>
      <li
        onClick={onClickDetail}
        className={`${isDetailClicked ? 'DetailClick' : ''}`}
      >
        <Link to="/detail">
          {isDetailClicked ? (
            <img src={ColorRoutine} alt="Detail" />
          ) : (
            <img src={Routine} alt="Detail" />
          )}
          <p>루틴시작</p>
        </Link>
      </li>
      <li
        onClick={onClickProfile}
        className={`${isProfileClicked ? 'Cliked' : ''}`}
      >
        <Link to="/profile">
          <img src={Profile} alt="Profile" />
          <p>마이페이지</p>
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
