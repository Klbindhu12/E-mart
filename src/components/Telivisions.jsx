import React from "react";
import { telivisionData } from "../assets/Data/telivisions";
const Telivisions = () => {
  const firstSixImages = telivisionData.slice(0, 6);
  return (
    <>
      <div className="proTitle">
        <h2>Telivision</h2>
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

export default Telivisions;
