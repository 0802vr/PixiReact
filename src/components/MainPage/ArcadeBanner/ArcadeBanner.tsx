import { useEffect, useRef } from "react";
import { scrollTrigger07Block } from "./07Scroll";
import styles from "./ArcadeBanner.module.scss"
 
const ArcadeBanner: React.FC = () => {
    const animationExecuted = useRef(false);
    useEffect(()=> {
        if (!animationExecuted.current) { 
     
            scrollTrigger07Block()
            animationExecuted.current = true; 
             
          }
       
    }, [])
    return (
        <section className={styles.section07} >
            <div className={styles.section07Box} >
                <h2 className={`${styles.section07Title} ${styles.section07Title1}`}>
                    Arcade season <span className={styles.section07TitleSpan}>“Start of the journey”</span>
                </h2>
                
                <p className={styles.section07Text}>The Arcade Season consists of story acts that reveal the game's narrative. The
                    first acts will cover the beginning of the journey and the planets in the star system. Users will receive
                    rewards for completing tasks within the acts.</p>
                <div className={styles.section07BtnBox}>

                    <svg className={styles.section07BtnSvg} viewBox="0 0 320 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.2696 1.08783C26.8446 0.704534 27.5201 0.5 28.2111 0.5H316C317.933 0.5 319.5 2.067 319.5 4V15.8593C319.5 17.0295 318.915 18.1223 317.941 18.7714L293.73 34.9122C293.155 35.2955 292.48 35.5 291.789 35.5H3.99999C2.067 35.5 0.5 33.933 0.5 32V20.1407C0.5 18.9705 1.08485 17.8777 2.05855 17.2286L26.2696 1.08783Z" stroke="#FEFEFE" />
                    </svg>
                    <button className={styles.section07Btn}>Comming Soon</button>

                </div>
            </div>
        </section>
    );
};

export default ArcadeBanner;