import styles from './SkillTree.module.scss';
export function scrollTrigger04Block() {
    const section04BoxLeft = document.querySelector(`.${styles.section04BoxLeft}`)! as HTMLElement;
    const section04BoxRight = document.querySelector(`.${styles.section04BoxRight}`)! as HTMLElement;
    const title1 = document.querySelector(`.${styles.section04BoxTitle}`)! as HTMLElement;
    const imgR = document.querySelector(`.${styles.section04BoxImemsBox}`)! as HTMLElement;
    const text = document.querySelector(`.${styles.section04BoxText}`)! as HTMLElement;
   
   /*  const animHeadLeave = (heading: HTMLElement, delay: number) => {
        heading
        delay
    gsap.to(heading, {
        opacity: 0,
        duration: 0.4,
        delay: delay,
        ease: "power1.out"
    }); 
} */
    const objEl = {
        img1: [section04BoxLeft, 0],
        sub1: [section04BoxRight, 0], 
        title:[title1, 2],
        imgR:[imgR, 1],
        text:[text, 1],
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(objEl).forEach(([_, value]) => {
        // Предполагается, что первый элемент массива value - это HTMLElement 
        // (например, img1, sub1, text).
        const obj = value[0] as HTMLElement; // элемент, которому будет применена функция
        const num = value[1] as number; // элемент, которому будет применена функция
          // предполагаемое значение img (например, 0 или 1)
        
        activeScrollTrigger(obj, num);
    });
    
    function activeScrollTrigger(obj:HTMLElement, num:number){
        obj.style.opacity = '0'
        if(num === 0 ){
        obj.style.opacity = '0';         
            ScrollTrigger.create({
                trigger: obj,
                start: "100 80%",
                end: `${window.innerWidth > 850 ? 500 : 250} 5%`,
                /* markers: true, */
                onEnter: ()=>{
                    gsap.to(obj, {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power1.out"
                    });
                },
                
            });
        
        }
        if(num ===1) {
            ScrollTrigger.create({
                trigger: obj,
                start: "0 80%",
                end: `0 85%`,
                /* markers: true, */
                onEnter: ()=>{
                    gsap.to(obj, {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power1.out"
                    });
                     
                },
                
            });
        }
        if(num === 2) {
            function typeText(element: Element, text: string, speed: number | undefined) {
                element.textContent = ""; // Очистить текст элемента
                let index = 0;            
                function type() {
                    if (index < text.length) {
                        element.textContent += text.charAt(index); // Добавить следующий символ
                        index++;
                        setTimeout(type, speed);
                        console.log(index) // Рекурсия с задержкой
                    }
                }
                type();
               
            }
            ScrollTrigger.create({
                trigger: obj,
                start: "0 80%",
                end: `0 85%`,
                 
                /* markers: true, */
                onEnter: ()=>{
                    gsap.to(obj, {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power1.out"
                    }); 
                    typeText(obj, 'Unique abilities', 15); 
                },
                
            });
        }
    }
   
}
