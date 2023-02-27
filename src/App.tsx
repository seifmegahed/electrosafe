// React
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Loading from "./components/Modals/Loading";
import PageWrapper from "./components/Containers/PageWrapper";
import NavComponents from "./components/Navigation/NavComponents";
import Topbar from "./components/Navigation/Topbar";

import { useAuth } from "./contexts/AuthProvider";
import ItemPage from "./screens/Inventory/ItemPage";
import routes from "./routes";

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

  return user ? (
    <div className="App">
      <NavComponents />
      <PageWrapper>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Navigate to={routes.home.path} />} />
            <Route path={routes.home.path} element={<Home />} />
            <Route
              path={routes.userAccount.path}
              element={<UserAccount span={2} />}
            />
            <Route
              path={routes.changePassword.path}
              element={<ChangePassword />}
            />
            <Route path={routes.inventory.path} element={<Inventory />} />
            <Route path={routes.newItem.path} element={<NewItem />} />
            <Route path={routes.item.path} element={<ItemPage />} />
            <Route path={routes.editForm.path} element={<EditPrototype />} />
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
