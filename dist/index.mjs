var r=function(r){return void 0===r&&(r=""),new Promise(function(n,t){try{n((r=r.toString().replace(/[^\d]/g,"")).replace(/(\d{3})(\d{1,3})(\d{0,3})(\d{0,2})/g,"$1.$2.$3-$4").slice(0,14))}catch(r){t(new Error("Error in function"))}})},n=function(r,n){void 0===r&&(r="");try{var t=(r=r.toString().replace(/[^\d]/g,"")).replace(/(\d{3})(\d{1,3})(\d{0,3})(\d{0,2})/g,"$1.$2.$3-$4").slice(0,14);return"function"==typeof n&&n(t),t}catch(r){throw new Error("Error in formatCpfSync: "+r)}},t=function(r,n){try{var t=r.target.value.toString().replace(/[^\d]/g,"").replace(/(\d{3})(\d{0,3})(\d{0,3})(\d{0,2})/g,function(r,n,t,e,o){var i="";return n&&(i+=n),t&&(i+="."+t),e&&(i+="."+e),o&&(i+="-"+o),i});return r.target.value=t.slice(0,14),"function"==typeof n?n(r):r}catch(r){return"function"==typeof n?n(""):""}},e=function(r){return void 0===r&&(r=""),r.replace(/[.-]/g,"")},o=function(r,n){return void 0===r&&(r=""),new Promise(function(t,o){try{var i=r?e(r):"";"function"==typeof n&&n(i),t(i)}catch(r){console.error("Error in clearFormatCpf:",r),o(new Error("Error in function"))}})},i=function(r,n){void 0===r&&(r="");try{var t=e(r);return"function"==typeof n&&n(t),t}catch(r){throw console.error("Error in clearFormatCpfSync:",r),new Error("Error in clearFormatCpfSync: "+r)}},c=function(r,n){return void 0===r&&(r=""),new Promise(function(t,e){try{var o=r.toString(),i=/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(o);"function"==typeof n&&n(i),t(i)}catch(r){e(new Error("Error in function"))}})},a=function(r,n){void 0===r&&(r="");try{var t=r.toString(),e=/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(t);return"function"==typeof n?n(e):e}catch(r){throw new Error("Error in isValidCpfSync: "+err)}},u=function(){return new Promise(function(r,n){try{var t=navigator.userAgent.toLowerCase(),e=["safari","chrome","edg","opera","msie","firefox"].find(function(r){return t.includes(r)});r(e?e.charAt(0).toUpperCase()+e.slice(1)+" en "+("Linux;"===navigator.userAgent.split(" ")[1].substring(1)?"Android":navigator.userAgent.split(" ")[1].substring(1)):void 0)}catch(r){n(new Error("Error in function"))}})},f=function(){try{var r=navigator.userAgent.toLowerCase(),n=["safari","chrome","edg","opera","msie","firefox"].find(function(n){return r.includes(n)});return n?n.charAt(0).toUpperCase()+n.slice(1)+" en "+("Linux;"===navigator.userAgent.split(" ")[1].substring(1)?"Android":navigator.userAgent.split(" ")[1].substring(1)):void 0}catch(r){throw new Error("Error in getNavegator: "+r)}};export{o as clearFormatCpf,i as clearFormatCpfSync,r as formatCpf,t as formatCpfChange,n as formatCpfSync,u as getNavegator,f as getNavegatorSync,c as isValidCpf,a as isValidCpfSync};
//# sourceMappingURL=index.mjs.map
