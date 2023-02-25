// MUI
import { Pagination } from "@mui/material";

type PaginationComponentProps = {
  numberPages: number;
  onChange: (value: number) => void;
};

const PaginationComponent = ({
  numberPages,
  onChange: handleChange,
}: PaginationComponentProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        onChange={(event, value) => handleChange(value)}
        count={numberPages}
      />
    </div>
  );
};

export default PaginationComponent;
