import { Link, useRouteLoaderData } from "react-router-dom";
import Container from "../components/Container";
import { Fragment } from "react";
import { NumericFormat } from "react-number-format";
import { encodeNumberToLowerCase, slugify } from "../slugify";
import { Helmet } from "react-helmet-async";

export default function Courses() {
  const rootData = useRouteLoaderData("root");
  return (
    <Fragment>
      <Helmet>
        <title>Kursus Unggulan</title>
        <meta
          name="description"
          content={"Berikut adalah kursus unggulan yang bisa Anda ikuti"}
        />
        <meta property="og:image" content={rootData.variables.logo} />
        <meta
          property="og:description"
          content={"Berikut adalah kursus unggulan yang bisa Anda ikuti"}
        />
        <meta property="og:title" content={"Kursus Unggulan"} />
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
          Kursus Unggulan
        </h1>
        <h2 className="text-gray-200">
          Berikut adalah kursus unggulan yang bisa Anda ikuti
        </h2>
      </Container>
      <Container containerClassName="bg-gray-100 py-12">
        <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-4 gap-5">
          {rootData.user.courses?.map((item, index) => (
            <div
              className="flex flex-col group transition duration-300 relative"
              key={`${index}`}
            >
              <div
                className="w-full relative rounded overflow-hidden"
                style={{
                  paddingTop: "56.25%",
                  backgroundColor: rootData.variables.color,
                }}
              >
                <img
                  src={item.banner}
                  alt={item.name}
                  title={item.name}
                  className="w-full h-full absolute top-0 left-0 opacity-100 group-hover:opacity-70"
                />
              </div>
              <div className="font-bold text-gray-700 font-kanit mt-2 line-clamp-2 text-base lg:text-lg">
                {item.name}
              </div>
              <div className="flex items-center justify-start space-x-3 text-sm lg:text-base">
                <div
                  style={{ color: rootData.variables.color }}
                  className="text-base lg:text-lg"
                >
                  <NumericFormat
                    value={
                      item.discount
                        ? item.price - (item.discount / 100) * item.price
                        : item.price
                    }
                    thousandSeparator=","
                    prefix="Rp "
                    displayType="text"
                  />
                </div>
                {item.discount ? (
                  <div className="text-sm line-through">
                    <NumericFormat
                      value={item.price}
                      thousandSeparator=","
                      prefix="Rp "
                      displayType="text"
                    />
                  </div>
                ) : null}
              </div>
              <Link
                to={`/course/${slugify(item.name)}-${encodeNumberToLowerCase(
                  `${item.id}`
                )}`}
                title={item.name}
                className="absolute top-0 left-0 rounded w-full h-full opacity-0"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Fragment>
  );
}
