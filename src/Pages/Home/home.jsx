import Hero from "./Hero"
import About from "./About"
import Featureddest from "./Featureddest"
import Testimonialsprt from "./Testimonialsprt"
import Newsletter from "./Newsletter"
import "./Hero.css"
import "./About.css"
import "./Featureddest.css"
import "./Testimonialsprt.css"
import "./Newsletter.css"

const home = () =>{
    return (
      <section className="home">
        <Hero />
        <About />
        <Featureddest />
        <Testimonialsprt/>
        <Newsletter/>
      </section>
    );
}
export default home;