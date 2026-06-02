import './Display.css'

type DisplayProps = {
  value: string
}

export function Display({ value }: DisplayProps) {
  return (
    <div
      aria-label="Calculator display"
      role="status"
      aria-live="polite"
      className="display"
    >
      {value}
    </div>
  )
}