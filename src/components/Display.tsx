type DisplayProps = {
  value: string
}

export function Display({ value }: DisplayProps) {
  return (
    <div
      aria-label="display"
      role="status"
    >
      {value}
    </div>
  )
}