const getNavegator = () => {
  return new Promise((resolve, reject) => {
    try {
      const listNavigator = [
        "safari",
        "chrome",
        "edg",
        "opera",
        "msie",
        "firefox",
      ];
      const infoNavegator = navigator.userAgent.toLowerCase();
      const foundNavigator = listNavigator.find((navigator) =>
        infoNavegator.includes(navigator)
      );

      resolve(
        foundNavigator
          ? `${
              foundNavigator.charAt(0).toUpperCase() + foundNavigator.slice(1)
            } en ${
              navigator.userAgent.split(" ")[1].substring(1) === "Linux;"
                ? "Android"
                : navigator.userAgent.split(" ")[1].substring(1)
            }`
          : undefined
      );
    } catch (err) {
      reject(new Error("Error in function"));
    }
  });
};

const getNavegatorSync = () => {
  try {
    const listNavigator = [
      "safari",
      "chrome",
      "edg",
      "opera",
      "msie",
      "firefox",
    ];
    const infoNavegator = navigator.userAgent.toLowerCase();
    const foundNavigator = listNavigator.find((navigator) =>
      infoNavegator.includes(navigator)
    );

    return foundNavigator
      ? `${
          foundNavigator.charAt(0).toUpperCase() + foundNavigator.slice(1)
        } en ${
          navigator.userAgent.split(" ")[1].substring(1) === "Linux;"
            ? "Android"
            : navigator.userAgent.split(" ")[1].substring(1)
        }`
      : undefined;
  } catch (err) {
    throw new Error("Error in getNavegator: " + err);
  }
};

export { getNavegator, getNavegatorSync };
