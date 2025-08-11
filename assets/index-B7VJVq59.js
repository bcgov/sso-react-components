import{g as Va,R as Wt}from"./iframe-Ol00qHgk.js";/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Te(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function Ka(e){if(Array.isArray(e))return e}function qa(e){if(Array.isArray(e))return Te(e)}function Ja(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qa(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ut(r.key),r)}}function Za(e,t,a){return t&&Qa(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function oe(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Xe(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function b(e,t,a){return(t=Ut(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function er(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(d){u=!0,n=d}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}function ar(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?nt(Object(a),!0).forEach(function(r){b(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):nt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function me(e,t){return Ka(e)||tr(e,t)||Xe(e,t)||ar()}function T(e){return qa(e)||er(e)||Xe(e)||rr()}function nr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ut(e){var t=nr(e,"string");return typeof t=="symbol"?t:t+""}function fe(e){"@babel/helpers - typeof";return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fe(e)}function Xe(e,t){if(e){if(typeof e=="string")return Te(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Te(e,t):void 0}}var it=function(){},Ve={},Yt={},Ht=null,Gt={mark:it,measure:it};try{typeof window<"u"&&(Ve=window),typeof document<"u"&&(Yt=document),typeof MutationObserver<"u"&&(Ht=MutationObserver),typeof performance<"u"&&(Gt=performance)}catch{}var ir=Ve.navigator||{},ot=ir.userAgent,st=ot===void 0?"":ot,R=Ve,w=Yt,lt=Ht,ne=Gt;R.document;var _=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",Bt=~st.indexOf("MSIE")||~st.indexOf("Trident/"),be,or=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,sr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Xt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},lr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Vt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],P="classic",ee="duotone",Kt="sharp",qt="sharp-duotone",Jt="chisel",Qt="etch",Zt="jelly",ea="jelly-duo",ta="jelly-fill",aa="notdog",ra="notdog-duo",na="slab",ia="slab-press",oa="thumbprint",sa="whiteboard",fr="Classic",ur="Duotone",cr="Sharp",dr="Sharp Duotone",mr="Chisel",vr="Etch",pr="Jelly",hr="Jelly Duo",gr="Jelly Fill",br="Notdog",yr="Notdog Duo",xr="Slab",Sr="Slab Press",wr="Thumbprint",Ar="Whiteboard",la=[P,ee,Kt,qt,Jt,Qt,Zt,ea,ta,aa,ra,na,ia,oa,sa];be={},b(b(b(b(b(b(b(b(b(b(be,P,fr),ee,ur),Kt,cr),qt,dr),Jt,mr),Qt,vr),Zt,pr),ea,hr),ta,gr),aa,br),b(b(b(b(b(be,ra,yr),na,xr),ia,Sr),oa,wr),sa,Ar);var kr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Pr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},Or=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Ir={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},fa=["fak","fa-kit","fakd","fa-kit-duotone"],ft={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Er=["kit"],Tr="kit",Cr="kit-duotone",Fr="Kit",Nr="Kit Duotone";b(b({},Tr,Fr),Cr,Nr);var jr={kit:{"fa-kit":"fak"}},_r={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},$r={kit:{fak:"fa-kit"}},ut={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ye,ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Mr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Lr="classic",Rr="duotone",Dr="sharp",zr="sharp-duotone",Wr="chisel",Ur="etch",Yr="jelly",Hr="jelly-duo",Gr="jelly-fill",Br="notdog",Xr="notdog-duo",Vr="slab",Kr="slab-press",qr="thumbprint",Jr="whiteboard",Qr="Classic",Zr="Duotone",en="Sharp",tn="Sharp Duotone",an="Chisel",rn="Etch",nn="Jelly",on="Jelly Duo",sn="Jelly Fill",ln="Notdog",fn="Notdog Duo",un="Slab",cn="Slab Press",dn="Thumbprint",mn="Whiteboard";ye={},b(b(b(b(b(b(b(b(b(b(ye,Lr,Qr),Rr,Zr),Dr,en),zr,tn),Wr,an),Ur,rn),Yr,nn),Hr,on),Gr,sn),Br,ln),b(b(b(b(b(ye,Xr,fn),Vr,un),Kr,cn),qr,dn),Jr,mn);var vn="kit",pn="kit-duotone",hn="Kit",gn="Kit Duotone";b(b({},vn,hn),pn,gn);var bn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},yn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Ce={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},xn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ua=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Mr,xn),Sn=["solid","regular","light","thin","duotone","brands","semibold"],ca=[1,2,3,4,5,6,7,8,9,10],wn=ca.concat([11,12,13,14,15,16,17,18,19,20]),An=["aw","fw","pull-left","pull-right"],kn=[].concat(T(Object.keys(yn)),Sn,An,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ie.GROUP,ie.SWAP_OPACITY,ie.PRIMARY,ie.SECONDARY]).concat(ca.map(function(e){return"".concat(e,"x")})).concat(wn.map(function(e){return"w-".concat(e)})),Pn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},N="___FONT_AWESOME___",Fe=16,da="fa",ma="svg-inline--fa",U="data-fa-i2svg",Ne="data-fa-pseudo-element",On="data-fa-pseudo-element-pending",Ke="data-prefix",qe="data-icon",ct="fontawesome-i2svg",In="async",En=["HTML","HEAD","STYLE","SCRIPT"],va=["::before","::after",":before",":after"],pa=function(){try{return!0}catch{return!1}}();function te(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[P]}})}var ha=f({},Xt);ha[P]=f(f(f(f({},{"fa-duotone":"duotone"}),Xt[P]),ft.kit),ft["kit-duotone"]);var Tn=te(ha),je=f({},Ir);je[P]=f(f(f(f({},{duotone:"fad"}),je[P]),ut.kit),ut["kit-duotone"]);var dt=te(je),_e=f({},Ce);_e[P]=f(f({},_e[P]),$r.kit);var ga=te(_e),$e=f({},bn);$e[P]=f(f({},$e[P]),jr.kit);te($e);var Cn=or,ba="fa-layers-text",Fn=sr,Nn=f({},kr);te(Nn);var jn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xe=lr,_n=[].concat(T(Er),T(kn)),J=R.FontAwesomeConfig||{};function $n(e){var t=w.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Mn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(w&&typeof w.querySelector=="function"){var Ln=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ln.forEach(function(e){var t=me(e,2),a=t[0],r=t[1],n=Mn($n(a));n!=null&&(J[r]=n)})}var ya={styleDefault:"solid",familyDefault:P,cssPrefix:da,replacementClass:ma,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};J.familyPrefix&&(J.cssPrefix=J.familyPrefix);var V=f(f({},ya),J);V.autoReplaceSvg||(V.observeMutations=!1);var m={};Object.keys(ya).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(a){V[e]=a,Q.forEach(function(r){return r(m)})},get:function(){return V[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){V.cssPrefix=t,Q.forEach(function(a){return a(m)})},get:function(){return V.cssPrefix}});R.FontAwesomeConfig=m;var Q=[];function Rn(e){return Q.push(e),function(){Q.splice(Q.indexOf(e),1)}}var G=Fe,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Dn(e){if(!(!e||!_)){var t=w.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=w.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return w.head.insertBefore(t,r),e}}var zn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mt(){for(var e=12,t="";e-- >0;)t+=zn[Math.random()*62|0];return t}function K(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Je(e){return e.classList?K(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function xa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wn(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(xa(e[a]),'" ')},"").trim()}function ve(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Qe(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function Un(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function Yn(e){var t=e.transform,a=e.width,r=a===void 0?Fe:a,n=e.height,i=n===void 0?Fe:n,o="";return Bt?o+="translate(".concat(t.x/G-r/2,"em, ").concat(t.y/G-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/G,"em), calc(-50% + ").concat(t.y/G,"em)) "),o+="scale(".concat(t.size/G*(t.flipX?-1:1),", ").concat(t.size/G*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Hn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}`;function Sa(){var e=da,t=ma,a=m.cssPrefix,r=m.replacementClass,n=Hn;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var vt=!1;function Se(){m.autoAddCss&&!vt&&(Dn(Sa()),vt=!0)}var Gn={mixout:function(){return{dom:{css:Sa,insertCss:Se}}},hooks:function(){return{beforeDOMElementCreation:function(){Se()},beforeI2svg:function(){Se()}}}},j=R||{};j[N]||(j[N]={});j[N].styles||(j[N].styles={});j[N].hooks||(j[N].hooks={});j[N].shims||(j[N].shims=[]);var E=j[N],wa=[],Aa=function(){w.removeEventListener("DOMContentLoaded",Aa),ue=1,wa.map(function(t){return t()})},ue=!1;_&&(ue=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),ue||w.addEventListener("DOMContentLoaded",Aa));function Bn(e){_&&(ue?setTimeout(e,0):wa.push(e))}function ae(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?xa(e):"<".concat(t," ").concat(Wn(r),">").concat(i.map(ae).join(""),"</").concat(t,">")}function pt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var we=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=a,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function ka(e){return T(e).length!==1?null:e.codePointAt(0).toString(16)}function ht(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Pa(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=ht(t);typeof E.hooks.addPack=="function"&&!n?E.hooks.addPack(e,ht(t)):E.styles[e]=f(f({},E.styles[e]||{}),i),e==="fas"&&Pa("fa",t)}var Z=E.styles,Xn=E.shims,Oa=Object.keys(ga),Vn=Oa.reduce(function(e,t){return e[t]=Object.keys(ga[t]),e},{}),Ze=null,Ia={},Ea={},Ta={},Ca={},Fa={};function Kn(e){return~_n.indexOf(e)}function qn(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!Kn(n)?n:null}var Na=function(){var t=function(i){return we(Z,function(o,s,l){return o[l]=we(s,i,{}),o},{})};Ia=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),Ea=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),Fa=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var a="far"in Z||m.autoFetchSvg,r=we(Xn,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});Ta=r.names,Ca=r.unicodes,Ze=pe(m.styleDefault,{family:m.familyDefault})};Rn(function(e){Ze=pe(e.styleDefault,{family:m.familyDefault})});Na();function et(e,t){return(Ia[e]||{})[t]}function Jn(e,t){return(Ea[e]||{})[t]}function W(e,t){return(Fa[e]||{})[t]}function ja(e){return Ta[e]||{prefix:null,iconName:null}}function Qn(e){var t=Ca[e],a=et("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function D(){return Ze}var _a=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(e){var t=P,a=Oa.reduce(function(r,n){return r[n]="".concat(m.cssPrefix,"-").concat(n),r},{});return la.forEach(function(r){(e.includes(a[r])||e.some(function(n){return Vn[r].includes(n)}))&&(t=r)}),t}function pe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?P:a,n=Tn[r][e];if(r===ee&&!e)return"fad";var i=dt[r][e]||dt[r][n],o=e in E.styles?e:null,s=i||o||null;return s}function ei(e){var t=[],a=null;return e.forEach(function(r){var n=qn(m.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function gt(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var bt=ua.concat(fa);function he(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=gt(e.filter(function(p){return bt.includes(p)})),o=gt(e.filter(function(p){return!bt.includes(p)})),s=i.filter(function(p){return n=p,!Vt.includes(p)}),l=me(s,1),u=l[0],d=u===void 0?null:u,c=Zn(i),v=f(f({},ei(o)),{},{prefix:pe(d,{family:c})});return f(f(f({},v),ni({values:e,family:c,styles:Z,config:m,canonical:v,givenPrefix:n})),ti(r,n,v))}function ti(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?ja(n):{},o=W(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!Z.far&&Z.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var ai=la.filter(function(e){return e!==P||e!==ee}),ri=Object.keys(Ce).filter(function(e){return e!==P}).map(function(e){return Object.keys(Ce[e])}).flat();function ni(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,d=a===ee,c=t.includes("fa-duotone")||t.includes("fad"),v=u.familyDefault==="duotone",p=r.prefix==="fad"||r.prefix==="fa-duotone";if(!d&&(c||v||p)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&ai.includes(a)){var x=Object.keys(s).find(function(S){return ri.includes(S)});if(x||u.autoFetchSvg){var g=Or.get(a).defaultShortPrefixId;r.prefix=g,r.iconName=W(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=D()||"fas"),r}var ii=function(){function e(){Ja(this,e),this.definitions={}}return Za(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),Pa(s,o[s]),Na()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];a[s]||(a[s]={}),d.length>0&&d.forEach(function(c){typeof c=="string"&&(a[s][c]=u)}),a[s][l]=u}),a}}])}(),yt=[],B={},X={},oi=Object.keys(X);function si(e,t){var a=t.mixoutsTo;return yt=e,B={},Object.keys(X).forEach(function(r){oi.indexOf(r)===-1&&delete X[r]}),yt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),fe(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){B[o]||(B[o]=[]),B[o].push(i[o])})}r.provides&&r.provides(X)}),a}function Me(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=B[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Y(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=B[e]||[];n.forEach(function(i){i.apply(null,a)})}function z(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return X[e]?X[e].apply(null,t):void 0}function Le(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||D();if(t)return t=W(a,t)||t,pt($a.definitions,a,t)||pt(E.styles,a,t)}var $a=new ii,li=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,Y("noAuto")},fi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(Y("beforeI2svg",t),z("pseudoElements2svg",t),z("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Bn(function(){ci({autoReplaceSvgRoot:a}),Y("watch",t)})}},ui={icon:function(t){if(t===null)return null;if(fe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=pe(t[0]);return{prefix:r,iconName:W(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Cn))){var n=he(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||D(),iconName:W(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=D();return{prefix:i,iconName:W(i,t)||t}}}},O={noAuto:li,config:m,dom:fi,parse:ui,library:$a,findIconDefinition:Le,toHtml:ae},ci=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?w:a;(Object.keys(E.styles).length>0||m.autoFetchSvg)&&_&&m.autoReplaceSvg&&O.dom.i2svg({node:r})};function ge(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ae(r)})}}),Object.defineProperty(e,"node",{get:function(){if(_){var r=w.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function di(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(Qe(o)&&a.found&&!r.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};n.style=ve(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function mi(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:o}),children:r}]}]}function vi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function tt(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,d=e.watchable,c=d===void 0?!1:d,v=r.found?r:a,p=v.width,x=v.height,g=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(I){return u.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(u.classes).join(" "),S={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":i,class:g,role:u.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(x)})};!vi(u.attributes)&&!u.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),c&&(S.attributes[U]="");var y=f(f({},S),{},{prefix:n,iconName:i,main:a,mask:r,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),A=r.found&&a.found?z("generateAbstractMask",y)||{children:[],attributes:{}}:z("generateAbstractIcon",y)||{children:[],attributes:{}},k=A.children,$=A.attributes;return y.children=k,y.attributes=$,s?mi(y):di(y)}function xt(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[U]="");var u=f({},i.styles);Qe(n)&&(u.transform=Yn({transform:n,width:a,height:r}),u["-webkit-transform"]=u.transform);var d=ve(u);d.length>0&&(l.style=d);var c=[];return c.push({tag:"span",attributes:l,children:[t]}),c}function pi(e){var t=e.content,a=e.extra,r=f(f({},a.attributes),{},{class:a.classes.join(" ")}),n=ve(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Ae=E.styles;function Re(e){var t=e[0],a=e[1],r=e.slice(4),n=me(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(xe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var hi={found:!1,width:512,height:512};function gi(e,t){!pa&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function De(e,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=D()),new Promise(function(r,n){if(a==="fa"){var i=ja(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ae[t]&&Ae[t][e]){var o=Ae[t][e];return r(Re(o))}gi(e,t),r(f(f({},hi),{},{icon:m.showMissingIcons&&e?z("missingIconAbstract")||{}:{}}))})}var St=function(){},ze=m.measurePerformance&&ne&&ne.mark&&ne.measure?ne:{mark:St,measure:St},q='FA "7.0.0"',bi=function(t){return ze.mark("".concat(q," ").concat(t," begins")),function(){return Ma(t)}},Ma=function(t){ze.mark("".concat(q," ").concat(t," ends")),ze.measure("".concat(q," ").concat(t),"".concat(q," ").concat(t," begins"),"".concat(q," ").concat(t," ends"))},at={begin:bi,end:Ma},se=function(){};function wt(e){var t=e.getAttribute?e.getAttribute(U):null;return typeof t=="string"}function yi(e){var t=e.getAttribute?e.getAttribute(Ke):null,a=e.getAttribute?e.getAttribute(qe):null;return t&&a}function xi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Si(){if(m.autoReplaceSvg===!0)return le.replace;var e=le[m.autoReplaceSvg];return e||le.replace}function wi(e){return w.createElementNS("http://www.w3.org/2000/svg",e)}function Ai(e){return w.createElement(e)}function La(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?wi:Ai:a;if(typeof e=="string")return w.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(La(o,{ceFn:r}))}),n}function ki(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var le={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(La(n),a)}),a.getAttribute(U)===null&&m.keepOriginalSource){var r=w.createComment(ki(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~Je(a).indexOf(m.replacementClass))return le.replace(t);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ae(s)}).join(`
`);a.setAttribute(U,""),a.innerHTML=o}};function At(e){e()}function Ra(e,t){var a=typeof t=="function"?t:se;if(e.length===0)a();else{var r=At;m.mutateApproach===In&&(r=R.requestAnimationFrame||At),r(function(){var n=Si(),i=at.begin("mutate");e.map(n),i(),a()})}}var rt=!1;function Da(){rt=!0}function We(){rt=!1}var ce=null;function kt(e){if(lt&&m.observeMutations){var t=e.treeCallback,a=t===void 0?se:t,r=e.nodeCallback,n=r===void 0?se:r,i=e.pseudoElementsCallback,o=i===void 0?se:i,s=e.observeMutationsRoot,l=s===void 0?w:s;ce=new lt(function(u){if(!rt){var d=D();K(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!wt(c.addedNodes[0])&&(m.searchPseudoElements&&o(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&m.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&wt(c.target)&&~jn.indexOf(c.attributeName))if(c.attributeName==="class"&&yi(c.target)){var v=he(Je(c.target)),p=v.prefix,x=v.iconName;c.target.setAttribute(Ke,p||d),x&&c.target.setAttribute(qe,x)}else xi(c.target)&&n(c.target)})}}),_&&ce.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pi(){ce&&ce.disconnect()}function Oi(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function Ii(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=he(Je(e));return n.prefix||(n.prefix=D()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=Jn(n.prefix,e.innerText)||et(n.prefix,ka(e.innerText))),!n.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Ei(e){var t=K(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function Ti(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Ii(e),r=a.iconName,n=a.prefix,i=a.rest,o=Ei(e),s=Me("parseNodeAttributes",{},e),l=t.styleParser?Oi(e):[];return f({iconName:r,prefix:n,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ci=E.styles;function za(e){var t=m.autoReplaceSvg==="nest"?Pt(e,{styleParser:!1}):Pt(e);return~t.extra.classes.indexOf(ba)?z("generateLayersText",e,t):z("generateSvgReplacementMutation",e,t)}function Fi(){return[].concat(T(fa),T(ua))}function Ot(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();var a=w.documentElement.classList,r=function(c){return a.add("".concat(ct,"-").concat(c))},n=function(c){return a.remove("".concat(ct,"-").concat(c))},i=m.autoFetchSvg?Fi():Vt.concat(Object.keys(Ci));i.includes("fa")||i.push("fa");var o=[".".concat(ba,":not([").concat(U,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(U,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=K(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=at.begin("onTree"),u=s.reduce(function(d,c){try{var v=za(c);v&&d.push(v)}catch(p){pa||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise(function(d,c){Promise.all(u).then(function(v){Ra(v,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),c(v)})})}function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;za(e).then(function(a){a&&Ra([a],t)})}function ji(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Le(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:Le(n||{})),e(r,f(f({},a),{},{mask:n}))}}var _i=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?F:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,d=u===void 0?null:u,c=a.classes,v=c===void 0?[]:c,p=a.attributes,x=p===void 0?{}:p,g=a.styles,S=g===void 0?{}:g;if(t){var y=t.prefix,A=t.iconName,k=t.icon;return ge(f({type:"icon"},t),function(){return Y("beforeDOMElementCreation",{iconDefinition:t,params:a}),tt({icons:{main:Re(k),mask:l?Re(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:A,transform:f(f({},F),n),symbol:o,maskId:d,extra:{attributes:x,styles:S,classes:v}})})}},$i={mixout:function(){return{icon:ji(_i)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Ot,a.nodeCallback=Ni,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?w:r,i=a.callback,o=i===void 0?function(){}:i;return Ot(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,u=r.maskId,d=r.extra;return new Promise(function(c,v){Promise.all([De(n,i),l.iconName?De(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var x=me(p,2),g=x[0],S=x[1];c([a,tt({icons:{main:g,mask:S},prefix:i,iconName:n,transform:o,symbol:s,maskId:u,extra:d,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,l=ve(s);l.length>0&&(n.style=l);var u;return Qe(o)&&(u=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:n}}}},Mi={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return ge({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(T(i)).join(" ")},children:o}]})}}}},Li={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,u=l===void 0?{}:l;return ge({type:"counter",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:r}),pi({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(T(i))}})})}}}},Ri={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?F:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,c=d===void 0?{}:d;return ge({type:"text",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:r}),xt({content:a,transform:f(f({},F),i),extra:{attributes:u,styles:c,classes:["".concat(m.cssPrefix,"-layers-text")].concat(T(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,s=null;if(Bt){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,xt({content:a.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Wa=new RegExp('"',"ug"),It=[1105920,1112319],Et=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Pr),Pn),_r),Ue=Object.keys(Et).reduce(function(e,t){return e[t.toLowerCase()]=Et[t],e},{}),Di=Object.keys(Ue).reduce(function(e,t){var a=Ue[t];return e[t]=a[900]||T(Object.entries(a))[0][1],e},{});function zi(e){var t=e.replace(Wa,"");return ka(T(t)[0]||"")}function Wi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Wa,""),n=r.codePointAt(0),i=n>=It[0]&&n<=It[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function Ui(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Ue[a]||{})[n]||Di[a]}function Tt(e,t){var a="".concat(On).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=K(e.children),o=i.filter(function(H){return H.getAttribute(Ne)===t})[0],s=R.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(Fn),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),p=Ui(l,d),x=zi(v),g=u[0].startsWith("FontAwesome"),S=Wi(s),y=et(p,x),A=y;if(g){var k=Qn(x);k.iconName&&k.prefix&&(y=k.iconName,p=k.prefix)}if(y&&!S&&(!o||o.getAttribute(Ke)!==p||o.getAttribute(qe)!==A)){e.setAttribute(a,A),o&&e.removeChild(o);var $=Ti(),I=$.extra;I.attributes[Ne]=t,De(y,p).then(function(H){var re=tt(f(f({},$),{},{icons:{main:H,mask:_a()},prefix:p,iconName:A,extra:I,watchable:!0})),M=w.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=re.map(function(Xa){return ae(Xa)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function Yi(e){return Promise.all([Tt(e,"::before"),Tt(e,"::after")])}function Hi(e){return e.parentNode!==document.head&&!~En.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ne)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Gi=function(t){return!!t&&va.some(function(a){return t.includes(a)})},Bi=function(t){if(!t)return[];for(var a=new Set,r=[t],n=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var p=s[o];r=r.flatMap(function(x){return x.split(p).map(function(g){return g.replace(/,\s*$/,"").trim()})})},o=0,s=n;o<s.length;o++)i();r=r.flatMap(function(v){return v.includes("(")?v:v.split(",").map(function(p){return p.trim()})});var l=oe(r),u;try{for(l.s();!(u=l.n()).done;){var d=u.value;if(Gi(d)){var c=va.reduce(function(v,p){return v.replace(p,"")},d);c!==""&&c!=="*"&&a.add(c)}}}catch(v){l.e(v)}finally{l.f()}return a};function Ct(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(_){var a;if(t)a=e;else if(m.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=oe(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=oe(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,d=Bi(u.selectorText),c=oe(d),v;try{for(c.s();!(v=c.n()).done;){var p=v.value;r.add(p)}}catch(g){c.e(g)}finally{c.f()}}}catch(g){s.e(g)}finally{s.f()}}catch(g){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(g.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(g){n.e(g)}finally{n.f()}if(!r.size)return;var x=Array.from(r).join(", ");try{a=e.querySelectorAll(x)}catch{}}return new Promise(function(g,S){var y=K(a).filter(Hi).map(Yi),A=at.begin("searchPseudoElements");Da(),Promise.all(y).then(function(){A(),We(),g()}).catch(function(){A(),We(),S()})})}}var Xi={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Ct,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?w:r;m.searchPseudoElements&&Ct(n)}}},Ft=!1,Vi={mixout:function(){return{dom:{unwatch:function(){Da(),Ft=!0}}}},hooks:function(){return{bootstrap:function(){kt(Me("mutationObserverCallbacks",{}))},noAuto:function(){Pi()},watch:function(a){var r=a.observeMutationsRoot;Ft?We():kt(Me("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Nt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},Ki={mixout:function(){return{parse:{transform:function(a){return Nt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Nt(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),d="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:c,path:v};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),p.path)}]}]}}}},ke={x:0,y:0,width:"100%",height:"100%"};function jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qi(e){return e.tag==="g"?e.children:[e]}var Ji={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?he(n.split(" ").map(function(o){return o.trim()})):_a();return i.prefix||(i.prefix=D()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,d=i.icon,c=o.width,v=o.icon,p=Un({transform:l,containerWidth:c,iconWidth:u}),x={tag:"rect",attributes:f(f({},ke),{},{fill:"white"})},g=d.children?{children:d.children.map(jt)}:{},S={tag:"g",attributes:f({},p.inner),children:[jt(f({tag:d.tag,attributes:f(f({},d.attributes),p.path)},g))]},y={tag:"g",attributes:f({},p.outer),children:[S]},A="mask-".concat(s||mt()),k="clip-".concat(s||mt()),$={tag:"mask",attributes:f(f({},ke),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,y]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:qi(v)},$]};return r.push(I,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(A,")")},ke)}),{children:r,attributes:n}}}},Qi={provides:function(t){var a=!1;R.matchMedia&&(a=R.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Zi={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},eo=[Gn,$i,Mi,Li,Ri,Xi,Vi,Ki,Ji,Qi,Zi];si(eo,{mixoutsTo:O});O.noAuto;O.config;O.library;O.dom;var Ye=O.parse;O.findIconDefinition;O.toHtml;var to=O.icon;O.layer;O.text;O.counter;var Pe={exports:{}},Oe,_t;function ao(){if(_t)return Oe;_t=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Oe=e,Oe}var Ie,$t;function ro(){if($t)return Ie;$t=1;var e=ao();function t(){}function a(){}return a.resetWarningCache=t,Ie=function(){function r(o,s,l,u,d,c){if(c!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function n(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:n,element:r,elementType:r,instanceOf:n,node:r,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:t};return i.PropTypes=i,i},Ie}var Mt;function no(){return Mt||(Mt=1,Pe.exports=ro()()),Pe.exports}var io=no();const h=Va(io);var oo={};function He(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function so(e){if(Array.isArray(e))return e}function lo(e){if(Array.isArray(e))return He(e)}function L(e,t,a){return(t=go(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function fo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uo(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t!==0)for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(d){u=!0,n=d}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}function co(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Lt(Object(a),!0).forEach(function(r){L(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Lt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function vo(e,t){if(e==null)return{};var a,r,n=po(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function po(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function Rt(e,t){return so(e)||uo(e,t)||Ua(e,t)||co()}function Ge(e){return lo(e)||fo(e)||Ua(e)||mo()}function ho(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function go(e){var t=ho(e,"string");return typeof t=="symbol"?t:t+""}function de(e){"@babel/helpers - typeof";return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},de(e)}function Ua(e,t){if(e){if(typeof e=="string")return He(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?He(e,t):void 0}}var bo="7.0.0-alpha1",Be;try{var yo=require("@fortawesome/fontawesome-svg-core/package.json");Be=yo.version}catch{Be=oo.FA_VERSION||"7.0.0-alpha8"}function xo(e){var t=e.beat,a=e.fade,r=e.beatFade,n=e.bounce,i=e.shake,o=e.flash,s=e.spin,l=e.spinPulse,u=e.spinReverse,d=e.pulse,c=e.fixedWidth,v=e.inverse,p=e.border,x=e.listItem,g=e.flip,S=e.size,y=e.rotation,A=e.pull,k=e.swapOpacity,$=e.rotateBy,I=e.widthAuto,H=So(Be,bo),re=L(L(L(L(L(L({"fa-beat":t,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":n,"fa-shake":i,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":d,"fa-fw":c,"fa-inverse":v,"fa-border":p,"fa-li":x,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},"fa-".concat(S),typeof S<"u"&&S!==null),"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),"fa-pull-".concat(A),typeof A<"u"&&A!==null),"fa-swap-opacity",k),"fa-rotate-by",H&&$),"fa-width-auto",H&&I);return Object.keys(re).map(function(M){return re[M]?M:null}).filter(function(M){return M})}function So(e,t){for(var a=e.split("-"),r=Rt(a,2),n=r[0],i=r[1],o=t.split("-"),s=Rt(o,2),l=s[0],u=s[1],d=n.split("."),c=l.split("."),v=0;v<Math.max(d.length,c.length);v++){var p=d[v]||"0",x=c[v]||"0",g=parseInt(p,10),S=parseInt(x,10);if(g!==S)return g>S}for(var y=0;y<Math.max(d.length,c.length);y++){var A=d[y]||"0",k=c[y]||"0";if(A!==k&&A.length!==k.length)return A.length<k.length}return!(i&&!u)}function wo(e){return e=e-0,e===e}function Ya(e){return wo(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ao=["style"];function ko(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Po(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var r=a.indexOf(":"),n=Ya(a.slice(0,r)),i=a.slice(r+1).trim();return n.startsWith("webkit")?t[ko(n)]=i:t[n]=i,t},{})}function Ha(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Ha(e,l)}),n=Object.keys(t.attributes||{}).reduce(function(l,u){var d=t.attributes[u];switch(u){case"class":l.attrs.className=d,delete t.attributes.class;break;case"style":l.attrs.style=Po(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=d:l.attrs[Ya(u)]=d}return l},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=vo(a,Ao);return n.attrs.style=C(C({},n.attrs.style),o),e.apply(void 0,[t.tag,C(C({},n.attrs),s)].concat(Ge(r)))}var Ga=!1;try{Ga=!0}catch{}function Oo(){if(!Ga&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Dt(e){if(e&&de(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ye.icon)return Ye.icon(e);if(e===null)return null;if(e&&de(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ee(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?L({},e,t):{}}var zt={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Ba=Wt.forwardRef(function(e,t){var a=C(C({},zt),e),r=a.icon,n=a.mask,i=a.symbol,o=a.className,s=a.title,l=a.titleId,u=a.maskId,d=Dt(r),c=Ee("classes",[].concat(Ge(xo(a)),Ge((o||"").split(" ")))),v=Ee("transform",typeof a.transform=="string"?Ye.transform(a.transform):a.transform),p=Ee("mask",Dt(n)),x=to(d,C(C(C(C({},c),v),p),{},{symbol:i,title:s,titleId:l,maskId:u}));if(!x)return Oo("Could not find icon",d),null;var g=x.abstract,S={ref:t};return Object.keys(a).forEach(function(y){zt.hasOwnProperty(y)||(S[y]=a[y])}),Io(g[0],S)});Ba.displayName="FontAwesomeIcon";Ba.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),rotateBy:h.bool,shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool,widthAuto:h.bool};var Io=Ha.bind(null,Wt.createElement);/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Fo={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},No={prefix:"fas",iconName:"sort-up",icon:[384,512,["sort-asc"],"f0de","M32 224c-12.9 0-24.6-7.8-29.6-19.8S.2 178.5 9.4 169.4l160-160c12.5-12.5 32.8-12.5 45.3 0l160 160c9.2 9.2 11.9 22.9 6.9 34.9S364.9 224 352 224L32 224z"]},jo={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]},_o={prefix:"fas",iconName:"info",icon:[192,512,[],"f129","M48 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM0 192c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 256 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-224-32 0c-17.7 0-32-14.3-32-32z"]},$o={prefix:"fas",iconName:"sort",icon:[384,512,["unsorted"],"f0dc","M2.4 204.2c5 12 16.6 19.8 29.6 19.8l320 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-9.2 9.2-11.9 22.9-6.9 34.9zm0 103.5c-5 12-2.2 25.7 6.9 34.9l160 160c12.5 12.5 32.8 12.5 45.3 0l160-160c9.2-9.2 11.9-22.9 6.9-34.9S364.9 288 352 288L32 288c-12.9 0-24.6 7.8-29.6 19.8z"]},Eo={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm84.4-299.3l-80 128c-4.2 6.7-11.4 10.9-19.3 11.3s-15.5-3.2-20.2-9.6l-48-64c-8-10.6-5.8-25.6 4.8-33.6s25.6-5.8 33.6 4.8l27 36 61.4-98.3c7-11.2 21.8-14.7 33.1-7.6s14.7 21.8 7.6 33.1z"]},Mo=Eo,Lo={prefix:"fas",iconName:"angle-down",icon:[384,512,[8964],"f107","M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},To={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.1-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 168c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm26.7 216a26.7 26.7 0 1 0 -53.3 0 26.7 26.7 0 1 0 53.3 0z"]},Ro=To,Do={prefix:"fas",iconName:"angle-up",icon:[384,512,[8963],"f106","M169.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 205.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},zo={prefix:"fas",iconName:"sort-down",icon:[384,512,["sort-desc"],"f0dd","M32 288c-12.9 0-24.6 7.8-29.6 19.8S.2 333.5 9.4 342.6l160 160c12.5 12.5 32.8 12.5 45.3 0l160-160c9.2-9.2 11.9-22.9 6.9-34.9S364.9 288 352 288L32 288z"]};export{Ba as F,Lo as a,Mo as b,Ro as c,_o as d,jo as e,Do as f,No as g,zo as h,$o as i,Fo as j};
