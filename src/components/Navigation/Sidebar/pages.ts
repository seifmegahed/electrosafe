import routes from "../../../routes";

export type ItemType = {
  label: string;
  path: string;
  subPages?: { label: string; path: string }[];
};

export type PagesType = ItemType[];

export const pages: PagesType = [
  { label: routes.home.label, path: routes.home.path },
  {
    label: routes.inventory.label,
    path: routes.inventory.path,
    subPages: [
      { label: "All Items", path: routes.inventory.path },
      { label: routes.newItem.label, path: routes.newItem.path },
    ],
  },
  // { label: "Sales", path: "/sales" },
  // { label: "Treasury", path: "/treasury" },
  // { label: "Purchasing", path: "/purchasing" },
];
