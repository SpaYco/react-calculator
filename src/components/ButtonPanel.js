import React from 'react';
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
    return (
      <div style={styles}>
        <div style={rowStyles}>
          <Button name="AC" />

          <Button name="+/-" />

          <Button name="%" />

          <Button name="÷" />

        </div>
        <div style={rowStyles}>
          <Button name="7" />

          <Button name="8" />

          <Button name="9" />

          <Button name="X" />

        </div>
        <div style={rowStyles}>
          <Button name="4" />

          <Button name="5" />

          <Button name="6" />

          <Button name="-" />

        </div>
        <div style={rowStyles}>
          <Button name="1" />

          <Button name="2" />

          <Button name="3" />

          <Button name="+" />

        </div>
        <div style={rowStyles}>
          <Button name="0" wide />

          <Button name="." />

          <Button name="=" />

        </div>

      </div>
    );
  }
}

export default ButtonPanel;
