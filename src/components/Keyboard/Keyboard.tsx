import { Button } from '../Button/Button'

type KeyboardProps = {
  onDigitClick: (digit: string) => void
}

export function Keyboard({
  onDigitClick,
}: KeyboardProps) {
  return (
    <div>
      <Button label="1" onClick={() => onDigitClick('1')} />
      <Button label="2" onClick={() => onDigitClick('2')} />
      <Button label="3" onClick={() => onDigitClick('3')} />
    </div>
  )
}