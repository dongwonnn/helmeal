import React, { useEffect, useState } from 'react';
import SubscribeDropdown from '../components/Subscribe/SubscribeDropdown';
import OrderInfos from '../components/Subscribe/OrderInfos';
import TotalPay from '../components/Subscribe/TotalPay';
import Header from '../components/Common/Header';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import './SubscribeOptionPage.scss';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';
import { Redirect, useLocation } from 'react-router';
import { useSelector } from 'react-redux';

const SubscribeOptionPage = () => {
  const [canSelectOption, setCanSelectOption] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { user } = useSelector(({ auth }) => ({
    user: auth.user,
  }));

  if (!user) {
    return <Redirect to={{ pathname: '/login', state: { from: pathname } }} />;
  }

  return (
    <div className="SubscribeOptionPage">
      {canSelectOption ? (
        <>
          <Header>
            <LeftIcon />
            <h3>구독 옵션 선택</h3>
            <p></p>
          </Header>
          <SubscribeDropdown setCanSelectOption={setCanSelectOption} />
        </>
      ) : (
        <>
          <Header>
            <LeftIcon />
            <h3>구독 옵션 선택</h3>
            <p>선택취소</p>
          </Header>
          <div className="OrderInfoContainer">
            <OrderInfos />
            <TotalPay />
          </div>
          <div className="ButtonContainer">
            <Link to="/subscribe">
              <Button>바로 구매</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SubscribeOptionPage;
