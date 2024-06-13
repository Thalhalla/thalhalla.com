"use strict";(self.webpackChunkthalhalla_com=self.webpackChunkthalhalla_com||[]).push([[937],{458:function(e,t,n){n.d(t,{h:function(){return c}});const a=n(8958).tZ;var l=n(7294),o=n(5697),r=n.n(o);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}const i=({primary:e,backgroundColor:t,size:n,label:a,...o})=>{const r=e?"storybook-button--primary":"storybook-button--secondary";return l.createElement("button",s({type:"button",className:["storybook-button",`storybook-button--${n}`,r].join(" "),style:t&&{backgroundColor:t}},o),a)};i.propTypes={primary:r().bool,backgroundColor:r().string,size:r().oneOf(["small","medium","large"]),label:r().string.isRequired,onClick:r().func},i.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};const c=({user:e,onLogin:t,onLogout:n,onCreateAccount:o})=>a("header",null,a("div",{className:"storybook-header"},a("div",null,a("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},a("g",{fill:"none",fillRule:"evenodd"},a("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),a("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),a("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),a("h1",null,"Acme")),a("div",null,e?a(l.Fragment,null,a("span",{className:"welcome"},"Welcome, ",a("b",null,e.name),"!"),a(i,{size:"small",onClick:n,label:"Log out"})):a(l.Fragment,null,a(i,{size:"small",onClick:t,label:"Log in"}),a(i,{primary:!0,size:"small",onClick:o,label:"Sign up"})))));c.propTypes={user:r().shape({name:r().string.isRequired}),onLogin:r().func.isRequired,onLogout:r().func.isRequired,onCreateAccount:r().func.isRequired},c.defaultProps={user:null}},4174:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(4160),o="nav-module--nav-link-item--df62f",r="nav-module--nav-link-text--02bd2";var s=({pageTitle:e,children:t})=>a.createElement("nav",null,a.createElement("ul",{className:"nav-module--nav-links--26c0d"},a.createElement("li",{className:o},a.createElement(l.rU,{to:"/",className:r},"Home")),a.createElement("li",{className:o},a.createElement(l.rU,{to:"/privacy",className:r},"Privacy Policy")),a.createElement("li",{className:o},a.createElement(l.rU,{to:"/about",className:r},"About")),a.createElement("li",{className:o},a.createElement(l.rU,{to:"/blog",className:r},"Blog")),a.createElement("li",{className:o},a.createElement(l.rU,{to:"/fonts",className:r},"Fonts")))),i=n(458);var c=({pageTitle:e,children:t})=>{const n=(0,l.K2)("3000541721"),[o,r]=a.useState();return a.createElement("div",null,a.createElement(i.h,{user:o,onLogin:()=>r({name:"Jane Doe"}),onLogout:()=>r(void 0),onCreateAccount:()=>r({name:"Jane Doe"})},n.site.siteMetadata.title),a.createElement("div",{className:"layout-module--container--d35f3"},a.createElement(s,null),a.createElement("main",null,a.createElement("h1",{className:"layout-module--heading--a9e45"},e),t)))}},9357:function(e,t,n){var a=n(7294),l=n(4160);t.Z=({title:e})=>{const t=(0,l.K2)("3000541721");return a.createElement(a.Fragment,null,a.createElement("title",null,e," | ",t.site.siteMetadata.title),a.createElement("meta",{name:"description",content:t.site.siteMetadata.description}))}},9147:function(e,t,n){n.r(t),n.d(t,{Head:function(){return r}});var a=n(7294),l=n(4174),o=n(9357);n(458);const r=()=>a.createElement(o.Z,{title:"Story Page"});t.default=()=>{const[e,t]=a.useState();return a.createElement(l.Z,{pageTitle:"Thalhalla"},a.createElement("div",{className:"storybook-page"},a.createElement("h2",null,"Pages in Storybook"),a.createElement("p",null,"We recommend building UIs with a"," ",a.createElement("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer"},a.createElement("strong",null,"component-driven"))," ","process starting with atomic components and ending with pages."),a.createElement("p",null,"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"),a.createElement("ul",null,a.createElement("li",null,'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'),a.createElement("li",null,"Assemble data in the page component from your services. You can mock these services out using Storybook.")),a.createElement("p",null,"Get a guided tutorial on component-driven development at"," ",a.createElement("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer"},"Storybook tutorials"),". Read more in the"," ",a.createElement("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer"},"docs"),"."),a.createElement("div",{className:"tip-wrapper"},a.createElement("span",{className:"tip"},"Tip")," Adjust the width of the canvas with the"," ",a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"}))),"Viewports addon in the toolbar")))}}}]);
//# sourceMappingURL=component---src-pages-story-js-60847fb9e8d79bb57ccf.js.map