import{R as e}from"./iframe-Ol00qHgk.js";import{d as a}from"./styled-components.browser.esm-BHjMWl6I.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DLfQ-PO-.js";const g=a.div`
  height: ${n=>n.circleDiameter};
  width: ${n=>n.circleDiameter};
  min-width: ${n=>n.circleDiameter};
  text-align: center;
  line-height: ${n=>n.circleDiameter};
  border-radius: ${n=>n.circleDiameter};
  background-color: ${n=>n.variant==="primary"?"black":"#777777"};
  color: white;
  font-weight: bold;
  margin: ${n=>n.circleMargin};
  margin-left: 0;
`,f=a.div`
  border-left: 1px solid #bcbcbc;
  margin-left: calc(${n=>n.circleDiameter} / 2);
`,E=a.h2`
  margin: auto 0;
  color: ${n=>n.variant==="primary"?"black":"#777777"};
  font-size: ${n=>n.variant==="primary"?"22px":"18px"};
`,y=a.div`
  display: grid;
  grid-template-columns: ${n=>n.numberedSectionWidth} 1fr;
  grid-template-rows: ${n=>n.numberedSectionHeight} 1fr;
`;function r({number:n,title:m,children:u,showLine:d=!0,circleDiameter:i="40px",circleMargin:l="5px",variant:s="primary"}){const o=Number(i.slice(0,-2)),c=Number(l.slice(0,-2)),p=`${o+c*2}px`,b=`${o+c*2}px`;return e.createElement(y,{numberedSectionWidth:p,numberedSectionHeight:b},e.createElement(g,{variant:s,circleDiameter:i,circleMargin:l},n),e.createElement(E,{variant:s},m," "),d?e.createElement(f,{circleDiameter:i}):e.createElement("span",null),e.createElement("div",null,u))}r.__docgenInfo={description:"",methods:[],displayName:"NumberedContents",props:{number:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},showLine:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"any"},description:""},variant:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'primary'",computed:!1}},circleDiameter:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'40px'",computed:!1}},circleMargin:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'5px'",computed:!1}}}};const $={title:"NumberedContents",component:r,argTypes:{variant:{control:{type:"select",options:["primary","secondary"]}}}},h=n=>e.createElement(e.Fragment,null,e.createElement(r,{...n},e.createElement("span",null,"Are you accountable for this project: ",e.createElement("strong",null,"Yes")),e.createElement("br",null),e.createElement("span",null,"Client Type: ",e.createElement("strong",null,"Confidential")),e.createElement("br",null),e.createElement("span",null,"Project Name: ",e.createElement("strong",null,"zz")),e.createElement("br",null),e.createElement("span",null,"Default email address: ",e.createElement("strong",null,"lada.miaous@gov.bc.ca")),e.createElement("br",null),e.createElement("span",null,"Additional Emails: ",e.createElement("strong",null)),e.createElement("br",null),e.createElement("span",null,"Identity Providers Required: ",e.createElement("strong",null)),e.createElement("br",null),e.createElement("span",null,"Dev Redirect URIs: ",e.createElement("strong",null,"nnn"))),e.createElement(r,{...n,number:2,title:"Your environments(s) will be provisioned by the SSO Pathfinder team",showLine:!1},e.createElement("span",null,"Once you submit the request, access will be provided in 20 minutes or fewer"))),t=h.bind({});t.args={number:1,title:"First Section",variant:"primary",circleDiameter:"40px",circleMargin:"5px"};t.story={parameters:{design:{type:"figma",url:"https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1635%3A2305"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <>
    <NumberedContents {...args}>
      <span>
        Are you accountable for this project: <strong>Yes</strong>
      </span>
      <br />
      <span>
        Client Type: <strong>Confidential</strong>
      </span>
      <br />
      <span>
        Project Name: <strong>zz</strong>
      </span>
      <br />
      <span>
        Default email address: <strong>lada.miaous@gov.bc.ca</strong>
      </span>
      <br />
      <span>
        Additional Emails: <strong></strong>
      </span>
      <br />
      <span>
        Identity Providers Required: <strong></strong>
      </span>
      <br />
      <span>
        Dev Redirect URIs: <strong>nnn</strong>
      </span>
    </NumberedContents>
    <NumberedContents {...args} number={2} title="Your environments(s) will be provisioned by the SSO Pathfinder team" showLine={false}>
      <span>Once you submit the request, access will be provided in 20 minutes or fewer</span>
    </NumberedContents>
  </>`,...t.parameters?.docs?.source}}};const C=["Primary"];export{t as Primary,C as __namedExportsOrder,$ as default};
