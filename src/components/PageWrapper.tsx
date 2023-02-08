import { ReactElement } from "react";
import { Box } from "@mui/material";

type PageWrapperProps = {
  children: ReactElement[] | ReactElement;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Box
      gap="40px"
      display="flex"
      flexDirection="column"
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
