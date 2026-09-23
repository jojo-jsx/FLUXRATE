import { Star } from 'lucide-react';
import { useState } from 'react';

export default function WatchlistCard(props) {

  const [isFavourite, setIsFavourite] = useState(false);
  const isPositive = props.change >= 0;

  return (
    <div className="rounded-2xl border border-white/5 hover:border-white/10 bg-ink-800/60 p-4 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <img src={props.icon} alt={props.base} className="w-8 h-8 rounded-full" />
          <div>
            <div className="font-heading text-ice font-semibold text-sm">
              {props.base} <span className="text-muted font-normal">/ {props.quote}</span>
            </div>
            <p className="text-muted text-xs">Live market rate</p>
          </div>
        </div>
        <Star
          onClick={() => setIsFavourite(!isFavourite)}
          fill={isFavourite ? "#f5c518" : "none"}
          className={`w-4 h-4 cursor-pointer transition-colors ${
            isFavourite ? "text-[#f5c518]" : "text-muted hover:text-ice"
          }`}
        />
      </div>

      <div className="flex items-end justify-between">
        <div>
          <div className="font-heading text-ice text-xl font-semibold tabular-nums">{props.price.toLocaleString()}</div>
          <span className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-semibold mt-1 ${ isPositive ? "bg-rise/10 text-rise" : "bg-fall/10 text-fall"}`}>
            {props.change}
          </span>
        </div>
        <div className={`w-20 h-8 rounded ${ isPositive ? "bg-rise/10 text-rise" : "bg-fall/10 text-fall"}`}>
          {/* sparkline chart goes here later */}
        </div>
      </div>
    </div>
  );
}