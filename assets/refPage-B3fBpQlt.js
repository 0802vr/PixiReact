import{j as e,r as h}from"./index-BhQrXHEx.js";const v=()=>{const a=[{inviteText:"Invite 5 friends",points:"100",completed:!0},{inviteText:"Invite 15 friends",points:"1000",completed:!0},{inviteText:"Invite 50 friends",points:"3000",completed:!1},{inviteText:"Invite 100 friends",points:"7000",completed:!1},{inviteText:"Invite 500 friends",points:"20000",completed:!1}];return e.jsxs("div",{className:"awards-container",children:[e.jsx("h2",{className:"awards-title",children:"Awards"}),e.jsx("p",{className:"awards-description",children:"You receive tokens in the amount of 5% of the tokens received for completing friends' quests. In the future, when your friends buy game items on the site and top up your wallet, you will receive 0.5% for your friends' transactions."}),e.jsx("div",{className:"rewards-table",children:e.jsx("ul",{className:"rewards-list",children:a.map((s,n)=>e.jsxs("li",{className:`reward-item ${s.completed?"completed":"not-completed"}`,children:[e.jsx("span",{className:"invite-text",children:s.inviteText}),e.jsxs("span",{className:"points",children:[s.points," PT"]})]},n))})})]})},j=[{quantity:"100,000",type:"Peexi Coin"},{quantity:"1000",type:"Peexi Token"}],N=()=>e.jsxs("div",{className:"balance-container",children:[e.jsx("p",{className:"balance-title",children:"Balance"}),j.map((a,s)=>e.jsxs("p",{className:"balance-item",children:[e.jsx("span",{className:"balance-amount",children:a.quantity})," ",a.type]},s))]}),g=()=>e.jsxs("div",{className:"information-container",children:[e.jsx("h1",{className:"information-title",children:"Referrals"}),e.jsx("p",{className:"information-description",children:"Every meted friend you will get 50 tokens, and if your friends will stake tokens in staking, then you will get profit 5%"})]}),P=()=>{const a="PeexiPunkReferalLin...",[n,c]=h.useState(!1),[i,t]=h.useState({x:0,y:0}),u=()=>{navigator.clipboard.writeText(a).then(()=>{c(!0),setTimeout(()=>{c(!1)},2e3)})},p=r=>{const l=r.target;if(l){const d=l.getBoundingClientRect(),o=r.touches[0].clientX,x=r.touches[0].clientY;t({x:o-d.left,y:x-d.top})}},f=r=>{const l=r.target;if(l){const d=l.getBoundingClientRect(),o=r.clientX,x=r.clientY;t({x:o-d.left,y:x-d.top})}u()};return e.jsxs("div",{className:"referral-container",children:[e.jsx("h2",{className:"referral-title",children:"Referral link"}),e.jsxs("div",{className:"share-link-section",children:[e.jsx("p",{className:"share-link-title",children:"Share link"}),e.jsxs("div",{className:"link-box",onClick:f,onTouchStart:p,onTouchEnd:u,children:[e.jsx("span",{className:"referral-link",children:a}),e.jsx("button",{className:"copy-button","aria-label":"Copy link"}),n&&e.jsx("span",{className:"copied-message",style:{left:`${i.x}px`,top:`${i.y}px`},children:"Copied!"})]}),e.jsx("p",{className:"tokens-title",children:"Tokens from friends"}),e.jsxs("p",{className:"tokens-amount",children:[e.jsx("span",{className:"amount-highlighted",children:1100})," Peexi Token"]})]})]})},m=[{id:1,avatar:"/PeexiPunkReferrals/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"received"},{id:2,avatar:"/PeexiPunkReferrals/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:3,avatar:"/PeexiPunkReferrals/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:4,avatar:"/PeexiPunkReferrals/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:5,avatar:"/PeexiPunkReferrals/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:6,avatar:"/PeexiPunkReferrals/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:7,avatar:"/PeexiPunkReferrals/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:8,avatar:"/PeexiPunkReferrals/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:9,avatar:"/PeexiPunkReferrals/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:10,avatar:"/PeexiPunkReferrals/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:11,avatar:"/PeexiPunkReferrals/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"},{id:12,avatar:"/PeexiPunkReferrals/avatar.png",address:"0xe32b....542d",reward:"20 000 PC",status:"get"}],k=()=>{const[a,s]=h.useState(5),n=()=>{s(m.length)},c=()=>{s(5)},i=a>=m.length;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"referral-history",children:[e.jsx("div",{className:"title-container",children:e.jsx("h2",{className:"title",children:"Referral history"})}),e.jsxs("div",{className:"table-header",children:[e.jsx("span",{className:"column-header-name",children:"Name"}),e.jsx("span",{className:"column-header-reward",children:"Reward"})]}),m.slice(0,a).map(t=>e.jsxs("div",{className:"referral-item",children:[e.jsxs("div",{className:"user-name-info",children:[e.jsxs("div",{className:"avatar-container",children:[" ",e.jsx("img",{src:t.avatar,alt:"User avatar",className:"avatar"})]}),e.jsx("span",{className:"address",children:t.address})]}),e.jsx("div",{className:"reward-info",children:e.jsx("span",{className:"reward",children:t.reward})})]},t.id)),!i&&e.jsxs("section",{className:"see-all-container",children:[e.jsx("button",{className:"see-all",onClick:n,children:"See all referrals"}),e.jsx("div",{className:"see-all-shadow"})]}),i&&e.jsxs("section",{className:"hide-container",children:[e.jsx("button",{className:"hide",onClick:c,children:"Hide"}),e.jsx("div",{className:"hide-shadow"})]})]})})};function b(){return e.jsxs("main",{className:"main-container",children:[e.jsx(g,{}),e.jsx(N,{}),e.jsx(v,{}),e.jsx(P,{}),e.jsx(k,{})]})}export{b as default};
//# sourceMappingURL=refPage-B3fBpQlt.js.map
