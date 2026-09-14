import { Locale } from '@/@types/language'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Nav from '@/components/nav'
import ProductCardSkeletons from '@/components/product-skeletons'
import Products from '@/components/products'
import SelectLanguage from '@/components/select-language'
import { Suspense } from 'react'

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params

  return (
    <div>
      <div className="flex items-center justify-between border-b-[0.1px] px-4">
        <Nav />
        <SelectLanguage locale={locale} />
      </div>
      <Header />
      <div className="flex flex-col gap-10">
        <Suspense fallback={<ProductCardSkeletons count={8} />}>
          <Products locale={locale} />
        </Suspense>
      </div>

      <div className="my-20 border-t-[0.1px] px-4 pt-5">
        <Footer />
      </div>
    </div>
  )
}
