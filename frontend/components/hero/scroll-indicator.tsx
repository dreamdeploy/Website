export function ScrollIndicator() {
  return (
    <a
      href="#services"
      className="hidden items-center gap-3 pb-2 text-[11px] font-semibold tracking-[0.25em] text-white/80 uppercase transition-colors hover:text-white lg:flex"
    >
      Scroll
      <span className="flex h-11 w-7 justify-center rounded-full border-2 border-white/70 pt-2" aria-hidden>
        <span className="h-2 w-1 rounded-full bg-white [animation:scroll-dot_1.8s_ease-in-out_infinite]" />
      </span>
    </a>
  )
}
