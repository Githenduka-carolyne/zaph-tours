import Bannerpart from "../../components/Banner/banner";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoMdClock } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Map from "../../assets/map.png";
import "./contact.css"
const Contact = () => {
  return (
    <section className="">
      <Bannerpart maintitle="Contact Us" description="Reach us through" />
      <section className="cont-section">
        <div className="contact-container">
          <div className="contact-textbox">
            <h4>Get In Touch With Zaph Tours</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              odio!.
            </p>
          </div>
        </div>
        <div className="contact-cards-container">
          <div className="contact-card">
            <div className="icon-holder">
              <FaLocationDot />
            </div>
            <div className="card-details">
              <p className="title">Location</p>
              <p> Lorem ipsum dolor</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="icon-holder">
              <FaPhoneVolume />
            </div>
            <div className="card-details">
              <p className="title">Phone Number</p>
              <p> +245769346549</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="icon-holder">
              <IoMail />
            </div>
            <div className="card-details">
              <p className="title">Email Us</p>
              <p> zaphtours@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="icon-holder">
              <IoMdClock />
            </div>
            <div className="card-details">
              <p className="title">Working Hours</p>
              <p>Mon-Sat 8:00AM-7:00PM </p>
            </div>
          </div>
        </div>
        <div className="form-map">
          <div className="map-side">
            <iframe className="maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15958.012317845742!2d37.158912!3d-0.7202532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1717959865419!5m2!1sen!2ske"
              width="400"
              height="240"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="form-side">
            <form className="form-input">
              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Email Address" required />
              <input type="text" placeholder="subject" required />
              <input type="textarea" placeholder="message" required />
              <button className="messagebtn">Send Message</button>
            </form>
          </div>
        </div>
        <div className="social-account-container">
          <div className="logo">
            <h1>Zaph Tours</h1>
          </div>
          <div className="social-handles-container">
            <div className="social-handles">
              <h4>Book Your Holiday</h4>
              <div className="social-holder">
                <p className="icon">
                  <GiRotaryPhone />
                </p>
                <p>+245769346549</p>
              </div>
            </div>
            <div className="social-handles">
              <h4>Email Us</h4>
              <div className="social-holder">
                <p className="icon">
                  <IoMail />
                </p>
                <p>zaphtours@gmail.com</p>
              </div>
            </div>
            <div className="social-handles">
              <h4>Follow Us</h4>
              <p className="icon">
                <FaFacebook /> <FaInstagramSquare /> <FaSquareXTwitter />
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Contact;
