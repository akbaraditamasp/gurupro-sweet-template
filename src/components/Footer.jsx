import { Fragment } from "react";
import Container from "./Container";
import { useRouteLoaderData } from "react-router-dom";
import * as icon from "react-icons/ri";

export default function Footer() {
  const rootData = useRouteLoaderData("root");

  return (
    <Fragment>
      <Container
        containerClassName="py-20 bg-gray-200"
        className="flex flex-col lg:flex-row justify-start lg:justify-between"
      >
        <div className="w-full lg:w-1/3">
          <img
            className="h-10 w-auto"
            title={rootData.variables.name}
            alt={rootData.variables.name}
            src={rootData.variables.logo}
          />
          <div
            className="mt-5 text-sm lg:text-base"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {rootData.variables.address}
          </div>
        </div>
        <div className="mt-5 lg:mt-0 flex flex-col items-start lg:items-end">
          <h4 className="font-bold text-gray-800 font-kanit mb-3">
            Ikuti di Sosial Media
          </h4>
          <div className="flex justify-start lg:justify-end items-center space-x-3">
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
                  key={`${index}`}
                  href="/"
                  title={item.name}
                  style={{ backgroundColor: rootData.variables.color }}
                  className="w-10 h-10 rounded-full flex justify-center items-center"
                >
                  <SocialIcon className="text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
      <Container
        className="py-5"
        containerClassName="bg-gray-500 text-white text-sm lg:text-base text-center lg:text-left"
      >
        &copy;2023 Powered by GuruPRO, All Rights Reserved
      </Container>
    </Fragment>
  );
}
