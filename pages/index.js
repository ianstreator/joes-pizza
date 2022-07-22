import Head from "next/head";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Information from "../components/Information";
import Menu from "../components/Menu";

export default function Home() {
  const [mobile, setMobile] = useState(false);
  const [view, setView] = useState("Menu");
  const changeView = () => {
    view === "Info" ? setView("Menu") : setView("Info");
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 1000) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", onResize);

    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (mobile) {
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
        <main className="main" id="theme">
          <Header />

          <div className="main_content">
            <h1 className="title">{"Joe's Pizza"}</h1>

            <Card className={"menu_info"}>
              {view === "Menu" ? <Information /> : <Menu />}
            </Card>
            <button className="view_btn" onClick={changeView}>
              {view}
            </button>
          </div>
        </main>
      </div>
    );
  } else {
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
        <main className="main" id="theme">
          <Header />
          <div className="main_content">
            <Information />
            <Menu />
          </div>
        </main>
      </div>
    );
  }
}
