import { FC } from "react";
import styles from "../styles/Spaciality.module.scss";
import {
  FiBox,
  FiBriefcase,
  FiCalendar,
  FiCamera,
  FiMonitor,
  FiPenTool,
  FiPieChart,
  FiUserCheck,
} from "react-icons/fi";

const Spaciality: FC = () => {
  return (
    <section className={styles.spaciality}>
      <div className={styles.left}>
        <h2>What we are good at</h2>
        <p>
          Per conubia nostra, per inceptos himenaeos. In creative volutpat donec
          vel varius esteu! Suspendisse nec vulputate nulla iaculis eu potenti.
          Donec dignissim gravida posuere sagittis dolor!
        </p>
        <button>Discover our services</button>
      </div>
      <div className={styles.right}>
       <div className={styles.grid}>
           {specialItems.map((elem,key) => (
               <div className={styles.list} key={key}>
                   <span><elem.icon /></span> {elem.label}
               </div>
           ))}
       </div>
       </div>
    </section>
  );
};

export default Spaciality;

const specialItems = [
  { icon: FiMonitor, label: "Modern web design" },
  { icon: FiPieChart, label: "Digital marketing" },
  { icon: FiBox, label: "Corporate Identity" },
  { icon: FiPenTool, label: "Illustrations & art" },
  { icon: FiCamera, label: "Photography & video" },
  { icon: FiUserCheck, label: "Consulting services" },
];
