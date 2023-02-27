// eslint-disable-next-line import/no-extraneous-dependencies
import { Timestamp } from "@firebase/firestore";
import { GenericObject } from "../globalTypes";

// returns date in MMM dd, yyyy format
export type DateMultiType = Date | Timestamp;

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

function getFormattedDate(val: DateMultiType) {
  let date: DateMultiType;
  if ((val as Timestamp | GenericObject)?.nanoseconds)
    date = new Date(
      ((val as Timestamp | GenericObject)?.seconds as number) * 1000
    );
  else date = new Date(val as Date);

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
}

export default getFormattedDate;
