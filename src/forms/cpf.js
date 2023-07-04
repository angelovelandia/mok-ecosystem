const formatCpf = (cpf = "") => {
  return new Promise((resolve, reject) => {
    try {
      cpf = cpf.toString().replace(/[^\d]/g, "");
      let newCPF = cpf
        .replace(/(\d{3})(\d{1,3})(\d{0,3})(\d{0,2})/g, "$1.$2.$3-$4")
        .slice(0, 14);
      resolve(newCPF);
    } catch (err) {
      reject(new Error("Error in function"));
    }
  });
};

const formatCpfSync = (cpf = "", callback) => {
  try {
    cpf = cpf.toString().replace(/[^\d]/g, "");
    let newCPF = cpf
      .replace(/(\d{3})(\d{1,3})(\d{0,3})(\d{0,2})/g, "$1.$2.$3-$4")
      .slice(0, 14);
    if (typeof callback === "function") callback(newCPF);
    return newCPF;
  } catch (err) {
    throw new Error("Error in formatCpfSync: " + err);
  }
};

const formatCpfChange = (event, callback) => {
  try {
    let cpf = event.target.value.toString().replace(/[^\d]/g, "");
    let newCPF = cpf.replace(
      /(\d{3})(\d{0,3})(\d{0,3})(\d{0,2})/g,
      function (match, p1, p2, p3, p4) {
        let formattedCPF = "";
        if (p1) formattedCPF += p1;
        if (p2) formattedCPF += "." + p2;
        if (p3) formattedCPF += "." + p3;
        if (p4) formattedCPF += "-" + p4;
        return formattedCPF;
      }
    );
    event.target.value = newCPF.slice(0, 14);
    if (typeof callback === "function") return callback(event);
    return event;
  } catch (err) {
    if (typeof callback === "function") return callback("");
    return "";
  }
};

const clearCpfFormat = (cpf = "") => cpf.replace(/[.-]/g, "");

const clearFormatCpf = (cpf = "", callback) => {
  return new Promise((resolve, reject) => {
    try {
      let newCPF = cpf ? clearCpfFormat(cpf) : "";
      if (typeof callback === "function") callback(newCPF);
      resolve(newCPF);
    } catch (err) {
      console.error("Error in clearFormatCpf:", err);
      reject(new Error("Error in function"));
    }
  });
};

const clearFormatCpfSync = (cpf = "", callback) => {
  try {
    let newCPF = clearCpfFormat(cpf);
    if (typeof callback === "function") callback(newCPF);
    return newCPF;
  } catch (err) {
    console.error("Error in clearFormatCpfSync:", err);
    throw new Error("Error in clearFormatCpfSync: " + err);
  }
};

const isValidCpf = (cpf = "", callback) => {
  return new Promise((resolve, reject) => {
    try {
      let data = cpf.toString();
      let valid = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(data);
      if (typeof callback === "function") callback(valid);
      resolve(valid);
    } catch (err) {
      reject(new Error("Error in function"));
    }
  });
};

const isValidCpfSync = (cpf = "", callback) => {
  try {
    let data = cpf.toString();
    let valid = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(data);
    if (typeof callback === "function") return callback(valid);
    return valid;
  } catch (error) {
    throw new Error("Error in isValidCpfSync: " + err);
  }
};

export {
  formatCpf,
  formatCpfSync,
  formatCpfChange,
  clearFormatCpf,
  clearFormatCpfSync,
  isValidCpf,
  isValidCpfSync,
};
