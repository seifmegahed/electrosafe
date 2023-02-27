import { Box, useMediaQuery } from "@mui/material";
import { ReactElement } from "react";

type GridWrapperProps = {
  children: (ReactElement | null)[] | ReactElement;
};

const GridWrapper = ({ children }: GridWrapperProps) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      width="100%"
      height="fit-content"
      gap="20px"
      sx={{
        gridColumn: "span 4",
        "& > div": {
          gridColumn: isNonMobile ? undefined : "span 4",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default GridWrapper;
