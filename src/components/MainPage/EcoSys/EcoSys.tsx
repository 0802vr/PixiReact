import { useEffect, useRef } from 'react';
import styles from './EcoSys.module.scss';
import { scrollTrigger08Block } from './08Scroll';
import { Link } from 'react-router-dom';
const svgLine = <svg className={styles.section08CardImgSvg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
const EcoSys: React.FC = () => {
  useEffect(() => {
    const heading8 = document.querySelector(`.${styles.section08Title}`)!;
    const text8 = heading8.textContent!;
    heading8.innerHTML = ''; // Очищаем содержимое

    // Создаем элементы span для каждого символа, включая пробелы
    text8.split('').forEach((letter) => {
      const span = document.createElement('span');
      span.textContent = letter;

      span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
      heading8.appendChild(span);
    });

    ScrollTrigger.create({
      trigger: heading8,
      start: "-200 80%",
      end: "0 75%",
      /* markers: true, */ // Уберите это в продакшене

      onUpdate: (self) => {
        const progress = self.progress;
        const totalSpans = heading8.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading8.querySelectorAll('span').forEach((span, index) => {
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
        const totalSpans = heading8.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading8.querySelectorAll('span').forEach((span, index) => {
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
     
      scrollTrigger08Block()
      animationExecuted.current = true; 
       
    }
    
  }, [])
  return (
    <section className={`${styles.section08} sectionMainMargin`}>
      <div className={styles.section08FirstBox}>
        <h3 className={styles.section08Title}>Eco system</h3>
        <p className={styles.section08FirstText}>The game <span className={styles.spanEco}>ecosystem includes</span> the game itself, an auction, an in-game goods store, a launchpad, staking, token exchange, arcade season, and a player&#x27;s personal account.</p>
      </div>
      <div className={styles.section08SecondBoxMain}>
        <div className={styles.section08SecondBox}>
          <div className={`${styles.section08Card}  ${styles.section08CardSoon}`}>
            <div className={styles.section08CardBox}>
              <p className={styles.section08CardNum}>[01]</p>
              <div className={styles.section08CardElements}>
                <p className={styles.section08CardTitle}>game</p>
                <div className={styles.section08CardImg}>
                 
                 {/*  {svgLine} */}

                </div>
              </div>
              <p className={styles.section08CardSubtitle}>SOON</p>
            </div>
            <p className={styles.section08CardText}>The central element of the ecosystem, where players earn tokens and items that can be used in other parts of the ecosystem.</p>
          </div>
          <div className={`${styles.section08Card}  ${styles.section08CardSoon}`} >
            <div className={styles.section08CardBox}>
              <p className={styles.section08CardNum}>[02]</p>
              <div className={styles.section08CardElements}>
                <p className={styles.section08CardTitle}>Auction</p>
                <div className={styles.section08CardImg}>
                {/* {svgLine} */}
                </div>
              </div>
              <p className={styles.section08CardSubtitle}>SOON</p>
            </div>
            <p className={styles.section08CardText}>Allows players to buy and sell items using in-game tokens, encouraging active trading and economic development within the game.</p>
          </div>
          <div className={`${styles.section08Card} ${styles.section08CardOpacity}`}>
            <div className={styles.section08CardBox}>
              <p className={styles.section08CardNum}>[01]</p>
              <div className={styles.section08CardElements}>
                <p className={styles.section08CardTitle}>game</p>
                <div className={styles.section08CardImg}>

                </div>
              </div>
            </div>
            <p className={styles.section08CardText}>The central element of the ecosystem, where players earn tokens and items that can be used in other parts of the ecosystem.</p>
          </div>
          <div className={`${styles.section08Card}  ${styles.section08CardSoon}`}>
            <div className={styles.section08CardBox}>
              <p className={styles.section08CardNum}>[03]</p>
              <div className={styles.section08CardElements}>
                <div >
                  <p className={`${styles.section08CardTitle} ${styles.section08CardTitleInGame}`}>In-Game</p>
                  <p className={`${styles.section08CardTitle} ${styles.section08CardTitleInGame}`}>Goods Store</p>
                </div>

                <div className={styles.section08CardImg}>
                {/* {svgLine} */}
                </div>
              </div>
              <p className={styles.section08CardSubtitle}>SOON</p>
            </div>
            <p className={styles.section08CardText}>Offers various items such as skins, weapons, and upgrades for in-game tokens. The store is regularly updated with new items.</p>
          </div>
          <div className={`${styles.section08Card}  ${styles.section08CardOpacity}`}>
            <div className={styles.section08CardBox}>
              <p className={styles.section08CardNum}>[01]</p>
              <div className={styles.section08CardElements}>
                <p className={styles.section08CardTitle}>game</p>
                <div className={styles.section08CardImg}>
                {svgLine}
                </div>
              </div>
            </div>
            <p className={styles.section08CardText}>The central element of the ecosystem, where players earn tokens and items that can be used in other parts of the ecosystem.</p>
          </div>
          <Link to='/shop' className={styles.section08Card}>
            <div className={styles.section08CardBox}>
              <p className={styles.section08CardNum}>[04]</p>
              <div className={styles.section08CardElements}>
                <p className={styles.section08CardTitle}>Shop</p>
                <div className={styles.section08CardImg}>
                {svgLine}
                </div>
              </div>
            </div>
            <p className={styles.section08CardText}>Enables players to purchase collectible items by investing their tokens and receiving rewards in case of success.</p>
          </Link>
          <div className={`${styles.section08Card}  ${styles.section08CardSoon}`}>
            <div className={styles.section08CardBox}>
              <p className={styles.section08CardNum}>[05]</p>
              <div className={styles.section08CardElements}>
                <p className={styles.section08CardTitle}>Staking</p>
                <div className={styles.section08CardImg}>
                {/* {svgLine} */}
                </div>
              </div>
              <p className={styles.section08CardSubtitle}>SOON</p>
            </div>
            <p className={styles.section08CardText}>Provides an opportunity to earn passive income by locking tokens for a specific period, with rewards paid in additional tokens.</p>
          </div>
          <div className={`${styles.section08Card}  ${styles.section08CardSoon}`}>
            <div className={styles.section08CardBox}>
              <p className={styles.section08CardNum}>[06]</p>
              <div className={styles.section08CardElements}>
                <div>
                  <p className={`${styles.section08CardTitle} ${styles.section08CardTitleInGame}`}>Token</p>
                  <p className={`${styles.section08CardTitle} ${styles.section08CardTitleInGame}`}>exchange</p>
                </div>

                <div className={styles.section08CardImg}>

                </div>
              </div>
              <p className={styles.section08CardSubtitle}>SOON</p>
            </div>
            <p className={styles.section08CardText}>In the personal account, players can exchange in-game tokens for the company’s token, converting in-game achievements into a more universal value.</p>
          </div>
          <div className={`${styles.section08Card}  ${styles.section08CardSoon}`}>
            <div className={styles.section08CardBox}>
              <p className={styles.section08CardNum}>[07]</p>
              <div className={styles.section08CardElements}>
                <div>
                  <p className={`${styles.section08CardTitle} ${styles.section08CardTitleInGame}`}>ARCADE </p>
                  <p className={`${styles.section08CardTitle} ${styles.section08CardTitleInGame}`}>SEASON</p>
                </div>

                <div className={styles.section08CardImg}>
               {/*  {svgLine} */}
                </div>
                
              </div>
              <p className={styles.section08CardSubtitle}>SOON</p>
            </div>
            <p className={styles.section08CardText}>Gives access to exclusive tasks and rewards. For completing tasks, players receive bonuses and items that can be used in the game or sold at auction.</p>
          </div>
          <div className={`${styles.section08Card}  ${styles.section08CardSoon}`}>
            <div className={styles.section08CardBox}>
              <p className={styles.section08CardNum}>[08]</p>
              <div className={styles.section08CardElements}>
                <div>
                  <p className={`${styles.section08CardTitle} ${styles.section08CardTitleInGame}`}>Personal </p>
                  <p className={`${styles.section08CardTitle} ${styles.section08CardTitleInGame}`}>Account</p>
                </div>

                <div className={styles.section08CardImg}>
                {/* {svgLine} */}
                </div>
                
              </div>
              <p className={styles.section08CardSubtitle}>SOON</p>
            </div>
            <p className={styles.section08CardText}>The central management hub where players can track achievements, manage tokens, participate in auctions and staking, exchange tokens, and activate the battle pass.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcoSys;