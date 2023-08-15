import axios from "axios";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const routes = [
  {
    path: "/",
    id: "root",
    loader: async ({ context }) => {
      let data = context?.data
        ? { ...context.data, url: context.url }
        : await axios
            .get(
              "https://api.gurupro.id/api/micro/subdomain?subdomain=ngin-academy.gurupro.id"
            )
            .then((response) => response.data);

      return data;
    },
    element: <Layout />,
    children: [
      {
        path: "",
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
