import { Fragment, useEffect } from "react";
import Header from "../components/Header";
import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useRouteLoaderData,
} from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

export default function Layout() {
  const rootData = useRouteLoaderData("root");
  const location = useLocation();

  useEffect(() => {
    fbq("init", rootData.variables.pixel_id);
  }, []);

  useEffect(() => {
    fbq("track", "PageView");
  }, [location]);

  return (
    <Fragment>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={`${rootData.variables.favicon}?image=57x57&quality=90`}
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={`${rootData.variables.favicon}?image=60x60&quality=90`}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${rootData.variables.favicon}?image=72x72&quality=90`}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${rootData.variables.favicon}?image=76x76&quality=90`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${rootData.variables.favicon}?image=114x114&quality=90`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${rootData.variables.favicon}?image=120x120&quality=90`}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${rootData.variables.favicon}?image=144x144&quality=90`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${rootData.variables.favicon}?image=152x152&quality=90`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${rootData.variables.favicon}?image=180x180&quality=90`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${rootData.variables.favicon}?image=192x192&quality=90`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${rootData.variables.favicon}?image=32x32&quality=90`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${rootData.variables.favicon}?image=96x96&quality=90`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${rootData.variables.favicon}?image=16x16&quality=90`}
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content={`${rootData.variables.favicon}?image=144x144&quality=90`}
        />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
      <noscript>
        <img
          height="1"
          width="1"
          style="display: none"
          src={`https://www.facebook.com/tr?id=${rootData.variables.pixel_id}&ev=PageView&noscript=1`}
        />
      </noscript>
    </Fragment>
  );
}
