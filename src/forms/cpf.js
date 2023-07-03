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
    let newCPF = cpf
      .replace(/(\d{3})(\d{1,3})(\d{0,3})(\d{0,2})/g, "$1.$2.$3-$4")
      .slice(0, 14);
    event.target.value = newCPF;
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
      let newCPF = clearCpfFormat(cpf);
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

const isValidCpf = (cpf = "") => {
  return new Promise((resolve, reject) => {
    try {
      let data = cpf.toString();
      resolve(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(data));
    } catch (err) {
      reject(new Error("Error in function"));
    }
  });
};

const isValidCpfSync = (cpf = "") => {
  try {
    let data = cpf.toString();
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(data);
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
