import { Box, useMediaQuery, Typography } from "@mui/material";
import { ReactElement } from "react";
import {
  COMPONENT_BOX_SHADOW,
  COMPONENT_MAX_WIDTH,
} from "../../globalConstants";

type FormContainerProps = {
  children: (ReactElement | null)[] | ReactElement;
  padding?: string;
  title?: string;
  iconButton?: ReactElement | false;
};

const FormContainer = ({
  children,
  padding,
  title,
  iconButton,
}: FormContainerProps) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box
      display="grid"
      p={isNonMobile ? padding ?? "30px" : "15px"}
      boxShadow={COMPONENT_BOX_SHADOW}
      borderRadius="10px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      maxWidth={COMPONENT_MAX_WIDTH}
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
      {title && !iconButton && (
        <Typography
          title={title}
          className="container-title"
          sx={{ gridColumn: "span 4" }}
          variant="h3"
        >
          {title}
        </Typography>
      )}
      {iconButton && title && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gridColumn: "span 4",
            alignItems: "center",
          }}
        >
          <Typography
            title={title}
            className="container-title"
            sx={{ gridColumn: "span 4" }}
            variant="h3"
          >
            {title}
          </Typography>
          {iconButton}
        </div>
      )}
      {children}
    </Box>
  );
};

export default FormContainer;
