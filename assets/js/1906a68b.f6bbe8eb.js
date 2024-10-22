"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9692],{3990:(e,n,o)=>{o.r(n),o.d(n,{Math:()=>l,assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=o(4848),t=o(8453);const s={id:"separation-logic-and-bi-abduction",title:"Separation logic and bi-abduction"},i=void 0,r={id:"separation-logic-and-bi-abduction",title:"Separation logic and bi-abduction",description:"- Separation logic",source:"@site/docs/02-separation-logic-and-biabduction.md",sourceDirName:".",slug:"/separation-logic-and-bi-abduction",permalink:"/docs/next/separation-logic-and-bi-abduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"separation-logic-and-bi-abduction",title:"Separation logic and bi-abduction"},sidebar:"docs",previous:{title:"About Infer",permalink:"/docs/next/about-Infer"},next:{title:"Building checkers with the Infer.AI framework",permalink:"/docs/next/absint-framework"}},c={},l=({code:e})=>(0,a.jsx)("img",{src:`https://math.now.sh?from=${encodeURIComponent(e)}&color=mediumslateblue`,style:{height:"100%",verticalAlign:"middle"}}),d=[{value:"Separation logic",id:"separation-logic",level:2},{value:"Bi-abduction",id:"bi-abduction",level:2},{value:"Technical papers",id:"technical-papers",level:2}];function h(e){const n={a:"a",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"separation-logic-and-bi-abduction#separation-logic",children:"Separation logic"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"separation-logic-and-bi-abduction#bi-abduction",children:"Bi-abduction"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"separation-logic-and-bi-abduction#technical-papers",children:"Technical papers"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"separation-logic",children:"Separation logic"}),"\n",(0,a.jsx)(n.p,{children:"Separation logic is a novel kind of mathematical logic which facilitates\nreasoning about mutations to computer memory. It enables scalability by breaking\nreasoning into chunks corresponding to local operations on memory, and then\ncomposing the reasoning chunks together."}),"\n",(0,a.jsxs)(n.p,{children:["Separation logic is based on a logical connective ",(0,a.jsx)(l,{code:"\\\\( * \\\\)"}),"\ncalled the ",(0,a.jsx)(n.em,{children:"separating conjunction"}),' and pronounced "and separately". Separation\nlogic formulae are interpreted over program allocated heaps. The logical formula\n',(0,a.jsx)(l,{code:"\\\\( A*B \\\\)"})," holds of a piece of program heap (a heaplet) when it\ncan be divided into two sub-heaplets described by ",(0,a.jsx)(l,{code:"\\\\(A\\\\)"})," and\n",(0,a.jsx)(l,{code:"\\\\(B\\\\)"}),". For example, the formula"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\(x \\mapsto y * y \\mapsto x \\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:['can be read "',(0,a.jsx)(l,{code:"\\\\(x\\\\)"})," points to ",(0,a.jsx)(l,{code:"\\\\(y\\\\)"})," and\nseparately ",(0,a.jsx)(l,{code:"\\\\(y\\\\)"})," points to ",(0,a.jsx)(l,{code:"\\\\(x\\\\)"}),'". This\nformula describes precisely two allocated memory cells. The first cell is\nallocated at the address denoted by the pointer ',(0,a.jsx)(l,{code:"\\\\(x\\\\)"})," and the\ncontent of this cell is the value of ",(0,a.jsx)(l,{code:"\\\\(y\\\\)"}),". The second cell is\nallocated at the address denoted by the pointer ",(0,a.jsx)(l,{code:"\\\\(y\\\\)"})," and the\ncontent of this second cell is the value of ",(0,a.jsx)(l,{code:"\\\\(x\\\\)"}),". Crucially,\nwe know that there are precisely two cells because ",(0,a.jsx)(l,{code:"\\\\( * \\\\)"}),"\nstipulates that they are separated and therefore the cells are allocated in two\ndifferent parts of memory. In other words, ",(0,a.jsx)(l,{code:"\\\\( * \\\\)"})," says that\n",(0,a.jsx)(l,{code:"\\\\(x\\\\)"})," and ",(0,a.jsx)(l,{code:"\\\\(y\\\\)"})," do not hold the same value\n(i.e., these pointers are not aliased). The heaplet partitioning defined by the\nformula above can be visualized like so:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:o(8615).A+"",width:"473",height:"129"})}),"\n",(0,a.jsxs)(n.p,{children:["The important thing about the separating conjunction is the way that it fits\ntogether with mutation to computer memory; reasoning about program commands\ntends to work by updating ",(0,a.jsx)(l,{code:"\\\\(*\\\\)"}),"-conjuncts in-place, mimicking\nthe operational in-place update of RAM."]}),"\n",(0,a.jsxs)(n.p,{children:["Separation logic uses Hoare triples of the form\n",(0,a.jsx)(l,{code:"\\\\( \\lbrace pre \\rbrace prog \\lbrace post \\rbrace \\\\)"})," where\n",(0,a.jsx)(l,{code:"\\\\(pre\\\\)"})," is the precondition, ",(0,a.jsx)(l,{code:"\\\\(prog\\\\)"})," a\nprogram part, and ",(0,a.jsx)(l,{code:"\\\\(post\\\\)"})," the postcondition. Triples are\nabstract specifications of the behavior of the program. For example, we could\ntake"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\( \\lbrace r \\mapsto open\\rbrace \\, closeResource(r)\\, \\lbrace r \\mapsto closed\\rbrace  \\;\\;\\; (spec)\\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:"as a specification for a method which closes a resource given to it as a\nparameter."}),"\n",(0,a.jsxs)(n.p,{children:["Now, suppose we have two resources ",(0,a.jsx)(l,{code:"\\\\( r\\_1 \\\\)"})," and\n",(0,a.jsx)(l,{code:"\\\\( r\\_2 \\\\)"}),", described by\n",(0,a.jsx)(l,{code:"\\\\(r\\_1 \\mapsto open * r\\_2 \\mapsto open\\\\)"})," and we close the\nfirst of them. We think operationally in terms of updating the memory in place,\nleaving ",(0,a.jsx)(l,{code:"\\\\(r\\_2 \\mapsto open\\\\)"})," alone, as described by this triple:"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\( \\lbrace r\\_1 \\mapsto open * r\\_2 \\mapsto open\\rbrace  closeResource(r\\_1) \\lbrace r\\_1 \\mapsto closed * r\\_2 \\mapsto open \\rbrace \\;\\;\\; (use)\\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["What we have here is the that specification (spec) described how\n",(0,a.jsx)(l,{code:"\\\\(closeResource()\\\\)"})," works by mentioning only one piece of\nstate, what is sometimes called a small specification, and in (use) we use that\nspecification to update a larger precondition in place."]}),"\n",(0,a.jsx)(n.p,{children:"This is an instance of a general pattern. There is a rule that lets you go from\nsmaller to bigger specifications"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\( \\frac{\\lbrace pre \\rbrace prog \\lbrace post \\rbrace}{\\lbrace pre * frame \\rbrace prog \\lbrace post * frame \\rbrace}\\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:"Our passage from (spec) to (use) is obtained by taking"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(l,{code:"\\\\(pre\\\\)"})," to be ",(0,a.jsx)(l,{code:"\\\\(r\\_1 \\mapsto open\\\\)"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(l,{code:"\\\\(post\\\\)"})," to be ",(0,a.jsx)(l,{code:"\\\\(r\\_1 \\mapsto closed \\\\)"}),",\nand"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(l,{code:"\\\\(frame\\\\)"})," to be ",(0,a.jsx)(l,{code:"\\\\(r\\_2 \\mapsto open \\\\)"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This rule is called the ",(0,a.jsx)(n.em,{children:"frame rule"})," of separation logic. It is named after the\nframe problem, a classic problem in artificial intelligence. Generally, the\n",(0,a.jsx)(l,{code:"\\\\(frame\\\\)"})," describes state that remains unchanged; the\nterminology comes from the analogy of a background scene in an animation as\nunchanging while the objects and characters within the scene change."]}),"\n",(0,a.jsx)(n.p,{children:"The frame rule is the key to the principle of local reasoning in separation\nlogic: reasoning and specifications should concentrate on the resources that a\nprogram accesses (the footprint), without mentioning what doesn't change."}),"\n",(0,a.jsx)(n.h2,{id:"bi-abduction",children:"Bi-abduction"}),"\n",(0,a.jsx)(n.p,{children:"Bi-abduction is a form of logical inference for separation logic which automates\nthe key ideas about local reasoning."}),"\n",(0,a.jsx)(n.p,{children:"Usually, logic works with validity or entailment statements like"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\(A \\vdash B\\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["which says that ",(0,a.jsx)(l,{code:"\\\\(A\\\\)"})," implies ",(0,a.jsx)(l,{code:"\\\\(B\\\\)"}),". Infer\nuses an extension of this inference question in an internal theorem prover while\nit runs over program statements. Infer's question"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\(A * ?antiframe \\vdash B * ?frame\\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["is called ",(0,a.jsx)(n.em,{children:"bi-abduction"}),". The problem here is for the theorem prover to ",(0,a.jsx)("i",{children:"\ndiscover "})," a pair of frame and antiframe formulae that make the entailment\nstatement valid."]}),"\n",(0,a.jsx)(n.p,{children:"Global analyses of large programs are normally computationally intractable.\nHowever, bi-abduction breaks apart a large analysis of a large program into\nsmall independent analyses of its procedures. This gives Infer the ability to\nscale independently of the size of the analyzed code. Moreover, by breaking the\nanalysis into small independent parts, when the full program is analyzed again\nbecause of a code change the analysis results of the unchanged part of the code\ncan be reused, and only the code change needs to be re-analyzed. This process\nis called incremental analysis and it is very powerful when integrating a\nstatic analysis tool like Infer in a development environment."}),"\n",(0,a.jsxs)(n.p,{children:["In order to be able to decompose a global analysis into small independent\nanalyses, let's first consider how a function call is analyzed in separation\nlogic. Assume we have the following spec for a function\n",(0,a.jsx)(l,{code:"\\\\( f() \\\\)"}),":"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\( \\lbrace pre\\_f \\rbrace \\;\\; f() \\;\\; \\lbrace post\\_f \\rbrace \\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["and by analyzing the caller function, we compute that before the call of ",(0,a.jsx)(l,{code:"\\\\( f \\\\)"}),", the formula ",(0,a.jsx)(l,{code:"\\\\( CallingState \\\\)"}),"\nholds. Then to utilize the specification of ",(0,a.jsx)(l,{code:"\\\\( f \\\\)"})," the\nfollowing implication must hold:"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\( CallingState \\vdash pre\\_f  \\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\; (Function Call)\\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:"Given that, bi-abduction is used at procedure call sites for two reasons: to\ndiscover missing state that is needed for the above implication to hold and\nallow the analysis to proceed (the antiframe) as well as state that the\nprocedure leaves unchanged (the frame)."}),"\n",(0,a.jsx)(n.p,{children:"To see how this works suppose we have some bare code"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\(closeResource(r1); \\, closeResource(r2)\\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["but no overall specification; we are going to describe how to discover a\npre/post spec for it. Considering the first statement and the (spec) above, the\nhuman might say: if only we had ",(0,a.jsx)(l,{code:"\\\\(r1 \\mapsto open\\\\)"})," in the\nprecondition then we could proceed. Technically, we ask a bi-abduction question:"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\(emp * ?antiframe \\vdash r1 \\mapsto open * ?frame\\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["and we can fill this in easily by picking\n",(0,a.jsx)(l,{code:"\\\\(antiframe = r1 \\mapsto open\\\\)"})," and\n",(0,a.jsx)(l,{code:"\\\\(frame = emp\\\\)"}),", where ",(0,a.jsx)(l,{code:"emp"}),"\nmeans the empty state. The ",(0,a.jsx)(l,{code:"emp"})," is recording that at the start\nwe presume nothing. So we obtain the trivially true implication:"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\(emp * r1 \\mapsto open \\vdash r1 \\mapsto open * emp\\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:"which, by applying logical rules, can be re-written equivalently to:"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\(r1 \\mapsto open \\vdash r1 \\mapsto open\\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["Notice that this satisfies the (Function Call) requirement to correctly make\nthe call. So let's add that information in the ",(0,a.jsx)(l,{code:"pre"}),", and while\nwe are at it, record the information in the ",(0,a.jsx)(l,{code:"post"})," of the first\nstatement that comes from ",(0,a.jsx)(l,{code:"\\\\(spec\\\\)"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\( \\lbrace r1 \\mapsto open  \\rbrace \\\\)"}),"\n",(0,a.jsx)(l,{code:"\\\\( closeResource(r1) \\\\)"}),"\n",(0,a.jsx)(l,{code:"\\\\( \\lbrace r1 \\mapsto closed \\rbrace \\\\)"}),"\n",(0,a.jsx)(l,{code:"\\\\( closeResource(r2) \\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["Now, let's move to the second statement. Its precondition\n",(0,a.jsx)(l,{code:"\\\\(r1 \\mapsto closed\\\\)"})," in the partial symbolic execution trace\njust given does not have the information needed by\n",(0,a.jsx)(l,{code:"\\\\(closeResource(r2)\\\\)"}),", so we can fill that in and continue by\nputting ",(0,a.jsx)(l,{code:"\\\\(r2 \\mapsto open\\\\)"})," in the ",(0,a.jsx)(l,{code:"pre"}),". While\nwe are at it, we can thread this assertion back to the beginning."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\( \\lbrace r1 \\mapsto open * r2 \\mapsto open  \\rbrace \\\\)"}),"\n",(0,a.jsx)(l,{code:"\\\\( closeResource(r1) \\\\)"}),"\n",(0,a.jsx)(l,{code:"\\\\( \\lbrace r1 \\mapsto closed * r2 \\mapsto open\\rbrace \\\\)"}),"\n",(0,a.jsx)(l,{code:"\\\\( closeResource(r2) \\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:"This information on what to thread backwards can be obtained as the antiframe\npart of the bi-abduction question:"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\(r1 \\mapsto closed * ?antiframe \\vdash r2 \\mapsto open * ?frame\\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["where the solution picks\n",(0,a.jsx)(l,{code:"\\\\(antiframe = r2 \\mapsto open\\\\) and \\\\(frame = r1 \\mapsto closed\\\\)"}),".\nNote that the antiframe is precisely the information missing from the\nprecondition in order for ",(0,a.jsx)(l,{code:"\\\\(closeResource(r2)\\\\)"})," to proceed. On\nthe other hand, the frame ",(0,a.jsx)(l,{code:"\\\\(r1 \\mapsto closed\\\\)"})," is the portion\nof state not changed by ",(0,a.jsx)(l,{code:"\\\\(closeResource(r2)\\\\)"}),"; we can thread\nthat through to the overall postconditon (as justified by the frame rule),\ngiving us:"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(l,{code:"\\\\( \\lbrace r1 \\mapsto open * r2 \\mapsto open  \\rbrace \\\\)"}),"\n",(0,a.jsx)(l,{code:"\\\\( closeResource(r1) \\\\)"}),"\n",(0,a.jsx)(l,{code:"\\\\( \\lbrace r1 \\mapsto closed * r2 \\mapsto open\\rbrace \\\\)"}),"\n",(0,a.jsx)(l,{code:"\\\\( closeResource(r2) \\\\)"}),"\n",(0,a.jsx)(l,{code:"\\\\( \\lbrace r1 \\mapsto closed * r2 \\mapsto closed \\rbrace\\\\)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["Thus, we have obtained a ",(0,a.jsx)(l,{code:"pre"})," and ",(0,a.jsx)(l,{code:"post"})," for this\ncode by symbolically executing it, using bi-abduction to discover preconditions\n(abduction of antiframes) as well as untouched portions of memory (frames) as\nwe go along."]}),"\n",(0,a.jsx)(n.p,{children:"In general, bi-abduction provides a way to infer a pre/post specs from bare\ncode, as long as we know specs for the primitives at the base level of the code.\nThe human does not need to write preconditions and postconditions for all the\nprocedures, which is the key to having a high level of automation. This is the\nbasis for how Infer works, why it can scale, and how it can analyze code changes\nincrementally."}),"\n",(0,a.jsx)(n.p,{children:"Context: The logical terminology we have been using here comes from AI and\nphilosophy of science. Abductive inference was introduced by the philosopher\nCharles Peirce, and described as the mechanism underpinning hypothesis formation\n(or, guessing what might be true about the world), the most creative part of the\nscientific process. Abduction and the frame problem have both attracted\nsignificant attention in AI. Infer uses an automated form of abduction to\ngenerate preconditions describing the memory that a program touches (the\nantiframe part above), and frame inference to discover what isn't touched. Infer\nthen uses deductive reasoning to calculate a formula describing the effect of a\nprogram, starting from the preconditions. In a sense, Infer approaches automated\nreasoning about programs by mimicking what a human might do when trying to\nunderstand a program: it abduces what the program needs, and deduces conclusions\nof that. It is when the reasoning goes wrong that Infer reports a potential bug."}),"\n",(0,a.jsx)(n.p,{children:"This description is by necessity simplified compared to what Infer actually\ndoes. More technical information can be found in the following papers. The\ndescriptions in the papers are precise, but still simplified; there are many\nengineering decisions not recorded there. Finally, beyond the papers, you can\nread the source code if you wish!"}),"\n",(0,a.jsx)(n.h2,{id:"technical-papers",children:"Technical papers"}),"\n",(0,a.jsx)(n.p,{children:"The following papers contain some of the technical background on Infer and\ninformation on how it is used inside Facebook."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)("a",{href:"http://link.springer.com/chapter/10.1007%2F3-540-44802-0_1",children:"Local\nReasoning about Programs that Alter Data Structures."})," An early separation\nlogic paper which advanced ideas about local reasoning and the frame rule."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)("a",{href:"http://link.springer.com/chapter/10.1007/11804192_6",children:"Smallfoot:\nModular Automatic Assertion Checking with Separation Logic."})," First\nseparation logic verification tool, introduced frame inference"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)("a",{href:"http://link.springer.com/chapter/10.1007%2F11691372_19",children:"A Local Shape\nAnalysis Based on Separation Logic."})," Separation logic meets abstract\ninterpretation; calculating loop invariants via a fixed-point computation."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)("a",{href:"http://dl.acm.org/citation.cfm?id=2049700",children:"Compositional Shape\nAnalysis by Means of Bi-Abduction."})," The bi-abduction paper."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)("a",{href:"https://research.facebook.com/publications/moving-fast-with-software-verification/",children:"Moving\nFast with Software Verification."})," A paper about the way we use Infer at\nFacebook."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8615:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/images/SepSplit-dca4e1fe63cb590718402c7c0c9ab7f8.jpg"},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var a=o(6540);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);