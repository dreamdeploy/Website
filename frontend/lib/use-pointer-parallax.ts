'use client'

import { useEffect, useRef, type RefObject } from 'react'

export type DragState = {
  active: boolean
  startX: number
  startY: number
  x: number
  y: number
}

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))

/**
 * Writes smoothed pointer/drag values as CSS variables on the root element
 * (--px, --py in -1..1 range and --rot in degrees) so layers can parallax
 * without triggering React re-renders.
 */
export function usePointerParallax(rootRef: RefObject<HTMLElement | null>) {
  const drag = useRef<DragState>({ active: false, startX: 0, startY: 0, x: 0, y: 0 })

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0, rot: 0, tilt: 0 }
    let frame = 0

    const onMove = (e: PointerEvent) => {
      if (!finePointer.matches) return
      target.x = (e.clientX / window.innerWidth - 0.5) * 2
      target.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const onLeave = () => {
      target.x = 0
      target.y = 0
    }

    const tick = () => {
      const d = drag.current
      if (!d.active) {
        d.x *= 0.94
        d.y *= 0.94
      }
      const tx = clamp(target.x + d.x / 260, -1.6, 1.6)
      const ty = clamp(target.y + d.y / 320, -1.6, 1.6)
      current.x += (tx - current.x) * 0.07
      current.y += (ty - current.y) * 0.07
      current.rot += (target.x * 12 + d.x * 0.32 - current.rot) * 0.08
      current.tilt += (-target.y * 6 - d.y * 0.08 - current.tilt) * 0.08

      root.style.setProperty('--px', current.x.toFixed(4))
      root.style.setProperty('--py', current.y.toFixed(4))
      root.style.setProperty('--rot', `${current.rot.toFixed(2)}deg`)
      root.style.setProperty('--tilt', `${current.tilt.toFixed(2)}deg`)
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [rootRef])

  return drag
}

export const parallax = (depth: number) => ({
  transform: `translate3d(calc(var(--px, 0) * ${depth}px), calc(var(--py, 0) * ${depth}px), 0)`,
})
