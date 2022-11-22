import { BsArrowReturnRight } from "react-icons/bs";

function Information() {
  return (
    <div className="info-container">
      <div className="info one">
        <h3 className="section">Location</h3>
        <p className="type">Address: </p>

        <div className="row">
          <BsArrowReturnRight strokeWidth={1.5} />
          <a
            className="data"
            target="blank"
            rel="no-referrer"
            href="https://maps.google.com/?q=530 W Wise Rd, Schaumburg, IL 60193"
          >
            530 W Wise Rd, Schaumburg, IL 60193
          </a>
        </div>
      </div>
      <div className="info two">
        <h3 className="section">Phone</h3>
        <p className="type">Ordering:</p>
        <div className="row">
          <BsArrowReturnRight strokeWidth={1.5} />
          <a className="data" href="tel:847-524-2204">
            {"(847) 524-2204"}
          </a>
        </div>
        <div>
          <p className="type">Catering:</p>
          <div className="row">
            <BsArrowReturnRight strokeWidth={1.5} />
            <a className="data" href="tel:847-767-5637">
              {"(847) 767-5637"}
            </a>
          </div>
        </div>
      </div>
      <div className="info three">
        <h3 className="section">Hours</h3>
        <div>
          <p className="type">Monday</p>
          <div className="row">
            <BsArrowReturnRight strokeWidth={1.5} />
            <p className="data">*we are closed on Mondays.*</p>
          </div>
        </div>
        <div>
          <p className="type">Tuesday, Wednesday, Thursday</p>
          <div className="row">
            <BsArrowReturnRight strokeWidth={1.5} />
            <p className="data">11:00 AM - 9:00 PM</p>
          </div>
        </div>
        <div>
          <p className="type">Friday, Saturday</p>
          <div className="row">
            <BsArrowReturnRight strokeWidth={1.5} />
            <p className="data">11:00 AM - 10:00 PM</p>
          </div>
        </div>
        <div>
          <p className="type">Sunday</p>
          <div className="row">
            <BsArrowReturnRight strokeWidth={1.5} />
            <p className="data">4:00 PM - 9:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
