/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const {
      name,
      color,
      wide,
      clickHandler,
    } = this.props;

    const btnStyles = {
      width: wide === true ? '50%' : '25%',
      backgroundColor: color,
    };

    this.handleClick = e => {
      clickHandler(e.target.value);
    };

    return (
      <button style={btnStyles} value={name} onClick={this.handleClick}>
        {name}
      </button>
    );
  }
}

Button.defaultProps = {
  name: '0',
  color: 'orange',
  wide: false,
  clickHandler: () => '',
};
Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};

export default Button;
