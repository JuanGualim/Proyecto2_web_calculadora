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
  } = useCalculator()

  return (
    <>
      <Display value={display} />

      <Keyboard
        onDigitClick={appendDigit}
        onOperatorClick={selectOperator}
        onEqualsClick={calculate}
        onClearClick={clear}
      />
    </>
  )
}

export default App