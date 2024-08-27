import React, { Fragment } from "react";
import Head from "next/head";
import ScrollToTop from "../../components/scrollTop/ScrollToTopButton";
import Blogs from "../../components/blogs/Blogs";
import AboutMe from "../../components/aboutme/AboutMe";
import Trusted from "../../components/trusted/Trusted";
import Discount from "../../components/discount/Discount";
import Mission from "../../components/mission/Mission";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <AboutMe/>
      <Trusted/>
      <Discount/>
      <Mission/>
      <Blogs/>
      <ScrollToTop />
    </Fragment>
  );
};

export default HomePage;
