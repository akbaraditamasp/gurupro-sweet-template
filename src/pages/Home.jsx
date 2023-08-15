import { Fragment } from "react";
import { RiCheckFill } from "react-icons/ri";
import { NumericFormat } from "react-number-format";
import { Link, useRouteLoaderData } from "react-router-dom";
import { ReactComponent as Background } from "../assets/Background.svg";
import Container from "../components/Container";
import QuestionList from "../components/QuestionList";
import { Helmet } from "react-helmet-async";
import { encodeNumberToLowerCase, slugify } from "../slugify";

export default function Home() {
  const rootData = useRouteLoaderData("root");
  return (
    <Fragment>
      <Helmet>
        <title>{rootData.variables.title}</title>
        <meta name="description" content={rootData.variables.subtitle} />
        <meta property="og:image" content={rootData.variables.logo} />
        <meta property="og:description" content={rootData.variables.subtitle} />
        <meta property="og:title" content={rootData.variables.title} />
        <meta property="og:url" content={rootData.url} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Container
        containerClassName="relative overflow-hidden"
        containerProps={{
          style: {
            backgroundColor: rootData.variables.color,
          },
        }}
      >
        <Background className="w-auto h-[80%] lg:h-[150%] absolute top-1/2 lg:top-[60%] right-0 lg:-right-56 transform translate-y-0 lg:-translate-y-1/2 translate-x-1/4 lg:translate-x-0 opacity-30" />
        <img
          src={rootData.variables.model}
          title={rootData.variables.title}
          className="absolute bottom-0 right-1/2 lg:right-[100px] xl:right-[150px] w-[90%] h-auto lg:h-[70%] lg:w-auto transform translate-x-1/2 lg:translate-x-0"
        />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-30" />
        <div className="w-full lg:w-1/2 text-gray-200 relative h-screen flex flex-col justify-start lg:justify-center pt-48 lg:pt-0">
          <h1 className="text-white font-kanit text-2xl lg:text-4xl font-bold text-center lg:text-left">
            {rootData.variables.title}
          </h1>
          <h2 className="font-normal mt-1 text-center lg:text-left">
            {rootData.variables.subtitle}
          </h2>
        </div>
        <div className="h-20 flex justify-start items-center space-x-10">
          {rootData.variables.partners?.map((item, index) => (
            <img
              key={`${index}`}
              title={item.name}
              alt={item.name}
              src={item.logo}
              className="h-20 w-auto opacity-75"
            />
          ))}
        </div>
      </Container>
      <Container
        containerClassName="bg-gray-200 py-12 lg:py-20"
        className="flex flex-col lg:flex-row justify-center items-stretch space-y-5 lg:space-y-0 space-x-0 lg:space-x-8"
      >
        <img
          alt={"Kembangkan Kemampuan Anda"}
          title={"Kembangkan Kemampuan Anda"}
          src={rootData.variables.hook_image}
          className="w-full lg:w-1/2 h-auto"
        />
        <div className="flex-1">
          <div
            className="text-base lg:text-xl mt-2"
            style={{ color: rootData.variables.color }}
          >
            #GrowthYourSkill
          </div>
          <h3 className="text-xl lg:text-3xl font-bold font-kanit text-gray-800 mb-5">
            Kembangkan Kemampuan Anda Sekarang Juga!
          </h3>
          <div className="flex flex-col justify-start space-y-4">
            {rootData.variables.benefit?.map((item, index) => (
              <div
                className="flex items-center justify-start space-x-3 lg:space-x-4"
                key={`${index}`}
              >
                <div className="w-5 h-5 lg:w-8 lg:h-8 bg-white border border-gray-300 rounded-full flex justify-center items-center flex-shrink-0">
                  <RiCheckFill
                    className="text-sm lg:text-xl"
                    style={{ color: rootData.variables.color }}
                  />
                </div>
                <div className="flex-1 text-sm lg:text-base">{item.text}</div>
              </div>
            ))}
          </div>
          <Link
            className="block w-36 lg:w-40 relative overflow-hidden rounded-full py-3 text-center text-white mt-12 group"
            to="/"
            style={{ backgroundColor: rootData.variables.color }}
          >
            <span className="bg-black absolute top-0 left-0 w-full h-full bg-opacity-0 group-hover:bg-opacity-20" />
            <span className="relative text-sm lg:text-base">
              Pilihan Kursus
            </span>
          </Link>
        </div>
      </Container>
      <Container containerClassName="bg-gray-100 pt-12 lg:pt-20 overflow-hidden">
        <div
          className="text-base lg:text-xl text-center"
          style={{ color: rootData.variables.color }}
        >
          Become a Master
        </div>
        <h3 className="text-xl lg:text-3xl font-bold font-kanit text-gray-800 text-center mt-1 mb-8">
          Kelas Online dengan Materi Paling Update
        </h3>
      </Container>
      <div className="w-full overflow-hidden pb-12 lg:pb-20 bg-gray-100">
        <div className="relative flex flex-nowrap max-w-[2000%]">
          <div className="flex flex-nowrap justify-start min-w-[100%] max-w-[2000%] animate flex-shrink-0">
            {rootData.variables.cores?.map((item, index) => (
              <div
                className="flex justify-start items-center p-5 bg-white rounded space-x-3 mx-3 flex-shrink-0"
                key={`${index}`}
              >
                <img
                  title={"Belajar " + item.name}
                  alt={"Belajar " + item.name}
                  src={item.icon}
                  className="w-10 h-10 flex-shrink-0 object-contain"
                />
                <div className="flex-1 whitespace-nowrap">
                  <div className="font-bold font-kanit text-gray-800">
                    {item.name}
                  </div>
                  <div className="text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-nowrap justify-start min-w-[100%] max-w-[2000%] transform animate flex-shrink-0">
            {rootData.variables.cores?.map((item, index) => (
              <div
                className="flex justify-start items-center p-5 bg-white rounded space-x-3 mx-3 flex-shrink-0"
                key={`${index}`}
              >
                <img
                  title={"Belajar " + item.name}
                  alt={"Belajar " + item.name}
                  src={item.icon}
                  className="w-10 h-10 flex-shrink-0 object-contain"
                />
                <div className="flex-1 whitespace-nowrap">
                  <div className="font-bold font-kanit text-gray-800">
                    {item.name}
                  </div>
                  <div className="text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Container containerClassName="bg-white py-12 lg:py-20">
        <div
          className="text-base lg:text-xl"
          style={{ color: rootData.variables.color }}
        >
          #Learn
        </div>
        <h3 className="text-xl lg:text-3xl font-bold font-kanit text-gray-800 mt-1 mb-8">
          Kelas Unggulan
        </h3>
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
                )}}`}
                title={item.name}
                className="absolute top-0 left-0 rounded w-full h-full opacity-0"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </Container>
      <Container
        containerClassName="bg-gray-800 py-12 lg:py-52 overflow-hidden"
        className="relative"
      >
        <div className="w-full lg:w-1/2 flex-shrink-0 mb-8 lg:mb-0">
          <div
            className="text-base lg:text-xl text-center lg:text-left"
            style={{ color: rootData.variables.color }}
          >
            Trusted By 900K+ Students
          </div>
          <h3 className="text-xl lg:text-3xl text-center lg:text-left text-white font-bold font-kanit">
            Apa yang Mereka Katakan
          </h3>
          <div className="text-gray-200 text-sm lg:text-base text-center lg:text-left">
            Dengarkan testimoni dari beberapa siswa yang telah ikut bergabung
          </div>
        </div>
        <div className="w-auto lg:w-1/3 static lg:absolute top-0 right-0 flex flex-row lg:flex-col items-stretch lg:items-start space-x-5 lg:space-x-0 space-y-0 lg:space-y-5 animate-scroll-horizontal lg:animate-scroll-vertical">
          {rootData.variables.testimonials?.map((item, index) => (
            <div
              className="w-full bg-white shadow-none hover:shadow-lg rounded-lg flex-shrink-0"
              key={`${index}`}
            >
              <div className="p-5 pb-0 flex items-center justify-center space-x-3">
                <img
                  alt={item.name}
                  title={item.name}
                  src={item.photo}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="flex-1">
                  <div className="font-bold text-gray-700">{item.name}</div>
                  <div className="text-sm">{item.job}</div>
                </div>
              </div>
              <div className="p-5">{item.body}</div>
            </div>
          ))}
        </div>
      </Container>
      <Container containerClassName="bg-white py-12 lg:py-20">
        <div
          className="text-base lg:text-xl"
          style={{ color: rootData.variables.color }}
        >
          #Insights
        </div>
        <h3 className="text-xl lg:text-3xl font-bold font-kanit text-gray-800 mt-1 mb-8">
          Baca Artikel Terbaru
        </h3>
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
              <div className="font-bold text-gray-800 font-kanit mt-2 line-clamp-2 text-justify text-lg">
                {item.title}
              </div>
              <div className="line-clamp-3 text-justify mt-2">{item.body}</div>
              <Link
                to="/"
                className="absolute top-0 left-0 w-full h-full rounded opacity-0"
                title={item.title}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </Container>
      <Container
        containerClassName="bg-gray-100 py-12 lg:py-20"
        className="flex flex-col"
      >
        <div
          className="text-base lg:text-xl text-center"
          style={{ color: rootData.variables.color }}
        >
          #FAQs
        </div>
        <h3 className="text-xl lg:text-3xl font-bold font-kanit text-gray-800 text-center mt-1 mb-8 lg:mb-12">
          Pertanyaan yang Sering Ditanyakan
        </h3>
        <div className="w-full lg:w-2/3 mx-auto">
          {rootData.variables.faqs?.map((item, index) => (
            <QuestionList title={item.ask} key={`${index}`}>
              {item.question}
            </QuestionList>
          ))}
        </div>
      </Container>
    </Fragment>
  );
}
