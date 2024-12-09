import { useEffect, useRef } from 'react';
import styles from './Auction.module.scss';
import { scrollTrigger06Block } from './06Scroll';
 
const Auction = () => {
    useEffect(()=> {
        const heading6 = document.querySelector(`.${styles.section06BoxFirstTitle}`)!;
        const text6 = heading6.textContent!;
        heading6.innerHTML = ''; // Очищаем содержимое

        // Создаем элементы span для каждого символа, включая пробелы
        text6.split('').forEach((letter) => {
            const span = document.createElement('span');
            span.textContent = letter;     
            span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
            heading6.appendChild(span);
        });

        ScrollTrigger.create({
            trigger: heading6,
            start: "-200 80%",
            end: "0 75%",
            /* markers: true, */ // Уберите это в продакшене

            onUpdate: (self) => {
                const progress = self.progress;
                const totalSpans = heading6.querySelectorAll('span').length;
                const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

                heading6.querySelectorAll('span').forEach((span, index) => {
                    // Устанавливаем непрозрачность в зависимости от индекса и прогресса
                    gsap.to(span, {
                        opacity: index < visibleCount ? 1 : 0,
                        duration: 0.3,
                        ease: "power1.out"
                    });
                });
            },

            onLeaveBack: (self) => {
                const progress = self.progress;
                const totalSpans = heading6.querySelectorAll('span').length;
                const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

                heading6.querySelectorAll('span').forEach((span, index) => {
                    // Устанавливаем непрозрачность обратно в зависимости от индекса и прогресса
                    gsap.to(span, {
                        opacity: index >= totalSpans - visibleCount ? 1 : 0,
                        duration: 0.2,
                        ease: "power1.out"
                    });
                });
            }
        });
    }, [])
    const animationExecuted = useRef(false);
    useEffect(()=> {
        
        if (!animationExecuted.current) { 
     
            scrollTrigger06Block()
            animationExecuted.current = true; 
             
          }
             
    }, [])
    return (
        <section className={`${styles.section06} sectionMainMargin`}>
            <div className={styles.section06BoxFirst}>
                <h3 className={styles.section06BoxFirstTitle}>Auction</h3>
                <div className={styles.section06BoxFirstItems}>
                    <p className={styles.section06Subtext}>The in-game auction is a platform where players can <span className={styles.section06SubtextSpan}>buy and sell items using
                        game tokens.</span> Tokens are earned in the game, for achievements, or purchased with real money,
                        providing equal opportunities for everyone.</p>
                    <div className={`${styles.section06BoxSecondItemImg2} ${styles.section06BoxSecondItemImg2_mob}`}>
                        <img className={styles.section06BoxSecondItemImgEl2} src="./assets/mainPage/06/06R.png" alt="img" />
                    </div>
                    <div className={styles.section06BoxFirstItemElements}>
                        <div className={styles.section06BoxLeft}>
                            <p className={`${styles.section06Text} ${styles.section06Text1}`}>Players can acquire various items on the auction using these tokens, which can be
                                earned through gameplay, completing quests, achievements, or purchased with real money.
                            </p>
                            <p className={`${styles.section06Text} ${styles.section06Text2}`}>
                                This system creates a balance between in-game effort and monetary investment, ensuring equal
                                opportunities for progress for all players.
                            </p>
                        </div>

                        <div className={styles.section06BoxRight}>
                            <p className={`${styles.section06Text} ${styles.section06Text3}`}>Players can list their items on the auction, whether it's rare weapons, unique
                                skins, resources, or other valuable in-game objects. Sellers set the price in tokens, and other players
                                can purchase items at the listed price.</p>
                            <a href="#" className={styles.section06LinkBox}>
                                <p className={styles.section06Link}>Go to auction</p>
                                <svg className={styles.section06LinkImg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3828 21.082L15.3016 18.1632L18.2203 21.082L15.3016 24.0009L12.3828 21.082Z" fill="#FEFEFE" />
                                    <path d="M12.3828 21.082L15.3016 18.1632L18.2203 21.082L15.3016 24.0009L12.3828 21.082Z" fill="#FEFEFE" />
                                    <path d="M18.1621 15.3027L21.0809 12.3839L23.9996 15.3027L21.0809 18.2216L18.1621 15.3027Z" fill="#FEFEFE" />
                                    <path d="M18.1621 15.3027L21.0809 12.3839L23.9996 15.3027L21.0809 18.2216L18.1621 15.3027Z" fill="#FEFEFE" />
                                    <path d="M6.60547 21.082L9.52424 18.1632L12.443 21.082L9.52424 24.0009L6.60547 21.082Z" fill="#FEFEFE" />
                                    <path d="M6.60547 21.082L9.52424 18.1632L12.443 21.082L9.52424 24.0009L6.60547 21.082Z" fill="#FEFEFE" />
                                    <path d="M0.826172 21.082L3.74494 18.1632L6.66371 21.082L3.74494 24.0009L0.826172 21.082Z" fill="#FEFEFE" />
                                    <path d="M0.826172 21.082L3.74494 18.1632L6.66371 21.082L3.74494 24.0009L0.826172 21.082Z" fill="#FEFEFE" />
                                    <path d="M18.1621 3.74414L21.0809 0.825297L23.9996 3.74414L21.0809 6.66298L18.1621 3.74414Z" fill="#FEFEFE" />
                                    <rect width="4.12782" height="4.12782" transform="matrix(0.707098 -0.707116 0.707098 0.707116 18.1621 9.52344)" fill="#FEFEFE" />
                                    <path d="M2.91797 0L23.9331 21.0157L21.0143 23.9345L-0.000799547 2.91884L2.91797 0Z" fill="#FEFEFE" />
                                </svg>

                            </a>
                            <div className={styles.section06LinkBoxLine}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.section06BoxSecond}>
                <div className={styles.section06BoxSecondItemImg}>
                    <div className={styles.section06BoxSecondItemImgBox}>
                        <img className={styles.section06BoxSecondItemImgEl0} src="./assets/mainPage/06/06L.svg" alt="img" />

                    </div>

                    <p className={styles.section06BoxSecondText}>Exchange</p>
                </div>
                <div className={styles.section06BoxSecondItemImg2}>
                    <img className={styles.section06BoxSecondItemImgEl} src="./assets/mainPage/06/06Rsvg.png" alt="img" />
                </div>

            </div>
        </section>
    )
}
export default Auction;