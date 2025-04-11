import React from "react";
import { computerData } from "../assets/Data/computers";
const Computers = () => {
  const firstSixImages = computerData.slice(0, 6);
  return (
    <>
      <div className="proTitle">
        <h2>Computers</h2>
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

export default Computers;
