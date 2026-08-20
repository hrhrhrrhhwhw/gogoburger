import Link from 'next/link'

const navItems = [
  {
    id: 1,
    name: 'Прямой эфир',
    slug: '/live',
  },
  {
    id: 2,
    name: 'Работа в ГОГО',
    slug: '/job',
  },
  {
    id: 3,
    name: 'Контакты',
    slug: '/contact',
  },
  {
    id: 4,
    name: 'Акции',
    slug: '/bonusaction',
  },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-4 text-sm">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link className="hover:text-link-hover" href={item.slug}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
