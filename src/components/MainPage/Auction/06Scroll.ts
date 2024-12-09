/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import styles from './Auction.module.scss';
export function scrollTrigger06Block() {
    const section06Subtext = document.querySelector(`.${styles.section06Subtext}`)! as HTMLElement;
    const section06BoxLeft = document.querySelector(`.${styles.section06BoxLeft}`)! as HTMLElement;    
    const section06Text3 = document.querySelector(`.${styles.section06Text3}`)! as HTMLElement;
    const section06BoxSecondText = document.querySelector(`.${styles.section06BoxSecondText}`)! as HTMLElement;
    const section06Link = document.querySelector(`.${styles.section06Link}`)! as HTMLElement;
    const section06LinkImg = document.querySelector(`.${styles.section06LinkImg}`)! as HTMLElement;
    const section06LinkBoxLine = document.querySelector(`.${styles.section06LinkBoxLine}`)! as HTMLElement;
    const section06BoxSecondItemImgEl0 = document.querySelector(`.${styles.section06BoxSecondItemImgEl0}`)! as HTMLElement;
    const section06BoxSecondItemImgEl = document.querySelector(`.${styles.section06BoxSecondItemImgEl}`)! as HTMLElement;
    const section06BoxSecondItemImgEl2 = document.querySelector(`.${styles.section06BoxSecondItemImgEl2}`)! as HTMLElement;
    const animHead = (heading: HTMLElement, delay: number) => {

        gsap.to(heading, {
            opacity: 1,
            duration: 0.2,
            delay: delay, // задержка для каждой буквы
            ease: "power1.out"
        });
    }
     
    const objEl = {
        section06Subtext: [section06Subtext, 0],
         
        section06BoxLeft: [section06BoxLeft, 1],
        section06Text3: [section06Text3, 1],
        section06BoxSecondText: [section06BoxSecondText, 1],
        section06BoxSecondItemImgEl0: [section06BoxSecondItemImgEl0, 2],        
        section06BoxSecondItemImgEl: [window.innerWidth > 680 ? section06BoxSecondItemImgEl :section06BoxSecondItemImgEl2, 3],
    }
    Object.entries(objEl).forEach(([_, value]) => {
        // Предполагается, что первый элемент массива value - это HTMLElement 
        // (например, img1, sub1, text).
        const obj = value[0] as HTMLElement; // элемент, которому будет применена функция
        const num = value[1] as number; // элемент, которому будет применена функция
          // предполагаемое значение img (например, 0 или 1)
        
        activeScrollTrigger(obj, num);
    });
    
    function activeScrollTrigger(obj:HTMLElement, num: number){
        if(num === 1){
        obj.style.opacity = '0'
         
            ScrollTrigger.create({
                trigger: obj,
                start: `${window.innerWidth > 680 ? 100 : 100} 80%`,
                end: `200 5%`,
               /*  markers: true, */
                onEnter: ()=>{
                    animHead(obj, 0)
                },
                 
                
            });
        }
        if(num === 2){
        obj.style.opacity = '0'
         
            ScrollTrigger.create({
                trigger: obj,
                start: `${window.innerWidth > 680 ? 125 : 125} 80%`,
                end: `200 5%`,
               /*  markers: true, */
                onEnter: ()=>{
                    animHead(obj, 0)
                },
                 
            });
        }
        if(num === 3){
        obj.style.opacity = '0'
         
            ScrollTrigger.create({
                trigger: obj,
                start: `${window.innerWidth > 680 ? 150 : 150} 80%`,
                end: `200 5%`,
               /*  markers: true, */
                onEnter: ()=>{
                    animHead(obj, 0)
                },
               
            });
        }
       if(num === 0){
        
        const text1 = obj.innerHTML;  // Note: use innerHTML to retain span elements  
        obj.innerHTML = '';
         
    
        const createTextAnimation = (heading: Element, text: string) => {
            // Create a temporary container to wrap the text content.
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = text;
    
            tempContainer.childNodes.forEach((node:any) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    // Split and create spans for text
                    node.textContent!.split('').forEach((letter: string | null) => {
                        const span = document.createElement('span');
                        span.textContent = letter;
                        span.style.opacity = '0';
                        heading.appendChild(span);
                    });
                } else if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains(styles.section06SubtextSpan)) {
                    // Wrap spanBack in a span and add to the heading
                    node.textContent!.split('').forEach((letter: string | null, index:number) => {
                    const backSpan = document.createElement('span');
                    backSpan.classList.add(styles.section06SubtextSpan);
                    backSpan.textContent = letter;
                    index === 0 ? backSpan.style.paddingLeft = '5px': '';
                    index === node.textContent!.length - 1 ? backSpan.style.paddingRight = '5px': '';
                    backSpan.style.opacity = '0';
                    heading.appendChild(backSpan);
                    })
                } else {
                    // Append other elements directly
                    heading.appendChild(node.cloneNode(true));
                }
            });
    
            ScrollTrigger.create({
                trigger: heading,
                start: "50 80%",
                end: "100% 60%",
               /*  markers: true, */
    
                onEnter: () => {
                /* onUpdate: (self) => { */
                heading.querySelectorAll('span').forEach((span: gsap.TweenTarget, _: number) => {
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
                    const totalSpans = heading.querySelectorAll(`.${styles.section06SubtextSpan}`).length;
                    const totalSpansMain = heading.querySelectorAll('span').length;
                    const visibleCount = Math.floor(progress * totalSpans);
                    const visibleCountMain = Math.floor(progress * totalSpansMain);
                    console.log(progress, totalSpans, visibleCount);
                    heading.querySelectorAll('span').forEach((span, index: number) => {
                        if(span.classList.contains(styles.section06SubtextSpan)){
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
                }
    
                
            });
        }
    
        createTextAnimation(obj, text1);
       } 
    }
    
   ScrollTrigger.create({
    trigger: section06Link,
    start: "-25 75%",
    end: "0 60%",
   /*  markers: true, */

        onEnter: () => {
            gsap.to(section06Link, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power1.out",
                    overwrite: true,
                     
                });
            
        },
        
    })
   ScrollTrigger.create({
    trigger: section06LinkImg,
    start: "25 75%",
    end: "50 60%",
   /*  markers: true, */

        onEnter: () => {
            gsap.to(section06LinkImg, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power1.out",
                    overwrite: true,
                     
                });
            
        },
        
    })
   ScrollTrigger.create({
    trigger: section06LinkBoxLine,
    start: "75 75%",
    end: "100 60%",
   /*  markers: true, */

        onEnter: () => {
            gsap.to(section06LinkBoxLine, {
                    width: window.innerWidth > 1250 ? '85%' : '100%',
                    duration: 0.3,
                    ease: "power1.out",
                    overwrite: true,
                     
                });
            
        },
        
    })
   ScrollTrigger.create({
        trigger: section06BoxSecondItemImgEl0,
        start: "100 65%",
        end: "100 60%",
 /*     markers: true, */

        onEnter: () => {
            gsap.to(section06BoxSecondItemImgEl0, {
                    scale:1,
                    opacity:1,
                    duration: 0.3,
                    ease: "power1.out",
                    overwrite: true,
                     
                });
            
        },
        
    })
   ScrollTrigger.create({
        trigger: section06BoxSecondItemImgEl,
        start: "125 65%",
        end: "125 60%",
    /*  markers: true, */

        onEnter: () => {
            gsap.to(section06BoxSecondItemImgEl, {
                    scale:1,
                    opacity:1,
                    duration: 0.3,
                    ease: "power1.out",
                    overwrite: true,
                     
                });
            
        },
         
    })
   ScrollTrigger.create({
        trigger: section06BoxSecondItemImgEl2,
        start: "125 65%",
        end: "125 60%",
    /*  markers: true, */

        onEnter: () => {
            gsap.to(section06BoxSecondItemImgEl2, {
                    scale:1,
                    opacity:1,
                    duration: 0.3,
                    ease: "power1.out",
                    overwrite: true,
                     
                });
            
        },
         
    })
    
}

