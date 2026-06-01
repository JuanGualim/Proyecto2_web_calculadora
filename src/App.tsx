import { Display } from './components/Display/Display'
import { Keyboard } from './components/Keyboard/Keyboard'
import { useCalculator } from './hooks/useCalculator'

function App() {
  const {
    display,
    appendDigit,
  } = useCalculator()

  return (
    <>
      <Display value={display} />
      <Keyboard onDigitClick={appendDigit} />
    </>
  )
}

export default App