// React
import { Box } from "@mui/material";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Loading from "./components/Loading";
import PageWrapper from "./components/PageWrapper";
import NavComponents from "./components/NavComponents";
import Topbar from "./components/Topbar";

import { useAuth } from "./contexts/AuthProvider";

// Lazy Loading
const Home = lazy(() => import("./screens/Home"));
const UserAccount = lazy(() => import("./screens/UserAccount"));
const ChangePassword = lazy(() => import("./screens/ChangePassword"));
const Login = lazy(() => import("./screens/Login"));
const Inventory = lazy(() => import("./screens/Inventory"));

const App = () => {
  const { user } = useAuth();

  if (!!user)
    return (
      <Box className="App" sx={{ backgroundColor: "backgroud.default" }}>
        <NavComponents />
        <Suspense fallback={<Loading />}>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user-account" element={<UserAccount span={2} />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/inventory" element={<Inventory />} />
              {/* <Route path="/*" element={<Navigate to="/" />} /> */}
            </Routes>
          </PageWrapper>
        </Suspense>
      </Box>
    );
  else
    return (
      <div className="App">
        <Topbar />
        <Routes>
          <Route path="/*" element={<Login />} />
        </Routes>
      </div>
    );
};

export default App;
