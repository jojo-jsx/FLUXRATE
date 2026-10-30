import { useState } from "react"
import { ArrowUp, ArrowDown } from "lucide-react"
import StatBox from "./StatBox"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { currencyData } from "./currencies"

function makeHistory(data, points) {
  if (data.currency === "USD") return Array(points).fill(1)

  const seed = data.currency.charCodeAt(0) + data.currency.charCodeAt(1)
  const size = data.group === "crypto" ? 0.04 : 0.004

  return Array.from({ length: points }, (_, i) => {
    const wave = Math.sin(i * 0.9 + seed) + 0.5 * Math.cos(i * 0.4 + seed)
    const fade = 1 - i / (points - 1)
    return data.usdPrice * (1 + wave * size * fade)
  })
}

function dayLabel(index, total) {
  const date = new Date()
  date.setDate(date.getDate() - (total - 1 - index))
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" })
}

export default function ChartSection({ fromCurrency, toCurrency }) {
  const [range, setRange] = useState("7D")

  const fromData = currencyData.find((data) => data.currency === fromCurrency)
  const toData = currencyData.find((data) => data.currency === toCurrency)

  const points = range === "7D" ? 7 : 30
  const days = points

  const fromSeries = makeHistory(fromData, points)
  const toSeries = makeHistory(toData, points)

  const prices = fromSeries.map((fromPrice, index) => fromPrice / toSeries[index])

  const current = prices[prices.length - 1]
  const open = prices[0]
  const high = Math.max(...prices)
  const low = Math.min(...prices)

  const isPositive = current >= open
  const changePercent = Math.abs(((current - open) / open) * 100)

  const chartData = prices.map((price, index) => ({
    date: dayLabel(index, prices.length),
    price: price,
  }))

  const lineColor = isPositive ? "#2fd57f" : "#ff5f6d"

  return (
    <div className="rounded-2xl border border-white/5 bg-ink-850/60 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-lg text-brand-400">{fromData.symbol}</div>
            <span className="text-muted">/</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-lg text-brand-400">{toData.symbol}</div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-semibold text-ice">{fromData.currency}/{toData.currency}</span>
              <span className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-semibold ${isPositive ? "bg-rise/10 text-rise" : "bg-fall/10 text-fall"}`}>
                {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                {changePercent.toFixed(2)}%
              </span>
            </div>
            <div className="text-sm text-muted">Price history · last {days} days</div>
          </div>
        </div>

        <div className="inline-flex rounded-full border border-white/5 bg-ink-800 p-1">
          {["7D", "30D"].map((label) => (
            <button
              key={label}
              onClick={() => setRange(label)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                range === label ? "bg-brand-500 text-white" : "text-muted hover:text-ice"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatBox label="Current" value={current} tone="neutral" />
        <StatBox label="Open" value={open} tone="neutral" />
        <StatBox label="High" value={high} tone="up" />
        <StatBox label="Low" value={low} tone="down" />
      </div>

      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={lineColor} stopOpacity={0.3} />
                <stop offset="100%" stopColor={lineColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#ffffff" strokeOpacity={0.05} strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              interval={range === "30D" ? 1 : 0}
              minTickGap={24}
              stroke="#8b98ad"
              tickLine={false}
              axisLine={false}
              fontSize={12}
            />
            <YAxis
              orientation="right"
              domain={["auto", "auto"]}
              tickFormatter={(value) => value.toLocaleString(undefined, { maximumFractionDigits: 8 })}
              stroke="#8b98ad"
              tickLine={false}
              axisLine={false}
              fontSize={12}
              width={72}
            />
            <Tooltip
              formatter={(value) => [value.toLocaleString(undefined, { maximumFractionDigits: 8 }), `${fromData.currency}/${toData.currency}`]}
              contentStyle={{ background: "#0f1729", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }}
            />
            <Area type="monotone" dataKey="price" stroke={lineColor} strokeWidth={2} fill="url(#priceFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}