import Image from "next/image";

function Header({ isMobile, setTheme, theme }) {
  const themeToggleSize = 15;

  return (
    <header className="header">
      <div className="header_content">
        {!isMobile && (
          <>
            <p>
              {"The Best Pizza In Schaumburg - Call Now: "}
              <a className="data" href="tel:847-524-2204">
                {"(847) 524-2204"}
              </a>
            </p>
            <p>|</p>
          </>
        )}
        <p>Ordering must be done over the phone or in store.</p>
        <div
          onClick={() => {
            setTheme(!theme);
          }}
          className="theme_toggle"
        >
          <div className="toggle_background">
            <Image
              src={theme ? "/dark.svg" : "/light.svg"}
              width={themeToggleSize}
              height={themeToggleSize}
              alt="theme_toggle"
            ></Image>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
