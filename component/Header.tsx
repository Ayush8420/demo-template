import { FC } from "react";
import styles from "../styles/Header.module.scss";
import HeadText from "./Animated/HeadText";

const Header: FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <h2>
          We are{" "}
          <HeadText
            words={["Professional", "Creative", "Innovative", "Experienced"]}
          />
        </h2>
        <h1>
          Visual design, UI/UX, digital marketing <span>&</span> consulting
        </h1>
      </div>
      <div className={styles.right}>
        <h3>CREATING UNIQUE DIGITAL EXPERIENCES</h3>
        <p>
          Since{" "}
          <span>
            2010
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
            </svg>
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
