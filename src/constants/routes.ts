import Layout from "../shared/Layout/Layout";

export const routes = [
  {
    component: Layout,
    path: "/admin",
    role: ["Admin", "orgAdmin", "user"],
    modulePermission: "plan",
  },
];
