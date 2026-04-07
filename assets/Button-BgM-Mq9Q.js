import{a as e,n as t,t as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-DhyLsFPD.js";import{n as i,r as a}from"./extends-DdDkZOeu.js";import{a as o,l as s,o as c,t as l}from"./helpers-azo7kViZ.js";var u=n((t=>{var n=s();Object.defineProperty(t,`__esModule`,{value:!0}),t.default=t.applyTheme=void 0;var u=n((a(),e(i))),d=n(r()),f=n((c(),e(o))),p=l(),m=`pg-button`,h=function(e,t){var n=(0,p.processStyle)(e),r=(0,p.createStyleBuilder)(n,t)(`button`,`button`),i=(0,p.createBootstrap)(n,`button`);return function(e){var t=i(e),n=t.id;t.name,t.label,t.ariaLabel,t.styleProps;var a=t.children,o=t.className,s=t.rest;return d.default.createElement(r,(0,u.default)({},s,{id:n,className:(0,f.default)(m,o)}),a)}};t.applyTheme=h,t.default=h({},{})})),d,f,p,m=t((()=>{d=u(),f={shared:{button:`
      cursor: pointer;
      display: inline-block;
      min-height: 1em;
      outline: none;
      border-width: 0;
      vertical-align: baseline;
      border-radius: 0.5em;
      padding: 0.75em 1.5em;
      font-weight: bold;

      &:hover {
        opacity: 0.8;
      }
    `},size:{small:{button:`
        font-size: 0.8rem;
      `},medium:{button:`
        font-size: 1rem;
      `},large:{button:`
        font-size: 1.2rem;
      `}},variant:{callout:{button:`
        background-color: #fcba19;
      `},primary:{button:`
        background-color: #003366;
        color: #e8edff;
      `},plainText:{button:`
        background-color: unset;
        color: #0139ff;
      `},danger:{button:`
        background-color: #ff1c1c;
        color: white;
      `},secondary:{button:`
        box-shadow: 0px 0px 0px 3px #003366 inset;
        color: #003366;
        background-color: #ffffff;

      `},bcPrimary:{button:`
        background-color: #003366;
        box-shadow: 0px 0px 0px 2px #003366 inset !important;
        color: #fff;
        border-radius: 0.222em;
        &:hover {
          text-decoration: underline;
          opacity: 0.80;
        }
        &:focus {
          outline: 4px solid #3B99FC;
          outline-offset: 1px;
        }
        &:active {
          opacity: 1;
        }
        &:disabled {
          background-color: #003366;
          box-shadow: 0px 0px 0px 2px #fff inset !important;
          color: #fff;
          cursor: not-allowed;
          opacity: 0.3;
          &:hover {
            text-decoration: none;
          }
        }
      `},bcSecondary:{button:`
        background-color: #b2b2b2;
        border-radius: 0.222em;
        color: white;
        box-shadow: none !important;

        &:hover {
          background-color: #b2b2b2;
        }
      `}},disabled:`
  `},p=(0,d.applyTheme)(f,{defaultProps:{variant:`primary`,size:`medium`},breakProps:[`disabled`],staticProps:[]})})),h=t((()=>{m()}));export{p as n,h as t};