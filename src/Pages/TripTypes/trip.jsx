import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import honeymoon from "../../assets/honeymoon.jpg";
import family from "../../assets/family.jpeg";
import wildlifesafaris from "../../assets/wildlifesafaris.jpeg"
import './triptype.css';
const CarouselPart = ()=>{
    return (
      <Carousel>
        <div className="img-holder">
          <img className="image" src={honeymoon}></img>
        </div>
        <div className="img-holder">
          <img className="image" src={family}></img>
        </div>
        <div className="img-holder">
          <img className="image" src={wildlifesafaris}></img>
        </div>
      </Carousel>
    );
};
export default CarouselPart;

