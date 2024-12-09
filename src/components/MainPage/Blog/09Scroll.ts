import styles from './Blog.module.scss';
export function scrollTrigger09Block(){ 

    const stats = document.querySelectorAll<HTMLElement>(`.${styles.section09BoxItem}`);
   // Функция анимации появления карточки
        const animCard = (card:HTMLElement, delay:number) => {
            gsap.to(card, {
                opacity: 1,
                duration: 0.4,
                delay: delay, // задержка для каждой карточки
                ease: "power1.out"
            });
        }

        // Функция анимации ухода карточки
        const animCardLeave = (card:HTMLElement, delay:number) => {
            
            gsap.to(card, {
                opacity: 0,
                duration: 0.4,
                delay: delay, // задержка для каждой карточки
                ease: "power1.out"
            });
        }
        // Проходимся по всем карточкам и инициализируем ScrollTrigger для каждой
        stats.forEach((card, index) => {
            // Устанавливаем начальное состояние opacity
            if(!card.classList.contains(styles.section08CardOpacity)){
                
                card.style.opacity = '0';        
                ScrollTrigger.create({
                    trigger: card,
                    start: `0 80%`,
                    end: `400 5%`,
               /*      markers: true, */
                    onEnter: () => {
                        animCard(card, index * 0.2); // Увеличиваем задержку по индексу
                    },
                   
                    onLeaveBack: () => {
                        animCardLeave(card, index * 0.2); // Анимация возвращения
                    },
                });
            }
        });
        
    const section09BtnBox =document.querySelector(`.${styles.section09BtnBox}`)! as HTMLElement;
    const animHead = (heading: HTMLElement, delay: number) => {

        gsap.to(heading, {
            opacity: 1,
            duration: 0.4,
            delay: delay, // задержка для каждой буквы
            ease: "power1.out"
        });
    }
   
    ScrollTrigger.create({
        trigger: section09BtnBox,
        start: "0 80%",
        end: "10 5%",
        /* markers: true, */
        onEnter: ()=>{
            animHead(section09BtnBox, 0)
        },
       
    });
}
