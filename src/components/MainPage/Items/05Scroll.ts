import styles from './Items.module.scss';
export function scrollTrigger05Block() {
    const section05Col: NodeListOf<HTMLElement> = document.querySelectorAll(`.${styles.section05Col}`);

    const animHead = (heading: HTMLElement, delay: number): void => {
        gsap.to(heading, {
            opacity: 1,
            duration: 0.4,
            delay: delay, // задержка для каждой буквы
            ease: "power1.out"
        });
    };
 
    section05Col.forEach((el)=>{
        activeScrollTrigger(el)
    })
     

    function activeScrollTrigger(obj: HTMLElement): void {
        obj.style.opacity = '0';

        ScrollTrigger.create({
            trigger: obj,
            start: "0 90%",
            end: "200 20%",
            /* markers: true, */
            onEnter: () => {
                animHead(obj, 0);
            },
            
        });
    }
}
