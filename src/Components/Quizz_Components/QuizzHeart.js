import React from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function QuizzHeart(props) {
  return (
    <>
      <IconContext.Provider
        value={{ color: "#ef3969", className: "mef-icon", size: 20 }}
      >
        {props.heart.map((heart,index) => (
         <div key={index}>
          < FaHeart />
          </div>
        ))}

        {props.heartbroke.map((heart,index) => (
          <div key={index}>
          <FaHeartBroken />
          </div>
        ))}

        {/* <FaHeartBroken/> */}
      </IconContext.Provider>
    </>
  );
}
