import { useEffect, useState } from 'react';
import styles from './Classes.module.scss';
import { scrollTrigger03Block } from './03Scroll';
const playerData = [
    {
        id: '04',
        title: 'Healer',
        description: 'Restores health using nanobots.',
        backgroundImage: './assets/mainPage/03/players/04b.svg',
        mainImage: './assets/mainPage/03/players/04.png'
    },
    {
        id: '05',
        title: 'Ranger',
        description: 'Utilizes cutting-edge high-tech rifles.',
        backgroundImage: './assets/mainPage/03/players/05b.svg',
        mainImage: './assets/mainPage/03/players/05.png'
    },
    {
        id: '01',
        title: 'Battle Mage',
        description: 'Uses ancient crystals for pyromancy and other forms of magic.',
        backgroundImage: './assets/mainPage/03/players/b01.svg',
        mainImage: './assets/mainPage/03/players/01.png'
    },
    {
        id: '02',
        title: 'Warrior',
        description: 'Assault class: tank and damage dealer with paired light swords.',
        backgroundImage: './assets/mainPage/03/players/02b.svg',
        mainImage: './assets/mainPage/03/players/02.png'
    },
    {
        id: '03',
        title: 'Summoner',
        description: 'Uses summoning items to call forth different creatures that deal damage to enemy NPCs.',
        backgroundImage: './assets/mainPage/03/players/03b.svg',
        mainImage: './assets/mainPage/03/players/03.png'
    },
];
const Classes:React.FC = () => {
    const [elementsAnim, setElementsAnim] = useState(false);
    useEffect(()=> {
         
        let activeIndex = 2; // Начальный активный индекс
        const playerCont = document.querySelector(`.${styles.playerBoxContainer}`)! as HTMLElement;
        
        // Отрисовка слайдера
        const renderSlider = () => {
            playerCont.innerHTML = ''; // Очищаем контейнер
            const totalItems = playerData.length;
            
            // Начальный индекс для отображения
            const startIndex = (activeIndex - 2 + totalItems) % totalItems; // Начинаем с 2 элементов слева от активного
        
            for (let i = 0; i < 5; i++) {
                const index = (startIndex + i) % totalItems; // Циклический индекс
                const player = playerData[index];
                const isActive = index === activeIndex;
        
                const playerBox = document.createElement('div');
                playerBox.className = styles.playerBox
               
                    playerBox.innerHTML = `
                    <div class='${styles.playerItems}'>
                        <div class='${styles.playerItemsImages}'>
                            <img class='${styles.playerItemsImageBack}' src="${player.backgroundImage}" alt="Background image of ${player.title}" />
                            <img class='${styles.playerItemsImageMain}' src="${player.mainImage}" alt="Main image of ${player.title}" />
                             
                        </div>
                        <div class='${styles.playerBoxRow}'>
                            <div class='${styles.playerBoxCol}'>
                                <h6 class='${styles.playerBoxTitle}'>${player.title}</h6>
                                <h3 class='${styles.playerBoxNum}'>${player.id}</h3>
                            </div>
                            <p class='${styles.playerBoxText}'>
                                ${player.description}
                            </p>
                            
                        </div>
                        
                    </div>
                `;
        
              
                if(isActive){
                    playerBox.classList.add(styles.playerBoxActive)
                }
        
                // При клике изменяем активный элемент
                playerBox.addEventListener('click', () => updateSlider(index));
                playerCont.appendChild(playerBox);
                
            }
        
        
        };
        
        // Функция обновления слайдера
        const updateSlider = (index:number) => {
            if (index !== activeIndex) {
                 
                // Обновляем активный индекс
                activeIndex = index;
                renderSlider();
               
            }
             // Перерисовываем слайдер
        };
        
        // Изначальное отображение
        renderSlider();
        setElementsAnim(true)
    }, [])
    useEffect(()=> {
        const heading2 = document.querySelector(`.${styles.section03_box_title}`)!;
        const text2 = heading2.textContent!;
        heading2.innerHTML = ''; // Очищаем содержимое

        // Создаем элементы span для каждого символа, включая пробелы
        text2.split('').forEach((letter) => {
            const span = document.createElement('span');
            span.textContent = letter;
            
            span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
            heading2.appendChild(span);
        });

        ScrollTrigger.create({
            trigger: heading2,
            start: "-200 80%",
            end: "0 75%",
            /* markers: true, */ // Уберите это в продакшене

            onUpdate: (self) => {
                const progress = self.progress;
                const totalSpans = heading2.querySelectorAll('span').length;
                const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

                heading2.querySelectorAll('span').forEach((span, index) => {
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
                const totalSpans = heading2.querySelectorAll('span').length;
                const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

                heading2.querySelectorAll('span').forEach((span, index) => {
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
     
     
    useEffect(()=> {

        if (elementsAnim) { 
        
            scrollTrigger03Block()
            
        
        }
        
        
    
    }, [elementsAnim])
    
    return(
        <section className={styles.section03}>
            <div className={`${styles.section03_box} sectionMainMargin`}>
                <h3 className={styles.section03_box_title}>Unique classes</h3>
                <p className={styles.section03_box_text}>The game features <span className={styles.section03_box_text_span}>five unique classes,</span> each tied to a specific race.
                    Each className has its distinct playstyle and is suited for various tasks: from dealing damage to enemies to
                    tanking attacks and engaging in positional battles.</p>
            </div>
            <div className={`${styles.section03_itemsPlayers} sectionMainMargin`}>
                <img className={styles.playerBoxTriagleTop} src="./assets/mainPage/03/trial1.svg" alt="alt text" />
                <div className={styles.playerBoxContainer}>

                </div>
                <img className={styles.playerBoxTriagleBottom} src="./assets/mainPage/03/trial2.svg" alt="alt text" />
            </div>
        </section> 
    )
}
export default Classes;