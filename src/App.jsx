import Navbar from "./Navbar"
import Hero from "./Hero"
import StatsBar from "./StatsBar"
import Converter from "./Converter"
import Watchlist from "./Watchlist"
import Footer from "./Footer"
import ChartSection from "./ChartSection"
import { useState, useEffect } from "react"
import { currencyData } from "./currencies"
import LoadingCard from "./LoadingCard"

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("BTC")
  const [toCurrency, setToCurrency] = useState("USD")

  const [fiatRates, setFiatRates] = useState({})
  const [cryptoPrices, setCryptoPrices] = useState({})

  const [isFiatLoading, setIsFiatLoading] = useState(true)
  const [fiaterror, setFiatError] = useState("")


  const [isCryptoLoading, setIsCryptoLoading] = useState(true)
  const [cryptoerror, setCryptoError] = useState("")

  const isLoading = isFiatLoading || isCryptoLoading
  const error = fiaterror || cryptoerror

  const [lastUpdated, setLastUpdated] = useState(null)

  console.log(isLoading, error)



  useEffect(() => {
    fetch("https://api.frankfurter.dev/v2/rates?base=USD").then((response) => response.json()).then((rows) => {
      const lookup = Object.fromEntries(rows.map((row) => [row.quote, row.rate]))
      setFiatRates(lookup)
      setLastUpdated(new Date())
    }).catch((err) => setFiatError("error fetching fiat rates"))
      .finally(() => setIsFiatLoading(false))
  }, [])


  const currencies = currencyData.map((currency) => {
    const rate = fiatRates[currency.currency]


    if (rate) {
      return { ...currency, usdPrice: 1 / rate }
    }


    const coin = cryptoPrices[currency.coingeckoId]

    if (coin) {
      return { ...currency, usdPrice: coin.usd }
    }

    return currency
  })


  const cryptoIds = currencyData.filter((currency) => currency.coingeckoId).map((currency) => currency.coingeckoId).join(",")



  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds}&vs_currencies=usd`)
      .then((response) => response.json())
      .then((data) => {
        setCryptoPrices(data)
        setLastUpdated(new Date())
      })
      .catch((err) => setCryptoError("error fetching cryptcurrencies"))
      .finally(() => setIsCryptoLoading(false))
  }, [])

  console.log(cryptoPrices)

  return (
    <div className="min-h-screen bg-ink-950 text-ice">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl space-y-6 px-4 pb-10 md:px-6">
        {error && (
          <div className="rounded-xl border border-fall/20 bg-fall/10 px-4 py-3 text-sm text-fall">
            {error} Showing sample prices instead.
          </div>
        )}
        <Hero />
        <StatsBar />
        <section id="converter" className="scroll-mt-20">
          {isLoading ? <LoadingCard />
            :
            <Converter lastUpdated={lastUpdated}
              currencies={currencies}
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              setFromCurrency={setFromCurrency}
              setToCurrency={setToCurrency} />
          }
        </section>
        <section id="charts" className="scroll-mt-20">
          {isLoading ? <LoadingCard />
            :
            <ChartSection currencies={currencies} fromCurrency={fromCurrency} toCurrency={toCurrency} />
          }
        </section>
        <section id="watchlist" className="scroll-mt-20">{isLoading ? <LoadingCard /> : <Watchlist currencies={currencies} />}</section>
      </main>
      <Footer />
    </div>
  )
}