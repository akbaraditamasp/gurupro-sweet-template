import axios from "axios";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { decodeLowerCaseToNumber, slugify } from "./slugify";
import { client } from "./client";
import CourseDetail from "./pages/CourseDetail";

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
      {
        path: "course/:slug",
        loader: async ({ params }) => {
          const slugs = params.slug.split("-");
          const id = decodeLowerCaseToNumber(slugs.pop());
          const slug = slugs.join("-");
          let data = {};

          try {
            data = await client
              .get("/course/" + id)
              .then((response) => response.data);
          } catch (e) {
            throw new Response("Not Found", { status: 404 });
          }

          if (slugify(data.name) !== slug) {
            throw new Response("Not Found", { status: 404 });
          }

          return data;
        },
        element: <CourseDetail />,
      },
    ],
  },
];

export default routes;
