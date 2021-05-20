import React from 'react';
import { Link } from 'react-router-dom';
// import AddressButton from '../Common/AddressButton';
import './AddressContainer.scss';

const AddressContainer = () => {
  return (
    <div className="AddressContainer">
      <div className="AddressInfo">
        <p>배송지 정보가 없습니다.</p>
        <div className="AddressButtonContainer">
          <div className="AddressButton">
            <Link to="/">배송지 입력하기</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressContainer;
