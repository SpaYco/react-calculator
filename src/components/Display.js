/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'flex',
  background: 'gray',
  height: 100,
  color: 'white',
  fontWeight: 'bold',
  padding: 15,
  justifyContent: 'flex-end',
  alignItems: 'center',
  fontSize: 35,
};

function Display(props) {
  return (
    <div style={styles}>
      {props.result}
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};
Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
