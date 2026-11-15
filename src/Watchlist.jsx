import { Star, ArrowRight } from "lucide-react"
import WatchlistCard from "./WatchlistCard"

const watchlist = [
  { base: "BTC", quote: "USD", icon: "image.png", change: 2.314, sparkline: [64800, 65200, 64950, 66100, 65800, 67128.4] },
  { base: "ETH", quote: "USD", icon: "image.png", change: 1.512, sparkline: [3400, 3450, 3420, 3500, 3480, 3500] },
  { base: "SOL", quote: "USD", icon: "image.png", change: -1.523, sparkline: [3400, 3450, 3420, 3500, 3480, 3500] },
  { base: "USD", quote: "NGN", icon: "image.png", change: 1.534, sparkline: [3400, 3450, 3420, 3500, 3480, 3500] },
  { base: "EUR", quote: "USD", icon: "image.png", change: 1.556, sparkline: [3400, 3450, 3420, 3500, 3480, 3500] },
  { base: "DOGE", quote: "USD", icon: "image.png", change: 1.545, sparkline: [3400, 3450, 3420, 3500, 3480, 3500] },
]

export default function Watchlist({ currencies }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-brand-500/15 p-1.5">
            <Star className="h-4 w-4 text-brand-400" />
          </div>
          <span className="font-heading text-lg font-semibold text-ice">Watchlist</span>
        </div>
        <a href="#converter" className="flex items-center gap-1 text-sm text-brand-400 transition-colors hover:text-brand-600">
          <span>Convert now</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {watchlist.map((item) => {
          const baseData = currencies.find((currency) => currency.currency === item.base)
          const quoteData = currencies.find((currency) => currency.currency === item.quote)

          if (!baseData || !quoteData) {
            return null
          }

          const price = baseData.usdPrice / quoteData.usdPrice

          return (
            <WatchlistCard
              key={`${item.base}-${item.quote}`}
              base={item.base}
              quote={item.quote}
              icon={item.icon}
              price={price}
              change={item.change}
              sparkline={item.sparkline}
            />
          )
        })}
      </div>
    </div>
  )
}