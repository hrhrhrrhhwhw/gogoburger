import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from './ui/button'
import CartButton from './cart-button'
import { ChevronRight } from 'lucide-react'
import ItemCart from './item-cart'

export default function CartMenu() {
  return (
    <Sheet>
      <SheetTrigger
        render={<CartButton />}
      />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>1 товар на 4000 AMD </SheetTitle>
        </SheetHeader>
        <div className='flex flex-col gap-4 overflow-y-auto'>
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
        </div>
        <SheetFooter>
          <Button size='lg' variant='default' type='submit'>К оформлению заказа <ChevronRight /></Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
