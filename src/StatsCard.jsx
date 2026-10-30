import { ArrowUp, ArrowDown } from "lucide-react"

export default function StatsCard(props) {
  const isPositive = props.change >= 0;

  return (
    <div className="rounded-2xl border border-white/5 bg-ink-800/60 p-4 transition-colors hover:border-white/10">
      <div className="flex items-center gap-2">
        <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${isPositive ? "bg-rise/10 text-rise" : "bg-fall/10 text-fall"}`}>
          {isPositive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
        </div>
        <span className="text-xs text-muted">{props.label}</span>
      </div>

      <div className="mt-3 flex items-end justify-between">
        <span className="font-heading text-xl font-semibold tabular-nums text-ice">{props.value}</span>
        <span className={`text-xs font-semibold ${isPositive ? "text-rise" : "text-fall"}`}>
 {isPositive ? "+" : ""}{props.change.toFixed(1)}%        </span>
      </div>
    </div>
  )
}