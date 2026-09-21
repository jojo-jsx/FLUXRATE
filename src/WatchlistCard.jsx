import { Star } from 'lucide-react';

export default function WatchlistCard(props) {
  return (
    <div className="bg-[#0c1322] rounded-2xl p-4 border border-[rgba(255,255,255,0.05)]">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <img src={props.icon} alt={props.base} className="w-8 h-8 rounded-full" />
          <div>
            <div className="text-[#e7ecf5] font-semibold text-sm">
              {props.base} <span className="text-[#8b98ad] font-normal">/ {props.quote}</span>
            </div>
            <p className="text-[#8b98ad] text-xs">Live market rate</p>
          </div>
        </div>
<Star className="w-4 h-4 text-[#8b98ad]" />
      </div>

      <div className="flex items-end justify-between">
        <div>
          <div className="text-[#e7ecf5] text-xl font-bold">{props.price}</div>
          <span className="text-green-400 text-sm">{props.change}</span>
        </div>
        <div className="w-20 h-8 rounded bg-green-500/10">
          {/* sparkline chart goes here later */}
        </div>
      </div>
    </div>
  );
}