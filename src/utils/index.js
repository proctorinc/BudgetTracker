import { MONTHS } from "@/constants";

export const capitalizeFirstLetter = (word) => {
  return word[0].toUpperCase() + word.substring(1);
};

export const getCurrentMonthAndYear = () => {
  const today = new Date();
  var month = today.toLocaleString("en-US", { month: "long" });
  var year = today.toLocaleString("en-US", { year: "numeric" });

  return `${month} ${year}`;
};

export const getCurrentMonthInURLFormat = () => {
  const month = getCurrentMonthAndYear();

  return formatMonthToURLFormat(month);
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

export const formatMonthToURLFormat = (monthDate) => {
  let result;
  try {
    // month = "December 2022"
    const monthArray = monthDate.split(" ");
    const month = monthArray[0].substring(0, 3).toLowerCase();
    const year = monthArray[1];
    result = `${month}-${year}`;
  } catch (error) {
    console.log(error);
    result = null;
  }

  return result;
};

export const getMonthFromURLFormat = (urlMonth) => {
  let result;
  try {
    // urlMonth = "dec-2022"
    const monthArray = urlMonth.split("-");
    const shortMonth = monthArray[0];
    const month = MONTHS[shortMonth];

    const year = monthArray[1];

    result = `${month} ${year}`;
  } catch (error) {
    console.log(error);
    result = null;
  }

  return result;
};
