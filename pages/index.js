import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const image_size = 50;
  const changeTheme = () => {
    const theme = document.getElementById("theme");
    if (theme.classList.contains("dark")) {
      theme.classList.remove("dark");
    } else {
      theme.classList.add("dark");
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
      <main className="app" id="theme">
        <header className="header">
          <h2>{"The Best Pizza In Schaumburg - Call Now: (847) 524-2204"}</h2>
          <div className="toggle">
            <div className="icon">
              <Image
                src="/light.svg"
                alt="light-theme"
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
              {/* <h2>Facility Information</h2> */}
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
            <nav className="nav"></nav>
            <div className="selected"></div>
          </div>
        </div>
        <footer></footer>
      </main>
    </div>
  );
}
