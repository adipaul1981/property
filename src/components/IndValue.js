import React, { PropTypes } from 'react';



const IndValue = (props) => {
  return (
    <div>
        <span>
            {props.ind}:
        </span>
        <span>
            &nbsp; {props.value}
        </span>
    </div>
  );
};

export default IndValue;

IndValue.propTypes = {
  ind: PropTypes.string,
  value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
};