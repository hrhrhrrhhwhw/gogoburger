import { getDataFromPrisma } from '@/lib/get-data-from-prisma'
import ProductsGroupList from './products-group-list'
import Categories from './categories'

interface Props {
  locale: string
}

export default async function Products({ locale }: Props) {
  const categories = await getDataFromPrisma(locale)

  return (
    <>
      <Categories
        categories={categories.map((category) => ({
          id: category.id,
          name: category.translations[0].name,
        }))}
      />
      <div className="flex-1 px-4">
        <div className="flex flex-col gap-16">
          {categories.map((category) => (
            <ProductsGroupList
              key={category.id}
              name={category.translations[0].name}
              categoryId={category.id}
              products={category.products}
            />
          ))}
        </div>
      </div>
    </>
  )
}
