import { Button } from '../Button/Button'

type KeyboardProps = {
  onDigitClick: (digit: string) => void
}

export function Keyboard({
  onDigitClick,
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
    </div>
  )
}