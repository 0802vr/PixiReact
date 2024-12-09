import styles from './MainBanner.module.scss';
export function scrollTrigger01Block() {
    // Находим заголовки
    const section01MainBoxTitle = document.querySelector(`.${styles.section01MainBoxTitle}`)! as HTMLElement;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headings = document.querySelectorAll(`.${styles.section01MainBoxTitle} .${styles.section01MainTitle}`) as any;   
     
    const section01MainSubtitle = document.querySelector(`.${styles.section01MainSubtitle}`)! as HTMLElement;
    const section01MainBtnPlay = document.querySelector(`.${styles.section01MainBtnPlay}`)! as HTMLElement;
    const aboutProjectCont = document.querySelector(`.${styles.aboutProjectCont}`)! as HTMLElement;
    // Функция для анимации заголовка
    const animateHeading = (heading: Element, delay: number) => {
        const text = heading.textContent;
        heading.innerHTML = ''; // Очищаем содержимое

        // Создаем элементы span для каждого символа, включая пробелы
        text?.split('').forEach((letter) => {
            const span = document.createElement('span');
            span.textContent = letter;

            span.style.display = 'none'; // Устанавливаем начальную прозрачность на 0
            heading.appendChild(span);
        });

        // Анимация с помощью gsap
        const spans = heading.querySelectorAll('span');
        spans.forEach((span, index) => {
            gsap.to(span, {
                display: 'block',
                duration: 0.1,
                delay: index * 0.1 + delay, // задержка для каждой буквы
                ease: "power1.out"
            });
        });
    };
    const animHead = (heading: HTMLElement, delay: number) => {

        gsap.to(heading, {
            opacity: 1,
            duration: 0.4,
            delay: delay, // задержка для каждой буквы
            ease: "power1.out"
        });
    }
     

    
    
    //about the project
const heading = document.querySelector(`.${styles.aboutProjectHeading}`)!;
const text = heading.textContent!;
heading.innerHTML = ''; // Очищаем содержимое

// Создаем элементы span для каждого символа, включая пробелы
text.split('').forEach((letter) => {
    const span = document.createElement('span');
    span.textContent = letter;     
    span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
    heading.appendChild(span);
});

ScrollTrigger.create({
    trigger: heading,
    start: "-200 80%",
    end: "0 75%",
   /*  markers: true, */ // Уберите это в продакшене

    onUpdate: (self) => {
        const progress = self.progress;
        const totalSpans = heading.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading.querySelectorAll('span').forEach((span, index) => {
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
        const totalSpans = heading.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность обратно в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index >= totalSpans - visibleCount ? 1 : 0,
                duration: 0.2,
                ease: "power1.out"
            });
        });
    }
});

    const joinExploreSection = document.querySelector(`.${styles.joinExploreSection}`)! as HTMLElement;
    const rectWhoWeAreSection = document.querySelector(`.${styles.rectWhoWeAreSection}`)! as HTMLElement;
    const aboutProjectItems = document.querySelector(`.${styles.aboutProjectItems}`)! as HTMLElement;
    
    ScrollTrigger.create({
        trigger: joinExploreSection,
        start: "0 80%",
        end: "10 5%",
       /*  markers: true, */
        onEnter: ()=>{
            animHead(joinExploreSection, 0)
        },
        onEnterBack: ()=>{
            animHead(joinExploreSection, 0)
        },
       
        
    });

    ScrollTrigger.create({
        trigger: rectWhoWeAreSection,
        start: "0 80%",
        end: "10 5%",
       /*  markers: true, */
        onEnter: ()=>{
            animHead(rectWhoWeAreSection, 0)
        },
        onEnterBack: ()=>{
            animHead(rectWhoWeAreSection, 0);
        },
        
        
    });

    ScrollTrigger.create({
        trigger: aboutProjectItems,
        start: "-100 80%",
        end: "10 5%",
        /* markers: true, */
        onEnter: ()=>{
            animHead(aboutProjectItems, 0)
        },
        onEnterBack: ()=>{
            animHead(aboutProjectItems, 0);
        },
        
        
    });

    
        section01MainBoxTitle.style.opacity = '1';
        aboutProjectCont.style.opacity = '1';
         
        animateHeading(headings[0], 0.4); // Анимируем "peexi" сначала
        animateHeading(headings[1], 0.8);
        animHead(section01MainSubtitle, 1.2);
        animHead(section01MainBtnPlay, 1.4)// Затем "punk" с учетом задержки
   
    
}
