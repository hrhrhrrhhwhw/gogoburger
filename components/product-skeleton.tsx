import { Skeleton } from '@/components/ui/skeleton'

export default function ProductCardSkeleton() {
  return (
    <div className="group flex w-48.25 flex-col items-center">
      {/* Image */}
      <div className="flex h-48.25 w-48.25 items-center justify-center">
        <Skeleton className="h-48.25 w-48.25 rounded-2xl" />
      </div>

      {/* Name */}
      <div className="flex h-24 w-full flex-col items-center justify-center gap-2">
        <Skeleton className="h-5 w-36" />
        <Skeleton className="h-5 w-24" />
      </div>

      {/* Price */}
      <Skeleton className="h-10 w-36 rounded-4xl" />
    </div>
  )
}
