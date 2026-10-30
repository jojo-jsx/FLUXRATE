import StatsCard from "./StatsCard"

function StatsBar() {
    const stats = [
  { label: "Global Market Cap", value: "$2.41T", change: 1.2 },
  { label: "24h Volume", value: "$88.4B", change: 0.6 },
  { label: "BTC Dominance", value: "52.1%", change: 0.8 },
  { label: "Fear & Greed", value: "68 · Greed", change: 4.0 },
]

  return (
<div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
  {stats.map((stat) => (
    <StatsCard key={stat.label} label={stat.label} value={stat.value} change={stat.change} />
  ))}
</div>  )
}

export default StatsBar