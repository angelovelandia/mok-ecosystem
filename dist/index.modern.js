const e=(e,r)=>{if(!(e=(e=e.toString()).replace(/[^\d]/g,""))){console.error("Dato invalido de {CPF}");try{return r("")}catch(e){return""}}let t;t=e.length<=6?e.replace(/(\d{3})(\d{1,3})/g,"$1.$2"):e.length<=9?e.replace(/(\d{3})(\d{3})(\d{1,3})/g,"$1.$2.$3"):e.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g,"$1.$2.$3-$4");try{r(t.slice(0,14))}catch(e){return t.slice(0,14)}},r=(e,r)=>{if("change"!==e.type)return console.error("El evento debe ser tipo {change}"),"";let t,a=e.target.value.toString();if(a=a.replace(/[^\d]/g,""),!a){console.error("Dato invalido de {PHONE}"),e.target.value="";try{return r(e)}catch(e){return""}}t=a.length<=6?a.replace(/(\d{3})(\d{1,3})/g,"$1.$2"):a.length<=9?a.replace(/(\d{3})(\d{3})(\d{1,3})/g,"$1.$2.$3"):a.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g,"$1.$2.$3-$4");try{e.target.value=t.slice(0,14),r(e)}catch(e){return t.slice(0,14)}},t=(e,r)=>{let t=e.toString();if(!t){console.error("Dato invalido de {CPF}");try{return r("")}catch(e){return""}}t=t.replace(/[.-]/g,"");try{r(t.slice(0,14))}catch(e){return t.slice(0,14)}},a=e=>{let r=e.toString();return/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(r)},l=(e,r)=>{if(!(e=e.replace(/[^\d]/g,""))){console.error("Dato invalido de PHONE");try{return r("")}catch(e){return""}}e&&!e.startsWith("55")&&e.length>=2&&(e="55"+e);let t=e.toString();e&&!t.startsWith("55")&&2===t.length&&(t="55"+t),t=t.replace(/[^\d]/g,"");var a=t.replace(/\D/g,"").match(/(\d{0,2})(\d{0,5})(\d{0,4})/);let l=a[2]?"("+a[1]+") "+a[2]+(a[3]?"-"+a[3]:""):a[1];try{r(l)}catch(e){return l}},n=(e,r)=>{if("change"!==e.type)return console.error("El evento debe ser tipo {change}"),"";let t=e.target.value.toString();if(t=t.replace(/[^\d]/g,""),!t){console.error("Dato invalido de {PHONE}"),e.target.value="";try{return r(e)}catch(e){return""}}t&&!t.startsWith("55")&&t.length>=2&&(t="55"+t);let a=t;t&&!a.startsWith("55")&&2===a.length&&(a="55"+a),a=a.replace(/[^\d]/g,"");var l=a.replace(/\D/g,"").match(/(\d{0,2})(\d{0,5})(\d{0,4})/);let n=l[2]?"("+l[1]+") "+l[2]+(l[3]?"-"+l[3]:""):l[1];e.target.value=n;try{r(e)}catch(e){return n}},c=(e,r)=>{let t=e.toString();if(!t){console.error("Dato invalido de {PHONE}");try{return r("")}catch(e){return""}}t=t.replace(/\s+/g,"").replace(/[()-]/g,"");try{r(t.slice(0,15))}catch(e){return t.slice(0,15)}},o=e=>{let r=e.toString();return/^\(\d{2}\)\s\d{5}-\d{4}$/.test(r)},d=(e,r)=>{for(var t=r.split(""),a=[],l=0;l<e.length;l++){var n=e.charCodeAt(l)^t[l%t.length].charCodeAt(0);a.push(String.fromCharCode(n))}return a.join("")},i=()=>{let e,r=navigator.userAgent.split(" "),t=navigator.userAgent.toLowerCase();return["safari","chrome","edg","opera","msie","firefox"].forEach((a,l)=>{t.includes(a)&&(e=`${a.charAt(0).toUpperCase()+a.slice(1)} en ${"Linux;"===r[1].substr(1)?"Android":r[1].substr(1)}`)}),e};export{t as clearFormatCpf,c as clearFormatPhone,d as encryptDecrypt,e as formatCpf,r as formatCpfChange,l as formatPhone,n as formatPhoneChange,i as getNavegator,a as isValidCpf,o as isValidPhone};
//# sourceMappingURL=index.modern.js.map
