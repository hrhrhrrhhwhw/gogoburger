'use client'

import { Button } from './ui/button'
import { useCategoryStore } from '@/lib/store/category'

interface Props {
  id: number
  name: string
}

export default function CategoryButtons({ id, name }: Props) {
  const activeId = useCategoryStore((state) => state.activeId)

  const isActive = activeId === id

  return (
    <Button variant="ghost" className={isActive ? 'bg-accent text-accent-foreground' : 'text-base font-medium'}>
      {name}
    </Button>
  )
}
