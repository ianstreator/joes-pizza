function Information() {
  return (
    <div className="title_info">
      <h1 className="title">{"Joe's Pizza"}</h1>
      <div className="info">
        <div className="colorOne">
          <h3 className="section">Location</h3>
          <div className="row">
            <p className="type">Address: </p>
            <a className="data" target="blank" rel="no-referrer" href="https://maps.google.com/?q=530 W Wise Rd, Schaumburg, IL 60193">530 W Wise Rd, Schaumburg, IL 60193</a>
          </div>
        </div>
        <div className="colorTwo">
          <h3 className="section">Phone</h3>
          <div className="row">
            <p className="type">Ordering:</p>
            <a className="data" href="tel:847-524-2204">
              {"(847) 524-2204"}
            </a>
          </div>
          <div>
            <div className="row">
              <p className="type">Catering:</p>
              <a className="data" href="tel:847-767-5637">
                {"(847) 767-5637"}
              </a>
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
  );
}

export default Information;
