import React from 'react';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Header from '../components/Common/Header';
import './AddressPage.scss';

const AddressPage = () => {
  return (
    <div className="AddressPage">
      <Header>
        <LeftIcon />
        <h3>배송지 입력</h3>
        <p></p>
      </Header>
    </div>
  );
};

export default AddressPage;
