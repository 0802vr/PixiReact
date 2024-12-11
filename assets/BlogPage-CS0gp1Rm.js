import{r as c,j as e,L as f}from"./index-CJW27InI.js";import{s as S}from"./Blog.module-sTowQBcv.js";const r=""+new URL("PhotoTop-j5szjG_F.png",import.meta.url).href,U=({onFilterChange:n})=>{const d=["All","Game","News","Announce","Update"],m="Game",[a,p]=c.useState(!1),[u,w]=c.useState(m),[E,l]=c.useState(m),g=()=>{p(!a)},N=o=>{l(o),p(!1),n(o)},i=o=>{w(o)};return c.useEffect(()=>{const o=document.querySelector(".dropdown-block"),V=(t,H)=>{gsap.to(t,{opacity:1,duration:.2,delay:H,ease:"power1.out"})};Object.entries({filter:[o,.6]}).forEach(([t,H])=>{const I=H[0],T=H[1];s(I,T)});function s(t,H){t.style.opacity="0",ScrollTrigger.create({trigger:t,start:"100 80%",end:"200 5%",onEnter:()=>{V(t,H)}})}},[]),e.jsx("div",{className:"dropdown-block",children:e.jsx("div",{className:`dropdown ${a?"active":""}`,children:e.jsxs("div",{className:"dropdown-menu",children:[e.jsxs("div",{onClick:g,className:"dropdown-toggle",onMouseEnter:()=>p(!0),children:[e.jsx("span",{className:"filter-label",children:"Filter:"})," ",E," ",e.jsx("svg",{className:`ArrowDown ${a?"rotate":""}`,width:"50",height:"30",viewBox:"0 0 50 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0H0.892857H1.78571H2.67857H3.57143H4.46429H5.35714H6.25H7.14286V0.9375V1.875V2.8125V3.75V4.6875V5.625V6.5625V7.5H6.25H5.35714H4.46429H3.57143H2.67857H1.78571H0.892857H0V6.5625V5.625V4.6875V3.75V2.8125V1.875V0.9375V0ZM14.2857 15H13.3929H12.5H11.6071H10.7143H9.82143H8.92857H8.03571H7.14286V14.0625V13.125V12.1875V11.25V10.3125V9.375V8.4375V7.5H8.03571H8.92857H9.82143H10.7143H11.6071H12.5H13.3929H14.2857V8.4375V9.375V10.3125V11.25V12.1875V13.125V14.0625V15ZM21.4286 22.5H20.5357H19.6429H18.75H17.8571H16.9643H16.0714H15.1786H14.2857V21.5625V20.625V19.6875V18.75V17.8125V16.875V15.9375L14.2857 15H15.1786H16.0714H16.9643H17.8571H18.75H19.6429H20.5357H21.4286V15.9375V16.875V17.8125V18.75V19.6875V20.625V21.5625V22.5ZM28.5714 22.5H27.6786H26.7857H25.8929H25H24.1071H23.2143H22.3214H21.4286V23.4375V24.375V25.3125V26.25V27.1875V28.125V29.0625V30H22.3214H23.2143H24.1071H25H25.8929H26.7857H27.6786H28.5714V29.0625V28.125V27.1875V26.25V25.3125V24.375V23.4375V22.5ZM35.7143 15V15.9375V16.875V17.8125V18.75V19.6875V20.625V21.5625V22.5H34.8214H33.9286H33.0357H32.1429H31.25H30.3571H29.4643H28.5714V21.5625V20.625V19.6875V18.75V17.8125V16.875V15.9375V15H29.4643H30.3571H31.25H32.1429H33.0357H33.9286H34.8214H35.7143ZM42.8571 7.5V8.4375V9.375V10.3125V11.25V12.1875V13.125V14.0625V15H41.9643H41.0714H40.1786H39.2857H38.3929H37.5H36.6071H35.7143V14.0625V13.125V12.1875V11.25V10.3125V9.375V8.4375V7.5H36.6071H37.5H38.3929H39.2857H40.1786H41.0714H41.9643H42.8571ZM42.8571 7.5V6.5625V5.625V4.6875V3.75V2.8125V1.875V0.9375V0H43.75H44.6429H45.5357H46.4286H47.3214H48.2143H49.1071H50V0.9375V1.875V2.8125V3.75V4.6875V5.625V6.5625V7.5H49.1071H48.2143H47.3214H46.4286H45.5357H44.6429H43.75H42.8571Z",fill:"#fefefe"})})]}),e.jsx("div",{className:`dropdownList ${a?"open":""}`,onMouseLeave:()=>p(!1),children:a&&d.map(o=>e.jsx("li",{onClick:()=>N(o),onMouseEnter:()=>i(o),className:`dropdown-item ${u===o?"active":""}`,children:o},o))})]})})})},x=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"28",viewBox:"0 0 12 28",fill:"none",children:[e.jsx("rect",{x:"3",width:"9",height:"3"}),e.jsx("rect",{x:"3",y:"25",width:"9",height:"3"}),e.jsx("rect",{x:"3",y:"3",width:"22",height:"3",transform:"rotate(90 3 3)"})]}),y=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"28",viewBox:"0 0 12 28",fill:"none",children:[e.jsx("rect",{width:"9",height:"3",transform:"matrix(-1 0 0 1 9 0)"}),e.jsx("rect",{width:"9",height:"3",transform:"matrix(-1 0 0 1 9 25)"}),e.jsx("rect",{width:"22",height:"3",transform:"matrix(4.1799e-08 1 1 -4.57113e-08 9 3)"})]}),v=[{id:1,category:"News",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"14 April 2024",imageUrl:r},{id:2,category:"News",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"15 April 2024",imageUrl:r},{id:3,category:"News",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"16 April 2024",imageUrl:r},{id:4,category:"News",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"17 April 2024",imageUrl:r},{id:5,category:"Game",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"14 April 2024",imageUrl:r},{id:6,category:"Game",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"15 April 2024",imageUrl:r},{id:7,category:"Game",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"16 April 2024",imageUrl:r},{id:8,category:"Game",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"17 April 2024",imageUrl:r},{id:9,category:"Announce",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"18 April 2024",imageUrl:r},{id:10,category:"Announce",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"19 April 2024",imageUrl:r},{id:11,category:"Announce",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"20 April 2024",imageUrl:r},{id:12,category:"Announce",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"21 April 2024",imageUrl:r},{id:13,category:"Update",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"18 April 2024",imageUrl:r},{id:14,category:"Update",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"19 April 2024",imageUrl:r},{id:15,category:"Update",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"20 April 2024",imageUrl:r},{id:16,category:"Update",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"21 April 2024",imageUrl:r}],j=()=>{const[n,d]=c.useState("All"),[m,a]=c.useState(6),[p,u]=c.useState(!1),w=i=>{d(i),a(6)},E=()=>{a(p?3:l.length)},l=n==="All"?v:v.filter(i=>i.category===n),g=l.slice(0,m);function N(){u(i=>!i)}return c.useEffect(()=>{const i=document.querySelectorAll(".news-item"),o=document.querySelector(".see-more-button"),V=(s,t)=>{gsap.to(s,{opacity:1,duration:.2,delay:t,ease:"power1.out"})};i.forEach((s,t)=>{t===0?h(s,7):h(s,t)}),h(o,1);function h(s,t){s.style.opacity="0",ScrollTrigger.create({trigger:s,start:"0 80%",end:"100 5%",onEnter:()=>{V(s,t*.1)}})}},[]),e.jsxs("div",{className:"news-list",children:[e.jsx(U,{onFilterChange:w}),g.map(i=>e.jsxs(f,{to:"/article",className:"news-item",children:[e.jsxs("div",{className:"news-text",children:[e.jsxs("div",{className:"news-category-container",children:[e.jsx(x,{}),e.jsx("span",{className:"news-category",children:i.category}),e.jsx(y,{})]}),e.jsxs("div",{className:"news-content",children:[e.jsx("h2",{className:"news-title",children:i.title}),e.jsx("p",{className:"news-description",children:i.description}),e.jsx("p",{className:"news-date",children:i.date})]})]}),e.jsx("div",{className:"news-image",children:e.jsx("div",{className:"news-image-container",children:e.jsx("img",{src:i.imageUrl,alt:i.title})})})]},i.id)),e.jsxs("div",{className:`${S.section09BtnBox} ${p?"see-more-button-hide":""} see-more-button`,onClick:E,children:[e.jsx("button",{className:S.section09BtnSvg}),e.jsx("button",{className:`${S.section09Btn} ${p?"see-more-button-hide-btn":""}`,onClick:N,children:p?"Hide":"See more"})]})]})},R=""+new URL("image 251-DWoyveL3.png",import.meta.url).href,C=""+new URL("image 253-DLShyJrn.png",import.meta.url).href,X=()=>{const n=[{id:1,category:"News",title:"CLOSED BETA TEST PEEXI PUNK",description:"We are pleased to announce the start of the closed beta test of Peexi Punk. And today we will tell you what awaits you",date:"05 September 2024",image:r},{id:2,category:"Game",title:"IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",description:"How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",date:"12 April 2024",image:R},{id:3,category:"Update",title:"CLOSED BETA TEST PEEXI PUNK",description:"We are pleased to announce the start of the closed beta test of Peexi Punk. And today we will tell you what awaits you",date:"30 May 2024",image:C}],[d,m]=c.useState(0),[a,p]=c.useState(0);c.useEffect(()=>{const l=setInterval(()=>{p(g=>g<100?g+1:0)},50);return a===100&&m(g=>(g+1)%n.length),()=>clearInterval(l)},[a,n.length]),c.useEffect(()=>{p(0)},[d]);const u=w=>{m(w)};return c.useEffect(()=>{const w=document.querySelector(".left-news"),E=document.querySelector(".right-news"),l=document.querySelector(".category"),g=document.querySelector(".top-news-title"),N=document.querySelector(".top-news-description"),i=document.querySelector(".top-news-date"),o=(s,t)=>{gsap.to(s,{opacity:1,duration:.2,delay:t,ease:"power1.out"})};Object.entries({left:[w,.1],category:[l,.2],title:[g,.3],text:[N,.4],date:[i,.5],right:[E,.6]}).forEach(([s,t])=>{const H=t[0],I=t[1];h(H,I)});function h(s,t){s.style.opacity="0",ScrollTrigger.create({trigger:s,start:"100 80%",end:"200 5%",onEnter:()=>{o(s,t)}})}},[]),e.jsxs("div",{className:"top-news-block",children:[e.jsxs("div",{className:"left-news",children:[e.jsxs("div",{className:"top-news-content",children:[e.jsxs("div",{className:"category",children:[e.jsx(x,{}),e.jsx("span",{className:"top-news-category",children:n[d].category}),e.jsx(y,{})]}),e.jsx("h2",{className:"top-news-title",children:n[d].title}),e.jsx("p",{className:"top-news-description",children:n[d].description})]}),e.jsx("div",{className:"top-news-date-container",children:e.jsx("p",{className:"top-news-date",children:n[d].date})})]}),e.jsx("div",{className:"right-news",children:e.jsxs("div",{className:"slider-container",children:[e.jsx("img",{className:"slide",src:n[d].image,alt:"{data[currentSlide].title}"}),e.jsx("div",{className:"slider-indicators",children:n.map((w,E)=>{let l=0;return E<d?l=100:E===d?l=a:l=0,e.jsx("span",{className:"indicator",onClick:()=>u(E),children:e.jsx("span",{className:"indicator-fill",style:{width:`${l}%`}})},E)})})]})})]})},A="_mainContainer_17umc_1",P={mainContainer:A};function G(){return e.jsxs("div",{className:P.mainContainer,children:[e.jsx(X,{}),e.jsx(j,{})]})}export{G as default};
//# sourceMappingURL=BlogPage-CS0gp1Rm.js.map
