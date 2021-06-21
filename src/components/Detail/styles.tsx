import styled from 'styled-components';
import imgUrl from '../../assets/images/DetailBackground.png';

export const DetailPageContainer = styled.div`
  padding-bottom: 152.85px;
`;

export const CarouselContainer = styled.article`
  width: 100%;
`;

export const CarouselImage = styled.div`
  img {
    width: 100%;
  }
`;

export const FoodInfomationContainer = styled.article`
  padding: 24px 25px 40px 25px;

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -1px;
    padding-bottom: 4px;
  }

  p {
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: rgba(60, 60, 67, 0.6);
    padding-bottom: 24px;
  }

  h4 {
    color: #020202;
    font-weight: 600;
    font-size: 1rem;
    line-height: 26px;
    letter-spacing: -0.5px;
    padding-bottom: 12px;
  }
`;

export const IngredientsGroup = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  column-gap: 5.8px;

  div {
    svg {
      width: 48px;
    }
    p {
      text-align: center;
      font-size: 0.75rem;
      color: #767676;
      line-height: 16px;
      letter-spacing: -0.5px;
    }
  }
`;

export const DietComposition = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 4.52fr 0.96fr 4.52fr;
  justify-items: center;
  align-items: center;

  div {
    img {
      width: 100%;
    }
  }

  p {
    margin-top: 16px;
    color: #000;
    font-size: 1rem;
    line-height: 26px;
    letter-spacing: -0.5px;
  }
`;

export const DetailBackgroundContainer = styled.article`
  background-image: url(${imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ImageContent = styled.article`
  padding: 40px 24px 122px 24px;

  h2 {
    color: #ffffff;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 32px;
    letter-spacing: -0.5px;
    padding-bottom: 32px;
  }

  p {
    color: #ffffff;

    font-size: 0.875rem;
    line-height: 24px;
    letter-spacing: -0.5px;
  }
`;

export const SelectMenuContainer = styled.article`
  padding: 32px 24px 24px 24px;
  h2 {
    color: #020202;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 32px;
    letter-spacing: -0.5px;
    padding-bottom: 24px;
  }
`;

export const MenuToggle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  p {
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    line-height: 26px;
  }

  div:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid #111111;
    padding: 11px 16px;
  }

  div:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    border: 1px solid #111111;
    padding: 11px 16px;
  }

  .Black {
    background-color: #111111;
    color: white;
  }

  .White {
    background-color: white;
    color: black;
  }
`;

export const MealCategoriesContainer = styled.article`
  padding: 0 24px;
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
`;

export const MealCategoryLabel = styled.label<{ active: boolean }>`
  border: 1px solid #ccc;
  border-radius: 100px;

  margin-right: 8px;
  margin-bottom: 24px;

  padding: 8px 12px;

  font-size: 0.875rem;
  line-height: 24px;
  letter-spacing: -0.5px;
  /* background-color: white;
  color: #767676; */
  background-color: ${(props) => (props.active ? `#f5f5f5` : `white`)};
  color: ${(props) => (props.active ? `#1d1d1d` : `#767676`)};
  font-weight: ${(props) => (props.active ? `600` : `400`)};
`;

export const MealMenusContainer = styled.article`
  padding: 0 24px;
`;

export const MenuCardContainer = styled.article`
  margin-bottom: 24px;
  border-radius: 10px;
  border: 1px solid #eaeaea;

  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 16px;
  }

  p {
    color: #767676;
    padding: 0 24px 16px 24px;
    font-size: 0.75rem;
    line-height: 16px;
  }

  h2 {
    padding: 0 24px 16px 24px;

    font-weight: bold;
    font-size: 1.25rem;
    line-height: 28px;
    letter-spacing: -0.5px;
    color: #000000;
  }
`;

export const SnackCarsdContainer = styled.article`
  padding: 0 24px;
`;

export const StartButtonContainer = styled.div`
  max-width: 480px;
  width: 100%;
  position: fixed;
  bottom: 53px;
`;
