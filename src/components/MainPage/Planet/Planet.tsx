import { useEffect, useRef, useState } from 'react';
import PlanetTile from '../../Tiles/PlanetTile';
import { scrollTriggerPlanet } from './02Scroll';
import styles from './Planet.module.scss';


const Planet = ()=> {
  const animationExecuted = useRef(false);
  useEffect(()=> {
    window.scrollTo(0,0);
  }, [])
  useEffect(()=> {

    if (!animationExecuted.current) { 
     
      scrollTriggerPlanet();
      animationExecuted.current = true; 
       
    }
       
     
  
  }, [])
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing after it's visible
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1, // Adjust threshold as needed
      }
    );
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Check if ref.current is not null before unobserving
      }
    };
  }, [ref]);

  return (
    <>
     <section className={styles.section02} >
    
    
    <img src="./assets/mainPage/02/sky.png" alt="section02MainImg" className={styles.section02MainImg}/>
    <div className={`sectionMainMargin ${styles.section02Bottom}`}>
      <h2 className={`${styles.section02Title} ${styles.section02Title1}`}>
        
         <div className={styles.mainCharacterImage} >
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacterImg1}  alt="alt text"/>
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacterImg2} alt="alt text"/>
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacterImg3} alt="alt text"/>
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacterImg4} alt="alt text"/>
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacterImg5} alt="alt text"/>
         </div>
        The storyline unfolds in the future, in the star system of Kronaris.
        Here, among numerous planets, one of the human colonies and other intelligent races are searching for the new
        worlds to colonize. These explorers are called Progress Seekers. The 
           
            <span className={styles.spanBackFirst}>game's plot develops on two planets,</span> 
          where the bravery and resourcefulness of the Seekers will determine the
          </h2>
           
          <h2 className={styles.span2Section}>
            
            <div className={styles.mainCharacterImage2} >
              <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacter2Img1}  alt="alt text"/>
              <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacter2Img2} alt="alt text"/>
              <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacter2Img3} alt="alt text"/>
              <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacter2Img4} alt="alt text"/>
              <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacter2Img5} alt="alt text"/>
             </div>
            future of the entire system. 
            <span className={styles.spanBack}>Join this incredible adventure</span> 
          and become part of the epic saga of interstellar exploration.
        
      </h2>
      <h2 className={`${styles.section02Title} ${styles.section02TitleMin}`}>
      
        <div className={styles.mainCharacterImage} >
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacterImg1}  alt="alt text"/>
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacterImg2} alt="alt text"/>
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacterImg3} alt="alt text"/>
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacterImg4} alt="alt text"/>
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacterImg5} alt="alt text"/>
         </div>
        The storyline unfolds in the future, in the star system of Kronaris.
        Here, among numerous planets, one of the human colonies and other intelligent races are searching for the new
        worlds to colonize. These explorers are called Progress Seekers. The 
           
            <span className={styles.spanBack}>game's plot develops on two planets,</span> 
          where the bravery and resourcefulness of the Seekers will determine the
         
         <div className={styles.mainCharacterImage2} >
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacter2Img1}  alt="alt text"/>
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacter2Img2} alt="alt text"/>
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacter2Img3} alt="alt text"/>
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacter2Img4} alt="alt text"/>
          <img src="./assets/mainPage/02/cub.png" className={styles.mainCharacter2Img5} alt="alt text"/>
         </div>
            future of the entire system. 
            <span className={styles.spanBack}>Join this incredible adventure</span> 
          and become part of the epic saga of interstellar exploration.
        
      </h2>
    </div>
     
       
      
      <div className={styles.planetBoxContainer}>
        <div className={styles.planetBox}>
          <div className={styles.planetBoxImgCont}>
            <img className={`${styles.planetBoxImg} ${styles.planetBoxImg1}`} src="./assets/mainPage/02/planet1.png" alt="alt text" />
          </div>
          <div className={styles.planetDescriptionSection}>
            <div className={styles.planetNameSection}>
              <h3 className={`${styles.planetNameSubtitle} ${styles.planetNameSubtitle1}`}>
                Planet
              </h3>
              <h1 className={`${styles.planetTitle} ${styles.planetTitle1}`}>
                Astrania
              </h1>
              <p className={`${styles.planetHighlightText} ${styles.planetHighlightText1}`}>
                The first planet, where all adventurers land, serves as a neutral zone and the starting point for the
                adventure. The planet is equipped with high-tech hubs, including shopping centers and research
                laboratories. You can purchase apartments that allow you
                
                to mine the local currency – astrocredits.
              </p>
            </div>
            <div className={`${styles.planetBoxPresentSection} ${styles.planetBoxPresentSection1}`}>
              <div className={styles.planetBoxRow}>
                <div className={styles.planetBoxCol}>
                  <h3 className={styles.planetBoxSubtitle}>Lvl</h3>
                  <h3 className={styles.planetBoxText}>
                    1-10
                  </h3>
                </div>
                <div className={styles.planetBoxCol}>
                  <h3 className={styles.planetBoxSubtitle}>Dungeons</h3>
                  <h1 className={styles.planetBoxText}>1</h1>
                </div>
                <div className={styles.planetBoxCol}>
                  <h3 className={styles.planetBoxSubtitle}>Quests</h3>
                  <h1 className={styles.planetBoxText}>240+</h1>
                </div>
              </div>
              <div className={styles.planetBoxRow}>
                <div className={styles.planetBoxCol}>
                  <h3 className={styles.planetBoxSubtitle}>Boss</h3>
                  <h1 className={styles.planetBoxText}>1</h1>
                </div>
                <div className={styles.planetBoxCol}>
                  <h3 className={styles.planetBoxSubtitle}>Locations</h3>
                  <h1 className={styles.planetBoxText}>8</h1>
                </div>
                <div className={styles.planetBoxCol}>
                  <div className={styles.planetBoxSubtitle}>
                    Mined resources
                  </div>
                  <h1 className={styles.planetBoxText}>None</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`${styles.planetBox} ${styles.planetBox_second}`}>
          <div className={styles.planetBoxImgCont}>
            <img className={`${styles.planetBoxImg} ${styles.planetBoxImg2}`} src="./assets/mainPage/02/planet2.png" alt="alt text" />
          </div>
          <div className={styles.planetDescriptionSection}>
            <div className={styles.planetNameSection}>
              <h3 className={`${styles.planetNameSubtitle} ${styles.planetNameSubtitle2}`}>Planet</h3>
              <h1 className={`${styles.planetTitle} ${styles.planetTitle2}`}>Kronoskar</h1>
              <p className={`${styles.planetHighlightText} ${styles.planetHighlightText2}`}>The planet where Seekers go for the main storyline consists of seven combat
                zones,
                each with its unique style and features. Each location is inhabited by unique monsters and contains
                dungeons with mysterious artifacts and rare resources necessary for progressing through the storyline and
                upgrading equipment.</p>
            </div>
            <div className={`${styles.planetBoxPresentSection} ${styles.planetBoxPresentSection2}`}>
              <div className={styles.planetBoxRow}>
                <div className={styles.planetBoxCol}>
                  <h3 className={styles.planetBoxSubtitle}>Lvl</h3>
                  <h3 className={styles.planetBoxText}>
                    10-50
                  </h3>
                </div>
                <div className={styles.planetBoxCol}>
                  <h3 className={styles.planetBoxSubtitle}>Dungeons</h3>
                  <h1 className={styles.planetBoxText}>40+</h1>
                </div>
                <div className={styles.planetBoxCol}>
                  <h3 className={styles.planetBoxSubtitle}>Quests</h3>
                  <h1 className={styles.planetBoxText}>350+</h1>
                </div>
              </div>
              <div className={styles.planetBoxRow}>
                <div className={styles.planetBoxCol}>
                  <h3 className={styles.planetBoxSubtitle}>Boss</h3>
                  <h1 className={styles.planetBoxText}>40+</h1>
                </div>
                <div className={styles.planetBoxCol}>
                  <h3 className={styles.planetBoxSubtitle}>Locations</h3>
                  <h1 className={styles.planetBoxText}>12</h1>
                </div>
                <div className={styles.planetBoxCol}>
                  <div className={styles.planetBoxSubtitle}>
                    Mined resources
                  </div>
                  <h1 className={styles.planetBoxText}>150</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div ref={ref}></div>
    {isVisible && <PlanetTile />} 
    
    </>
  )
}
export default Planet;