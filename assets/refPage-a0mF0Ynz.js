import{r as o,j as e}from"./index-Ci5_ak7B.js";import{P as g}from"./ProfileNav-BlQW4HU4.js";const j=()=>{const t=[{inviteText:"Invite 5 friends",points:"100",completed:!0},{inviteText:"Invite 15 friends",points:"1000",completed:!0},{inviteText:"Invite 50 friends",points:"3000",completed:!1},{inviteText:"Invite 100 friends",points:"7000",completed:!1},{inviteText:"Invite 500 friends",points:"20000",completed:!1}],[c,m]=o.useState(!1),[n,l]=o.useState(!1),a=o.useRef(0);return o.useEffect(()=>{const r=()=>{if(window.innerWidth<1e3)return;const x=document.querySelector(".awards-container"),u=document.querySelector(".referral-history"),s=document.querySelector(".balance-container");if(x&&u&&s){const d=u.getBoundingClientRect(),i=x.getBoundingClientRect();if(s.getBoundingClientRect().bottom<=0&&!n?m(!0):m(!1),d.bottom<=i.bottom&&n===!1){l(!0),a.current===0&&(a.current=i.bottom);const h=i.bottom;console.log("here",h>a.current),h>a.current&&l(!1)}}};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),e.jsx("div",{className:"awards-container-main",children:e.jsxs("div",{className:`awards-container ${c&&!n?"awardsFixed":"awardsNotFixed"} ${n?"awardsAbsolute":""}`,children:[e.jsx("h2",{className:"awards-title",children:"Awards"}),e.jsx("p",{className:"awards-description",children:"You receive tokens in the amount of 5% of the tokens received for completing friends' quests. In the future, when your friends buy game items on the site and top up your wallet, you will receive 0.5% for your friends' transactions."}),e.jsx("div",{className:"rewards-table",children:e.jsx("ul",{className:"rewards-list",children:t.map((r,x)=>e.jsxs("li",{className:`reward-item ${r.completed?"completed":"not-completed"}`,children:[e.jsx("span",{className:"invite-text",children:r.inviteText}),e.jsxs("span",{className:"points",children:[r.points," PT"]})]},x))})})]})})},N=[{quantity:"100,000",type:"Peexi Coin"}],w=()=>e.jsxs("div",{className:"balance-container",children:[e.jsx("p",{className:"balance-title",children:"Balance"}),N.map((t,c)=>e.jsxs("p",{className:"balance-item",children:[e.jsx("span",{className:"balance-amount",children:t.quantity})," ",t.type]},c))]}),v=()=>e.jsxs("div",{className:"information-container",children:[e.jsx("h1",{className:"information-title",children:"Referrals"}),e.jsx("p",{className:"information-description",children:"Every meted friend you will get 50 tokens, and if your friends will stake tokens in staking, then you will get profit 5%"})]}),b=()=>{const t="PeexiPunkReferalLin...",[m,n]=o.useState(!1),[l,a]=o.useState({x:0,y:0}),r=()=>{const s=document.createElement("input");s.value=t,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),n(!0),setTimeout(()=>{n(!1)},2e3)},x=s=>{const d=s.target;if(d){const i=d.getBoundingClientRect(),f=s.touches[0].clientX,h=s.touches[0].clientY;a({x:f-i.left,y:h-i.top})}},u=s=>{const d=s.target;if(d){const i=d.getBoundingClientRect(),f=s.clientX,h=s.clientY;a({x:f-i.left,y:h-i.top})}r()};return e.jsxs("div",{className:"referral-container",children:[e.jsx("h2",{className:"referral-title",children:"Referral link"}),e.jsxs("div",{className:"share-link-section",children:[e.jsx("p",{className:"share-link-title",children:"Share link"}),e.jsxs("div",{className:"link-box",onClick:u,onTouchStart:x,onTouchEnd:r,children:[e.jsx("span",{className:"referral-link",children:t}),e.jsx("button",{className:"copy-button","aria-label":"Copy link"}),m&&e.jsx("span",{className:"copied-message",style:{left:`${l.x}px`,top:`${l.y}px`},children:"Copied!"})]}),e.jsx("p",{className:"tokens-title",children:"Tokens from friends"}),e.jsxs("p",{className:"tokens-amount",children:[e.jsx("span",{className:"amount-highlighted",children:1100})," Peexi Token"]})]})]})},p=[{id:1,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"received"},{id:2,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:3,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:4,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:5,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:6,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:7,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:8,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:9,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:10,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:11,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:12,avatar:"./assets/refPage/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"}],P=()=>{const[t,c]=o.useState(5),m=()=>{c(p.length)},n=()=>{c(5)},l=t>=p.length;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"referral-history",children:[e.jsx("div",{className:"title-container",children:e.jsx("h2",{className:"title",children:"Referral history"})}),e.jsxs("div",{className:"table-header",children:[e.jsx("span",{className:"column-header-name",children:"Name"}),e.jsx("span",{className:"column-header-reward",children:"Reward"})]}),p.slice(0,t).map(a=>e.jsxs("div",{className:"referral-item",children:[e.jsxs("div",{className:"user-name-info",children:[e.jsxs("div",{className:"avatar-container",children:[" ",e.jsx("img",{src:a.avatar,alt:"User avatar",className:"avatar"})]}),e.jsx("span",{className:"address",children:a.address})]}),e.jsx("div",{className:"reward-info",children:e.jsx("span",{className:"reward",children:a.reward})})]},a.id)),!l&&e.jsxs("section",{className:"see-all-container",children:[e.jsx("button",{className:"see-all",onClick:m,children:"See all referrals"}),e.jsx("div",{className:"see-all-shadow"})]}),l&&e.jsxs("section",{className:"hide-container",children:[e.jsx("button",{className:"hide",onClick:n,children:"Hide"}),e.jsx("div",{className:"hide-shadow"})]})]})})};function k(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"ProfileNav_padding",children:e.jsx(g,{})}),e.jsxs("main",{className:"main-container",children:[e.jsxs("div",{className:"left_cont",children:[e.jsx("div",{className:"left_cont_info",children:e.jsx(v,{})}),e.jsx(b,{}),e.jsx(P,{})]}),e.jsxs("div",{className:"right_cont",children:[e.jsx("div",{className:"right_cont_info",children:e.jsx(v,{})}),e.jsx(w,{}),e.jsx(j,{})]})]})]})}export{k as default};
//# sourceMappingURL=refPage-a0mF0Ynz.js.map
