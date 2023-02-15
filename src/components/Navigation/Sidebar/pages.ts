export type ItemType = {
  label: string;
  path: string;
  subPages?: { label: string; path: string }[];
};

export type PagesType = ItemType[];

export const pages: PagesType = [
  { label: "Home", path: "/home" },
  {
    label: "Inventory",
    path: "/inventory",
    subPages: [
      { label: "All Items", path: "/inventory" },
      { label: "NewItem", path: "/inventory/new" },
    ],
  },
  { label: "Sales", path: "/sales" },
  { label: "Treasury", path: "/treasury" },
  { label: "Purchasing", path: "/purchasing" },
];
