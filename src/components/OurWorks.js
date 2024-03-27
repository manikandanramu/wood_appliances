import React from "react";
import SliderComponent from "./global/Slider";
import Img1 from '../assets/Images/ourWork/ourWorkImg1.webp'
import Img2 from '../assets/Images/ourWork/ourWorkImg2.webp'
import Img3 from '../assets/Images/ourWork/ourWorkImg3.webp'
import Img4 from '../assets/Images/ourWork/ourWorkImg4.webp'
import Img5 from '../assets/Images/ourWork/ourWorkImg5.webp'
import Img6 from '../assets/Images/ourWork/ourWorkImg6.webp'
import Img7 from '../assets/Images/ourWork/ourWorkImg7.webp'
import Img8 from '../assets/Images/ourWork/ourWorkImg8.webp'

const OurWorks = () => {
    const list = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8]
  return (
    <>
    <div>
      <h1>Our work</h1>
      <SliderComponent data={list} />
    </div>
    </>
  );
};

export default OurWorks;
