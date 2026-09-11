import React from 'react'

export function useIntersection<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  options: IntersectionObserverInit = {},
) {
  const [entry, setEntry] = React.useState<IntersectionObserverEntry | null>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([e]) => setEntry(e), options)
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options.threshold, options.root, options.rootMargin])

  return entry
}