import React, { useState } from "react";
import classNames from "classnames";

export const Categories = ({ sushiTypes, selectType }) => {
  const [isSelected, setSelectedType] = useState(0);

  const handleSelectedType = (index) => {
    setSelectedType(index);
  };

  return (
    <div className="categories">
      <ul>
        {sushiTypes &&
          sushiTypes.map((type, index) => (
            <li
              className={classNames({ active: isSelected === index })}
              onClick={() => handleSelectedType(index)}
              key={index + type}
            >
              {type}
            </li>
          ))}
      </ul>
    </div> 
  );
};
