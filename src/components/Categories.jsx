import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'

export default function Categories({ sushiTypes, onSelectCategoryType }) {
  const [sushiTypeIndex, setSelectedType] = useState(0);

  const handleSelectType = (index) => {
    setSelectedType(index)
    onSelectCategoryType(sushiTypes[index].apiName)
  }

  return (
    <div className="categories">
      <ul>
        {sushiTypes?.map((type, index) => (
          <li
            className={classNames({ 'active': sushiTypeIndex === index })}
            onClick={() => handleSelectType(index)}
            key={index + type.label}
          >
            {type.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

Categories.propTypes = {
  onSelectCategoryType: PropTypes.func.isRequired,
  sushiTypeIndex: PropTypes.number.isRequired,
  sushiTypes: PropTypes.arrayOf(PropTypes.object).isRequired
}

Categories.defaultProps = {
  sushiTypes: []
}