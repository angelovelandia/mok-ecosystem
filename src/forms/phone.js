const formatPhone = ({ phone = "", addCode, code }) => {
  return new Promise((resolve, reject) => {
    if (addCode && !code)
      reject(new Error("Error in formatPhoneSync: Phone code is empty"));
    const cleanedData = phone.replace(/[^\d]/g, "");
    if (!cleanedData) {
      reject(new Error("Error in function: Dato invalido de PHONE"));
    }
    const formattedData = addCode
      ? cleanedData.startsWith(code)
        ? cleanedData
        : code + cleanedData
      : cleanedData;
    const x = formattedData.match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    const phoneFormat = !x[2]
      ? x[1]
      : `(${x[1]}) ${x[2]}${x[3] ? "-" + x[3] : ""}`;
    resolve(phoneFormat);
  });
};

const formatPhoneSync = ({ phone = "", callback, addCode, code }) => {
  if (addCode && !code)
    throw new Error("Error in formatPhoneSync: Phone code is empty");
  const cleanedData = phone.replace(/[^\d]/g, "");
  if (!cleanedData) {
    console.error("Dato invalido de PHONE");
    if (typeof callback === "function") return callback("");
    return "";
  }
  const formattedData = addCode
    ? cleanedData.startsWith(code)
      ? cleanedData
      : code + cleanedData
    : cleanedData;
  const x = formattedData.match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  const phoneFormat = !x[2]
    ? x[1]
    : `(${x[1]}) ${x[2]}${x[3] ? "-" + x[3] : ""}`;
  if (typeof callback === "function") return callback(phoneFormat);
  return phoneFormat;
};

const formatPhoneChange = ({ phone = "", addCode, code, callback }) => {
  if (addCode && !code)
    reject(new Error("Error in formatPhoneSync: Phone code is empty"));
  const cleanedData = phone.replace(/[^\d]/g, "");
  if (!cleanedData) {
    if (typeof callback === "function") return callback("");
    return "";
  }
  const formattedData = addCode
    ? cleanedData.startsWith(code)
      ? cleanedData
      : code + cleanedData
    : cleanedData;
  const x = formattedData.match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  const phoneFormat = !x[2]
    ? x[1]
    : `(${x[1]}) ${x[2]}${x[3] ? "-" + x[3] : ""}`;
  if (typeof callback === "function") return callback(phoneFormat);
  return phoneFormat;
};
