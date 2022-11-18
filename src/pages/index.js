import Head from "next/head";

import clsx from "clsx";
import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

import Information from "../components/Information";
import Menu from "../components/Menu";
import TitleContact from "../components/TitleContact";
import Header from "../components/Header";

export default function Home() {
  const [theme, setTheme] = useState(false);
  const [navTo, setNavTo] = useState("Menu");
  const changeView = () => {
    navTo === "Info" ? setNavTo("Menu") : setNavTo("Info");
  };
  const isMobile = useIsMobile();
  let content = (
    <>
      <div className="main_content_container desktop">
        <div className="title_info">
          <TitleContact />
          <Information />
        </div>
        <Menu />
      </div>
    </>
  );
  if (isMobile) {
    content = (
      <>
        <div className="main_content_container">
          <TitleContact />
          <div style={{ position: "relative", overflow:"hidden" }}>
            {navTo === "Menu" ? <Information /> : <Menu />}
          </div>
        </div>

        <button className="view_btn" onClick={changeView}>
          {navTo}
        </button>
      </>
    );
  }

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
      <main className={clsx("main", theme && "light")} id="theme">
        <Header isMobile={isMobile} theme={theme} setTheme={setTheme} />
        <div className="main_content">{content}</div>
      </main>
    </div>
  );
}
