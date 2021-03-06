import React, { useCallback, useEffect, useState } from 'react';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Header from '../components/Common/Header';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import {
  AddressInput,
  AddressSettingContainer,
  RecentAddress,
  RecentAddressList,
} from '../components/Subscribe/styles';
import { RootState } from '../reducers';
import { Link } from 'react-router-dom';

const AddressPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { mainAddress, detailAddress } = useSelector(
    ({ address }: RootState) => ({
      mainAddress: address.mainAddress,
      detailAddress: address.detailAddress,
    }),
  );

  return (
    <>
      <Header pathname="/subscribe">
        <LeftIcon />
        <h3>배송지 입력</h3>
        <p></p>
      </Header>

      <AddressSettingContainer>
        <Link to="set-address">
          <AddressInput>
            <p>지번, 도로면, 건물명을 입력해 주세요</p>
          </AddressInput>
        </Link>

        {mainAddress || detailAddress ? (
          <RecentAddress>
            <h4>최근 배송지</h4>
            <RecentAddressList>
              <li>
                <Link to="/subscribe">
                  <p>{detailAddress}</p>
                  <p>{mainAddress}</p>
                </Link>
              </li>
            </RecentAddressList>
          </RecentAddress>
        ) : (
          <h4>최근 배송지</h4>
        )}
      </AddressSettingContainer>
    </>
  );
};

export default AddressPage;
