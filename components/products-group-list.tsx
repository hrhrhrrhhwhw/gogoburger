import { Prisma } from '@/app/generated/prisma/client'
import ProductModal from './product-modal'

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
  return (
    <div>
      <h2 className="text-xl font-extrabold text-accent-text">{name}</h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-4">
        {products.map((product) => (
          <ProductModal key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
