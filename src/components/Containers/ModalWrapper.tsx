// React
import { ReactElement } from "react";
// Firebase
// MUI
// Components
import { Box, Modal, Typography } from "@mui/material";

// Types
const ModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  maxWidth: 400,
  width: "100%",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  boxShadow: 24,
  p: 4,
};

const ModalWrapper = ({
  id,
  open,
  title,
  children,
  handleClose,
}: {
  id: string;
  open: boolean;
  title: string;
  children: ReactElement | ReactElement[];
  handleClose: () => void;
}) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby={`${id}-title`}>
      <Box sx={ModalStyle}>
        <Typography id={`${id}-title`} variant="h4">
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalWrapper;
