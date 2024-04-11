import {
  overview,
  send,
  transfer,
  invoice,
  user,
  arrowright,
  logout,
} from "../assets";

const menuItems = [
  {
    category: "GENERAL",
    list: [
      {
        icon: overview,
        title: "Overview",
        path: "/dashboard",
      },
      {
        icon: send,
        title: "send",
        path: "/send",
      },
      {
        icon: transfer,
        title: "Transfer History",
        path: "/transfer-history",
      },
      {
        icon: invoice,
        title: "Transfer Invoice",
        path: "/transfer-Invoice",
      },
    ],
  },
  {
    category: "SETTINGS",
    list: [
      {
        icon: user,
        title: "Identity",
        path: "/identity-settings",
      },
    ],
  },
];

export default menuItems;
