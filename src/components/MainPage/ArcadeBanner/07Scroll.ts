import styles from './ArcadeBanner.module.scss';
export function scrollTrigger07Block() {
    const section07Box = document.querySelector(`.${styles.section07Box}`)! as HTMLElement;
    const section07Title1 = document.querySelector(`.${styles.section07Title1}`)! as HTMLElement;    
    const section07Text = document.querySelector(`.${styles.section07Text}`)! as HTMLElement;
    const section07BtnBox = document.querySelector(`.${styles.section07BtnBox}`)! as HTMLElement;
    
    const animHead = (heading: HTMLElement, delay: number) => {

        gsap.to(heading, {
            opacity: 1,
            duration: 0.4,
            delay: delay, // задержка для каждой буквы
            ease: "power1.out"
        });
    }
     
    const objEl = {
        section07Box: [section07Box, 1],
        section07Title1: [section07Title1, 0],       
        section07Text: [section07Text, 1],
        section07BtnBox: [section07BtnBox, 1],
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(objEl).forEach(([_, value]) => {
        
        const obj = value[0] as HTMLElement; // элемент, которому будет применена функция
        const num = value[1] as number; // элемент, которому будет применена функция
         
        
        activeScrollTrigger(obj, num);
    });
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function activeScrollTrigger(obj:any, num: number){
        if(num === 1){
        obj.style.opacity = '0'
            console.log('obj', obj.style.opacity)
            ScrollTrigger.create({
                trigger: obj,
                start: `0 80%`,
                end: `200 5%`,
                /* markers: true, */
                onEnter: ()=>{
                    animHead(obj, 0)
                },
              
            });
        }
       if(num === 0){
        const heading3 =obj;
        const text3 = heading3.textContent!;
        heading3.innerHTML = ''; // Очищаем содержимое
        console.log(text3)
       
        // Создаем элементы span для каждого символа, включая пробелы
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        text3.split('').forEach((letter:any, index:number) => {
            const span = document.createElement('span');
            span.textContent = letter;
            
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            text3[index + 1] == "“" ? heading3.appendChild(document.createElement('br')):''
            
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
        
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                heading3.querySelectorAll('span').forEach((span:any, index:number) => {
                    // Устанавливаем непрозрачность в зависимости от индекса и прогресса
                    gsap.to(span, {
                        opacity: index < visibleCount ? 1 : 0,
                        duration: 0.3,
                        ease: "power1.out"
                    });
                });
            },
        
         
        });
        }
    }
}


