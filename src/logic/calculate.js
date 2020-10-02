import operate from './operate';

const calculate = (data, btn) => {
  const arr = ['+', '-', 'X', '÷'];

  const totalIsNumber = !Number.isNaN(parseInt(data.total, 10));
  const nextlIsNumber = !Number.isNaN(parseInt(data.next, 10));
  const btnIsNumber = !Number.isNaN(parseInt(btn, 10));

  let { total } = data;
  let { next } = data;
  let { operation } = data;

  if (totalIsNumber && nextlIsNumber) {
    if (btn === '=') {
      total = operate(total, next, operation);
      next = null;
      operation = '=';
    }
    if (btn === '+/-') {
      total = operate(total, next, operation) * -1;
      next = null;
      operation = null;
    }
    if (arr.includes(btn)) {
      total = operate(data.total, data.next, btn);
      next = null;
      operation = btn;
    }
    if (btn === '%') {
      const calc = operate(total, next, operation);
      total = operate(calc, total * 2, btn);
      next = null;
      operation = '=';
    }
  }

  if (totalIsNumber && !nextlIsNumber) {
    if (btn === '=') {
      operation = '=';
    }
    if (btn === '+/-') {
      total *= -1;
      operation = null;
    }
    if (arr.includes(btn)) {
      operation = btn;
    }
    if (btn === '%') {
      total = operate(total, total * 2, btn);
      next = null;
      operation = '=';
    }
  }

  if (btnIsNumber || btn === '.') {
    if (operation === '=') {
      total = null;
      next = null;
      operation = null;
    }
    if (total === null || total === '0') {
      if (btn === '.') {
        total = '0.';
      } else {
        total = btn.toString();
      }
    } else if (operation === null) {
      if (btn === '.' && total.indexOf('.') === -1) {
        total += '.';
      } else if (btn !== '.') {
        total += btn.toString();
      }
    } else if (next === null || next === '0') {
      if (btn === '.') {
        next = '0.';
      } else {
        next = btn.toString();
      }
    } else if (btn === '.' && next.indexOf('.') === -1) {
      next += '.';
    } else if (btn !== '.') {
      next += btn.toString();
    }
  }

  if (btn === 'AC') {
    total = null;
    next = null;
    operation = null;
  }
  return {
    total,
    next,
    operation,
  };
};

export default calculate;
