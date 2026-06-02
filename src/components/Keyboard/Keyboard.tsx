import './Keyboard.css'
import { Button } from '../Button/Button'

type KeyboardProps = {
  onDigitClick: (digit: string) => void
  onOperatorClick: (operator: string) => void
  onEqualsClick: () => void
  onClearClick: () => void
  onDecimalClick: () => void
  onToggleSignClick: () => void
}

export function Keyboard({
  onDigitClick,
  onOperatorClick,
  onEqualsClick,
  onClearClick,
  onDecimalClick,
  onToggleSignClick,
}: KeyboardProps) {
  return (
    <div
      className="keyboard"
      role="group"
      aria-label="Calculator keyboard"
    >
      {/* Row 1 */}
      <Button label="C"   onClick={onClearClick}                  variant="clear" />
      <Button label="+/-" onClick={onToggleSignClick}             variant="utility" />
      <Button label="%"   onClick={() => onOperatorClick('%')}    variant="utility" />
      <Button label="/"   onClick={() => onOperatorClick('/')}    variant="operator" />

      {/* Row 2 */}
      <Button label="7" onClick={() => onDigitClick('7')} />
      <Button label="8" onClick={() => onDigitClick('8')} />
      <Button label="9" onClick={() => onDigitClick('9')} />
      <Button label="×" onClick={() => onOperatorClick('*')} variant="operator" />

      {/* Row 3 */}
      <Button label="4" onClick={() => onDigitClick('4')} />
      <Button label="5" onClick={() => onDigitClick('5')} />
      <Button label="6" onClick={() => onDigitClick('6')} />
      <Button label="−" onClick={() => onOperatorClick('-')} variant="operator" />

      {/* Row 4 */}
      <Button label="1" onClick={() => onDigitClick('1')} />
      <Button label="2" onClick={() => onDigitClick('2')} />
      <Button label="3" onClick={() => onDigitClick('3')} />
      <Button label="+" onClick={() => onOperatorClick('+')} variant="operator" />

      {/* Row 5 — 0 spans 2 columns via wrapper div */}
      <div className="btn-zero">
        <Button label="0" onClick={() => onDigitClick('0')} />
      </div>
      <Button label="." onClick={onDecimalClick} variant="utility" />
      <Button label="=" onClick={onEqualsClick}  variant="equals" />
    </div>
  )
}