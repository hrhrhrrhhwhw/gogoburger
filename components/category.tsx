const categories = [
  { id: 1, name: 'Новинки' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Бургеры' },
  { id: 4, name: 'Соусы' },
  { id: 5, name: 'Роллы' },
  { id: 6, name: 'Картофель фри и закуски' },
  { id: 7, name: 'Напитки' },
  { id: 8, name: 'Купоны' },
]

export default function Category() {
  return (
    <ul className="my-5 flex">
      {categories.map((category) => (
        <li
          key={category.id}
          className="font-bold rounded-4xl px-4 py-2 cursor-pointer hover:bg-foreground hover:text-background">
          {category.name}
        </li>
      ))}
    </ul>
  )
}
