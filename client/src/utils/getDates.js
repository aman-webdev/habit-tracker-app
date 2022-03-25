import moment from "moment";

export const getDaysInMonth = (month, year) => {
  const monthDate = moment(year + "-" + month, "YYYY-MM");
  console.log(monthDate);
  let daysInMonth = monthDate.daysInMonth();
  console.log(daysInMonth);
  const arrDays = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const current = moment().date(i);
    const obj = { [current.format("MM-DD-YYYY")]: false };
    arrDays.push(obj);
  }

  return arrDays;
};
