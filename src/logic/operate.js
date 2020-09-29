import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigOne = Big(numberOne);
  const bigTwo = Big(numberTwo);
  let result;
  if (operation === '+') {
    result = bigOne.plus(bigTwo).toString();
  }
  if (operation === '-') {
    result = bigOne.minus(bigTwo).toString();
  }
  if (operation === 'X') {
    result = bigOne.times(bigTwo).toString();
  }
  if (operation === '÷') {
    result = bigOne.div(bigTwo).toString();
  }
  if (operation === '%') {
    result = bigOne.mod(bigTwo).toString();
  }
  return result;
};

export default operate;
