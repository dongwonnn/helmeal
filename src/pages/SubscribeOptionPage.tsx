import React, { useCallback, useEffect, useState } from 'react';
import SubscribeDropdown from '../components/Subscribe/SubscribeDropdown';
import OrderInfos from '../components/Subscribe/OrderInfos';
import TotalPay from '../components/Subscribe/TotalPay';
import Header from '../components/Common/Header';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';
import { Redirect, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { ButtonContainer, OrderInfoContainer, SubscribeOptionPageContainer } from '../components/Subscribe/styles'
import { RootState } from '../reducers';

const SubscribeOptionPage = () => {
  const [canSelectOption, setCanSelectOption] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { user } = useSelector(({ auth } : RootState) => ({
    user: auth.user,
  }));

  const onSelectCancle = useCallback(()=>{
    setCanSelectOption(true)
  },[])

  if (!user) {
    return <Redirect to={{ pathname: '/login', state: { from: pathname } }} />;
  }

  return (
    <SubscribeOptionPageContainer>
      {canSelectOption ? (
        <>
          <Header pathname='/detail'>
            <LeftIcon />
            <h3>구독 옵션 선택</h3>
            <p></p>
          </Header>
          <SubscribeDropdown setCanSelectOption={setCanSelectOption} />
        </>
      ) : (
        <>
          <Header pathname='/detail'>
            <LeftIcon/>
            <h3>구독 옵션 선택</h3>
            <p onClick={onSelectCancle}>선택취소</p>
          </Header>
          <OrderInfoContainer>
            <OrderInfos />
            <TotalPay />
          </OrderInfoContainer>
          <ButtonContainer>
            <Link to="/subscribe">
              <Button>바로 구매</Button>
            </Link>
          </ButtonContainer>
        </>
      )}
    </SubscribeOptionPageContainer>
  );
};

export default SubscribeOptionPage;
