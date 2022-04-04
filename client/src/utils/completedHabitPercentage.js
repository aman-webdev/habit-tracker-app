const habitPercentage = (dates) => {
  const completed = dates.reduce(
    (sum, date) => (date.isChecked ? (sum += 1) : sum),
    0
  );
  return completed;
};

export default habitPercentage;
