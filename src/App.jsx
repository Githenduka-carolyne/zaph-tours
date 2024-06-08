import Header from "./components/Header/header.jsx";
import "./components/Header/header.css";
import Footer from "./components/Footer/footer.jsx";
import Home from "./Pages/Home/home.jsx";
import Destination from "./Pages/Destination/destination.jsx";
import TripTypes from "./Pages/TripTypes/triptype.jsx";
import Contact from "./Pages/Contact/contact.jsx";
import "./assets/global.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
 

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/TripTypes" element={<TripTypes />} />
        <Route path="/Contact" element={<Contact/>}/>
     
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
