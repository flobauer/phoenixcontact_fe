(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){e.exports={container:"Kamera_container__1Ya2J",button:"Kamera_button__3d8uN",image:"Kamera_image__S1Mjm"}},210:function(e,t,n){e.exports=n(400)},215:function(e,t,n){},400:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(50),c=n.n(r),i=(n(215),n(409)),m=n(408),s=n(70),u=n(112),l=n.n(u),p=function(){var e=Object(a.useState)(void 0),t=Object(s.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:l.a.container},o.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){var t=new FormData,n=document.querySelector("input[type='file']");t.append("foto",n.files[0]),fetch("/image",{method:"POST",mode:"no-cors",body:t}).then(function(e){return e.json()}).catch(function(e){return console.error("Error:",e)}).then(function(e){r(e.url)})},capture:"environment",className:l.a.button}),n&&o.a.createElement("img",{src:n,alt:"result"}))},d=n(405),f=n(406),w=n(407),h=n(404),E=n(196),g=n.n(E),y=function(){var e=Object(a.useState)("waiting"),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)(function(){var e=new WebSocket("ws://".concat(window.location.hostname,":").concat(window.location.port,"/echo"));e.onopen=function(){e.send("socket open")},e.onclose=function(e){r("socket closed")},e.onmessage=function(e){r(e.data)}},[]);var c=g()({primary:"white",secondary:"#1F2022",tertiary:"#03A9FC",quaternary:"#CECECE"},{primary:"Montserrat",secondary:"Helvetica"});return o.a.createElement(f.a,{transition:["zoom","slide"],transitionDuration:500,theme:c},o.a.createElement(w.a,{transition:["zoom"],bgColor:"primary"},o.a.createElement(h.a,{size:1,fit:!0,caps:!0,lineHeight:1,textColor:"secondary"},"AI on Automation Infrastructure")),o.a.createElement(w.a,{transition:["zoom"],bgColor:"primary"},o.a.createElement(d.a,{to:"/"},"zur Kamera ",n)))},b=function(){return o.a.createElement(i.a,null,o.a.createElement(a.Fragment,null,o.a.createElement(m.a,{path:"/",exact:!0,component:p}),o.a.createElement(m.a,{path:"/presentation",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[210,2,1]]]);
//# sourceMappingURL=main.af6e298e.chunk.js.map