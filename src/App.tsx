// React
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Loading from "./components/Modals/Loading";
import PageWrapper from "./components/Containers/PageWrapper";
import NavComponents from "./components/Navigation/NavComponents";
import Topbar from "./components/Navigation/Topbar";

import { useAuth } from "./contexts/AuthProvider";

// Lazy Loading
const Home = lazy(() => import("./screens/Home"));
const UserAccount = lazy(() => import("./screens/UserAccount"));
const ChangePassword = lazy(() => import("./screens/ChangePassword"));
const Login = lazy(() => import("./screens/Login"));
const Inventory = lazy(() => import("./screens/Inventory"));
const NewItem = lazy(() => import("./screens/Inventory/NewItem"));
const EditPrototype = lazy(() => import("./screens/Inventory/EditPrototype"));

const App = () => {
  const { user } = useAuth();

  return !!user ? (
    <div className="App">
      <NavComponents />
      <PageWrapper>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user-account" element={<UserAccount span={2} />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/new" element={<NewItem />} />
            <Route
              path="/inventory/edit-prototype"
              element={<EditPrototype />}
            />
          </Routes>
        </Suspense>
      </PageWrapper>
    </div>
  ) : (
    <div className="App">
      <Topbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
