!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var a=t(1),i=t(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},r=(a(i,o),i.locals?i.locals:{});e.exports=r},function(e,n,t){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),r=[];function s(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},a=[],i=0;i<e.length;i++){var o=e[i],l=n.base?o[0]+n.base:o[0],c=t[l]||0,m="".concat(l," ").concat(c);t[l]=c+1;var d=s(m),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(r[d].references++,r[d].updater(u)):r.push({identifier:m,updater:g(u,n),references:1}),a.push(m)}return a}function c(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var m,d=(m=[],function(e,n){return m[e]=n,m.filter(Boolean).join("\n")});function u(e,n,t,a){var i=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var o=document.createTextNode(i),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(o,r[n]):e.appendChild(o)}}function f(e,n,t){var a=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,h=0;function g(e,n){var t,a,i;if(n.singleton){var o=h++;t=p||(p=c(n)),a=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=c(n),a=f.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var i=s(t[a]);r[i].references--}for(var o=l(e,n),c=0;c<t.length;c++){var m=s(t[c]);0===r[m].references&&(r[m].updater(),r.splice(m,1))}t=o}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,'*{box-sizing:border-box}html,body{height:100%;padding:0px;margin:0px}body{color:#000;font:1rem Tahoma, sans-serif}.main-page-canvas{background:#F2CB05;min-height:100vh;padding:2rem;display:grid;grid-template-areas:"header"\r "."\r "nav";grid-template-rows:auto 1fr auto}.main-page-header{grid-area:header;display:flex;justify-content:flex-end;padding-top:1rem;z-index:100}@media only screen and (orientation: landscape){.main-page-header{padding-top:0rem}}.main-page-header .medal-icon{width:4rem;margin-right:1.5rem}.main-page-header .main-page-score{text-align:right;margin-top:-0.4rem}.main-page-header .main-page-score h1,.main-page-header .main-page-score h2{font-weight:normal;margin:0;padding:0}.main-page-header .main-page-score h1{font-size:1.5rem}.main-page-header .main-page-score h2{font-size:3rem}.glory-text{color:#bf1797}.glory-icon{fill:#bf1797}.fade-in{visibility:visible;opacity:1;transition:opacity 2s linear}.fade-out{visibility:hidden;opacity:0;transition:visibility 0s 2s, opacity 2s linear}.manual-page-canvas{background:#F2CB05;min-height:100vh;padding:2rem;display:grid;grid-template-areas:"header"\r "article"\r "nav";grid-template-rows:auto 1fr auto}.manual-page-header{grid-area:header;display:flex;padding-top:1rem;z-index:100;justify-content:flex-start}@media only screen and (orientation: landscape){.manual-page-header{padding-top:0rem}}.manual-page-balls{margin:auto;grid-area:article;display:grid;grid-template-areas:"b1 b2"\r "b3 b4"\r "b5 b6";grid-template-rows:auto auto auto;justify-items:center;align-items:center;z-index:100}@media only screen and (orientation: landscape){.manual-page-balls{grid-template-areas:"b1 b2 b3 b4 b5 b6";grid-template-rows:auto}}@media only screen and (min-width: 1024px) and (orientation: landscape){.manual-page-balls{grid-template-areas:"b1 b2 b3" \r "b4 b5 b6";grid-template-rows:auto auto}}.manual-page-description{margin-left:1.5rem}.manual-page-description p{font-size:1rem;padding:0;margin:0}.manual-ball{margin:1.2rem;width:20vw;height:20vw;border-radius:50%;display:flex;justify-content:center;align-items:center;animation-duration:1s;animation-iteration-count:infinite;animation-name:manual-ball-animation}.manual-ball span{color:#000;font:1rem Tahoma, sans-serif;text-align:center}@media only screen and (orientation: landscape){.manual-ball{margin:1.0rem;width:15vh;height:15vh}}@media only screen and (min-width: 600px) and (orientation: portrait){.manual-ball span{font-size:1.2rem}}@media only screen and (min-width: 1024px) and (orientation: landscape){.manual-ball{margin:1.5rem}.manual-ball span{font-size:1.2rem}}.manual-page-balls .loss-5-points{grid-area:b1;animation-delay:-200ms}.manual-page-balls .score-5-points{grid-area:b2;animation-delay:-300ms}.manual-page-balls .score-5-points span{color:#fff}.manual-page-balls .score-1-point{grid-area:b5;animation-delay:-250ms}.manual-page-balls .loss-5-sec{grid-area:b4;animation-delay:-150ms}.manual-page-balls .score-5-sec{grid-area:b3;animation-delay:-100ms}.manual-page-balls .game-over{grid-area:b6;animation-delay:-50ms}.manual-page-balls .game-over span{color:#fff}@media only screen and (orientation: landscape){.manual-page-balls .game-over span{font-size:0.8rem}}@media only screen and (min-width: 600px) and (orientation: portrait){.manual-page-balls .game-over span{font-size:1.2rem}}@media only screen and (min-width: 1024px) and (orientation: landscape){.manual-page-balls .game-over span{font-size:1.2rem}}@keyframes manual-ball-animation{0%{transform:scale(1)}50%{transform:scale(1.3)}100%{transform:scale(1)}}.loss-5-points{background:#F2E205}.score-5-points{background:#bf1797}.score-1-point{background:#fff}.loss-5-sec{background:#1DF4F1}.score-5-sec{background:#DCF907}.game-over{background:#000}.game-play-canvas{background:#F2CB05;min-height:100vh}header.game-play-header{position:relative;padding:0;z-index:100}header.game-play-header .time-bar{background:#000;height:1vh;display:block;float:right}@media only screen and (orientation: landscape){header.game-play-header .time-bar{height:1vw}}header.game-play-header h1{margin:0;padding:0.4rem;font-size:1rem;font-weight:bold;display:block;text-align:right}.game-play-ball{border-radius:50%;position:fixed;z-index:10;animation-iteration-count:infinite;animation-name:game-play-ball-animation;animation-duration:1s}.missed-hit{animation-name:missed-hit-animation;animation-iteration-count:1;animation-duration:500ms}.ballseye-hit{animation-name:ballseye-hit-animation;animation-iteration-count:1;animation-duration:300ms}.game-over-hit{animation-name:game-over-hit-animation;animation-iteration-count:1;animation-duration:3000ms;z-index:90}@keyframes game-play-ball-animation{0%{transform:scale(1)}50%{transform:scale(1.5)}100%{transform:scale(1)}}@keyframes missed-hit-animation{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes ballseye-hit-animation{0%{transform:scale(1)}100%{transform:scale(5);opacity:0}}@keyframes game-over-hit-animation{0%{transform:scale(1)}100%{transform:scale(100)}}.animate-score-1-point,.animate-score-5-points,.animate-loss-5-points,.animate-score-5-sec,.animate-loss-5-sec{animation-iteration-count:1;animation-duration:500ms}.animate-score-1-point{animation-name:score-1-point-animation}.animate-score-5-points{animation-name:score-5-points-animation}.animate-loss-5-points{animation-name:loss-5-points-animation}.animate-score-5-sec{animation-name:score-5-sec-animation;animation-duration:1000ms}.animate-loss-5-sec{animation-name:loss-5-sec-animation;animation-duration:1000ms}@keyframes score-1-point-animation{0%{color:#000;font-size:1rem}33%{color:#fff;font-size:3rem}100%{color:#000;font-size:1rem}}@keyframes score-5-points-animation{0%{color:#000;font-size:1rem}33%{color:#bf1797;font-size:3rem}100%{color:#000;font-size:1rem}}@keyframes loss-5-points-animation{0%{color:#000;font-size:1rem}33%{color:#F2E205;font-size:3rem}100%{color:#000;font-size:1rem}}@keyframes score-5-sec-animation{0%{background-color:#000}33%{background-color:#DCF907}100%{background-color:#000}}@keyframes loss-5-sec-animation{0%{background-color:#000}33%{background-color:#1DF4F1}100%{background-color:#000}}nav{grid-area:nav;z-index:100;padding-bottom:1rem}@media only screen and (orientation: landscape){nav{padding-bottom:0rem;width:60%;margin:0 auto}}@media only screen and (min-width: 1024px) and (orientation: landscape){nav{width:60%;margin:0 auto}}@media only screen and (min-width: 600px) and (orientation: portrait){nav{width:60%;margin:0 auto}}nav ul{list-style:none;display:flex;flex-flow:row wrap;justify-content:space-around;padding:0;margin:0}nav ul li a{width:4rem;display:block;padding:1rem}nav ul li a svg{fill:#000}nav ul li a svg path{fill:#000}.background-ball{background:#fff;border-radius:50%;position:fixed;z-index:10;animation-iteration-count:infinite}.ball-up{height:90vh;width:90vh;margin:-45vh;top:0;left:50%;animation-name:ball-up-animation;animation-duration:15s}@media only screen and (orientation: landscape){.ball-up{height:180vh;width:180vh;margin:-90vh;top:-27vh;left:0}}@media only screen and (min-width: 600px) and (orientation: portrait){.ball-up{height:108vh;width:108vh;margin:-54vh;top:-16.2vh;left:50%}}.ball-down{height:80vh;width:80vh;margin:-40vh;bottom:-20vh;right:10%;animation-name:ball-down-animation;animation-duration:10s;animation-delay:-3s}@media only screen and (orientation: landscape){.ball-down{height:160vh;width:160vh;margin:-80vh;bottom:-24vh;right:10%}}@media only screen and (min-width: 600px) and (orientation: portrait){.ball-down{height:104vh;width:104vh;margin:-52vh;bottom:-15.6vh;right:10%}}@keyframes ball-up-animation{0%{transform:scale(1)}50%{transform:scale(0.9)}100%{transform:scale(1)}}@keyframes ball-down-animation{0%{transform:scale(1)}50%{transform:scale(0.85)}100%{transform:scale(1)}}.ball-transition{height:8vh;width:8vh;margin:-4vh;bottom:50%;right:50%;background-color:white;animation-duration:2s;animation-iteration-count:1;z-index:100;display:none}.start-transition{animation-name:start-ball-transition-animation;display:block}.end-transition{animation-name:end-ball-transition-animation;display:block}@keyframes start-ball-transition-animation{0%{transform:scale(0)}50%{transform:scale(2)}100%{transform:scale(50)}}@keyframes end-ball-transition-animation{0%{transform:scale(50)}50%{transform:scale(2)}100%{transform:scale(0)}}\n',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var i=(r=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([i]).join("\n")}var r,s,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},function(e,n,t){"use strict";t.r(n);var a=-1,i=0,o=null,r=0,s=void 0,l=void 0,c=function(e,n){a=e,l=n,i=0,o=null,0,r=0,i=document.querySelector(".main-page-score__quantity"),s=window.requestAnimationFrame(m)},m=function e(n){var t,m,d,u;if(o||(o=n),d=0,u=-499/((m=a-10)-a),(t=r)<m?d=1:t>=m&&t<=a&&(d=u*t+(500-u*a)),n-o>=d&&r<a){if(0,o=null,r<30)r++;else if(r<a-10){var f=Math.round(.05*a-.5);f>50&&(f=50),r+f>a-10?r=a-10:r+=f}else r>=a-10&&(r+=1);i.textContent=r}if(s=window.requestAnimationFrame(e),r>=a&&(s=window.cancelAnimationFrame(s),"new-best-score"==l||"keep-best-score"==l)){var p=document.querySelector(".main-page-score > h1"),h=document.querySelector(".medal-icon"),g=document.querySelectorAll(".medal-icon path");i.classList.add("fade-out"),p.classList.add("fade-out"),g.forEach((function(e){e.classList.add("fade-out")})),i.addEventListener("transitionend",(function(){h.style.visibility="visible",i.classList.remove("fade-out"),p.classList.remove("fade-out"),g.forEach((function(e){e.classList.remove("fade-out")})),"new-best-score"==l&&(p.textContent="New best score:",i.classList.add("fade-in"),p.classList.add("fade-in"),g.forEach((function(e){e.classList.add("fade-in")})),i.classList.add("glory-text"),p.classList.add("glory-text"),g.forEach((function(e){e.classList.add("glory-icon")}))),"keep-best-score"==l&&(p.textContent="Best score:",i.classList.add("fade-in"),g.forEach((function(e){e.classList.add("fade-in")})),p.classList.add("fade-in"),c(localStorage.getItem("bestScore"),"stop"))}))}},d=function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()};function u(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){return!n||"object"!==f(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function v(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function y(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _(e,n,t){return n&&y(e.prototype,n),t&&y(e,t),e}var w=function(){return document.documentElement.clientWidth},S=function(){return document.documentElement.clientHeight},T=function(){return S()>w()},L=function(){function e(n){v(this,e),this.uniqueId="uid-".concat(this.generateUniqueID()),this.scoreToGet=null,this.timeToGet=null,this.diameter=this.generateRandomDiameter(),this.x=this.generateRandomPosition().x,this.y=this.generateRandomPosition().y,this.lifeTime=this.generateRandomLifeTime(),this.cssBallClass=n,this.initHTML(this.cssBallClass),this.ball=document.getElementById("".concat(this.uniqueId)),this.setUpCSS()}return _(e,[{key:"missedHit",value:function(){var e=this;this.ball.classList.add("missed-hit"),this.ball.addEventListener("animationend",(function(){e.ball.remove()}))}},{key:"ballsEyeHit",value:function(){var e=this;this.ball.classList.add("ballseye-hit"),this.ball.addEventListener("animationend",(function(){e.ball.remove()}))}},{key:"initHTML",value:function(e){var n=document.createElement("div");n.id=this.uniqueId,n.classList.add("game-play-ball",e),document.body.appendChild(n)}},{key:"setUpCSS",value:function(){this.ball.style.height="".concat(this.diameter,"px"),this.ball.style.width="".concat(this.diameter,"px"),this.ball.style.left="".concat(this.x,"px"),this.ball.style.bottom="".concat(this.y,"px"),this.ball.style.margin=-1*this.diameter/2}},{key:"generateRandomLifeTime",value:function(){return Math.floor(3e3*Math.random())+2e3}},{key:"generateUniqueID",value:function(){return Math.random().toString(36).substr(2,16)}},{key:"generateRandomPosition",value:function(){var e=w()-this.diameter,n=S()-this.diameter;return{x:Math.floor(Math.random()*e+this.diameter/2),y:Math.floor(Math.random()*n+this.diameter/2)}}},{key:"generateRandomDiameter",value:function(){var e=w()/10;return T||(e=S()/10),Math.floor(Math.random()*e+e)}}]),e}(),x=function(e){function n(){var e;return v(this,n),(e=p(this,h(n).call(this,"score-1-point"))).scoreToGet=1,e.lifeTime=2e3,e}return g(n,e),n}(L),M=function(e){function n(){var e;return v(this,n),(e=p(this,h(n).call(this,"score-5-points"))).scoreToGet=5,e.lifeTime=1e3,e}return g(n,e),n}(L),k=function(e){function n(){var e;return v(this,n),(e=p(this,h(n).call(this,"loss-5-points"))).scoreToGet=-5,e.lifeTime=3e3,e}return g(n,e),n}(L),E=function(e){function n(){var e;return v(this,n),(e=p(this,h(n).call(this,"score-5-sec"))).timeToGet=5,e.lifeTime=1e3,e}return g(n,e),n}(L),C=function(e){function n(){var e;return v(this,n),(e=p(this,h(n).call(this,"loss-5-sec"))).timeToGet=-5,e.lifeTime=3e3,e}return g(n,e),n}(L),P=function(e){function n(){var e;return v(this,n),(e=p(this,h(n).call(this,"game-over"))).lifeTime=5e3,e}return g(n,e),_(n,[{key:"gameOverHit",value:function(){this.ball.classList.add("game-over-hit"),A()}}]),n}(L),O=function(e){var n=document.querySelector(".game-play-score > h1");z.points+=e,n.textContent=z.points;var t=null;switch(e){case 5:t="animate-score-5-points";break;case-5:t="animate-loss-5-points"}n.classList.add(t),n.addEventListener("animationend",(function(){n.classList.remove(t)}))},G=function(){var e=w(),n=z.time,t=Math.round(n*e/j.initGameTime),a=document.querySelector(".time-bar");z.timeBarWidth=t>e?e:t,a.style.width=z.timeBarWidth},N=function(e){for(var n=new Array,t=j.extraChopTime,a=0;a<e;a++){var i=1e3*(j.initGameTime+t*z.extraTimeNo),o=Math.floor(Math.random()*t*1e3)+i-1e3*t;n.push(o)}return n.sort((function(e,n){return e-n}))},q=function(e){for(var n=1e3*j.chopTime,t=new Array,a=0,i=0;i<j.chopNo;i++){for(var o=0;o<e;o++){var r=Math.floor(Math.random()*n)+a;t.push(r)}a+=n}return t.sort((function(e,n){return e-n}))},j={initGameTime:60,chopTime:15,chopNo:4,extraChopTime:5,score_1_PointNo:48,score_5_PointsNo:6,loss_5_PointsNo:6,score_5_SecondsNo:1,loss_5_SecondsNo:1,score_1_PointNo_5_secondsChop:16,score_5_PointsNo_5_secondsChop:2,loss_5_PointsNo_5_secondsChop:2,score_5_SecondsNo_5_secondsChop:1,loss_5_SecondsNo_5_secondsChop:1},z={points:0,time:j.initGameTime,extraTime:0,extraTimeNo:0,timeBarWidth:null,ballsArray:void 0,score_1_PointMoments:void 0,score_5_PointsMoments:void 0,loss_5_PointsMoments:void 0,score_5_SecondsMoments:void 0,loss_5_SecondsMoments:void 0,gameOverMoment:void 0,isGameOverBallCreated:null,allowToScore:!0,animationID:void 0,isGameOver:null,timeGameStarted:null,counterTimeForLoop:null},I=function(e,n,t){e.forEach((function(e,a,i){if(n>=e){var o=null;switch(t){case"+1p":o=new x;break;case"+5p":o=new M;break;case"-5p":o=new k;break;case"+5s":o=new E;break;case"-5s":o=new C}z.ballsArray.push(o),i.splice(a,1)}}))},F=function(e){var n=e.target.className,t=e.target.id;n.includes("game-play-ball")&&z.allowToScore&&z.ballsArray.forEach((function(e,a,i){t===e.uniqueId&&(n.includes("loss-5-sec")||n.includes("score-5-sec")?(!function(e){var n=document.querySelector(".time-bar");z.extraTime+=e;var t=null;switch(e){case 5:t="animate-score-5-sec",z.extraTimeNo++,z.score_1_PointMoments=[].concat(u(z.score_1_PointMoments),u(N(j.score_1_PointNo_5_secondsChop))),z.score_5_PointsMoments=[].concat(u(z.score_5_PointsMoments),u(N(j.score_5_PointsNo_5_secondsChop))),z.loss_5_PointsMoments=[].concat(u(z.loss_5_PointsMoments),u(N(j.loss_5_PointsNo_5_secondsChop))),z.score_5_SecondsMoments=[].concat(u(z.score_5_SecondsMoments),u(N(j.score_5_SecondsNo_5_secondsChop))),z.loss_5_SecondsMoments=[].concat(u(z.loss_5_SecondsMoments),u(N(j.loss_5_SecondsNo_5_secondsChop))),z.isGameOverBallCreated&&(z.gameOverMoment=N(1),z.isGameOverBallCreated=!1);break;case-5:t="animate-loss-5-sec"}n.classList.add(t),n.addEventListener("animationend",(function(){n.classList.remove(t)}))}(e.timeToGet),e.ballsEyeHit(),n.includes("loss-5-sec")?window.navigator.vibrate(300):window.navigator.vibrate([50,10,50,10,50])):n.includes("loss-5-points")||n.includes("score-5-points")?(O(e.scoreToGet),e.ballsEyeHit(),window.navigator.vibrate([100,30,100]),n.includes("loss-5-points")?window.navigator.vibrate(300):window.navigator.vibrate([50,10,50,10,50])):n.includes("score-1-point")?(O(e.scoreToGet),e.ballsEyeHit(),window.navigator.vibrate(70)):n.includes("game-over")&&e.gameOverHit(),i.splice(a,1))}))},A=function(){z.animationID=window.cancelAnimationFrame(z.animationID);var e=document.querySelector(".ball-transition");z.allowToScore=!1,z.isGameOver=!0,B(),localStorage.setItem("lastScore",z.points),e.classList.add("start-transition"),e.addEventListener("animationend",(function(){e.classList.remove("start-transition"),document.body.innerHTML="",U()}))},H=function e(n){if(!z.isGameOver&&z.time>0){z.timeGameStarted||(z.timeGameStarted=(new Date).getTime()),z.counterTimeForLoop||(z.counterTimeForLoop=(new Date).getTime());var t=(new Date).getTime()-z.timeGameStarted,a=(new Date).getTime()-z.counterTimeForLoop;z.time=j.initGameTime-t/1e3+z.extraTime,G(),a>=250&&(z.ballsArray.forEach((function(e,n,t){e.lifeTime=e.lifeTime-250})),z.counterTimeForLoop=null),z.ballsArray.forEach((function(e,n,t){e.lifeTime<=0&&(e.missedHit(),t.splice(n,1))})),I(z.score_1_PointMoments,t,"+1p"),I(z.score_5_PointsMoments,t,"+5p"),I(z.loss_5_PointsMoments,t,"-5p"),I(z.score_5_SecondsMoments,t,"+5s"),I(z.loss_5_SecondsMoments,t,"-5s"),t>=z.gameOverMoment&&!z.isGameOverBallCreated&&(z.isGameOverBallCreated=!0,z.ballsArray.push(new P)),z.time<=0?A():z.animationID=window.requestAnimationFrame(e)}},B=function(){window.removeEventListener("orientationchange",G),window.removeEventListener("resize",G),document.body.removeEventListener("touchstart",F)},D=function(){z.points=0,z.time=j.initGameTime,z.extraTime=0,z.extraTimeNo=0,z.timeBarWidth=null,z.ballsArray=new Array,z.score_1_PointMoments=u(q(j.score_1_PointNo)),z.score_5_PointsMoments=u(q(j.score_5_PointsNo)),z.loss_5_PointsMoments=u(q(j.loss_5_PointsNo)),z.score_5_SecondsMoments=u(q(j.score_5_SecondsNo)),z.loss_5_SecondsMoments=u(q(j.loss_5_SecondsNo)),z.gameOverMoment=Math.floor(Math.random()*(j.initGameTime-j.chopTime)*1e3)+1e3*j.chopTime,z.isGameOverBallCreated=null,z.allowToScore=!0,z.animationID=void 0,z.isGameOver=null,z.timeGameStarted=null,z.counterTimeForLoop=null},R=function e(){var n=document.querySelector(".ball-transition");n.removeEventListener("animationend",e),n.classList.remove("end-transition"),window.addEventListener("orientationchange",G),window.addEventListener("resize",G),document.body.addEventListener("touchstart",F),D(),z.animationID=window.requestAnimationFrame(H)},U=function(){var e=new XMLHttpRequest;e.open("GET","assets/html-pages/main-page.html",!0),e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){this.readyState,document.body.innerHTML="",document.body.innerHTML=this.responseText;var e,n,t=document.querySelector(".full-screen"),a=document.querySelector(".info"),i=document.querySelector(".play"),o=document.querySelector(".ball-transition"),r=document.querySelector(".main-page-score > h1"),s=document.querySelector(".medal-icon"),l=0,m=0;localStorage.getItem("bestScore")?(m=parseInt(localStorage.getItem("bestScore")),n="was-here-before",r.textContent="Best score:",e=m,localStorage.getItem("lastScore")&&(l=parseInt(localStorage.getItem("lastScore")),s.style.visibility="hidden",r.textContent="Your score:",e=l,l>m?(localStorage.setItem("bestScore",l),n="new-best-score"):n="keep-best-score",localStorage.removeItem("lastScore"))):(localStorage.setItem("bestScore",m),n="first-time-here",r.textContent="Best score:",e=m),setTimeout((function(){c(e,n)}),500),o.classList.add("end-transition"),o.addEventListener("animationend",(function(){o.classList.remove("end-transition"),t.addEventListener("click",d),a.addEventListener("click",(function(){o.classList.add("start-transition"),o.addEventListener("animationend",(function(){o.classList.remove("start-transition"),document.body.innerHTML="",function(){var e=new XMLHttpRequest;e.open("GET","assets/html-pages/manual-page.html",!0),e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){this.readyState,document.body.innerHTML="",document.body.innerHTML=this.responseText;var e=document.querySelector(".go-back"),n=document.querySelector(".ball-transition");n.classList.add("end-transition"),n.addEventListener("animationend",(function(){n.classList.remove("end-transition"),e.addEventListener("click",(function(){n.classList.add("start-transition"),n.addEventListener("animationend",(function(){n.classList.remove("start-transition"),document.body.innerHTML="",U()}))}))}))}},e.send()}()}))})),i.addEventListener("click",(function(){o.classList.add("start-transition"),o.addEventListener("animationend",(function(){o.classList.remove("start-transition"),document.body.innerHTML="",function(){var e=new XMLHttpRequest;e.open("GET","assets/html-pages/game-play-page.html",!0),e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){this.readyState,document.body.innerHTML="",document.body.innerHTML=this.responseText;var e=document.querySelector(".ball-transition");e.classList.add("end-transition"),e.addEventListener("animationend",R)}},e.send()}()}))}))}))}},e.send()};U();t(0)}]);