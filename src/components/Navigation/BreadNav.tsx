// React
import { useNavigate } from "react-router-dom";
// Firebase
// MUI
import { Typography, Breadcrumbs, Link, useMediaQuery } from "@mui/material";
// Components
// Types
import routes, { RouteDataType } from "../../routes";
import { COMPONENT_MAX_WIDTH } from "../../globalConstants";

type BreadNavProps = {
  page: RouteDataType;
  includeHome?: boolean;
};
const BreadNav = ({ page, includeHome }: BreadNavProps) => {
  const isNonMobile = useMediaQuery("(min-width:400px)");
  const navigate = useNavigate();
  const textSize = isNonMobile ? "h4" : "h6";
  return (
    <div style={{ width: "100%", maxWidth: COMPONENT_MAX_WIDTH }}>
      <Breadcrumbs
        sx={{ p: "0 10px" }}
        separator={
          <Typography variant={textSize} p="4px 8px 0 8px">
            /
          </Typography>
        }
      >
        {page.parents.map((parent) => {
          if (!includeHome && parent.label === routes.home.label) return null;
          return (
            <Link
              key={parent.path}
              underline="hover"
              color="inherit"
              href={parent.path}
              onClick={(event) => {
                event.preventDefault();
                navigate(parent.path);
              }}
            >
              <Typography variant={textSize}>{parent.label}</Typography>
            </Link>
          );
        })}
        <Typography color="text.primary" variant={textSize}>
          {page.label}
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadNav;
