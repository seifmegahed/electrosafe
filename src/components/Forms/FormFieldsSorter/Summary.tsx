// MUI
import { Typography } from "@mui/material";

const Summary = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <>
    <Typography
      variant="h6"
      sx={{ alignSelf: "center", width: { xs: "100%" } }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        width: "100%",
        alignSelf: "center",
        color: "text.secondary",
        display: { xs: "none", sm: "block" },
      }}
    >
      {`${subtitle} Field`.toUpperCase()}
    </Typography>
  </>
);

export default Summary;
