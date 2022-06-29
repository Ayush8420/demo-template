import { FC } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaBehance, FaFacebook, FaYoutube } from "react-icons/fa";
import styles from "../../styles/Nav/Social.module.scss";

const Social: FC = () => {
  return (
    <div className={styles.social}>
      <ul>
        {[FaFacebook, AiOutlineTwitter, FaYoutube, FaBehance].map((Icon, i) => (
          <li key={i}>
            <a href="#">{<Icon />}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
