/**
 * * Transformar CPF
 * * Si no se le envian datos devuelve un string vacio
 * @param {*} data 
 * @returns string 
 */
const formatCpf = data => {
    // convertir a string
    data = data.toString()
    
    //remover todos los caracteres no numericos
    data = data.replace(/[^\d]/g, '');

    // Validar si el dato proporcionado es un CPF válido
    if (!data) {
        console.error("Dato invalido de CPF")
        return "";
    }

    // Dar formato al CPF según el patrón estándar
    let cpfFormatted;
    if (data.length <= 6) {
        cpfFormatted = data.replace(/(\d{3})(\d{1,3})/g, '$1.$2');
    } else if (data.length <= 9) {
        cpfFormatted = data.replace(/(\d{3})(\d{3})(\d{1,3})/g, '$1.$2.$3');
    } else {
        cpfFormatted = data.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g, '$1.$2.$3-$4');
    }
    return cpfFormatted.slice(0, 14);
}

export { formatCpf }