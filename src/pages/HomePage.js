import React, { useEffect } from 'react';
import './HomePage.scss';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { videoUrl } from '../utils/data';

const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="HomePage">
      <div className="VideoContainer">
        <video autoPlay muted loop>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
      <article className="ArticleContainer">
        <h4>VALUE AND MISSION</h4>
        <h2>
          One of the Best meal
          <br />
          for your daily workout.
        </h2>
        <p>
          헬밀은 당신의 운동 효과를 극대화
          <br />
          하고 운동에만 집중할 수 있도록 고안된 <br />
          단백질 중심의 식단입니다. <br />
          아무것도 신경쓰지 마세요, 운동만 하세요. <br />
          운동 후 간식까지, 헬밀과 함께 <br />
          당신의 하루를 완벽하게 마무리하세요.
        </p>
      </article>
      <article className="ArticleContainer">
        <h4>WHY WE DO IT</h4>
        <h2>
          Healthier food perfects <br />
          your body and soul.
        </h2>
        <p>
          매일 반복되는 일상 속에서도 많은 사람들이 <br />
          건강을 유지하기 위해 노력합니다. <br />
          음식은 바꾸기 어려운 습관입니다. <br />
          시간을 들여 재료를 고르고, 요리를 하고 <br />
          또는 수많은 선택지 앞에서 고민하죠. <br />
          <br />
          헬밀은 다양한 조리법과 식사 계획을 통해 <br />
          당신의 루틴을 완벽하게 만들어줄 방법을 <br />
          연구합니다.
          <br />
          <br />
          <strong>
            더 건강하고, 더 행복하며, 더 만족스러운 <br />
            당신의 삶을 만드는 것이 우리의 사명입니다.
          </strong>
        </p>
      </article>
      <article className="ArticleImageContainer">
        <div className="ArticleText">
          <h2>헬밀 프로틴</h2>
          <p>
            전문 영양사와 트레이너가 고심하여 <br />
            오래 지속할 수 있는 식단을 설계해드립니다. <br />
          </p>
          <p className="LastText">
            깨끗한 재료로 다양한 단백질 식사를 제공하는 것이 <br />
            헬밀의 식단플랜입니다.
          </p>
          <div className="ShowMenuButton">
            <Link to="/detail">
              <p className="ButtonText">메뉴보기</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HomePage;
