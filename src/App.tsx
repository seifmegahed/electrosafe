// React
import { Box } from "@mui/material";
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
const NewItem = lazy(() => import("./screens/Inventory/NewItem"));

const App = () => {
  const { user } = useAuth();

  return !!user ? (
    <Box className="App" sx={{ backgroundColor: "backgroud.default" }}>
      <NavComponents />
      <PageWrapper>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/user-account" element={<UserAccount span={2} />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/new" element={<NewItem />} />
          </Routes>
        </Suspense>
      </PageWrapper>
    </Box>
  ) : (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
