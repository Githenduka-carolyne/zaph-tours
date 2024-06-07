import Hero from "./Hero"
import About from "./About"
import Featureddest from "./Featureddest"
import "./Hero.css"
import "./About.css"
import "./Featureddest.css"

const home = () =>{
    return (
      <section className="home">
        <Hero />
        <About />
        <Featureddest />
      </section>
    );
}
export default home;