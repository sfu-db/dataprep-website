(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0wey":function(e,a,t){e.exports={terminalContainer:"snippetComponent-module--terminalContainer--2QseB",terminalCommand:"snippetComponent-module--terminalCommand--3yXgG",terminalTitleBar:"snippetComponent-module--terminalTitleBar--1D6Ci",terminalBtns:"snippetComponent-module--terminalBtns--3CI6P",terminalBtn:"snippetComponent-module--terminalBtn--1_BdN",terminalBtnRed:"snippetComponent-module--terminalBtnRed--1HSb5",terminalBtnGreen:"snippetComponent-module--terminalBtnGreen--g16Ho",terminalBtnYellow:"snippetComponent-module--terminalBtnYellow--2wbGx",terminalTitleContent:"snippetComponent-module--terminalTitleContent--1G10O",terminalLineCount:"snippetComponent-module--terminalLineCount--2gHkn",terminalTitlePlacehodler:"snippetComponent-module--terminalTitlePlacehodler--2Q1e6",declareSyntax:"snippetComponent-module--declareSyntax--CR6GM",packageSyntax:"snippetComponent-module--packageSyntax--M_ZN7",paramSyntax:"snippetComponent-module--paramSyntax--1sNgX"}},"1eKh":function(e,a,t){e.exports={compContainer:"CompComponent-module--compContainer--3sx_3",blockContainer:"CompComponent-module--blockContainer--2xcXu",blocks:"CompComponent-module--blocks--f0kx5",solidBlock:"CompComponent-module--solidBlock--3TyfX",dashedBlock:"CompComponent-module--dashedBlock--1JXSf"}},"4avf":function(e,a,t){e.exports=t.p+"static/integration-d7c0266d321cc10c46e07bc35d68cc61.png"},AMPr:function(e,a,t){e.exports=t.p+"static/logoSnippet-2c8bf9385559d7bd40e6330aca47eda3.svg"},DmWS:function(e,a,t){e.exports=t.p+"static/github-7340e419d60f308538a818c4bf5fbd0f.svg"},QeBL:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("BNza"),c=(t("mlLF"),function(e){var a=e.children;return l.a.createElement("div",{className:"top-section-bg"},a,l.a.createElement("div",{className:"divider-top"},l.a.createElement("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},l.a.createElement("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",className:"shape-fill"}))))}),i=t("wN7t"),o=t.n(i),m=function(e){var a=e.isLoading,t=e.data;return a?l.a.createElement("p",null,"Fetching data..."):t&&0!==t.length?l.a.createElement("ul",null,t.slice(0,10).map((function(e){return l.a.createElement("li",{key:e.id},e.published_at.split("T")[0],": DataPrep"," ",l.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noreferrer"},e.tag_name)," ","is released.")}))):l.a.createElement("p",null,"No data found")},s=function(){return l.a.createElement("div",null,l.a.createElement("h4",null,"There are many ways to contribute to DataPrep:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/sfu-db/dataprep/issues",target:"_blank",rel:"noreferrer"},"Submit bugs")," ","and help us verify fixes as they are checked in."),l.a.createElement("li",null,"Review the"," ",l.a.createElement("a",{href:"https://github.com/sfu-db/dataprep/commits/develop",target:"_blank",rel:"noreferrer"},"souorce code and changes"),"."),l.a.createElement("li",null,"Engage with other DataPrep users and develops on StackOverflow."),l.a.createElement("li",null,"Help each other in the"," ",l.a.createElement("a",{href:"https://discord.gg/xwbkFNk",target:"_blank",rel:"noreferrer"},"DataPrep Community Discord")," ","and"," ",l.a.createElement("a",{href:"https://groups.google.com/forum/#!forum/dataprep",target:"_blank",rel:"noreferrer"},"Mail list & Forum"),"."),l.a.createElement("li",null,"Provide use cases and writing down your user experience."),l.a.createElement("li",null,"Please take a look at our"," ",l.a.createElement("a",{href:"https://github.com/sfu-db/dataprep/wiki",target:"_blank",rel:"noreferrer"},"wiki")," ","for development documentations!")))},p=function(){return l.a.createElement("div",null,l.a.createElement("h4",null,"Learning DataPrep is easy whether you are a data scientist or a beginner in Python:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Install the latest release."),l.a.createElement("li",null,"Read the user guide."),l.a.createElement("li",null,"Watch the tutorials."),l.a.createElement("li",null,"Checkout the examples.")))},u=function(){var e=Object(n.useState)({loading:!1,data:null}),a=e[0],t=e[1];return Object(n.useEffect)((function(){t({loading:!0,data:null}),fetch("https://api.github.com/repos/sfu-db/dataprep/releases").then((function(e){return e.json()})).then((function(e){return t({loading:!1,data:e})})).catch((function(e){return console.error(e)}))}),[t]),l.a.createElement("section",{className:o.a.footerContainer},l.a.createElement("div",{className:o.a.compDiv},l.a.createElement("h3",null,"News"),l.a.createElement(m,{isLoading:a.loading,data:a.data})),l.a.createElement("div",{className:o.a.compDiv},l.a.createElement("h3",null,"Contribution"),l.a.createElement(s,null)),l.a.createElement("div",{className:o.a.compDiv},l.a.createElement("h3",null,"Getting Started"),l.a.createElement(p,null)))},d=t("nw9M"),E=t("RLkb"),f=t.n(E),h=t("4avf"),g=t.n(h),v=t("AMPr"),N=t.n(v),y=t("y42M"),C=t.n(y),S=t("DmWS"),b=t.n(S),x=t("0wey"),P=t.n(x),k=function(){return l.a.createElement("div",null,l.a.createElement("img",{src:C.a,alt:"Why DataPrep Chart",id:"chart-snippet"}))},w=function(){return l.a.createElement("div",null,l.a.createElement("img",{src:g.a,alt:"Integration",id:"integration-snippet"}))},D=function(){return l.a.createElement("div",{className:"snippet-img"},l.a.createElement("img",{src:N.a,alt:"Logo Snippet",id:"logo-snippet"}))},B=function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column nowrap",height:"245px"}},l.a.createElement("div",{className:"snippet-img"},l.a.createElement("img",{src:b.a,alt:"GitHub Icon",id:"opensource-snippet"})),l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=sfu-db&repo=dataprep&type=star&count=true&size=large",frameBorder:"0",scrolling:"0",width:"135",height:"50",title:"GitHub"}))},T=function(){return l.a.createElement("div",{className:P.a.terminalContainer},l.a.createElement("div",{className:P.a.terminalTitleBar},l.a.createElement("div",{className:P.a.terminalBtns},l.a.createElement("span",{className:P.a.terminalBtn+" "+P.a.terminalBtnRed}),l.a.createElement("span",{className:P.a.terminalBtn+" "+P.a.terminalBtnGreen}),l.a.createElement("span",{className:P.a.terminalBtn+" "+P.a.terminalBtnYellow})),l.a.createElement("div",{className:P.a.terminalTitleContent},"dataprep_eda.py"),l.a.createElement("div",{className:P.a.terminalTitlePlacehodler})),l.a.createElement("div",{className:P.a.terminalLineCount},"123456789"),l.a.createElement("div",{className:P.a.terminalCommand},l.a.createElement("p",null,l.a.createElement("span",{className:P.a.declareSyntax},"from")," ",l.a.createElement("span",{className:P.a.packageSyntax},"dataprep.connector")," ",l.a.createElement("span",{className:P.a.declareSyntax},"import")," connector"),l.a.createElement("p",null,l.a.createElement("span",{className:P.a.declareSyntax},"from")," ",l.a.createElement("span",{className:P.a.packageSyntax},"dataprep.eda")," ",l.a.createElement("span",{className:P.a.declareSyntax},"import")," plot"),l.a.createElement("p",{style:{opacity:"0"}},"_"),l.a.createElement("p",null,"dc = connector(",l.a.createElement("span",{className:P.a.paramSyntax},'"dblp"'),")"),l.a.createElement("p",null,"df = dc.query(",l.a.createElement("span",{className:P.a.paramSyntax},'"publication"'),", q=",l.a.createElement("span",{className:P.a.paramSyntax},'"CVPR 2020"'),", _count=",l.a.createElement("span",{className:P.a.declareSyntax},"2000"),")"),l.a.createElement("p",null,"plot(df, ",l.a.createElement("span",{className:P.a.paramSyntax},'"title"'),")")))},_=function(){return l.a.createElement("div",{className:P.a.terminalContainer},l.a.createElement("div",{className:P.a.terminalTitleBar},l.a.createElement("div",{className:P.a.terminalBtns},l.a.createElement("span",{className:P.a.terminalBtn+" "+P.a.terminalBtnRed}),l.a.createElement("span",{className:P.a.terminalBtn+" "+P.a.terminalBtnGreen}),l.a.createElement("span",{className:P.a.terminalBtn+" "+P.a.terminalBtnYellow})),l.a.createElement("div",{className:P.a.terminalTitleContent},"dataprep_connector.py"),l.a.createElement("div",{className:P.a.terminalTitlePlacehodler})),l.a.createElement("div",{className:P.a.terminalLineCount},"123456789"),l.a.createElement("div",{className:P.a.terminalCommand},l.a.createElement("p",null,l.a.createElement("span",{className:P.a.declareSyntax},"from")," ",l.a.createElement("span",{className:P.a.packageSyntax},"dataprep.connector")," ",l.a.createElement("span",{className:P.a.declareSyntax},"import")," connector"),l.a.createElement("p",{style:{opacity:"0"}},"_"),l.a.createElement("p",null,"auth_token ="," ",l.a.createElement("span",{className:P.a.paramSyntax},'"',"<","your_access_token",">",'"')),l.a.createElement("p",null,"dc = connector(",l.a.createElement("span",{className:P.a.paramSyntax},'"youtube"'),", _auth=","{",l.a.createElement("span",{className:P.a.paramSyntax},'"access_token"'),": auth_token","}",")"),l.a.createElement("p",{style:{opacity:"0"}},"_"),l.a.createElement("p",null,"df = dc.query(",l.a.createElement("span",{className:P.a.paramSyntax},'"videos"'),", q=",l.a.createElement("span",{className:P.a.paramSyntax},'"Data Science"'),", part=",l.a.createElement("span",{className:P.a.paramSyntax},'"snippet"'),","," ",l.a.createElement("span",{className:P.a.declareSyntax},"type"),"=",l.a.createElement("span",{className:P.a.paramSyntax},'"videos"'),", _count=",l.a.createElement("span",{className:P.a.declareSyntax},"40"),")")))},I=function(e){var a=e.children,t=Object(n.useState)(!0),r=t[0],c=t[1],i=Object(n.useRef)(a);return Object(n.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){c(e.isIntersecting)}))}));return e.observe(i.current),function(){return e.unobserve(i.current)}}),[r]),l.a.createElement("div",{className:"fade-section "+(r?"is-visible":""),ref:i},a)},A=function(){return l.a.createElement("section",{className:f.a.introContainer},l.a.createElement("div",{className:f.a.introTexts},l.a.createElement("h1",null,"The easiest way to prepare data in Python")),l.a.createElement("div",{className:f.a.introSnippets},l.a.createElement("div",null,l.a.createElement(T,null)),l.a.createElement("div",{className:f.a.introSnippetDeviation},l.a.createElement(_,null))))},L=function(){return l.a.createElement("section",{className:f.a.integrationContainer},l.a.createElement("div",{className:f.a.integrationPart},l.a.createElement("div",{className:f.a.integrationSnippets},l.a.createElement(D,null)),l.a.createElement("div",{className:f.a.integrationTexts},l.a.createElement("h3",null,"Design for Notebook Users"),l.a.createElement("p",null,"DataPrep is designed and optimized for computational notebooks, the most popular environment among data scientists."))),l.a.createElement("div",{className:f.a.integrationPart},l.a.createElement("div",{className:f.a.integrationSnippets},l.a.createElement(w,null)),l.a.createElement("div",{className:f.a.integrationTexts},l.a.createElement("h3",null,"Integrate with PyData"),l.a.createElement("p",null,"DataPrep is built in Python. It can be seamlessly integrated with other Python libraries."))),l.a.createElement("div",{className:f.a.integrationPart},l.a.createElement("div",{className:f.a.integrationSnippets},l.a.createElement(B,null)),l.a.createElement("div",{className:f.a.integrationTexts},l.a.createElement("h3",null,"Embrace Open Source"),l.a.createElement("p",null,"DataPrep is free, open-source software released under the MIT license. Anyone can reuse DataPrep code for any purpose."))))},R=function(){return l.a.createElement("section",{className:f.a.featureContainer},l.a.createElement("h2",null,"Why?"),l.a.createElement(I,null,l.a.createElement("div",{className:f.a.featurePart},l.a.createElement("div",{className:f.a.featureTexts},l.a.createElement("p",null,"According to the 2020 State of Data Science survey conducted by Annocada, data preparation still takes the majority of time in a typical data professional’s day. To solve this issue in the next decade, we have to THINK DIFFERENT.")),l.a.createElement("div",{className:f.a.featureSnippets},l.a.createElement(k,null)))),l.a.createElement(I,null,l.a.createElement("div",{className:f.a.featurePart},l.a.createElement("div",{className:f.a.featureSnippets},l.a.createElement(k,null)),l.a.createElement("div",{className:f.a.featureTexts},l.a.createElement("h2",null,"DataPrep.Connector"),l.a.createElement("p",null,"DataPrep.Connector is an intuitive, open-source API wrapper that speeds up development by standardizing calls to multiple APIs as a simple workflow. Streamline calls to multiple APIs through one intuitive library.")))),l.a.createElement(I,null,l.a.createElement("div",{className:f.a.featurePart},l.a.createElement("div",{className:f.a.featureTexts},l.a.createElement("h2",null,"DataPrep.EDA"),l.a.createElement("p",null,"DataPrep.EDA is the fastest and the easiest EDA tool in Python. It allows data scientists to understand a Pandas/Dask DataFrame with a few lines of code in seconds.")),l.a.createElement("div",{className:f.a.featureSnippets},l.a.createElement(k,null)))))},G=function(){return l.a.createElement("section",{className:f.a.installContainer},l.a.createElement("div",{className:f.a.installTexts},l.a.createElement("h1",null,"Get started instantly"),l.a.createElement("p",null,l.a.createElement("span",null,"pip install -U dataprep")),l.a.createElement("h3",null,"And then check out documentation and examples!")))},F=function(e){var a,t=e.type;return"intro"===t?a=l.a.createElement(A,null):"feature"===t?a=l.a.createElement(R,null):"install"===t?a=l.a.createElement(G,null):"integration"===t&&(a=l.a.createElement(L,null)),a},M=t("1eKh"),j=t.n(M),O=function(e){var a=e.name,t=e.status;return l.a.createElement("div",{className:"Available to use"===t?j.a.solidBlock:j.a.dashedBlock},l.a.createElement("h3",null,a),l.a.createElement("p",null,t))},q=function(){return l.a.createElement("section",{className:j.a.compContainer},l.a.createElement("h1",null,"DataPrep Components"),l.a.createElement("div",{className:j.a.blockContainer},l.a.createElement("h3",null,"DataPrep"),l.a.createElement("div",{className:j.a.blocks},l.a.createElement(O,{name:"DataPrep.Connector",status:"Available to use"}),l.a.createElement(O,{name:"DataPrep.EDA",status:"Available to use"}),l.a.createElement(O,{name:"DataPrep.Clean",status:"Under development"}),l.a.createElement(O,{name:"DataPrep.Feature",status:"Planning"}),l.a.createElement(O,{name:"DataPrep.Integrate",status:"Planning"}))))},H={backgroundColor:"#E4E7F2",paddingBottom:"1px"},X=function(e){var a=e.children;return l.a.createElement("div",{style:H},a)},z=t("qhky");a.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(z.a,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"DataPrep -- The fastest way to do data preparation in Python"),l.a.createElement("link",{rel:"canonical",href:"http://dataprep.ai"})),l.a.createElement(c,null,l.a.createElement(r.a,null),l.a.createElement(F,{type:"intro"})),l.a.createElement(F,{type:"integration"}),l.a.createElement(X,null,l.a.createElement(F,{type:"feature"})),l.a.createElement(q,null),l.a.createElement(F,{type:"install"}),l.a.createElement(u,null),l.a.createElement(d.a,null))}},RLkb:function(e,a,t){e.exports={introContainer:"SectionComponent-module--introContainer--1hKzR",introTexts:"SectionComponent-module--introTexts--2Figw",introSnippets:"SectionComponent-module--introSnippets--1DqsG",introSnippetDeviation:"SectionComponent-module--introSnippetDeviation--16LV7",integrationContainer:"SectionComponent-module--integrationContainer--2GLUJ",integrationPart:"SectionComponent-module--integrationPart--2iRvi",integrationTexts:"SectionComponent-module--integrationTexts--2Ik_j",integrationSnippets:"SectionComponent-module--integrationSnippets--1JpDP",featureContainer:"SectionComponent-module--featureContainer--8qBbm",featurePart:"SectionComponent-module--featurePart--MT9my",featureTexts:"SectionComponent-module--featureTexts--18NTk",featureSnippets:"SectionComponent-module--featureSnippets--2AXKi",installContainer:"SectionComponent-module--installContainer--3eGTN",installTexts:"SectionComponent-module--installTexts--QweRU"}},mlLF:function(e,a,t){},wN7t:function(e,a,t){e.exports={footerContainer:"footer-module--footerContainer--3rInv"}},y42M:function(e,a,t){e.exports=t.p+"static/chart-7de991b4a9ecec707dee2e3a18d981ff.svg"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-64b4c7666670b25a0fa3.js.map