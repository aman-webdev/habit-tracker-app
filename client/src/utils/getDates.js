import moment from "moment";

export const getDaysInMonth = (month, year) => {
  const monthDate = moment(year + "-" + month, "YYYY-MM");

  let daysInMonth = monthDate.daysInMonth();

  const arrDays = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const current = moment().date(i);
    const obj = { date: current.format("MM-DD-YYYY"), isChecked: false };
    arrDays.push(obj);
  }

  return arrDays;
};

export const getDaysInWeek = () => {
  const dateformat = "MM-DD-YYYY";
  var date = date ? moment(date, dateformat) : moment(),
    weeklength = 7,
    result = [];
  date = date.startOf("week");
  while (weeklength--) {
    const obj = { date: date.format(dateformat), isChecked: false };
    result.push(obj);
    date.add(1, "day");
  }

  return result;
};
