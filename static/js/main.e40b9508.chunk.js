(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"assets/images/OneThinks.jpg",name:"First Doctor"},{id:2,image:"assets/images/TwoFingerPoint.jpg",name:"Second Doctor"},{id:3,image:"assets/images/ThreeInMiniscopeLeft.jpg",name:"Third Doctor"},{id:4,image:"assets/images/FourSeriousLooksRightPOE.jpg",name:"Fourth Doctor"},{id:5,image:"assets/images/FiveOnFilmTA.jpg",name:"Fifth Doctor"},{id:6,image:"assets/images/SixSternFilmTMOTR.jpg",name:"Sixth Doctor"},{id:7,image:"assets/images/SevenLooksLeftROTD.jpg",name:"Seventh Doctor"},{id:8,image:"assets/images/Eight.jpg",name:"Eighth Doctor"},{id:9,image:"assets/images/NineDalekConfrontation.jpg",name:"Ninth Doctor"},{id:10,image:"assets/images/TenSpecsBiggerSmileLeftSITL.jpg",name:"Tenth Doctor"},{id:11,image:"assets/images/ElevenInShadowsTDODT.jpg",name:"Eleventh Doctor"},{id:12,image:"assets/images/TwelveLooksAtMissy.jpg",name:"Twelfth Doctor"},{id:13,image:"assets/images/ThirteenthDoctor3.jpg",name:"Thirteenth Doctor"}]},,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(3),r=n.n(i),s=(n(15),n(4)),c=n(5),l=n(7),g=n(6),m=n(8);n(16);var d=function(e){return a.a.createElement("div",{className:"wrapper"},e.children)};n(17);var h=function(e){return a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{src:e.image,alt:e.name,onClick:e.handleClick,id:e.id})))},u=(n(18),n(1)),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={lastClickedId:0,score:0},n.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),o=[e[n],e[t]];e[t]=o[0],e[n]=o[1]}},n.handleClick=function(e){e.target.id===n.state.lastClickedId?n.setState({score:0}):n.setState({score:n.state.score+1}),n.setState({lastClickedId:e.target.id})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.shuffleArray(u),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"The Thirteen Doctors Clicky Game"),a.a.createElement("p",null,a.a.createElement("strong",null,"Instructions:"),"Click on one of the Doctors to increase your score. If you click the same Doctor twice in a row, your score resets to zero. The Doctors are reshuffled after every turn."),a.a.createElement("h2",null,"Score: ",this.state.score),a.a.createElement(d,null,u.map(function(t){return a.a.createElement(h,Object.assign({},t,{key:t.id,handleClick:e.handleClick}))})))}}]),t}(o.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(f,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/clicky-game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/clicky-game","/service-worker.js");p?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):v(t,e)})}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.e40b9508.chunk.js.map