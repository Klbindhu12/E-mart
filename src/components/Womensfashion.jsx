import React from "react";
import { womensfashionData } from "../assets/Data/womensfashion";
const Womensfashion = () => {
  const firstSixImages = womensfashionData.slice(0, 6);
  return (
    <>
      <div className="proTitle">
        <h2>Women's Fashion</h2>
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

export default Womensfashion;
