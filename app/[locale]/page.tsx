import { Locale } from '@/@types/language'
import Categories from '@/components/categories'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Nav from '@/components/nav'
import ProductsGroupList from '@/components/products-group-list'
import SelectLanguage from '@/components/select-language'
import { getDataFromPrisma } from '@/lib/data'

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const categories = await getDataFromPrisma(locale)

  return (
    <div>
      <div className="flex items-center justify-between border-b-[0.1px] p-4">
        <Nav />
        <SelectLanguage locale={locale} />
      </div>

      <Header />
      <Categories categories={categories.filter((category) => category.products.length > 0)} activeCategory={1} />
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
      <div className="my-20 border-t-[0.1px] px-4 pt-5">
        <Footer />
      </div>
    </div>
  )
}
