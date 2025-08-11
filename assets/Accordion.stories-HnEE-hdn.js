import{c as w,g as ue,r as F,R as o}from"./iframe-Ol00qHgk.js";import{_ as ee}from"./extends-BFqQA52f.js";import{d as q}from"./styled-components.browser.esm-BHjMWl6I.js";import{F as He,f as De,a as Me}from"./index-B7VJVq59.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DLfQ-PO-.js";var H;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(H||(H={}));var te=function(t){return t},ne="beforeunload",Fe="hashchange",We="popstate";function $e(t){t===void 0&&(t={});var d=t,u=d.window,i=u===void 0?document.defaultView:u,s=i.history;function p(){var r=oe(i.location.hash.substr(1)),e=r.pathname,a=e===void 0?"/":e,c=r.search,m=c===void 0?"":c,f=r.hash,A=f===void 0?"":f,y=s.state||{};return[y.idx,te({pathname:a,search:m,hash:A,state:y.usr||null,key:y.key||"default"})]}var l=null;function g(){if(l)E.call(l),l=null;else{var r=H.Pop,e=p(),a=e[0],c=e[1];if(E.length){if(a!=null){var m=x-a;m&&(l={action:r,location:c,retry:function(){P(m*-1)}},P(m))}}else L(r)}}i.addEventListener(We,g),i.addEventListener(Fe,function(){var r=p(),e=r[1];G(e)!==G(v)&&g()});var b=H.Pop,O=p(),x=O[0],v=O[1],C=ae(),E=ae();x==null&&(x=0,s.replaceState(ee({},s.state,{idx:x}),""));function U(){var r=document.querySelector("base"),e="";if(r&&r.getAttribute("href")){var a=i.location.href,c=a.indexOf("#");e=c===-1?a:a.slice(0,c)}return e}function S(r){return U()+"#"+(typeof r=="string"?r:G(r))}function R(r,e){return e===void 0&&(e=null),te(ee({pathname:v.pathname,hash:"",search:""},typeof r=="string"?oe(r):r,{state:e,key:qe()}))}function k(r,e){return[{usr:r.state,key:r.key,idx:e},S(r)]}function j(r,e,a){return!E.length||(E.call({action:r,location:e,retry:a}),!1)}function L(r){b=r;var e=p();x=e[0],v=e[1],C.call({action:b,location:v})}function T(r,e){var a=H.Push,c=R(r,e);function m(){T(r,e)}if(j(a,c,m)){var f=k(c,x+1),A=f[0],y=f[1];try{s.pushState(A,"",y)}catch{i.location.assign(y)}L(a)}}function I(r,e){var a=H.Replace,c=R(r,e);function m(){I(r,e)}if(j(a,c,m)){var f=k(c,x),A=f[0],y=f[1];s.replaceState(A,"",y),L(a)}}function P(r){s.go(r)}var $={get action(){return b},get location(){return v},createHref:S,push:T,replace:I,go:P,back:function(){P(-1)},forward:function(){P(1)},listen:function(e){return C.push(e)},block:function(e){var a=E.push(e);return E.length===1&&i.addEventListener(ne,re),function(){a(),E.length||i.removeEventListener(ne,re)}}};return $}function re(t){t.preventDefault(),t.returnValue=""}function ae(){var t=[];return{get length(){return t.length},push:function(u){return t.push(u),function(){t=t.filter(function(i){return i!==u})}},call:function(u){t.forEach(function(i){return i&&i(u)})}}}function qe(){return Math.random().toString(36).substr(2,8)}function G(t){var d=t.pathname,u=d===void 0?"/":d,i=t.search,s=i===void 0?"":i,p=t.hash,l=p===void 0?"":p;return s&&s!=="?"&&(u+=s.charAt(0)==="?"?s:"?"+s),l&&l!=="#"&&(u+=l.charAt(0)==="#"?l:"#"+l),u}function oe(t){var d={};if(t){var u=t.indexOf("#");u>=0&&(d.hash=t.substr(u),t=t.substr(0,u));var i=t.indexOf("?");i>=0&&(d.search=t.substr(i),t=t.substr(0,i)),t&&(d.pathname=t)}return d}var K,ie;function ze(){if(ie)return K;ie=1;var t=9007199254740991,d="[object Arguments]",u="[object Function]",i="[object GeneratorFunction]",s=typeof w=="object"&&w&&w.Object===Object&&w,p=typeof self=="object"&&self&&self.Object===Object&&self,l=s||p||Function("return this")();function g(e,a){for(var c=-1,m=a.length,f=e.length;++c<m;)e[f+c]=a[c];return e}var b=Object.prototype,O=b.hasOwnProperty,x=b.toString,v=l.Symbol,C=b.propertyIsEnumerable,E=v?v.isConcatSpreadable:void 0;function U(e,a,c,m,f){var A=-1,y=e.length;for(c||(c=S),f||(f=[]);++A<y;){var _=e[A];c(_)?g(f,_):f[f.length]=_}return f}function S(e){return j(e)||k(e)||!!(E&&e&&e[E])}function R(e){var a=e?e.length:0;return a?U(e):[]}function k(e){return T(e)&&O.call(e,"callee")&&(!C.call(e,"callee")||x.call(e)==d)}var j=Array.isArray;function L(e){return e!=null&&P(e.length)&&!I(e)}function T(e){return r(e)&&L(e)}function I(e){var a=$(e)?x.call(e):"";return a==u||a==i}function P(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=t}function $(e){var a=typeof e;return!!e&&(a=="object"||a=="function")}function r(e){return!!e&&typeof e=="object"}return K=R,K}var Ge=ze();const Ke=ue(Ge);var V,ce;function Ve(){if(ce)return V;ce=1;var t="[object Symbol]",d=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\ud800-\\udfff",s="\\u0300-\\u036f\\ufe20-\\ufe23",p="\\u20d0-\\u20f0",l="\\u2700-\\u27bf",g="a-z\\xdf-\\xf6\\xf8-\\xff",b="\\xac\\xb1\\xd7\\xf7",O="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",x="\\u2000-\\u206f",v=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",C="A-Z\\xc0-\\xd6\\xd8-\\xde",E="\\ufe0e\\ufe0f",U=b+O+x+v,S="['’]",R="["+U+"]",k="["+s+p+"]",j="\\d+",L="["+l+"]",T="["+g+"]",I="[^"+i+U+j+l+g+C+"]",P="\\ud83c[\\udffb-\\udfff]",$="(?:"+k+"|"+P+")",r="[^"+i+"]",e="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+C+"]",m="\\u200d",f="(?:"+T+"|"+I+")",A="(?:"+c+"|"+I+")",y="(?:"+S+"(?:d|ll|m|re|s|t|ve))?",_="(?:"+S+"(?:D|LL|M|RE|S|T|VE))?",B=$+"?",J="["+E+"]?",le="(?:"+m+"(?:"+[r,e,a].join("|")+")"+J+B+")*",fe=J+B+le,de="(?:"+[L,e,a].join("|")+")"+fe,pe=RegExp(S,"g"),he=RegExp(k,"g"),be=RegExp([c+"?"+T+"+"+y+"(?="+[R,c,"$"].join("|")+")",A+"+"+_+"(?="+[R,c+f,"$"].join("|")+")",c+"?"+f+"+"+y,c+"+"+_,j,de].join("|"),"g"),me=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ge={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"ss"},xe=typeof w=="object"&&w&&w.Object===Object&&w,ye=typeof self=="object"&&self&&self.Object===Object&&self,ve=xe||ye||Function("return this")();function Ee(n,h,N,it){for(var z=-1,Ne=n?n.length:0;++z<Ne;)N=h(N,n[z],z,n);return N}function Ae(n){return n.match(d)||[]}function Pe(n){return function(h){return n?.[h]}}var Oe=Pe(ge);function Se(n){return me.test(n)}function we(n){return n.match(be)||[]}var Ce=Object.prototype,Re=Ce.toString,Z=ve.Symbol,Q=Z?Z.prototype:void 0,Y=Q?Q.toString:void 0;function ke(n){if(typeof n=="string")return n;if(Te(n))return Y?Y.call(n):"";var h=n+"";return h=="0"&&1/n==-1/0?"-0":h}function je(n){return function(h){return Ee(Ue(Ie(h).replace(pe,"")),n,"")}}function Le(n){return!!n&&typeof n=="object"}function Te(n){return typeof n=="symbol"||Le(n)&&Re.call(n)==t}function X(n){return n==null?"":ke(n)}function Ie(n){return n=X(n),n&&n.replace(u,Oe).replace(he,"")}var _e=je(function(n,h,N){return n+(N?"-":"")+h.toLowerCase()});function Ue(n,h,N){return n=X(n),h=h,h===void 0?Se(n)?we(n):Ae(n):n.match(h)||[]}return V=_e,V}var Be=Ve();const Je=ue(Be),Ze="#1A5A96",Qe="22px",Ye="#eaeaea",Xe="#f5f5f5",et=q.div`
  transition: max-height 0.4s, padding 0.4s;
  max-height: 300px;
  padding: 10px 20px;
  background-color: ${Xe};
  ${t=>!t.open&&"max-height: 0px; padding: 0 20px;"};
  overflow-y: hidden;
`,tt=q.div`
  margin: 10px 0;
`,nt=q.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${Ye};
  & span {
    font-size: ${Qe};
    font-weight: bold;
  }
`;function rt({title:t,hash:d,allOpen:u,setAllOpen:i,children:s}){const p=Je(t),[l,g]=F.useState(u),b=()=>{g(!l),i(null)};return F.useEffect(()=>{u!==null&&g(u)},[u]),F.useEffect(()=>{d===p&&g(!0)},[d]),o.createElement(tt,null,o.createElement(nt,{onClick:b},o.createElement("span",{id:p},t),o.createElement(He,{icon:l?De:Me,size:"2x"})),o.createElement(et,{open:l},s))}const at=q.div`
  display: flex;
  flex-direction: row;
  color: ${Ze};
  & span {
    cursor: pointer;
    text-decoration: underline;
  }
`,ot=q.span`
  border-right: 1px solid black;
  height: 1em;
  margin: auto 0.5em;
`;function W({children:t,open:d=!1}){const[u,i]=F.useState(""),[s,p]=F.useState(d);F.useEffect(()=>{let O=$e().listen(({action:x,location:v})=>{i(v.pathname)});return()=>O()},[]);const l=()=>{p(!1)},g=()=>{p(!0)};return o.createElement(o.Fragment,null,o.createElement(at,null,o.createElement("span",{onClick:g},"Expand All"),o.createElement(ot,null),o.createElement("span",{onClick:l},"Collapse All")),Array.isArray(t)?Ke(t).map(b=>o.cloneElement(b,{hash:u,allOpen:s,setAllOpen:p})):o.cloneElement(t,{allOpen:s,setAllOpen:p}))}W.Panel=rt;W.__docgenInfo={description:"",methods:[{name:"Panel",docblock:null,modifiers:["static"],params:[{name:"{ title, hash, allOpen, setAllOpen, children }: any",optional:!1,type:{name:"any"}}],returns:null}],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"any"},description:""},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const pt={title:"Accordion",component:W},se=t=>o.createElement(W,{...t},o.createElement(W.Panel,{title:t.title},o.createElement("p",null,"The short answer is that ",o.createElement("b",null,"confidential clients")," can keep a secret while ",o.createElement("b",null,"public clients")," do not require a secret."),o.createElement("h3",null,"Confidential Client"),o.createElement("ul",null,o.createElement("li",null,"Server-side applications (e.g., .Net, Java, PHP)")),o.createElement("h3",null,"Public Client"),o.createElement("ul",null,o.createElement("li",null,"Javascript applications (e.g., SPA: single page application, Hybrid Mobile apps)"),o.createElement("li",null,"Native Mobile apps, Embedded devices, and Internet of Things (e.g., Apple TV)"),o.createElement("li",null,"Secured by PKCE (Proof Key for Code Exchange); a secret on the fly"))),o.createElement(W.Panel,{title:"Q. How do I allow dynamic redirect URIs for my integration?"},o.createElement("p",null,"Yes, you can start with ",o.createElement("b",null,"http://localhost")," and change your redirect URIs."),o.createElement("p",null,"Before going to production, please make sure that your production environment's redirect URIs are properly set to your live application's domain."))),D=se.bind({});D.args={title:"Q. What is the difference between confidential and public client types?",open:!0};D.story={parameters:{design:{type:"figma",url:"https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1635%3A2827"}}};const M=se.bind({});M.args={title:"Q. What is the difference between confidential and public client types?"};M.story={parameters:{design:{type:"figma",url:"https://www.figma.com/file/Ed8vX3f4SQq6GDEVWKlXNf/SSO-Wireframes?node-id=1635%3A2331"}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => <Accordion {...args}>
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
  </Accordion>`,...D.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => <Accordion {...args}>
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
  </Accordion>`,...M.parameters?.docs?.source}}};const ht=["Open","Closed"];export{M as Closed,D as Open,ht as __namedExportsOrder,pt as default};
