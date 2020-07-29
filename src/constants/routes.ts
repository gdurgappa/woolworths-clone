import Layout from "../components/Layout";

export const routes = [
  {
    component: Layout,
    path: "/admin",
    role: ["Admin", "orgAdmin", "user"],
    modulePermission: "plan",
  },
];
