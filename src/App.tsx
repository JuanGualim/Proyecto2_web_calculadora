import { Display } from './components/Display/Display'
import { Keyboard } from './components/Keyboard/Keyboard'
import { useCalculator } from './hooks/useCalculator'

function App() {
  const {
    display,
    appendDigit,
    selectOperator,
    calculate,
    clear,
    appendDecimal,
    toggleSign,
  } = useCalculator()

  return (
    <>
      <Display value={display} />

      <Keyboard
        onDigitClick={appendDigit}
        onOperatorClick={selectOperator}
        onEqualsClick={calculate}
        onClearClick={clear}
        onDecimalClick={appendDecimal}
        onToggleSignClick={toggleSign}
      />
    </>
  )
}

export default App