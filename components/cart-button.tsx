import { ShoppingBasket } from 'lucide-react'
import { Button } from './ui/button'

export default function CartButton() {
  return (
    <Button size="lg" className='px-5 h-12'>
      <ShoppingBasket />
      1490 AMD
    </Button>
  )
}
