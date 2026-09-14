    import React from 'react'
    import WatchlistCard from './WatchlistCard'

    export default function Watchlist() {

    const watchlist = [
        {base : "BTC", quote :"USD" , icon: "image.png" , price : 67128.4 , change : "2.314%" , sparkline : [64800, 65200, 64950, 66100, 65800, 67128.4]},
        {base : "ETH", quote :"USD" , icon: "image.png" , price : 3500, change : "1.5%" , sparkline : [3400, 3450, 3420, 3500, 3480, 3500   ]}
    ];

    return (
        <div>
            {watchlist.map((item, idx) => (
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
    )
    }
