import { useState } from "react";

export default function useCalculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);
  const [history, setHistory] = useState([]); // <<< histórico

  function addDigit(digit) {
    if (digit === "." && displayValue.includes(".")) return;

    const shouldClear = displayValue === "0" || clearDisplay;
    const currentValue = shouldClear ? "" : displayValue;
    const newValue = currentValue + digit;

    setDisplayValue(newValue);
    setClearDisplay(false);

    if (digit !== ".") {
      const newFloat = parseFloat(newValue);
      const newValues = [...values];
      newValues[current] = newFloat;
      setValues(newValues);
    }
  }

  function clear() {
    setDisplayValue("0");
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
    setHistory([]); // também limpa histórico
  }

 function addOperation(op) {
  if (current === 0) {
    // primeira vez escolhendo operação
    setOperation(op);
    setCurrent(1);
    setClearDisplay(true);
  } else {
    const equals = op === "=";
    const newValues = [...values];

    try {
      newValues[0] = eval(`${newValues[0]} ${operation} ${newValues[1]}`);
    } catch (e) {
      newValues[0] = values[0];
    }
    newValues[1] = 0;

    // monta a expressão
    const expression = `${values[0]} ${operation} ${values[1]} = ${newValues[0]}`;

    // guarda no histórico sempre que tiver cálculo concluído
    setHistory((prev) => [expression, ...prev]);

    setDisplayValue(String(newValues[0]));
    setOperation(equals ? null : op); // se "=" encerra, senão troca operação
    setCurrent(equals ? 0 : 1);
    setClearDisplay(true);
    setValues(newValues);
  }
}


  return {
    displayValue,
    addDigit,
    clear,
    addOperation,
    history, // <<< expõe histórico
  };
}
