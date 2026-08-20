'use client'

import { useRef } from 'react'
import ProductCard from './product-card'
import { Button } from './ui/button'

export default function Catalog({ categories, products }) {
  const categoryRefs = useRef<Record<number, HTMLDivElement | null>>({})

  const scrollToCategory = (categoryId: number) => {
    categoryRefs.current[categoryId]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div>
      <ul className="sticky top-24 py-5 flex gap-4 overflow-x-auto z-9 bg-background">
        {categories.map((category) => (
          <li key={category.id}>
            <Button
              variant="ghost"
              onClick={() => scrollToCategory(category.id)}
              className="cursor-pointer rounded-4xl px-4 py-2 text-base font-bold hover:bg-foreground hover:text-background">
              {category.translations[0]?.name}
            </Button>
          </li>
        ))}
      </ul>

      {categories.map((category) => {
        const categoryProducts = products.filter((product) => product.categoryId === category.id)

        if (categoryProducts.length === 0) {
          return null
        }

        return (
          <section
            key={category.id}
            ref={(element) => {
              categoryRefs.current[category.id] = element
            }}
            className="mb-12 scroll-mt-24">
            <h2 className="mb-5 text-2xl font-bold">{category.translations[0]?.name}</h2>

            <div className="grid max-w-4xl grid-cols-2 gap-y-8 md:grid-cols-4">
              {categoryProducts.map((product) => (
                <ProductCard key={product.translations[0]?.slug} product={product} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
