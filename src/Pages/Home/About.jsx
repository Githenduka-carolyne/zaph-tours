import aboutpic2 from "../../assets/aboutpic2.png"


const About =()=>{
    return (
      <section className="about-container">
        <div className="wrapper">
          <img className="aboutimg" src={aboutpic2}></img>
        </div>
        <div className="about-info-textbox">
          <p className="abouttitle">Why Choose Us</p>
          <h3 className="aboutsubtitle">
            With us you are bound to have the best experience ever
          </h3>
          <p className="aboutdetails">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque, odio!.
          </p>
          <button className="bt3">Learn more &#8594;</button>
        </div>

       
      </section>
    );
    
}
export default About;