import { useEffect } from 'react';
/* import FooterTile from '../Tiles/FooteTile'; */
import styles from './Blog.module.scss';
import { scrollTrigger09Block } from './09Scroll';
import { Link } from 'react-router-dom';
const Blog: React.FC = () => {
  useEffect(()=> {
    const heading8 = document.querySelector(`.${styles.section09Title}`)!;
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
    scrollTrigger09Block()
  },[])
    return ( 
      <>
        <section className={`${styles.section09} sectionMainMargin`}>
        <h3 className={styles.section09Title}>Blog</h3>
        <div className={styles.section09Box}>
          <div className={styles.section09BoxItem}>
            <div className={styles.section09BoxItemTitle}>
              <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" width="9" height="3" fill="#707070"/>
                <rect x="3" y="25" width="9" height="3" fill="#707070"/>
                <rect x="3" y="3" width="22" height="3" transform="rotate(90 3 3)" fill="#707070"/>
              </svg>
              <p className={styles.section09BoxItemTitleText}>News</p>
              <svg  viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="9" height="3" transform="matrix(-1 0 0 1 9 0)" fill="#707070"/>
                <rect width="9" height="3" transform="matrix(-1 0 0 1 9 25)" fill="#707070"/>
                <rect width="22" height="3" transform="matrix(4.1799e-08 1 1 -4.57113e-08 9 3)" fill="#707070"/>
              </svg>
            </div>
              <div className={styles.section09BoxItemRight}>
                <div className={styles.section09BoxItemRightFirst}>
                  <div className={`${styles.section09BoxItemTitle} ${styles.section09BoxItemTitle_pl}`}>
                    <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" width="9" height="3" fill="#707070"/>
                      <rect x="3" y="25" width="9" height="3" fill="#707070"/>
                      <rect x="3" y="3" width="22" height="3" transform="rotate(90 3 3)" fill="#707070"/>
                    </svg>
                    <p className={styles.section09BoxItemTitleText}>News</p>
                    <svg  viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="9" height="3" transform="matrix(-1 0 0 1 9 0)" fill="#707070"/>
                      <rect width="9" height="3" transform="matrix(-1 0 0 1 9 25)" fill="#707070"/>
                      <rect width="22" height="3" transform="matrix(4.1799e-08 1 1 -4.57113e-08 9 3)" fill="#707070"/>
                    </svg>
                  </div>
                  <h4 className={styles.section09BoxItemRightFirstTitle}>Immersive Experience Design: Expert Insights and Techniques</h4>
                  <p className={styles.section09BoxItemRightFirstText}>How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.</p>
                  <p className={styles.section09BoxItemRightFirstDate}>14 April 2024</p>
                </div>
                <div className={`${styles.section09BoxItemTitle} ${styles.section09BoxItemTitle_mob}`}>
                  <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" width="9" height="3" fill="#707070"/>
                    <rect x="3" y="25" width="9" height="3" fill="#707070"/>
                    <rect x="3" y="3" width="22" height="3" transform="rotate(90 3 3)" fill="#707070"/>
                  </svg>
                  <p className={styles.section09BoxItemTitleText}>News</p>
                  <svg  viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="9" height="3" transform="matrix(-1 0 0 1 9 0)" fill="#707070"/>
                    <rect width="9" height="3" transform="matrix(-1 0 0 1 9 25)" fill="#707070"/>
                    <rect width="22" height="3" transform="matrix(4.1799e-08 1 1 -4.57113e-08 9 3)" fill="#707070"/>
                  </svg>
                </div>
                <div className={styles.section09BoxItemRightSecond}>
                  <img src="./assets/mainPage/09/blogImg.png" alt="img"/>
                </div>
              </div>
          </div>
          <div className={styles.section09BoxItem}>
            <div className={styles.section09BoxItemTitle}>
              <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" width="9" height="3" fill="#707070"/>
                <rect x="3" y="25" width="9" height="3" fill="#707070"/>
                <rect x="3" y="3" width="22" height="3" transform="rotate(90 3 3)" fill="#707070"/>
              </svg>
              <p className={styles.section09BoxItemTitleText}>News</p>
              <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="9" height="3" transform="matrix(-1 0 0 1 9 0)" fill="#707070"/>
                <rect width="9" height="3" transform="matrix(-1 0 0 1 9 25)" fill="#707070"/>
                <rect width="22" height="3" transform="matrix(4.1799e-08 1 1 -4.57113e-08 9 3)" fill="#707070"/>
              </svg>
            </div>
              <div className={styles.section09BoxItemRight}>
                <div className={styles.section09BoxItemRightFirst}>
                  <div className={`${styles.section09BoxItemTitle} ${styles.section09BoxItemTitle_pl}`}>
                    <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" width="9" height="3" fill="#707070"/>
                      <rect x="3" y="25" width="9" height="3" fill="#707070"/>
                      <rect x="3" y="3" width="22" height="3" transform="rotate(90 3 3)" fill="#707070"/>
                    </svg>
                    <p className={styles.section09BoxItemTitleText}>News</p>
                    <svg  viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="9" height="3" transform="matrix(-1 0 0 1 9 0)" fill="#707070"/>
                      <rect width="9" height="3" transform="matrix(-1 0 0 1 9 25)" fill="#707070"/>
                      <rect width="22" height="3" transform="matrix(4.1799e-08 1 1 -4.57113e-08 9 3)" fill="#707070"/>
                    </svg>
                  </div>
                  <h4 className={styles.section09BoxItemRightFirstTitle}>Immersive Experience Design: Expert Insights and Techniques</h4>
                  <p className={styles.section09BoxItemRightFirstText}>How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.</p>
                  <p className={styles.section09BoxItemRightFirstDate}>14 April 2024</p>
                </div>
                <div className={`${styles.section09BoxItemTitle} ${styles.section09BoxItemTitle_mob}`}>
                  <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" width="9" height="3" fill="#707070"/>
                    <rect x="3" y="25" width="9" height="3" fill="#707070"/>
                    <rect x="3" y="3" width="22" height="3" transform="rotate(90 3 3)" fill="#707070"/>
                  </svg>
                  <p className={styles.section09BoxItemTitleText}>News</p>
                  <svg  viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="9" height="3" transform="matrix(-1 0 0 1 9 0)" fill="#707070"/>
                    <rect width="9" height="3" transform="matrix(-1 0 0 1 9 25)" fill="#707070"/>
                    <rect width="22" height="3" transform="matrix(4.1799e-08 1 1 -4.57113e-08 9 3)" fill="#707070"/>
                  </svg>
                </div>
                <div className={styles.section09BoxItemRightSecond}>
                  <img src="./assets/mainPage/09/blogImg.png" alt="img"/>
                </div>
              </div>
          </div>
          <div className={styles.section09BoxItem}>
              <div className={styles.section09BoxItemTitle}>
                <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" width="9" height="3" fill="#707070"/>
                  <rect x="3" y="25" width="9" height="3" fill="#707070"/>
                  <rect x="3" y="3" width="22" height="3" transform="rotate(90 3 3)" fill="#707070"/>
                </svg>
                <p className={styles.section09BoxItemTitleText}>News</p>
                <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="9" height="3" transform="matrix(-1 0 0 1 9 0)" fill="#707070"/>
                  <rect width="9" height="3" transform="matrix(-1 0 0 1 9 25)" fill="#707070"/>
                  <rect width="22" height="3" transform="matrix(4.1799e-08 1 1 -4.57113e-08 9 3)" fill="#707070"/>
                </svg>
              </div>
              <div className={styles.section09BoxItemRight}>
                <div className={styles.section09BoxItemRightFirst}>
                  <div className={`${styles.section09BoxItemTitle} ${styles.section09BoxItemTitle_pl}`}>
                    <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" width="9" height="3" fill="#707070"/>
                      <rect x="3" y="25" width="9" height="3" fill="#707070"/>
                      <rect x="3" y="3" width="22" height="3" transform="rotate(90 3 3)" fill="#707070"/>
                    </svg>
                    <p className={styles.section09BoxItemTitleText}>News</p>
                    <svg  viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="9" height="3" transform="matrix(-1 0 0 1 9 0)" fill="#707070"/>
                      <rect width="9" height="3" transform="matrix(-1 0 0 1 9 25)" fill="#707070"/>
                      <rect width="22" height="3" transform="matrix(4.1799e-08 1 1 -4.57113e-08 9 3)" fill="#707070"/>
                    </svg>
                  </div>
                  <h4 className={styles.section09BoxItemRightFirstTitle}>Immersive Experience Design: Expert Insights and Techniques</h4>
                  <p className={styles.section09BoxItemRightFirstText}>How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.</p>
                  <p className={styles.section09BoxItemRightFirstDate}>14 April 2024</p>
                </div>
                <div className={`${styles.section09BoxItemTitle} ${styles.section09BoxItemTitle_mob}`}>
                  <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" width="9" height="3" fill="#707070"/>
                    <rect x="3" y="25" width="9" height="3" fill="#707070"/>
                    <rect x="3" y="3" width="22" height="3" transform="rotate(90 3 3)" fill="#707070"/>
                  </svg>
                  <p className={styles.section09BoxItemTitleText}>News</p>
                  <svg  viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="9" height="3" transform="matrix(-1 0 0 1 9 0)" fill="#707070"/>
                    <rect width="9" height="3" transform="matrix(-1 0 0 1 9 25)" fill="#707070"/>
                    <rect width="22" height="3" transform="matrix(4.1799e-08 1 1 -4.57113e-08 9 3)" fill="#707070"/>
                  </svg>
                </div>
                <div className={styles.section09BoxItemRightSecond}>
                  <img src="./assets/mainPage/09/blogImg.png" alt="img"/>
                </div>
              </div>
          </div>
        </div>
        <div className={styles.section09BtnBox} >
           
            <button className={styles.section09BtnSvg} ></button>
            <Link className={styles.section09Btn} to='/blog'>See blog</Link>
          
        </div>
        
      </section>
      
      </>
    );
}
 
export default Blog;