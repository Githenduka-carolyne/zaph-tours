import mtkenya from "../../assets/mtkenya.jpeg";
import { RiStarSFill } from "react-icons/ri";
const Testimonialsprt = () => {
  return (
    <section className="testimonialsec">
      <div className="testimonie-textbox">
        <p className="testimonie-title">Testimonials</p>
        <h3>Satisfying our customer's is our first priority</h3>
        <p className="testimonie-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!.
        </p>
      </div>

      <div className="testimonie-container">
        <div className="testimonie-card">
          <div className="image-holder">
            <img className="img" src={mtkenya}></img>
          </div>
          <div className="testimonie-card-title">
            <h4 className="name">John Doe</h4>
            <h4 className="role">Tourist</h4>
            <div className="icon-holder">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p>
              "Climbing Mount Kenya was an exhilarating adventure. The diverse
              landscapes, from bamboo, the terrain, kept every day interesting."
            </p>
          </div>
        </div>

        <div className="testimonie-card">
          <div className="image-holder">
            <img className="img" src={mtkenya}></img>
          </div>
          <div className="testimonie-card-title">
            <h4 className="name">John Doe</h4>
            <h4 className="role">Tourist</h4>
            <div className="icon-holder">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p>
              "Climbing Mount Kenya was an exhilarating adventure. The diverse
              landscapes, from bamboo, the terrain, kept every day interesting."
            </p>
          </div>
        </div>

        <div className="testimonie-card">
          <div className="image-holder">
            <img className="img" src={mtkenya}></img>
          </div>
          <div className="testimonie-card-title">
            <h4 className="name">John Doe</h4>
            <h4 className="role">Tourist</h4>
            <div className="icon-holder">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p>
              "Climbing Mount Kenya was an exhilarating adventure. The diverse
              landscapes, from bamboo, the terrain, kept every day interesting."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonialsprt;
