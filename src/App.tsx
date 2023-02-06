// React
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Box } from "@mui/material";

// Components
import { Loading, PageWrapper, NavComponents, Topbar } from "./components";
import { useAuth } from "./contexts/AuthProvider";
import Login from "./screens/Login";

// Lazy Routes
const Home = lazy(() => import("./screens/Home"));
const UserAccount = lazy(() => import("./screens/UserAccount"));

const App = () => {
  const { user } = useAuth();

  if (!!user)
    return (
      <div className="App">
        <NavComponents />
        <Suspense fallback={<Loading />}>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user-account" element={<UserAccount />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </PageWrapper>
        </Suspense>
      </div>
    );

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
