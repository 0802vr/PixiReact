import styles from './EcoSys.module.scss';
export function scrollTrigger08Block(){ 
  
    activeScrollTrigger()
    function activeScrollTrigger(){
        
        const heading1 = document.querySelector(`.${styles.section08FirstText}`)! as HTMLElement;
        const text1 = heading1.innerHTML;  // Note: use innerHTML to retain span elements 
    
        heading1.innerHTML = '';
         
    
        const createTextAnimation = (heading: Element, text: string) => {
            // Create a temporary container to wrap the text content.
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = text;
    
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            tempContainer.childNodes.forEach((node:any) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    // Split and create spans for text
                    node.textContent!.split('').forEach((letter: string | null) => {
                        const span = document.createElement('span');
                        span.textContent = letter;
                        span.style.opacity = '0';
                        heading.appendChild(span);
                    });
                } else if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains(styles.spanEco)) {
                    // Wrap spanBack in a span and add to the heading
                    node.textContent!.split('').forEach((letter: string | null, index:number) => {
                    const backSpan = document.createElement('span');
                    backSpan.classList.add(styles.spanEco);
                    backSpan.textContent = letter;
                    backSpan.style.opacity = '0';
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    index === 0 ? backSpan.style.paddingLeft = '5px': '';
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    index === node.textContent!.length - 1 ? backSpan.style.paddingRight = '5px': '';
                    heading.appendChild(backSpan);
                    })
                } else {
                    // Append other elements directly
                    heading.appendChild(node.cloneNode(true));
                }
            });
    
            ScrollTrigger.create({
                trigger: heading,
                start: "top 80%",
                end: "100 60%",
              /*   markers: true, */
              onEnter: () => {
                /* onUpdate: (self) => { */
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                /* heading.querySelectorAll('span').forEach((span: gsap.TweenTarget, _: number) => {
                    gsap.to(span, {
                        opacity: 1,
                        duration: 0.3,
                        ease: "power1.out",
                        overwrite: true,
                         
                    });
                }) */
                    
                   
                },
              onUpdate: (self) => {
                const progress = self.progress;
                const totalSpans = heading.querySelectorAll(`.${styles.spanEco}`).length;
                const totalSpansMain = heading.querySelectorAll('span').length;
                const visibleCount = Math.floor(progress * totalSpans);
                const visibleCountMain = Math.floor(progress * totalSpansMain);
                console.log(progress, totalSpans, visibleCount);
                heading.querySelectorAll('span').forEach((span, index: number) => {
                    if(span.classList.contains(styles.spanEco)){
                        gsap.to(span, {
                            color: index < visibleCountMain ? 'rgb(18, 18, 18)' : '#fefefe',
                            opacity: index < visibleCountMain ? 1 : 0.3,
                            background: index < visibleCountMain ? '#34d3d7' : 'none',
                            duration: 0.3,
                            ease: "power1.out",
                            overwrite: true,
                            delay: 0 
                        });
                    }
                     else {
                        gsap.to(span, {
                        opacity: index < visibleCountMain ? 1 : 0.3,
                        duration: 0.3,
                        ease: "power1.out",
                        overwrite: true,
                        delay: 0 
                    });
                }
             });
            },
    
             
            });
        }
    
        createTextAnimation(heading1, text1);
        }
       /*  const cards = document.querySelectorAll<HTMLElement>('.section08Card'); */
        const section08SecondBox = document.querySelector(`.${styles.section08SecondBox}`)! as HTMLElement;
   // Функция анимации появления карточки
        const animCard = (card:HTMLElement, delay:number) => {
            gsap.to(card, {
                opacity: 1,
                duration: 0.4,
                delay: delay, // задержка для каждой карточки
                ease: "power1.out"
            });
        }

        
        ScrollTrigger.create({
            trigger: section08SecondBox,
            start: `0 80%`,
            end: `1400 5%`, 
            /* markers: true, */
             onEnter: () => {
                animCard(section08SecondBox, 0); // Увеличиваем задержку по индексу
            },
            
        });
        
}