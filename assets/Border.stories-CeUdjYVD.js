import{R as d}from"./iframe-Ol00qHgk.js";import{d as i}from"./styled-components.browser.esm-BHjMWl6I.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DLfQ-PO-.js";const n={primary:"#0139ff",dark:"#000"},c={none:"",sm:"5px",md:"10px",lg:"20px"},m={sm:"1px",md:"2px",lg:"3px"},p=i.div`
  border-style: solid;
  width: 100%;
  height: auto;
  padding: 5px;
  ${r=>`
        border-color: ${n[r.color||"primary"]};
        border-width: ${m[r.borderWidth||"lg"]};
        border-radius: ${c[r.round||"md"]};
    `}
`,o=({color:r,round:t,borderWidth:s,children:a})=>d.createElement(p,{color:r,round:t,borderWidth:s},a);o.__docgenInfo={description:"",methods:[],displayName:"Border",props:{color:{required:!1,tsType:{name:"string"},description:""},round:{required:!1,tsType:{name:"string"},description:""},borderWidth:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const h={title:"Border",component:o},l=r=>d.createElement(o,{...r}),e=l.bind({});e.args={color:"primary",round:"md",borderWidth:"lg",children:"Some content here..."};e.story={parameters:{design:{type:"figma",url:"https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=5578%3A939"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <Border {...args} />",...e.parameters?.docs?.source}}};const x=["PrimaryRoundBorder"];export{e as PrimaryRoundBorder,x as __namedExportsOrder,h as default};
