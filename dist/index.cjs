exports.formatCpf=function(e){return(e=(e=e.toString()).replace(/[^\d]/g,""))?(e.length<=6?e.replace(/(\d{3})(\d{1,3})/g,"$1.$2"):e.length<=9?e.replace(/(\d{3})(\d{3})(\d{1,3})/g,"$1.$2.$3"):e.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g,"$1.$2.$3-$4")).slice(0,14):(console.error("Dato invalido de CPF"),"")};
//# sourceMappingURL=index.cjs.map
