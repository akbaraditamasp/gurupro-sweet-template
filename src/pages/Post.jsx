import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import Container from "../components/Container";
import moment from "moment";
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

export default function Post() {
  const rootData = useRouteLoaderData("root");
  const data = useLoaderData();
  return (
    <Fragment>
      <Helmet>
        <title>{data.title}</title>
        <meta
          name="description"
          content={data.body.replace(/(<([^>]+)>)/gi, "").substring(0, 350)}
        />
        <meta property="og:image" content={data.thumbnail} />
        <meta
          property="og:description"
          content={data.body.replace(/(<([^>]+)>)/gi, "").substring(0, 350)}
        />
        <meta property="og:title" content={data.title} />
        <meta property="og:url" content={rootData.url} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Container
        containerClassName="pt-12 lg:pt-20 pb-8 mt-20"
        containerProps={{
          style: { backgroundColor: rootData.variables.color },
        }}
        className="w-full lg:w-[800px] xl:w-[800px]"
      >
        <h1 className="font-kanit text-white font-bold text-xl lg:text-3xl text-center">
          {data.title}
        </h1>
        <h2 className="text-gray-200 text-center">
          diposting pada {moment(data.created_at).format("DD MMMM YYYY")}
        </h2>
        <img
          src={data.thumbnail}
          alt={data.title}
          title={data.title}
          className="w-full h-auto rounded mt-5"
        />
      </Container>
      <Container
        containerClassName="bg-gray-100 py-8 pb-20"
        className="w-full lg:w-[800px] xl:w-[800px]"
      >
        <div
          className="prose max-w-full text-justify"
          dangerouslySetInnerHTML={{ __html: data.body }}
        />
      </Container>
    </Fragment>
  );
}
