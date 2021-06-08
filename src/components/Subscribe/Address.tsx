import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducers';
import {
  AddressButton,
  AddressButtonContainer,
  AddressContainer,
  AddressInfoContainer,
} from './styles';

const Address = () => {
  const { mainAddress, detailAddress } = useSelector(
    ({ address }: RootState) => ({
      mainAddress: address.mainAddress,
      detailAddress: address.detailAddress,
    }),
  );

  return (
    <AddressContainer>
      {detailAddress ? (
        <AddressInfoContainer>
          <p>{detailAddress}</p>
          <Link to="/address">
            <AiOutlineClose />
          </Link>
        </AddressInfoContainer>
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

export default Address;
