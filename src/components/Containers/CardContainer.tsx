import { Box, useMediaQuery } from "@mui/material";
import { ReactElement } from "react";
import { componentBoxShadow, componentMaxWidth } from "../../globalConstants";

type CardContainerProps = {
  children: (ReactElement | null)[] | ReactElement;
  height: number;
};

const CardContainer = ({ children, height }: CardContainerProps) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box
      p={isNonMobile ? "30px" : "15px"}
      boxShadow={componentBoxShadow}
      maxWidth={componentMaxWidth}
      borderRadius="24px"
      height={`${height}px`}
      maxHeight={`${height}px`}
      width="100%"
      display="flex"
      sx={{ backgroundColor: "background.paper" }}
    >
      {children}
    </Box>
  );
};

export default CardContainer;
