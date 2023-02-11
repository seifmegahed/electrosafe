// React
import { useLocation, useNavigate } from "react-router-dom";

// Mui
import {
  Box,
  Breadcrumbs,
  Link,
  useMediaQuery,
} from "@mui/material";

// Types

const ScreenNavigator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  let pathsArray = location.pathname.split("/");
  console.log(pathsArray)
  let pathArray = pathsArray.map((pathName, index) => {
    let url = "/";
    let name = pathName;
    pathsArray.forEach((path, innerIndex) => {
      if (innerIndex <= index && index) {
        url += `/${path}`;
      }
    });

    if (!index) name = "Home";
    if (name === "user-account") name = "Account";

    if (index + 1 === pathsArray.length) return { name, url, last: true };
    return { name, url, last: false };
  });

  return (
    <Box width="100%">
      <Breadcrumbs>
        {pathArray.map((path) => {
          // if (path.name === "") return null;
          console.log(path)
          return (
            <Link
              key={path.name}
              underline={path.last ? "none" : "hover"}
              color={path?.last ? "text.primary" : "inherit"}
              sx={{ cursor: `${path?.last ? "default" : "pointer"}` }}
              onClick={() => {
                if (!path.last) navigate(path.url as string);
              }}
            >
              {/* <Typography variant={`h${isNonMobile ? "5" : "6"}`}> */}
              {path.name}
              {/* </Typography> */}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default ScreenNavigator;
