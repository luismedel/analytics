!function(){"use strict";var i=window.location,o=window.document,e=window.localStorage,l=o.currentScript,c=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event",p=e&&e.plausible_ignore,s=l&&l.getAttribute("data-exclude").split(",");function u(e){console.warn("Ignoring Event: "+e)}function t(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){if("true"==p)return u("localStorage flag");if(s)for(var a=0;a<s.length;a++)if("pageview"==e&&i.pathname.match(new RegExp("^"+s[a].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return u("exclusion rule");var n={};n.n=e,n.u=i.href,n.d=l.getAttribute("data-domain"),n.r=o.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=JSON.stringify(t.props)),n.h=1;var r=new XMLHttpRequest;r.open("POST",c,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(n)),r.onreadystatechange=function(){4==r.readyState&&t&&t.callback&&t.callback()}}}function a(e){for(var t=e.target,a="auxclick"==e.type&&2==e.which,n="click"==e.type;t&&(void 0===t.tagName||"a"!=t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==i.host&&((a||n)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!n||(setTimeout(function(){i.href=t.href},150),e.preventDefault()))}o.addEventListener("click",a),o.addEventListener("auxclick",a);var n=window.plausible&&window.plausible.q||[];window.plausible=t;for(var r=0;r<n.length;r++)t.apply(this,n[r])}();