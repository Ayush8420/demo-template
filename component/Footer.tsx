import { FC } from "react";
import styles from "../styles/Footer.module.scss"

const Footer :FC = () => {
    return <footer className={styles.footer}>
        <div className={styles.left}>
            <p>All rights reserved 2022 © Seven Creative</p>
        </div>
        <div className={styles.right}>
            <p>hello@dream-theme.com | tel. +001 234 56 78</p>
        </div>
    </footer>
}

export default Footer