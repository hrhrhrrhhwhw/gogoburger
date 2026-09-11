import { Skeleton } from './ui/skeleton'

export default function CategoriesSkeleton() {
  return (
    <div className="flex gap-4 px-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  )
}
