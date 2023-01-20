/**
 * * Transformar PHONE
 * * Si no se le envian datos devuelve un string vacio
 * * Ejecuta funcion de manejo de estado y datos
 * @param {*} data 
 * @returns string 
 */
const formatPhone = (data, func)=> {

    //remover todos los caracteres no numericos
    data = data.replace(/[^\d]/g, '');

    // Validar que exista dato
    if (!data) {
        console.error("Dato invalido de PHONE")
        //Revisar si viene una funcion en func
        try {
            return func("");
        } catch (error) {
            return "";
        }
    }

    //resivando datos para evitar errores de copiado y pegado
    if(data && !data.startsWith("55") && data.length >= 2) {
        data = "55" + data; 
    }
    
    // convertir a string
    let celular = data.toString();


    // Concatenando indicativo
    if(data && !celular.startsWith("55") && celular.length === 2) {
        celular = "55" + celular; 
    }

    //remover todos los caracteres no numericos
    celular = celular.replace(/[^\d]/g, '');
    var x = celular.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    let phoneFormat = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');

    //Revisar si viene una funcion en func
    try {
        func(phoneFormat);
    } catch (error) {
        return phoneFormat;
    }
}

/**
 * * Transformar PHONE en onChange Generic
 * * Si no se le envian datos devuelve un string vacio
 * * Ejecuta funcion de manejo de estado y datos
 * @param {*} e event change 
 * @returns string 
 */
const formatPhoneChange = (e, func) => {
    //Validar que sea tipo event change
    if(e.type !== "change"){
      console.error("El evento debe ser tipo {change}")
      return "";
    }
    // convertir a string
    let data = e.target.value.toString();
    
    //remover todos los caracteres no numericos
    data = data.replace(/[^\d]/g, '');
    
    // Validar si el dato proporcionado es un PHONE válido
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

    //resivando datos para evitar errores de copiado y pegado
    if(data && !data.startsWith("55") && data.length >= 2) {
      data = "55" + data; 
    }
    let celular = data;

    // Concatenando indicativo
    if(data && !celular.startsWith("55") && celular.length === 2) {
        celular = "55" + celular; 
    }
    //remover todos los caracteres no numericos
    celular = celular.replace(/[^\d]/g, '');
    var x = celular.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    let phoneFormat = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');

    //Modificando datos del event
    e.target.value = phoneFormat;

    //Revisar si viene una funcion en func
    try {
        func(e);
    } catch (error) {
        return phoneFormat;
    }
}

/**
 * * Quitar formato de PHONE y dejar en formato string
 * * Si no se le envian datos devuelve un string vacio
 * * Ejecuta funcion de manejo de estado y datos
 * @param {*} PHONE sin formato
 * @returns string 
 */
const clearFormatPhone = (e, func) => {
    // convertir a string
    let data = e.toString()
    
    // Validar si el dato proporcionado es un PHONE válido
    if (!data) {
        console.error("Dato invalido de {PHONE}")
        //Revisar si viene una funcion en func
        try {
            return func("");
        } catch (error) {
            return "";
        }
    }
    //Formatear
    data = data.replace(/\s+/g, '').replace(/[()-]/g, '');
    //Revisar si viene una funcion en func
    try {
        func(data.slice(0, 15));
    } catch (error) {
        return data.slice(0, 15);
    }
}

/**
 * * Validar si el formato del phone es valido
 * * Si es errado retorna false
 * @param {*} phone con formato
 * @returns boolean 
 */
const isValidPhone = e => {
    // convertir a string
    let data = e.toString()
    // Validar formato con regex (55) 12345-6465
    let phoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    let isValid = phoneRegex.test(data);
    return isValid;
}

export { formatPhone, formatPhoneChange, clearFormatPhone, isValidPhone }