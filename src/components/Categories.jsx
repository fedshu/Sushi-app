import React from "react";

export const Categories = ({ sushiTypes }) => {
  return (
    <div className="categories">
      <ul>
        <li className="active">All</li>
        {sushiTypes &&
          sushiTypes.map((type, index) => <li key={index + type}>{type}</li>)}
      </ul>
    </div>
  );
};
