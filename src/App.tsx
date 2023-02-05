import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Loading, Topbar } from "./components";
import { useAuth } from "./contexts/AuthProvider";
const Home = lazy(() => import("./screens/Home"));

import Login from "./screens/Login";

const App = () => {
  const { user } = useAuth();

  if (!!user)
    return (
      <div className="App">
        <Topbar showMenu={true} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    );

  return (
    <div className="App">
      <Topbar showMenu={false} />
      <Routes>
        <Route path="/*" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
