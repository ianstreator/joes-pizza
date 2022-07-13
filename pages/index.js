import Head from "next/head";

import Header from "../components/Header";
import Information from "../components/Information";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>{"Joe's Pizza"}</title>
        <meta
          name="description"
          content="Italian Pizza Restaurant In Schaumburg Illinois"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Italianno"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="app" id="theme">
        <Header />
        <div className="main_content">
          <Information />
          <Menu />
        </div>
      </main>
    </div>
  );
}
