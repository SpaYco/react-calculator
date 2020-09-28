import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'flex',
  flexDirection: 'column',
};

const rowStyles = {
  height: 100,
  width: '100%',
  display: 'flex',
};

const btnStyles = {
  width: '25%',
  backgroundColor: '',
};

let btnWide;

// eslint-disable-next-line  react/prefer-stateless-function
class ButtonPanel extends React.Component {
  render() {
    const { color, wide } = this.props;

    if (wide === true) {
      btnWide = '50%';
    } else {
      btnWide = '25%';
    }

    btnStyles.backgroundColor = color;
    return (
      <div style={styles}>
        <div style={rowStyles}>
          <button type="submit" style={btnStyles}>
            AC
          </button>
          <button type="submit" style={btnStyles}>
            +/-
          </button>
          <button type="submit" style={btnStyles}>
            %
          </button>
          <button type="submit" style={btnStyles}>
            ÷
          </button>
        </div>
        <div style={rowStyles}>
          <button type="submit" style={btnStyles}>
            7
          </button>
          <button type="submit" style={btnStyles}>
            8
          </button>
          <button type="submit" style={btnStyles}>
            9
          </button>
          <button type="submit" style={btnStyles}>
            X
          </button>
        </div>
        <div style={rowStyles}>
          <button type="submit" style={btnStyles}>
            4
          </button>
          <button type="submit" style={btnStyles}>
            5
          </button>
          <button type="submit" style={btnStyles}>
            6
          </button>
          <button type="submit" style={btnStyles}>
            -
          </button>
        </div>
        <div style={rowStyles}>
          <button type="submit" style={btnStyles}>
            1
          </button>
          <button type="submit" style={btnStyles}>
            2
          </button>
          <button type="submit" style={btnStyles}>
            3
          </button>
          <button type="submit" style={btnStyles}>
            +
          </button>
        </div>
        <div style={rowStyles}>
          <button type="submit" style={{ width: btnWide, backgroundColor: color }}>
            0
          </button>
          <button type="submit" style={btnStyles}>
            .
          </button>
          <button type="submit" style={btnStyles}>
            =
          </button>
        </div>

      </div>
    );
  }
}

ButtonPanel.defaultProps = {
  color: 'orange',
  wide: true,
};

ButtonPanel.propTypes = {
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default ButtonPanel;
