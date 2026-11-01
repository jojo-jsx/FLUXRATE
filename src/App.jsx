import Navbar from "./Navbar"
import Hero from "./Hero"
import StatsBar from "./StatsBar"
import Converter from "./Converter"
import Watchlist from "./Watchlist"
import Footer from "./Footer"
import ChartSection from "./ChartSection"
import { useState, useEffect } from "react"
import { currencyData } from "./currencies"

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("BTC")
  const [toCurrency, setToCurrency] = useState("USD")

  const [fiatRates, setFiatRates] = useState({})

  useEffect(() => {
    fetch("https://api.frankfurter.dev/v2/rates?base=USD").then((response) => response.json()).then((rows) => {
      const lookup = Object.fromEntries(rows.map((row) => [row.quote, row.rate]))
      setFiatRates(lookup)
    })
  }, [])

console.log(fiatRates)

  const currencies = currencyData.map((currency) => {
    const rate = fiatRates[currency.currency]


    if (rate) {
      return { ...currency, usdPrice: 1 / rate }
    }


    return currency
  })


const cryptoIds = currencyData.filter((currency)=> currency.coingeckoId).map((currency) => currency.coingeckoId).join(",")


  return (
    <div className="min-h-screen bg-ink-950 text-ice">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl space-y-6 px-4 pb-10 md:px-6">
        <Hero />
        <StatsBar />
        <section id="converter" className="scroll-mt-20"> <Converter
          currencies={currencies}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
        /></section>
        <section id="charts" className="scroll-mt-20">  <ChartSection currencies={currencies} fromCurrency={fromCurrency} toCurrency={toCurrency} /></section>
        <section id="watchlist" className="scroll-mt-20"><Watchlist /></section>
      </main>
      <Footer />
    </div>
  )
}