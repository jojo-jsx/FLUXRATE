import { Star, ArrowRight } from 'lucide-react';
import WatchlistCard from './WatchlistCard'

export default function Watchlist() {

  const watchlist = [
    {base : "BTC", quote :"USD" , icon: "image.png" , price : 67128.4 , change : "2.314%" , sparkline : [64800, 65200, 64950, 66100, 65800, 67128.4]},
    {base : "ETH", quote :"USD" , icon: "image.png" , price : 3500, change : "1.5%" , sparkline : [3400, 3450, 3420, 3500, 3480, 3500]},
    {base : "SOL", quote :"USD" , icon: "image.png" , price : 3500, change : "1.5%" , sparkline : [3400, 3450, 3420, 3500, 3480, 3500]},
    {base : "USD", quote :"NGN" , icon: "image.png" , price : 3500, change : "1.5%" , sparkline : [3400, 3450, 3420, 3500, 3480, 3500]},
    {base : "EUR", quote :"USD" , icon: "image.png" , price : 3500, change : "1.5%" , sparkline : [3400, 3450, 3420, 3500, 3480, 3500]},
    {base : "DOGE", quote :"USD" , icon: "image.png" , price : 3500, change : "1.5%" , sparkline : [3400, 3450, 3420, 3500, 3480, 3500]}
  ];

  return (
    <div >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-blue-500/20 p-1.5 rounded">
            <Star className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-[#e7ecf5] font-semibold">Watchlist</span>
        </div>
        <a href="#" className="flex items-center gap-1 text-blue-400 text-sm">
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