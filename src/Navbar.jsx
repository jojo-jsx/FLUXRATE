import { ArrowLeftRight, TrendingUp, Star, Bell } from "lucide-react"

export default function Navbar() {


    const navLinks = [
  { label: "Converter", href: "#converter", icon: ArrowLeftRight },
  { label: "Charts", href: "#charts", icon: TrendingUp },
  { label: "Watchlist", href: "#watchlist", icon: Star },
]

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600">
            <ArrowLeftRight className="h-5 w-5 text-white" />
          </div>
          <span className="font-heading text-lg font-semibold text-ice">
            Flux<span className="text-brand-400">Rate</span>
          </span>
        </div>

        <nav className="hidden items-center gap-1 rounded-full border border-white/5 bg-ink-800/60 p-1 md:flex">
{navLinks.map((link) => {
  const Icon = link.icon

  return (
    <a
      key={link.label}
      href={link.href}
      className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-ice"
    >
      <Icon className="h-4 w-4" />
      {link.label}
    </a>
  )
})}        </nav>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-rise/20 bg-rise/10 px-3 py-1 text-xs font-medium text-rise">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rise opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rise" />
            </span>
            Live rates
          </span>
          <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-ink-800 text-muted transition-colors hover:text-ice">
            <Bell className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}