import { Button } from './ui/button'
import { getGategories } from '@/lib/categories'

interface Props {
  locale: string
}

export default async function Categories({ locale }: Props) {
  const categories = await getGategories(locale)
  return (
    <ul className="sticky top-24 z-9 flex gap-4 overflow-x-auto bg-background py-5">
      {categories.map((category) => (
        <li key={category.id}>
          <Button variant="ghost" className="text-base font-medium">
            {category.translations[0]?.name}
          </Button>
        </li>
      ))}
    </ul>
  )
}
