import { Button } from '../Button/Button'

type KeyboardProps = {
  onDigitClick: (digit: string) => void
  onOperatorClick: (operator: string) => void
  onEqualsClick: () => void
  onClearClick: () => void
}

export function Keyboard({
  onDigitClick,
  onOperatorClick,
  onEqualsClick,
  onClearClick,
}: KeyboardProps) {
  const digits = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '0',
  ]

  return (
    <div>
      {digits.map(digit => (
        <Button
          key={digit}
          label={digit}
          onClick={() => onDigitClick(digit)}
        />
      ))}

      <Button
        label="+"
        onClick={() => onOperatorClick('+')}
      />

      <Button
        label="-"
        onClick={() => onOperatorClick('-')}
      />

      <Button
        label="*"
        onClick={() => onOperatorClick('*')}
      />

      <Button
        label="/"
        onClick={() => onOperatorClick('/')}
      />

      <Button
        label="="
        onClick={onEqualsClick}
      />
        <Button
            label="C"
            onClick={onClearClick}
        />
    </div>
  )
}