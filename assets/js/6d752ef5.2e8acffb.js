"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7712],{7144:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=n(7624),t=n(2172);const o={title:"Cost: Runtime Complexity Analysis",description:"Computes the time complexity of functions and methods. Can be used to detect changes in runtime complexity with `infer reportdiff`."},r=void 0,l={id:"checker-cost",title:"Cost: Runtime Complexity Analysis",description:"Computes the time complexity of functions and methods. Can be used to detect changes in runtime complexity with `infer reportdiff`.",source:"@site/versioned_docs/version-1.1.0/checker-cost.md",sourceDirName:".",slug:"/checker-cost",permalink:"/docs/1.1.0/checker-cost",draft:!1,unlisted:!1,tags:[],version:"1.1.0",frontMatter:{title:"Cost: Runtime Complexity Analysis",description:"Computes the time complexity of functions and methods. Can be used to detect changes in runtime complexity with `infer reportdiff`."},sidebar:"docs",previous:{title:"Config Impact Analysis",permalink:"/docs/1.1.0/checker-config-impact-analysis"},next:{title:"Eradicate",permalink:"/docs/1.1.0/checker-eradicate"}},c={},a=[{value:"How the analysis works",id:"how-the-analysis-works",level:2},{value:"Examples",id:"examples",level:2},{value:"Limitations",id:"limitations",level:2},{value:"List of Issue Types",id:"list-of-issue-types",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Computes the time complexity of functions and methods. Can be used to detect changes in runtime complexity with ",(0,i.jsx)(s.code,{children:"infer reportdiff"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Activate with ",(0,i.jsx)(s.code,{children:"--cost"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Supported languages:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"C/C++/ObjC: Yes"}),"\n",(0,i.jsx)(s.li,{children:"Java: Yes"}),"\n",(0,i.jsx)(s.li,{children:"C#/.Net: Yes"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Cost analysis statically estimates an upper bound on the worst-case execution cost of a program (WCET). This page gives an overview of how the analysis works for ",(0,i.jsx)(s.em,{children:"Java"})," code. The analyser also has limited support for C/C++ and Objective-C."]}),"\n",(0,i.jsxs)(s.p,{children:["To run the analysis, you can use run ",(0,i.jsx)(s.code,{children:"infer --cost"})," (which will run cost analysis along with other\nanalyses that are run by default) or ",(0,i.jsx)(s.code,{children:"infer --cost-only"})," (which will only run cost analysis)."]}),"\n",(0,i.jsxs)(s.p,{children:["For example, the command ",(0,i.jsx)(s.code,{children:"infer --cost-only -- javac File.java"})," will run\ncost analysis on File.java."]}),"\n",(0,i.jsx)(s.h2,{id:"how-the-analysis-works",children:"How the analysis works"}),"\n",(0,i.jsxs)(s.p,{children:["Most ideas behind this analysis are based on Stefan Bydge's PhD thesis ",(0,i.jsx)(s.a,{href:"https://www.semanticscholar.org/paper/Static-WCET-Analysis-Based-on-Abstract-and-Counting-Bygde/ee5157164d497725c1f42dc6c475a59a87c99957",children:"Static WCET Analysis based on Abstract Interpretation and Counting of Elements"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"The analysis computes two things for each node in the CFG:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"the cost of its instructions, i.e. how much one execution of this node costs,"}),"\n",(0,i.jsx)(s.li,{children:"how many times it can be executed."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The total cost of the node is the scalar product of these two vectors. Then, these are passed to a constraint solver that computes the execution cost of the procedure based on the incoming/outgoing edges."}),"\n",(0,i.jsx)(s.p,{children:"At a high level, the analysis has three steps:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'Choose control variables that allude to "how many times a loop may iterate".'}),"\n",(0,i.jsxs)(s.li,{children:["Get abstract ranges of the control variables from ",(0,i.jsx)(s.a,{href:"/docs/1.1.0/checker-bufferoverrun",children:"InferBO"})," (a numerical analysis that infers symbolic intervals)"]}),"\n",(0,i.jsx)(s.li,{children:"Construct complexity polynomials for loops and functions by via a constraint solving algorithm."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:"Infer\u2019s cost analysis statically estimates the execution cost of a\nprogram without running the code. For instance, assume that we had the\nfollowing program:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"void loop(ArrayList<Integer> list){\n  for (int i = 0; i <= list.size(); i++){\n  }\n}\n"})}),"\n",(0,i.jsxs)(s.p,{children:["For this program, Infer statically infers a polynomial (e.g. ",(0,i.jsx)(s.code,{children:"8|list|+16"}),") for the execution cost of this program by giving each instruction in Infer's intermediate language a symbolic cost (where ",(0,i.jsx)(s.code,{children:"|.|"})," refers to the length of a list). Here---overlooking the actual constants---the analysis infers that this program\u2019s asymptotic complexity is ",(0,i.jsx)(s.code,{children:"O(|list|)"}),", that is loop is linear in the size of its input list. Then, at diff time, if a developer modifies this code to,"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"void loop(ArrayList<Integer> list){\n  for (int i = 0; i <= list.size(); i++){\n    foo(i); // newly added function call\n  }\n}\n"})}),"\n",(0,i.jsxs)(s.p,{children:["where ",(0,i.jsx)(s.code,{children:"foo"})," has a linear cost in its parameter, then Infer automatically detects that the complexity of loop has increased from ",(0,i.jsx)(s.code,{children:"O(|list|)"})," to ",(0,i.jsx)(s.code,{children:"O(|list|^2)"})," and then reports an ",(0,i.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#execution_time_complexity_increase",children:(0,i.jsx)(s.code,{children:"EXECUTION_TIME_COMPLEXITY_INCREASE"})})," issue."]}),"\n",(0,i.jsxs)(s.p,{children:["Unlike other Infer analyses (which report found issues/bugs when running infer once), cost analysis only reports an issue for differential analysis (i.e. when comparing the analysis results on the original and the modified files). Instead, infer writes the execution cost of the program into ",(0,i.jsx)(s.code,{children:"infer-out/costs-report.json"})," file. For each procedure, ",(0,i.jsx)(s.code,{children:"costs-report.json"})," includes the actual polynomial (for the execution cost) along with the degree of the polynomial, the procedure name, line number etc."]}),"\n",(0,i.jsx)(s.p,{children:"Differential cost analysis in action:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["first run infer's cost analysis on ",(0,i.jsx)(s.code,{children:"File.java"})," and copy ",(0,i.jsx)(s.code,{children:"inter-out/costs-report.json"})," to ",(0,i.jsx)(s.code,{children:"previous-costs-report.json"})," (Note that the file should be copied outside the result directory because the directory will be removed in the second infer run.)"]}),"\n",(0,i.jsxs)(s.li,{children:["modify ",(0,i.jsx)(s.code,{children:"File.java"})," as shown above"]}),"\n",(0,i.jsxs)(s.li,{children:["re-run infer on ",(0,i.jsx)(s.code,{children:"File.java"})," and copy ",(0,i.jsx)(s.code,{children:"infer-out/costs-report.json"})," to ",(0,i.jsx)(s.code,{children:"current-costs-report.json"})]}),"\n",(0,i.jsxs)(s.li,{children:["run ",(0,i.jsx)(s.code,{children:"infer reportdiff --costs-current current-costs-report.json --costs-previous previous-costs-report.json"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Inspect ",(0,i.jsx)(s.code,{children:"infer-out/differential/introduced.json"})," to see the newly found complexity increase issue(s)."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsx)(s.p,{children:"There are a number of known limitations to the design of the static cost analysis:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"InferBo's intervals are limited to affine expressions, not full-blown polynomials. Hence, we can automatically infer bounds involving square roots."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"We do not handle recursion."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"If the execution cost of a program depends on an unknown call (e.g. an unmodeled library calls), we can't compute a static upper bound and return T (unknown cost)."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"list-of-issue-types",children:"List of Issue Types"}),"\n",(0,i.jsx)(s.p,{children:"The following issue types are reported by this checker:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#autoreleasepool_size_complexity_increase",children:"AUTORELEASEPOOL_SIZE_COMPLEXITY_INCREASE"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#autoreleasepool_size_complexity_increase_ui_thread",children:"AUTORELEASEPOOL_SIZE_COMPLEXITY_INCREASE_UI_THREAD"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#autoreleasepool_size_unreachable_at_exit",children:"AUTORELEASEPOOL_SIZE_UNREACHABLE_AT_EXIT"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#execution_time_complexity_increase",children:"EXECUTION_TIME_COMPLEXITY_INCREASE"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#execution_time_complexity_increase_ui_thread",children:"EXECUTION_TIME_COMPLEXITY_INCREASE_UI_THREAD"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#execution_time_unreachable_at_exit",children:"EXECUTION_TIME_UNREACHABLE_AT_EXIT"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#expensive_autoreleasepool_size",children:"EXPENSIVE_AUTORELEASEPOOL_SIZE"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#expensive_execution_time",children:"EXPENSIVE_EXECUTION_TIME"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#infinite_autoreleasepool_size",children:"INFINITE_AUTORELEASEPOOL_SIZE"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/1.1.0/all-issue-types#infinite_execution_time",children:"INFINITE_EXECUTION_TIME"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2172:(e,s,n)=>{n.d(s,{I:()=>l,M:()=>r});var i=n(1504);const t={},o=i.createContext(t);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);