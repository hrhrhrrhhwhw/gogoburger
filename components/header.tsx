import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from './ui/button'
import { ShoppingBasket } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import PhoneForm from './phone-form'

export default function Header() {

  return (
    <div className="sticky flex items-center justify-between py-4">
      <div>
        <div className="flex gap-4">
          <img src="https://cdn-icons-png.flaticon.com/128/5787/5787016.png" className="h-14 w-14" alt="avatar" />
          <span className="text-accent-text text-xl font-extrabold">
            GOGO<br></br>BURGER
          </span>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <Button size="lg">
            <ShoppingBasket />
            1490 AMD
          </Button>
        </div>
        <Dialog>
          <DialogTrigger className="hover:cursor-pointer">
            <Avatar size="lg">
              <AvatarImage src="https://cdn-icons-png.flaticon.com/128/1810/1810917.png" />
            </Avatar>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Укажите телефон</DialogTitle>
              <DialogDescription>Чтобы войти в профиль</DialogDescription>
            </DialogHeader>
            <PhoneForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
