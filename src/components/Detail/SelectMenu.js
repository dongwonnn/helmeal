import React, { useCallback } from 'react';
import './SelectMenu.scss';

const SelectMenu = ({ setIsMeal }) => {
  const onClickMeal = useCallback(() => {
    setIsMeal(true);
  }, [setIsMeal]);

  const onClickSnack = useCallback(() => {
    setIsMeal(false);
  }, [setIsMeal]);

  return (
    <div className="SelectMenuContainer">
      <h2>헬밀 프로틴</h2>
      <div className="MenuToggle">
        <div className="Meal" onClick={onClickMeal}>
          <p>식사</p>
        </div>
        <div className="Snack" onClick={onClickSnack}>
          <p>간식</p>
        </div>
      </div>
    </div>
  );
};

export default SelectMenu;
