import axios from "axios";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
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
    element: <Home />,
  },
];

export default routes;
