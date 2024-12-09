import { useEffect } from 'react';
import styles from './Items.module.scss';
import { scrollTrigger05Block } from './05Scroll';
const Items = () => {
  useEffect(() => {
    if (window.innerWidth < 980) {
      const cols: NodeListOf<HTMLElement> = document.querySelectorAll(`.${styles.section05Col}`);

      // Добавляем обработчики событий для каждого элемента
      cols.forEach((col) => {

        col.addEventListener('click', () => {
          cols.forEach((item: HTMLElement) => { item.classList.remove(styles.section05ColActive) });
          col.classList.add(styles.section05ColActive);


        });
      });
    }
    const cols: NodeListOf<HTMLElement> = document.querySelectorAll(`.${styles.section05Col}`);
    let activeColClass = 0
    // Добавляем обработчики событий для каждого элемента
    cols.forEach((col: HTMLElement) => {
      col.addEventListener('mouseenter', () => {
        if (col !== col.parentNode?.lastElementChild) {
          cols[activeColClass].classList.remove(styles.section05ColActive);

          col.classList.add(styles.section05ColActive);
          activeColClass = Array.from(cols).indexOf(col);
        }
      });


    });
  }, [])
  useEffect(() => {
    const heading4 = document.querySelector(`.${styles.section05Title}`)!;
    const text4 = heading4.textContent!;
    heading4.innerHTML = ''; // Очищаем содержимое

    // Создаем элементы span для каждого символа, включая пробелы
    text4.split('').forEach((letter) => {
      const span = document.createElement('span');
      span.textContent = letter;

      span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
      heading4.appendChild(span);
    });

    ScrollTrigger.create({
      trigger: heading4,
      start: "-200 80%",
      end: "0 75%",
      /* markers: true, */ // Уберите это в продакшене

      onUpdate: (self) => {
        const progress = self.progress;
        const totalSpans = heading4.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading4.querySelectorAll('span').forEach((span, index) => {
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
        const totalSpans = heading4.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading4.querySelectorAll('span').forEach((span, index) => {
          // Устанавливаем непрозрачность обратно в зависимости от индекса и прогресса
          gsap.to(span, {
            opacity: index >= totalSpans - visibleCount ? 1 : 0,
            duration: 0.2,
            ease: "power1.out"
          });
        });
      }
    });
    scrollTrigger05Block()
  }, [])
  return (
    <section className={styles.section05}>

      <h1 className={`${styles.section05Title} section05Margin`}>Items</h1>

      <div className={`${styles.section05Col} ${styles.section05ColActive}`}>
        <div className={styles.section05Row}>
          <h3 className={styles.section05RowTitle}>/01</h3>
          <h4 className={styles.section05RowSubtitle}>Acquired items</h4>


          <svg className={styles.section05RowImage} width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H0.892857H1.78571H2.67857H3.57143H4.46429H5.35714H6.25H7.14286V0.9375V1.875V2.8125V3.75V4.6875V5.625V6.5625V7.5H6.25H5.35714H4.46429H3.57143H2.67857H1.78571H0.892857H0V6.5625V5.625V4.6875V3.75V2.8125V1.875V0.9375V0ZM14.2857 15H13.3929H12.5H11.6071H10.7143H9.82143H8.92857H8.03571H7.14286V14.0625V13.125V12.1875V11.25V10.3125V9.375V8.4375V7.5H8.03571H8.92857H9.82143H10.7143H11.6071H12.5H13.3929H14.2857V8.4375V9.375V10.3125V11.25V12.1875V13.125V14.0625V15ZM21.4286 22.5H20.5357H19.6429H18.75H17.8571H16.9643H16.0714H15.1786H14.2857V21.5625V20.625V19.6875V18.75V17.8125V16.875V15.9375L14.2857 15H15.1786H16.0714H16.9643H17.8571H18.75H19.6429H20.5357H21.4286V15.9375V16.875V17.8125V18.75V19.6875V20.625V21.5625V22.5ZM28.5714 22.5H27.6786H26.7857H25.8929H25H24.1071H23.2143H22.3214H21.4286V23.4375V24.375V25.3125V26.25V27.1875V28.125V29.0625V30H22.3214H23.2143H24.1071H25H25.8929H26.7857H27.6786H28.5714V29.0625V28.125V27.1875V26.25V25.3125V24.375V23.4375V22.5ZM35.7143 15V15.9375V16.875V17.8125V18.75V19.6875V20.625V21.5625V22.5H34.8214H33.9286H33.0357H32.1429H31.25H30.3571H29.4643H28.5714V21.5625V20.625V19.6875V18.75V17.8125V16.875V15.9375V15H29.4643H30.3571H31.25H32.1429H33.0357H33.9286H34.8214H35.7143ZM42.8571 7.5V8.4375V9.375V10.3125V11.25V12.1875V13.125V14.0625V15H41.9643H41.0714H40.1786H39.2857H38.3929H37.5H36.6071H35.7143V14.0625V13.125V12.1875V11.25V10.3125V9.375V8.4375V7.5H36.6071H37.5H38.3929H39.2857H40.1786H41.0714H41.9643H42.8571ZM42.8571 7.5V6.5625V5.625V4.6875V3.75V2.8125V1.875V0.9375V0H43.75H44.6429H45.5357H46.4286H47.3214H48.2143H49.1071H50V0.9375V1.875V2.8125V3.75V4.6875V5.625V6.5625V7.5H49.1071H48.2143H47.3214H46.4286H45.5357H44.6429H43.75H42.8571Z" fill="#707070" />
          </svg>

        </div>
        <p className={styles.section05RowText}>At locations, items drop from enemy NPCs. They have unique properties and abilities, and can also be traded and sold at auctions.</p>
        <img className={`${styles.section05RowImageLeft} ${styles.section05RowImageLeft_1}`} src="./assets/mainPage/05/item1.png" alt="alt text" />
      </div>

      <div className={styles.section05Col}>
        <div className={styles.section05Row}>
          <h3 className={styles.section05RowTitle}>/02</h3>
          <h4 className={styles.section05RowSubtitle}>Crafted items</h4>
          <svg className={styles.section05RowImage} width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H0.892857H1.78571H2.67857H3.57143H4.46429H5.35714H6.25H7.14286V0.9375V1.875V2.8125V3.75V4.6875V5.625V6.5625V7.5H6.25H5.35714H4.46429H3.57143H2.67857H1.78571H0.892857H0V6.5625V5.625V4.6875V3.75V2.8125V1.875V0.9375V0ZM14.2857 15H13.3929H12.5H11.6071H10.7143H9.82143H8.92857H8.03571H7.14286V14.0625V13.125V12.1875V11.25V10.3125V9.375V8.4375V7.5H8.03571H8.92857H9.82143H10.7143H11.6071H12.5H13.3929H14.2857V8.4375V9.375V10.3125V11.25V12.1875V13.125V14.0625V15ZM21.4286 22.5H20.5357H19.6429H18.75H17.8571H16.9643H16.0714H15.1786H14.2857V21.5625V20.625V19.6875V18.75V17.8125V16.875V15.9375L14.2857 15H15.1786H16.0714H16.9643H17.8571H18.75H19.6429H20.5357H21.4286V15.9375V16.875V17.8125V18.75V19.6875V20.625V21.5625V22.5ZM28.5714 22.5H27.6786H26.7857H25.8929H25H24.1071H23.2143H22.3214H21.4286V23.4375V24.375V25.3125V26.25V27.1875V28.125V29.0625V30H22.3214H23.2143H24.1071H25H25.8929H26.7857H27.6786H28.5714V29.0625V28.125V27.1875V26.25V25.3125V24.375V23.4375V22.5ZM35.7143 15V15.9375V16.875V17.8125V18.75V19.6875V20.625V21.5625V22.5H34.8214H33.9286H33.0357H32.1429H31.25H30.3571H29.4643H28.5714V21.5625V20.625V19.6875V18.75V17.8125V16.875V15.9375V15H29.4643H30.3571H31.25H32.1429H33.0357H33.9286H34.8214H35.7143ZM42.8571 7.5V8.4375V9.375V10.3125V11.25V12.1875V13.125V14.0625V15H41.9643H41.0714H40.1786H39.2857H38.3929H37.5H36.6071H35.7143V14.0625V13.125V12.1875V11.25V10.3125V9.375V8.4375V7.5H36.6071H37.5H38.3929H39.2857H40.1786H41.0714H41.9643H42.8571ZM42.8571 7.5V6.5625V5.625V4.6875V3.75V2.8125V1.875V0.9375V0H43.75H44.6429H45.5357H46.4286H47.3214H48.2143H49.1071H50V0.9375V1.875V2.8125V3.75V4.6875V5.625V6.5625V7.5H49.1071H48.2143H47.3214H46.4286H45.5357H44.6429H43.75H42.8571Z" fill="#707070" />
          </svg>

        </div>
        <p className={styles.section05RowText}>Crafted items are created in the game with random characteristics and abilities using NPCs in neutral cities.</p>
        <img className={`${styles.section05RowImageLeft} ${styles.section05RowImageLeft_2}`} src="./assets/mainPage/05/item2.png" alt="alt text" />
      </div>


      <div className={styles.section05Col}>
        <div className={styles.section05Row}>
          <h3 className={styles.section05RowTitle}>/03</h3>
          <h4 className={styles.section05RowSubtitle}>Store items</h4>
          <svg className={styles.section05RowImage} width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H0.892857H1.78571H2.67857H3.57143H4.46429H5.35714H6.25H7.14286V0.9375V1.875V2.8125V3.75V4.6875V5.625V6.5625V7.5H6.25H5.35714H4.46429H3.57143H2.67857H1.78571H0.892857H0V6.5625V5.625V4.6875V3.75V2.8125V1.875V0.9375V0ZM14.2857 15H13.3929H12.5H11.6071H10.7143H9.82143H8.92857H8.03571H7.14286V14.0625V13.125V12.1875V11.25V10.3125V9.375V8.4375V7.5H8.03571H8.92857H9.82143H10.7143H11.6071H12.5H13.3929H14.2857V8.4375V9.375V10.3125V11.25V12.1875V13.125V14.0625V15ZM21.4286 22.5H20.5357H19.6429H18.75H17.8571H16.9643H16.0714H15.1786H14.2857V21.5625V20.625V19.6875V18.75V17.8125V16.875V15.9375L14.2857 15H15.1786H16.0714H16.9643H17.8571H18.75H19.6429H20.5357H21.4286V15.9375V16.875V17.8125V18.75V19.6875V20.625V21.5625V22.5ZM28.5714 22.5H27.6786H26.7857H25.8929H25H24.1071H23.2143H22.3214H21.4286V23.4375V24.375V25.3125V26.25V27.1875V28.125V29.0625V30H22.3214H23.2143H24.1071H25H25.8929H26.7857H27.6786H28.5714V29.0625V28.125V27.1875V26.25V25.3125V24.375V23.4375V22.5ZM35.7143 15V15.9375V16.875V17.8125V18.75V19.6875V20.625V21.5625V22.5H34.8214H33.9286H33.0357H32.1429H31.25H30.3571H29.4643H28.5714V21.5625V20.625V19.6875V18.75V17.8125V16.875V15.9375V15H29.4643H30.3571H31.25H32.1429H33.0357H33.9286H34.8214H35.7143ZM42.8571 7.5V8.4375V9.375V10.3125V11.25V12.1875V13.125V14.0625V15H41.9643H41.0714H40.1786H39.2857H38.3929H37.5H36.6071H35.7143V14.0625V13.125V12.1875V11.25V10.3125V9.375V8.4375V7.5H36.6071H37.5H38.3929H39.2857H40.1786H41.0714H41.9643H42.8571ZM42.8571 7.5V6.5625V5.625V4.6875V3.75V2.8125V1.875V0.9375V0H43.75H44.6429H45.5357H46.4286H47.3214H48.2143H49.1071H50V0.9375V1.875V2.8125V3.75V4.6875V5.625V6.5625V7.5H49.1071H48.2143H47.3214H46.4286H45.5357H44.6429H43.75H42.8571Z" fill="#707070" />
          </svg>
        </div>
        <p className={styles.section05RowText}>Items from the shop are purchased on the platform's internal marketplace. These
          items have unique qualities and properties.</p>
        <img className={`${styles.section05RowImageLeft} ${styles.section05RowImageLeft_3}`} src="./assets/mainPage/05/item3.png" alt="alt text" />

      </div>

      <div className={styles.section05Col}>
        <div className={styles.section05Row}>
          <h3 className={styles.section05RowTitle}>/04</h3>
          <h4 className={styles.section05RowSubtitle}>Shop</h4>
          <svg className={styles.section05RowImage} width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H0.892857H1.78571H2.67857H3.57143H4.46429H5.35714H6.25H7.14286V0.9375V1.875V2.8125V3.75V4.6875V5.625V6.5625V7.5H6.25H5.35714H4.46429H3.57143H2.67857H1.78571H0.892857H0V6.5625V5.625V4.6875V3.75V2.8125V1.875V0.9375V0ZM14.2857 15H13.3929H12.5H11.6071H10.7143H9.82143H8.92857H8.03571H7.14286V14.0625V13.125V12.1875V11.25V10.3125V9.375V8.4375V7.5H8.03571H8.92857H9.82143H10.7143H11.6071H12.5H13.3929H14.2857V8.4375V9.375V10.3125V11.25V12.1875V13.125V14.0625V15ZM21.4286 22.5H20.5357H19.6429H18.75H17.8571H16.9643H16.0714H15.1786H14.2857V21.5625V20.625V19.6875V18.75V17.8125V16.875V15.9375L14.2857 15H15.1786H16.0714H16.9643H17.8571H18.75H19.6429H20.5357H21.4286V15.9375V16.875V17.8125V18.75V19.6875V20.625V21.5625V22.5ZM28.5714 22.5H27.6786H26.7857H25.8929H25H24.1071H23.2143H22.3214H21.4286V23.4375V24.375V25.3125V26.25V27.1875V28.125V29.0625V30H22.3214H23.2143H24.1071H25H25.8929H26.7857H27.6786H28.5714V29.0625V28.125V27.1875V26.25V25.3125V24.375V23.4375V22.5ZM35.7143 15V15.9375V16.875V17.8125V18.75V19.6875V20.625V21.5625V22.5H34.8214H33.9286H33.0357H32.1429H31.25H30.3571H29.4643H28.5714V21.5625V20.625V19.6875V18.75V17.8125V16.875V15.9375V15H29.4643H30.3571H31.25H32.1429H33.0357H33.9286H34.8214H35.7143ZM42.8571 7.5V8.4375V9.375V10.3125V11.25V12.1875V13.125V14.0625V15H41.9643H41.0714H40.1786H39.2857H38.3929H37.5H36.6071H35.7143V14.0625V13.125V12.1875V11.25V10.3125V9.375V8.4375V7.5H36.6071H37.5H38.3929H39.2857H40.1786H41.0714H41.9643H42.8571ZM42.8571 7.5V6.5625V5.625V4.6875V3.75V2.8125V1.875V0.9375V0H43.75H44.6429H45.5357H46.4286H47.3214H48.2143H49.1071H50V0.9375V1.875V2.8125V3.75V4.6875V5.625V6.5625V7.5H49.1071H48.2143H47.3214H46.4286H45.5357H44.6429H43.75H42.8571Z" fill="#707070" />
          </svg>
        </div>
        <p className={styles.section05RowText}>The shop will feature skins for characters, assistants, and in-game vehicles. Skins do not affect stats and only change appearance.</p>
        <img className={`${styles.section05RowImageLeft} ${styles.section05RowImageLeft_4}`} src="./assets/mainPage/05/item4.png" alt="alt text" />
      </div>

      <div className={styles.section05Col}>
        <div className={styles.section05Row}>
          <h3 className={styles.section05RowTitle}>/05</h3>
          <h4 className={styles.section05RowSubtitle}>Apartments</h4>
          <svg className={styles.section05RowImage} width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H0.892857H1.78571H2.67857H3.57143H4.46429H5.35714H6.25H7.14286V0.9375V1.875V2.8125V3.75V4.6875V5.625V6.5625V7.5H6.25H5.35714H4.46429H3.57143H2.67857H1.78571H0.892857H0V6.5625V5.625V4.6875V3.75V2.8125V1.875V0.9375V0ZM14.2857 15H13.3929H12.5H11.6071H10.7143H9.82143H8.92857H8.03571H7.14286V14.0625V13.125V12.1875V11.25V10.3125V9.375V8.4375V7.5H8.03571H8.92857H9.82143H10.7143H11.6071H12.5H13.3929H14.2857V8.4375V9.375V10.3125V11.25V12.1875V13.125V14.0625V15ZM21.4286 22.5H20.5357H19.6429H18.75H17.8571H16.9643H16.0714H15.1786H14.2857V21.5625V20.625V19.6875V18.75V17.8125V16.875V15.9375L14.2857 15H15.1786H16.0714H16.9643H17.8571H18.75H19.6429H20.5357H21.4286V15.9375V16.875V17.8125V18.75V19.6875V20.625V21.5625V22.5ZM28.5714 22.5H27.6786H26.7857H25.8929H25H24.1071H23.2143H22.3214H21.4286V23.4375V24.375V25.3125V26.25V27.1875V28.125V29.0625V30H22.3214H23.2143H24.1071H25H25.8929H26.7857H27.6786H28.5714V29.0625V28.125V27.1875V26.25V25.3125V24.375V23.4375V22.5ZM35.7143 15V15.9375V16.875V17.8125V18.75V19.6875V20.625V21.5625V22.5H34.8214H33.9286H33.0357H32.1429H31.25H30.3571H29.4643H28.5714V21.5625V20.625V19.6875V18.75V17.8125V16.875V15.9375V15H29.4643H30.3571H31.25H32.1429H33.0357H33.9286H34.8214H35.7143ZM42.8571 7.5V8.4375V9.375V10.3125V11.25V12.1875V13.125V14.0625V15H41.9643H41.0714H40.1786H39.2857H38.3929H37.5H36.6071H35.7143V14.0625V13.125V12.1875V11.25V10.3125V9.375V8.4375V7.5H36.6071H37.5H38.3929H39.2857H40.1786H41.0714H41.9643H42.8571ZM42.8571 7.5V6.5625V5.625V4.6875V3.75V2.8125V1.875V0.9375V0H43.75H44.6429H45.5357H46.4286H47.3214H48.2143H49.1071H50V0.9375V1.875V2.8125V3.75V4.6875V5.625V6.5625V7.5H49.1071H48.2143H47.3214H46.4286H45.5357H44.6429H43.75H42.8571Z" fill="#707070" />
          </svg>
        </div>
        <p className={styles.section05RowText}>Each user can purchase apartments for mining internal currency. Apartments are bought in the neutral zone, within certain buildings.</p>
        <img className={`${styles.section05RowImageLeft} ${styles.section05RowImageLeft_5}`} src="./assets/mainPage/05/item5.png" alt="alt text" />
      </div>
      <div className={styles.section05Col} style={{ "height": "1px" }}>

      </div>

    </section>
  )
}
export default Items;