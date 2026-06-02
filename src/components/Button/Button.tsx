import './Button.css'
type ButtonProps = {
  label: string
  onClick: () => void
}
export function Button({
  label,
  onClick,
}: ButtonProps) {
  return (
    <button 
        className="calculator-button"
        aria-label={label}
        onClick={onClick}
    >
        {label}
    </button>
  )
}