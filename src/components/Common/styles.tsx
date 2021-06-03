import styled from "styled-components";

export const HeaderContainerStyle = styled.header`
  max-width: 480px;
  background-color: white;
  border-bottom: 1px solid #cccccc;
  padding: 18px 16px 18px 16px;
  position: relative;
`

export const LeftArrow = styled.div`
    position: absolute;
    left: 16px;
`

export const Title = styled.div`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: -0.41%;
    text-align: center;
`

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
`

export const ButtonContainer = styled.div`
  max-width: 480px;
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
`

export const GraphContainer = styled.article`
  position: relative;
`

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
`