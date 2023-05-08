import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import { ArrowsProvider } from "../contexts/ArrowsContext";
import { PageProvider } from "../contexts/PageContext";

const mont = Montserrat({ weight: "900", subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>();

  return (
    <main className={mont.className}>
      <ArrowsProvider>
        <PageProvider>
          <Component {...pageProps} />
        </PageProvider>
      </ArrowsProvider>
    </main>
  );
}

export default MyApp;
