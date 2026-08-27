import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import PhoneForm from './phone-form'
import CartMenu from './cart-menu'

export default function Header() {
  return (
    <div className="sticky top-0 z-9 flex h-24 items-center justify-between bg-background px-4">
      <div className="flex gap-4">
        <img src="https://cdn-icons-png.flaticon.com/128/5787/5787016.png" className="h-14 w-14" alt="avatar" />
        <span className="text-xl font-extrabold text-accent-text">
          GOGO<br></br>BURGER
        </span>
      </div>
      <div className="flex gap-4">
        <div>
          <CartMenu />
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
