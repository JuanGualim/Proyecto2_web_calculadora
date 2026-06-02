import './App.css'
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
    <div className="app">
      <div className="calculator">
        <Display value={display} />

        <Keyboard
          onDigitClick={appendDigit}
          onOperatorClick={selectOperator}
          onEqualsClick={calculate}
          onClearClick={clear}
          onDecimalClick={appendDecimal}
          onToggleSignClick={toggleSign}
        />
      </div>
    </div>
  )
}

export default App