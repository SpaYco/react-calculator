import React from 'react';

// eslint-disable-next-line  react/prefer-stateless-function
class ButtonPanel extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button type="submit">
            AC
          </button>
          <button type="submit">
            +/-
          </button>
          <button type="submit">
            %
          </button>
          <button type="submit">
            ÷
          </button>
        </div>
        <div>
          <button type="submit">
            7
          </button>
          <button type="submit">
            8
          </button>
          <button type="submit">
            9
          </button>
          <button type="submit">
            X
          </button>
        </div>
        <div>
          <button type="submit">
            4
          </button>
          <button type="submit">
            5
          </button>
          <button type="submit">
            6
          </button>
          <button type="submit">
            -
          </button>
        </div>
        <div>
          <button type="submit">
            1
          </button>
          <button type="submit">
            2
          </button>
          <button type="submit">
            3
          </button>
          <button type="submit">
            +
          </button>
        </div>
        <div>
          <button type="submit">
            0
          </button>
          <button type="submit">
            .
          </button>
          <button type="submit">
            =
          </button>
        </div>

      </div>
    );
  }
}

export default ButtonPanel;
