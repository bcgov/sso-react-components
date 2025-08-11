import{r as h,R as s}from"./iframe-Ol00qHgk.js";import{F as u,c as g,e as v}from"./index-B7VJVq59.js";import{d as a,m as d}from"./styled-components.browser.esm-BHjMWl6I.js";import{j as p}from"./jsx-runtime-D_zvdyIk.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DLfQ-PO-.js";const x="#4fa94d",y={"aria-busy":!0,role:"progressbar"};a.div`
  display: ${t=>t.$visible?"flex":"none"};
`;const b="http://www.w3.org/2000/svg",e=242.776657104492,k=1.6,w=d`
12.5% {
  stroke-dasharray: ${e*.14}px, ${e}px;
  stroke-dashoffset: -${e*.11}px;
}
43.75% {
  stroke-dasharray: ${e*.35}px, ${e}px;
  stroke-dashoffset: -${e*.35}px;
}
100% {
  stroke-dasharray: ${e*.01}px, ${e}px;
  stroke-dashoffset: -${e*.99}px;
}
`;a.path`
  stroke-dasharray: ${e*.01}px, ${e};
  stroke-dashoffset: 0;
  animation: ${w} ${k}s linear infinite;
`;const S=[0,30,60,90,120,150,180,210,240,270,300,330],E=d`
to {
   transform: rotate(360deg);
 }
`,L=a.svg`
  animation: ${E} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,T=a.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`,M=({strokeColor:t=x,strokeWidth:o="5",animationDuration:n="0.75",width:i="96",visible:f=!0,ariaLabel:m="rotating-lines-loading"})=>{const $=h.useCallback(()=>S.map(l=>p.jsx(T,{points:"24,12 24,4",width:o,transform:`rotate(${l}, 24, 24)`},l)),[o]);return f?p.jsx(L,{xmlns:b,viewBox:"0 0 48 48",width:i,stroke:t,speed:n,"data-testid":"rotating-lines-svg","aria-label":m,...y,children:$()}):null},_=d`
to {
   stroke-dashoffset: 136;
 }
`;a.polygon`
  stroke-dasharray: 17;
  animation: ${_} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;a.svg`
  transform-origin: 50% 65%;
`;const j=a.span`
  width: 30px;
`,q=a.div`
  display: flex;
  margin-top: 5px;
`,C=a.p`
  margin-left: 10px;
  margin-top: unset;
`;function c({saving:t,content:o="",variant:n="info"}){if(!t&&!o)return null;const i=n==="error"?g:v;return s.createElement(s.Fragment,null,s.createElement(q,null,s.createElement(j,null,t?s.createElement(M,{width:"20",visible:!0}):s.createElement(u,{style:{color:"#006fc4"},icon:i})),s.createElement(C,null,o)))}c.__docgenInfo={description:"",methods:[],displayName:"LastSavedMessage",props:{saving:{required:!0,tsType:{name:"boolean"},description:""},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'info'",computed:!1}}}};const V={title:"LastSavedMessage",component:c},I=t=>s.createElement(c,{...t}),r=I.bind({});r.args={saving:!1,content:"Last saved at 5/9/2022, 8:44:49 AM"};r.story={parameters:{design:{type:"figma",url:"https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A920"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <LastSavedMessage {...args} />",...r.parameters?.docs?.source}}};const D=["LastSavedTemplate"];export{r as LastSavedTemplate,D as __namedExportsOrder,V as default};
