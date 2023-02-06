import { Box, useMediaQuery } from "@mui/material";
import { ReactElement } from "react";

type PageWrapperProps = {
  children: ReactElement[] | ReactElement;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box
      display="grid"
      p="30px"
      borderRadius="10px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      height="calc(100vh - 200px)"
      gap="40px"
      sx={{
        "& > div": {
          gridColumn: isNonMobile ? undefined : "span 4",
          ml: {md: "240px"}
        },
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
