import { FC, useState } from "react";
import styles from "../styles/Story.module.scss";
import { FiBriefcase, FiCalendar } from "react-icons/fi";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Story: FC = () => {
  return (
    <section className={styles.story}>
      <div className={styles.left}>
        <h2>Quality & experience in every detail</h2>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. In creative volutpat donec vel varius esteu!
          Suspendisse nec vulputate nulla iaculis eu potenti lorem ipsum. Donec
          creative volutpat dignissim torquent per conubia nostra gravida
          posuere sagittis dolor
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.box}>
          <span>
            <FiBriefcase />
          </span>
          <h2><Count number={100} /></h2>

          <p>Cases in portfolio</p>
          <button>View Portfolio</button>
        </div>
        <div className={styles.box}>
          <span>
            <FiCalendar />
          </span>

          <h2><Count number={20} /></h2>

          <p>Years of experience</p>
          <button>Read our story</button>
        </div>
      </div>
    </section>
  );
};

export default Story;

const Count: FC<{ number: number }> = ({ number }) => {
  const [active, setActive] = useState(true);

  return (
    <CountUp end={number} suffix="+" redraw={true}>
      {({ countUpRef, start }) => {
        return (
          <VisibilitySensor
            onChange={(isVisible: boolean) => {
              if (isVisible) {
                start();
                setActive(false);
              }
            }}
            delayedCall
            active={active}
          >
            
              <span ref={countUpRef} />
            
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};
