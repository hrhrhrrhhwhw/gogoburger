'use client'

import { useCategoryStore } from '@/lib/store/category'
import { Button } from './ui/button'
import Link from 'next/link'

interface Category {
  id: number
  name: string
}

interface Props {
  categories: Category[]
}

export default function Categories({ categories }: Props) {
  const activeId = useCategoryStore((state) => state.activeId)

  return (
    <div className="sticky top-0 z-9 flex gap-3 overflow-x-auto bg-background py-4">
      {categories.map((category) => {
        const isActive = activeId === category.id

        return (
          <Button key={category.id} variant={isActive ? 'default' : 'ghost'} size='lg'>
            <Link href={`#${category.name}`}>{category.name}</Link>
          </Button>
        )
      })}
    </div>
  )
}

