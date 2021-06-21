import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { getPayForm } from '../../utils/getPayForm';
import { TotalPayContent, CardContiner } from './styles';

const TotalPay = () => {
  const { dateInfoPrice, subscribeTermPrice } = useSelector(
    ({ option }: RootState) => ({
      dateInfoPrice: option.dateInfoPrice,
      subscribeTermPrice: option.subscribeTermPrice,
    }),
  );

  const totalPay = useMemo(
    () => getPayForm(parseInt(dateInfoPrice) + parseInt(subscribeTermPrice)),
    [dateInfoPrice, subscribeTermPrice],
  );

  return (
    <CardContiner>
      <TotalPayContent>
        <div>
          <p>상품 금액</p>
          <p>{totalPay}원</p>
        </div>
        <div>
          <p>배송비</p>
          <p>0원</p>
        </div>
        <div>
          <p>최종 결제 금액</p>
          <p>{totalPay}원</p>
        </div>
      </TotalPayContent>
    </CardContiner>
  );
};

export default TotalPay;
