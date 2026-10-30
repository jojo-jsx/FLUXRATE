const toneClasses = {
  up: "text-rise",
  down: "text-fall",
  neutral: "text-ice",
}

function formatValue(value) {
  let decimals

  if (value >= 1000) {
    decimals = 2
  } else if (value >= 1) {
    decimals = 4
  } else {
    decimals = 6
  }

  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
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