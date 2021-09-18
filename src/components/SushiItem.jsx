import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";

export default function SushiItem({ name, imageUrl, price, sizes }) {
  const [sushiSizeIndex, setSelectedSize] = useState(0);

  return (
    <div className="sushi-block">
      <img
        className="sushi-block__image"
        width="260"
        height="260"
        src={imageUrl}
        loading="lazy"
        alt="Sushi"
      />
      <h4 className="sushi-block__title">{name}</h4>
      <div className="sushi-block__selector">
        <ul>
          <li className="info">Product Information</li>
        </ul>
        <ul>
          {sizes?.map((size, index) => (
            <li
              className={sushiSizeIndex === index ? "active" : ""}
              onClick={() => setSelectedSize(index)}
              key={index}
            >
              {size}x
            </li>
          ))}
        </ul>
      </div>
      <div className="sushi-block__bottom">
        <div className="sushi-block__price">from {price} $</div>
        <Button className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          <i>1</i>
        </Button>
      </div>
    </div>
  );
}

SushiItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

SushiItem.defaultProps = {
  id: 0,
  name: "No name",
  imageUrl: "No picture",
  price: 0,
  sizes: [],
};
