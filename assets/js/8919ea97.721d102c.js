"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8372],{216:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var l=n(7624),r=n(2172);const t={title:"Pulse",description:"Memory and lifetime analysis."},i=void 0,c={id:"checker-pulse",title:"Pulse",description:"Memory and lifetime analysis.",source:"@site/versioned_docs/version-1.1.0/checker-pulse.md",sourceDirName:".",slug:"/checker-pulse",permalink:"/docs/1.1.0/checker-pulse",draft:!1,unlisted:!1,tags:[],version:"1.1.0",frontMatter:{title:"Pulse",description:"Memory and lifetime analysis."},sidebar:"docs",previous:{title:"`printf()` Argument Types",permalink:"/docs/1.1.0/checker-printf-args"},next:{title:"Purity",permalink:"/docs/1.1.0/checker-purity"}},a={},o=[{value:"What is Infer?",id:"what-is-infer",level:3},{value:"Pulse x Nullsafe",id:"pulse-x-nullsafe",level:3},{value:"List of Issue Types",id:"list-of-issue-types",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"Memory and lifetime analysis."}),"\n",(0,l.jsxs)(s.p,{children:["Activate with ",(0,l.jsx)(s.code,{children:"--pulse"}),"."]}),"\n",(0,l.jsx)(s.p,{children:"Supported languages:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"C/C++/ObjC: Yes"}),"\n",(0,l.jsx)(s.li,{children:"Java: Yes"}),"\n",(0,l.jsx)(s.li,{children:"C#/.Net: No"}),"\n"]}),"\n",(0,l.jsxs)(s.h3,{id:"what-is-infer",children:["What is Infer",":Pulse","?"]}),"\n",(0,l.jsxs)(s.p,{children:["Pulse is an interprocedural memory safety analysis. Pulse can detect, for instance, ",(0,l.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#nullptr_dereference",children:"Null dereferences"})," in Java. Errors are only reported when all conditions on the erroneous path are true regardless of input. Pulse should gradually replace the original ",(0,l.jsx)(s.a,{href:"/docs/1.1.0/checker-biabduction",children:"biabduction"})," analysis of Infer. An example of a Null dereference found by Pulse is given below."]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"class Person {\n    Person emergencyContact;\n    String address;\n\n    Person getEmergencyContact() {\n        return this.emergencyContact;\n    }\n}\n\nclass Registry {\n    void create() {\n        Person p = new Person();\n        Person c = p.getEmergencyContact();\n        // Null dereference here\n        System.out.println(c.address);\n    }\n\n    void printContact(Person p) {\n        // No null dereference, as we don't know anything about `p`\n        System.out.println(p.getEmergencyContact().address);\n    }\n}\n"})}),"\n",(0,l.jsx)(s.p,{children:"How to run pulse for Java:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"infer run --pulse -- javac Test.java\n"})}),"\n",(0,l.jsxs)(s.p,{children:["Pulse reports a Null dereference on this file on ",(0,l.jsx)(s.code,{children:"create()"}),", as it tries to access the field ",(0,l.jsx)(s.code,{children:"address"})," of object ",(0,l.jsx)(s.code,{children:"c"}),", and ",(0,l.jsx)(s.code,{children:"c"})," has value ",(0,l.jsx)(s.code,{children:"null"}),". In contrast, Pulse gives no report for ",(0,l.jsx)(s.code,{children:"printContact(Person p)"}),", as we cannot be sure that ",(0,l.jsx)(s.code,{children:"p.getEmergencyContact()"})," will return ",(0,l.jsx)(s.code,{children:"null"}),". Pulse then labels this error as latent and only reports if there is a call to ",(0,l.jsx)(s.code,{children:"printContact(Person p)"})," satisfying the condition for Null dereference."]}),"\n",(0,l.jsx)(s.h3,{id:"pulse-x-nullsafe",children:"Pulse x Nullsafe"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"/docs/1.1.0/checker-eradicate",children:"Nullsafe"})," is a type checker for ",(0,l.jsx)(s.code,{children:"@Nullable"})," annotations for Java. Classes following the Nullsafe discipline are annotated with ",(0,l.jsx)(s.code,{children:"@Nullsafe"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Consider the classes ",(0,l.jsx)(s.code,{children:"Person"})," and ",(0,l.jsx)(s.code,{children:"Registry"})," from the previous example. Assuming that class ",(0,l.jsx)(s.code,{children:"Person"})," is annotated with ",(0,l.jsx)(s.code,{children:"@Nullsafe"}),". In this case, we also annotate ",(0,l.jsx)(s.code,{children:"getEmergencyContact()"})," with ",(0,l.jsx)(s.code,{children:"@Nullable"}),", to make explicit that this method can return the ",(0,l.jsx)(s.code,{children:"null"})," value. There is still the risk that classes depending on ",(0,l.jsx)(s.code,{children:"Person"})," have Null dereferences. In this case, Pulse would report a Null dereference on ",(0,l.jsx)(s.code,{children:"Registry"}),". It could also be the case that class ",(0,l.jsx)(s.code,{children:"Registry"})," is annotated with ",(0,l.jsx)(s.code,{children:"@Nullsafe"}),". By default Pulse reports on ",(0,l.jsx)(s.code,{children:"@Nullsafe"})," files too, see the ",(0,l.jsx)(s.code,{children:"--pulse-nullsafe-report-npe"})," option (Facebook-specific: Pulse does not report on ",(0,l.jsx)(s.code,{children:"@Nullsafe"})," files)."]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"@Nullsafe(Nullsafe.Mode.LOCAL)\nclass Person {\n    Person emergencyContact;\n    String address;\n\n    @Nullable Person getEmergencyContact() {\n        return this.emergencyContact;\n    }\n}\n\nclass Registry {\n    ... // Pulse reports here\n}\n"})}),"\n",(0,l.jsx)(s.h2,{id:"list-of-issue-types",children:"List of Issue Types"}),"\n",(0,l.jsx)(s.p,{children:"The following issue types are reported by this checker:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#constant_address_dereference",children:"CONSTANT_ADDRESS_DEREFERENCE"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#memory_leak",children:"MEMORY_LEAK"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#nil_messaging_to_non_pod",children:"NIL_MESSAGING_TO_NON_POD"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#nullptr_dereference",children:"NULLPTR_DEREFERENCE"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#optional_empty_access",children:"OPTIONAL_EMPTY_ACCESS"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#pulse_uninitialized_value",children:"PULSE_UNINITIALIZED_VALUE"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#stack_variable_address_escape",children:"STACK_VARIABLE_ADDRESS_ESCAPE"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#use_after_delete",children:"USE_AFTER_DELETE"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#use_after_free",children:"USE_AFTER_FREE"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#use_after_lifetime",children:"USE_AFTER_LIFETIME"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#vector_invalidation",children:"VECTOR_INVALIDATION"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},2172:(e,s,n)=>{n.d(s,{I:()=>c,M:()=>i});var l=n(1504);const r={},t=l.createContext(r);function i(e){const s=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);