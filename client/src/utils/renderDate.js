const renderDate = (dateInput) => {
  if (!dateInput) {
    let date = new Date();
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleString("en-EN", options);
  } else {
    let date = new Date(dateInput);
    let options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleString("en-EN", options);
  }
};

export default renderDate;
