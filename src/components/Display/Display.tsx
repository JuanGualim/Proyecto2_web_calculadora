import './Display.css'
type DisplayProps = {
  value: string
}
export function Display({ value }: DisplayProps) {
  const isError = value === 'ERROR'
  const isLong = value.length > 7
  return (
    <div
      aria-label="Calculator display"
      role="status"
      aria-live="polite"
      className="display"
    >
      <span className={`display-value${isError ? ' error' : ''}${isLong ? ' long' : ''}`}>
        {value}
      </span>
    </div>
  )
}