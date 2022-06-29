
import { FC, ReactNode } from "react";
import { Parallax } from "react-parallax";
import styles from "../styles/ImageSection.module.scss";

type Props = {
  imgUrl: string;
  imgPos: "left" | "right";
  children: ReactNode;
};

const ImageSection: FC<Props> = (props) => {
  return (
    <section className={styles.container + " " + styles[props.imgPos]}>
      <div className={styles.left}>
        <div className={styles.imgBx}>
          <Parallax
            style={{ height: "100%", width: "100%" }}
            bgImageStyle={{
              height: "140%",
              width: "auto",
              objectFit: "cover",
              objectPosition: "top"
            }}
            bgImage={props.imgUrl}
            strength={-100}
            bgImageAlt="Image"
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.box}>{props.children}</div>
      </div>
    </section>
  );
};

export default ImageSection;
