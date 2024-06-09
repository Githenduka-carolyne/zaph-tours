import Bannerpart from "../../components/Banner/banner";
import Destinationss from "../../Pages/Destination/Destinationss";
import nairobipark from "../../assets/nairobipark.jpg";
import nakuru from "../../assets/nakuru.jpeg";
import mtkenya from "../../assets/mtkenya.jpeg";
import mombasa from "../../assets/mombasa.jpg";
import italy from "../../assets/italy.jpg";
import maldives from "../../assets/maldives.jpg";
import dubai from "../../assets/dubai.jpg";
import rhino from "../../assets/rhino.jpg";
import theforest from "../../assets/theforest.jpg";
import losagelas from "../../assets/losagelas.jpg";
import paris2 from "../../assets/paris2.jpg";
import capetown from "../../assets/capetown.jpg";
import "./destination.css"
const destination = () => {
  return (
    <section className="">
      <Bannerpart
        maintitle="Destinations"
        description="Places you can visit and it's uniqueness"
      />
      <section className="dest-container">
        <section className="destination-section">
          <Destinationss
            image={nairobipark}
            name="Nairobi National Park"
            description="One of Kenya's most successful rhinoceros sanctuaries"
            groupprice=" Group price - Ksh 5000"
            individualprice="Individual price - Ksh 6000"
          />
        </section>

        <section className="destination-section">
          <Destinationss
            image={nakuru}
            name="Lake Nakuru"
            description="The location of one of the greatest bird spectacle on earth"
            groupprice=" Group price - Ksh 5000"
            individualprice="Individual price - Ksh 6000"
          />
        </section>

        <section className="destination-section">
          <Destinationss
            image={mtkenya}
            name="Mt Kenya"
            description="Kenya's most successful rhinoceros sanctuaries"
            groupprice=" Group price - Ksh 5000"
            individualprice="Individual price - Ksh 6000"
          />
        </section>

        <section className="destination-section">
          <Destinationss
            image={mombasa}
            name="Mombasa"
            description="Mombasa is the Kenya's foremost tourist destination for all the tourists"
            groupprice=" Group price - Ksh 5000"
            individualprice="Individual price - Ksh 6000"
          />
        </section>

        <section className="destination-section">
          <Destinationss
            image={italy}
            name="Italy"
            description="architecture, culture, art, opera, literature, film, and fashion."
            groupprice=" Group price - Ksh 50000"
            individualprice="Individual price - Ksh 60000"
          />
        </section>

        <section className="destination-section">
          <Destinationss
            image={maldives}
            name="Maldives"
            description="Maldives is world-famous for its wide spectrum of marine life"
            groupprice=" Group price - Ksh 50000"
            individualprice="Individual price - Ksh 60000"
          />
        </section>

        <section className="destination-section">
          <Destinationss
            image={dubai}
            name="Dubai"
            description="Burj Khalifa, the world's tallest building, offering breathtaking views 
            from its observation decks"
            groupprice=" Group price - Ksh 500000"
            individualprice="Individual price - Ksh 600000"
          />
        </section>

        <section className="destination-section">
          <Destinationss
            image={rhino}
            name="Maasai Mara"
            description="The Masai Mara is renowned for its 'Big 5' safaris"
            groupprice=" Group price - Ksh 5000"
            individualprice="Individual price - Ksh 6000"
          />
        </section>

        <section className="destination-section">
          <Destinationss
            image={theforest}
            name="The Forest"
            description="Kereita forest favours the tourists who comes to pay the visit to the forest and Zip lining."
            groupprice=" Group price - Ksh 5000"
            individualprice="Individual price - Ksh 6000"
          />
        </section>

        <section className="destination-section">
          <Destinationss
            image={losagelas}
            name="Los Angeles"
            description="Hollywood stars, the TV & movie industries, and gorgeous beaches."
            groupprice=" Group price - Ksh 500000"
            individualprice="Individual price - Ksh 600000"
          />
        </section>

        <section className="destination-section">
          <Destinationss
            image={paris2}
            name="Paris"
            description="Paris is known for its gorgeous, imposing monuments."
            groupprice=" Group price - Ksh 50000"
            individualprice="Individual price - Ksh 60000"
          />
        </section>

        <section className="destination-section">
          <Destinationss
            image={capetown}
            name="Cape Town"
            description="Iconic mountain ranges, stunning natural wonders, thrilling landscapes
             and ocean vistas."
            groupprice=" Group price - Ksh 5000"
            individualprice="Individual price - Ksh 6000"
          />
        </section>
      </section>
    </section>
  );
};
export default destination;
