import React, { PropTypes } from 'react';



const KeyValue = (props) => {
  return (
    <div>
        <span>
            {props._key}
        </span>
        <span>
            &nbsp; {props._value}
        </span>
    </div>
  );
};

export default KeyValue;

KeyValue.propTypes = {
  _key: PropTypes.string,
  _value: PropTypes.string,
};