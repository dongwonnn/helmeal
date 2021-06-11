import styled from 'styled-components';

export const HeaderContainerStyle = styled.header`
  max-width: 400px;
  background-color: white;
  border-bottom: 1px solid #cccccc;
  padding: 18px 16px 18px 16px;
  position: relative;
`;

export const LeftArrow = styled.div`
  position: absolute;
  left: 16px;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.41%;
  text-align: center;
`;

export const Side = styled.div`
  position: absolute;
  right: 16px;

  p {
    font-size: 0.875rem;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.5px;

    color: #000000;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 400px;
  display: block;
  background-color: white;
  padding: 23px 24px 34px 24px;

  p {
    background-color: #fc5c42;
    border-radius: 8px;
    text-align: center;
    color: white;
    padding: 17px 7.63px;
    font-weight: bold;

    font-size: 1.06rem;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.408px;
  }
`;

export const GraphContainer = styled.article`
  position: relative;
`;

export const TextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);

  p:first-child {
    white-space: nowrap;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.5px;

    color: #000000;
  }

  p:last-child {
    white-space: nowrap;
    font-size: 0.875rem;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.5px;

    color: #000000;
  }
`;

export const NavBarContainer = styled.ul`
  z-index: 1000;
  max-width: 400px;
  width: 100%;
  background-color: white;
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  align-items: center;
  border-top: 0.05px solid #ccc;
`;

interface ListContainerProps {
  clicked: boolean;
  detailClicked: boolean;
}

export const ListContainer = styled.li<ListContainerProps>`
  a {
    display: block;
  }

  img {
    padding: 7px 0 2px 0;
    padding-bottom: 5px;

    // 루틴 시작의 로고를 위해 3항 연산자 2개를 사용
    filter: ${(props) =>
      props.clicked
        ? props.detailClicked
          ? null
          : `invert(68%) sepia(85%) saturate(4997%) hue-rotate(333deg)
          brightness(102%) contrast(107%)`
        : null};

    /* filter: ${(props) =>
      props.clicked
        ? `invert(68%) sepia(85%) saturate(4997%) hue-rotate(333deg)
        brightness(102%) contrast(107%)`
        : null} */
  }

  margin-bottom: 7px;
  font-size: 0.6887rem;
  font-weight: 400;
  letter-spacing: -0.41px;
  color: ${(props) => (props.clicked ? `#fc5c42` : `#767676`)};
`;
