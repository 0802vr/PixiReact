import styles from './Footer.module.scss';
export function scrollTriggerFooter() {

    const footerRow1 = document.querySelector(`.${styles.footerRow1}`)! as HTMLElement;
    const footerRow2 = document.querySelector(`.${styles.footerRow2}`)! as HTMLElement;
    const animHead = (heading: HTMLElement, delay: number) => {

        gsap.to(heading, {
            opacity: 1,
            duration: 0.4,
            delay: delay, // задержка для каждой буквы
            ease: "power1.out"
        });
    }

    ScrollTrigger.create({
        trigger: footerRow1,
        start: "100 95%",
        end: "100 5%",
        /* markers: true, */
        onEnter: () => {
            animHead(footerRow1, 0)
        },


    });
    ScrollTrigger.create({
        trigger: footerRow2,
        start: "100 98%",
        end: "100 5%",
        /* markers: true, */
        onEnter: () => {
            animHead(footerRow2, 0)
        },


    });
}

