"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5040],{999:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=i(7624),s=i(2172);const r={title:"Impurity",description:'Detects functions with potential side-effects. Same as "purity", but implemented on top of Pulse.'},o=void 0,c={id:"checker-impurity",title:"Impurity",description:'Detects functions with potential side-effects. Same as "purity", but implemented on top of Pulse.',source:"@site/versioned_docs/version-1.2.0/checker-impurity.md",sourceDirName:".",slug:"/checker-impurity",permalink:"/docs/checker-impurity",draft:!1,unlisted:!1,tags:[],version:"1.2.0",frontMatter:{title:"Impurity",description:'Detects functions with potential side-effects. Same as "purity", but implemented on top of Pulse.'},sidebar:"docs",previous:{title:"Fragment Retains View",permalink:"/docs/checker-fragment-retains-view"},next:{title:"Inefficient keySet Iterator",permalink:"/docs/checker-inefficient-keyset-iterator"}},l={},a=[{value:"List of Issue Types",id:"list-of-issue-types",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:'Detects functions with potential side-effects. Same as "purity", but implemented on top of Pulse.'}),"\n",(0,n.jsxs)(t.p,{children:["Activate with ",(0,n.jsx)(t.code,{children:"--impurity"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Supported languages:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"C/C++/ObjC: Experimental"}),"\n",(0,n.jsx)(t.li,{children:"C#/.Net: No"}),"\n",(0,n.jsx)(t.li,{children:"Erlang: No"}),"\n",(0,n.jsx)(t.li,{children:"Hack: No"}),"\n",(0,n.jsx)(t.li,{children:"Java: Experimental"}),"\n",(0,n.jsx)(t.li,{children:"Python: No"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This is an experimental inter-procedural analysis that detects impure functions. It is meant to be an improvement over the ",(0,n.jsx)(t.a,{href:"/docs/checker-purity",children:"purity"})," analysis with a negation on the issue types. For each function, impurity analysis keeps track of not only the impurity of the function but also some additional information such as which parameters/globals the function modifies. It models functions with no summary/model as impure. The analysis relies on ",(0,n.jsx)(t.a,{href:"/docs/checker-pulse",children:"Pulse"})," summaries to determine impurity."]}),"\n",(0,n.jsx)(t.h2,{id:"list-of-issue-types",children:"List of Issue Types"}),"\n",(0,n.jsx)(t.p,{children:"The following issue types are reported by this checker:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/all-issue-types#impure_function",children:"IMPURE_FUNCTION"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/all-issue-types#modifies_immutable",children:"MODIFIES_IMMUTABLE"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},2172:(e,t,i)=>{i.d(t,{I:()=>c,M:()=>o});var n=i(1504);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);