import React from "react";
import { mobilesData } from "../assets/Data/mobile";

const Mobiles = () => {
  const firstSixImages = mobilesData.slice(0, 6);
  return (
    <>
      <div className="proTitle">
        <h2>Mobiles</h2>
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

export default Mobiles;
