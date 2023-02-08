import { Box, useMediaQuery, Typography } from "@mui/material";
import { ReactElement } from "react";

type FormContainerProps = {
  children: ReactElement[] | ReactElement;
  padding?: string;
  title?: string;
};

const FormContainer = ({ children, padding, title }: FormContainerProps) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box
      display="grid"
      p={isNonMobile ? !!padding ? padding : "30px" : "15px"}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      borderRadius="10px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      minWidth="300px"
      maxWidth="700px"
      height="fit-content"
      gap="20px"
      sx={{
        backgroundColor: "#fefefe",
        "& > div": {
          gridColumn: isNonMobile ? undefined : "span 4",
        },
      }}
    >
      {title && <Typography mb="20px" sx={{ gridColumn: "span 4" }} variant="h3">{title}</Typography>}
      {children}
    </Box>
  );
};

export default FormContainer;
