import React from "react";
import { watchData } from "../assets/Data/watches";

const Watches = () => {
  const firstSixImages = watchData.slice(0, 6);
  return (
    <>
      <div className="proTitle">
        <h2>Watches</h2>
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

export default Watches;
