import { Link, useRouteLoaderData } from "react-router-dom";
import Container from "./Container";
import { useState } from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";

export default function Header() {
  const rootData = useRouteLoaderData("root");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container
      containerClassName="fixed top-0 left-0 w-full bg-white h-20 border-b shadow-sm z-10"
      className="flex justify-between items-center bg-white"
    >
      <Link
        to="/"
        title={rootData.variables.name}
        className="p-3 px-12 -ml-12 flex-shrink-0"
      >
        <img
          className="h-8 w-auto"
          title={rootData.variables.name}
          alt={rootData.variables.name}
          src={rootData.variables.logo}
        />
      </Link>
      <button
        type="button"
        onClick={() => setShowMenu((value) => !value)}
        className="block lg:hidden p-3 -mr-3"
      >
        {showMenu ? (
          <RiCloseFill className="text-xl" />
        ) : (
          <RiMenuFill className="text-xl" />
        )}
      </button>
      <nav
        className={`h-auto lg:h-full absolute lg:static top-0 left-0 w-full bg-white lg:bg-transparent ml-0 lg:ml-3 transition duration-1000 -z-10 lg:z-0 transform ${
          showMenu ? "translate-y-20" : "-translate-y-full"
        } lg:translate-y-0`}
      >
        <ul className="flex flex-col lg:flex-row justify-start lg:justify-end items-start lg:items-center h-full mx-0 lg:-mx-5 shadow-sm lg:shadow-none py-5 lg:py-0">
          <li className="h-full w-full lg:w-auto">
            <Link
              title="Home"
              to="/"
              className="h-full py-3 lg:py-0 px-5 flex justify-start lg:justify-center items-center hover:bg-gray-200"
            >
              Home
            </Link>
          </li>
          <li className="h-full w-full lg:w-auto">
            <Link
              to="/courses"
              title="Kursus"
              className="h-full py-3 lg:py-0 px-5 flex justify-start lg:justify-center items-center hover:bg-gray-200"
            >
              Kursus
            </Link>
          </li>
          <li className="h-full w-full lg:w-auto">
            <Link
              to="/articles"
              title="Artikel"
              className="h-full py-3 lg:py-0 px-5 flex justify-start lg:justify-center items-center hover:bg-gray-200"
            >
              Artikel
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
