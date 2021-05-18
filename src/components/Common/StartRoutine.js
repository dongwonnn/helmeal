import React from 'react';
import { Link } from 'react-router-dom';
import './StartRoutine.scss';

const StartRoutine = () => {
  return (
    <div className="StartRoutineContainer">
      <Link to="/subscribe">
        <p>루틴 시작하기</p>
      </Link>
    </div>
  );
};

export default StartRoutine;
