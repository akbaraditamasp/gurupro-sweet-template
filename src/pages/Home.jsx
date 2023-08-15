import { Fragment } from "react";
import { RiCheckFill } from "react-icons/ri";
import { Link, useRouteLoaderData } from "react-router-dom";
import { ReactComponent as Background } from "../assets/Background.svg";
import Container from "../components/Container";
import QuestionList from "../components/QuestionList";
import * as icon from "react-icons/ri";

export default function Home() {
  const rootData = useRouteLoaderData("root");
  return (
    <Fragment>
      <Container
        containerClassName="fixed top-0 left-0 w-full bg-white h-20 shadow-sm z-10"
        className="flex justify-between items-center"
      >
        <Link to="/" title={rootData.variables.name}>
          <img
            className="h-10 w-auto"
            title={rootData.variables.name}
            alt={rootData.variables.name}
            src={rootData.variables.logo}
          />
        </Link>
        <nav className="h-full">
          <ul className="flex justify-end items-center h-full -mx-5">
            <li className="h-full">
              <Link
                title="Home"
                to="/"
                className="h-full px-5 flex justify-center items-center hover:bg-gray-200"
              >
                Home
              </Link>
            </li>
            <li className="h-full">
              <Link
                to="/"
                className="h-full px-5 flex justify-center items-center hover:bg-gray-200"
              >
                Kursus
              </Link>
            </li>
            <li className="h-full">
              <Link
                to="/"
                className="h-full px-5 flex justify-center items-center hover:bg-gray-200"
              >
                Artikel
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
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
          src="https://www.idprocloud.com/api/clkv5urab0005aapg5iqe71q3"
          title={rootData.variables.title}
          className="absolute bottom-0 right-8 lg:right-[100px] xl:right-[150px] h-[70%] w-auto"
        />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-30" />
        <div className="w-1/2 text-gray-200 relative h-screen flex flex-col justify-center">
          <h1 className="text-white font-kanit text-4xl font-bold">
            {rootData.variables.title}
          </h1>
          <h2 className="font-normal mt-1">{rootData.variables.subtitle}</h2>
        </div>
        <div className="h-20 flex justify-start items-center space-x-20">
          {rootData.variables.partners?.map((item, index) => (
            <img
              key={`${index}`}
              title={item.name}
              alt={item.name}
              src={item.logo}
              className="h-12 w-auto opacity-75"
            />
          ))}
        </div>
      </Container>
      <Container
        containerClassName="bg-gray-200 py-20"
        className="flex justify-center items-stretch space-x-8"
      >
        <img
          alt={"Kembangkan Kemampuan Anda Bersama " + rootData.variables.name}
          title={"Kembangkan Kemampuan Anda Bersama " + rootData.variables.name}
          src={rootData.variables.hook_image}
          className="w-1/2 h-auto"
        />
        <div className="flex-1">
          <div
            className="text-xl mt-2"
            style={{ color: rootData.variables.color }}
          >
            #GrowthYourSkill
          </div>
          <h3 className="text-3xl font-bold font-kanit text-gray-800 mb-5">
            Kembangkan Kemampuan Anda Bersama Kami
          </h3>
          <div className="flex flex-col justify-start space-y-4">
            {rootData.variables.benefit?.map((item, index) => (
              <div
                className="flex items-center justify-start space-x-4"
                key={`${index}`}
              >
                <div className="w-8 h-8 bg-white border border-gray-300 rounded-full flex justify-center items-center flex-shrink-0">
                  <RiCheckFill
                    className="text-xl"
                    style={{ color: rootData.variables.color }}
                  />
                </div>
                <div className="flex-1">{item.text}</div>
              </div>
            ))}
          </div>
          <Link
            className="block w-40 relative overflow-hidden rounded-full py-3 text-center text-white mt-12 group"
            to="/"
            style={{ backgroundColor: rootData.variables.color }}
          >
            <span className="bg-black absolute top-0 left-0 w-full h-full bg-opacity-0 group-hover:bg-opacity-20" />
            <span className="relative">Pilihan Kursus</span>
          </Link>
        </div>
      </Container>
      <Container containerClassName="bg-gray-100 pt-20 overflow-hidden">
        <div
          className="text-xl text-center"
          style={{ color: rootData.variables.color }}
        >
          Become a Master
        </div>
        <h3 className="text-3xl font-bold font-kanit text-gray-800 text-center mt-1 mb-8">
          Kelas Online dengan Materi Paling Update
        </h3>
      </Container>
      <div className="w-full overflow-hidden pb-20 bg-gray-100">
        <div className="relative flex flex-nowrap max-w-[2000%]">
          <div className="flex flex-nowrap justify-start min-w-[100%] max-w-[2000%] animate">
            {rootData.variables.cores?.map((item, index) => (
              <div
                className="flex justify-start items-center p-5 bg-white rounded space-x-3"
                key={`${index}`}
              >
                <img
                  title={"Belajar " + item.name}
                  alt={"Belajar " + item.name}
                  src={item.icon}
                  className="w-10 h-10 flex-shrink-0 object-contain"
                />
                <div className="flex-1">
                  <div className="font-bold font-kanit text-gray-800">
                    {item.name}
                  </div>
                  <div className="text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-nowrap justify-start min-w-[100%] max-w-[2000%] transform translate-x-full animate2">
            {rootData.variables.cores?.map((item, index) => (
              <div
                className="flex justify-start items-center p-5 bg-white rounded space-x-3"
                key={`${index}`}
              >
                <img
                  title={"Belajar " + item.name}
                  alt={"Belajar " + item.name}
                  src={item.icon}
                  className="w-10 h-10 flex-shrink-0 object-contain"
                />
                <div className="flex-1">
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
      <Container containerClassName="bg-white py-20">
        <div className="text-xl" style={{ color: rootData.variables.color }}>
          #Learn
        </div>
        <h3 className="text-3xl font-bold font-kanit text-gray-800 mt-1 mb-8">
          Kelas Unggulan Kami
        </h3>
        <div className="grid grid-flow-row grid-cols-4">
          <div className="flex flex-col">
            <div
              className="w-full relative bg-gray-100 rounded overflow-hidden"
              style={{ paddingTop: "56.25%" }}
            >
              <img
                src="https://picsum.photos/400"
                className="w-full h-full absolute top-0 left-0"
              />
            </div>
            <div className="font-bold text-gray-700 font-kanit mt-2 line-clamp-2">
              Kelas Online Full-Stack Laravel Flutter: Build e-Wallet Mobile
              Apps
            </div>
            <div style={{ color: rootData.variables.color }}>Rp 90,000</div>
          </div>
        </div>
      </Container>
      <Container
        containerClassName="bg-gray-800 py-52 overflow-hidden"
        className="relative"
      >
        <div className="w-1/2 flex-shrink-0">
          <div className="text-xl" style={{ color: rootData.variables.color }}>
            Trusted By 900K+ Students
          </div>
          <h3 className="text-3xl text-white font-bold font-kanit">
            Apa Kata Mereka Tentang Kami
          </h3>
          <div className="text-gray-200">
            Dengarkan testimoni dari beberapa siswa kami berikut
          </div>
        </div>
        <div className="w-1/3 absolute top-0 right-0 flex flex-col space-y-5 animate-scroll-vertical">
          {rootData.variables.testimonials?.map((item, index) => (
            <div
              className="bg-white shadow-none hover:shadow-lg rounded-lg"
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
      <Container containerClassName="bg-white py-20">
        <div className="text-xl" style={{ color: rootData.variables.color }}>
          #Insights
        </div>
        <h3 className="text-3xl font-bold font-kanit text-gray-800 mt-1 mb-8">
          Baca Artikel Terbaru
        </h3>
        <div className="grid grid-flow-row grid-cols-4">
          <div className="flex flex-col">
            <div
              className="w-full relative bg-gray-100 rounded overflow-hidden"
              style={{ paddingTop: "56.25%" }}
            >
              <img
                src="https://picsum.photos/400"
                className="w-full h-full absolute top-0 left-0"
              />
            </div>
            <div className="font-bold text-gray-700 font-kanit mt-2 line-clamp-2 text-justify">
              Kelas Online Full-Stack Laravel Flutter: Build e-Wallet Mobile
              Apps
            </div>
            <div className="line-clamp-3 text-justify mt-2">
              Banyak perusahaan besar di era modern sekarang sedikit demi
              sedikit mulai melakukan transformasi digital. Dimana sebuah proses
              yang diterapkan oleh perusahaan untuk mengintegrasikan teknologi
              digital di semua bidang bisnis mereka. Proses transformasi digital
              ini juga akan banyak mengubah budaya dan operasional pada sebuah
              perusahaan menjadi lebih adaptif sesuai dengan perubahan
              permintaan pelanggan.
            </div>
          </div>
        </div>
      </Container>
      <Container
        containerClassName="bg-gray-100 py-20"
        className="flex flex-col"
      >
        <div
          className="text-xl text-center"
          style={{ color: rootData.variables.color }}
        >
          #FAQs
        </div>
        <h3 className="text-3xl font-bold font-kanit text-gray-800 text-center mt-1 mb-12">
          Pertanyaan yang Sering Ditanyakan
        </h3>
        <div className="w-2/3 mx-auto">
          {rootData.variables.faqs?.map((item, index) => (
            <QuestionList title={item.ask} key={`${index}`}>
              {item.question}
            </QuestionList>
          ))}
        </div>
      </Container>
      <Container
        containerClassName="py-20 bg-gray-200"
        className="flex justify-between"
      >
        <div className="w-1/3">
          <img
            className="h-10 w-auto"
            title={rootData.variables.name}
            alt={rootData.variables.name}
            src={rootData.variables.logo}
          />
          <div className="mt-5" style={{ whiteSpace: "pre-wrap" }}>
            {rootData.variables.address}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h4 className="font-bold text-gray-800 font-kanit mb-3">
            Ikuti Kami
          </h4>
          <div className="flex justify-end items-center space-x-3">
            {rootData.variables?.socials?.map((item, index) => {
              const SocialIcon =
                icon[
                  item.name === "Facebook"
                    ? "RiFacebookFill"
                    : item.name === "Instagram"
                    ? "RiInstagramFill"
                    : item.name === "Youtube"
                    ? "RiYoutubeFill"
                    : "RiTwitterFill"
                ];
              return (
                <a
                  href="/"
                  title={item.name}
                  style={{ backgroundColor: rootData.variables.color }}
                  className="w-8 h-8 rounded-full flex justify-center items-center"
                >
                  <SocialIcon className="text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
      <Container className="py-5" containerClassName="bg-gray-500 text-white">
        &copy;2023 Powered by GuruPRO, All Rights Reserved
      </Container>
    </Fragment>
  );
}
