import React from "react";
import { mobilesData } from "../assets/Data/mobile";
import Navbar from "../components/Navbar";
const MobilePage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {mobilesData.map((item) => {
          return (
            <div>
              <div className="pageImg">
                <img src={item.image} alt="" />
              </div>
              <div className="proModel">
                {item.company}
                {item.model}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MobilePage;
