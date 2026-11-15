import { useState } from "react"
import CurrencyBox from "./CurrencyBox.jsx"
import { ArrowLeftRight, Zap, Clock } from "lucide-react"

const numberFormat = { maximumFractionDigits: 8 }

export default function Converter({ lastUpdated, currencies, fromCurrency, toCurrency, setFromCurrency, setToCurrency }) {
  const [openBox, setOpenBox] = useState(null)
  const [fromInput, setFromInput] = useState("0")
  const [isSwapped, setIsSwapped] = useState(false)

  const fromData = currencies.find((data) => data.currency === fromCurrency)
  const toData = currencies.find((data) => data.currency === toCurrency)

  function handleSwap() {
    const oldFromValue = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(oldFromValue)
    setIsSwapped(!isSwapped)
  }

  const result = (Number(fromInput) * fromData.usdPrice) / toData.usdPrice
  const rate = fromData.usdPrice / toData.usdPrice
  const inverseRate = toData.usdPrice / fromData.usdPrice

  return (
    <div className="rounded-2xl border border-white/5 bg-ink-850/60 p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-brand-500/15 p-1.5">
            <ArrowLeftRight className="h-4 w-4 text-brand-400" />
          </div>
          <span className="font-heading text-base font-semibold text-ice sm:text-lg">Currency Converter</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-rise/20 bg-rise/10 px-3 py-1 text-xs font-medium text-rise">
          <Zap className="h-3 w-3" /> Live rate
        </span>
      </div>

      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
        <CurrencyBox
          label="From"
          editable={true}
          amount={fromInput}
          onAmountChange={setFromInput}
          isOpen={openBox === "from"}
          onToggle={() => (openBox === "from" ? setOpenBox(null) : setOpenBox("from"))}
          excludedCurrency={toCurrency}
          currency={fromData.currency}
          currencyName={fromData.currencyName}
          coinIcon={fromData.coinIcon}
          symbol={fromData.symbol}
          onCurrencyChange={setFromCurrency}
        />

        <button
          onClick={handleSwap}
          aria-label="Swap currencies"
          className="flex h-11 w-11 shrink-0 rotate-90 items-center justify-center self-center rounded-full border border-white/10 bg-ink-700 text-brand-400 transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-white md:rotate-0"
        >
          <ArrowLeftRight
            strokeWidth={2.5}
            className={`h-5 w-5 transition-transform duration-300 ${isSwapped ? "rotate-180" : ""}`}
          />
        </button>

        <CurrencyBox
          label="To"
          editable={false}
          amount={result.toLocaleString(undefined, numberFormat)}
          isOpen={openBox === "to"}
          onToggle={() => (openBox === "to" ? setOpenBox(null) : setOpenBox("to"))}
          excludedCurrency={fromCurrency}
          currency={toData.currency}
          currencyName={toData.currencyName}
          coinIcon={toData.coinIcon}
          symbol={toData.symbol}
          onCurrencyChange={setToCurrency}
        />
      </div>

      <div className="mt-4 flex flex-col gap-2 rounded-xl border border-white/5 bg-ink-900 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 break-words">
          <span className="font-semibold text-ice">
            1 {fromData.currency} = {rate.toLocaleString(undefined, numberFormat)} {toData.currency}
          </span>
          <span className="block text-muted sm:ml-2 sm:inline">
            <span className="hidden sm:inline">· </span>
            1 {toData.currency} = {inverseRate.toLocaleString(undefined, numberFormat)} {fromData.currency}
          </span>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-muted">
          <Clock className="h-3 w-3" />
          {lastUpdated
            ? `Updated ${lastUpdated.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`
            : "Rates unavailable"}
        </span>
      </div>
    </div>
  )
}