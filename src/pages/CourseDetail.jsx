import { Fragment } from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import Container from "../components/Container";
import { NumericFormat } from "react-number-format";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import {
  RiBarChartLine,
  RiCalendar2Line,
  RiSignalWifiFill,
} from "react-icons/ri";
import moment from "moment/moment";
import { Helmet } from "react-helmet-async";

export default function CourseDetail() {
  const rootData = useRouteLoaderData("root");
  const data = useLoaderData();

  const star = parseFloat(data.reviews_avg_star);

  const leveling = {
    beginner: "Pemula",
    intermediate: "Menengah",
    advance: "Tinggi",
  };

  return (
    <div className="relative bg-gray-100 pb-8">
      <Helmet>
        <title>{data.name}</title>
        <meta name="description" content={data.short_desc} />
        <meta property="og:image" content={data.banner} />
        <meta property="og:description" content={data.short_desc} />
        <meta property="og:title" content={data.name} />
        <meta property="og:url" content={rootData.url} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Container
        containerClassName="static lg:absolute top-0 left-0 right-0 bottom-8 pt-28 lg:pt-20 pointer-events-none bg-gray-800 lg:bg-transparent pb-0.5"
        className="static lg:relative flex items-start"
      >
        <div className="hidden lg:block w-2/3" />
        <div className="w-full lg:w-1/3 sticky top-28 right-0 bg-transparent lg:bg-white p-0 lg:p-5 rounded shadow-none lg:shadow pointer-events-auto">
          <div
            className="relative w-full rounded overflow-hidden"
            style={{ paddingTop: "56.25%" }}
          >
            <img
              src={data.banner}
              alt={data.name}
              title={data.name}
              className="w-full h-full absolute top-0 left-0 object-cover"
            />
          </div>
          <div className="hidden lg:flex items-center justify-start space-x-3 mt-5">
            <div className="text-2xl text-gray-800 font-bold">
              <NumericFormat
                value={
                  data.discount
                    ? data.price - (data.discount / 100) * data.price
                    : data.price
                }
                thousandSeparator=","
                prefix="Rp "
                displayType="text"
              />
            </div>
            {data.discount ? (
              <div className="line-through">
                <NumericFormat
                  value={data.price}
                  thousandSeparator=","
                  prefix="Rp "
                  displayType="text"
                />
              </div>
            ) : null}
          </div>
          <a
            href={
              "https://app.gurupro.id/main/ecourse/course-detail/" + data.id
            }
            title={"Ikuti Kursus " + data.name}
            className="py-3 px-5 rounded mt-8 w-full hidden lg:block text-white text-center"
            style={{ backgroundColor: rootData.variables.color }}
          >
            Ikuti Kursus
          </a>
        </div>
      </Container>
      <Container containerClassName="py-8 pb-12 lg:py-20 -mt-1 lg:mt-20 bg-gray-800">
        <div className="w-full lg:w-2/3 pr-0 px-2 lg:px-0 lg:pr-8">
          <div className="flex justify-start items-center space-x-2 text-sm text-yellow-500 mb-5">
            <span className="font-bold">{star || "Belum ada rating"}</span>
            {star >= 1 ? <FaStar /> : star > 0 ? <FaStarHalf /> : <FaRegStar />}
            {star >= 2 ? <FaStar /> : star > 1 ? <FaStarHalf /> : <FaRegStar />}
            {star >= 3 ? <FaStar /> : star > 2 ? <FaStarHalf /> : <FaRegStar />}
            {star >= 4 ? <FaStar /> : star > 3 ? <FaStarHalf /> : <FaRegStar />}
            {star >= 5 ? <FaStar /> : star > 4 ? <FaStarHalf /> : <FaRegStar />}
          </div>
          <h1 className="text-xl lg:text-3xl text-white font-kanit font-bold">
            {data.name}
          </h1>
          <div className="flex lg:hidden items-center justify-start space-x-2 mb-2 text-sm">
            <div
              className="text-base font-bold"
              style={{ color: rootData.variables.color }}
            >
              <NumericFormat
                value={
                  data.discount
                    ? data.price - (data.discount / 100) * data.price
                    : data.price
                }
                thousandSeparator=","
                prefix="Rp "
                displayType="text"
              />
            </div>
            {data.discount ? (
              <div className="line-through text-gray-400">
                <NumericFormat
                  value={data.price}
                  thousandSeparator=","
                  prefix="Rp "
                  displayType="text"
                />
              </div>
            ) : null}
          </div>
          <h2 className="text-gray-200">{data.short_desc}</h2>
          <div className="flex justify-start items-center space-x-5 text-sm text-gray-200 mt-5">
            <div className="flex justify-start items-center space-x-2">
              <RiCalendar2Line />
              <span>{moment(data.started_at).format("DD MMMM YYYY")}</span>
            </div>
            <div className="flex justify-start items-center space-x-2">
              <RiBarChartLine />
              <span>{leveling[data.level]}</span>
            </div>
          </div>
        </div>
      </Container>
      <Container containerClassName="bg-gray-100">
        <div className="w-full lg:w-2/3 pt-8 px-0 lg:pr-8">
          <div
            className="border bg-white rounded p-5 prose max-w-full"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </Container>
      <Container containerClassName="flex lg:hidden bg-gray-100 sticky bottom-0 py-3">
        <a
          href={"https://app.gurupro.id/main/ecourse/course-detail/" + data.id}
          title={"Ikuti Kursus " + data.name}
          className="py-3 px-5 rounded w-full block text-white text-center"
          style={{ backgroundColor: rootData.variables.color }}
        >
          Ikuti Kursus
        </a>
      </Container>
    </div>
  );
}
