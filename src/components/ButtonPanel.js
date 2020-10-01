import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const styles = {
  display: 'flex',
  flexDirection: 'column',
};

const rowStyles = {
  height: 100,
  width: '100%',
  display: 'flex',
};

// eslint-disable-next-line  react/prefer-stateless-function
class ButtonPanel extends React.Component {
  render() {
    const { clickHandler } = this.props;

    this.handleClick = e => {
      clickHandler(e);
    };

    return (
      <div style={styles}>
        <div style={rowStyles}>
          <Button name="AC" clickHandler={this.handleClick} />

          <Button name="+/-" clickHandler={this.handleClick} />

          <Button name="%" clickHandler={this.handleClick} />

          <Button name="÷" clickHandler={this.handleClick} />

        </div>
        <div style={rowStyles}>
          <Button name="7" clickHandler={this.handleClick} />

          <Button name="8" clickHandler={this.handleClick} />

          <Button name="9" clickHandler={this.handleClick} />

          <Button name="X" clickHandler={this.handleClick} />

        </div>
        <div style={rowStyles}>
          <Button name="4" clickHandler={this.handleClick} />

          <Button name="5" clickHandler={this.handleClick} />

          <Button name="6" clickHandler={this.handleClick} />

          <Button name="-" clickHandler={this.handleClick} />

        </div>
        <div style={rowStyles}>
          <Button name="1" clickHandler={this.handleClick} />

          <Button name="2" clickHandler={this.handleClick} />

          <Button name="3" clickHandler={this.handleClick} />

          <Button name="+" clickHandler={this.handleClick} />

        </div>
        <div style={rowStyles}>
          <Button name="0" wide clickHandler={this.handleClick} />

          <Button name="." clickHandler={this.handleClick} />

          <Button name="=" clickHandler={this.handleClick} />

        </div>

      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
ButtonPanel.defaultProps = {
  clickHandler: () => '',
};

export default ButtonPanel;
