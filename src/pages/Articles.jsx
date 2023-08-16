import { Link, useRouteLoaderData } from "react-router-dom";
import Container from "../components/Container";
import { Fragment } from "react";
import { NumericFormat } from "react-number-format";
import { encodeNumberToLowerCase, slugify } from "../slugify";
import { Helmet } from "react-helmet-async";

export default function Articles() {
  const rootData = useRouteLoaderData("root");
  return (
    <Fragment>
      <Helmet>
        <title>Artikel Terbaru</title>
        <meta
          name="description"
          content={
            "Tambah wawasan dan pengetahuan dengan membaca artikel-artikel terbaru disini"
          }
        />
        <meta property="og:image" content={rootData.variables.logo} />
        <meta
          property="og:description"
          content={
            "Tambah wawasan dan pengetahuan dengan membaca artikel-artikel terbaru disini"
          }
        />
        <meta property="og:title" content={"Artikel Terbaru"} />
        <meta property="og:url" content={rootData.url} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Container
        containerClassName="py-12 lg:py-20 mt-20"
        containerProps={{
          style: { backgroundColor: rootData.variables.color },
        }}
      >
        <h1 className="font-kanit text-white font-bold text-xl lg:text-3xl">
          Artikel Terbaru
        </h1>
        <h2 className="text-gray-200">
          Tambah wawasan dan pengetahuan dengan membaca artikel-artikel terbaru
          disini
        </h2>
      </Container>
      <Container containerClassName="bg-gray-100 py-12">
        <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-4 gap-5">
          {rootData.user.articles?.map((item, index) => (
            <div className="flex flex-col relative group" key={`${index}`}>
              <div
                className="w-full relative rounded overflow-hidden"
                style={{
                  paddingTop: "56.25%",
                  backgroundColor: rootData.variables.color,
                }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  title={item.title}
                  className="w-full h-full absolute top-0 left-0 object-cover opacity-100 group-hover:opacity-70"
                />
              </div>
              <div className="font-bold text-gray-800 font-kanit mt-2 line-clamp-2 text-lg">
                {item.title}
              </div>
              <div className="line-clamp-3 text-justify mt-2">{item.body}</div>
              <Link
                to={`/article/${slugify(item.title)}-${encodeNumberToLowerCase(
                  `${item.id}`
                )}`}
                className="absolute top-0 left-0 w-full h-full rounded opacity-0"
                title={item.title}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Fragment>
  );
}
