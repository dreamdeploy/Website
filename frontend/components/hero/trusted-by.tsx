import { Asterisk, Flame, Hexagon, Plus, Sparkles } from 'lucide-react'

const CLIENTS = [
  { name: 'The GetOvr', icon: Hexagon },
  { name: 'Web Envolve', icon: Sparkles },
  { name: 'Raina Digital', icon: Asterisk },
  { name: 'Rev & Roar', icon: Flame },
]

export function TrustedBy() {
  return (
    <div className="flex flex-col items-start gap-3 lg:items-center lg:pb-2">
      <p className="text-[11px] font-semibold tracking-[0.25em] text-white/80 uppercase">Trusted by growing businesses</p>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {CLIENTS.map(({ name, icon: Icon }) => (
          <li key={name} className="flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors hover:text-white">
            <Icon className="size-5 text-violet-200" aria-hidden />
            {name}
          </li>
        ))}
        <li>
          <a
            href="#work"
            aria-label="See all clients"
            className="grid size-9 place-items-center rounded-full text-white ring-1 ring-white/40 transition-colors hover:bg-white/15"
          >
            <Plus className="size-4" aria-hidden />
          </a>
        </li>
      </ul>
    </div>
  )
}
