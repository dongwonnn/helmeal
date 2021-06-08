import styled from 'styled-components';

export const MenuDetailPageContainer = styled.div`
  max-width: 480px;
  width: 100%;
  height: 100%;
  // position: fixed;
  // top: 100%;

  // // 얘 바꾸면 된다.
  // transition: all 2000ms cubic-bezier(0.86, 0, 0.07, 1);

  z-index: 1011;
  background-color: #c4c4c4;
`;

export const MenuDetailContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1.9fr 8fr;
`;

export const MenuCategoriesContainer = styled.nav`
  border-right: 0.5px solid #f5f5f5;
  background-color: white;
  border-top-left-radius: 30px;
  display: flex;
  flex-direction: column;

  justify-items: flex-start;
  align-items: center;

  white-space: nowrap;
  overflow-y: scroll;
  ul {
    .MenuImg {
      margin-bottom: 13px;
      opacity: 0.5;
    }

    .MenuImg.Clicked {
      opacity: 1;
    }
  }
  ul:first-child {
    margin-top: 27px;
  }

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const MenuInfoContainer = styled.article`
  background-color: white;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const MainImageContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    margin-bottom: 24px;
  }
  svg {
    color: #767676;
    position: absolute;
    font-size: 1.5rem;
    top: 10px;
    right: 10px;
  }
`;

export const MenuDetail = styled.div`
  h3 {
    padding: 0 24px;

    font-weight: 600;
    font-size: 1rem;
    line-height: 26px;
    letter-spacing: -0.5px;

    color: #fc5c42;
    padding-bottom: 2px;
  }

  h2 {
    padding: 0 24px;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 28px;
    letter-spacing: -0.5px;

    color: #000000;
    margin-bottom: 16px;
  }
`;
export const MenuIntegrity = styled.div`
  padding: 0 24px;
  margin-bottom: 20px;

  height: 10vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

export const MenuCalorie = styled.div`
  p:first-child {
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 48px;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.41px;

    color: #fc5c42;
    padding-bottom: 8px;
  }

  p:last-child {
    font-size: 0.75rem;
    line-height: 16px;

    text-align: center;
    letter-spacing: -0.41px;

    color: #000000;
  }
`;

export const MenuProtein = styled.div`
  font-size: 0.75rem;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.41px;
  color: #000000;
`;

export const Gap = styled.div`
  width: 1px;
  height: 100%;
  background-color: #eaeaea;
`;

export const MenuNutrient = styled.div`
  padding: 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

export const DoughnutContainer = styled.section`
  width: 100%;
  canvas {
    max-width: 100%;
  }
`;
