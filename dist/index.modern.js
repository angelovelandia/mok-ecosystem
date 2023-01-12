const e=e=>{if(!(e=(e=e.toString()).replace(/[^\d]/g,"")))return console.error("Dato invalido de CPF"),"";let r;return r=e.length<=6?e.replace(/(\d{3})(\d{1,3})/g,"$1.$2"):e.length<=9?e.replace(/(\d{3})(\d{3})(\d{1,3})/g,"$1.$2.$3"):e.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g,"$1.$2.$3-$4"),r.slice(0,14)};export{e as formatCpf};
//# sourceMappingURL=index.modern.js.map
