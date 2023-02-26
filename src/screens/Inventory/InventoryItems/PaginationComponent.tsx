// MUI
import { Pagination } from "@mui/material";

type PaginationComponentProps = {
  numberPages: number;
  page: number;
  onChange: (value: number) => void;
};

const PaginationComponent = ({
  numberPages,
  page,
  onChange: handleChange,
}: PaginationComponentProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        onChange={(event, value) => handleChange(value)}
        count={numberPages}
        page={page}
      />
    </div>
  );
};

export default PaginationComponent;
