/* eslint-disable @typescript-eslint/no-unused-expressions */
import styles from './Classes.module.scss';
export async function scrollTrigger03Block() {
    const heading1 = document.querySelector(`.${styles.section03_box_text}`)!; 
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
                } else if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains(styles.section03_box_text_span)) {
                    // Wrap spanBack in a span and add to the heading
                    node.textContent!.split('').forEach((letter: string | null, index:number) => {
                    const backSpan = document.createElement('span');
                    backSpan.classList.add(styles.section03_box_text_span);
                    backSpan.textContent = letter;
                    backSpan.style.opacity = '0';
                    index === 0 ? backSpan.style.paddingLeft = '5px': '';
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
                heading.querySelectorAll('span').forEach((span: gsap.TweenTarget) => {
                    gsap.to(span, {
                        opacity: 1,
                        duration: 0.3,
                        ease: "power1.out",
                        overwrite: true,
                         
                    });
                })
                    
                   
                },
              onUpdate: (self) => {
                const progress = self.progress;
                
                const totalSpansMain = heading.querySelectorAll('span').length;
                 
                const visibleCountMain = Math.floor(progress * totalSpansMain);
                
                heading.querySelectorAll('span').forEach((span, index: number) => {
                    if(span.classList.contains(styles.section03_box_text_span)){
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

        
        const box = document.querySelector(`.${styles.playerBoxContainer}`)! as HTMLElement;
        
        const playerBoxs = document.querySelectorAll<HTMLElement>(`.${styles.playerBox}`)!;
        console.log(box,playerBoxs )
        playerBoxs.forEach(el=> el.style.opacity = '0')
       
       playerBoxs.forEach((el,index)=> {
        if(index === 2){
            gsap.set(el, {x: 50});
        }
        if(index === 1){
            gsap.set(el, {x: -50});
        }
        if(index === 3){
            gsap.set(el, {x: 50});
        }
        if(index === 0){
            gsap.set(el, {x: -50});
        }
        if(index === 4){
            gsap.set(el, {x: 50});
        }
       })
        ScrollTrigger.create({
            trigger: box,
            start: "0 70%",
            end: "600 60%",
          /*   markers: true, */
             
            onUpdate:(self)=> {
                 
                if(self.progress < 0.1){
                    gsap.to(playerBoxs[2], {
                        opacity: 1,
                        x: 0,
                        duration: 0.2,
                        delay: 0, // задержка для каждой буквы
                        ease: "power1.out"
                    });
                    /* setTimeout(()=>{
                        gsap.to(playerBoxs[2], {
                            opacity: 1,
                            x: 0,
                            duration: 0.2,
                            delay: 0, // задержка для каждой буквы
                            ease: "power1.out"
                        });
                        console.log("ffff")
                    }, 200) */
                    
                }
                
                if(self.progress < 0.5){
                    setTimeout(()=>{
                        gsap.to(playerBoxs[1], {
                            opacity: 1,
                            x: 0,
                            duration: 0.2,
                            delay: 0, // задержка для каждой буквы
                            ease: "power1.out"
                        });
                        gsap.to(playerBoxs[3], {
                            opacity: 1,
                            x: 0,
                            duration: 0.2,
                            delay: 0, // задержка для каждой буквы
                            ease: "power1.out"
                        });
                    }, 500)
                }
                
                if(self.progress < 0.9){
                    setTimeout(()=>{
                        gsap.to(playerBoxs[0], {
                            opacity: 1,
                            x: 0,
                            duration: 0.2,
                            delay: 0, // задержка для каждой буквы
                            ease: "power1.out"
                        });
                        gsap.to(playerBoxs[4], {
                            opacity: 1,
                            x: 0,
                            duration: 0.2,
                            delay: 0, // задержка для каждой буквы
                            ease: "power1.out"
                        });
                    },800)
                }
            },
            
            
        });
  
}
