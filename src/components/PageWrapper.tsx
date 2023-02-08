import { Box, useMediaQuery } from "@mui/material";
import { ReactElement } from "react";

type PageWrapperProps = {
  children: ReactElement[] | ReactElement;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="40px"
      sx={{
        p: { xs: "50px 0px", sm: "50px", md: "50px" },
        ml: { md: "240px" },
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
