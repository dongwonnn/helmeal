import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducers';
import { AddressButton, AddressButtonContainer, AddressContainer } from './styles';

const Address = () => {
  const { mainAddress, detailAddress } = useSelector(({ address } : RootState) => ({
    mainAddress: address.mainAddress,
    detailAddress: address.detailAddress,
  }));

  return (
    <AddressContainer>
      {detailAddress ? (
          <p>
            {detailAddress}
            {mainAddress}
          </p>
      ) : (
        <>
          <p>배송지 정보가 없습니다.</p>
          <AddressButtonContainer>
            <AddressButton>
              <Link to="/address">배송지 입력하기</Link>
            </AddressButton>
          </AddressButtonContainer>
        </>
      )}
    </AddressContainer>
  );
};

export default Address