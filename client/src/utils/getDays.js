import renderDate from "./renderDate";

const getDays = () => {
  let curr = new Date();
  let week = [];

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first));
    week.push(renderDate(day).split(",")[1]);
  }
  return week;
};

export default getDays;
