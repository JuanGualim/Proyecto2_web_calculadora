import './Display.css'

type DisplayProps = {
  value: string
}

export function Display({ value }: DisplayProps) {
  return (
    <div
      aria-label="display"
      role="status"
      className="display"
    >
      {value}
    </div>
  )
}