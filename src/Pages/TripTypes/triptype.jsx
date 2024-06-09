import Bannerpart from "../../components/Banner/banner";
// import honeymoon from "../../assets/honeymoon.jpg";
// import family from "../../assets/family.jpeg";
// import adventure from "../../assets/adventure.jpg";
// import culture from "../../assets/culture.jpg";
// import wellness from "../../assets/wellness.jpeg";
import "./triptype.css";
import CarouselPart from "./trip";
const triptype = () => {
  return (
    <section className="">
      <Bannerpart
        maintitle="Packages"
        description="Trips offered in Zaph Tours"
      />
      <section className="trips-offered-container">
        <section className="trips-offered">
          <div className="trip-offered-container">
            <div className="textboxinfo">
              <h3>HoneyMoon Package</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <b>Price: KSH 8000</b>
              </p>
            </div>
            <div className="image-info-side">
              <CarouselPart />
            </div>
          </div>
        </section>

        <section className="trips-offered">
          <div className="trip-type-holder">
            <div className="textboxinfo">
              <h3>Family Package</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <b>Price: KSH 8000</b>
              </p>
            </div>
            <div className="image-info-side">
              <CarouselPart />
            </div>
          </div>
        </section>

        <section className="trips-offered">
          <div className="trip-type-holder">
            <div className="textboxinfo">
              <h3>Adventure Package</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <b>Price: KSH 8000</b>
              </p>
            </div>
            <div className="image-info-side">
              <CarouselPart />
            </div>
          </div>
        </section>

        <section className="trips-offered">
          <div className="trip-type-holder">
            <div className="textboxinfo">
              <h3>Cultural Tours</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <b>Price: KSH 3000</b>
              </p>
            </div>
            <div className="image-info-side">
              <CarouselPart />
            </div>
          </div>
        </section>

        <section className="trips-offered">
          <div className="trip-type-holder">
            <div className="textboxinfo">
              <h3>Wildlife Safaris</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <b>Price: KSH 8000</b>
              </p>
            </div>
            <div className="image-info-side">
              <CarouselPart />
            </div>
          </div>
        </section>

        <section className="trips-offered">
          <div className="trip-type-holder">
            <div className="textboxinfo">
              <h3>Eco Tours</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <b>Price: KSH 2000</b>
              </p>
            </div>
            <div className="image-info-side">
              <CarouselPart />
            </div>
          </div>
        </section>

        <section className="trips-offered">
          <div className="trip-type-holder">
            <div className="textboxinfo">
              <h3>Luxury Vacations</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <b>Price: KSH 12000</b>
              </p>
            </div>
            <div className="image-info-side">
              <CarouselPart />
            </div>
          </div>
        </section>

        <section className="trips-offered">
          <div className="trip-type-holder">
            <div className="textboxinfo">
              <h3>Beach Holiday</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <b>Price: KSH 8000</b>
              </p>
            </div>
            <div className="image-info-side">
              <CarouselPart />
            </div>
          </div>
        </section>

        <section className="trips-offered">
          <div className="trip-type-holder">
            <div className="textboxinfo">
              <h3>Wellness Retreats</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <b>Price: KSH 2000</b>
              </p>
            </div>
            <div className="image-info-side">
              <CarouselPart />
            </div>
          </div>
        </section>

        <section className="trips-offered">
          <div className="trip-type-holder">
            <div className="textboxinfo">
              <h3>Culnary Tours</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <b>Price: KSH 2000</b>
              </p>
            </div>
            <div className="image-info-side">
              <CarouselPart />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
export default triptype;
