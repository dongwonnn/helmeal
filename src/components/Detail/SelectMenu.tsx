import React, { FC } from 'react';
import { MenuToggle, SelectMenuContainer } from './styles';

interface SelectMenuProps {
  isMeal: boolean;
  onClickMeal: ()=> void;
  onClickSnack: () => void;
}

const SelectMenu:FC<SelectMenuProps>= ({ onClickMeal, onClickSnack, isMeal }) => {
  return (
    <SelectMenuContainer>
      <h2>헬밀 프로틴</h2>
      <MenuToggle>
        <div className={`${isMeal ? 'Black' : 'White'}`} onClick={onClickMeal}>
          <p>식사</p>
        </div>
        <div className={`${isMeal ? 'White' : 'Black'}`} onClick={onClickSnack}>
          <p>간식</p>
        </div>
      </MenuToggle>
    </SelectMenuContainer>
  );
};

export default SelectMenu;
