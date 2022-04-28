!function(){"use strict";var o=window.location,n=window.document,p=n.currentScript,l=p.getAttribute("data-api")||new URL(p.src).origin+"/api/event",s=p&&p.getAttribute("data-exclude").split(",");function c(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag")}catch(e){}if(s)for(var i=0;i<s.length;i++)if("pageview"===e&&o.pathname.match(new RegExp("^"+s[i].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return c("exclusion rule");var a={};a.n=e,a.u=o.href,a.d=p.getAttribute("data-domain"),a.r=n.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props);var r=new XMLHttpRequest;r.open("POST",l,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&t&&t.callback&&t.callback()}}}function t(e){for(var t=e.target,i="auxclick"===e.type&&2===e.which,a="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==o.host&&((i||a)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!a||(setTimeout(function(){o.href=t.href},150),e.preventDefault()))}n.addEventListener("click",t),n.addEventListener("auxclick",t);var i=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],a=p.getAttribute("file-types"),r=p.getAttribute("add-file-types"),u=a&&a.split(",")||r&&r.split(",").concat(i)||i;function d(e){for(var t=e.target,i="auxclick"===e.type&&2===e.which,a="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;var r,n=t&&t.href&&t.href.split("?")[0];n&&(r=n.split(".").pop(),u.some(function(e){return e===r}))&&((i||a)&&plausible("File Download",{props:{url:n}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!a||(setTimeout(function(){o.href=t.href},150),e.preventDefault()))}n.addEventListener("click",d),n.addEventListener("auxclick",d);var f=window.plausible&&window.plausible.q||[];window.plausible=e;for(var w,h=0;h<f.length;h++)e.apply(this,f[h]);function g(){w!==o.pathname&&(w=o.pathname,e("pageview"))}var v,m=window.history;m.pushState&&(v=m.pushState,m.pushState=function(){v.apply(this,arguments),g()},window.addEventListener("popstate",g)),"prerender"===n.visibilityState?n.addEventListener("visibilitychange",function(){w||"visible"!==n.visibilityState||g()}):g()}();