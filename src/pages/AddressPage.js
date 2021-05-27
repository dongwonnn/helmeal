import React, { useCallback, useEffect, useState } from 'react';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Header from '../components/Common/Header';
import { useLocation } from 'react-router';
import './AddressPage.scss';
import PostCode from '../components/Address/PostCode';
import { useSelector } from 'react-redux';

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
    <div className="AddressPage">
      <Header>
        <LeftIcon />
        <h3>배송지 입력</h3>
        <p></p>
      </Header>
      {showPostCode ? (
        <PostCode setShowPostCode={setShowPostCode} />
      ) : (
        <div className="AddressContainer">
          <div className="AddressInput" onClick={onShowPostCode}>
            <p>지번, 도로면, 건물명을 입력해 주세요</p>
          </div>
          {mainAddress || detailAddress ? (
            <div className="RecentAddress">
              <h4>최근 배송지</h4>
              <ul className="RecentAddressList">
                <li>
                  <p>{detailAddress}</p>
                  <p>{mainAddress}</p>
                </li>
                <li>
                  <p>{detailAddress}</p>
                  <p>{mainAddress}</p>
                </li>
                <li>
                  <p>{detailAddress}</p>
                  <p>{mainAddress}</p>
                </li>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
};

export default AddressPage;
