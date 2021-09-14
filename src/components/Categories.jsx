import React, { useState } from "react";
import classNames from "classnames";

export const Categories = ({ sushiTypes }) => {
  const [sushiTypeIndex, setSelectedType] = useState(0);

  return (
    <div className="categories">
      <ul>
        {sushiTypes?.map((type, index) => (
          <li
            className={classNames({ 'active': sushiTypeIndex === index })}
            onClick={() => setSelectedType(index)}
            key={index + type}
          >
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};
