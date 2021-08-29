import styled from 'styled-components';
import imgUrl from 'assets/images/HomeImage.png';

export const HomePageContainer = styled.div`
  padding-bottom: 53.25px;
`;

export const ArticleStyle = styled.article`
  padding: 0 6.66% 60px 6.66%;
  h4 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 26px;
    color: #fc5c42;
  }
  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 40px;
    color: #020202;
    margin-bottom: 16px;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.5px;
    color: #000000;
    strong {
      font-weight: 600;
    }
  }
`;

export const BackgroundStyle = styled.div`
  width: 100%;
  background-image: url(${imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BacgroundArticleStyle = styled.article`
  padding: 40px 0 426px 25px;
  h2 {
    padding-bottom: 16px;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 40px;
    color: #ffffff;
  }
  strong {
    font-weight: 600;
    font-size: 1rem;
    line-height: 26px;
    letter-spacing: -0.5px;
    color: #ffffff;
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 26px;
    letter-spacing: -0.5px;
    color: #ffffff;
    padding-bottom: 31px;
  }
`;

export const VideoStyle = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 40px;
  video {
    width: 100%;
  }
`;

export const ShowMenuButtonStyled = styled.div`
  width: 33.9%;
  border-radius: 8px;
  background-color: #fc5c42;

  .ButtonText {
    padding: 11px 32px;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.41px;

    color: #ffffff;
  }
`;
