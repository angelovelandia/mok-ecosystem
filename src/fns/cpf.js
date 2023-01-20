/**
 * * Transformar CPF
 * * Si no se le envian datos devuelve un string vacio
 * * Ejecuta funcion de manejo de estado y datos
 * @param {*} data 
 * @returns string 
 */
const formatCpf = (data, func) => {
    // convertir a string
    data = data.toString()
    
    //remover todos los caracteres no numericos
    data = data.replace(/[^\d]/g, '');

    // Validar si el dato proporcionado es un CPF válido
    if (!data) {
        console.error("Dato invalido de {CPF}")
        //Revisar si viene una funcion en func
        try {
            return func("");
        } catch (error) {
            return "";
        }
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

    //Revisar si viene una funcion en func
    try {
        func(cpfFormatted.slice(0, 14));
    } catch (error) {
        return cpfFormatted.slice(0, 14);
    }
}

/**
 * * Transformar CPF en onChange Generic
 * * Si no se le envian datos devuelve un string vacio
 * * Ejecuta funcion de manejo de estado y datos
 * @param {*} e event change 
 * @returns string 
 */
const formatCpfChange = (e, func) => {
    //Validar que sea tipo event change
    if(e.type !== "change"){
      console.error("El evento debe ser tipo {change}")
      return "";
    }
    // convertir a string
    let data = e.target.value.toString();

    //remover todos los caracteres no numericos
    data = data.replace(/[^\d]/g, '');

    // Validar si el dato proporcionado es un CPF válido
    if (!data) {
        console.error("Dato invalido de {PHONE}")
        //Modificando datos del event
        e.target.value = "";
        //Revisar si viene una funcion en func
        try {
            return func(e);
        } catch (error) {
            return "";
        }
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

    //Revisar si viene una funcion en func
    try {
        //Modificar contenido de evento en target value
        e.target.value = cpfFormatted.slice(0, 14); 
        func(e);
    } catch (error) {
        return cpfFormatted.slice(0, 14);
    }
}

/**
 * * Quitar formato de CPF y dejar en formato string
 * * Si no se le envian datos devuelve un string vacio
 * * Ejecuta funcion de manejo de estado y datos
 * @param {*} cpf sin formato
 * @returns string 
 */
const clearFormatCpf = (e, func) => {
    // convertir a string
    let data = e.toString()
    
    // Validar si el dato proporcionado es un CPF válido
    if (!data) {
        console.error("Dato invalido de {CPF}")
        //Revisar si viene una funcion en func
        try {
            return func("");
        } catch (error) {
            return "";
        }
    }

    //Formatear
    data = data.replace(/[.-]/g,'');
    //Revisar si viene una funcion en func
    try {
        func(data.slice(0, 14));
    } catch (error) {
        return data.slice(0, 14);
    }
}

/**
 * * Validar si el formato del CPF es valido
 * * Si es errado retorna false
 * @param {*} cpf con formato
 * @returns boolean 
 */
const isValidCpf = e => {
    // convertir a string
    let data = e.toString()
    // Validar formato con regex 129.992.229-99
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(data);
}

export { formatCpf, formatCpfChange, clearFormatCpf, isValidCpf }