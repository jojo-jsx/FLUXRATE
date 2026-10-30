import Navbar from "./Navbar"
import Hero from "./Hero"
import StatsBar from "./StatsBar"
import Converter from "./Converter"
import Watchlist from "./Watchlist"
import Footer from "./Footer"
import ChartSection from "./ChartSection"
import { useState } from "react"

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("BTC")
  const [toCurrency, setToCurrency] = useState("USD")

  return (
    <div className="min-h-screen bg-ink-950 text-ice">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl space-y-6 px-4 pb-10 md:px-6">
        <Hero />
        <StatsBar />
        <section id="converter" className="scroll-mt-20"> <Converter
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
        /></section>
        <section id="charts" className="scroll-mt-20">  <ChartSection fromCurrency={fromCurrency} toCurrency={toCurrency} /></section>
        <section id="watchlist" className="scroll-mt-20"><Watchlist /></section>
      </main>
      <Footer />
    </div>
  )
}