'use client'

import { Prisma } from '@/app/generated/prisma/client'
import ProductModal from './product-modal'
import { useEffect } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'
import { useCategoryStore } from '@/lib/store/category'

interface ProductGroupListProps {
  name: string
  categoryId: number
  products: Prisma.CategoryGetPayload<{
    select: {
      products: {
        select: {
          id: true
          price: true
          imageUrl: true
          weightInGrams: true
          calories: true
          proteins: true
          fats: true
          carbs: true
          translations: {
            select: {
              name: true
              slug: true
            }
          }
        }
      }
    }
  }>['products']
}

export default function ProductGroupList({ name, categoryId, products }: ProductGroupListProps) {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0,
    rootMargin: '-150px 0px -50% 0px',
    freezeOnceVisible: false,
  })

  useEffect(() => {
    if (isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [isIntersecting, name, categoryId, setActiveCategoryId])

  return (
    <div ref={ref} id={name} className="scroll-mt-18">
      <h2 className="text-xl font-extrabold text-accent-text">{name}</h2>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-4">
        {products.map((product) => (
          <ProductModal key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
