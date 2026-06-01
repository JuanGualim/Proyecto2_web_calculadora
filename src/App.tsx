import { Display } from './components/Display/Display'
import { Keyboard } from './components/Keyboard/Keyboard'
import { useCalculator } from './hooks/useCalculator'

function App() {
  const {
    display,
    appendDigit,
    selectOperator,
    calculate,
  } = useCalculator()

  return (
    <>
      <Display value={display} />

      <Keyboard
        onDigitClick={appendDigit}
        onOperatorClick={selectOperator}
        onEqualsClick={calculate}
      />
    </>
  )
}

export default App