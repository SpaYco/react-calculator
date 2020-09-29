import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { color, wide } = this.props;

    const btnStyles = {
      width: wide === true ? '50%' : '25%',
      backgroundColor: color,
    };
    const { name } = this.props;

    return (
      <button type="submit" style={btnStyles}>
        {name}
      </button>
    );
  }
}

Button.defaultProps = {
  name: '0',
  color: 'orange',
  wide: false,
};
Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
