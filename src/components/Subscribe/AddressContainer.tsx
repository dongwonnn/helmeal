import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './AddressContainer.scss';

const AddressContainer = () => {
  const { mainAddress, detailAddress } = useSelector(({ address }) => ({
    mainAddress: address.mainAddress,
    detailAddress: address.detailAddress,
  }));

  return (
    <div className="AddressContainer">
      {detailAddress ? (
        <div className="AddressInfo">
          <p>
            {detailAddress}
            {mainAddress}
          </p>
        </div>
      ) : (
        <>
          <p>배송지 정보가 없습니다.</p>
          <div className="AddressButtonContainer">
            <div className="AddressButton">
              <Link to="/address">배송지 입력하기</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddressContainer;
