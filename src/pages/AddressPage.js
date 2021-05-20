import React, { useEffect } from 'react';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Header from '../components/Common/Header';
import { useLocation } from 'react-router';
import './AddressPage.scss';

const AddressPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="AddressPage">
      <Header>
        <LeftIcon />
        <h3>배송지 입력</h3>
        <p></p>
      </Header>
      <div className="AddressContainer">
        <input
          className="AddressInput"
          tyte="text"
          placeholder="지번, 도로면, 건물명을 입력해 주세요"
        />
      </div>
    </div>
  );
};

export default AddressPage;
