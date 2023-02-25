import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

type LoadingProps = {
  state?: boolean;
};

const Loading = ({ state }: LoadingProps) => {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: "10002" }} open={state ?? true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
