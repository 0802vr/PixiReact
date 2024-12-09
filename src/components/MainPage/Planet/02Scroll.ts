/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './Planet.module.scss';
export const  scrollTriggerPlanet =()=> {
    if (window.innerWidth > 980) {
        /* const heading1 = document.querySelector('.section02Title1')!; */
        const heading2 = document.querySelector(`.${styles.span2Section}`)!;

        /*  const text1 = heading1.innerHTML;  */ // Note: use innerHTML to retain span elements
        const text2 = heading2.innerHTML;  // Same as above

        /* heading1.innerHTML = '';  */
        heading2.innerHTML = '';

        const createTextAnimation = (heading: Element, text: string) => {
           
            // Create a temporary container to wrap the text content.
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = text;
            
            
            tempContainer.childNodes.forEach((node: any) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    // Split and create spans for text
                    node.textContent!.split('').forEach((letter: string | null) => {
                        const span = document.createElement('span');
                        span.textContent = letter;
                        span.style.opacity = '0.3';
                        heading.appendChild(span);
                    });
                } else if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains(styles.spanBack)) {
                    // Wrap spanBack in a span and add to the heading
                    node.textContent!.split('').forEach((letter: string | null, index:number) => {
                        const backSpan = document.createElement('span');
                        backSpan.classList.add(styles.spanBack);
                        backSpan.textContent = letter;
                        backSpan.style.opacity = '0.3';
                        index === 0 ? backSpan.style.paddingLeft = '5px' : '';
                        index === 0 ? backSpan.style.marginLeft = '5px' : '';
                        index === node.textContent!.length - 1 ? backSpan.style.paddingRight = '5px' : '';
                        index === node.textContent!.length - 1 ? backSpan.style.marginRight = '5px' : '';
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
                end: "100% 60%",
                /*  markers: true, */

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
                    const totalSpans = heading.querySelectorAll(`.${styles.spanBack}`).length;
                    const totalSpansMain = heading.querySelectorAll('span').length;
                    const visibleCount = Math.floor(progress * totalSpans);
                    const visibleCountMain = Math.floor(progress * totalSpansMain);
                    console.log(progress, totalSpans, visibleCount);
                    heading.querySelectorAll('span').forEach((span, index: number) => {
                        if (span.classList.contains(styles.spanBack)) {
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


        createTextAnimation(heading2, text2);
    }
    else {

        const heading1 = document.querySelector(`.${styles.section02TitleMin}`)!;
        const text1 = heading1.innerHTML;  // Note: use innerHTML to retain span elements
        heading1.innerHTML = '';
        function createTextAnimation (heading: Element, text: string)  {
            // Create a temporary container to wrap the text content.
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = text;

            tempContainer.childNodes.forEach((node: any) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    // Split and create spans for text
                    node.textContent!.split('').forEach((letter: string | null) => {
                        const span = document.createElement('span');
                        span.textContent = letter;
                        span.style.opacity = '0';
                        heading.appendChild(span);
                    });
                } else if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains(styles.spanBack)) {
                    // Wrap spanBack in a span and add to the heading
                    node.textContent!.split('').forEach((letter: string | null, index:number) => {
                        console.log(index)
                        const backSpan = document.createElement('span');
                        backSpan.classList.add(styles.spanBack);
                        backSpan.textContent = letter;
                        backSpan.style.opacity = '0';
                        index === 0 ? backSpan.style.paddingLeft = '5px' : '';
                        index === 0 ? backSpan.style.marginLeft = '5px' : '';
                        index === node.textContent!.length - 1 ? backSpan.style.paddingRight = '5px' : '';
                        index === node.textContent!.length - 1 ? backSpan.style.marginRight = '5px' : '';
                        heading.appendChild(backSpan);
                    })
                } else {
                    // Append other elements directly
                    heading.appendChild(node.cloneNode(true));
                }
            });

            ScrollTrigger.create({
                trigger: heading,
                start: "0 90%",
                end: "100% 75%",
                once:true,
                

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
                    const totalSpans = heading.querySelectorAll(`.${styles.spanBack}`).length;
                    const totalSpansMain = heading.querySelectorAll('span').length;
                    const visibleCount = Math.floor(progress * totalSpans);
                    const visibleCountMain = Math.floor(progress * totalSpansMain);
                    console.log(progress, totalSpans, visibleCount);
                    heading.querySelectorAll('span').forEach((span: gsap.TweenTarget, index: number) => {
                        gsap.to(span, {
                            opacity: index < visibleCountMain ? 1 : 0.5,
                            duration: 0.3,
                            ease: "power1.out",
                            overwrite: true,
                            delay: 0
                        });
                    });
                    heading.querySelectorAll(`.${styles.spanBack}`).forEach((span: gsap.TweenTarget, index: number) => {
                        gsap.to(span, {
                            color: index < visibleCount ? 'rgb(18, 18, 18)' : '#fefefe',
                            opacity: 1,
                            background: index < visibleCount ? '#34d3d7' : 'none',
                            duration: 0.3,
                            ease: "power1.out",
                            overwrite: true,



                        });
                    })
                }


            });
        }

        createTextAnimation(heading1, text1);

    }
    const animHead = (heading: HTMLElement, delay: number) => {

        gsap.to(heading, {
            opacity: 1,
            duration: 0.4,
            delay: delay, // задержка для каждой буквы
            ease: "power1.out"
        });
    }
    const animHeadLeave = (heading: HTMLElement, delay: number) => {

        gsap.to(heading, {
            opacity: 0,
            duration: 0.4,
            delay: delay, // задержка для каждой буквы
            ease: "power1.out"
        });
    }

    const planetBoxImg1 = document.querySelector(`.${styles.planetBoxImg1}`)! as HTMLElement;
    const planetNameSubtitle1 = document.querySelector(`.${styles.planetNameSubtitle1}`)! as HTMLElement;
    const planetHighlightText1 = document.querySelector(`.${styles.planetHighlightText1}`)! as HTMLElement;
    const planetBoxPresentSection1 = document.querySelector(`.${styles.planetBoxPresentSection1}`)! as HTMLElement;

    const planetBoxImg2 = document.querySelector(`.${styles.planetBoxImg2}`)! as HTMLElement;
    const planetNameSubtitle2 = document.querySelector(`.${styles.planetNameSubtitle2}`)! as HTMLElement;
    const planetHighlightText2 = document.querySelector(`.${styles.planetHighlightText2}`)! as HTMLElement;
    const planetBoxPresentSection2 = document.querySelector(`.${styles.planetBoxPresentSection2}`)! as HTMLElement;


    const objEl = {
        img1: [planetBoxImg1, 0],
        sub1: [planetNameSubtitle1, 1],
        text: [planetHighlightText1, 3],
        numBox: [planetBoxPresentSection1, 2],
        /* img2: [planetBoxImg2, 0], */
        /* sub2: [planetNameSubtitle2, 1],
        text2: [planetHighlightText2, 1],
        numBox2 :[planetBoxPresentSection2, 2] */

    }
     
    function shuffleLetters(element: any, newText: any) {
        const originalText = element.textContent;
        let length = newText.length;
        if (length > 7) {
            length = 4
        }

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // символы для случайного выбора
        let iterations = 0;

        const interval = setInterval(() => {
            let randomString = '';
            for (let i = 0; i < length; i++) {
                // Генерируем случайные символы
                randomString += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            element.textContent = randomString;

            iterations++;
            if (iterations >= 10) { // число итераций, которое вы хотите
                clearInterval(interval);
                element.textContent = originalText; // окончательное значение
            }
        }, 75); // интервал обновления текста
    }
    const shuffleLettersText = {
        el1: planetBoxPresentSection1,
        el2: planetBoxPresentSection2
    }
    Object.entries(objEl).forEach(([_, value]) => {
        // Предполагается, что первый элемент массива value - это HTMLElement 
        // (например, img1, sub1, text).
        const obj = value[0] as HTMLElement; // элемент, которому будет применена функция
        const img = value[1] as number; // предполагаемое значение img (например, 0 или 1)

        activeScrollTrigger(obj, img);
    });
    function activeScrollTrigger(obj: HTMLElement, img?: number) {
        obj.style.opacity = '0'
         
        if (img === 0) {
            ScrollTrigger.create({
                trigger: obj,
                start: "-50 80%",
                end: "0 5%",
                /*  markers: true, */
                onEnter: () => {
                    animHead(obj, 0)
                },
                onLeaveBack: ()=>{
                    animHeadLeave(obj, 0);
                },
                

            });
        }
        if (img === 1) {
            ScrollTrigger.create({
                trigger: obj,
                start: "0 80%",
                end: "50 5%",
                /* markers:true, */
                onEnter: () => {
                    animHead(obj, 0)
                },
                onLeaveBack: ()=>{
                    animHeadLeave(obj, 0);
                },
                /*  onEnterBack: ()=>{
                     animHead(obj, 0)
                 }, */
                /* onLeave: ()=>{
                    animHeadLeave(obj, 0)
                },
                onLeaveBack: ()=>{
                    animHeadLeave(obj, 0);
                }, */

            });

        }
        if (img === 2) {
            ScrollTrigger.create({
                trigger: obj,
                start: "0 80%",
                end: "50 5%",
                /* markers: true, */
                
                onEnter: () => {
                    animHead(obj, 0.6);
                    shuffleLettersText.el1.querySelectorAll(`.${styles.planetBoxText}`).forEach((el) => {
                        shuffleLetters(el, el.textContent)
                    })

                },
                onLeaveBack: ()=>{
                    animHeadLeave(obj, 0);
                },
            })
        }
        if (img === 3) {
            ScrollTrigger.create({
                trigger: obj,
                start: "50 80%",
                end: "100 5%",
                
                /* markers:true, */
                onEnter: () => {
                    animHead(obj, 0.6)
                },
                onLeaveBack: ()=>{
                    animHeadLeave(obj, 0);
                }
            })
        }
    }

    //planet title 1

    const planetTitle1 = document.querySelector(`.${styles.planetTitle1}`)! as HTMLElement;
    const text = planetTitle1.textContent!;
    planetTitle1.innerHTML = ''; // Очищаем содержимое

    // Создаем элементы span для каждого символа, включая пробелы
    text.split('').forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;

        span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
        planetTitle1.appendChild(span);
    });

    ScrollTrigger.create({
        trigger: planetTitle1,
        start: "20 80%",
        end: "50 75%",
         
        /* markers: true, */ // Уберите это в продакшене

        /* onUpdate: (self) => {
            const progress = self.progress;
            const totalSpans = planetTitle1.querySelectorAll('span').length;
            const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

            planetTitle1.querySelectorAll('span').forEach((span, index) => {
                // Устанавливаем непрозрачность в зависимости от индекса и прогресса
                gsap.to(span, {
                    opacity: index < visibleCount ? 1 : 0,
                    duration: 0.3,
                    delay:index * 0.01,
                    ease: "power1.out"
                });
            });
        }, */
        onEnter:()=>{
            planetTitle1.querySelectorAll('span').forEach((span, index) => {
                // Устанавливаем непрозрачность в зависимости от индекса и прогресса
                gsap.to(span, {
                    opacity: 1,
                    duration: 0.3,
                    delay:index * 0.02,
                    ease: "power1.out"
                });
            });
        },
        onLeaveBack:()=>{
            planetTitle1.querySelectorAll('span').forEach((span, index) => {
                // Устанавливаем непрозрачность в зависимости от индекса и прогресса
                gsap.to(span, {
                    opacity: 0,
                    duration: 0.3,
                    delay:index * 0.02,
                    ease: "power1.out"
                });
            });
        }

       /*  onLeaveBack: (self) => {
            const progress = self.progress;
            const totalSpans = planetTitle1.querySelectorAll('span').length;
            const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

            planetTitle1.querySelectorAll('span').forEach((span, index) => {
                // Устанавливаем непрозрачность обратно в зависимости от индекса и прогресса
                gsap.to(span, {
                    opacity: index >= totalSpans - visibleCount ? 1 : 0,
                    duration: 0.2,
                    ease: "power1.out"
                });
            });
        } */
    });
    const planetTitle2 = document.querySelector(`.${styles.planetTitle2}`)! as HTMLElement;
    const text2 = planetTitle2.textContent!;
    planetTitle2.innerHTML = ''; // Очищаем содержимое

    // Создаем элементы span для каждого символа, включая пробелы
    text2.split('').forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;

        span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
        planetTitle2.appendChild(span);
    });


    /* const planetBoxes = gsap.utils.toArray(".planetBox") as any; */


    let countStart = 0;
    let countPlanetBox = 1;
    let countPlanetBox_0 = 0;
    planetBoxImg2.style.opacity = '0';
    planetNameSubtitle2.style.opacity = '0';
    planetHighlightText2.style.opacity = '0';
    planetBoxPresentSection2.style.opacity = '0';
  
    const sections = gsap.utils.toArray(`.${styles.planetBox}`);
    const planetBoxs = document.querySelectorAll<HTMLElement>(`.${styles.planetBox}`);

  
    gsap.to(sections, {
        ease: "none",
        scrollTrigger: {
          trigger: `.${styles.planetBoxContainer}`,
          pin: true,
          scrub: 1,
          start: `${window.innerWidth > 900 ? 'center center': 'top'}`,
          end: `${window.innerWidth > 900 ? '+=1500' : '+=1500'}`,
         /*  markers:true, */
          onUpdate: (self) => {
            const progress = Math.round(self.progress * 100) / 100 ;
            
            if ( progress < 0.25 && countPlanetBox === 0){ 
                 
                //planet 2
                gsap.to(planetBoxImg2, {
                    opacity: 0,
                    duration: 0.2,
                    ease: "none"
                  });
                planetTitle2.querySelectorAll('span').forEach((span, index) => {
                    gsap.to(span, {
                      opacity: 0,
                      duration: 0.2,
                      ease: "power1.out",
                      delay: index * 0.02
                    });
                  }); 

              gsap.to(planetNameSubtitle2, {
                opacity: 0,
                duration: 0.2,
                delay: 0,
                ease: "power1.out"
              });
              gsap.to(planetHighlightText2, {
                opacity: 0,
                duration: 0.2,
                delay: 0,
                ease: "power1.out"
              });
                
              gsap.to(planetBoxPresentSection2, {
                opacity: 0,
                duration: 0.2,
                delay: 0,
                ease: "power1.out"
              });
              countStart = 0
              setTimeout(()=> {
                gsap.to(planetBoxs[1], {
                    
                    display:'none',
                    duration: 0,
                    delay: 0,
                    ease: "power1.out"
                  });
                  gsap.to(planetBoxs[0], {
                    
                    display:'flex',
                    duration: 0,
                    delay: 0,
                    ease: "power1.out"
                  });
                 
            }, 250)
            setTimeout(()=> {
                //planet 2
               gsap.to(planetBoxImg1, {
                   opacity: 1,
                   duration: 0.2,
                   ease: "power1.out"
                 });
               planetTitle1.querySelectorAll('span').forEach((span, index) => {
                   gsap.to(span, {
                     opacity: 1,
                     duration: 0.2,
                     ease: "power1.out",
                     delay: index * 0.02
                   });
                 }); 

             gsap.to(planetNameSubtitle1, {
               opacity: 1,
               duration: 0.4,
               delay: 0.3,
               ease: "power1.out"
             });
             gsap.to(planetHighlightText1, {
               opacity: 1,
               duration: 0.5,
               delay: 0.4,
               ease: "power1.out"
             });
             setTimeout(()=> {
                gsap.to(planetBoxPresentSection1, {
                    opacity: 1,
                    duration: 0.65,
                    delay: 0.45,
                    ease: "power1.out"
                  });     
                  if(countPlanetBox_0 === 1)  {
                    shuffleLettersText.el1.querySelectorAll(`.${styles.planetBoxText}`).forEach((el) => {
                        shuffleLetters(el, el.textContent);
                      });
                      countPlanetBox_0 = 0 
                  } 
             }, 400)
                    
             
               countPlanetBox = 1; 
           }, 300)
               
            } 
            if ( progress > 0.35 && countPlanetBox === 1 ) {
                
                //planet 1
                gsap.to(planetBoxImg1, {
                    opacity: 0,
                    duration: 0.2,
                    ease: "none"
                  });
                planetTitle1.querySelectorAll('span').forEach((span) => {
                    gsap.to(span, {
                      opacity: 0,
                      duration: 0.2,
                      ease: "power1.out"
                       
                    });
                  }); 

              gsap.to(planetNameSubtitle1, {
                opacity: 0,
                duration: 0.2,
                delay: 0,
                ease: "power1.out"
              });
              gsap.to(planetHighlightText1, {
                opacity: 0,
                duration: 0.2,
                delay: 0,
                ease: "power1.out"
              });
                
              gsap.to(planetBoxPresentSection1, {
                opacity: 0,
                duration: 0.2,
                delay: 0,
                ease: "power1.out"
              });
                setTimeout(()=> {
                    gsap.to(planetBoxs[0], {
                        
                        display:'none',
                        duration: 0,
                        delay: 0,
                        ease: "power1.out"
                      });
                      gsap.to(planetBoxs[1], {
                        
                        display:'flex',
                        duration: 0,
                        delay: 0,
                        ease: "power1.out"
                      });
                     
                }, 300)
                setTimeout(()=> {
                     //planet 2
                    gsap.to(planetBoxImg2, {
                        opacity: 1,
                        duration: 0.2,
                        ease: "power1.out"
                      });
                    planetTitle2.querySelectorAll('span').forEach((span, index) => {
                        gsap.to(span, {
                          opacity: 1,
                          duration: 0.2,
                          ease: "power1.out",
                          delay: index * 0.02
                        });
                      }); 
    
                  gsap.to(planetNameSubtitle2, {
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.4,
                    ease: "power1.out"
                  });
                  gsap.to(planetHighlightText2, {
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.6,
                    ease: "power1.out"
                  });
                    countPlanetBox = 0; 
                }, 350)
               
                
            
            }      
            if(progress > 0.4 && countStart === 0){
                countStart = 1;
                countPlanetBox_0 = 1;
                setTimeout(()=> {
                    gsap.to(planetBoxPresentSection2, {
                        opacity: 1,
                        duration: 0.6,
                        delay: 0.4,
                        ease: "power1.out"
                      });               
                      shuffleLettersText.el2.querySelectorAll(`.${styles.planetBoxText}`).forEach((el) => {
                          shuffleLetters(el, el.textContent);
                        })
                  }, 800)
            }
            }  
        }
      });
      

const images = document.querySelectorAll<HTMLElement>(`.${styles.mainCharacterImage}`);

let imageCub
if (window.innerWidth > 980) {
    imageCub = images[0].querySelectorAll<HTMLElement>('img')!;
}
else {
    imageCub = images[1].querySelectorAll<HTMLElement>('img')!;
}

imageCub?.forEach((img, index) => {
    const distance = Math.random() * 100 + 50; // случайное расстояние от 50 до 150 пикселей
    const direction = index % 2 === 0 ? -1 : 1; // четные индексы прокатываются слева, нечетные - справа
    img.style.opacity = "0";
    gsap.fromTo(img,
        { x: direction * distance, y: direction * distance, },

        {
            x: 0,
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: `.${styles.section02}`,
                start: `${window.innerWidth > 980 ? '200' : 'top'} 80%`,
                end: `${window.innerWidth > 980 ? '200' : 'top'} 80%`,
                toggleActions: "play none none reverse",
                /* markers: true */
                // анимация сработает только один раз
            }
        }
    );
});
const imagesBox2 = document.querySelectorAll<HTMLElement>(`.${styles.mainCharacterImage2}`);

let image2Cub
if (window.innerWidth > 980) {
    image2Cub = imagesBox2[0].querySelectorAll<HTMLElement>('img')!;
}
else {
    image2Cub = imagesBox2[1].querySelectorAll<HTMLElement>('img')!;
}

image2Cub?.forEach((img, index) => {
    const distance = Math.random() * 100 + 50; // случайное расстояние от 50 до 150 пикселей
    const direction = index % 2 === 0 ? -1 : 1; // четные индексы прокатываются слева, нечетные - справа
    img.style.opacity = "0";
    gsap.fromTo(img,
        { x: direction * distance, y: direction * distance, },

        {
            x: 0,
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: `.${styles.planetBoxContainer}`,
                start: `${window.innerWidth > 980 ? '0' : '-200'} 80%`,
                end: `${window.innerWidth > 980 ? '0' : '-200'} 80%`,
                toggleActions: "play none none reverse",
                /* markers: true */
                // анимация сработает только один раз
            }
        }
    );
});
}