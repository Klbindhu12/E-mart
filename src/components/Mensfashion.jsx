import React from "react";
import { mensfashionData } from "../assets/Data/mensfashion";

const Mensfashion = () => {
  const firstSixImages = mensfashionData.slice(0, 6);
  return (
    <>
      <div className="proTitle">
        <h2>Men's Fashion</h2>
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

export default Mensfashion;
