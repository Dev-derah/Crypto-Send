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
      },
      {
        icon: send,
        title: "send",
      },
      {
        icon: transfer,
        title: "Transfer History",
      },
      {
        icon: invoice,
        title: "Transfer Invoice",
      },
    ],
  },
  {
    category: "SETTINGS",
    list: [
      {
        icon: user,
        title: "Identity",
      },
      {
        icon: user,
        title: "Identity",
      },
    ],
  },
];

export default menuItems;
