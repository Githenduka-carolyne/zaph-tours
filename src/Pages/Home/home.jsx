import Hero from "./Hero"
import About from "./About"
import Featureddest from "./Featureddest"
import Testimonialsprt from "./Testimonialsprt"
import "./Hero.css"
import "./About.css"
import "./Featureddest.css"
import "./Testimonialsprt.css"

const home = () =>{
    return (
      <section className="home">
        <Hero />
        <About />
        <Featureddest />
        <Testimonialsprt/>
      </section>
    );
}
export default home;