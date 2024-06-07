import { Link } from "react-router-dom";

const header = ()=>{
    return (
      <section className="header-section">
        <div className="container">
          <div className="logo">
            <h1>Zaph Tours</h1>
          </div>
          <div className="navigation">
            <div className="navigation-wrapper">
              <ol className="navigation-list">
                <li className="navigation-item">
                  {" "}
                  <Link to="">Home</Link>
                </li>
                <li className="navigation-item">
                  {" "}
                  <Link to="/Destination">Destination</Link>
                </li>
                <li className="navigation-item">
                  <Link to="/TripTypes">Trip Type</Link>
                </li>
                <li className="navigation-item">
                  <Link to="/Contact">Contacts</Link>
                </li>
              </ol>
            </div>
          </div>
          <button className="btn">Book Now</button>
        </div>
      </section>
    );
}
export default header;