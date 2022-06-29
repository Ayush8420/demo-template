import { FC, useEffect, useRef, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import Menu from "./Nav/Menu";
import Social from "./Nav/Social";

const Navbar: FC = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.menu} onClick={() => setActive(true)}>
          <VscThreeBars /> Menu
        </div>
        <div className={styles.logo}>
          <Image
            src="https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2021/08/dark-cr-logo-mob.svg"
            alt="Logo"
            height={33.33}
            width={100}
          />
        </div>
        <div className={styles.socialDiv}>
          <Social />
        </div>
      </nav>
      <div
        onClick={() => setActive(false)}
        className={`${styles.backdrop} ${active ? styles.active : ""}`}
      ></div>
      <div className={`${styles.slider} ${active ? styles.active : ""}`}>
        <div className={styles.close} onClick={() => setActive(false)}>
          <ImCross />
        </div>

        <Menu />
        <div className={styles.socialDiv}>
          <Social />
        </div>
      </div>
    </>
  );
};

export default Navbar;
