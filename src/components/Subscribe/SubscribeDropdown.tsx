import React, { FC, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import {
  setProteinInfo,
  setDateInfo,
  setDatePrice,
  setSubscribeInfo,
  setSubscribePrice,
} from '../../reducers/option';
import { getReceiveDay } from '../../utils/getDate';

import { getNumberForm } from '../../utils/getNumberForm';
import { DropDown, OrderGroup, SubscribeDropdownContainer, DropDownTitle, DropDownMenu, OptionMenu, OptionDetail, Option, DeliveryInfoContainer } from './styles';

interface DropdownProps {
  setCanSelectOption: (e:boolean) => void 
}

const SubscribeDropdown:FC<DropdownProps>= ({ setCanSelectOption }) => {
  const dispatch = useDispatch();
  const { proteinInfo, dateInfo, subscribeTerm } = useSelector(
    ({ option } : RootState) => ({
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
        // 자식 요소 클릭했을 때
        e.target.id === 'OptionDetail' ||
        e.target.id === 'OptionMenu'
      ) {
        dispatch(setProteinInfo(e.target.parentElement.firstChild.innerText));
      } else if (e.target.id === 'Option') {
        // li를 클릭했을 때
        dispatch(setProteinInfo(e.target.firstChild.innerText));
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
        e.target.id === 'OptionDetail' ||
        e.target.id === 'OptionMenu'
      ) {
        dispatch(setDateInfo(e.target.parentElement.firstChild.innerText));
        const tempDatePrice =
          e.target.parentElement.lastChild.innerText.split(' / ')[1];
        const newDatePrice = getNumberForm(tempDatePrice);
        dispatch(setDatePrice(newDatePrice));
      } else if (e.target.id === 'Option') {
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
        e.target.id === 'OptionDetail' ||
        e.target.id === 'OptionMenu'
      ) {
        dispatch(setSubscribeInfo(e.target.parentElement.firstChild.innerText));

        const tempSubscribePrice = e.target.parentElement.lastChild.innerText;
        const newSubscribePrice = getNumberForm(tempSubscribePrice);

        dispatch(setSubscribePrice(newSubscribePrice));
      } else if (e.target.id === 'Option') {
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
    <SubscribeDropdownContainer>
      <OrderGroup>주문 상품</OrderGroup>
      <h2>헬밀 프로틴</h2>
      <DropDown>
        <DropDownTitle active = {isProteinBoxShow} onClick={() => onChangeMenu('first')}>
          {proteinInfo || '프로틴 종류'}
        </DropDownTitle>
        <DropDownMenu show={isProteinBoxShow} onClick={onProteinInfo}>
          <Option id="Option">
            <OptionMenu id="OptionMenu" >골고루 프로틴</OptionMenu>
            <OptionDetail id="OptionDetail">모든 프로틴 혼합형</OptionDetail>
          </Option>
          <Option id="Option">
            <OptionMenu id="OptionMenu">소고기 프로틴</OptionMenu>
          </Option>
          <Option id="Option">
            <OptionMenu id="OptionMenu">돼지고기 프로틴</OptionMenu>
          </Option>
          <Option id="Option">
            <OptionMenu id="OptionMenu">생선 프로틴</OptionMenu>
          </Option>
          <Option id="Option">
            <OptionMenu id="OptionMenu">식물성 (비건)프로틴</OptionMenu>
          </Option>
        </DropDownMenu>
      </DropDown>
      <DropDown>
        <DropDownTitle active={isDateBoxShow} onClick={() => onChangeMenu('second')}> 
          {dateInfo || '요일 선택'}
        </DropDownTitle>
        <DropDownMenu show={isDateBoxShow} onClick={onDateinInfo}>
          <Option id="Option">
            <OptionMenu id="OptionMenu">5일 - 월 / 화 / 수 / 목 / 금</OptionMenu>
            <OptionDetail id="OptionDetail">1주 / 30,000원</OptionDetail>
          </Option>
          <Option id="Option">
            <OptionMenu id="OptionMenu">3일 - 월/수/금</OptionMenu>
            <OptionDetail id="OptionDetail">1주 / 18,000원</OptionDetail>
          </Option>
          <Option id="Option">
            <OptionMenu id="OptionMenu">2일 - 화/목</OptionMenu>
            <OptionDetail id="OptionDetail">1주 / 12,000원</OptionDetail>
          </Option>

          <DeliveryInfoContainer>
            <p>
              오늘 신청하면 <span>{receiveDay}요일</span>에 받아보실 수 있어요!
            </p>
            <p>
              신청일 기준 2일 뒤부터 배송됩니다. <br />
              월요일 신청 &gt; 수요일 수령(자정 이후 신청시 목요일 수령) <br />
              목요일 신청 &gt; 월요일 수령, 금요일 신청&gt;화요일 수령
            </p>
          </DeliveryInfoContainer>
        </DropDownMenu>
      </DropDown>
      <DropDown>
        <DropDownTitle active={isTermBoxShow} onClick={() => onChangeMenu('third')}>
          {subscribeTerm || '구독 기간 선택'}
          </DropDownTitle>
        <DropDownMenu show={isTermBoxShow} onClick={OnSubscribeTerm}>
          <Option id="Option">
            <OptionMenu id="OptionMenu">1주</OptionMenu>
            <OptionDetail id="OptionDetail">30,000원</OptionDetail>
          </Option>
          <Option id="Option">
            <OptionMenu id="OptionMenu">2주</OptionMenu>
            <OptionDetail id="OptionDetail">60,000원</OptionDetail>
          </Option>
          <Option id="Option">
            <OptionMenu id="OptionMenu">3주</OptionMenu>
            <OptionDetail id="OptionDetail">90,000원</OptionDetail>
          </Option>
          <Option id="Option">
            <OptionMenu id="OptionMenu">4주</OptionMenu>
            <OptionDetail id="OptionDetail">120,000원</OptionDetail>
          </Option>
        </DropDownMenu>
      </DropDown>
    </SubscribeDropdownContainer>
  );
};

export default SubscribeDropdown;
