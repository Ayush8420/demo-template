import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import styles from "../../styles/Animated/HeadText.module.scss";

type Props = {
  words: string[];
};

const HeadText: FC<Props> = ({ words }) => {

    const [id,setId] = useState(0)
    useEffect(()=> {
        
        const intervalId = setInterval(() => {
            setId(_id => (_id + 1 )% words.length)
        },3000)

        return () => {
            clearInterval(intervalId)
        }

    },[words])


  return (
      <div className={styles.text}>
        {words
          .map((word) => word.split(""))
          .map((word, i) => (
            <div key={i} className={`${id === i? styles.active : ""} ${styles.word}`}>
              {word.map((letter, j) => (
                <span key={j} style={{"--i": `${j}`} as CSSProperties}>{letter}</span>
              ))}
            </div>
          ))}
      </div>

  );
};

export default HeadText;
