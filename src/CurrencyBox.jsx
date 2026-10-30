import { ChevronDown, Search, Check } from "lucide-react"
import { currencyData } from "./currencies"
import { useState } from "react"


export default function CurrencyBox(props) {

  const [currencySearchText, setCurrencySearchText] = useState("")
  const filtered = currencyData.filter((data) => data.currency !== props.excludedCurrency).filter((data) => { return data.currencyName.toLowerCase().includes(currencySearchText.toLowerCase()) || data.currency.toLowerCase().includes(currencySearchText.toLowerCase()) })

  return (
    <div className="relative flex-1 rounded-2xl border border-white/5 bg-ink-850 p-4">
      <p className="mb-2 text-xs text-muted">{props.label}</p>

      <div
        onClick={props.onToggle}
        className="flex cursor-pointer items-center justify-between rounded-xl border border-white/5 bg-ink-800 p-2.5 transition-colors hover:border-white/10"
      >
        <div className="flex items-center gap-3">
          <img src={props.coinIcon} alt={props.currency} className="h-9 w-9 rounded-lg" />
          <div>
            <div className="font-heading text-sm font-semibold text-ice">{props.currency}</div>
            <div className="text-xs text-muted">{props.currencyName}</div>
          </div>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-muted transition-transform ${props.isOpen ? "rotate-180" : ""}`}
        />
      </div>
     {props.isOpen && (
  <div className="absolute left-4 z-10 mt-2 w-64 overflow-hidden rounded-xl border border-white/10 bg-ink-750">
<div className="relative border-b border-white/5">
  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
  <input
    value={currencySearchText}
    onChange={(e) => setCurrencySearchText(e.target.value)}
    type="text"
    className="w-full bg-transparent py-2.5 pl-9 pr-3 text-sm text-ice outline-none placeholder:text-muted"
    placeholder="Search name or code"
  />
</div>

    <div className="max-h-64 overflow-y-auto p-1.5 [scrollbar-width:thin] [scrollbar-color:#1e2a4a_transparent]">
      {filtered.length === 0 && (
        <div className="px-3 py-4 text-sm text-muted">No currencies found</div>
      )}

      {["fiat", "crypto"].map((groupName) => {
        const groupItems = filtered.filter((data) => data.group === groupName)

        if (groupItems.length === 0) {
          return null
        }

        return (
          <div key={groupName}>
            <p className="px-2.5 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-muted">{groupName}</p>

            {groupItems.map((data) => (
              <div
                key={data.currency}
                onClick={() => {
                  props.onCurrencyChange(data.currency)
                  props.onToggle()
                }}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-2.5 py-2 transition-colors hover:bg-white/5"
              >
                <img src={data.coinIcon} alt={data.currency} className="h-7 w-7 rounded-lg" />
                <div>
                  <div className="text-sm font-semibold text-ice">{data.currency}</div>
                  <div className="text-xs text-muted">{data.currencyName}</div>
                </div>
                { data.currency === props.currency && <Check className="ml-auto h-4 w-4 text-brand-400" /> }
              </div>
            ))}
          </div>
        )
      })}
    </div>
  </div>
)}

      <div className="mt-3 flex items-center justify-between rounded-xl bg-ink-900 px-4 py-3">
        <span className="text-muted">{props.symbol}</span>
        <div className="flex items-baseline gap-2">
          {props.editable ? (
            <input
              value={props.amount}
              placeholder="0"
              onChange={(e) => {
                if (/^\d*\.?\d*$/.test(e.target.value)) {
                  props.onAmountChange(e.target.value)
                }
              }}
              type="text"
              className="w-40 bg-transparent text-right font-heading text-2xl font-semibold tabular-nums text-ice outline-none"
            />
          ) : (
            <div className="font-heading text-2xl font-semibold tabular-nums text-ice">
              {props.amount}
            </div>
          )}
          <span className="text-sm text-muted">{props.currency}</span>
        </div>
      </div>
    </div>
  )
}
