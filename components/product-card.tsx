import { Prisma } from '@/app/generated/prisma/client'
import Image from 'next/image'

type ProductCardProps = {
  product: Prisma.ProductGetPayload<{
    select: {
      id: true
      price: true
      imageUrl: true
      translations: {
        select: {
          name: true
          slug: true
        }
      }
    }
  }>
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex w-48.25 cursor-pointer flex-col items-center">
      <div className="flex h-48.25 w-48.25 items-center justify-center">
        <Image
          src={product.imageUrl}
          alt={product.translations[0]?.name ?? ''}
          width={256}
          height={256}
          className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex h-24 items-center justify-center">
        <span className="text-center text-lg font-bold">{product.translations[0]?.name}</span>
      </div>

      <span className="w-36 rounded-4xl bg-muted px-4 py-2 text-center text-lg transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
        {product.price} AMD
      </span>
    </div>
  )
}
