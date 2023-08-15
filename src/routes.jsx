import axios from "axios";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    id: "root",
    loader: async ({ context }) => {
      let data = context?.data
        ? { ...context.data, url: context.url }
        : await axios
            .get(
              "https://api.gurupro.id/api/micro/subdomain?subdomain=code-with-akbar.gurupro.id"
            )
            .then((response) => response.data);

      return data;
    },
    element: <Home />,
  },
];

export default routes;
