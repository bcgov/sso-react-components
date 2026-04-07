import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-DhyLsFPD.js";import{t as r}from"./jsx-runtime-CEl72Qnd.js";import{n as i,r as a}from"./styled-components.browser.esm-Kd2JZy3g.js";function o({number:e,title:t,children:n,showLine:r=!0,circleDiameter:i=`40px`,circleMargin:a=`5px`,variant:o=`primary`}){let f=Number(i.slice(0,-2)),p=Number(a.slice(0,-2)),m=`${f+p*2}px`,h=`${f+p*2}px`;return s.createElement(d,{numberedSectionWidth:m,numberedSectionHeight:h},s.createElement(c,{variant:o,circleDiameter:i,circleMargin:a},e),s.createElement(u,{variant:o},t,`\xA0`),r?s.createElement(l,{circleDiameter:i}):s.createElement(`span`,null),s.createElement(`div`,null,n))}var s,c,l,u,d,f=e((()=>{s=t(n()),i(),c=a.div`
  height: ${e=>e.circleDiameter};
  width: ${e=>e.circleDiameter};
  min-width: ${e=>e.circleDiameter};
  text-align: center;
  line-height: ${e=>e.circleDiameter};
  border-radius: ${e=>e.circleDiameter};
  background-color: ${e=>e.variant===`primary`?`black`:`#777777`};
  color: white;
  font-weight: bold;
  margin: ${e=>e.circleMargin};
  margin-left: 0;
`,l=a.div`
  border-left: 1px solid #bcbcbc;
  margin-left: calc(${e=>e.circleDiameter} / 2);
`,u=a.h2`
  margin: auto 0;
  color: ${e=>e.variant===`primary`?`black`:`#777777`};
  font-size: ${e=>e.variant===`primary`?`22px`:`18px`};
`,d=a.div`
  display: grid;
  grid-template-columns: ${e=>e.numberedSectionWidth} 1fr;
  grid-template-rows: ${e=>e.numberedSectionHeight} 1fr;
`,o.__docgenInfo={description:``,methods:[],displayName:`NumberedContents`,props:{number:{required:!0,tsType:{name:`number`},description:``},title:{required:!0,tsType:{name:`string`},description:``},showLine:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},children:{required:!0,tsType:{name:`any`},description:``},variant:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'primary'`,computed:!1}},circleDiameter:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'40px'`,computed:!1}},circleMargin:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'5px'`,computed:!1}}}}})),p=e((()=>{f()})),m,h,g,_,v;e((()=>{n(),p(),m=r(),h={title:`NumberedContents`,component:o,argTypes:{variant:{control:{type:`select`,options:[`primary`,`secondary`]}}}},g=e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(o,{...e,children:[(0,m.jsxs)(`span`,{children:[`Are you accountable for this project: `,(0,m.jsx)(`strong`,{children:`Yes`})]}),(0,m.jsx)(`br`,{}),(0,m.jsxs)(`span`,{children:[`Client Type: `,(0,m.jsx)(`strong`,{children:`Confidential`})]}),(0,m.jsx)(`br`,{}),(0,m.jsxs)(`span`,{children:[`Project Name: `,(0,m.jsx)(`strong`,{children:`zz`})]}),(0,m.jsx)(`br`,{}),(0,m.jsxs)(`span`,{children:[`Default email address: `,(0,m.jsx)(`strong`,{children:`lada.miaous@gov.bc.ca`})]}),(0,m.jsx)(`br`,{}),(0,m.jsxs)(`span`,{children:[`Additional Emails: `,(0,m.jsx)(`strong`,{})]}),(0,m.jsx)(`br`,{}),(0,m.jsxs)(`span`,{children:[`Identity Providers Required: `,(0,m.jsx)(`strong`,{})]}),(0,m.jsx)(`br`,{}),(0,m.jsxs)(`span`,{children:[`Dev Redirect URIs: `,(0,m.jsx)(`strong`,{children:`nnn`})]})]}),(0,m.jsx)(o,{...e,number:2,title:`Your environments(s) will be provisioned by the SSO Pathfinder team`,showLine:!1,children:(0,m.jsx)(`span`,{children:`Once you submit the request, access will be provided in 20 minutes or fewer`})})]}),_=g.bind({}),_.args={number:1,title:`First Section`,variant:`primary`,circleDiameter:`40px`,circleMargin:`5px`},_.story={parameters:{design:{type:`figma`,url:`https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1635%3A2305`}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <>
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
  </>`,..._.parameters?.docs?.source}}},v=[`Primary`]}))();export{_ as Primary,v as __namedExportsOrder,h as default};