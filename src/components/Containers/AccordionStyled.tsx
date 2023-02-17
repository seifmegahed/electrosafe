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
import { ExpandMore } from "@mui/icons-material";
import { ReactElement } from "react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:last-child": {
    borderRadius: "0px 0px 10px 10px",
  },
  "&:first-child": {
    borderRadius: "10px 10px 0px 0px",
  },
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
  details: ReactElement;
};

const AccordionStyled = ({
  index,
  expanded,
  onExpand,
  summary,
  details,
}: AccordionStyledProps) => {
  const handleExpand = onExpand;
  return (
    <Accordion
      expanded={expanded === index}
      onChange={() => handleExpand(index)}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={{ justifyContent: "center" }}
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionStyled;
