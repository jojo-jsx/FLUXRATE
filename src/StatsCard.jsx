import { ArrowUp, ArrowDown } from "lucide-react"

export default function StatsCard(props) {
  const isPositive = props.change >= 0

  return (
    <div className="min-w-0 rounded-2xl border border-white/5 bg-ink-800/60 p-3 transition-colors hover:border-white/10 sm:p-4">
      <div className="flex min-w-0 items-center gap-2">
        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${isPositive ? "bg-rise/10 text-rise" : "bg-fall/10 text-fall"}`}>
          {isPositive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
        </div>
        <span className="truncate text-xs text-muted">{props.label}</span>
      </div>

      <div className="mt-3 flex items-end justify-between gap-2">
        <span className="min-w-0 truncate font-heading text-lg font-semibold tabular-nums text-ice sm:text-xl">{props.value}</span>
        <span className={`shrink-0 text-xs font-semibold ${isPositive ? "text-rise" : "text-fall"}`}>
          {isPositive ? "+" : ""}{props.change.toFixed(1)}%
        </span>
      </div>
    </div>
  )
}