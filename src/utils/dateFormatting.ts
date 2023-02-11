import { Timestamp } from "@firebase/firestore";

// returns date in MMM dd, yyyy format
type date = Date | Timestamp

export function getFormattedDate(val: date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let date: date;
  if ((val as Timestamp)?.nanoseconds) date = new Date((val as Timestamp).seconds * 1000);
  else date = new Date(val as Date);

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = month + " " + day + ", " + year;
  return formattedDate;
}
