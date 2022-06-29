import { FC, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import styles from "../../styles/Nav/Menu.module.scss";

const Menu: FC = () => {
  const [showList, setShowList] = useState(false);
  return (
    <div className={styles.navLinks}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>{" "}
          <span onClick={() => setShowList((l) => !l)}>
            <BiChevronDown />
          </span>
          <div
            className={`${showList ? styles.active : ""} ${styles.dropdown}`}
          >
            <ul>
              {[
                "Full width grid",
                "Grid",
                "Masonry",
                "Slideshow",
                "Carousel",
              ].map((list) => (
                <li key={list}>
                  <a href="#">{list}</a>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
