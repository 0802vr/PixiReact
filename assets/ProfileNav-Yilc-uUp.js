import{r as l,j as t,L as o}from"./index-CgbzqxKf.js";const v="_sectionMainMargin_31hmc_1",h="_ProfileNav_31hmc_10",p="_ActiveZIndex_31hmc_20",f="_ProfileNavTitle_31hmc_25",P="_ProfileNavTitleActive_31hmc_37",a={sectionMainMargin:v,ProfileNav:h,ActiveZIndex:p,ProfileNavTitle:f,ProfileNavTitleActive:P},d=[{path:"/profile",label:"Profile"},{path:"/pre-sale",label:"Pre-sale"},{path:"/staking",label:"Staking"},{path:"/auction",label:"Auction"},{path:"/battle-pass",label:"Battle Pass"},{path:"/leader-board",label:"Leader board"},{path:"/article",label:"Article"},{path:"/tasks",label:"Tasks"},{path:"/referals",label:"Referrals"}],_=()=>{const[s,c]=l.useState("/tasks"),[n,i]=l.useState(!1),r=e=>{c(e),i(!0),setTimeout(()=>{i(!1)},300)};return t.jsx("div",{className:a.sectionMainMargin,children:t.jsx("div",{className:`${a.ProfileNav} ${n?a.ActiveZIndex:""}`,children:d.map(e=>t.jsx(o,{to:e.path,onClick:()=>r(e.path),className:`${a.ProfileNavTitle} ${s===e.path?a.ProfileNavTitleActive:""}`,children:e.label},e.path))})})};export{_ as P};
//# sourceMappingURL=ProfileNav-Yilc-uUp.js.map
