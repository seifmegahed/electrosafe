import { useEffect } from "react";
import { Topbar } from "./components";
import { useAuth } from "./contexts/AuthProvider";

import Login from "./screens/Login";

const App = () => {
  const { user } = useAuth();

  return (
    <div className="App">
      <Topbar showMenu={true} />
      <Login />
    </div>
  );
};

export default App;
