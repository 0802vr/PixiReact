import { useEffect, useRef } from "react"; 
import MainTiles from "../../Tiles/MainTiles";
import styles from './MainBanner.module.scss';
import { scrollTrigger01Block } from "./01Scroll";
 


const projectContent = [
  {
      description: "Our world is one of neon lights in megacities, giant corporations, and endless opportunities for exploration and adventure. In Peexi Punk, you will:",
      elements: [
          "Explore detailed locations, from grim alleyways to high-tech laboratories.",
          "Meet and interact with numerous unique NPCs, each with their own goals and stories.",
          "Engage in dynamic events and missions that develop the main storyline."
      ],
      src: './assets/mainPage/01/01.png'
  },
  {
      description: "Peexi Punk is integrated into the Haqq Network, ensuring the security and reliability of all in-game transactions. Blockchain technologies empower the game to achieve:",
      elements: [
          "Affordable transactions, allowing players to easily exchange items and resources.",
          "Convenient and secure crafting, creating unique items and equipment.",
          "Efficient auction system functioning, where every player can trade and sell their discoveries."
      ],
      src: './assets/mainPage/01/02.png'
  },
  {
      description: "In Peexi Punk, there are no limits to your imagination and possibilities. Start your adventure today and become part of our growing community. Be ready for the unknown, and let your cyberpunk dreams become reality. Welcome to the future. Welcome to Peexi Punk.",
      elements: [
           
      ],
      src: './assets/mainPage/01/03.png'
  }
];
const MainBanner:React.FC = () => {
   
  useEffect(()=> {
    
      const subtitles = document.querySelectorAll(`.${styles.joinExploreSubtitle}`)!;
      const worldDescription = document.querySelector(`.${styles.worldDescription}`)!;
      const projectBox = document.querySelector(`.${styles.aboutProjectBox}`)!;
      const joinExploreSection = document.querySelector(`.${styles.joinExploreSection}`)! as HTMLElement;
  
      subtitles.forEach((subtitle) => {
          subtitle.addEventListener('click', () => {
              // Remove active class from all subtitles
              subtitles.forEach((sub) => sub.classList.remove(styles.joinExploreSubtitleActive));
              // Add active class to the clicked subtitle
              subtitle.classList.add(styles.joinExploreSubtitleActive);
  
              // Get the index of the clicked subtitle
              const index = subtitle.getAttribute('data-index') as unknown as number;
              console.log(index)
              if(window.innerWidth < 600){
                  if(index == 0){
                      console.log(index)
                      joinExploreSection.style.transform = `translateX(0)`; // Make sure to append 'px'
      
                  }
                  if(index == 1){
                      console.log(index)
                      joinExploreSection.style.transform = `translateX(-${subtitles[0].clientWidth / 1.5}px)`; // Make sure to append 'px'
      
                  }
                  if(index == 2){
                      joinExploreSection.style.transform = `translateX(-${subtitles[0].clientWidth + subtitles[2].clientWidth}px)`; // Make sure to append 'px'
      
                  }
              }
              function changeImage(index:number) {
                  const imgMainBanner = document.querySelector(`.${styles.rectWhoWeAreSectionImg}`) as HTMLImageElement;
              
                  imgMainBanner.classList.remove(styles.show); // Убираем класс, чтобы начать анимацию фейда
                  worldDescription.classList.remove(styles.show); // Убираем класс, чтобы начать анимацию фейда
                  projectBox.classList.remove(styles.show); // Убираем класс, чтобы начать анимацию фейда
              
                  setTimeout(() => {
                      imgMainBanner.src = projectContent[index].src;                    
                                        
                      imgMainBanner.classList.add(styles.show); // Добавляем класс для фейда
                      // Добавляем класс для фейда
                      
                  }, 100);
                  setTimeout(() => {
                      worldDescription.textContent = projectContent[index].description; 
                      worldDescription.classList.add(styles.show);
                      
                  }, 300)
                  setTimeout(() => {
                      projectBox.innerHTML = projectContent[index].elements.map(element => `
                          <div class="${styles.aboutProjectBoxElement}">
                            <div class="${styles.rectAdventureSection}"></div>
                            <p class="${styles.aboutProjectBoxElementText}">${element}</p>
                        </div>
                      `).join('');
                      projectBox.classList.add(styles.show);  
                  }, 500)  
              }
              
              
              changeImage(index);
              
              
          });
      });
       
      
  
  }, [])
  const animationExecuted = useRef(false);
   
  useEffect(()=> {

    if (!animationExecuted.current) { 
     
      scrollTrigger01Block()
      animationExecuted.current = true; 
       
    }
       
     
  
  }, [])
  
  return (
    <>
    <section className={`${styles.section01} ${styles.sectionMainMargin}`}>
      
      <div className={styles.section01MainBoxTitle}>
        <h1 className={styles.section01MainTitle}>peexi</h1>
        <h1 className={styles.section01MainTitle}>punk</h1>
      </div>

      <h3 className={styles.section01MainSubtitle}>
        An online MMO game based on the F2T (free to play) model, set in a cyberpunk style. It operates within a large
        platform ecosystem.
      </h3>
     {/*  <div className={styles.section01MainBtnPlay}>
        <button className={styles.section01MainBtnPlayBoxBtn}>Play closed beta test</button>
        <button className={styles.section01MainBtnPlayBoxSvg}></button>
      </div> */}

      <div className={styles.aboutProjectCont}>
        <h1 className={styles.aboutProjectHeading}>About the project</h1>
        <div className={styles.joinExploreSectionMain}>
          <div className={styles.joinExploreSection}>
            <h3 className={`${styles.joinExploreSubtitle} ${styles.joinExploreSubtitleActive}`} data-index="0">
              Explore the Future World
            </h3>
            <h3 className={styles.joinExploreSubtitle} data-index="1">Blockchain and Technologies</h3>
            <h3 className={styles.joinExploreSubtitle} data-index="2">Join us</h3>
          </div>
        </div>
        <div className={styles.rectWhoWeAreSection}>
          <div className={styles.rectWhoWeAreSectionBox}>
            <img className={`${styles.rectWhoWeAreSectionImg} ${styles.show}`} src="./assets/mainPage/01/01.png" alt="img"/>
            {/* <img className={styles.rectWhoWeAreSectionImg} src="./assets/mainPage/01/02.png" alt="img"/>
            <img className={styles.rectWhoWeAreSectionImg} src="./assets/mainPage/01/03.png" alt="img"/> */}
          </div>
        </div>
        <div className={styles.aboutProjectItems}>
          <p className={`${styles.worldDescription} ${styles.show}`}>
            Our world is filled with neon lights of megacities, giant corporations and endless opportunities for
            exploration and adventure. In Peexi Punk you will:
          </p>
          <div className={`${styles.aboutProjectBox} ${styles.show}`}>
            <div className={styles.aboutProjectBoxElement}>
              <div className={styles.rectAdventureSection}></div>
              <p className={styles.aboutProjectBoxElementText}>Explore detailed locations, from dark alleys to high-tech laboratories.</p>
            </div>
            <div className={styles.aboutProjectBoxElement}>
              <div className={styles.rectAdventureSection}></div>
              <p className={styles.aboutProjectBoxElementText}>Meet and interact with many unique NPCs, each with their own goals and stories.</p>
            </div>
            <div className={styles.aboutProjectBoxElement}>
              <div className={styles.rectAdventureSection}></div>
              <p className={styles.aboutProjectBoxElementText}>Get involved in dynamic events and missions that develop the main storyline.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <MainTiles/>
    </>
  );
}

export default MainBanner;
