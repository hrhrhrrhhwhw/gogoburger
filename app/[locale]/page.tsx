import { Locale } from '@/@types/language'
import Catalog from '@/components/catalog'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Nav from '@/components/nav'
import SelectLanguage from '@/components/select-language'
import prisma from '@/lib/prisma'

export default async function Page({ params }: { params: Promise<Locale> }) {
  const { locale } = await params

  const [categories, products] = await Promise.all([
    prisma.category.findMany({
      select: {
        id: true,
        translations: {
          where: {
            locale,
          },
          select: {
            name: true,
          },
        },
      },
    }),

    prisma.product.findMany({
      select: {
        categoryId: true,
        price: true,
        imageUrl: true,
        translations: {
          where: {
            locale,
          },
          select: {
            name: true,
            slug: true,
          },
        },
      },
    }),
  ])

  return (
    <div>
      <div className="flex items-center justify-between border-b-[0.1px] py-4">
        <Nav />
        <SelectLanguage locale={locale} />
      </div>

      <Header />
      <Catalog categories={categories} products={products} />
      <div className="my-20 border-t-[0.1px] pt-5">
        <Footer />
      </div>
    </div>
  )
}
