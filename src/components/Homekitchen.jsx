import React from "react";
import { homekitchenData } from "../assets/Data/home&kitchen";
const Homekitchen = () => {
  const firstSixImages = homekitchenData.slice(0, 6);
  return (
    <>
      <div className="proTitle">
        <h2>Home & Kitchen Appliances</h2>
      </div>
      <div className="proSection">
        {firstSixImages.map((item) => {
          return (
            <div className="imgBox">
              <img className="proImage" src={item.image} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Homekitchen;
