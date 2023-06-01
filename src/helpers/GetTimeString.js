const getMonthToEnglish = (month) => {
  var monthEnglish = "";
  switch (month) {
    case 1:
      monthEnglish = "January";
      break;
    case 2:
      monthEnglish = "Febuary";
      break;
    case 3:
      monthEnglish = "March";
      break;
    case 4:
      monthEnglish = "April";
      break;
    case 5:
      monthEnglish = "May";
      break;
    case 6:
      monthEnglish = "June";
      break;
    case 7:
      monthEnglish = "July";
      break;
    case 8:
      monthEnglish = "August";
      break;
    case 9:
      monthEnglish = "Septemper";
      break;
    case 10:
      monthEnglish = "October";
      break;
    case 11:
      monthEnglish = "November";
      break;
    default:
      monthEnglish = "December";
  }
  return monthEnglish;
};
export const getTimeString = (time) => {
  const date = new Date(time);
  return (
    getMonthToEnglish(date.getMonth() + 1) +
    " " +
    date.getDay() +
    ", " +
    date.getFullYear()
  );
};

export const convertDateTime = (dateTimeStr) => {
  const dateTime = new Date(dateTimeStr);

  const day = String(dateTime.getDate()).padStart(2, "0");
  const month = String(dateTime.getMonth() + 1).padStart(2, "0");
  const year = dateTime.getFullYear();
  const hours = String(dateTime.getHours()).padStart(2, "0");
  const minutes = String(dateTime.getMinutes()).padStart(2, "0");
  const seconds = String(dateTime.getSeconds()).padStart(2, "0");

  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return formattedTime + " - " + formattedDate;
};
