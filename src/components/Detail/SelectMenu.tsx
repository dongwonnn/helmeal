import React, { FC } from 'react';
import './SelectMenu.scss';

interface SelectMenuProps {
  isMeal: boolean;
  onClickMeal: ()=> void;
  onClickSnack: () => void;
}

const SelectMenu:FC<SelectMenuProps>= ({ onClickMeal, onClickSnack, isMeal }) => {
  return (
    <div className="SelectMenuContainer">
      <h2>헬밀 프로틴</h2>
      <div className="MenuToggle">
        <div className={`${isMeal ? 'Black' : 'White'}`} onClick={onClickMeal}>
          <p>식사</p>
        </div>
        <div className={`${isMeal ? 'White' : 'Black'}`} onClick={onClickSnack}>
          <p>간식</p>
        </div>
      </div>
    </div>
  );
};

export default SelectMenu;