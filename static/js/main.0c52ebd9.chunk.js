(this.webpackJsonpmy_website=this.webpackJsonpmy_website||[]).push([[0],{132:function(e,a,t){e.exports=t.p+"static/media/MananPatel_Resume_&_Cover_Letter.cc047175.pdf"},144:function(e,a,t){e.exports=t.p+"static/media/software_developer.4eca0776.jpg"},145:function(e,a,t){e.exports=t.p+"static/media/seneca.2a1912c8.png"},146:function(e,a,t){e.exports=t.p+"static/media/hello_world.40ed3e52.jpg"},147:function(e,a,t){e.exports=t.p+"static/media/coffee&travel.569c2d88.jpg"},150:function(e,a,t){e.exports=t.p+"static/media/Dictionary.32ae7dd6.png"},151:function(e,a,t){e.exports=t.p+"static/media/vroommanager.e88ca79f.png"},152:function(e,a,t){e.exports=t.p+"static/media/Estate.fbc4e3cb.png"},165:function(e,a,t){e.exports=t(305)},305:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),i=t.n(r),c=t(20),s=t(18),m=t(14),o=t(15),d=t(22),u=t(17),E=t(16),h=(t(50),t(313)),p=t(315),g=t(314),b=t(48),k=(t(31),t(132)),v=t.n(k),_=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={counter:1,buttonState:!1,downloadText:"Download Resume",activeItem:"".concat(window.location.pathname)},n.handleItemClick=function(e,a){var t=a.name;return n.setState({activeItem:t})},n.onClick=n.onClick.bind(Object(d.a)(n)),n.githubClick=n.githubClick.bind(Object(d.a)(n)),n}return Object(o.a)(t,[{key:"githubClick",value:function(){window.open("http://github.com","blank")}},{key:"onClick",value:function(){this.setState({counter:this.state.counter+1}),this.state.counter>2&&this.setState({buttonState:!0,downloadText:"Download Limit Reached"})}},{key:"render",value:function(){var e=this.state.activeItem;return l.a.createElement("div",null,l.a.createElement(p.a,{inverted:!0},l.a.createElement(g.a,{inverted:!0,pointing:!0,secondary:!0},l.a.createElement(g.a.Item,{name:"home",active:"/"===e,onClick:this.handleItemClick,as:c.b,to:""},l.a.createElement(b.a,{name:"home"}),"Home"),l.a.createElement(g.a.Item,{name:"about",active:"/about"===e,onClick:this.handleItemClick,as:c.b,to:"about"},l.a.createElement(b.a,{name:"info"}),"About"),l.a.createElement(g.a.Item,{name:"skills",active:"/skills"===e,onClick:this.handleItemClick,as:c.b,to:"skills"},l.a.createElement(b.a,{name:"check circle"}),"Skills"),l.a.createElement(g.a.Item,{name:"projects",active:"/projects"===e,onClick:this.handleItemClick,as:c.b,to:"projects"},l.a.createElement(b.a,{name:"archive"}),"Projects"),l.a.createElement(g.a.Item,{name:"resume",active:"/resume"===e,onClick:this.handleItemClick,as:c.b,to:"resume"},l.a.createElement(b.a,{name:"file alternate outline"}),"Resume"),l.a.createElement("div",{className:"right menu"},l.a.createElement(g.a.Item,{name:"github",onClick:this.githubClick.bind(this)},l.a.createElement(b.a,{name:"github"}),"Github"),l.a.createElement("div",{className:"ui positive button medium ".concat(this.state.buttonState?"disabled":""),onClick:this.onClick},l.a.createElement(c.b,{to:v.a,target:"_blank",download:"MananPatel_Resume.pdf"},this.state.downloadText))))))}}]),t}(n.Component),N=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"ui inverted vertical footer segment"},l.a.createElement("div",{className:"ui container"},l.a.createElement(b.a,{name:"copyright outline"}),"Manan Patel"))}}]),t}(n.Component),f=t(140),w=t.n(f),C=t(311),y=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).sleep=function(e){return new Promise((function(a){return setTimeout(a,e)}))},e.state={emailToCopy:"manan.p296@gmail.com",buttonClicked:!1,emailButtonText:"Email"},e.handleCopyClick=e.handleCopyClick.bind(Object(d.a)(e)),e.setEamilTextButtonBack=e.setEamilTextButtonBack.bind(Object(d.a)(e)),e.githubClick=e.githubClick.bind(Object(d.a)(e)),e.linkedInClick=e.linkedInClick.bind(Object(d.a)(e)),e}return Object(o.a)(t,[{key:"setEamilTextButtonBack",value:function(){this.setState({buttonClicked:!1,emailButtonText:"Email"})}},{key:"githubClick",value:function(){window.open("http://github.com","blank")}},{key:"linkedInClick",value:function(){window.open("https://www.linkedin.com/in/patelmanan99/","blank")}},{key:"handleCopyClick",value:function(){w()(this.state.emailToCopy),this.setState({buttonClicked:!0,emailButtonText:"Email Copied"})}},{key:"render",value:function(){var e=this,a=this.state.emailButtonText;return this.state.buttonClicked&&setTimeout((function(){e.setEamilTextButtonBack()}),2e3),l.a.createElement("div",null,l.a.createElement(_,null),l.a.createElement(C.a,{in:!0,appear:!0,timeout:1e3,classNames:"fade"},l.a.createElement("div",{className:"home-body"},l.a.createElement("div",{className:"home-center"},l.a.createElement("h1",{as:"h1",className:"inverted huge"},"Hello, I am Manan"),l.a.createElement("h4",{className:"inverted"},"Forth Year Software Developer Student"),l.a.createElement("br",null),l.a.createElement("div",{className:"home-icons-in-line"},l.a.createElement(h.a,{icon:"linkedin square",color:"blue",size:"mini",circular:!0,onClick:this.linkedInClick}),"Linkedin"),l.a.createElement("div",{className:"home-icons-in-line"},l.a.createElement(h.a,{icon:"github",size:"mini",circular:!0,onClick:this.githubClick}),"Github"),l.a.createElement("div",{className:"home-icons-in-line"},l.a.createElement(h.a,{icon:"mail outline",size:"mini",circular:!0,color:"blue",onClick:this.handleCopyClick}),a)))),l.a.createElement(N,null))}}]),t}(n.Component),S=t(153),j=t(316),O=t(144),T=t.n(O),x=t(145),A=t.n(x),M=t(146),R=t.n(M),I=t(147),D=t.n(I);function L(e){return l.a.createElement("div",{className:"ani1"},"I am new challenger entering the software development world. I am a fourth year student at Seneca College studying Bachlores of Software Development with Honours. Developing softwares started out as a necessity to make my hardware work and run properly. After many trials and errors tring to make the program run properly I realized how much I love solving problems and figuring out multiple way to do the same thing. This lead me to choose a career in developing softwares and applications.")}function P(e){return l.a.createElement("div",{className:"ani1"},"Seneca has provided me with theoretical and hands-on experience which has lead me to creating quite complex applications. These applications range from the simplest \u201cHello World!\u201d to full-stack websites. Not only that but Seneca has also provided me with the knowledge and expertise of developing projects in many languages and framework in a team environment using git version control. As well as theory in many important concepts of programming such as data patterns, networking and database to name a few of them.")}function J(e){return l.a.createElement("div",{className:"ani1"},"The programming languages I love working with are C++, JavaScript, TypeScript, HTML/CSS and PL/SQL. I am also familliar and able to work with C, Java. I have experience working with Angular, ReactJS, NodeJS, ExpressJS, Android and React Native frameworks. My go to database are MongoDB and SQLite but I have also worked with PostgreSQL, SQL Server and MySQL. Git is the version control system I worked with when I have collaborative projects. Other techniques I am familiar with are Agile programing, RESTFUL APIs, Asynchronous JavaScript and XML(AJAX) and JavaScript Object Notation(JSON). I am also able to work with Linux distros, Unix shell and Windows command prompt. Prefrences going to Linux and Unix based systemes.")}function z(e){return l.a.createElement("div",{className:"ani1"},"I am a coffee lover and a badminton, long and table tennis enthusiast. I really enjoy to travel from time to time. Places I like to visit do not have to be off in another contry, that would be great but there are so many really good places to explore in Ontario, couple hours away from Toronto. These places are small but full of life. They have great water falls and trails to explore. Just bewear of the bears.")}function q(e){return l.a.createElement("div",{className:"ani2"},l.a.createElement(S.a,{src:T.a,alt:"image1"}))}function B(e){return l.a.createElement("div",{className:"ani2"},l.a.createElement(S.a,{src:A.a,rounded:!0,bordered:!0,alt:"image2"}))}function H(e){return l.a.createElement("div",{className:"ani2 b"},l.a.createElement(S.a,{src:R.a,alt:"image3"}))}function U(e){return l.a.createElement("div",{className:"ani2"},l.a.createElement(S.a,{src:D.a,alt:"image4"}))}var V=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(_,null),l.a.createElement(C.a,{in:!0,appear:!0,timeout:1e3,classNames:"fade"},l.a.createElement("div",{className:"about-body"},l.a.createElement("div",{className:"k"},l.a.createElement("section",{className:"project-card black"},l.a.createElement("div",{className:"about-center"},l.a.createElement(j.a,{as:"h1",icon:!0,textAlign:"center",inverted:!0},l.a.createElement(b.a,{name:"coffee",circular:!0}),l.a.createElement(j.a.Content,null,"Get To Know Me")))),l.a.createElement("section",{className:"about-card"},l.a.createElement("div",{className:"middle"},l.a.createElement(L,null)),l.a.createElement("div",{className:"middle"},l.a.createElement(q,null))),l.a.createElement("section",{className:"about-card black"},l.a.createElement("div",{className:"middle"},l.a.createElement(B,null)),l.a.createElement("div",{className:"middle"},l.a.createElement(P,null))),l.a.createElement("section",{className:"about-card"},l.a.createElement("div",{className:"middle"},l.a.createElement(J,null)),l.a.createElement("div",{className:"middle"},l.a.createElement(H,null))),l.a.createElement("section",{className:"about-card black"},l.a.createElement("div",{className:"middle"},l.a.createElement(U,null)),l.a.createElement("div",{className:"middle"},l.a.createElement(z,null)))))),l.a.createElement(N,null))}}]),t}(n.Component),G=t(309);function Q(e){var a=e.ss;a.sort((function(e,a){return e.localeCompare(a)}));var t=a.map((function(e){return l.a.createElement("div",{className:"skills-soft-skills-20"},l.a.createElement(b.a,{name:"hand point right",className:"skills-point-icon"}),l.a.createElement("h4",{className:"skills-soft-title"},e))}));return l.a.createElement("div",{className:"skills-soft-row"},t)}var W=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={softskills:["Strong Communication Skills","Creative","Critical Thinking","Analytical Thinker","Problem Solver","Mathematical Aptitude","Excellent Organization Skills","Time Management","Multitasking","Detail Oriented","Responsible","Dependable","Highly Motivational","Punctual","Adaptable/Flexible","Big Picture Thinking","Willing to Learn","Team Player","Leader","Excellent Listening Skills","Approachable","Strong Work Ethics","Great Interpersonal Skills","Efficient Working Under Stress","Well Versed With Current & Upcoming Tech Trends","Strong Memory","Empathy","Patience","Quick Dealing With Failures","High Quality of Work"]},n}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(_,null),l.a.createElement(C.a,{in:!0,appear:!0,timeout:1e3,classNames:"fade"},l.a.createElement("div",{className:"project-body"},l.a.createElement("div",{className:"project-k"},l.a.createElement("section",{className:"project-card black"},l.a.createElement("div",{className:"about-center"},l.a.createElement(j.a,{as:"h1",icon:!0,textAlign:"center",inverted:!0},l.a.createElement(b.a,{name:"chess",circular:!0}),l.a.createElement(j.a.Content,null,"Welcome To My Arsenal")))),l.a.createElement("section",{className:"project-card"},l.a.createElement("div",{className:"project-inner-section"},l.a.createElement(j.a,{as:"h1",dividing:!0,textAlign:"center"},"Hard Skills"),l.a.createElement("div",{className:"skills-hard-row"},l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"C"),l.a.createElement(G.a,{progress:"percent",percent:"80",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"C++"),l.a.createElement(G.a,{progress:"percent",percent:"90",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"Java"),l.a.createElement(G.a,{progress:"percent",percent:"70",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"PL/SQL"),l.a.createElement(G.a,{progress:"percent",percent:"100",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"JavaScript"),l.a.createElement(G.a,{progress:"percent",percent:"90",size:"small",indicating:!0}))),l.a.createElement("div",{className:"skills-hard-row"},l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"TypeScript"),l.a.createElement(G.a,{progress:"percent",percent:"95",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"HTML"),l.a.createElement(G.a,{progress:"percent",percent:"100",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"CSS"),l.a.createElement(G.a,{progress:"percent",percent:"100",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"Angular"),l.a.createElement(G.a,{progress:"percent",percent:"90",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"ReactJS"),l.a.createElement(G.a,{progress:"percent",percent:"95",size:"small",indicating:!0}))),l.a.createElement("div",{className:"skills-hard-row"},l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"NodeJS"),l.a.createElement(G.a,{progress:"percent",percent:"90",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"ExpressJS"),l.a.createElement(G.a,{progress:"percent",percent:"85",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"Android Studios"),l.a.createElement(G.a,{progress:"percent",percent:"90",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"MongoDB"),l.a.createElement(G.a,{progress:"percent",percent:"100",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"SQLite"),l.a.createElement(G.a,{progress:"percent",percent:"100",size:"small",indicating:!0}))),l.a.createElement("div",{className:"skills-hard-row"},l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"PostgreSQL"),l.a.createElement(G.a,{progress:"percent",percent:"80",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"SQL Server"),l.a.createElement(G.a,{progress:"percent",percent:"100",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"MySQL"),l.a.createElement(G.a,{progress:"percent",percent:"100",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"Git Version Control"),l.a.createElement(G.a,{progress:"percent",percent:"80",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"Agile Programming"),l.a.createElement(G.a,{progress:"percent",percent:"90",size:"small",indicating:!0}))),l.a.createElement("div",{className:"skills-hard-row"},l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"Restful APIs"),l.a.createElement(G.a,{progress:"percent",percent:"85",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"AJAX"),l.a.createElement(G.a,{progress:"percent",percent:"80",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"JSON"),l.a.createElement(G.a,{progress:"percent",percent:"100",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"Linux"),l.a.createElement(G.a,{progress:"percent",percent:"90",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"Unix"),l.a.createElement(G.a,{progress:"percent",percent:"90",size:"small",indicating:!0}))),l.a.createElement("div",{className:"skills-hard-row"},l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"Arduino"),l.a.createElement(G.a,{progress:"percent",percent:"100",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"VEX Programming"),l.a.createElement(G.a,{progress:"percent",percent:"75",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"UI/UX Design"),l.a.createElement(G.a,{progress:"percent",percent:"90",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"Docker"),l.a.createElement(G.a,{progress:"percent",percent:"70",size:"small",indicating:!0})),l.a.createElement("div",{className:"skills-hard-skills-20"},l.a.createElement("h4",null,"Travis CI"),l.a.createElement(G.a,{progress:"percent",percent:"70",size:"small",indicating:!0}))))),l.a.createElement("section",{className:"project-card black"},l.a.createElement("div",{className:"project-inner-section"},l.a.createElement(j.a,{as:"h1",dividing:!0,inverted:!0,textAlign:"center"},"Soft Skills"),l.a.createElement("div",{className:"skills-extra-padding-top"},l.a.createElement(Q,{ss:this.state.softskills}))))))),l.a.createElement(N,null))}}]),t}(n.Component),F=t(70),Y=t(312),X=t(150),K=t.n(X),Z=t(151),$=t.n(Z),ee=t(152),ae=t.n(ee),te=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={disabledClicked:!1},n.githubDictionaryClick=n.githubDictionaryClick.bind(Object(d.a)(n)),n.githubEstateClick=n.githubEstateClick.bind(Object(d.a)(n)),n.githubVRoomManagerClick=n.githubVRoomManagerClick.bind(Object(d.a)(n)),n.demoDictionaryClick=n.demoDictionaryClick.bind(Object(d.a)(n)),n.demoEstateClick=n.demoEstateClick.bind(Object(d.a)(n)),n.demoVRoomManagerClick=n.demoVRoomManagerClick.bind(Object(d.a)(n)),n}return Object(o.a)(t,[{key:"githubEstateClick",value:function(){var e=this;this.setState({disabledClicked:!0}),setTimeout((function(){e.setState({disabledClicked:!1})}),3e3)}},{key:"githubDictionaryClick",value:function(){window.open("http://github.com/Manan311/The_Dictionary","blank")}},{key:"githubVRoomManagerClick",value:function(){window.open("http://github.com/Manan311/VRoomManager","blank")}},{key:"demoDictionaryClick",value:function(){window.open("https://warm-reaches-18977.herokuapp.com/term/english","blank")}},{key:"demoEstateClick",value:function(){window.open("https://google.ca","blank")}},{key:"demoVRoomManagerClick",value:function(){window.open("https://warm-lowlands-92673.herokuapp.com/cars","blank")}},{key:"render",value:function(){var e;return e=this.state.disabledClicked?l.a.createElement("div",null,l.a.createElement(F.a,{basic:!0,color:"red",pointing:"right"},"Private Repository"),l.a.createElement(h.a,{circular:!0,onClick:this.githubEstateClick.bind(this),color:"github",icon:"github"})):l.a.createElement(h.a,{circular:!0,onClick:this.githubEstateClick.bind(this),color:"github",icon:"github"}),l.a.createElement("div",null,l.a.createElement(_,null),l.a.createElement(C.a,{in:!0,appear:!0,timeout:1e3,classNames:"fade"},l.a.createElement("div",{className:"project-body"},l.a.createElement("div",{className:"project-k"},l.a.createElement("section",{className:"project-card black"},l.a.createElement("div",{className:"about-center"},l.a.createElement(j.a,{as:"h1",icon:!0,textAlign:"center",inverted:!0},l.a.createElement(b.a,{name:"folder",circular:!0}),l.a.createElement(j.a.Content,null,"Welcome To My Workshop")))),l.a.createElement("section",{className:"project-card"},l.a.createElement("div",{className:"project-inner-section project-small"},l.a.createElement(Y.a.Group,{centered:!0,itemsPerRow:3},l.a.createElement(Y.a,{color:"red"},l.a.createElement(S.a,{src:ae.a,alt:"Estate.png",wrapped:!0,ui:!1,label:{color:"red",content:"Developing",icon:"thumbtack",ribbon:!0}}),l.a.createElement(Y.a.Content,{content:"red"},l.a.createElement(Y.a.Header,null,"Estate",l.a.createElement("div",{className:"fright"},e)),l.a.createElement(Y.a.Meta,null,"January, 2020 - Present"),l.a.createElement(Y.a.Description,null,"Estate is a ReactJS web application that uses text-to-speech technology to render searches. Estate is a modern realtor website compared to it competitors. Estate revolutionizes it's search engine to optimize the search processe to stay upto date with current technology.")),l.a.createElement(Y.a.Content,{extra:!0},l.a.createElement(h.a,{negative:!0,disabled:!0,onClick:this.demoEstateClick.bind(this),attached:"bottom"},"Private Repository"))),l.a.createElement(Y.a,{color:"red"},l.a.createElement(S.a,{src:K.a,wrapped:!0,alt:"Dictionary.png",ui:!1}),l.a.createElement(Y.a.Content,{content:"red"},l.a.createElement(Y.a.Header,null,"The Dictionary",l.a.createElement("div",{className:"fright"},l.a.createElement(h.a,{circular:!0,onClick:this.githubDictionaryClick.bind(this),color:"github",icon:"github"}))),l.a.createElement(Y.a.Meta,null,"March, 2020 - April, 2020"),l.a.createElement(Y.a.Description,null,"The Dictionary is an Angular web application created for BSD(Bachelor of Software Development) students at Seneca College. It is created for BTI course students specifically but can be grown to cover all the courses in the BSD program. The Dictionary is where students go to find the technical terminology for BTI.")),l.a.createElement(Y.a.Content,{extra:!0},l.a.createElement(h.a,{positive:!0,onClick:this.demoDictionaryClick.bind(this),attached:"bottom"},"View Demo"))),l.a.createElement(Y.a,{color:"red"},l.a.createElement(S.a,{src:$.a,alt:"VRoomManager.png",wrapped:!0,ui:!1}),l.a.createElement(Y.a.Content,{content:"red"},l.a.createElement(Y.a.Header,null,"VRoomManager",l.a.createElement("div",{className:"fright"},l.a.createElement(h.a,{circular:!0,onClick:this.githubVRoomManagerClick.bind(this),color:"github",icon:"github"}))," "),l.a.createElement(Y.a.Meta,null,"January, 2020 - Febuary, 2020"),l.a.createElement(Y.a.Description,null,"VRoomManager is a simple ReactJS car management web application for dealerships. It allows dealerships to enter the cars they have in their store to the MongoDB database and then once the car is sold, a dealer can edit it to update purchase information.")),l.a.createElement(Y.a.Content,{extra:!0},l.a.createElement(h.a,{positive:!0,onClick:this.demoVRoomManagerClick.bind(this),attached:"bottom"},"View Demo")))),l.a.createElement(j.a,{size:"tiny",color:"red",textAlign:"center"},"* Both the web-server and web-api are hoisted on a free hosting site called heroku and might take some time to load *")))))),l.a.createElement(N,null))}}]),t}(n.Component),ne=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(_,null),l.a.createElement(C.a,{in:!0,appear:!0,timeout:1e3,classNames:"fade"},l.a.createElement("div",{className:"resume_main_div"},l.a.createElement("table",{className:"resume_table"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"resume_header"},l.a.createElement("td",{className:"resume_margin_logo"}),l.a.createElement("td",{className:"resume_page black"},l.a.createElement("h1",{className:"resume_header_name"},"Manan Patel"),l.a.createElement("div",{className:"resume_header_personal_info"},l.a.createElement("div",{className:"resume_header_lacation"},l.a.createElement("div",{className:"home-icons-in-line res_icon"},l.a.createElement(b.a,{name:"home"})),l.a.createElement("div",{className:"resume_header_icon_description"},"Brampton, Ontario")),l.a.createElement("div",{className:"resume_header_contact"},l.a.createElement("div",{className:"home-icons-in-line res_icon"},l.a.createElement(b.a,{inverted:!0,name:"phone"})),l.a.createElement("div",{className:"resume_header_icon_description"},"(647) 230-1357"),l.a.createElement("div",{className:"home-icons-in-line res_icon"},l.a.createElement(b.a,{inverted:!0,name:"mail"})),l.a.createElement("div",{className:"resume_header_icon_description"},"manan.p296@gmail.com"),l.a.createElement("div",{className:"home-icons-in-line res_icon"},l.a.createElement(b.a,{inverted:!0,name:"github"})),l.a.createElement("div",{className:"resume_header_icon_description"},"https://github.com/Manan311"))))),l.a.createElement("tr",{className:"resume_goal"},l.a.createElement("td",{className:"resume_margin"},"Goal"),l.a.createElement("td",{className:"resume_page"},l.a.createElement("p",null,"To Secure Co-op placement starting of fall 2020 for a role related to software development."))),l.a.createElement("tr",{className:"resume_objective"},l.a.createElement("td",{className:"resume_margin"},"Objective"),l.a.createElement("td",{className:"resume_page"},l.a.createElement("p",null,"An aspiring fourth-year student at Seneca College, currently studying Software Development with Honours, who is actively looking for opportunities, such as coop, to add considerable work experience to his portfolio. In addition to the work experience, it is also planned to complete a Master\u2019s in Software Engineering."))),l.a.createElement("tr",{className:"resume_qualification"},l.a.createElement("td",{className:"resume_margin"},"Highlight of Qualification"),l.a.createElement("td",{className:"resume_page"},l.a.createElement("table",{className:"resume_qualification_table"},l.a.createElement("tbody",{className:"resume_qualification_table_body"},l.a.createElement("tr",{className:"resume_qualification_table_row"},l.a.createElement("td",{className:"resume_qualification_cell_icon"},l.a.createElement(b.a,{name:"hand point right"})),l.a.createElement("td",{className:"resume_qualification_cell_word"},"Communicate effectively"),l.a.createElement("td",{className:"resume_qualification_cell_icon"},l.a.createElement(b.a,{name:"hand point right"})),l.a.createElement("td",{className:"resume_qualification_cell_word"},"Responsible and dependable"),l.a.createElement("td",{className:"resume_qualification_cell_icon"},l.a.createElement(b.a,{name:"hand point right"})),l.a.createElement("td",{className:"resume_qualification_cell_word"},"Excellent performance in the sciences")),l.a.createElement("tr",{className:"resume_qualification_table_row"},l.a.createElement("td",{className:"resume_qualification_cell_icon"},l.a.createElement(b.a,{name:"hand point right"})),l.a.createElement("td",{className:"resume_qualification_cell_word"},"Problem solver, strong critical-thinking skills"),l.a.createElement("td",{className:"resume_qualification_cell_icon"},l.a.createElement(b.a,{name:"hand point right"})),l.a.createElement("td",{className:"resume_qualification_cell_word"},"Efficient in multitasking"),l.a.createElement("td",{className:"resume_qualification_cell_icon"},l.a.createElement(b.a,{name:"hand point right"})),l.a.createElement("td",{className:"resume_qualification_cell_word"},"Works well under stress")),l.a.createElement("tr",{className:"resume_qualification_table_row"},l.a.createElement("td",{className:"resume_qualification_cell_icon"},l.a.createElement(b.a,{name:"hand point right"})),l.a.createElement("td",{className:"resume_qualification_cell_word"},"Team player"),l.a.createElement("td",{className:"resume_qualification_cell_icon"},l.a.createElement(b.a,{name:"hand point right"})),l.a.createElement("td",{className:"resume_qualification_cell_word"},"Well-versed with current and upcoming tech trends"),l.a.createElement("td",{className:"resume_qualification_cell_icon"},l.a.createElement(b.a,{name:"hand point right"})),l.a.createElement("td",{className:"resume_qualification_cell_word"},"Highly motivated")),l.a.createElement("tr",{className:"resume_qualification_table_row"},l.a.createElement("td",{className:"resume_qualification_cell_icon"},l.a.createElement(b.a,{name:"hand point right"})),l.a.createElement("td",{className:"resume_qualification_cell_word"},"Detail oriented"),l.a.createElement("td",{className:"resume_qualification_cell_icon"},l.a.createElement(b.a,{name:"hand point right"})),l.a.createElement("td",{className:"resume_qualification_cell_word"},"Creative"),l.a.createElement("td",{className:"resume_qualification_cell_icon"},l.a.createElement(b.a,{name:"hand point right"})),l.a.createElement("td",{className:"resume_qualification_cell_word"},"Punctual")))))),l.a.createElement("tr",{className:"resume_skills"},l.a.createElement("td",{className:"resume_margin"},"Technical Skills"),l.a.createElement("td",{className:"resume_page"},l.a.createElement("p",null,"Efficient and knowledgeable working with:"),l.a.createElement("table",{className:"resume_skills_table"},l.a.createElement("tbody",{className:"resume_skills_table_body"},l.a.createElement("tr",{className:"resume_skills_table_row_1"},l.a.createElement("th",{className:"resume_skills_table_cell_header"},"Programming Languages:"),l.a.createElement("td",{className:"resume_skills_table_cell_description"},"C, C++, Java, PL/SQL, JavaScript, TypeScript, HTML/CSS")),l.a.createElement("tr",{className:"resume_skills_table_row_2"},l.a.createElement("th",{className:"resume_skills_table_cell_header"},"Frameworks:"),l.a.createElement("td",{className:"resume_skills_table_cell_description"},"Angular, ReactJS, React Native, NodeJS, ExpressJS, JQuery, Android")),l.a.createElement("tr",{className:"resume_skills_table_row_3"},l.a.createElement("th",{className:"resume_skills_table_cell_header"},"Databases:"),l.a.createElement("td",{className:"resume_skills_table_cell_description"},"MongoDB, SQLite, PostgreSQL, SQL Server, MySQL")),l.a.createElement("tr",{className:"resume_skills_table_row_4"},l.a.createElement("th",{className:"resume_skills_table_cell_header"},"Other:"),l.a.createElement("td",{className:"resume_skills_table_cell_description"},"Git, Agile, RESTful APIs/AJAX/JSON, Linux, Unix")))))),l.a.createElement("tr",{className:"resume_education"},l.a.createElement("td",{className:"resume_margin"},"Education"),l.a.createElement("td",{className:"resume_page"},l.a.createElement("div",{className:"res_education"},l.a.createElement("div",{className:"resume_education_title"},"SENECA COLLEGE \u2013 BACHELORS OF SOFTWARE DEVELOPMENT"),l.a.createElement("div",{className:"resume_education_date"},"JANUARY, 2018 - PRESENT"),l.a.createElement("div",{className:"res_education_bullets"},l.a.createElement("li",null,"Achieved outstanding results in all programming courses such as C, C++, Database"," "),l.a.createElement("li",null,"Experience with scripting and using Unix-based distros"," "))),l.a.createElement("br",null),l.a.createElement("div",{className:"res_education"},l.a.createElement("div",{className:"resume_education_title"},"MARTINGROVE COLLIGATE INSTITUTE \u2013 HIGHSCHOOL"," "),l.a.createElement("div",{className:"resume_education_date"},"GRADUATED \u2013 JUNE, 2017"," "),l.a.createElement("div",{className:"res_education_bullets"},l.a.createElement("li",null,"A member of the First Robotic Competition, FRC, where the team competed in the Provincials"),l.a.createElement("li",null,"Programmed a 3D Tic-Tac-Toe simulation using Java"," "))))),l.a.createElement("tr",{className:"resume_project"},l.a.createElement("td",{className:"resume_margin"},"Technical Project"),l.a.createElement("td",{className:"resume_page"},l.a.createElement("div",{className:"res_project"},l.a.createElement("div",{className:"resume_project_title"},"CAPSTONE PROJECT \u2013 CUSTOMER ORDER AND MANAGEMENT SYSTEM"," "),l.a.createElement("div",{className:"resume_project_date"},"MAY, 2019 \u2013 PRESENT"," "),l.a.createElement("div",{className:"res_project_bullets"},l.a.createElement("li",null,"Developed a NodeJS and Angular app that lets you manage green cleaning and stitching business"),l.a.createElement("li",null,"Integrated MongoDB to store data in a cloud "))),l.a.createElement("br",null),l.a.createElement("div",{className:"res_project"},l.a.createElement("div",{className:"resume_project_title"},"VROOMMANAGER \u2013 CAR MANAGEMENT SYSTEM"),l.a.createElement("div",{className:"resume_project_date"},"JANUARY, 2020 \u2013 FEBUARY, 2020"),l.a.createElement("div",{className:"res_project_bullets"},l.a.createElement("li",null,"Developed a NodeJS and ReactJS app that lets you manage cars information using web api"),l.a.createElement("li",null,"Integrated MongoDB to store all the cars information in a cloud"))))),l.a.createElement("tr",{className:"resume_experience"},l.a.createElement("td",{className:"resume_margin"},"Work Experience"),l.a.createElement("td",{className:"resume_page"},l.a.createElement("div",{className:"res_experience"},l.a.createElement("div",{className:"resume_experience_title"},"TIM HORTONS \u2013 FRONT HANDLER"),l.a.createElement("div",{className:"resume_experience_date"},"JULY 2019 - DECEMBER 2019"),l.a.createElement("div",{className:"res_experience_bullets"},l.a.createElement("li",null,"Handled the cash register as well as took care of the premises"),l.a.createElement("li",null,"Kept food inventory up-to-date and fresh"),l.a.createElement("li",null,"Made customers\u2019 orders in a team environment with the most efficiency"))),l.a.createElement("br",null),l.a.createElement("div",{className:"res_experience"},l.a.createElement("div",{className:"resume_experience_title"},"CANADIAN TIRE GAS STATION \u2013 CASHIER"),l.a.createElement("div",{className:"resume_experience_date"},"AUGUST 2017 - JANUARY 2018"),l.a.createElement("div",{className:"res_experience_bullets"},l.a.createElement("li",null,"Handled the cash register as well as took care of the premises"),l.a.createElement("li",null,"Kept inventory up-to-date, including gasoline/diesel and convenience store inventories"),l.a.createElement("li",null,"Processed lottery and cigarette sales"))),l.a.createElement("br",null),l.a.createElement("div",{className:"res_experience"},l.a.createElement("div",{className:"resume_experience_title"},"UCMAS \u2013 TUTOR"),l.a.createElement("div",{className:"resume_experience_date"},"FEBRUARY 2017 \u2013 SEPTEMBER 2017"),l.a.createElement("div",{className:"res_experience_bullets"},l.a.createElement("li",null,"Taught English and Math to students in grades 6 to 9"),l.a.createElement("li",null,"Regularly explored areas of difficulty to strengthen the student\u2019s weaknesses"),l.a.createElement("li",null,"Effectively communicated the student\u2019s performance and advancement with their parents to enhance parent-tutor relationships"),l.a.createElement("li",null,"Guided students to improve work ethics, as well as encouraged creative thinking"))))))))),l.a.createElement(N,null))}}]),t}(n.Component),le=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){var e="";return"0"===this.props.id?e="https://warm-reaches-18977.herokuapp.com/home":"1"===this.props.id?e="https://google.ca":"2"===this.props.id&&(e="https://warm-lowlands-92673.herokuapp.com"),l.a.createElement(s.a,{path:"/demo",component:function(){return window.location.href="".concat(e),null}})}}]),t}(n.Component),re=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){var e="";return"home"===this.props.id?e="":"The_Dictionary"===this.props.id?e="The_Dictionary":"estate"===this.props.id?e="WebNote":"VRoomManager"===this.props.id&&(e="VRoomManager"),l.a.createElement(s.a,{path:"/github",component:function(){return window.location.href="https://github.com/Manan311/".concat(e),null}})}}]),t}(n.Component),ie=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(s.a,{path:"/linkedin",component:function(){return window.location.href="https://www.linkedin.com/in/patelmanan99/",null}})}}]),t}(n.Component),ce=function(e){Object(u.a)(t,e);var a=Object(E.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"ui red huge header"},"404 Page Not Found"),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",{class:"ui grey button big",link:!0},"Go Home")))}}]),t}(n.Component);var se=function(){return l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",render:function(){return l.a.createElement(y,null)}}),l.a.createElement(s.a,{exact:!0,path:"/about",render:function(){return l.a.createElement(V,null)}}),l.a.createElement(s.a,{exact:!0,path:"/skills",render:function(){return l.a.createElement(W,null)}}),l.a.createElement(s.a,{exact:!0,path:"/projects",render:function(){return l.a.createElement(te,null)}}),l.a.createElement(s.a,{exact:!0,path:"/resume",render:function(){return l.a.createElement(ne,null)}}),l.a.createElement(s.a,{exact:!0,path:"/demo/:id",render:function(e){return l.a.createElement(le,{id:e.match.params.id})}}),l.a.createElement(s.a,{exact:!0,path:"/github/:id",render:function(e){return l.a.createElement(re,{id:e.match.params.id})}}),l.a.createElement(s.a,{exact:!0,path:"/linkedin",render:function(){return l.a.createElement(ie,null)}}),l.a.createElement(s.a,{render:function(){return l.a.createElement(ce,null)}}))};i.a.render(l.a.createElement(c.a,null,l.a.createElement(se,null)),document.getElementById("root"))},31:function(e,a,t){}},[[165,1,2]]]);
//# sourceMappingURL=main.0c52ebd9.chunk.js.map