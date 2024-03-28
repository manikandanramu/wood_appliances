import React, {useState} from "react";
// import { Button } from 'semantic-ui-react';
import style from "./less/woodMeterials.module.scss";
import wood1 from "../assets/Images/woodMetrials/tiger_maple.webp"
import wood2 from "../assets/Images/woodMetrials/cherry.webp"
import wood3 from "../assets/Images/woodMetrials/wormy_brown.webp"
import wood4 from "../assets/Images/woodMetrials/Aspen.webp"
import wood5 from "../assets/Images/woodMetrials/cader.webp"
import wood6 from "../assets/Images/woodMetrials/pine.webp"
import "./less/woodMeterial.scss"

const WoodMeterials = ({scrollClass}) => {
  const metrialInfo = [
      {
        woodName: "Tiger Maple",
        id: 101,
        src: wood1,
        descList: ["Durability", "Beautiful texture", "Water resistance", "Expensive"],
      },
      {
        woodName: "Cherry",
        id: 102,
        src: wood2,
        descList: ["Durability", "Hard to handle"],
      },
      {
        woodName: "Wormy Brown",
        id: 103,
        src: wood3,
        descList: ["Durability", "Hard to handle"],
      },
      {
        woodName: "Aspen",
        id: 104,
        src: wood4,
        descList: ["Durability", "Hard to handle"],
      },
      {
        woodName: "Cader",
        id: 105,
        src: wood5,
        descList: ["Durability", "Hard to handle"],
      },
      {
        woodName: "Pine",
        id: 106,
        src: wood6,
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
