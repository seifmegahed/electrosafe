import { Box, useMediaQuery, Typography } from "@mui/material";
import { ReactElement } from "react";
import { componentBoxShadow, componentMaxWidth } from "../../globalConstants";

type FormContainerProps = {
  children: ReactElement[] | ReactElement | any;
  padding?: string;
  title?: string;
};

const FormContainer = ({ children, padding, title }: FormContainerProps) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box
      display="grid"
      p={isNonMobile ? (!!padding ? padding : "30px") : "15px"}
      boxShadow={componentBoxShadow}
      borderRadius="10px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      maxWidth={componentMaxWidth}
      width="100%"
      height="fit-content"
      gap="20px"
      sx={{
        backgroundColor: "background.paper",
        "& > div": {
          gridColumn: isNonMobile ? undefined : "span 4",
        },
      }}
    >
      {title && (
        <Typography sx={{ gridColumn: "span 4" }} variant="h3">
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
};

export default FormContainer;
