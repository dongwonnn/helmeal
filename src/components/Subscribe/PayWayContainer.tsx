import React, { useCallback, useState } from 'react';
import { ReactComponent as ListIcon } from '../../assets/images/ListIcon.svg';
import './PayWayContainer.scss';
import { payWay } from '../../utils/data';
// import { useSelector } from 'react-redux';

const PayWayContainer = () => {
  // const { mainAddress, detailAddress } = useSelector(({ address }) => ({
  //   mainAddress: address.mainAddress,
  //   detailAddress: address.detailAddress,
  // }));

  const [clickId, setClickId] = useState<string | null>(null);
  const onClick = useCallback(
    (e) => {
      let targetId = e.target.id;
      if (e.target.nodeName === 'rect' || e.target.nodeName === 'circle') {
        targetId = e.target.parentNode.parentNode.id;
      } else if (e.target.nodeName === 'svg') {
        targetId = e.target.parentNode.id;
      }

      setClickId((targetId));
    },
    [],
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
