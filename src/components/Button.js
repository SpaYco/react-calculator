import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        {name}
      </div>
    );
  }
}

Button.defaultProps = {
  name: '0',
};
Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
