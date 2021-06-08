import styled from 'styled-components';

export const SubscribeOptionPageContainer = styled.div`
  height: 100vh;
`;

export const OrderInfoContainer = styled.div`
  padding: 24px;
`;

export const ButtonContainer = styled.div`
  max-width: 480px;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

export const SubscribeDropdownContainer = styled.article`
  padding: 24px;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 32px;
    letter-spacing: -0.5px;

    color: #020202;
    padding-bottom: 24px;
  }
`;

export const OrderGroup = styled.p`
  font-size: 1rem;
  line-height: 26px;
  letter-spacing: -0.5px;

  color: #020202;

  padding-bottom: 8px;
`;

export const DropDown = styled.div`
  margin-bottom: 24px;
`;

export const SubscribePageContainer = styled.article`
  padding: 24px 24px 0 24px;
`;

export const SubscribeContainer = styled.div`
  h4 {
    padding-bottom: 8px;
    font-weight: bold;
    font-size: 0.96rem;
    line-height: 20px;

    letter-spacing: -0.41px;

    color: #020202;
  }
`;

export const PayButtonContainer = styled.div`
  width: 100%;
  bottom: 0;
`;

export const AddressInfoContainer = styled.div`
  position: relative;

  svg {
    color: #d9d9d9;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const AddressContainer = styled.div`
  border-radius: 8px;
  background-color: #f5f6f7;
  margin-bottom: 16px;

  p {
    padding: 24px 24px 24px 24px;
    text-align: center;

    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    letter-spacing: -0.5px;

    color: #767676;
  }
`;

export const AddressButtonContainer = styled.div`
  padding: 0 103px 24px 103px;
`;

export const AddressButton = styled.div`
  padding: 10px 7.2px;
  background-color: #fc5c42;
  color: white;
  border-radius: 8px;

  a {
    font-size: 0.8125rem;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.374px;

    color: #ffffff;
  }
`;

export const OrderInfosContainer = styled.article`
  background-color: #f5f6f7;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 32px;
    letter-spacing: -0.5px;

    color: #020202;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 16px;
  }
`;

export const OrderInfo = styled.div`
  font-size: 1rem;
  line-height: 26px;
  letter-spacing: -0.5px;

  color: #020202;
  padding: 16px 0;
  border-bottom: 1px solid #eaeaea;

  h4 {
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;

    letter-spacing: -0.41px;
    padding-bottom: 8px;
  }
`;

export const DeliveryInfo = styled.div`
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 16px;

  h4 {
    padding-top: 16px;
    font-weight: 600;
    font-size: 1rem;
    line-height: 26px;
    letter-spacing: -0.5px;

    color: #020202;
  }
`;

export const DateInfo = styled.div`
  font-size: 1rem;
  line-height: 26px;
  letter-spacing: -0.5px;

  color: #020202;
`;

export const AddressInfo = styled.div`
  h4 {
    padding-top: 16px;
    font-weight: 600;
    font-size: 1rem;
    line-height: 26px;
    letter-spacing: -0.5px;

    color: #020202;
  }
`;

export const AddrssDetail = styled.div`
  font-size: 1rem;
  line-height: 26px;
  letter-spacing: -0.5px;

  color: #020202;
`;

export const TotalPayContiner = styled.article`
  background-color: #f5f6f7;
  border-radius: 8px;
`;

export const TotalPayContent = styled.div`
  padding: 16px 24px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div:first-child {
    font-weight: 600;
    font-size: 1rem;
    line-height: 26px;
    text-align: right;
    letter-spacing: -0.5px;

    color: #020202;
  }
  div:last-child {
    font-size: 0.75rem;
    line-height: 16px;
    letter-spacing: -0.5px;

    color: #767676;
  }
`;

export const SubscribeCompleteMesseg = styled.article`
  h2 {
    padding-top: 19px;
    padding-bottom: 20px;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 40px;

    text-align: center;
    letter-spacing: -1px;

    color: #000000;
  }
`;

export const MesseageTitle = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 26px;

  text-align: center;
  letter-spacing: -0.5px;

  color: #000000;
`;

export const MesseageDetail = styled.p`
  font-weight: 400;

  font-size: 1rem;
  line-height: 26px;

  text-align: center;
  letter-spacing: -0.5px;

  color: #000000;
  margin-bottom: 32px;
`;

export const SubscribeCompleteContainer = styled.div`
  padding: 24px;
`;

export const DelivertAddress = styled.h4`
  padding-bottom: 8px;
  font-weight: bold;
  font-size: 0.93rem;
  line-height: 20px;

  letter-spacing: -0.41px;

  color: #020202;
`;

export const AddressSettingContainer = styled.article`
  padding: 24px;
`;

export const AddressInput = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 100px;
  background: #f5f6f7;
  width: 90%;
  padding: 11px 16px;
  margin-bottom: 24px;

  p {
    font-size: 1rem;
    line-height: 26px;
    letter-spacing: -0.5px;

    color: #cccccc;
  }
`;

export const RecentAddress = styled.div`
  h4 {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 24px;
    letter-spacing: -0.5px;

    color: #000000;
    margin-bottom: 8px;
  }
`;

export const RecentAddressList = styled.ul`
  li {
    padding: 16px 0;
    border-bottom: 1px solid #f5f5f5;
    p:first-child {
      padding-bottom: 8px;
    }

    p:last-child {
      font-size: 0.75rem;
      line-height: 16px;
      letter-spacing: -0.5px;
      color: #767676;
    }
  }
`;

export const PayWay = styled.div`
  border-radius: 8px;
  background-color: #f5f6f7;
  margin-bottom: 16px;
`;

export const PayWayListContainer = styled.ul`
  padding: 24px;
`;

export const PayWayList = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;

  padding-bottom: 16px;
  font-size: 1rem;
  line-height: 26px;
  letter-spacing: -0.5px;

  color: #09101d;

  svg {
    margin-right: 12px;

    rect:first-child {
      ${(props) =>
        props.active
          ? `
          fill: #fc5c42;
        `
          : `
          fill: #ccc;
        `}
    }

    circle {
      fill: white;
    }
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const DropDownTitle = styled.div<{ active: boolean }>`
  padding: 9px 14px;
  border: 2px solid #d2d2d2;
  border-radius: 4px;

  font-weight: 600;
  font-size: 1rem;
  line-height: 26px;
  letter-spacing: -0.5px;

  color: ${(props) => (props.active ? `#1d1d1d` : `#d2d2d2`)};
`;

export const DropDownMenu = styled.ul<{ show: boolean }>`
  display: ${(props) => (props.show ? `block` : `none`)};
`;

export const Option = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
`;

export const OptionMenu = styled.p`
  padding: 11px 16px;
  font-size: 1rem;
  line-height: 26px;

  letter-spacing: -0.5px;

  color: #1d1d1d;
`;

export const OptionDetail = styled.p`
  font-size: 0.75rem;
  line-height: 16px;

  text-align: right;
  letter-spacing: -0.5px;

  color: #767676;
`;

export const DeliveryInfoContainer = styled.div`
  p:first-child {
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 8px 26px;
    font-size: 0.875rem;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.5px;

    color: #767676;
    margin-bottom: 16px;

    span {
      color: rgba(252, 92, 66, 1);
    }
  }
  p:last-child {
    font-size: 0.75rem;
    line-height: 16px;
    letter-spacing: -0.5px;

    color: #767676;
  }
`;
