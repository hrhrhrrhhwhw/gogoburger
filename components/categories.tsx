'use client'

import { Prisma } from '@/app/generated/prisma/client'
import { Button } from './ui/button'

type CategoriesProps = {
  categories: Prisma.CategoryGetPayload<{
    select: {
      id: true
      translations: {
        select: {
          name: true
        }
      }
    }
  }>[]
  activeCategory: number | null
}

export default function Categories({ categories, activeCategory }: CategoriesProps) {
  return (
    <ul className="sticky top-24 z-9 flex gap-4 overflow-x-auto bg-background py-5">
      {categories.map((category) => (
        <li key={category.id}>
          <Button
            variant="ghost"
            className={
              activeCategory === category.id
                ? 'rounded-4xl bg-foreground px-4 py-2 text-base font-bold text-background'
                : 'rounded-4xl px-4 py-2 text-base font-bold'
            }>
            {category.translations[0]?.name}
          </Button>
        </li>
      ))}
    </ul>
  )
}
