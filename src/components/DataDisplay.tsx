import { Typography, TableRow, TableCell } from "@mui/material";
import { getFormattedDate } from "../utils/dateFormatting";
import { Timestamp } from "@firebase/firestore";

type DataDisplayProps = {
  details: {
    label: string;
    type?: "date" | "text";
    preFix?: string;
    postFix?: string;
  };
  data: string | Date | Timestamp;
};

const DataDisplay = ({ details, data }: DataDisplayProps) => {
  let { label, type, preFix, postFix } = details;
  return (
    <TableRow>
      <TableCell>
        <Typography color="text.primary">{label}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography color="text.primary">
          {`${!!preFix ? preFix : ""}${
            type === "date" ? getFormattedDate(data as Date | Timestamp) : data
          }${!!postFix ? postFix : ""}`}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default DataDisplay;
