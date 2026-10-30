import { Activity } from "lucide-react"

export default function Hero() {
  return (
    <section className="pb-6 pt-8">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-400">
        <Activity className="h-3 w-3" /> Currency & Crypto Tracker
      </span>
      <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ice md:text-4xl">
        Live currency & crypto rates.
      </h1>
    </section>
  )
}