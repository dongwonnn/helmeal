import React, { useCallback, useState } from 'react';
import { ReactComponent as ListIcon } from '../../assets/images/ListIcon.svg';
import './PayWayContainer.scss';
import { payWay } from '../../utils/data';
import { useSelector } from 'react-redux';

const PayWayContainer = ({ setIsSelect }) => {
  const { mainAddress, detailAddress } = useSelector(({ address }) => ({
    mainAddress: address.mainAddress,
    detailAddress: address.detailAddress,
  }));

  const [clickId, setClickId] = useState(null);
  const onClick = useCallback(
    (e) => {
      setClickId(Number(e.target.id));
      if (mainAddress !== null || detailAddress !== null) setIsSelect(true);
    },
    [setIsSelect, mainAddress, detailAddress],
  );

  return (
    <div className="PayWayContainer">
      <div className="PayWay">
        <ul className="PayList">
          {payWay.map((payway) => (
            <li
              key={payway.id}
              id={payway.id}
              onClick={onClick}
              className={clickId === payway.id ? 'active' : ''}
            >
              <ListIcon />
              {payway.way}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PayWayContainer;
/* <li>
  <ListIcon />
  네이버 페이
</li>
<li>
  <ListIcon />
  카카오 페이
</li>
<li>
  <ListIcon />
  신용/체크 카드
</li>
<li>
  <ListIcon />
  휴대폰 결제
</li> */
