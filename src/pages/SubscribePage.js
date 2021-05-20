import React, { useState } from 'react';
import SubscribeDropdown from '../components/Subscribe/SubscribeDropdown';
import './SubscribePage.scss';
import OrderInfos from '../components/Subscribe/OrderInfos';
import TotalPay from '../components/Subscribe/TotalPay';

const SubscribePage = () => {
  const [canSelectOption, setCanSelectOption] = useState(true);

  return (
    <div className="SubscribePage">
      {canSelectOption ? (
        <SubscribeDropdown setCanSelectOption={setCanSelectOption} />
      ) : (
        <>
          <div className="OrderInfoContainer">
            <OrderInfos />
            <TotalPay />
          </div>
        </>
      )}
    </div>
  );
};

export default SubscribePage;

/* <select>
          <option>프로틴 종류</option>
          <option>골고루 프로틴</option>
          <option>소고기 프로틴</option>
          <option>돼지고기 프로틴</option>
          <option>생선 프로틴</option>
          <option>식물성 (비건)프로틴</option>
        </select>

        <select>
          <option>요일 선택</option>
          <option>5일 - 월/화/수/목/금</option>
          <option>3일 - 월/수/금</option>
          <option>2일 - 화/목</option>
        </select>

        <select>
          <option>구독 기간 선택</option>
          <option>1주</option>
          <option>2주</option>
          <option>3주</option>
          <option>4주</option>
        </select>*/
