(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{132:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return S}),t.d(a,"partInfoQuery",function(){return F});t(440),t(67),t(46),t(217),t(442);var n=t(290),r=t(152),l=t(147),o=t(159),i=t(161),c=t(238),s=t.n(c),u=t(322),m=t(0),p=t.n(m),d=t(160),f=t(154),g=t(320),k=t.n(g),b=t(591),v=t.n(b),h=t(232),E=t.n(h),y=t(157),N=t.n(y),x=t(212),w=t.n(x),C=t(357),j=t(289),_=t.n(j),R=t(239),L=t.n(R);function S(e){var a=e.data.markdownRemark,t=a.frontmatter,c=a.html,m=t.mainImage,g=t.part,b=t.lang,h=v()(w.a[b][g])?[]:Object.keys(w.a[b][g]),y={replace:function(e){var a=e.type,t=e.attribs,n=e.children;if("tag"===a&&"intro"===t.class)return p.a.createElement("div",{className:"col-7"},k()(n,y))}};return p.a.createElement(i.a,null,p.a.createElement(d.a,{title:"Fullstack "+("en"===b?"part":"osa")+g,description:E.a,keywords:[].concat(N.a,[w.a[b][g]?Object.values(w.a[b][g]):[]])}),p.a.createElement("div",{className:"spacing--after"},p.a.createElement(r.a,{className:"part-intro__banner spacing--mobile--small",style:{backgroundImage:"url("+_.a.resolve(m.publicURL)+")",backgroundColor:f[C.a[g]]}},p.a.createElement(l.a,{className:"container"},p.a.createElement(n.a,{className:"breadcrumb",content:[{backgroundColor:f[C.a[g]],text:"Fullstack",link:"/"+("en"===b&&"en/")+"#course-contents"},{backgroundColor:f.black,text:("en"===b?"Part":"Osa")+" "+g}]}),p.a.createElement("div",{className:"part-intro col-7 col-10--mobile spacing--after-small"},s()(c,y)),h&&p.a.createElement(n.a,{wrapperClassName:"spacing--mobile--large",stack:!0,content:h.map(function(e){return{backgroundColor:f.white,letter:e,path:"/"+("en"===b?"en/part":"osa")+g+"/"+L()(w.a[b][g][e]),text:e+" "+w.a[b][g][e]}})}))),p.a.createElement(u.a,{part:g,lang:b})),p.a.createElement(o.a,{lang:b}))}var F="412899762"},152:function(e,a,t){"use strict";t.d(a,"a",function(){return s});t(28);var n=t(148),r=t.n(n),l=(t(162),t(4)),o=t.n(l),i=t(0),c=t.n(i),s=function(e){var a=e.className,t=e.backgroundColor,n=r()(e,["className","backgroundColor"]),l=t?{backgroundColor:t}:null;return c.a.createElement("div",Object.assign({className:"banner "+a,style:l},n))};s.defaultProps={className:""},s.propTypes={className:o.a.string}},154:function(e){e.exports={white:"#ffffff",black:"#33332d",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0"}},157:function(e,a){e.exports=["fullstack","full stack open 2019","course","helsingin yliopisto","tietojenkäsittelytieteen osasto","mooc","mooc.fi","full stack","full stack open","web-sovelluskehitys","web","houston","houston inc","websovelluskehitys","web-sovellus","React","Redux","Node.js","Node","MongoDB","GraphQL","REST","REST api","single page -sovellus","ohjelmointi"]},159:function(e,a,t){"use strict";t(163);var n=t(147),r=t(149),l=t(146),o=t(0),i=t.n(o),c=t(155),s=t.n(c),u=t(211),m=t(153),p=[{src:t.n(m).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:s.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];a.a=function(e){var a=e.lang;return i.a.createElement(n.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},i.a.createElement(n.a,{className:"col-5 push-right-3 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},p.map(function(e){return i.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},i.a.createElement(r.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),i.a.createElement(n.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},i.a.createElement("div",{className:"footer__navigation-link-container"},u.b[a].map(function(e){return i.a.createElement(l.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)}))))}},162:function(e,a,t){},163:function(e,a,t){},212:function(e,a){e.exports={fi:{0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"Custom hookit"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria, connect",c:"Redux-sovelluksen kommunikointi palvelimen kanssa"},7:{a:"React-router",b:"Lisää tyyleistä",c:"Webpack",d:"Luokkakomponentit, E2E-testaus",e:"Sekalaista",f:"Tehtäviä: blogilistan laajennus"},8:{a:"GraphQL-palvelin",b:"React ja GraphQL",c:"Tietokanta ja käyttäjien hallinta",d:"Kirjautuminen ja välimuistin päivitys",e:"Fragmentit ja subskriptiot"}},en:{0:{a:"General info",b:"Fundamentals of Web-apps"},1:{a:"Introduction to React",b:"Javascript",c:"Component state, event handlers",d:"A more complex state, debugging React apps"},2:{a:"Rendering a collection, modules",b:"Forms",c:"Getting data from server",d:"Altering data in server",e:"Adding styles to React app"},3:{a:"Node.js and Express",b:"Deploying app to internet",c:"Saving data to MongoDB",d:"Validation and ESLint"},4:{a:"Structure of backend application, introduction to testing",b:"Testing the backend",c:"User administration",d:"Token authentication"},5:{a:"Login in frontend",b:"props.children and proptypes",c:"Testing React apps",d:"Custom hooks"},6:{a:"Flux-arkkitecture and Redux",b:"Many redusers, connect",c:"Communicating with server in a redux application"},7:{a:"React-router",b:"More about styles",c:"Webpack",d:"Class components, E2E-testing",e:"Miscellaneous",f:"Exercises: extending the blogilist"},8:{a:"GraphQL-serves",b:"React and GraphQL",c:"Database and user administration",d:"Login and updating the cache",e:"Fragments and subscriptions"}}}},217:function(e,a,t){var n=t(30),r=t(29);t(229)("keys",function(){return function(e){return r(n(e))}})},229:function(e,a,t){var n=t(21),r=t(15),l=t(22);e.exports=function(e,a){var t=(r.Object||{})[e]||Object[e],o={};o[e]=a(t),n(n.S+n.F*l(function(){t(1)}),"Object",o)}},232:function(e,a){e.exports="Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin Javascript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun."},290:function(e,a,t){"use strict";t(28),t(236),t(292);var n=t(148),r=t.n(n),l=(t(293),t(147)),o=t(146),i=t(4),c=t.n(i),s=t(0),u=t.n(s),m=t(154),p=function(e){var a,t=e.className,n=e.wrapperClassName,i=e.link,c=e.content,s=e.stack,p=e.bold,d=e.thickBorder,f=e.upperCase,g=r()(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),k=u.a.createElement("div",{className:"arrow__container arrows--horizontal "+t},c.map(function(e,a){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===m.black?"white":m.black};return u.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},g),u.a.createElement("div",{className:"arrow__rectangle "+(p?"bold":"")+" "+(d?"arrow__rectangle--thick-border":""),style:t},e.link?u.a.createElement(o.Link,{to:e.link},f?e.text.toUpperCase():e.text):f?e.text.toUpperCase():e.text),u.a.createElement("div",{className:"arrow__point "+(d?"arrow__point--thick-border":""),style:t}))}));return s||i?!s&&i?a=u.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},u.a.createElement(o.Link,{to:i,style:{display:"inline-block"}},k)):s&&(a=u.a.createElement("div",{className:"col-10 spacing--after "+n},u.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},c.map(function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===m.black?"white":m.black};return u.a.createElement(o.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},g),u.a.createElement(l.a,{flex:!0,className:"arrow__rectangle",style:a},u.a.createElement("p",{className:"arrow--stacked-title"},u.a.createElement("span",null,e.text))),u.a.createElement("div",{className:"arrow__point",style:a}))})))):a=u.a.createElement("div",{className:"col-10 spacing--after"},k),a};p.propTypes={className:c.a.string,wrapperClassName:c.a.string,link:c.a.string,content:c.a.array.isRequired,stack:c.a.bool,upperCase:c.a.bool,bold:c.a.bool,thickBorder:c.a.bool},p.defaultProps={className:"",wrapperClassName:""},a.a=p},292:function(e,a,t){"use strict";t(291)("link",function(e){return function(a){return e(this,"a","href",a)}})},293:function(e,a,t){},294:function(e,a,t){"use strict";var n=t(10);e.exports=function(){var e=n(this),a="";return e.global&&(a+="g"),e.ignoreCase&&(a+="i"),e.multiline&&(a+="m"),e.unicode&&(a+="u"),e.sticky&&(a+="y"),a}},322:function(e,a,t){"use strict";t(323),t(67),t(46),t(217),t(325),t(326),t(329);var n=t(147),r=t(146),l=t(4),o=t(0),i=t.n(o),c=t(212),s=t.n(c),u=t(239),m=t.n(u),p=function(e){return String.fromCharCode(e.charCodeAt(0)-1)},d=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},f=function(e,a){return Object.keys(s.a[a]).includes(e.toString())},g=function(e,a,t){return d(e)in s.a[t][a]},k=function(e,a,t){return!e&&f(a+1,t)||e&&g(e,a,t)},b=function(e){return"en"===e?"Part":"Osa"},v=function(e){return"en"===e?"Previous part":"Edellinen osa"},h=function(e){return"en"===e?"Next part":"Seuraava osa"},E=function(e){return"/"+("en"===e?"en/part":"osa")},y=function(e){var a=e.part,t=e.letter,l=e.lang;return i.a.createElement(n.a,{className:"container spacing spacing--after-large prev-next__container"},!t&&f(a-1,l)?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+E(l)+(a-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,b(l)," ",a-1),i.a.createElement("b",null,v(l)))),k(t,a,l)&&i.a.createElement("div",{className:"col-1--mobile separator"})):t?"a"!==t?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+E(l)+a+"/"+m()(s.a[l][a][p(t)]),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,b(l)," ",""+a+p(t)),i.a.createElement("b",null,v(l)))),k(t,a,l)&&i.a.createElement("div",{className:"col-1--mobile separator"})):f(a-1,l)?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+E(l)+(a-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,b(l)," ",a-1),i.a.createElement("b",null,v(l)))),k(t,a,l)&&i.a.createElement("div",{className:"col-1--mobile separator"})):i.a.createElement(n.a,{className:"push-right-1"}):i.a.createElement(n.a,{className:"push-right-1"}),!t&&f(a+1,l)?i.a.createElement(r.Link,{to:""+E(l)+(a+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,b(l)," ",a+1),i.a.createElement("b",null,h(l)))):t?g(t,a,l)?i.a.createElement(r.Link,{to:""+E(l)+a+"/"+m()(s.a[l][a][d(t)]),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,b(l)," ",""+a+d(t)),i.a.createElement("b",null,h(l)))):f(a+1,l)?i.a.createElement(r.Link,{to:""+E(l)+(a+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,b(l)," ",a+1),i.a.createElement("b",null,h(l)))):i.a.createElement(n.a,{className:"push-left-1"}):i.a.createElement(n.a,{className:"push-left-1"}))};y.defaultProps={part:void 0,letter:void 0},y.propTypes={part:l.PropTypes.number,letter:l.PropTypes.string,lang:l.PropTypes.string.isRequired},a.a=y},323:function(e,a,t){"use strict";t(324);var n=t(10),r=t(294),l=t(14),o=/./.toString,i=function(e){t(16)(RegExp.prototype,"toString",e,!0)};t(22)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?i(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!l&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=o.name&&i(function(){return o.call(this)})},324:function(e,a,t){t(14)&&"g"!=/./g.flags&&t(23).f(RegExp.prototype,"flags",{configurable:!0,get:t(294)})},325:function(e,a,t){"use strict";var n=t(21),r=t(68)(!0);n(n.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),t(48)("includes")},326:function(e,a,t){"use strict";var n=t(21),r=t(327);n(n.P+n.F*t(328)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},327:function(e,a,t){var n=t(72),r=t(24);e.exports=function(e,a,t){if(n(a))throw TypeError("String#"+t+" doesn't accept regex!");return String(r(e))}},328:function(e,a,t){var n=t(3)("match");e.exports=function(e){var a=/./;try{"/./"[e](a)}catch(t){try{return a[n]=!1,!"/./"[e](a)}catch(e){}}return!0}},329:function(e,a,t){},357:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise"}},440:function(e,a,t){var n=t(21),r=t(441)(!1);n(n.S,"Object",{values:function(e){return r(e)}})},441:function(e,a,t){var n=t(29),r=t(32),l=t(73).f;e.exports=function(e){return function(a){for(var t,o=r(a),i=n(o),c=i.length,s=0,u=[];c>s;)l.call(o,t=i[s++])&&u.push(e?[t,o[t]]:o[t]);return u}}},442:function(e,a,t){},591:function(e,a,t){var n=t(330)("isEmpty",t(592),t(356));n.placeholder=t(305),e.exports=n},592:function(e,a,t){var n=t(346),r=t(288),l=t(311),o=t(214),i=t(347),c=t(312),s=t(313),u=t(342),m="[object Map]",p="[object Set]",d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(i(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||u(e)||l(e)))return!e.length;var a=r(e);if(a==m||a==p)return!e.size;if(s(e))return!n(e).length;for(var t in e)if(d.call(e,t))return!1;return!0}}}]);
//# sourceMappingURL=component---src-templates-part-intro-template-js-7526c5e0e6a98a7ac6a6.js.map