/**
 * * Devuelve cadena encriptada
 * @returns json
 */
const encryptDecrypt = (password, keyPass)=> {
    var key = keyPass.split("");
    var output = [];

    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i) ^ key[i % key.length].charCodeAt(0);
        output.push(String.fromCharCode(charCode));
    }
    return output.join("");
}

/**
 * * Devuelve el navegador se esta usando
 * * Si es errado retorna false
 * @returns string
 */
const getNavegator = ()=> {
	let listNavigator = ["safari", "chrome", "edg", "opera", "msie", "firefox"];
	let dispositivo = navigator.userAgent.split(" ");
	let infoNavegator = navigator.userAgent.toLowerCase();
	let final;
	listNavigator.forEach((e, i) => {
		if (infoNavegator.includes(e)) {
			final = `${e.charAt(0).toUpperCase() + e.slice(1)} en ${
				dispositivo[1].substr(1) === "Linux;" ? "Android" : dispositivo[1].substr(1)
			}`;
		}
	});
	return final;
}

export { encryptDecrypt, getNavegator }