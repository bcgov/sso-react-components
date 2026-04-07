import{n as e,o as t,t as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-DhyLsFPD.js";import{t as i}from"./jsx-runtime-CEl72Qnd.js";import{r as a,t as o}from"./extends-DdDkZOeu.js";import{n as s,r as c}from"./styled-components.browser.esm-Kd2JZy3g.js";import{d as l,f as u,n as d,p as f,t as p}from"./free-solid-svg-icons-C5BGsl_Z.js";function m(e){e===void 0&&(e={});var t=e.window,n=t===void 0?document.defaultView:t,r=n.history;function i(){var e=y(n.location.hash.substr(1)),t=e.pathname,i=t===void 0?`/`:t,a=e.search,o=a===void 0?``:a,s=e.hash,c=s===void 0?``:s,l=r.state||{};return[l.idx,x({pathname:i,search:o,hash:c,state:l.usr||null,key:l.key||`default`})]}var a=null;function s(){if(a)p.call(a),a=null;else{var e=b.Pop,t=i(),n=t[0],r=t[1];if(p.length){if(n!=null){var o=u-n;o&&(a={action:e,location:r,retry:function(){M(o*-1)}},M(o))}}else k(e)}}n.addEventListener(w,s),n.addEventListener(C,function(){var e=i()[1];v(e)!==v(d)&&s()});var c=b.Pop,l=i(),u=l[0],d=l[1],f=g(),p=g();u??(u=0,r.replaceState(o({},r.state,{idx:u}),``));function m(){var e=document.querySelector(`base`),t=``;if(e&&e.getAttribute(`href`)){var r=n.location.href,i=r.indexOf(`#`);t=i===-1?r:r.slice(0,i)}return t}function T(e){return m()+`#`+(typeof e==`string`?e:v(e))}function E(e,t){return t===void 0&&(t=null),x(o({pathname:d.pathname,hash:``,search:``},typeof e==`string`?y(e):e,{state:t,key:_()}))}function D(e,t){return[{usr:e.state,key:e.key,idx:t},T(e)]}function O(e,t,n){return!p.length||(p.call({action:e,location:t,retry:n}),!1)}function k(e){c=e;var t=i();u=t[0],d=t[1],f.call({action:c,location:d})}function A(e,t){var i=b.Push,a=E(e,t);function o(){A(e,t)}if(O(i,a,o)){var s=D(a,u+1),c=s[0],l=s[1];try{r.pushState(c,``,l)}catch{n.location.assign(l)}k(i)}}function j(e,t){var n=b.Replace,i=E(e,t);function a(){j(e,t)}if(O(n,i,a)){var o=D(i,u),s=o[0],c=o[1];r.replaceState(s,``,c),k(n)}}function M(e){r.go(e)}return{get action(){return c},get location(){return d},createHref:T,push:A,replace:j,go:M,back:function(){M(-1)},forward:function(){M(1)},listen:function(e){return f.push(e)},block:function(e){var t=p.push(e);return p.length===1&&n.addEventListener(S,h),function(){t(),p.length||n.removeEventListener(S,h)}}}}function h(e){e.preventDefault(),e.returnValue=``}function g(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter(function(e){return e!==t})}},call:function(t){e.forEach(function(e){return e&&e(t)})}}}function _(){return Math.random().toString(36).substr(2,8)}function v(e){var t=e.pathname,n=t===void 0?`/`:t,r=e.search,i=r===void 0?``:r,a=e.hash,o=a===void 0?``:a;return i&&i!==`?`&&(n+=i.charAt(0)===`?`?i:`?`+i),o&&o!==`#`&&(n+=o.charAt(0)===`#`?o:`#`+o),n}function y(e){var t={};if(e){var n=e.indexOf(`#`);n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf(`?`);r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var b,x,S,C,w,T=e((()=>{a(),(function(e){e.Pop=`POP`,e.Push=`PUSH`,e.Replace=`REPLACE`})(b||={}),x=function(e){return e},S=`beforeunload`,C=`hashchange`,w=`popstate`})),E=n(((e,t)=>{var n=9007199254740991,r=`[object Arguments]`,i=`[object Function]`,a=`[object GeneratorFunction]`,o=typeof global==`object`&&global&&global.Object===Object&&global,s=typeof self==`object`&&self&&self.Object===Object&&self,c=o||s||Function(`return this`)();function l(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var u=Object.prototype,d=u.hasOwnProperty,f=u.toString,p=c.Symbol,m=u.propertyIsEnumerable,h=p?p.isConcatSpreadable:void 0;function g(e,t,n,r,i){var a=-1,o=e.length;for(n||=_,i||=[];++a<o;){var s=e[a];t>0&&n(s)?t>1?g(s,t-1,n,r,i):l(i,s):r||(i[i.length]=s)}return i}function _(e){return b(e)||y(e)||!!(h&&e&&e[h])}function v(e){return e&&e.length?g(e,1):[]}function y(e){return S(e)&&d.call(e,`callee`)&&(!m.call(e,`callee`)||f.call(e)==r)}var b=Array.isArray;function x(e){return e!=null&&w(e.length)&&!C(e)}function S(e){return E(e)&&x(e)}function C(e){var t=T(e)?f.call(e):``;return t==i||t==a}function w(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=n}function T(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function E(e){return!!e&&typeof e==`object`}t.exports=v})),D=n(((e,t)=>{var n=1/0,r=`[object Symbol]`,i=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=`\\ud800-\\udfff`,s=`\\u0300-\\u036f\\ufe20-\\ufe23`,c=`\\u20d0-\\u20f0`,l=`\\u2700-\\u27bf`,u=`a-z\\xdf-\\xf6\\xf8-\\xff`,d=`\\xac\\xb1\\xd7\\xf7`,f=`\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf`,p=`\\u2000-\\u206f`,m=` \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000`,h=`A-Z\\xc0-\\xd6\\xd8-\\xde`,g=`\\ufe0e\\ufe0f`,_=d+f+p+m,v=`['’]`,y=`[`+_+`]`,b=`[`+s+c+`]`,x=`\\d+`,S=`[`+l+`]`,C=`[`+u+`]`,w=`[^`+o+_+x+l+u+h+`]`,T=`(?:`+b+`|\\ud83c[\\udffb-\\udfff])`,E=`[^`+o+`]`,D=`(?:\\ud83c[\\udde6-\\uddff]){2}`,O=`[\\ud800-\\udbff][\\udc00-\\udfff]`,k=`[`+h+`]`,A=`\\u200d`,j=`(?:`+C+`|`+w+`)`,M=`(?:`+k+`|`+w+`)`,N=`(?:`+v+`(?:d|ll|m|re|s|t|ve))?`,P=`(?:`+v+`(?:D|LL|M|RE|S|T|VE))?`,F=T+`?`,I=`[`+g+`]?`,L=`(?:`+A+`(?:`+[E,D,O].join(`|`)+`)`+I+F+`)*`,R=I+F+L,z=`(?:`+[S,D,O].join(`|`)+`)`+R,B=RegExp(v,`g`),V=RegExp(b,`g`),H=RegExp([k+`?`+C+`+`+N+`(?=`+[y,k,`$`].join(`|`)+`)`,M+`+`+P+`(?=`+[y,k+j,`$`].join(`|`)+`)`,k+`?`+j+`+`+N,k+`+`+P,x,z].join(`|`),`g`),U=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,W={À:`A`,Á:`A`,Â:`A`,Ã:`A`,Ä:`A`,Å:`A`,à:`a`,á:`a`,â:`a`,ã:`a`,ä:`a`,å:`a`,Ç:`C`,ç:`c`,Ð:`D`,ð:`d`,È:`E`,É:`E`,Ê:`E`,Ë:`E`,è:`e`,é:`e`,ê:`e`,ë:`e`,Ì:`I`,Í:`I`,Î:`I`,Ï:`I`,ì:`i`,í:`i`,î:`i`,ï:`i`,Ñ:`N`,ñ:`n`,Ò:`O`,Ó:`O`,Ô:`O`,Õ:`O`,Ö:`O`,Ø:`O`,ò:`o`,ó:`o`,ô:`o`,õ:`o`,ö:`o`,ø:`o`,Ù:`U`,Ú:`U`,Û:`U`,Ü:`U`,ù:`u`,ú:`u`,û:`u`,ü:`u`,Ý:`Y`,ý:`y`,ÿ:`y`,Æ:`Ae`,æ:`ae`,Þ:`Th`,þ:`th`,ß:`ss`,Ā:`A`,Ă:`A`,Ą:`A`,ā:`a`,ă:`a`,ą:`a`,Ć:`C`,Ĉ:`C`,Ċ:`C`,Č:`C`,ć:`c`,ĉ:`c`,ċ:`c`,č:`c`,Ď:`D`,Đ:`D`,ď:`d`,đ:`d`,Ē:`E`,Ĕ:`E`,Ė:`E`,Ę:`E`,Ě:`E`,ē:`e`,ĕ:`e`,ė:`e`,ę:`e`,ě:`e`,Ĝ:`G`,Ğ:`G`,Ġ:`G`,Ģ:`G`,ĝ:`g`,ğ:`g`,ġ:`g`,ģ:`g`,Ĥ:`H`,Ħ:`H`,ĥ:`h`,ħ:`h`,Ĩ:`I`,Ī:`I`,Ĭ:`I`,Į:`I`,İ:`I`,ĩ:`i`,ī:`i`,ĭ:`i`,į:`i`,ı:`i`,Ĵ:`J`,ĵ:`j`,Ķ:`K`,ķ:`k`,ĸ:`k`,Ĺ:`L`,Ļ:`L`,Ľ:`L`,Ŀ:`L`,Ł:`L`,ĺ:`l`,ļ:`l`,ľ:`l`,ŀ:`l`,ł:`l`,Ń:`N`,Ņ:`N`,Ň:`N`,Ŋ:`N`,ń:`n`,ņ:`n`,ň:`n`,ŋ:`n`,Ō:`O`,Ŏ:`O`,Ő:`O`,ō:`o`,ŏ:`o`,ő:`o`,Ŕ:`R`,Ŗ:`R`,Ř:`R`,ŕ:`r`,ŗ:`r`,ř:`r`,Ś:`S`,Ŝ:`S`,Ş:`S`,Š:`S`,ś:`s`,ŝ:`s`,ş:`s`,š:`s`,Ţ:`T`,Ť:`T`,Ŧ:`T`,ţ:`t`,ť:`t`,ŧ:`t`,Ũ:`U`,Ū:`U`,Ŭ:`U`,Ů:`U`,Ű:`U`,Ų:`U`,ũ:`u`,ū:`u`,ŭ:`u`,ů:`u`,ű:`u`,ų:`u`,Ŵ:`W`,ŵ:`w`,Ŷ:`Y`,ŷ:`y`,Ÿ:`Y`,Ź:`Z`,Ż:`Z`,Ž:`Z`,ź:`z`,ż:`z`,ž:`z`,Ĳ:`IJ`,ĳ:`ij`,Œ:`Oe`,œ:`oe`,ŉ:`'n`,ſ:`ss`},G=typeof global==`object`&&global&&global.Object===Object&&global,K=typeof self==`object`&&self&&self.Object===Object&&self,q=G||K||Function(`return this`)();function J(e,t,n,r){var i=-1,a=e?e.length:0;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}function Y(e){return e.match(i)||[]}function ee(e){return function(t){return e?.[t]}}var te=ee(W);function ne(e){return U.test(e)}function re(e){return e.match(H)||[]}var ie=Object.prototype.toString,X=q.Symbol,Z=X?X.prototype:void 0,Q=Z?Z.toString:void 0;function ae(e){if(typeof e==`string`)return e;if(ce(e))return Q?Q.call(e):``;var t=e+``;return t==`0`&&1/e==-n?`-0`:t}function oe(e){return function(t){return J(de(le(t).replace(B,``)),e,``)}}function se(e){return!!e&&typeof e==`object`}function ce(e){return typeof e==`symbol`||se(e)&&ie.call(e)==r}function $(e){return e==null?``:ae(e)}function le(e){return e=$(e),e&&e.replace(a,te).replace(V,``)}var ue=oe(function(e,t,n){return e+(n?`-`:``)+t.toLowerCase()});function de(e,t,n){return e=$(e),t=n?void 0:t,t===void 0?ne(e)?re(e):Y(e):e.match(t)||[]}t.exports=ue})),O,k,A=e((()=>{O=`#1A5A96`,k=`22px`}));function j({title:e,hash:t,allOpen:n,setAllOpen:r,children:i}){let a=(0,F.default)(e),[o,s]=(0,N.useState)(n);return(0,N.useEffect)(()=>{n!==null&&s(n)},[n]),(0,N.useEffect)(()=>{t===a&&s(!0)},[t]),N.createElement(R,null,N.createElement(z,{onClick:()=>{s(!o),r(null)}},N.createElement(`span`,{id:a},e),N.createElement(u,{icon:o?d:p,size:`2x`})),N.createElement(L,{open:o},i))}function M({children:e,open:t=!1}){let[n,r]=(0,N.useState)(``),[i,a]=(0,N.useState)(t);return(0,N.useEffect)(()=>{let e=m().listen(({action:e,location:t})=>{r(t.pathname)});return()=>e()},[]),N.createElement(N.Fragment,null,N.createElement(B,null,N.createElement(`span`,{onClick:()=>{a(!0)}},`Expand All`),N.createElement(V,null),N.createElement(`span`,{onClick:()=>{a(!1)}},`Collapse All`)),Array.isArray(e)?(0,P.default)(e).map(e=>N.cloneElement(e,{hash:n,allOpen:i,setAllOpen:a})):N.cloneElement(e,{allOpen:i,setAllOpen:a}))}var N,P,F,I,L,R,z,B,V,H=e((()=>{N=t(r()),T(),s(),P=t(E()),F=t(D()),f(),l(),A(),I=`#eaeaea`,L=c.div`
  transition: max-height 0.4s, padding 0.4s;
  max-height: 300px;
  padding: 10px 20px;
  background-color: ${`#f5f5f5`};
  ${e=>!e.open&&`max-height: 0px; padding: 0 20px;`};
  overflow-y: hidden;
`,R=c.div`
  margin: 10px 0;
`,z=c.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${I};
  & span {
    font-size: ${k};
    font-weight: bold;
  }
`,B=c.div`
  display: flex;
  flex-direction: row;
  color: ${O};
  & span {
    cursor: pointer;
    text-decoration: underline;
  }
`,V=c.span`
  border-right: 1px solid black;
  height: 1em;
  margin: auto 0.5em;
`,M.Panel=j,M.__docgenInfo={description:``,methods:[{name:`Panel`,docblock:null,modifiers:[`static`],params:[{name:`{ title, hash, allOpen, setAllOpen, children }: any`,optional:!1,type:{name:`any`}}],returns:null}],displayName:`Accordion`,props:{children:{required:!0,tsType:{name:`any`},description:``},open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),U=e((()=>{H()})),W,G,K,q,J,Y;e((()=>{r(),U(),W=i(),G={title:`Accordion`,component:M},K=e=>(0,W.jsxs)(M,{...e,children:[(0,W.jsxs)(M.Panel,{title:e.title,children:[(0,W.jsxs)(`p`,{children:[`The short answer is that `,(0,W.jsx)(`b`,{children:`confidential clients`}),` can keep a secret while `,(0,W.jsx)(`b`,{children:`public clients`}),` do not require a secret.`]}),(0,W.jsx)(`h3`,{children:`Confidential Client`}),(0,W.jsx)(`ul`,{children:(0,W.jsx)(`li`,{children:`Server-side applications (e.g., .Net, Java, PHP)`})}),(0,W.jsx)(`h3`,{children:`Public Client`}),(0,W.jsxs)(`ul`,{children:[(0,W.jsx)(`li`,{children:`Javascript applications (e.g., SPA: single page application, Hybrid Mobile apps)`}),(0,W.jsx)(`li`,{children:`Native Mobile apps, Embedded devices, and Internet of Things (e.g., Apple TV)`}),(0,W.jsx)(`li`,{children:`Secured by PKCE (Proof Key for Code Exchange); a secret on the fly`})]})]}),(0,W.jsxs)(M.Panel,{title:`Q. How do I allow dynamic redirect URIs for my integration?`,children:[(0,W.jsxs)(`p`,{children:[`Yes, you can start with `,(0,W.jsx)(`b`,{children:`http://localhost`}),` and change your redirect URIs.`]}),(0,W.jsx)(`p`,{children:`Before going to production, please make sure that your production environment's redirect URIs are properly set to your live application's domain.`})]})]}),q=K.bind({}),q.args={title:`Q. What is the difference between confidential and public client types?`,open:!0},q.story={parameters:{design:{type:`figma`,url:`https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1635%3A2827`}}},J=K.bind({}),J.args={title:`Q. What is the difference between confidential and public client types?`},J.story={parameters:{design:{type:`figma`,url:`https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1635%3A2331`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => <Accordion {...args}>
    <Accordion.Panel title={args.title}>
      <p>
        The short answer is that <b>confidential clients</b> can keep a secret while <b>public clients</b> do not
        require a secret.
      </p>
      <h3>Confidential Client</h3>
      <ul>
        <li>Server-side applications (e.g., .Net, Java, PHP)</li>
      </ul>
      <h3>Public Client</h3>
      <ul>
        <li>Javascript applications (e.g., SPA: single page application, Hybrid Mobile apps)</li>
        <li>Native Mobile apps, Embedded devices, and Internet of Things (e.g., Apple TV)</li>
        <li>Secured by PKCE (Proof Key for Code Exchange); a secret on the fly</li>
      </ul>
    </Accordion.Panel>
    <Accordion.Panel title="Q. How do I allow dynamic redirect URIs for my integration?">
      <p>
        Yes, you can start with <b>http://localhost</b> and change your redirect URIs.
      </p>
      <p>
        Before going to production, please make sure that your production environment's redirect URIs are properly set
        to your live application's domain.
      </p>
    </Accordion.Panel>
  </Accordion>`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => <Accordion {...args}>
    <Accordion.Panel title={args.title}>
      <p>
        The short answer is that <b>confidential clients</b> can keep a secret while <b>public clients</b> do not
        require a secret.
      </p>
      <h3>Confidential Client</h3>
      <ul>
        <li>Server-side applications (e.g., .Net, Java, PHP)</li>
      </ul>
      <h3>Public Client</h3>
      <ul>
        <li>Javascript applications (e.g., SPA: single page application, Hybrid Mobile apps)</li>
        <li>Native Mobile apps, Embedded devices, and Internet of Things (e.g., Apple TV)</li>
        <li>Secured by PKCE (Proof Key for Code Exchange); a secret on the fly</li>
      </ul>
    </Accordion.Panel>
    <Accordion.Panel title="Q. How do I allow dynamic redirect URIs for my integration?">
      <p>
        Yes, you can start with <b>http://localhost</b> and change your redirect URIs.
      </p>
      <p>
        Before going to production, please make sure that your production environment's redirect URIs are properly set
        to your live application's domain.
      </p>
    </Accordion.Panel>
  </Accordion>`,...J.parameters?.docs?.source}}},Y=[`Open`,`Closed`]}))();export{J as Closed,q as Open,Y as __namedExportsOrder,G as default};