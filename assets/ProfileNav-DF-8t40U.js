import{r as l,j as t,L as c}from"./index-BhQrXHEx.js";const v="_sectionMainMargin_vmqyn_1",p="_ProfileNav_vmqyn_10",f="_ActiveZIndex_vmqyn_18",h="_ProfileNavTitle_vmqyn_23",P="_ProfileNavTitleActive_vmqyn_35",a={sectionMainMargin:v,ProfileNav:p,ActiveZIndex:f,ProfileNavTitle:h,ProfileNavTitleActive:P},d=[{path:"/profile",label:"Profile"},{path:"/pre-sale",label:"Pre-sale"},{path:"/staking",label:"Staking"},{path:"/auction",label:"Auction"},{path:"/battle-pass",label:"Battle Pass"},{path:"/leader-board",label:"Leader board"},{path:"/article",label:"Article"},{path:"/tasks",label:"Tasks"},{path:"/referals",label:"Referrals"}],_=()=>{const[s,n]=l.useState("/tasks"),[r,i]=l.useState(!1),o=e=>{n(e),i(!0),setTimeout(()=>{i(!1)},300)};return t.jsx("div",{className:a.sectionMainMargin,children:t.jsx("div",{className:`${a.ProfileNav} ${r?a.ActiveZIndex:""}`,children:d.map(e=>t.jsx(c,{to:e.path,onClick:()=>o(e.path),className:`${a.ProfileNavTitle} ${s===e.path?a.ProfileNavTitleActive:""}`,children:e.label},e.path))})})};export{_ as P};
//# sourceMappingURL=ProfileNav-DF-8t40U.js.map
