import { ArrowLeftRight, Code } from "lucide-react"


const footerLinks = [
  { label: "Converter", href: "#converter" },
  { label: "Charts", href: "#charts" },
  { label: "Watchlist", href: "#watchlist" },
]

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-600">
            <ArrowLeftRight className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm text-muted">
            <span className="font-semibold text-ice">FluxRate</span> · Currency & Crypto Tracker
          </span>
        </div>

        <nav className="flex items-center gap-5 text-sm text-muted">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-ice">
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/jojo-jsx/FLUXRATE"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/5 bg-brand-500/10 px-3 py-2 text-brand-400 transition-colors hover:text-brand-600"
          >
<Code className="h-4 w-4" /> View on GitHub          </a>
        </nav>

        <p className="text-xs text-muted">Demo data for illustration — not financial advice.</p>
      </div>
    </footer>
  )
}