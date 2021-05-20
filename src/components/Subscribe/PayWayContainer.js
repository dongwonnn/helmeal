import React from 'react';
import { ReactComponent as ListIcon } from '../../assets/images/ListIcon.svg';
import './PayWayContainer.scss';
const PayWayContainer = () => {
  return (
    <div className="PayWayContainer">
      <div className="PayWay">
        <ul className="PayList">
          <li>
            <ListIcon />
            네이버 페이
          </li>
          <li>
            <ListIcon />
            카카오 페이
          </li>
          <li>
            <ListIcon />
            신용/체크카드
          </li>
          <li>
            <ListIcon />
            휴대폰 결제
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PayWayContainer;
