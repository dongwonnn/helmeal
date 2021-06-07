import React, { useCallback, useState } from 'react';
import { ReactComponent as ListIcon } from '../../assets/images/ListIcon.svg';
import { payWay } from '../../utils/data';
import {PayWay, PayWayList, PayWayListContainer} from './styles'
// import { RootState } from '../../reducers';
// import { useSelector } from 'react-redux';

const PayWayContainer = () => {
  // const { mainAddress, detailAddress } = useSelector(({ address } : RootState) => ({
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
      }, [],
    );
    
  return (
      <PayWay>
        <PayWayListContainer>
          {payWay.map((payway) => (
            <PayWayList key={payway.id} 
              id={payway.id} 
              onClick={onClick}
              active = { clickId === payway.id}
            >
              <ListIcon />
              {payway.way}
            </PayWayList>
          ))}
        </PayWayListContainer>
      </PayWay>
  );
};

export default PayWayContainer;
