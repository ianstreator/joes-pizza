import Image from "next/image";

function Header() {
  const image_size = 50;
  const changeTheme = () => {
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
  );
}

export default Header;
