import { Display } from './components/Display/Display'
import { useCalculator } from './hooks/useCalculator'

function App() {
  const { display } = useCalculator()

  return (
    <Display value={display} />
  )
}

export default App