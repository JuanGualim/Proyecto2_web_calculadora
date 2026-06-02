import './Button.css'
type ButtonProps = {
  label: string
  onClick: () => void
  variant?: 'digit' | 'operator' | 'equals' | 'clear' | 'utility'
}
export function Button({ label, onClick, variant = 'digit',}: ButtonProps) {
  const classMap: Record<string, string> = {
    digit: '',
    operator: 'operator',
    equals: 'equals',
    clear: 'clear',
    utility: 'utility',
  }
  return (
    <button className={`calculator-button ${classMap[variant]}`} aria-label={label} onClick={onClick}>
      {label}
    </button>
  )
}