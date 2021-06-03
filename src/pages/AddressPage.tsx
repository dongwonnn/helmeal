import React, { useCallback, useEffect, useState } from 'react';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Header from '../components/Common/Header';
import { useLocation } from 'react-router';
import PostCode from '../components/Address/PostCode';
import { useSelector } from 'react-redux';
import { AddressInput, AddressSettingContainer, RecentAddress, RecentAddressList } from '../components/Subscribe/styles';

const AddressPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { mainAddress, detailAddress } = useSelector(({ address }) => ({
    mainAddress: address.mainAddress,
    detailAddress: address.detailAddress,
  }));

  const [showPostCode, setShowPostCode] = useState(false);

  const onShowPostCode = useCallback(() => {
    setShowPostCode((prev) => !prev);
  }, []);

  return (
    <div>
      <Header pathname="/">
        <LeftIcon />
        <h3>배송지 입력</h3>
        <p></p>
      </Header>
      {showPostCode ? (
        <PostCode setShowPostCode={setShowPostCode} />
      ) : (
        <AddressSettingContainer>
          <AddressInput onClick={onShowPostCode}>
            <p>지번, 도로면, 건물명을 입력해 주세요</p>
          </AddressInput>
          {mainAddress || detailAddress ? (
            <RecentAddress>
              <h4>최근 배송지</h4>
              <RecentAddressList>
                <li>
                  <p>{detailAddress}</p>
                  <p>{mainAddress}</p>
                </li>
              </RecentAddressList>
            </RecentAddress>
          ) : (
            ''
          )}
        </AddressSettingContainer>
      )}
    </div>
  );
};

export default AddressPage;
