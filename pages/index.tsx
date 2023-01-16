import { useState } from "react";
import { Devonshire } from "@next/font/google";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Contact from "../components/organisms/Contact";
import Content from "../components/organisms/Content";
import Header from "../components/organisms/Header";
import Banner from "../components/atoms/Banner";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Yassine Yousfi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-full w-full">
        <Header />
        <Content />
      </main>

      <footer className="bg-black">
        <Contact />
        <Banner />
      </footer>
    </div>
  );
};

export default Home;
