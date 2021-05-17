import React, { useCallback } from 'react';

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
        <div onClick={onClickMeal}>식사</div>
        <div onClick={onClickSnack}>간식</div>
      </div>
    </div>
  );
};

export default SelectMenu;
