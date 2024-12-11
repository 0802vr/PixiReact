import{r as m,j as e}from"./index-CJW27InI.js";import{P as y}from"./ProfileNav-BK49Wndy.js";const N=()=>{const l=[{inviteText:"Invite 5 friends",points:"100",completed:!0},{inviteText:"Invite 15 friends",points:"1000",completed:!0},{inviteText:"Invite 50 friends",points:"3000",completed:!1},{inviteText:"Invite 100 friends",points:"7000",completed:!1},{inviteText:"Invite 500 friends",points:"20000",completed:!1}],[h,x]=m.useState(!1),[f,g]=m.useState(!1),s=m.useRef(0);return m.useEffect(()=>{const t=()=>{const a=document.querySelector(".balance-container"),c=document.querySelector(".awards-container-main");if(a&&c){const n=a.offsetHeight;c.style.height=`calc(100% - ${n}px)`}};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),m.useEffect(()=>{const t=()=>{if(window.innerWidth<1e3)return;const a=document.querySelector(".awards-container"),c=document.querySelector(".referral-history"),n=document.querySelector(".balance-container");if(a&&c&&n){const u=c.getBoundingClientRect(),i=a.getBoundingClientRect();if(n.getBoundingClientRect().bottom<=0&&!f?x(!0):x(!1),console.log(u.bottom<=i.bottom),u.bottom<=i.bottom+10&&f===!1){g(!0),s.current===0&&(s.current=i.bottom);const r=i.bottom;console.log("here",r>s.current),r>s.current&&g(!1)}}};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]),m.useEffect(()=>{const t=document.querySelector(".awards-title"),a=document.querySelector(".awards-description"),c=document.querySelector(".rewards-table"),n=(d,r)=>{gsap.to(d,{opacity:1,duration:.2,delay:r,ease:"power1.out"})};Object.entries({title:[t,.8],des:[a,.9],table:[c,1]}).forEach(([d,r])=>{const o=r[0],p=r[1];i(o,p)});function i(d,r){d.style.opacity="0",ScrollTrigger.create({trigger:d,start:"100 80%",end:"200 5%",onEnter:()=>{n(d,r)}})}},[]),e.jsx("div",{className:"awards-container-main",children:e.jsxs("div",{className:`awards-container ${h&&!f?"awardsFixed":"awardsNotFixed"} ${f?"awardsAbsolute":""}`,children:[e.jsx("h2",{className:"awards-title",children:"Awards"}),e.jsx("p",{className:"awards-description",children:"You receive tokens in the amount of 5% of the tokens received for completing friends' quests. In the future, when your friends buy game items on the site and top up your wallet, you will receive 0.5% for your friends' transactions."}),e.jsx("div",{className:"rewards-table",children:e.jsx("ul",{className:"rewards-list",children:l.map((t,a)=>e.jsxs("li",{className:`reward-item ${t.completed?"completed":"not-completed"}`,children:[e.jsx("span",{className:"invite-text",children:t.inviteText}),e.jsxs("span",{className:"points",children:[t.points," PT"]})]},a))})})]})})},S=[{quantity:"100,000",type:"Peexi Coin"}],E=()=>(m.useEffect(()=>{const l=document.querySelector(".balance-container"),h=document.querySelector(".balance-title");document.querySelectorAll(".balance-item").forEach((t,a)=>{a===0?s(t,.7):s(t,(a+1)/2)});const f=(t,a)=>{gsap.to(t,{opacity:1,duration:.2,delay:a,ease:"power1.out"})};Object.entries({cont:[l,.6],title:[h,.7]}).forEach(([t,a])=>{const c=a[0],n=a[1];s(c,n)});function s(t,a){t.style.opacity="0",ScrollTrigger.create({trigger:t,start:"100 80%",end:"200 5%",onEnter:()=>{f(t,a)}})}},[]),e.jsxs("div",{className:"balance-container",children:[e.jsx("p",{className:"balance-title",children:"Balance"}),S.map((l,h)=>e.jsxs("p",{className:"balance-item",children:[e.jsx("span",{className:"balance-amount",children:l.quantity})," ",l.type]},h))]})),j=()=>(m.useEffect(()=>{const l=document.querySelector(".information-title"),h=document.querySelector(".information-description"),x=(s,t)=>{gsap.to(s,{opacity:1,duration:.2,delay:t,ease:"power1.out"})};Object.entries({title:[l,.5],des:[h,.6]}).forEach(([s,t])=>{const a=t[0],c=t[1];g(a,c)});function g(s,t){s.style.opacity="0",ScrollTrigger.create({trigger:s,start:"100 80%",end:"200 5%",onEnter:()=>{x(s,t)}})}},[]),e.jsxs("div",{className:"information-container",children:[e.jsx("h1",{className:"information-title",children:"Referrals"}),e.jsx("p",{className:"information-description",children:"Every meted friend you will get 50 tokens, and if your friends will stake tokens in staking, then you will get profit 5%"})]})),k=()=>{const l="PeexiPunkReferalLin...",[x,f]=m.useState(!1),[g,s]=m.useState({x:0,y:0}),t=()=>{const n=document.createElement("input");n.value=l,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),f(!0),setTimeout(()=>{f(!1)},2e3)},a=n=>{const u=n.target;if(u){const i=u.getBoundingClientRect(),d=n.touches[0].clientX,r=n.touches[0].clientY;s({x:d-i.left+20,y:r-i.top+20})}},c=n=>{const u=n.target;if(u){const i=u.getBoundingClientRect(),d=n.clientX,r=n.clientY;s({x:d-i.left+20,y:r-i.top+20})}t()};return m.useEffect(()=>{const n=document.querySelector(".referral-title"),u=document.querySelector(".share-link-section"),i=(o,p)=>{gsap.to(o,{opacity:1,duration:.2,delay:p,ease:"power1.out"})};Object.entries({title:[n,.8],cont:[u,.9]}).forEach(([o,p])=>{const b=p[0],w=p[1];r(b,w)});function r(o,p){o.style.opacity="0",ScrollTrigger.create({trigger:o,start:"100 80%",end:"200 5%",onEnter:()=>{i(o,p)}})}},[]),e.jsxs("div",{className:"referral-container",children:[e.jsx("h2",{className:"referral-title",children:"Referral link"}),e.jsxs("div",{className:"share-link-section",children:[e.jsx("p",{className:"share-link-title",children:"Share link"}),e.jsxs("div",{className:"link-box",onClick:c,onTouchStart:a,onTouchEnd:t,children:[e.jsx("span",{className:"referral-link",children:l}),e.jsx("button",{className:"copy-button","aria-label":"Copy link"}),x&&e.jsx("span",{className:"copied-message",style:{left:`${g.x}px`,top:`${g.y}px`},children:"Copied"})]}),e.jsx("p",{className:"tokens-title",children:"Tokens from friends"}),e.jsxs("p",{className:"tokens-amount",children:[e.jsx("span",{className:"amount-highlighted",children:1100})," Peexi Token"]})]})]})},v=[{id:1,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"received"},{id:2,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:3,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:4,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:5,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:6,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:7,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:8,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:9,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:10,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:11,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:12,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"}],C=()=>{const[l,h]=m.useState(5),x=()=>{h(v.length)},f=()=>{h(5)},g=l>=v.length;return m.useEffect(()=>{const s=document.querySelector(".title"),t=document.querySelector(".table-header"),a=document.querySelector(".rewards-table"),c=document.querySelector(".referrals_links"),n=document.querySelector(".btn_links"),u=(r,o)=>{gsap.to(r,{opacity:1,duration:.2,delay:o,ease:"power1.out"})};Object.entries({title:[s,.9],header:[t,1],table:[a,1],links:[c,1.1],btnLinks:[n,1.1]}).forEach(([r,o])=>{const p=o[0],b=o[1];d(p,b)});function d(r,o){r.style.opacity="0",ScrollTrigger.create({trigger:r,start:"-200 80%",end:"200 5%",onEnter:()=>{u(r,o)}})}},[]),e.jsxs("div",{className:"referral-history",children:[e.jsx("div",{className:"title-container",children:e.jsx("h2",{className:"title",children:"Referral history"})}),e.jsxs("div",{className:"table-header",children:[e.jsx("span",{className:"column-header-name",children:"Name"}),e.jsx("span",{className:"column-header-reward",children:"Reward"})]}),e.jsx("div",{className:"referrals_links",children:v.slice(0,l).map(s=>e.jsxs("div",{className:"referral-item",children:[e.jsxs("div",{className:"user-name-info",children:[e.jsxs("div",{className:"avatar-container",children:[" ",e.jsx("img",{src:s.avatar,alt:"User avatar",className:"avatar"})]}),e.jsx("span",{className:"address",children:s.address})]}),e.jsx("div",{className:"reward-info",children:e.jsx("span",{className:"reward",children:s.reward})})]},s.id))}),e.jsxs("div",{className:"btn_links",children:[!g&&e.jsxs("section",{className:"see-all-container",children:[e.jsx("button",{className:"see-all",onClick:x,children:"See all referrals"}),e.jsx("div",{className:"see-all-shadow"})]}),g&&e.jsxs("section",{className:"hide-container",children:[e.jsx("button",{className:"hide",onClick:f,children:"Hide"}),e.jsx("div",{className:"hide-shadow"})]})]})]})};function q(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"ProfileNav_padding",children:e.jsx(y,{})}),e.jsxs("main",{className:"main-container",children:[e.jsxs("div",{className:"left_cont",children:[e.jsx("div",{className:"left_cont_info",children:e.jsx(j,{})}),e.jsx(k,{}),e.jsx(C,{})]}),e.jsxs("div",{className:"right_cont",children:[e.jsx("div",{className:"right_cont_info",children:e.jsx(j,{})}),e.jsx(E,{}),e.jsx(N,{})]})]})]})}export{q as default};
//# sourceMappingURL=refPage-B2Vewe-E.js.map
