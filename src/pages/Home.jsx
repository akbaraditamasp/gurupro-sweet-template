import { Fragment } from "react";
import { RiCheckFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ReactComponent as Background } from "../assets/Background.svg";
import Container from "../components/Container";
import QuestionList from "../components/QuestionList";

export default function Home() {
  return (
    <Fragment>
      <Container
        containerClassName="fixed top-0 left-0 w-full bg-white h-20 shadow-sm z-10"
        className="flex justify-between items-center"
      >
        <Link to="/">
          <img
            className="h-10 w-auto"
            src="https://www.idprocloud.com/api/clkva2h5l0008a0pg4h7y5xly"
          />
        </Link>
        <nav className="h-full">
          <ul className="flex justify-end items-center h-full -mx-5">
            <li className="h-full">
              <Link
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
      <Container containerClassName="bg-teal-500 relative overflow-hidden">
        <Background className="w-auto h-[80%] lg:h-[150%] absolute top-1/2 lg:top-[60%] right-0 lg:-right-56 transform translate-y-0 lg:-translate-y-1/2 translate-x-1/4 lg:translate-x-0 opacity-30" />
        <img
          src="https://www.idprocloud.com/api/clkv5urab0005aapg5iqe71q3"
          className="absolute bottom-0 right-8 lg:right-[100px] xl:right-[150px] h-[70%] w-auto"
        />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-30" />
        <div className="w-1/2 text-gray-200 relative h-screen flex flex-col justify-center">
          <h1 className="text-white font-kanit text-4xl font-bold">
            DevOps and Back-End Developer Scholarship Program
          </h1>
          <h2 className="font-normal mt-1">
            Raih Beasiswa Menjadi DevOps dan Back-End Developer
          </h2>
        </div>
        <div className="h-20 flex justify-start items-center space-x-20">
          <img
            src="https://www.idprocloud.com/api/clk09k6aj000buqpgamq4f85o?image=200&quality=80"
            className="h-12 w-auto opacity-75"
          />
          <img
            src="https://www.idprocloud.com/api/clk09l5h0000luqpg8txp9nbk?image=200&quality=80"
            className="h-12 w-auto opacity-75"
          />
        </div>
      </Container>
      <Container
        containerClassName="bg-gray-200 py-20"
        className="flex justify-center items-stretch space-x-8"
      >
        <img
          src="https://buildwithangga.com/themes/front/images/landing-page/privilege/keuntungan%20utama%20belajar%20ui%20ux%20coding%20di%20BuildWithAngga.png"
          className="w-1/2 h-auto"
        />
        <div className="flex-1">
          <div className="text-teal-500 text-xl mt-2">#GrowthYourSkill</div>
          <h3 className="text-3xl font-bold font-kanit text-gray-800 mb-5">
            Kembangkan Kemampuan Anda Bersama Kami
          </h3>
          <div className="flex flex-col justify-start space-y-4">
            <div className="flex items-center justify-start space-x-4">
              <div className="w-8 h-8 bg-white border border-gray-300 rounded-full flex justify-center items-center flex-shrink-0">
                <RiCheckFill className="text-xl text-teal-500" />
              </div>
              <div className="flex-1">Akses BuildWithAngga selamanya</div>
            </div>
            <div className="flex items-center justify-start space-x-4">
              <div className="w-8 h-8 bg-white border border-gray-300 rounded-full flex justify-center items-center flex-shrink-0">
                <RiCheckFill className="text-xl text-teal-500" />
              </div>
              <div className="flex-1">Akses BuildWithAngga selamanya</div>
            </div>
            <div className="flex items-center justify-start space-x-4">
              <div className="w-8 h-8 bg-white border border-gray-300 rounded-full flex justify-center items-center flex-shrink-0">
                <RiCheckFill className="text-xl text-teal-500" />
              </div>
              <div className="flex-1">Akses BuildWithAngga selamanya</div>
            </div>
          </div>
          <Link
            className="block w-40 relative overflow-hidden rounded-full py-3 text-center bg-teal-500 text-white mt-12 group"
            to="/"
          >
            <span className="bg-black absolute top-0 left-0 w-full h-full bg-opacity-0 group-hover:bg-opacity-20" />
            <span className="relative">Pilihan Kursus</span>
          </Link>
        </div>
      </Container>
      <Container containerClassName="bg-gray-100 pt-20 overflow-hidden">
        <div className="text-xl text-teal-500 text-center">Become a Master</div>
        <h3 className="text-3xl font-bold font-kanit text-gray-800 text-center mt-1 mb-8">
          Kelas Online dengan Materi Paling Update
        </h3>
      </Container>
      <div className="w-full overflow-hidden pb-20 bg-gray-100">
        <div className="relative flex flex-nowrap max-w-[2000%]">
          <div className="flex flex-nowrap justify-start min-w-[100%] max-w-[2000%] animate">
            <div className="flex justify-start items-center p-5 bg-white rounded space-x-3">
              <img
                src="https://buildwithangga.com/themes/front/images/logo/vue-logomark.svg"
                className="w-10 h-10 flex-shrink-0 object-contain"
              />
              <div className="flex-1">
                <div className="font-bold font-kanit text-gray-800">Vue</div>
                <div className="text-sm">Front-End Development</div>
              </div>
            </div>
          </div>
          <div className="flex flex-nowrap justify-start min-w-[100%] max-w-[2000%] transform translate-x-full animate2">
            <div className="flex justify-start items-center p-5 bg-white rounded space-x-3">
              <img
                src="https://buildwithangga.com/themes/front/images/logo/vue-logomark.svg"
                className="w-10 h-10 flex-shrink-0 object-contain"
              />
              <div className="flex-1">
                <div className="font-bold font-kanit text-gray-800">Vue</div>
                <div className="text-sm">Front-End Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container containerClassName="bg-white py-20">
        <div className="text-xl text-teal-500">#Learn</div>
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
            <div className="text-teal-500">Rp 90,000</div>
          </div>
        </div>
      </Container>
      <Container
        containerClassName="bg-gray-800 py-52 overflow-hidden"
        className="relative"
      >
        <div className="w-1/2 flex-shrink-0">
          <div className="text-xl text-teal-500">Trusted By 900K+ Students</div>
          <div className="text-3xl text-white font-bold font-kanit">
            Apa Kata Mereka Tentang Kami
          </div>
          <div className="text-gray-200">
            Dengarkan testimoni dari beberapa siswa kami berikut
          </div>
        </div>
        <div className="w-1/3 absolute top-0 right-0 flex flex-col space-y-5 animate-scroll-vertical">
          <div className="bg-white shadow-none hover:shadow-lg rounded-lg">
            <div className="p-5 pb-0 flex items-center justify-center space-x-3">
              <img
                src="https://picsum.photos/200"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div className="flex-1">
                <div className="font-bold text-gray-700">Akbar Aditama</div>
                <div className="text-sm">Full Stack Developer</div>
              </div>
            </div>
            <div className="p-5">
              BuildWithAngga terbaik! cocok banget pemula belajar UI/UX design.
            </div>
          </div>
          <div className="bg-white shadow-none hover:shadow-lg rounded-lg">
            <div className="p-5 pb-0 flex items-center justify-center space-x-3">
              <img
                src="https://picsum.photos/200"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div className="flex-1">
                <div className="font-bold text-gray-700">Akbar Aditama</div>
                <div className="text-sm">Full Stack Developer</div>
              </div>
            </div>
            <div className="p-5">
              BuildWithAngga terbaik! cocok banget pemula belajar UI/UX design.
            </div>
          </div>
          <div className="bg-white shadow-none hover:shadow-lg rounded-lg">
            <div className="p-5 pb-0 flex items-center justify-center space-x-3">
              <img
                src="https://picsum.photos/200"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div className="flex-1">
                <div className="font-bold text-gray-700">Akbar Aditama</div>
                <div className="text-sm">Full Stack Developer</div>
              </div>
            </div>
            <div className="p-5">
              BuildWithAngga terbaik! cocok banget pemula belajar UI/UX design.
            </div>
          </div>
        </div>
      </Container>
      <Container containerClassName="bg-white py-20">
        <div className="text-xl text-teal-500">#Insights</div>
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
        <div className="text-xl text-teal-500 text-center">#faqs</div>
        <h3 className="text-3xl font-bold font-kanit text-gray-800 text-center mt-1 mb-12">
          Pertanyaan yang Sering Ditanyakan
        </h3>
        <div className="w-2/3 mx-auto">
          <QuestionList title={"Lorem ipsum"}>Lorem ipsum</QuestionList>
        </div>
      </Container>
      <Container
        containerClassName="py-20 bg-gray-200"
        className="flex justify-between"
      >
        <div className="w-1/3">
          <img
            className="h-10 w-auto"
            src="https://www.idprocloud.com/api/clkva2h5l0008a0pg4h7y5xly"
          />
          <div className="mt-5">
            Menara 165 ESQ <br />
            JL TB Simatupang Kav 1, RT.3/RW.3, Kel. Cilandak Timur <br />
            Kec. Ps. Minggu <br />
            Kota Jakarta Selatan
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h4 className="font-bold text-gray-800 font-kanit mb-3">
            Ikuti Kami
          </h4>
          <div className="flex justify-end items-center space-x-3">
            <a
              href="/"
              className="bg-teal-500 w-8 h-8 rounded-full flex justify-center items-center"
            >
              <RiFacebookFill className="text-white" />
            </a>
            <a
              href="/"
              className="bg-teal-500 w-8 h-8 rounded-full flex justify-center items-center"
            >
              <RiTwitterFill className="text-white" />
            </a>
          </div>
        </div>
      </Container>
      <Container className="py-5" containerClassName="bg-gray-500 text-white">
        &copy;2023 Powered by GuruPRO, All Rights Reserved
      </Container>
    </Fragment>
  );
}
