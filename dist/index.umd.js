!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e||self).mokEcosystem={})}(this,function(e){e.clearFormatCpf=function(e,r){var t=e.toString();if(!t){console.error("Dato invalido de {CPF}");try{return r("")}catch(e){return""}}t=t.replace(/[.-]/g,"");try{r(t.slice(0,14))}catch(e){return t.slice(0,14)}},e.clearFormatPhone=function(e,r){var t=e.toString();if(!t){console.error("Dato invalido de {PHONE}");try{return r("")}catch(e){return""}}t=t.replace(/\s+/g,"").replace(/[()-]/g,"");try{r(t.slice(0,15))}catch(e){return t.slice(0,15)}},e.encryptDecrypt=function(e,r){for(var t=r.split(""),n=[],a=0;a<e.length;a++){var o=e.charCodeAt(a)^t[a%t.length].charCodeAt(0);n.push(String.fromCharCode(o))}return n.join("")},e.formatCpf=function(e,r){if(!(e=(e=e.toString()).replace(/[^\d]/g,""))){console.error("Dato invalido de {CPF}");try{return r("")}catch(e){return""}}var t;t=e.length<=6?e.replace(/(\d{3})(\d{1,3})/g,"$1.$2"):e.length<=9?e.replace(/(\d{3})(\d{3})(\d{1,3})/g,"$1.$2.$3"):e.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g,"$1.$2.$3-$4");try{r(t.slice(0,14))}catch(e){return t.slice(0,14)}},e.formatCpfChange=function(e,r){if("change"!==e.type)return console.error("El evento debe ser tipo {change}"),"";var t,n=e.target.value.toString();if(!(n=n.replace(/[^\d]/g,""))){console.error("Dato invalido de {PHONE}"),e.target.value="";try{return r(e)}catch(e){return""}}t=n.length<=6?n.replace(/(\d{3})(\d{1,3})/g,"$1.$2"):n.length<=9?n.replace(/(\d{3})(\d{3})(\d{1,3})/g,"$1.$2.$3"):n.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g,"$1.$2.$3-$4");try{e.target.value=t.slice(0,14),r(e)}catch(e){return t.slice(0,14)}},e.formatPhone=function(e,r){if(!(e=e.replace(/[^\d]/g,""))){console.error("Dato invalido de PHONE");try{return r("")}catch(e){return""}}e&&!e.startsWith("55")&&e.length>=2&&(e="55"+e);var t=e.toString();e&&!t.startsWith("55")&&2===t.length&&(t="55"+t);var n=(t=t.replace(/[^\d]/g,"")).replace(/\D/g,"").match(/(\d{0,2})(\d{0,5})(\d{0,4})/),a=n[2]?"("+n[1]+") "+n[2]+(n[3]?"-"+n[3]:""):n[1];try{r(a)}catch(e){return a}},e.formatPhoneChange=function(e,r){if("change"!==e.type)return console.error("El evento debe ser tipo {change}"),"";var t=e.target.value.toString();if(!(t=t.replace(/[^\d]/g,""))){console.error("Dato invalido de {PHONE}"),e.target.value="";try{return r(e)}catch(e){return""}}t&&!t.startsWith("55")&&t.length>=2&&(t="55"+t);var n=t;t&&!n.startsWith("55")&&2===n.length&&(n="55"+n);var a=(n=n.replace(/[^\d]/g,"")).replace(/\D/g,"").match(/(\d{0,2})(\d{0,5})(\d{0,4})/),o=a[2]?"("+a[1]+") "+a[2]+(a[3]?"-"+a[3]:""):a[1];e.target.value=o;try{r(e)}catch(e){return o}},e.getNavegator=function(){var e,r=navigator.userAgent.split(" "),t=navigator.userAgent.toLowerCase();return["safari","chrome","edg","opera","msie","firefox"].forEach(function(n,a){t.includes(n)&&(e=n.charAt(0).toUpperCase()+n.slice(1)+" en "+("Linux;"===r[1].substr(1)?"Android":r[1].substr(1)))}),e},e.isValidCpf=function(e){var r=e.toString();return/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(r)},e.isValidPhone=function(e){var r=e.toString();return/^\(\d{2}\)\s\d{5}-\d{4}$/.test(r)}});
//# sourceMappingURL=index.umd.js.map
