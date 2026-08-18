import Category from '@/components/category'
import Header from '@/components/header'
import Nav from '@/components/nav'
import ProductCard from '@/components/product-card'

export default function Page() {
  return (
    <div>
      <Nav />
      <Header />
      <Category />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-y-4 max-w-4xl'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}
