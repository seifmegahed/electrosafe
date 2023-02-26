// MUI
import { Pagination, useMediaQuery } from "@mui/material";

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
  const isNonMobile = useMediaQuery("(min-width:500px)");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        onChange={(event, value) => handleChange(value)}
        count={numberPages}
        page={page}
        size={isNonMobile ? "large" : "small"}
      />
    </div>
  );
};

export default PaginationComponent;
