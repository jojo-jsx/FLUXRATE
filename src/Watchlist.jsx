import { Star, ArrowRight } from 'lucide-react';
import WatchlistCard from './WatchlistCard'

export default function Watchlist() {

  const watchlist = [
    {base : "BTC", quote :"USD" , icon: "image.png" , price : 67128.4 , change : 2.314 , sparkline : [64800, 65200, 64950, 66100, 65800, 67128.4]},
    {base : "ETH", quote :"USD" , icon: "image.png" , price : 35002.3, change : 1.512 , sparkline : [3400, 3450, 3420, 3500, 3480, 3500]},
    {base : "SOL", quote :"USD" , icon: "image.png" , price : 35023.2, change : -1.523 , sparkline : [3400, 3450, 3420, 3500, 3480, 3500]},
    {base : "USD", quote :"NGN" , icon: "image.png" , price : 35455.4, change : 1.534 , sparkline : [3400, 3450, 3420, 3500, 3480, 3500]},
    {base : "EUR", quote :"USD" , icon: "image.png" , price : 35003.6, change : 1.556 , sparkline : [3400, 3450, 3420, 3500, 3480, 3500]},
    {base : "DOGE", quote :"USD" , icon: "image.png" , price : 35045.8, change : 1.545 , sparkline : [3400, 3450, 3420, 3500, 3480, 3500]}
  ];

  return (
    <div >
     <div className="flex items-center justify-between mb-4">
  <div className="flex items-center gap-2">
    <div className="bg-brand-500/15 p-1.5 rounded-lg">
      <Star className="w-4 h-4 text-brand-400" />
    </div>
    <span className="font-heading text-ice text-lg font-semibold">Watchlist</span>
  </div>
  <a href="#" className="flex items-center gap-1 text-brand-400 hover:text-brand-600 text-sm transition-colors">
    <span>Convert now</span>
    <ArrowRight className="w-4 h-4" />
  </a>
</div>

      <div className="grid grid-cols-3 gap-4">
        {watchlist.map((item) => (
          <WatchlistCard
            key={`${item.base}-${item.quote}`}
            base={item.base}
            quote={item.quote}
            icon={item.icon}
            price={item.price}
            change={item.change}
            sparkline={item.sparkline}
          />
        ))}
      </div>
    </div>
  )
}