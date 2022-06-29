import Image from "next/image";
import { FC, useState } from "react";
import styles from "../styles/DesktopNavbar.module.scss";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaBehance, FaFacebook, FaYoutube } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi"
import Menu from "./Nav/Menu";
import Social from "./Nav/Social";

const DesktopNavbar: FC = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="https://the7.io/elementor-minimal-creative-dark/wp-content/uploads/sites/83/2021/08/dark-cr-logo-dsk.svg"
          alt="Logo"
          height={115}
          width={70}
        />
      </div>

     <Menu />
    <Social />
    </nav>
  );
};

export default DesktopNavbar;
