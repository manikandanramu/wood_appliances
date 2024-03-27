import React, {useState, useEffect} from "react";
// import { Button } from 'semantic-ui-react';
import Header from "./header/Header";
import style from "./less/homeScreen.module.scss";
import img1 from "../assets/Images/homeImg1.png"
import img2 from "../assets/Images/homeImg2.png"
import img3 from "../assets/Images/homeImg3.png"
import WoodMeterials from "./WoodMeterials";
import OurWorks from "./OurWorks";

const HomeScreen = () => {
  const [scrollClass, setScrollClass] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        setScrollClass("isHovered");
      } else {
        setScrollClass("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageCollage = () => (
    <svg width="453" height="614" viewBox="0 0 453 614" fill="none" xmlns="http://www.w3.org/2000/svg">
      <image href={img1} x="0" y="207" width="205" height="205"  />
      <image href={img2} x="248" y="409" width="205" height="205"  />
      <image href={img3} x="248" y="0" width="205" height="205"  />
  </svg>
  )
  return (
    <>
    <div className={style.homeScreenWrapper}>
      <Header />
        <div className={style.homeContent}>
          <div className={style.contentWrapper}>
            <h1>SOLID WOOD PRODUCTS</h1>
            <p>
              Experience the timeless allure of Oak, Beech, and Ash with our premium solid wood products, starting from <span>1700 CZK </span>per cubic meter
            </p>
          </div>
          <div className={style.imageWrapper}>
            {imageCollage()}
          </div>
        </div>
    </div>
      <WoodMeterials scrollClass={scrollClass} />
    <div className={style.ourWorksWrapper}>
      <OurWorks />
    </div>
    </>
  );
};

export default HomeScreen;
