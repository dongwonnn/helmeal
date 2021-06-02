import React, { FC, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProteinInfo,
  setDateInfo,
  setDatePrice,
  setSubscribeInfo,
  setSubscribePrice,
} from '../../reducers/option';
import { getReceiveDay } from '../../utils/getDate';

import { getNumberForm } from '../../utils/getNumberForm';
import './SubscribeDropdown.scss';

interface DropdownProps {
  setCanSelectOption: (e:boolean) => void 
}

const SubscribeDropdown:FC<DropdownProps>= ({ setCanSelectOption }) => {
  const dispatch = useDispatch();
  const { proteinInfo, dateInfo, subscribeTerm } = useSelector(
    ({ option }) => ({
      proteinInfo: option.proteinInfo,
      dateInfo: option.dateInfo,
      subscribeTerm: option.subscribeTerm,
    }),
  );

  // 드롭박스 상태
  const [isProteinBoxShow, setIsProteinBoxShow] = useState(true);
  const [isDateBoxShow, setIsDateBoxShow] = useState(false);
  const [isTermBoxShow, setIsTermBoxShow] = useState(false);

  const onProteinInfo = useCallback(
    (e) => {
      if (
        // li 제외 클릭했을 때
        e.target.className === 'OptionDetail' ||
        e.target.className === 'OptionMenu'
      ) {
        dispatch(setProteinInfo(e.target.parentElement.firstChild.innerText));
      } else if (e.target.className === 'Option') {
        dispatch(setProteinInfo(e.target.firstChild.innerText));
        // li를 클릭했을 때
      }
      setIsProteinBoxShow(false);
      setIsDateBoxShow(true);
    },
    [dispatch],
  );

  const onDateinInfo = useCallback(
    (e) => {
      if (
        // 자식 DOM 클릭 했을 시 처리
        e.target.className === 'OptionDetail' ||
        e.target.className === 'OptionMenu'
      ) {
        dispatch(setDateInfo(e.target.parentElement.firstChild.innerText));
        const tempDatePrice =
          e.target.parentElement.lastChild.innerText.split(' / ')[1];
        const newDatePrice = getNumberForm(tempDatePrice);
        dispatch(setDatePrice(newDatePrice));
      } else if (e.target.className === 'Option') {
        dispatch(setDateInfo(e.target.firstChild.innerText));
        const tempDatePrice = e.target.lastChild.innerText.split(' / ')[1];
        const newDatePrice = getNumberForm(tempDatePrice);

        dispatch(setDatePrice(newDatePrice));
      } else {
        return;
      }

      setIsDateBoxShow(false);
      setIsTermBoxShow(true);
    },
    [dispatch],
  );

  const OnSubscribeTerm = useCallback(
    (e) => {
      if (
        // 자식 DOM 클릭 했을 시 처리
        e.target.className === 'OptionDetail' ||
        e.target.className === 'OptionMenu'
      ) {
        dispatch(setSubscribeInfo(e.target.parentElement.firstChild.innerText));

        const tempSubscribePrice = e.target.parentElement.lastChild.innerText;
        const newSubscribePrice = getNumberForm(tempSubscribePrice);

        dispatch(setSubscribePrice(newSubscribePrice));
      } else if (e.target.className === 'Option') {
        dispatch(setSubscribeInfo(e.target.firstChild.innerText));

        const tempSubscribePrice = e.target.lastChild.innerText;
        const newSubscribePrice = getNumberForm(tempSubscribePrice);

        dispatch(setSubscribePrice(newSubscribePrice));
      }

      setCanSelectOption(false);
    },
    [setCanSelectOption, dispatch],
  );

  const onChangeMenu = useCallback((order) => {
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
  }, []);

  const receiveDay = useMemo(() => getReceiveDay(), []);

  return (
    <div className="SubscribeDropdown">
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
            <p>
              오늘 신청하면 <span>{receiveDay}요일</span>에 받아보실 수 있어요!
            </p>
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
