const renderDate = () => {
  let date = new Date();

  // Request a weekday along with a long date
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleString("en-EN", options);
};

export default renderDate;
