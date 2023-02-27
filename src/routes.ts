export type RouteDataType = {
  label: string;
  path: string;
  parents: RouteDataType[];
};

const home: RouteDataType = {
  label: "Home",
  path: "/home",
  parents: [],
};
const inventory = {
  label: "Inventory",
  path: "/inventory",
  parents: [home],
};
const newItem = {
  label: "New Item",
  path: "/inventory/new",
  parents: [home, inventory],
};
const item = {
  label: "Item",
  path: "/inventory/item",
  parents: [home, inventory],
};
const editForm = {
  label: "Edit Form",
  path: "/inventory/edit-form",
  parents: [home, inventory],
};
const userAccount = {
  label: "Account",
  path: "/user-account",
  parents: [home],
};
const changePassword = {
  label: "Change Password",
  path: "/change-password",
  parents: [home],
};

const routes = {
  home,
  inventory,
  newItem,
  item,
  editForm,
  userAccount,
  changePassword,
};

export default routes;
