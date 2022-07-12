import Head from "next/head";

import Header from "../components/Header";
import Facility_Info from "../components/Facility_Info";
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
      <body className="app light" id="theme">
        <Header />
        <div className="main_content">
          <Facility_Info />
          <Menu />
        </div>
      </body>
    </div>
  );
}
