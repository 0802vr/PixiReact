import{r as s,u as v,j as o,L as p}from"./index-BpXeBJTa.js";const f="_sectionMainMargin_1oj8i_1",d="_ProfileNav_1oj8i_10",N="_soonLabel_1oj8i_19",h="_ProfileNavTitle_1oj8i_35",u="_ProfileNavTitleActive_1oj8i_48",e={sectionMainMargin:f,ProfileNav:d,soonLabel:N,ProfileNavTitle:h,ProfileNavTitleActive:u},P=[{path:"/profile",label:"Profile"},{path:"/tasks",label:"Tasks"},{path:"/referrals",label:"Referrals"},{path:"/arcade",label:"Arcade season"},{path:"/staking",label:"Staking",soon:!0},{path:"/auction",label:"Auction",soon:!0},{path:"/leader-board",label:"Leader board",soon:!0}],j=()=>{const[n,i]=s.useState("/tasks"),t=v();s.useEffect(()=>{i(t.pathname)},[t]);const l=a=>{i(a)};return s.useEffect(()=>{const a=document.querySelector(`.${e.ProfileNav}`);a.style.opacity="0",((r,c)=>{gsap.to(r,{opacity:1,duration:.4,delay:c,ease:"power1.out"})})(a,.4)},[t]),o.jsx("div",{className:e.sectionMainMargin,children:o.jsx("div",{className:`${e.ProfileNav}`,children:P.map(a=>o.jsxs(p,{to:a.path,onClick:()=>l(a.path),className:`${e.ProfileNavTitle} ${n===a.path?e.ProfileNavTitleActive:""}`,style:a.soon?{pointerEvents:"none",opacity:.5}:{},children:[a.soon?o.jsx("div",{className:e.soonLabel,children:"Soon"}):"",a.label]},a.path))})})};export{j as P};
//# sourceMappingURL=ProfileNav-DUEU25Pr.js.map