import mtkenya from "../../assets/mtkenya.jpeg";
import nakuru from "../../assets/nakuru.jpeg";
import tsavo from "../../assets/tsavo.jpg";
import coastal from "../../assets/coastal.jpg";
import nairobipark from "../../assets/nairobipark.jpg";
import ruwenzori from "../../assets/ruwenzori.jpg";


const Featureddest = ()=>{
    return (
      <section className="destinations">
        <div className="destination-textbox">
          <p className="destination-title">Featured Destination</p>
          <h3>Experience the best life through travelling</h3>
          <p className="destination-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            odio!.
          </p>
        </div>
        <div className="destination-container">
          <div className="destination-card">
            <div className="image-wrapper">
              <img className="img" src={mtkenya}></img>
            </div>
            <div className="destination-card-title">
              <h4>Mt Kenya</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <buttton className="button">Learn more &#8594;</buttton>
            </div>
          </div>

          <div className="destination-card">
            <div className="image-wrapper">
              <img className="img" src={ruwenzori}></img>
            </div>
            <div className="destination-card-title">
              <h4>Mt Ruwenzori</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <buttton className="button">Learn more &#8594;</buttton>
            </div>
          </div>

          <div className="destination-card">
            <div className="image-wrapper">
              <img className="img" src={nakuru}></img>
            </div>
            <div className="destination-card-title">
              <h4>Lake Nakuru</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <buttton className="button">Learn more &#8594;</buttton>
            </div>
          </div>

          <div className="destination-card">
            <div className="image-wrapper">
              <img className="img" src={tsavo}></img>
            </div>
            <div className="destination-card-title">
              <h4>Tsavo National Park</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <buttton className="button">Learn more &#8594;</buttton>
            </div>
          </div>

          <div className="destination-card">
            <div className="image-wrapper">
              <img className="img" src={nairobipark}></img>
            </div>
            <div className="destination-card-title">
              <h4>Nairobi National Park</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <buttton className="button">Learn more &#8594;</buttton>
            </div>
          </div>

          <div className="destination-card">
            <div className="image-wrapper">
              <img className="img" src={coastal}></img>
            </div>
            <div className="destination-card-title">
              <h4>Coastal Kenya</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <buttton className="button">Learn more &#8594;</buttton>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Featureddest;