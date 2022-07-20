import Head from "next/head";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Information from "../components/Information";
import Menu from "../components/Menu";
import Card from "../components/shared/Card";

export default function Home() {
  const [mobile, setMobile] = useState(false);
  const [view, setView] = useState("Menu");
  const changeView = () => {
    view === "Info" ? setView("Menu") : setView("Info");
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
    const width = screen.width > 1000 ? window.innerWidth : screen.width;
    if (width < 1000) setMobile(true);
  }, [mobile]);

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

            <Card
              className={"menu_info"}
              children={view === "Menu" ? <Information /> : <Menu />}
            />
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
