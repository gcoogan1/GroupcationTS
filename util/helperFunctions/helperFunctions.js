const { parse, isValid, format } = require("date-fns");

export const capitilaizeFirstLetter = (string) => {
  if (!string) return;
  return string[0].toUpperCase() + string.slice(1);
};

export const dateIsValid = (dateString) => {
  const parsedDate = parse(dateString, "MM/dd/yyyy", new Date());
  return isValid(parsedDate) && format(parsedDate, "MM/dd/yyyy") === dateString;
};

export const timeIsValid = (timeString) => {
  const parsedTime = parse(timeString, "HH:mm", new Date());
  return isValid(parsedTime) && format(parsedTime, "HH:mm") === timeString;
};
