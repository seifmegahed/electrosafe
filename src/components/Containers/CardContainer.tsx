import { Box } from "@mui/material";
import { ReactElement } from "react";
import { componentBoxShadow, componentMaxWidth } from "../../globalConstants";

type CardContainerProps = {
  children: (ReactElement | null | false)[] | ReactElement;
  height: number;
};

const CardContainer = ({ children, height }: CardContainerProps) => {
  return (
    <Box
      p="30px 15px"
      boxShadow={componentBoxShadow}
      maxWidth={componentMaxWidth}
      borderRadius="24px"
      height={`${height}px`}
      maxHeight={`${height}px`}
      width="100%"
      display="flex"
      alignItems="center"
      sx={{ backgroundColor: "background.paper" }}
    >
      {children}
    </Box>
  );
};

export default CardContainer;
