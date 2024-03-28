import React, {useState} from "react";
// import { Button } from 'semantic-ui-react';
import style from "./less/woodMeterials.module.scss";
import "./less/woodMeterial.scss"

const WoodMeterials = ({scrollClass}) => {
  const metrialInfo = [
      {
        woodName: "Tiger Maple",
        id: 101,
        src: "https://woodappliances.s3.ap-south-1.amazonaws.com/woodMetrials/tiger_maple.webp",
        descList: ["Durability", "Beautiful texture", "Water resistance", "Expensive"],
      },
      {
        woodName: "Cherry",
        id: 102,
        src: "https://woodappliances.s3.ap-south-1.amazonaws.com/woodMetrials/cherry.webp",
        descList: ["Durability", "Hard to handle"],
      },
      {
        woodName: "Wormy Brown",
        id: 103,
        src: "https://woodappliances.s3.ap-south-1.amazonaws.com/woodMetrials/wormy_brown.webp",
        descList: ["Durability", "Hard to handle"],
      },
      {
        woodName: "Aspen",
        id: 104,
        src: "https://woodappliances.s3.ap-south-1.amazonaws.com/woodMetrials/Aspen.webp",
        descList: ["Durability", "Hard to handle"],
      },
      {
        woodName: "Cader",
        id: 105,
        src: "https://woodappliances.s3.ap-south-1.amazonaws.com/woodMetrials/cader.webp",
        descList: ["Durability", "Hard to handle"],
      },
      {
        woodName: "Pine",
        id: 106,
        src: "https://woodappliances.s3.ap-south-1.amazonaws.com/woodMetrials/pine.webp",
        descList: ["Durability", "Hard to handle"],
      },
  ]

  const [selectedMaterial, setSelectedMaterial] = useState(metrialInfo[0]);

  const handleSelectedMeterial = (data) => {
    setSelectedMaterial(data);
  }

  const showMeterial = () => {
    return metrialInfo.map((data) => {
        return(
        <img src={data?.src} onClick={() => handleSelectedMeterial(data)}  alt={data?.woodName}/>
        )
    })
  }
  return (
    <>
    <div className={style.meterialScreen}>
     <h1>THE WOOD WE WORK WITH</h1>
    <div className={style.meterialContainer}>
      <div className={`swatch ${scrollClass}`} >
        {showMeterial()}
      </div>
      <div className={style.selectedMaterial}>
        <img src={selectedMaterial?.src} alt={selectedMaterial?.woodName}/>
        <div className={style.selectedMaterialInfo}>
          <h1>{selectedMaterial?.woodName}</h1>
          <ul>
            {
              selectedMaterial?.descList?.map((list) => (
                <li>{list}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default WoodMeterials;
