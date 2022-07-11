import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Pizza from "../components/pizza";
import Pasta from "../components/pasta";


export default function Home() {
  const [selected, setSelected] = useState("test");
  const menuItems = {
    "Pizza": <Pizza />,

    "Appetizers": <Pizza />,

    "Salads": <Pizza />,

    "Sandwiches": <Pizza />,

    "Burgers": <Pizza />,

    "Pastas": <Pasta />,

    "Dinners": <Pizza />,

    "Beverages": <Pizza />,

    "Desserts": <Pizza />,
  };
  const select = (e) => {
    const value = e.target.outerText
    setSelected(value);
  };
  const image_size = 50;
  const changeTheme = (e) => {
    const theme = document.getElementById("theme");
    const toggle = document.getElementById("toggle");
    console.log(toggle.children);
    if (theme.classList.contains("dark")) {
      theme.classList.remove("dark");
      toggle.children[1].style.cssText = "opacity:0; z-index:-1;";
      toggle.children[0].style.cssText = "opacity:1; z-index:1;";
    } else {
      theme.classList.add("dark");
      toggle.children[0].style.cssText = "opacity:0; z-index:-1;";
      toggle.children[1].style.cssText = "opacity:1; z-index:1;";
    }
  };
  return (
    <div className="body">
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
      <main className="app light" id="theme">
        <header className="header">
          <h2>{"The Best Pizza In Schaumburg - Call Now: (847) 524-2204"}</h2>
          <div className="toggle" id="toggle">
            <div className="icon light">
              <Image
                src="/light.svg"
                alt="light-theme"
                width={image_size}
                height={image_size}
                onClick={changeTheme}
              ></Image>
            </div>
            <div className="icon dark">
              <Image
                src="/dark.svg"
                alt="dark-theme"
                width={image_size}
                height={image_size}
                onClick={changeTheme}
              ></Image>
            </div>
          </div>
        </header>
        <div className="main_content">
          <div className="title_info">
            <h1 className="title">{"Joe's Pizza"}</h1>
            <div className="info">
              <div className="colorOne">
                <h3 className="section">Location</h3>
                <div className="row">
                  <p className="type">Address: </p>
                  <p className="data">530 W Wise Rd, Schaumburg, IL 60193</p>
                </div>
              </div>
              <div className="colorTwo">
                <h3 className="section">Phone</h3>
                <div className="row">
                  <p className="type">Ordering:</p>
                  <p className="data">{"(847) 524-2204"}</p>
                </div>
                <div>
                  <div className="row">
                    <p className="type">Catering:</p>
                    <p className="data">{"(847) 767-5637"}</p>
                  </div>
                </div>
              </div>
              <div className="colorThree">
                <h3 className="section">Hours</h3>
                <div>
                  <p className="type">Monday</p>
                  <p className="data">*we are closed on Mondays*</p>
                </div>
                <div>
                  <p className="type">Tuesday, Wednesday, Thursday</p>
                  <p className="data">11:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <p className="type">Friday, Saturday</p>
                  <p className="data">11:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <p className="type">Sunday</p>
                  <p className="data">4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="menu">
            <nav className="nav">
              <h2>Menu</h2>
              <ul>
                {Object.entries(menuItems).map((item) => {
                  return <li onClick={select}>{item[0]}</li>
                })}
              </ul>
            </nav>
            <div className="selected">{menuItems[selected]}</div>
          </div>
        </div>
        <footer></footer>
      </main>
    </div>
  );
}
