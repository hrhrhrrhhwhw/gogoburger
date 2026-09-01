import ProductCardSkeleton from './product-skeleton'

export default function ProductCardSkeletons({ count = 5 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  )
}
