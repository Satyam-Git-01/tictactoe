import React from "react";

const Block = ({mark,changeMark,position}) => {
  return (
    <>
      <div className={`block mark${mark}`} onClick={(e)=>changeMark(position)}></div>
    </>
  );
};

export default Block;
