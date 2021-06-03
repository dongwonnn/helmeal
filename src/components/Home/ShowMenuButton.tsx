import React from 'react';
import { Link } from 'react-router-dom';
import { ShowMenuButtonStyled } from './styles';

const ShowMenuButton = () => {
    return (
        <ShowMenuButtonStyled>
            <Link to="/detail">
            <p className="ButtonText">메뉴보기</p>
            </Link>
      </ShowMenuButtonStyled>
    );
};

export default ShowMenuButton;