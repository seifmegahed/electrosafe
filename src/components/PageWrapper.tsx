import { ReactElement } from "react";
import { Box } from "@mui/material";

type PageWrapperProps = {
  children: ReactElement[] | ReactElement;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      sx={{
        alignSelf: "center",
        alignItems: {sm: "center", md: "flex-start"},
        p: { xs: "50px 5px", sm: "50px", md: "50px" },
        ml: { md: "240px" },
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
