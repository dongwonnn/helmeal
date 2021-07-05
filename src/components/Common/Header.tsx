import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router';
import { HeaderContainerStyle, LeftArrow, Side, Title } from './styles';

interface HeaderProps {
  children: JSX.Element[];
  pathname: string;
}

const Header: FC<HeaderProps> = ({ children, pathname }) => {
  const [leftArrow, title, side] = children;

  const history = useHistory();

  const onBackPage = useCallback(() => {
    history.push(pathname);
  }, [history, pathname]);

  return (
    <HeaderContainerStyle>
      <LeftArrow onClick={onBackPage}>{leftArrow}</LeftArrow>
      <Side>{side}</Side>
      <Title>{title}</Title>
    </HeaderContainerStyle>
  );
};

export default Header;
