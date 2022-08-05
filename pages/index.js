import Head from "next/head";

import clsx from "clsx";
import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

import Information from "../components/Information";
import Menu from "../components/Menu";

export default function Home() {
  const [theme, setTheme] = useState(true);
  const [view, setView] = useState("Menu");
  const changeView = () => {
    view === "Info" ? setView("Menu") : setView("Info");
  };
  const isMobile = useIsMobile();
  let content = (
    <>
      <Information />
      <Menu />
    </>
  );
  if (isMobile) {
    content = (
      <>
        <h1 key={"title"} className="title">
          {"Joe's Pizza"}
        </h1>
        <div key={"view"} className={"menu_info"}>
          {view === "Menu" ? <Information /> : <Menu />}
        </div>
        <button key={"btn"} className="view_btn" onClick={changeView}>
          {view}
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
      <main className={clsx("main", theme && "dark")} id="theme">
        <header className="header">
          <div className="header_content">
            {!isMobile && (
              <>
                <p>
                  {"The Best Pizza In Schaumburg - Call Now: (847) 524-2204"}
                </p>
                <p>|</p>
              </>
            )}
            <p>{"Ordering must be done over the phone or in store."}</p>
            <div
              className="toggle"
              id="toggle"
              onClick={() => setTheme(!theme)}
            >
              <div className={clsx("icon", theme && "dark")} onClick={() => setTheme(!theme)}></div>
            </div>
          </div>
        </header>
        <div className="main_content">{content}</div>
      </main>
    </div>
  );
}
