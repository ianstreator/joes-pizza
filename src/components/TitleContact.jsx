import Image from "next/image";

function TitleContact() {
  const imageSize = 35;
  return (
    <div className="title_contact">
      <h1 className="title">{"Joe's Pizza"}</h1>
      <div className="contact">
        <a href="tel:847-524-2204">
          <Image
            src="/phone-icon.svg"
            alt="phone-icon"
            width={imageSize}
            height={imageSize}
          ></Image>
        </a>
        <a
          target="blank"
          rel="no-referrer"
          href="https://maps.google.com/?q=530 W Wise Rd, Schaumburg, IL 60193"
        >
          <Image
            src="/map-icon.svg"
            alt="map-icon"
            width={imageSize}
            height={imageSize}
          ></Image>
        </a>
      </div>
    </div>
  );
}

export default TitleContact;
