import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import { ArrowsProvider } from "../contexts/ArrowsContext";
import { PageProvider } from "../contexts/PageContext";

const mont = Montserrat({ weight: "900", subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
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
