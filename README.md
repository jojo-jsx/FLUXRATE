# FluxRate

A currency and crypto converter with live rates, price history and a watchlist. I built it to learn how to connect a React frontend to real APIs.

**Live demo:** https://fluxrate.vercel.app

![FluxRate screenshot](./screenshot.png)

## Features

- **Currency converter**: type an amount and get the converted result. A searchable dropdown groups currencies into Fiat and Crypto, hides the currency already chosen in the other box, and a swap button flips From and To.
- **Live rates**: fiat rates come from the Frankfurter API and crypto prices from CoinGecko. A rate strip under the converter shows both directions (`1 BTC = ... USD`) with the time of the last update.
- **Price history chart**: a 7-day / 30-day chart for the selected pair, with Current, Open, High and Low. It follows the converter, so swapping the pair redraws the chart.
- **Watchlist**: pair cards with live prices and a favourite toggle.
- **Loading and error states**: the app shows a loading placeholder while data is on its way, and an error banner if a request fails.
- **Responsive**: works from small phones up to desktop.

## Tech stack

- React + Vite
- Tailwind CSS v4 (custom design tokens)
- Recharts (charts)
- Lucide React (icons)
- [Frankfurter API](https://frankfurter.dev) (fiat exchange rates)
- [CoinGecko API](https://www.coingecko.com/en/api) (crypto prices and history)
- Deployed on Vercel

## How the data works

- Each currency has a price in USD. Any pair is worked out as `base USD price ÷ quote USD price`, so every pair uses one formula.
- Frankfurter sends "units per dollar", so fiat rates are flipped (`1 ÷ rate`). CoinGecko already sends "dollars per coin".
- The chart's history comes from each currency's USD series, divided day by day to get the pair's series.
- If the history request fails, the chart falls back to sample data and says so.

## Known limitations

- Fiat rates are **daily** rates, not second-by-second.
- The watchlist sparklines and change percentages, and the market stats cards at the top (market cap, volume, dominance, fear & greed), use **sample data**.
- Both APIs are free tiers with rate limits, so rapid repeated requests may be refused.

## What I learned

- **Lifting state up**: the selected currencies live in `App` so the converter, chart and watchlist always agree.
- **Controlled inputs and derived values**: the converted result is calculated from state, not stored.
- **Fetching data**: promises, `fetch`, and reshaping API responses into the form my app needs (`Object.fromEntries`).
- **`useEffect` and its dependency list**: run once on load for rates, and re-run when the pair or range changes for the chart. This includes cleaning up so a slow old response can't overwrite a newer one.
- **Handling the three states of every request**: loading, success and failure, including `.catch` and `.finally`.
- **Responsive design** with Tailwind's breakpoints.

## Run it locally

```bash
git clone https://github.com/jojo-jsx/FLUXRATE.git
cd FLUXRATE
npm install
npm run dev
```

## Credits

Exchange rates by [Frankfurter](https://frankfurter.dev). Crypto data by [CoinGecko](https://www.coingecko.com).

Built by [Jojo](https://github.com/jojo-jsx).