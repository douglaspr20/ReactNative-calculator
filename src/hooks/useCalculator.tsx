import { useRef, useState } from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

const useCalculator = () => {
  const [lastNumber, setLastNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clear = () => {
    setNumber('0');
    setLastNumber('0');
  };

  const createNumber = (numberText: string) => {
    if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        return;
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const postiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    if (
      (number.startsWith('-') && number.length === 2) ||
      number.length === 1
    ) {
      setNumber('0');
      return;
    }
    const newNumber = number.slice(0, -1);

    setNumber(newNumber);
  };

  const changeLastNumber = () => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    0;
    changeLastNumber();
    lastOperation.current = Operators.divide;
  };

  const btnMultiply = () => {
    changeLastNumber();

    lastOperation.current = Operators.multiply;
  };

  const btnSubtract = () => {
    changeLastNumber();

    lastOperation.current = Operators.subtract;
  };

  const btnAdd = () => {
    changeLastNumber();

    lastOperation.current = Operators.add;
  };

  const calc = () => {
    const num1 = Number(number);
    const num2 = Number(lastNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
      default:
        break;
    }
    setLastNumber('0');
  };
  return {
    number,
    lastNumber,
    clear,
    createNumber,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calc,
    postiveNegative,
  };
};

export default useCalculator;
