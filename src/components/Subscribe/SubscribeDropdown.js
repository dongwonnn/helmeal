import React, { useCallback, useState } from 'react';
import { ReactComponent as LeftIcon } from '../../assets/images/LeftIcon.svg';
import Header from '../Common/Header';
import './SubscribeDropdown.scss';

const SubscribeDropdown = ({ setCanSelectOption }) => {
  // 데이터
  const [proteinInfo, setProteinInfo] = useState('');
  const [dateInfo, setDateInfo] = useState('');
  const [dateInfoPrice, setDateInfoPrice] = useState('');
  const [subscribeTerm, setSubscribeTerm] = useState('');
  const [subscribeTermPrice, setSubscribeTermPrice] = useState('');

  // 드롭박스 상태
  const [isProteinBoxShow, setIsProteinBoxShow] = useState(true);
  const [isDateBoxShow, setIsDateBoxShow] = useState(false);
  const [isTermBoxShow, setIsTermBoxShow] = useState(false);

  const onProteinInfo = useCallback((e) => {
    if (
      // li 제외 클릭했을 때
      e.target.className === 'OptionDetail' ||
      e.target.className === 'OptionMenu'
    ) {
      setProteinInfo(e.target.parentElement.firstChild.innerText);
    } else if (e.target.className === 'Option') {
      // li를 클릭했을 때
      setProteinInfo(e.target.firstChild.innerText);
    }
    setIsProteinBoxShow(false);
    setIsDateBoxShow(true);
  }, []);

  const onDateinInfo = useCallback((e) => {
    if (
      // li 제외 클릭했을 때
      e.target.className === 'OptionDetail' ||
      e.target.className === 'OptionMenu'
    ) {
      setDateInfo(e.target.parentElement.firstChild.innerText);
      setDateInfoPrice(e.target.parentElement.lastChild.innerText);
    } else if (e.target.className === 'Option') {
      // li를 클릭했을 때
      setDateInfo(e.target.firstChild.innerText);
      setDateInfoPrice(e.target.lastChild.innerText);
    }

    setIsDateBoxShow(false);
    setIsTermBoxShow(true);
  }, []);

  const OnSubscribeTerm = useCallback(
    (e) => {
      if (
        // li 제외 클릭했을 때
        e.target.className === 'OptionDetail' ||
        e.target.className === 'OptionMenu'
      ) {
        setSubscribeTerm(e.target.parentElement.firstChild.innerText);
        setSubscribeTermPrice(e.target.parentElement.lastChild.innerText);
      } else if (e.target.className === 'Option') {
        // li를 클릭했을 때
        setSubscribeTerm(e.target.firstChild.innerText);
        setSubscribeTermPrice(e.target.lastChild.innerText);
      }

      setCanSelectOption(false);
    },
    [setCanSelectOption],
  );

  const onChangeMenu = (order) => {
    if (order === 'first') {
      setIsProteinBoxShow(true);
      setIsDateBoxShow(false);
      setIsTermBoxShow(false);
    } else if (order === 'second') {
      setIsProteinBoxShow(false);
      setIsDateBoxShow(true);
      setIsTermBoxShow(false);
    } else {
      setIsProteinBoxShow(false);
      setIsDateBoxShow(false);
      setIsTermBoxShow(true);
    }
  };

  return (
    <div className="SubscribeDropdown">
      <Header>
        <LeftIcon />
        <h3>구독 옵션 선택</h3>
        <p></p>
      </Header>
      <p className="OrderGroup">주문 상품</p>
      <h2>헬밀 프로틴</h2>
      <div className="DropDown">
        <div
          className={`DropDownTitle ${isProteinBoxShow ? 'show' : 'hide'}`}
          onClick={() => onChangeMenu('first')}
        >
          {proteinInfo || '프로틴 종류'}
        </div>
        <ul
          className={`DropDownMenu ${isProteinBoxShow ? 'show' : 'hide'}`}
          onClick={onProteinInfo}
        >
          <li className="Option">
            <p className="OptionMenu">골고루 프로틴</p>
            <p className="OptionDetail">모든 프로틴 혼합형</p>
          </li>
          <li className="Option">
            <p className="OptionMenu">소고기 프로틴</p>
          </li>
          <li className="Option">
            <p className="OptionMenu">돼지고기 프로틴</p>
          </li>
          <li className="Option">
            <p className="OptionMenu">생선 프로틴</p>
          </li>
          <li className="Option">
            <p className="OptionMenu">식물성 (비건)프로틴</p>
          </li>
        </ul>
      </div>
      <div className="DropDown">
        <div
          className={`DropDownTitle ${isDateBoxShow ? 'show' : 'hide'}`}
          onClick={() => onChangeMenu('second')}
        >
          {dateInfo || '요일 선택'}
        </div>
        <ul
          className={`DropDownMenu ${isDateBoxShow ? 'show' : 'hide'}`}
          onClick={onDateinInfo}
        >
          <li className="Option">
            <p className="OptionMenu">5일 - 월 / 화 / 수 / 목 / 금</p>
            <p className="OptionDetail">1주 / 30,000원</p>
          </li>
          <li className="Option">
            <p className="OptionMenu">3일 - 월/수/금</p>
            <p className="OptionDetail">1주 / 18,000원</p>
          </li>
          <li className="Option">
            <p className="OptionMenu">2일 - 화/목</p>
            <p className="OptionDetail">1주 / 12,000원</p>
          </li>

          <div className="DeliveryInfo">
            <p>오늘 신청하면 수요일에 받아보실 수 있어요!</p>
            <p>
              신청일 기준 2일 뒤부터 배송됩니다. <br />
              월요일 신청 &gt; 수요일 수령(자정 이후 신청시 목요일 수령) <br />
              목요일 신청 &gt; 월요일 수령, 금요일 신청&gt;화요일 수령
            </p>
          </div>
        </ul>
      </div>
      <div className="DropDown">
        <div
          className={`DropDownTitle ${isTermBoxShow ? 'show' : 'hide'}`}
          onClick={() => onChangeMenu('third')}
        >
          {subscribeTerm || '구독 기간 선택'}
        </div>
        <ul
          className={`DropDownMenu ${isTermBoxShow ? 'show' : 'hide'}`}
          onClick={OnSubscribeTerm}
        >
          <li className="Option">
            <p className="OptionMenu">1주</p>
            <p className="OptionDetail">30,000원</p>
          </li>
          <li className="Option">
            <p className="OptionMenu">2주</p>
            <p className="OptionDetail">60,000원</p>
          </li>
          <li className="Option">
            <p className="OptionMenu">3주</p>
            <p className="OptionDetail">90,000원</p>
          </li>
          <li className="Option">
            <p className="OptionMenu">4주</p>
            <p className="OptionDetail">120,000원</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubscribeDropdown;
