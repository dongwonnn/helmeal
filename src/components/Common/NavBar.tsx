import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Home from 'assets/images/Home.svg';
import Routine from 'assets/images/Routine.svg';
import ColorRoutine from 'assets/images/ColorRoutine.svg';
import Profile from 'assets/images/Profile.svg';
import { NavBarContainer, ListContainer } from './styles';

interface NavBarProps {
  path: string;
}

const NavBar: FC<NavBarProps> = ({ path }) => {
  return (
    <NavBarContainer>
      <ListContainer clicked={path === '/'} detailClicked={false}>
        <Link to="/">
          <img src={Home} alt="Home" />
          <p>홈</p>
        </Link>
      </ListContainer>
      <ListContainer clicked={path === '/detail'} detailClicked={true}>
        <Link to="/detail">
          {path === '/detail' ? (
            <img src={ColorRoutine} alt="Detail" />
          ) : (
            <img src={Routine} alt="Detail" />
          )}
          <p>루틴시작</p>
        </Link>
      </ListContainer>
      <ListContainer clicked={path === '/profile'} detailClicked={false}>
        <Link to="/profile">
          <img src={Profile} alt="Profile" />
          <p>마이페이지</p>
        </Link>
      </ListContainer>
    </NavBarContainer>
  );
};

export default NavBar;
