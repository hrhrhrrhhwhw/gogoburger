import { getDataFromPrisma } from '@/lib/get-data-from-prisma'
import ProductsGroupList from './products-group-list'
import CategoryButtons from './category-buttons'

interface Props {
  locale: string
}

export default async function Products({ locale }: Props) {
  const categories = await getDataFromPrisma(locale)

  return (
    <>
      <ul className="sticky top-24 z-9 flex gap-3 overflow-x-auto py-5 bg-background">
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryButtons id={category.id} name={category.translations[0]?.name ?? ''} />
          </li>
        ))}
      </ul>
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
    </>
  )
}
