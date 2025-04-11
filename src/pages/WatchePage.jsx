import React from "react";
import { watchData } from "../assets/Data/watches";
import Navbar from "../components/Navbar";

const WatchePage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {watchData.map((item) => {
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

export default WatchePage;
