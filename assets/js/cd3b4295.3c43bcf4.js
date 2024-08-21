"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9668],{1160:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(7624),o=s(2172);const i={title:'Litho "Required Props"',description:"Checks that all non-optional `@Prop`s have been specified when constructing Litho components."},r=void 0,c={id:"checker-litho-required-props",title:'Litho "Required Props"',description:"Checks that all non-optional `@Prop`s have been specified when constructing Litho components.",source:"@site/versioned_docs/version-1.2.0/checker-litho-required-props.md",sourceDirName:".",slug:"/checker-litho-required-props",permalink:"/docs/checker-litho-required-props",draft:!1,unlisted:!1,tags:[],version:"1.2.0",frontMatter:{title:'Litho "Required Props"',description:"Checks that all non-optional `@Prop`s have been specified when constructing Litho components."},sidebar:"docs",previous:{title:"Lineage",permalink:"/docs/checker-lineage"},next:{title:"Liveness",permalink:"/docs/checker-liveness"}},p={},l=[{value:"What are required Props?",id:"what-are-required-props",level:2},{value:"List of Issue Types",id:"list-of-issue-types",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Checks that all non-optional ",(0,t.jsx)(n.code,{children:"@Prop"}),"s have been specified when constructing Litho components."]}),"\n",(0,t.jsxs)(n.p,{children:["Activate with ",(0,t.jsx)(n.code,{children:"--litho-required-props"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Supported languages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"C/C++/ObjC: No"}),"\n",(0,t.jsx)(n.li,{children:"C#/.Net: No"}),"\n",(0,t.jsx)(n.li,{children:"Erlang: No"}),"\n",(0,t.jsx)(n.li,{children:"Hack: No"}),"\n",(0,t.jsx)(n.li,{children:"Java: Yes"}),"\n",(0,t.jsx)(n.li,{children:"Python: No"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This analysis checks that all non-optional ",(0,t.jsx)(n.a,{href:"https://fblitho.com/docs/props",children:(0,t.jsx)(n.code,{children:"@Prop"})}),"`s have been specified when constructing Litho components. This is a ",(0,t.jsx)(n.a,{href:"https://fblitho.com/",children:"Litho"})," specific checker."]}),"\n",(0,t.jsx)(n.h2,{id:"what-are-required-props",children:"What are required Props?"}),"\n",(0,t.jsxs)(n.p,{children:["In a nutshell, a Litho Component is essentially a class that defines immutable inputs, called prop (annotated with ",(0,t.jsx)(n.code,{children:"@Prop"}),") in component hierarchy methods. For each Component there is a corresponding spec class which defines the required props:. E.g:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"class MyComponentSpec {\n\n  static void onCreate(\n      ComponentContext c,\n      @Prop(optional = true) String prop1, @Prop int prop2) {\n    ...\n  }\n  ...\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MyComponentSpec"})," defines two props: a String prop called ",(0,t.jsx)(n.code,{children:"prop1"})," and an int prop named ",(0,t.jsx)(n.code,{children:"prop2"}),". For each prop defined on the spec, the annotation processor creates a builder pattern method that has the same name as the prop."]}),"\n",(0,t.jsx)(n.p,{children:"Developers pass down values for these props by calling the appropriate methods:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'MyComponent.create(c)\n    .prop1("My prop 1")\n    .prop2(256)\n    .build();\n'})}),"\n",(0,t.jsx)(n.p,{children:"If the required props are not called, then annotation processor throws an exception in run time. This is really bad and that's where this checker comes into play to detect such cases statically."}),"\n",(0,t.jsxs)(n.p,{children:["Note that, the functions ",(0,t.jsx)(n.code,{children:"create()"})," and ",(0,t.jsx)(n.code,{children:"build()"})," could be defined in different methods and there could be various function calls, aliasing, and control flow patterns in between. Hence, this checker is inter-procedural."]}),"\n",(0,t.jsxs)(n.p,{children:["Check out the examples defined in the issue type ",(0,t.jsx)(n.a,{href:"/docs/all-issue-types#missing_required_prop",children:"MISSING_REQUIRED_PROP"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"list-of-issue-types",children:"List of Issue Types"}),"\n",(0,t.jsx)(n.p,{children:"The following issue types are reported by this checker:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/all-issue-types#missing_required_prop",children:"MISSING_REQUIRED_PROP"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>r});var t=s(1504);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);