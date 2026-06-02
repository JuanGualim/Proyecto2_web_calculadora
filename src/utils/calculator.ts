export function add(
  a: number,
  b: number,
) {
  return a + b
}

export function subtract(
  a: number,
  b: number,
) {
  return a - b
}

export function multiply(
  a: number,
  b: number,
) {
  return a * b
}

export function divide(
  a: number,
  b: number,
) {
  return a / b
}

export function isInvalidResult(
  value: number,
) {
  return value < 0 || value > 99999999
}

export function modulo(
  a: number,
  b: number,
) {
  return a % b
}

export function calculateResult(
  firstOperand: number,
  secondOperand: number,
  operator: string,
) {
  if (operator === '+') {
    return add(firstOperand, secondOperand)
  }

  if (operator === '-') {
    return subtract(firstOperand, secondOperand)
  }

  if (operator === '*') {
    return multiply(firstOperand, secondOperand)
  }

  if (operator === '/') {
    return divide(firstOperand, secondOperand)
  }

  if (operator === '%') {
    return modulo(firstOperand, secondOperand)
  }

  return secondOperand
}