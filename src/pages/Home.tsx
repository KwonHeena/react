import VideoSlider from "../com/VideoSlider";
import styles from "./Home.module.scss";

const Home = () => {
  let slidess = [
    {
      src: "react/mov/mp01.mp4",
      title: "Welcome to Our Site",
      subtitle: "환영합니다 타입스크립트 홈페이지 입니다",
    },
    {
      src: "react/mov/mp02.mp4",
      title: "Smart",
      subtitle: "똑똑해지는 타입스크립트",
    },
    { src: "react/mov/mp03.mp4", title: "Thak you", subtitle: "감사합니다" },
  ];
  return (
    <div className={styles.home}>
      <div className={styles.sb}>
        <VideoSlider slides={slidess} />
      </div>
    </div>
  );
};

export default Home;
