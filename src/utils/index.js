export const capitalizeFirstLetter = (word) => {
  if (word === null) {
    return null;
  }
  return word[0].toUpperCase() + word.substring(1);
};

export const getCurrentMonthAndYear = () => {
  const today = new Date();
  var month = today.toLocaleString("en-US", { month: "long" });
  var year = today.toLocaleString("en-US", { year: "numeric" });

  return `${month} ${year}`;
};

export const getCurrentMonth = () => {
  const today = new Date();
  const month = today.toLocaleString("en-US", { month: "long" });

  return month.toLowerCase();
};

export const getCurrentYear = () => {
  const today = new Date();
  const year = today.toLocaleString("en-US", { year: "numeric" });

  return year;
};

export const calculatePercent = (numerator, denominator, scale) => {
  if (!numerator || !denominator) return Number(0).toFixed(scale);

  return ((numerator / denominator) * 100).toFixed(scale);
};

export const formatPercent = (numerator, denominator, scale = 0) => {
  var percent = 0;
  if (numerator && denominator && denominator !== 0) {
    percent = (numerator / denominator) * 100;
  }

  return `${percent.toFixed(scale)}%`;
};
