import { Fragment } from "react";
import Header from "../components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </Fragment>
  );
}
