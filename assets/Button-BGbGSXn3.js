import{r as q}from"./objectWithoutPropertiesLoose-BsTsQPCI.js";import{r as w,c as T,e as S}from"./helpers-CjxIsnmx.js";import{a as P}from"./iframe-Ol00qHgk.js";var r={},i;function z(){if(i)return r;i=1;var o=q();Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.applyTheme=void 0;var u=o(w),l=o(P()),s=o(T),t=S(),c="pg-button",a=function(b,f){var n=(0,t.processStyle)(b),m=(0,t.createStyleBuilder)(n,f),v=m("button","button"),x=(0,t.createBootstrap)(n,"button"),h=function(y){var e=x(y),g=e.id;e.name,e.label,e.ariaLabel,e.styleProps;var B=e.children,k=e.className,_=e.rest;return l.default.createElement(v,(0,u.default)({},_,{id:g,className:(0,s.default)(c,k)}),B)};return h};r.applyTheme=a;var d=a({},{}),p=d;return r.default=p,r}var $=z();const N={shared:{button:`
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
  `},R={defaultProps:{variant:"primary",size:"medium"},breakProps:["disabled"],staticProps:[]},j=$.applyTheme(N,R);export{j as B};
