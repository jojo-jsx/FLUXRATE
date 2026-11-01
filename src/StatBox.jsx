const toneClasses = {
  up: "text-rise",
  down: "text-fall",
  neutral: "text-ice",
}
function formatValue(value) {
  if (value >= 1000) {
    return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  if (value >= 1) {
    return value.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })
  }

  return value.toLocaleString(undefined, { minimumSignificantDigits: 4, maximumSignificantDigits: 4 })
}
export default function StatBox(props) {
  return (
    <div className="rounded-xl border border-white/5 bg-ink-900 px-3 py-2">
      <div className="text-xs text-muted">{props.label}</div>
      <div className={`font-heading text-sm font-semibold tabular-nums ${toneClasses[props.tone]}`}>
        {formatValue(props.value)}
      </div>
    </div>
  )
}