import { useEffect, useRef, useState } from 'react';
import styles from './SkillTree.module.scss';
import { scrollTrigger04Block } from './04Scroll';
const abilities = [
    {
        title: "Unique abilities",
         
        imgSrcMain:'./assets/mainPage/04/1.gif',
        description: "In the world of Peexi Punk, a variety of classes are presented, each with unique abilities and playstyles. Players are given the opportunity to choose a class that matches their preferences and combat strategy.",
    },
    {
        title: "Active abilities",
         
        imgSrcMain:'./assets/mainPage/04/2.gif',
        description: "In Peexi Punk, players have access to abilities that deal damage, provide defense, or perform other actions during battles, actively interacting with the world and influencing the outcome of the fights.",
    },
    {
        title: "Passive abilities",
         
        imgSrcMain:'./assets/mainPage/04/3.gif',
        description: "Passive abilities are constantly active, enhancing the character's attributes or providing additional advantages without requiring activation, allowing players to continually improve their character and adapt to various situations on the battlefield.",
    }
];
const SkillTree:React.FC = () => {
    const [currentAbilityIndex, setCurrentAbilityIndex] = useState(0);
     
     
    const [typeState, setTypeState] = useState(true);
    
   /*  const titleElement = document.querySelector(`.${styles.section04BoxTitle}`)!; */
       
    const titleElement = useRef<HTMLDivElement>(null);   
    const textElement = useRef<HTMLDivElement>(null);   
    
    const animationExecuted = useRef(false);
    const [animation3Finished, setAnimation3Finished] = useState(false);
    useEffect(() => {
         if (!animationExecuted.current) {
             scrollTrigger04Block();
             
             animationExecuted.current = true;
         }
     }, []);
     useEffect(()=> {
        const heading3 = document.querySelector(`.${styles.section04Title}`)!;
        const text3 = heading3.textContent!;
        heading3.innerHTML = ''; // Очищаем содержимое

        // Создаем элементы span для каждого символа, включая пробелы
        text3.split('').forEach((letter) => {
            const span = document.createElement('span');
            span.textContent = letter;
            
            span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
            heading3.appendChild(span);
        });

        ScrollTrigger.create({
            trigger: heading3,
            start: "-200 80%",
            end: "0 75%",
            /* markers: true, */ // Уберите это в продакшене

            onUpdate: (self) => {
                const progress = self.progress;
                const totalSpans = heading3.querySelectorAll('span').length;
                const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

                heading3.querySelectorAll('span').forEach((span, index) => {
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
                const totalSpans = heading3.querySelectorAll('span').length;
                const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

                heading3.querySelectorAll('span').forEach((span, index) => {
                    // Устанавливаем непрозрачность обратно в зависимости от индекса и прогресса
                    gsap.to(span, {
                        opacity: index >= totalSpans - visibleCount ? 1 : 0,
                        duration: 0.2,
                        ease: "power1.out"
                    });
                });
            }
        });
        setAnimation3Finished(true); 
    }, [])
    useEffect(() => {
        async function asyncTypeText(element: Element, text: string, speed: number | undefined): Promise<void> {
            if (!typeState) return;

            element.textContent = "";  
            let index = 0;
            setTypeState(false); 

            return new Promise((resolve) => {
                function type() {
                    if (index < text.length) {
                        element.textContent += text.charAt(index);
                        index++;
                        setTimeout(type, speed);
                    } else {
                        setTypeState(true);
                        resolve(); // Resolve the promise when typing is complete
                    }
                }
                type();
            });
        }

        const imgElement = document.querySelector(`.${styles.section04BoxImemsBox}`)! as HTMLElement;
        const imgElementBox = document.querySelectorAll<HTMLElement>(`.${styles.section04BoxImemsImg}`)!;
        const imgElementMain = document.querySelector(`.${styles.section04BoxLeftImg}`)! as HTMLImageElement;
         
        const prevBtn = document.querySelector(`.${styles.section04BoxImagePrev}`)!;
        const nextBtn = document.querySelector(`.${styles.section04BoxImageNext}`)!;

        async function updateAbility() {
            const ability = abilities[currentAbilityIndex];
            titleElement.current!.classList.remove(styles.show);
           
            textElement.current!.style.opacity = '0';
            
            imgElement.classList.remove(styles.show);
            imgElementMain.classList.remove(styles.show);
            imgElementBox.forEach((el) => {
                if (el.classList.contains(styles.section04BoxImemsImgOpacity)) {
                    el.classList.remove(styles.section04BoxImemsImgOpacity);
                }
            });

            setTimeout(() => {
                imgElementMain.src = ability.imgSrcMain;
                imgElementMain.classList.add(styles.show);
            }, 100);

            // Wait for the typing effect to finish before proceeding
            await asyncTypeText(titleElement.current!, ability.title, 15);
            setTimeout(() => {
            titleElement.current!.classList.add(styles.show);
            }, 200);
            setTimeout(() => {
                imgElementBox.forEach((el, index) => {
                    if (index === 0 && currentAbilityIndex === 0) {
                        el.classList.add(styles.section04BoxImemsImgOpacity);
                    }
                    if (index !== 2 && currentAbilityIndex === 1) {
                        el.classList.add(styles.section04BoxImemsImgOpacity);
                    }
                    if (currentAbilityIndex === 2) {
                        el.classList.add(styles.section04BoxImemsImgOpacity);
                    }
                });
                imgElement.classList.add(styles.show);
                
            }, 200);
            setTimeout(() => {
                textElement.current!.textContent = ability.description;                 
                textElement.current!.style.opacity = '1';
                
            }, 300);
        }
     
    prevBtn.classList.toggle(styles.active, currentAbilityIndex > 0);
    nextBtn.classList.toggle(styles.active, currentAbilityIndex < abilities.length - 1);
    if (animation3Finished) {
        if (titleElement.current && textElement.current) {
             updateAbility();  
        }
    }
    }, [animation3Finished, currentAbilityIndex]);
    
    
    
    
     
    return (
        <section className={`${styles.section04} sectionMainMargin`}>
      <h1 className={styles.section04Title}>Skill tree</h1>
      <div className={styles.section04Box}>
        <div className={styles.section04BoxLeft}>
          <svg className={styles.border} width="670" height="600" viewBox="0 0 670 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_414_63" fill="white">
            <path fillRule="evenodd" clipRule="evenodd" d="M670 8C670 3.58172 666.418 0 662 0H48C43.5817 0 40 3.58173 40 8.00001L40 216.686C40 218.808 39.1571 220.843 37.6569 222.343L2.34315 257.657C0.842855 259.157 0 261.192 0 263.314V544.496C0 547.008 1.17957 549.374 3.18548 550.885L66.2254 598.389C67.6127 599.435 69.3027 600 71.0399 600H406.686C408.808 600 410.843 599.157 412.343 597.657L447.657 562.343C449.157 560.843 451.192 560 453.314 560H662C666.418 560 670 556.418 670 552V8ZM0.475722 600C0.932351 600 1.1267 599.419 0.762018 599.144V599.144C0.448542 598.908 0 599.132 0 599.524V599.524C0 599.787 0.212988 600 0.475722 600V600Z"/>
            </mask>
            <path d="M447.657 562.343L448.364 563.05L447.657 562.343ZM412.343 597.657L411.636 596.95L412.343 597.657ZM66.2254 598.389L65.6236 599.188L66.2254 598.389ZM3.18548 550.885L2.58366 551.684L3.18548 550.885ZM40 216.686L39 216.686L40 216.686ZM37.6569 222.343L36.9497 221.636L37.6569 222.343ZM48 1H662V-1H48V1ZM41 216.686L41 8.00001L39 8.00001L39 216.686L41 216.686ZM3.05025 258.364L38.364 223.05L36.9497 221.636L1.63604 256.95L3.05025 258.364ZM1 544.496V263.314H-1V544.496H1ZM2.58366 551.684L65.6236 599.188L66.8272 597.59L3.78729 550.086L2.58366 551.684ZM406.686 599H71.0399V601H406.686V599ZM446.95 561.636L411.636 596.95L413.05 598.364L448.364 563.05L446.95 561.636ZM662 559H453.314V561H662V559ZM669 8V552H671V8H669ZM-1 599.524C-1 600.339 -0.339296 601 0.475722 601V599C0.765273 599 1 599.235 1 599.524H-1ZM1.36383 598.346C0.391408 597.613 -1 598.307 -1 599.524H1C1 599.957 0.505677 600.203 0.160205 599.943L1.36383 598.346ZM0.160205 599.943C-0.241698 599.64 -0.0275128 599 0.475722 599V601C1.89221 601 2.49509 599.198 1.36383 598.346L0.160205 599.943ZM662 561C666.971 561 671 556.971 671 552H669C669 555.866 665.866 559 662 559V561ZM448.364 563.05C449.677 561.737 451.457 561 453.314 561V559C450.927 559 448.638 559.948 446.95 561.636L448.364 563.05ZM406.686 601C409.073 601 411.362 600.052 413.05 598.364L411.636 596.95C410.323 598.263 408.543 599 406.686 599V601ZM65.6236 599.188C67.1844 600.364 69.0856 601 71.0399 601V599C69.5199 599 68.0411 598.505 66.8272 597.59L65.6236 599.188ZM-1 544.496C-1 547.322 0.32702 549.983 2.58366 551.684L3.78729 550.086C2.03213 548.764 1 546.694 1 544.496H-1ZM1.63604 256.95C-0.0517897 258.638 -1 260.927 -1 263.314H1C1 261.457 1.7375 259.677 3.05025 258.364L1.63604 256.95ZM39 216.686C39 218.543 38.2625 220.323 36.9497 221.636L38.364 223.05C40.0518 221.362 41 219.073 41 216.686L39 216.686ZM662 1C665.866 1 669 4.13401 669 8H671C671 3.02944 666.971 -1 662 -1V1ZM48 -1C43.0294 -1 39 3.02944 39 8.00001L41 8.00001C41 4.13401 44.134 1 48 1V-1Z" fill="#707070" mask="url(#path-1-inside-1_414_63)"/>
          </svg>
          <svg className={styles.border_mob} width="473" height="424" viewBox="0 0 473 424" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_439_2876" fill="white">
            <path fillRule="evenodd" clipRule="evenodd" d="M25.9498 157.961C27.4501 156.46 28.293 154.426 28.293 152.304L28.293 8C28.293 3.58172 31.8747 0 36.293 0H465C469.418 0 473 3.58173 473 8.00001V388C473 392.418 469.418 396 465 396H321.678C319.523 396 317.459 396.87 315.953 398.412L293.33 421.588C291.825 423.13 289.761 424 287.606 424H50.4875C48.7504 424 47.0604 423.435 45.673 422.389L3.18548 390.372C1.17957 388.861 0 386.495 0 383.983V187.224C0 185.102 0.842853 183.068 2.34314 181.567L25.9498 157.961ZM0.319727 423.641C0.188199 423.542 0 423.636 0 423.8V423.8C0 423.911 0.0893653 424 0.199603 424V424C0.391194 424 0.472738 423.756 0.319727 423.641V423.641Z"/>
            </mask>
            <path d="M2.34314 181.567L1.63604 180.86L2.34314 181.567ZM3.18548 390.372L3.78729 389.574L3.18548 390.372ZM45.673 422.389L45.0712 423.188L45.673 422.389ZM293.33 421.588L294.046 422.287L293.33 421.588ZM315.953 398.412L315.238 397.713L315.953 398.412ZM25.9498 157.961L26.6569 158.668L25.9498 157.961ZM28.293 8L27.293 8L28.293 8ZM27.293 8L27.293 152.304L29.293 152.304L29.293 8L27.293 8ZM465 -1H36.293V1H465V-1ZM474 388V8.00001H472V388H474ZM321.678 397H465V395H321.678V397ZM294.046 422.287L316.669 399.11L315.238 397.713L292.615 420.89L294.046 422.287ZM50.4875 425H287.606V423H50.4875V425ZM2.58366 391.171L45.0712 423.188L46.2748 421.59L3.78729 389.574L2.58366 391.171ZM-1 187.224V383.983H1V187.224H-1ZM25.2427 157.254L1.63604 180.86L3.05025 182.274L26.6569 158.668L25.2427 157.254ZM0.199603 425C1.35106 425 1.84113 423.535 0.921544 422.842L-0.28209 424.44C-0.895657 423.977 -0.568668 423 0.199603 423V425ZM-1 423.8C-1 424.463 -0.462919 425 0.199603 425V423C0.64165 423 1 423.358 1 423.8H-1ZM1 423.8C1 424.461 0.24533 424.837 -0.28209 424.44L0.921544 422.842C0.131069 422.247 -1 422.811 -1 423.8H1ZM1 187.224C1 185.368 1.7375 183.587 3.05025 182.274L1.63604 180.86C-0.0517899 182.548 -1 184.837 -1 187.224H1ZM3.78729 389.574C2.03213 388.251 1 386.181 1 383.983H-1C-1 386.809 0.327021 389.471 2.58366 391.171L3.78729 389.574ZM50.4875 423C48.9675 423 47.4888 422.505 46.2748 421.59L45.0712 423.188C46.632 424.364 48.5332 425 50.4875 425V423ZM292.615 420.89C291.298 422.239 289.492 423 287.606 423V425C290.03 425 292.352 424.022 294.046 422.287L292.615 420.89ZM321.678 395C319.253 395 316.931 395.978 315.238 397.713L316.669 399.11C317.986 397.761 319.792 397 321.678 397V395ZM472 388C472 391.866 468.866 395 465 395V397C469.971 397 474 392.971 474 388H472ZM465 1C468.866 1 472 4.13401 472 8.00001H474C474 3.02945 469.971 -1 465 -1V1ZM27.293 152.304C27.293 154.16 26.5555 155.941 25.2427 157.254L26.6569 158.668C28.3448 156.98 29.293 154.691 29.293 152.304L27.293 152.304ZM29.293 8C29.293 4.13401 32.427 1 36.293 1V-1C31.3224 -1 27.293 3.02943 27.293 8L29.293 8Z" fill="#707070" mask="url(#path-1-inside-1_439_2876)"/>
          </svg>
          <svg className={styles.border_mob2} width="704" height="632" viewBox="0 0 704 632" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_338_1761" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M664.818 396.525C662.942 398.4 661.889 400.944 661.889 403.596L661.889 621.07C661.889 626.593 657.412 631.07 651.889 631.07L10 631.07C4.47715 631.07 0 626.593 0 621.07L0 51.6749C0 46.1521 4.47716 41.6749 10 41.6749H226.027C228.721 41.6749 231.301 40.5879 233.183 38.6601L267.976 3.01541C269.858 1.08756 272.438 0.000549316 275.132 0.000549316L632.84 0.000549316C635.012 0.000549316 637.124 0.70737 638.858 2.01419L700.018 48.1013C702.526 49.9908 704 52.9481 704 56.0877L704 353.2C704 355.852 702.946 358.396 701.071 360.271L664.818 396.525Z"/>
              </mask>
              <path d="M701.071 360.271L701.778 360.978L701.071 360.271ZM700.018 48.1013L700.62 47.3027L700.018 48.1013ZM638.858 2.01419L638.257 2.81283L638.858 2.01419ZM267.976 3.01541L268.692 3.71393L267.976 3.01541ZM233.183 38.6601L232.467 37.9615L233.183 38.6601ZM661.889 403.596L660.889 403.596L661.889 403.596ZM664.818 396.525L665.525 397.232L664.818 396.525ZM662.889 621.07L662.889 403.596L660.889 403.596L660.889 621.07L662.889 621.07ZM10 632.07L651.889 632.07V630.07L10 630.07V632.07ZM-1 51.6749L-1 621.07H1L1 51.6749H-1ZM226.027 40.6749H10V42.6749H226.027V40.6749ZM267.261 2.3169L232.467 37.9615L233.898 39.3586L268.692 3.71393L267.261 2.3169ZM632.84 -0.999451L275.132 -0.999451V1.00055L632.84 1.00055V-0.999451ZM700.62 47.3027L639.46 1.21556L638.257 2.81283L699.416 48.9L700.62 47.3027ZM705 353.2L705 56.0877H703L703 353.2H705ZM665.525 397.232L701.778 360.978L700.364 359.564L664.11 395.818L665.525 397.232ZM703 353.2C703 355.587 702.052 357.876 700.364 359.564L701.778 360.978C703.841 358.915 705 356.117 705 353.2H703ZM699.416 48.9C701.673 50.6005 703 53.2621 703 56.0877H705C705 52.6341 703.378 49.3811 700.62 47.3027L699.416 48.9ZM632.84 1.00055C634.795 1.00055 636.696 1.63669 638.257 2.81283L639.46 1.21556C637.553 -0.221948 635.229 -0.999451 632.84 -0.999451V1.00055ZM268.692 3.71393C270.386 1.97886 272.708 1.00055 275.132 1.00055V-0.999451C272.169 -0.999451 269.331 0.196261 267.261 2.3169L268.692 3.71393ZM226.027 42.6749C228.99 42.6749 231.828 41.4792 233.898 39.3586L232.467 37.9615C230.773 39.6966 228.451 40.6749 226.027 40.6749V42.6749ZM1 51.6749C1 46.7044 5.02944 42.6749 10 42.6749V40.6749C3.92487 40.6749 -1 45.5998 -1 51.6749H1ZM10 630.07C5.02944 630.07 1 626.041 1 621.07H-1C-1 627.145 3.92486 632.07 10 632.07V630.07ZM662.889 403.596C662.889 401.209 663.837 398.92 665.525 397.232L664.11 395.818C662.048 397.88 660.889 400.678 660.889 403.596L662.889 403.596ZM660.889 621.07C660.889 626.041 656.859 630.07 651.889 630.07V632.07C657.964 632.07 662.889 627.145 662.889 621.07L660.889 621.07Z" fill="#707070" mask="url(#path-1-inside-1_338_1761)"/>
          </svg>
          <img className={`${styles.section04BoxLeftImg} ${styles.show}`} src="./assets/mainPage/04/1.gif" alt="alt text" />
        </div>
        <div className={styles.section04BoxRight}>
          <div className={styles.section04BoxRightItems}>
            <div className={styles.section04BoxCol}>
              <div className={styles.section04BoxImems}>
                <h1 className={`${styles.section04BoxTitle} ${styles.show}`} ref={titleElement}>Active Abilities</h1>
                <div className={`${styles.section04BoxImemsBox} ${styles.show}`}>
                  <div className={`${styles.section04BoxImemsImg} ${styles.section04BoxImemsImgOpacity}`}></div>
                  <div className={styles.section04BoxImemsImg}></div>
                  <div className={styles.section04BoxImemsImg}></div>
                </div>
              </div>
              <p className={`${styles.section04BoxText} ${styles.show}`} ref={textElement}>
                In Peexi Punk, players have access to abilities that deal damage, provide defense, or perform other actions during battles, actively interacting with the world and influencing the outcome of the fights.
              </p>
            </div>
            <div className={styles.section04BoxImage}>
              <div className={styles.section04BoxImagePrev} 
               /*  onClick={() => setCurrentAbilityIndex((prev) => Math.max(prev - 1, 0))} */
                onClick={() => setCurrentAbilityIndex((prev) => {
                    if (typeState === true) {
                        return Math.max(prev - 1, 0); // Return the calculated value
                    }
                    return prev; // Ensure that we return the previous value if typeState is false
                })}>
                <svg className={styles.section04BoxImgLeft} width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="3" transform="matrix(-1 0 0 1 24 6)" fill="#FEFEFE"/>
                    <rect width="3" height="3" transform="matrix(-1 0 0 1 6 3)" fill="#FEFEFE"/>
                    <rect width="3" height="3" transform="matrix(-1 0 0 1 9 0)" fill="#FEFEFE"/>
                    <rect width="3" height="3" transform="matrix(-1 0 0 1 6 9)" fill="#FEFEFE"/>
                    <rect width="3" height="3" transform="matrix(-1 0 0 1 9 12)" fill="#FEFEFE"/>
                </svg>
              </div>
              <div className={`${styles.section04BoxImageNext} ${styles.active}`} 
                onClick={() => setCurrentAbilityIndex((prev) => {
                    if (typeState === true) {
                        return Math.min(prev + 1, abilities.length - 1);  
                    }
                    return prev
                })}>
                <svg className={styles.section04BoxImgRight} width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="6" width="24" height="3" fill="#121212"/>
                    <rect x="18" y="3" width="3" height="3" fill="#121212"/>
                    <rect x="15" width="3" height="3" fill="#121212"/>
                    <rect x="18" y="9" width="3" height="3" fill="#121212"/>
                    <rect x="15" y="12" width="3" height="3" fill="#121212"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default SkillTree;


