import { getDataFromPrisma } from '@/lib/data'
import ProductsGroupList from './products-group-list'

interface Props {
  locale: string
}

export default async function Products({ locale }: Props) {
  const categories = await getDataFromPrisma(locale)

  return (
    <div className="flex-1 px-4">
      <div className="flex flex-col gap-16">
        {categories.map(
          (category) =>
            category.products.length > 0 && (
              <ProductsGroupList
                key={category.id}
                name={category.translations[0].name}
                categoryId={category.id}
                products={category.products}
              />
            )
        )}
      </div>
    </div>
  )
}
