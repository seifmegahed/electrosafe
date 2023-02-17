// React
// Firebase
// MUI
// Components
// Types
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { DragIndicator, ExpandMore } from "@mui/icons-material";
import { ReactElement } from "react";
import { IconButton } from "@mui/material";
import { DraggableProvidedDragHandleProps } from "react-beautiful-dnd";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  borderRadius: "10px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "background.default",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(-90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

type AccordionStyledProps = {
  index: number;
  expanded: number | false;
  onExpand: (value: number) => void;
  summary: ReactElement;
  draggable: Boolean;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
  details: ReactElement;
};

const AccordionStyled = ({
  index,
  expanded,
  onExpand,
  summary,
  draggable,
  dragHandleProps,
  details,
}: AccordionStyledProps) => {
  const handleExpand = onExpand;
  return (
    <Accordion
      draggable={draggable ? "true" : "false"}
      expanded={expanded === index}
      onChange={() => handleExpand(index)}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={{ justifyContent: "center" }}
      >
        {summary}
        <div {...dragHandleProps}>
          <DragIndicator fontSize="large" />
        </div>
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionStyled;
