import React from "react";
import SliderComponent from "./global/Slider";

const OurWorks = () => {
    const list = [
      "https://woodappliances.s3.ap-south-1.amazonaws.com/ourWork/ourWorkImg1.webp",
      "https://woodappliances.s3.ap-south-1.amazonaws.com/ourWork/ourWorkImg2.webp",
      "https://woodappliances.s3.ap-south-1.amazonaws.com/ourWork/ourWorkImg3.webp",
      "https://woodappliances.s3.ap-south-1.amazonaws.com/ourWork/ourWorkImg4.webp",
      "https://woodappliances.s3.ap-south-1.amazonaws.com/ourWork/ourWorkImg5.webp",
      "https://woodappliances.s3.ap-south-1.amazonaws.com/ourWork/ourWorkImg6.webp",
      "https://woodappliances.s3.ap-south-1.amazonaws.com/ourWork/ourWorkImg7.webp",
      "https://woodappliances.s3.ap-south-1.amazonaws.com/ourWork/ourWorkImg8.webp",
    ]
  return (
    <div>
      <h1>Our work</h1>
      <SliderComponent data={list} />
    </div>
  );
};

export default OurWorks;
