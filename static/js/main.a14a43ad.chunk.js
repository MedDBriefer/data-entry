(this["webpackJsonp@meddbriefer/data-entry"]=this["webpackJsonp@meddbriefer/data-entry"]||[]).push([[0],{14:function(e,t,n){var r,a;self,e.exports=(r=n(2),a=n(15),function(){var e={162:function(e,t,n){e.exports=n(47)},779:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===s)for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},47:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof b?t:b,s=Object.create(a.prototype),i=new P(r||[]);return s._invoke=function(e,t,n){var r=d;return function(a,s){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===a)throw s;return I()}for(n.method=a,n.arg=s;;){var i=n.delegate;if(i){var o=N(i,n);if(o){if(o===h)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?f:m,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,i),s}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",m="suspendedYield",p="executing",f="completed",h={};function b(){}function j(){}function y(){}var v={};v[s]=function(){return this};var x=Object.getPrototypeOf,g=x&&x(x(A([])));g&&g!==n&&r.call(g,s)&&(v=g);var O=y.prototype=b.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(a,s,i,o){var c=u(e[a],e,s);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,o)}),(function(e){n("throw",e,i,o)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,o)}))}o(c.arg)}var a;this._invoke=function(e,r){function s(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(s,s):s()}}function N(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,N(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=u(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,h;var s=a.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function A(e){if(e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:I}}function I(){return{value:t,done:!0}}return j.prototype=O.constructor=y,y.constructor=j,j.displayName=c(y,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,o,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},w(E.prototype),E.prototype[i]=function(){return this},e.AsyncIterator=E,e.async=function(t,n,r,a,s){void 0===s&&(s=Promise);var i=new E(l(t,n,r,a),s);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(O),c(O,o,"Generator"),O[s]=function(){return this},O.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return o.type="throw",o.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var s=a;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=e,i.arg=t,s?(this.method="next",this.next=s.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}},297:function(e){"use strict";e.exports=r},146:function(e){"use strict";e.exports=a}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t,n){return function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,s=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}return n}}(t,n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(s),n.d(s,{AuthContext:function(){return i},AuthFlow:function(){return v},AuthProvider:function(){return o},ForgotPasswordForm:function(){return y},LoginForm:function(){return b},PrivateRoute:function(){return x},RegistrationForm:function(){return j}});var r=n(297),a=n.n(r),i=a().createContext(),o=function(e){var n=e.auth,s=e.children,o=t((0,r.useState)(!1),2),c=o[0],l=o[1],u=t((0,r.useState)(null),2),d=u[0],m=u[1],p=t((0,r.useState)(!0),2),f=p[0],h=p[1],b=t((0,r.useState)(""),2),j=b[0],y=b[1],v=t((0,r.useState)("signin"),2),x=v[0],g=v[1],O=t((0,r.useState)(""),2),w=O[0],E=O[1],N=t((0,r.useState)(""),2),S=N[0],k=N[1],P=t((0,r.useState)(""),2),A=P[0],I=P[1];return(0,r.useEffect)((function(){c||n.onAuthStateChanged((function(e){m(e),h(!1),l(!0)}))}),[]),f?a().createElement(a().Fragment,null,"Loading..."):a().createElement(i.Provider,{value:{auth:n,currentUser:d,authMsg:j,setAuthMsg:y,registerErrorMsg:w,setRegisterErrorMsg:E,registerUserWithEmailAndPassword:function(e,t){n.createUserWithEmailAndPassword(e,t).then((function(){setErrorMsg("")})).catch((function(e){"auth/email-already-in-use"===e.code?E("An account already exists with that email address"):E(JSON.stringify(e))}))},loginError:S,setLoginError:k,loginUserWithEmailAndPassword:function(e,t){n.signInWithEmailAndPassword(e,t).then((function(){k("")})).catch((function(e){"auth/wrong-password"===e.code?k("Incorrect Password. Try again."):k(JSON.stringify(e))}))},passwdResetError:A,setPasswdResetError:I,sendOutPasswordReset:function(e){n.sendPasswordResetEmail(e).then((function(){y("You should soon recieve an email with a password reset link it. After reseting you password, you will be able to sign in."),g("signin")})).catch((function(e){"auth/user-not-found"===e.code?I("Sorry, we have no record of a user with your email address"):I(JSON.stringify(e))}))},currAuthComponent:x,setCurrAuthComponent:g,signOutUser:function(){n.signOut()}}},s)};function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=n(146);function u(e,t,n,r,a,s,i){try{var o=e[s](i),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,a)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){u(s,r,a,i,o,"next",e)}function o(e){u(s,r,a,i,o,"throw",e)}i(void 0)}))}}var m=n(162),p=n.n(m),f=n(779),h=n.n(f),b=function(){var e=(0,r.useContext)(i),t=e.loginError,n=(e.setLoginError,e.loginUserWithEmailAndPassword),s=e.setCurrAuthComponent,o=(0,r.useCallback)(function(){var e=d(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),s("forgot-passwd"),console.log("forgot my password");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),c=(0,r.useCallback)(function(){var e=d(p().mark((function e(t){var r,a,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=t.target.elements,a=r.email,s=r.password,n(a.value,s.value);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return a().createElement("div",null,a().createElement("form",{onSubmit:c},a().createElement("div",{className:"container"},a().createElement("div",{className:"row"},a().createElement("h3",null,"Sign In")),a().createElement("div",{className:"row"},a().createElement("label",{htmlFor:"email",className:"col-sm-2 col-form-label"},"Email address"),a().createElement("div",{className:"col-sm-10"},a().createElement("input",{id:"email",name:"email",type:"email",className:"form-control",placeholder:"Enter email",required:!0}))),a().createElement("div",{className:"row"},a().createElement("label",{htmlFor:"password",className:"col-sm-2 col-form-label"},"Password"),a().createElement("div",{className:"col-sm-10"},a().createElement("input",{id:"password",name:"password",type:"password",className:"form-control",placeholder:"Enter password",required:!0}))),a().createElement("div",{className:h()("row")},a().createElement("p",{className:"text-danger"},t)),a().createElement("button",{type:"submit",className:"btn btn-primary"},"Sign In"),a().createElement("button",{type:"button",className:"btn btn-link",onClick:o},"I forgot my Password"))))},j=function(){var e=(0,r.useContext)(i),t=e.registerErrorMsg,n=(e.setRegisterErrorMsg,e.registerUserWithEmailAndPassword),s=e.setCurrAuthComponent,o=(0,r.useCallback)(function(){var e=d(p().mark((function e(t){var r,a,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=t.target.elements,a=r.email,s=r.password,n(a.value,s.value);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return a().createElement("div",null,a().createElement("form",{onSubmit:o},a().createElement("div",{className:"container"},a().createElement("div",{className:"row"},a().createElement("h3",null,"Sign up for MedDBriefer")),a().createElement("div",{className:"row"},a().createElement("label",{htmlFor:"displayName",className:"col-sm-3 col-form-label"},"Display Name"),a().createElement("div",{className:"col-sm-9"},a().createElement("input",{className:"form-control",id:"displayName",name:"displayName",type:"text",placeholder:"example: John",required:!0}))),a().createElement("div",{className:"row"},a().createElement("label",{htmlFor:"emailAddress",className:"col-sm-3 col-form-label"},"Email"),a().createElement("div",{className:"col-sm-9"},a().createElement("input",{className:"form-control",id:"emailAddress",name:"email",type:"email",placeholder:"example: john.doe@gmail.com",required:!0}))),a().createElement("div",{className:"row"},a().createElement("label",{htmlFor:"password",className:"col-sm-3 col-form-label"},"Password"),a().createElement("div",{className:"col-sm-9"},a().createElement("input",{className:"form-control",id:"password",name:"password",type:"password",placeholder:"Password",required:!0}))),a().createElement("div",{className:"row"},a().createElement("label",{htmlFor:"confirmPassword",className:"col-sm-3 col-form-label"},"Confirm Password"),a().createElement("div",{className:"col-sm-9"},a().createElement("input",{className:"form-control",id:"confirmPassword",name:"confirmPassword",type:"password",placeholder:"Password",required:!0}))),a().createElement("div",{className:"row"},a().createElement("p",{className:"text-danger"},t)),a().createElement("button",{className:"btn btn-primary",type:"submit"},"Sign Up"),a().createElement("button",{type:"button",className:"btn btn-link",onClick:function(e){e.preventDefault(),s("signin"),console.log("I already have an account")}},"I already have an account."))))},y=function(){var e=(0,r.useContext)(i),t=e.sendOutPasswordReset,n=e.passwdResetError,s=(e.setPasswdResetError,e.setCurrAuthComponent);return a().createElement("div",null,a().createElement("form",{onSubmit:function(e){e.preventDefault();var n=e.target.elements.email;t(n.value)}},a().createElement("div",{className:"container"},a().createElement("div",{className:"row"},a().createElement("h3",null,"MedDBriefer Password Reset Form")),a().createElement("div",{className:"row"},a().createElement("label",{htmlFor:"email",className:"col-sm-1 col-form-label"},"Email"),a().createElement("div",{className:"col-sm-11"},a().createElement("input",{id:"email",name:"email",type:"email",className:"form-control",required:!0}))),a().createElement("div",{className:h()("row")},a().createElement("p",{className:"text-danger"},n)),a().createElement("div",{className:"row"},a().createElement("button",{type:"submit",className:"btn btn-primary"},"Send Password Reset Email"),a().createElement("button",{type:"button",className:"btn btn-link",onClick:function(e){e.preventDefault(),s("signin")}},"I remembered my password!")))))},v=function(e){var t=e.heading,n=void 0===t?"You must be logged in to access this page":t,s=(0,r.useContext)(i).currAuthComponent;return a().createElement("div",null,a().createElement("h3",null,n),function(){switch(s){case"signin":return a().createElement(b,null);case"registration":return a().createElement(j,null);case"forgot-passwd":return a().createElement(y,null);default:return a().createElement("div",null,s)}}())},x=function(e){var t=e.component,n=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["component"]),s=(0,r.useContext)(i).currentUser;return a().createElement(l.Route,c({},n,{render:function(e){return s?a().createElement(t,e):a().createElement(v,null)}}))}}(),s}())},32:function(e){e.exports=JSON.parse('[{"id":"scene-size-up","type":"heading","label":"Scene Size-Up"},{"id":"assess-scene-safety","type":"assessment","label":"Determines the scene/situation is safe"},{"id":"assess-injury-mechanism","type":"assessment","label":"Determines the mechanism of injury/nature of illness"},{"id":"assess-num-patients","type":"assessment","label":"Determines the number of patients"},{"id":"request-addl-help","type":"assessment","label":"Requests additional help if necessary"},{"id":"stabilizes-spine","type":"intervention","label":"Stabilizes or directs assistant to stabilize the cervical spine, as indicated"},{"id":"general-assessment","type":"heading","label":"General Impression and LOC"},{"id":"verbalizes-patient-condition","type":"assessment","label":"Verbalizes general impression of the patient"},{"id":"determines-loc","type":"assessment","label":"Determines responsiveness/level of consciousness"},{"id":"determines-life-threats","type":"assessment","label":"Determines chief complaint/apparent life-threats"},{"id":"airway","type":"heading","label":"Airway"},{"id":"assess-airway","type":"assessment","label":"Opens and assesses airway"},{"id":"manages-airway","type":"intervention","label":"Inserts adjunct as indicated"},{"id":"breathing","type":"heading","label":"Breathing"},{"id":"assess-breathing","type":"assessment","label":"Assess breathing"},{"id":"assess-ventilation","type":"assessment","label":"Assess adequate ventilation"},{"id":"oxygen-therapy","type":"intervention","label":"Initiates appropriate oxygen therapy"},{"id":"manage-breathing-injury","type":"intervention","label":"Manages any injury which may compromise breathing/ventilation"},{"id":"circulation","type":"heading","label":"Circulation"},{"id":"assess-pulse","type":"assessment","label":"Checks pulse"},{"id":"assess-skin","type":"assessment","label":"Assess skin [either skin color, temperature, or condition]"},{"id":"assess-bleeding","type":"assessment","label":"Assesses for major bleeding"},{"id":"control-bleeding","type":"intervention","label":"Manages major bleeding if present"},{"id":"control-shock","type":"intervention","label":"Initiates shock management"},{"id":"transport-decision","type":"heading","label":"Transport Priority"},{"id":"transport-priority","type":"intervention","label":"Identifies priority patients/makes transport decision based upon calculated GCS"},{"id":"history-taking","type":"heading","label":"History Taking"},{"id":"obtains-vitals","type":"assessment","label":"Obtains, or directs assistant to obtain, baseline vital signs"},{"id":"attempt-obtain-sample","type":"assessment","label":"Attempts to obtain SAMPLE history"},{"id":"head","type":"heading","label":"Head"},{"id":"assess-mouth-nose-face","type":"assessment","label":"Inspects mouth, nose, and assesses facial area"},{"id":"assess-scape-ears","type":"assessment","label":"Inspects and palpates scalp and ears"},{"id":"assess-perrl","type":"assessment","label":"Assesses eyes for PERRL"},{"id":"neck","type":"heading","label":"Neck"},{"id":"assess-trachea","type":"assessment","label":"Checks position of trachea"},{"id":"assess-jugular","type":"assessment","label":"Checks jugular veins"},{"id":"assess-spine","type":"assessment","label":"Palpates cervical spine"},{"id":"chest","type":"heading","label":"Chest"},{"id":"inspects-chest","type":"assessment","label":"Inspects chest"},{"id":"palpate-chest","type":"assessment","label":"Palpates chest"},{"id":"auscultate-chest","type":"assessment","label":"Auscultates chest"},{"id":"abdomen-pelvis","type":"heading","label":"Abdomen/pelvis"},{"id":"assess-abdomen","type":"assessment","label":"Inspects & palpates abdomen"},{"id":"assess-pelvis","type":"assessment","label":"Assesses pelvis"},{"id":"assess-genitalia","type":"assessment","label":"Verbalizes assessment of genitalia/perineum as needed"},{"id":"lower-extremities","type":"heading","label":"Lower extremities"},{"id":"assess-right-leg","type":"assessment","label":"Inspects, palpates, and assesses motor, sensory, and distal circulatory functions on right lower extremity"},{"id":"assess-left-leg","type":"assessment","label":"Inspects, palpates, and assesses motor, sensory, and distal circulatory functions on left lower extremity"},{"id":"upper-extremities","type":"heading","label":"Upper extremities"},{"id":"assess-right-arm","type":"assessment","label":"Inspects, palpates, and assesses motor, sensory, and distal circulatory functions on right upper extremity"},{"id":"assess-left-arm","type":"assessment","label":"Inspects, palpates, and assesses motor, sensory, and distal circulatory functions on left upper extremity"},{"id":"posterior-thorax-lumbar-buttocks","type":"heading","label":"Posterior thorax, lumbar, and buttocks"},{"id":"assess-posterior-thorax","type":"assessment","label":"Inspects and palpates posterior thorax"},{"id":"assess-lumbar-buttocks","type":"assessment","label":"Inspects and palpates lumbar and buttocks area"}]')},38:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(30),s=n.n(a),i=n(15),o=n(5),c=(n(38),n(14)),l=n(1),u=function(e){var t=e.user,n=e.signOut,r=Object(o.k)(),a=Object(o.l)();return Object(l.jsxs)("div",{className:"title-bar",children:[Object(l.jsx)("h1",{children:"MedDBriefer"}),"/"!==a.pathname&&Object(l.jsx)("button",{type:"button",className:"back-bttn",onClick:function(){return r.goBack()},children:"Back"}),t&&Object(l.jsx)("button",{type:"button",className:"sign-out-bttn",onClick:function(){return n()},children:"Sign out"})]})},d=function(){var e=Object(r.useContext)(c.AuthContext),t=e.currentUser,n=e.signOutUser;return t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{user:t,signOut:n}),Object(l.jsxs)("div",{className:"nav-wrapper",children:[Object(l.jsx)(i.Link,{to:"/scenarios",children:Object(l.jsx)("div",{className:"home-nav-button",children:"Scenario Forms"})}),Object(l.jsx)(i.Link,{to:"/intervention-form",children:Object(l.jsx)("div",{className:"home-nav-button",children:"Intervention Forms"})})]})]}):Object(l.jsx)(c.AuthFlow,{heading:null})},m=n(20),p=n(10),f=n.n(p),h=n(16),b=n(18),j=n(23),y=n.n(j),v=function(e){var t=e.scenario,n=e.edit,r=t.info,a="patientInformation";return Object(l.jsxs)("div",{id:"basic-info",className:"info-wrapper",children:[Object(l.jsx)("h1",{children:"Basic Information:"}),Object(l.jsxs)("label",{children:["Scenario Title:",n?Object(l.jsx)("input",{id:"name",type:"text",value:"".concat(t.name," (locked)"),readOnly:!0}):Object(l.jsx)("input",{id:"name",type:"text",defaultValue:t.name})]}),Object(l.jsxs)("label",{children:["Instructor Info:",Object(l.jsx)("textarea",{id:"info-instructorInformation",defaultValue:r.instructorInformation})]}),Object(l.jsxs)("label",{children:["Dispatch Info:",Object(l.jsx)("textarea",{id:"info-dispatchInfo",defaultValue:r.dispatchInfo})]}),Object(l.jsxs)("label",{children:["Scene assessment:",Object(l.jsx)("textarea",{id:"info-sceneAssessment",defaultValue:r.sceneAssessment})]}),Object(l.jsxs)("label",{children:["Maximum time for scenario:",Object(l.jsx)("input",{id:"info-maxTime",type:"number",placeholder:"minutes",defaultValue:r.maxTime})]}),Object(l.jsx)("h2",{children:"Patient Info:"}),Object(l.jsxs)("div",{id:"pt-info",children:[Object(l.jsxs)("label",{children:["Moulage:",Object(l.jsx)("input",{type:"text",id:"info-".concat(a,"-moulage"),defaultValue:r.patientInformation.moulage})]}),Object(l.jsxs)("label",{children:["Position:",Object(l.jsx)("input",{type:"text",id:"info-".concat(a,"-position"),defaultValue:r.patientInformation.position})]}),Object(l.jsxs)("label",{children:["Actions:",Object(l.jsx)("input",{type:"text",id:"info-".concat(a,"-actions"),defaultValue:r.patientInformation.actions})]})]})]})},x=function(e){var t=e.item;return Object(l.jsx)("div",{className:"list-item header-item",children:t.label})},g=function(e){var t,n=e.item,r=e.scenario.interventions;return Object(l.jsxs)("label",{children:["'".concat(n.label,"':"),Object(l.jsxs)("select",{id:"interventions-".concat(n.id),children:[Object(l.jsx)("option",{hidden:!0,children:null===(t=r[n.id])||void 0===t?void 0:t.toUpperCase()}),Object(l.jsx)("option",{value:"na",children:"NA"}),Object(l.jsx)("option",{value:"say",children:"SAY"}),Object(l.jsx)("option",{value:"do",children:"DO"})]})]})},O=function(e){var t=e.item,n=e.scenario.assessmentFindings;return Object(l.jsxs)("label",{children:["'".concat(t.label,"':"),Object(l.jsx)("input",{type:"text",id:"assessmentFindings-".concat(t.id),placeholder:"leave blank if N/A or unremarkable",defaultValue:n[t.id]})]})},w=function(e){var t=e.item,n=e.scenario;return"heading"===t.type?Object(l.jsx)(x,{item:t}):Object(l.jsx)("div",{className:"step-item",children:"assessment"===t.type?Object(l.jsx)(O,{item:t,scenario:n}):Object(l.jsx)(g,{item:t,scenario:n})})},E=n(32),N=function(e){var t=e.scenario;return Object(l.jsxs)("div",{id:"scenario-steps",children:[Object(l.jsx)("h1",{children:"Scenario Items"}),E.map((function(e){return Object(l.jsx)(w,{item:e,scenario:t},e.id)}))]})},S=function(e){var t=e.scenario,n=e.header,r=e.type,a="init"===r?"initialVitalSigns":"reassessmentVitals",s="initialVitalSigns"===a?null:r;return Object(l.jsxs)("div",{className:"vital-wrapper",children:[Object(l.jsxs)("h1",{children:[" ","".concat(n," Vitals:")," "]}),Object(l.jsxs)("div",{className:"vitals-box",children:[Object(l.jsx)(k,{label:"BP",prefix:a,suffix:s,scenario:t}),Object(l.jsx)(k,{label:"P",prefix:a,suffix:s,scenario:t}),Object(l.jsx)(k,{label:"R",prefix:a,suffix:s,scenario:t}),Object(l.jsx)(k,{label:"Skin",prefix:a,suffix:s,scenario:t}),Object(l.jsx)(k,{label:"Spo2",prefix:a,suffix:s,scenario:t}),Object(l.jsx)(k,{label:"ETCO2",prefix:a,suffix:s,scenario:t}),Object(l.jsx)(k,{label:"GCS",prefix:a,suffix:s,scenario:t}),Object(l.jsx)(k,{label:"Glucose",prefix:a,suffix:s,scenario:t}),Object(l.jsx)(k,{label:"Pain",prefix:a,suffix:s,scenario:t}),Object(l.jsx)(k,{label:"Temp",prefix:a,suffix:s,scenario:t})]})]})};function k(e){var t=e.scenario,n=e.label,r=e.prefix,a=e.suffix,s=a?"".concat(r,"-").concat(n,"-").concat(a):"".concat(r,"-").concat(n);return Object(l.jsxs)("label",{children:[n,":",Object(l.jsx)("input",{id:"".concat(s),type:"text",defaultValue:a?t[r][n][a]:t[r][n]})]})}var P=function(e){var t=e.scenario;return Object(l.jsxs)("div",{className:"info-box vitals",children:[Object(l.jsx)(S,{type:"init",header:"Initial",scenario:t}),Object(l.jsx)(S,{type:"goodVitals",header:"Good Reassessment",scenario:t}),Object(l.jsx)(S,{type:"badVitals",header:"Bad Reassessment",scenario:t})]})},A=function(e){var t=e.scenario.SAMPLE;return Object(l.jsxs)("div",{className:"info-box",id:"sample",children:[Object(l.jsx)("h1",{children:"SAMPLE:"}),Object(l.jsxs)("div",{className:"sample",children:[Object(l.jsxs)("label",{children:["S:",Object(l.jsx)("input",{type:"text",id:"SAMPLE-S",defaultValue:t.S})]}),Object(l.jsxs)("label",{children:["A:",Object(l.jsx)("input",{type:"text",id:"SAMPLE-A",defaultValue:t.A})]}),Object(l.jsxs)("label",{children:["M:",Object(l.jsx)("input",{type:"text",id:"SAMPLE-M",defaultValue:t.M})]}),Object(l.jsxs)("label",{children:["P:",Object(l.jsx)("input",{type:"text",id:"SAMPLE-P",defaultValue:t.P})]}),Object(l.jsxs)("label",{children:["L:",Object(l.jsx)("input",{type:"text",id:"SAMPLE-L",defaultValue:t.L})]}),Object(l.jsxs)("label",{children:["E:",Object(l.jsx)("input",{type:"text",id:"SAMPLE-E",defaultValue:t.E})]})]})]})},I=n(33),C=(n(45),n(49),I.a.initializeApp({apiKey:"AIzaSyBOgWAbXUGckpad2sk0IUo00hZsV4WxG0E",authDomain:"meddbriefer-68cd4.firebaseapp.com",projectId:"meddbriefer-68cd4",storageBucket:"meddbriefer-68cd4.appspot.com",messagingSenderId:"1087114796018",appId:"1:1087114796018:web:679fbab38dbf78af0ce96b",measurementId:"G-Q7QZKC9KHW"})),L=C.auth(),F=C.firestore(),M=function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.collection("scenarios").where("name","!=","blank-trauma").get();case 2:return t=e.sent,e.abrupt("return",t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.collection("scenarios").doc(t).get();case 2:return n=e.sent,e.abrupt("return",n.data());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.collection("scenarios").doc(t).delete();case 2:console.log(t,"permanently deleted.");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=(n(47),function(e){var t=Object(l.jsx)("p",{children:"Loading..."}),n=Object(r.useState)(null),a=Object(b.a)(n,2),s=a[0],i=a[1],c=Object(r.useState)(t),u=Object(b.a)(c,2),d=u[0],p=u[1],j=Object(r.useState)(!1),x=Object(b.a)(j,2),g=x[0],O=x[1],w=function(){var t=e.location.pathname.includes("/edit/"),n=e.location.pathname.replace("/edit/","").replaceAll("_"," ");return[t,n="/new-scenario"===n?"blank-trauma":n]}(),E=Object(b.a)(w,2),S=E[0],k=E[1],I=Object(o.k)();function C(e){var t,n;""===s.name.trim()||"blank-trauma"===s.name.trim()||s.name.includes("_")?alert("Scenario needs a new name! And cannot include underscores!"):window.confirm("All empty items will be filled with default information. Submit?")?(t=s.name,n=s,console.log("Publishing:",t),F.collection("scenarios").doc(t).set(n).then((function(){console.log("Succesfully published '".concat(t,"'.")),alert("Succesfully published '".concat(t,"'."))})).catch((function(e){console.log(e),alert("Unable to publish '".concat(t,"'."))})),I.push("/")):console.log("Submit cancelled.")}return Object(r.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(k);case 2:t=e.sent,i(t),O(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}g?p(Object(l.jsx)(v,{scenario:s,edit:S})):function(){e.apply(this,arguments)}()}),[g,k]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("nav",{id:"tab-selector",children:[Object(l.jsx)("div",{className:"tab-button",onClick:function(){return p(Object(l.jsx)(v,{scenario:s,edit:S}))},children:" Info "}),Object(l.jsx)("div",{className:"tab-button",onClick:function(){return p(Object(l.jsx)(A,{scenario:s}))},children:" Sample "}),Object(l.jsx)("div",{className:"tab-button",onClick:function(){return p(Object(l.jsx)(P,{scenario:s}))},children:" Vitals "}),Object(l.jsx)("div",{className:"tab-button",onClick:function(){return p(Object(l.jsx)(N,{scenario:s}))},children:" Steplist "}),Object(l.jsx)("button",{id:"submit-next",onClick:function(){return C()},children:" Submit \u2192 "})]}),Object(l.jsx)("form",{id:"scenario-form",className:"scenario-form",onChange:function(e){return function(e){var t,n=e.target.value,r=e.target.id,a=r.split("-");"assessmentFindings"===a[0]?a=[a[0],r.split("assessmentFindings-").slice(1).toString()]:"interventions"===a[0]&&(a=[a[0],r.split("interventions-").slice(1).toString()]);switch(a.length){case 1:t=y()(s,Object(m.a)({},a[0],{$set:n}));break;case 2:t=y()(s,Object(m.a)({},a[0],Object(m.a)({},a[1],{$set:n})));break;case 3:t=y()(s,Object(m.a)({},a[0],Object(m.a)({},a[1],Object(m.a)({},a[2],{$set:n}))));break;default:console.log("Path length:",a.length)}i(t)}(e)},children:d})]})}),D=function(){return Object(l.jsx)("h1",{children:"Intervention form"})},U=function(e){var t,n=e.item,r=Object(o.k)();return Object(l.jsxs)("div",{className:"list-scenario-item",children:[Object(l.jsx)("h1",{id:"title",children:n.name}),Object(l.jsx)("p",{children:n.scenarioType}),Object(l.jsxs)("p",{children:["Info: ",null!==(t=n.info.instructorInformation)&&void 0!==t?t:"Not given."]}),Object(l.jsx)("button",{type:"button",onClick:function(){return r.push("/edit/".concat(n.name.replaceAll(" ","_")))},children:"Edit"}),Object(l.jsx)("button",{type:"button",onClick:function(){return e=n.name,void(window.confirm("Are you sure you want to delete this scenario? This cannot be undone!")?(V(e),window.location.reload()):console.log("Delete of",e,"cancelled"));var e},children:"Delete"})]})};var T=function(){var e=Object(r.useState)(null),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(r.useContext)(c.AuthContext),i=s.currentUser,d=s.signOutUser,m=Object(l.jsx)("p",{children:"Loading..."}),p=Object(o.k)();return Object(r.useEffect)((function(){(function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{user:i,signOut:d}),Object(l.jsxs)("div",{className:"scenario-list",children:[Object(l.jsx)("h1",{id:"scenario-list-title",children:"Scenario List"}),Object(l.jsxs)("div",{className:"new-scenario-bttn list-scenario-item",onClick:function(){return p.push("/new-scenario")},children:[Object(l.jsx)("h1",{children:"+"}),Object(l.jsx)("p",{children:"Create a New Scenario"})]}),n?n.map((function(e){return Object(l.jsx)(U,{item:e},"".concat(e.name,"-list"))})):m]})]})},G=function(){return Object(l.jsx)(c.AuthProvider,{auth:L,onSignedInPath:"/home",onSignedOutPath:"/",children:Object(l.jsx)(i.HashRouter,{children:Object(l.jsxs)(o.g,{children:[Object(l.jsx)(o.d,{exact:!0,path:"/",component:d}),Object(l.jsx)(c.PrivateRoute,{exact:!0,path:"/scenarios",component:T}),Object(l.jsx)(c.PrivateRoute,{exact:!0,path:"/new-scenario",component:_}),Object(l.jsx)(c.PrivateRoute,{path:"/edit/",component:_}),Object(l.jsx)(c.PrivateRoute,{exact:!0,path:"/intervention-form",component:D})]})})})};s.a.render(Object(l.jsx)(G,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.a14a43ad.chunk.js.map