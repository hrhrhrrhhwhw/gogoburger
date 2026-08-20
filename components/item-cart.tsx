import { Trash } from 'lucide-react'
import { QuantitySelector } from './quantity-selector'

export default function ItemCart() {
  return (
    <div className="bg-background p-4">
      <div className="flex items-center gap-10 border-b-[0.1px] pb-2">
        <img
          src="https://orderapp-app-static.burgerkingrus.ru/x256/catalog/images/group/74e6ddde00fbe9e8e554ba96a21592e5.png"
          alt=""
          className="h-18 w-18"
        />

        <div>
          <h3 className="text-lg font-bold text-foreground">Ангус 4 Сыра</h3>
          <span className="text-sm text-placeholder">320 г</span>
        </div>
      </div>
      <div className='flex justify-between items-center pt-2'>
        <div className='text-xl font-bold text-foreground'>
            5000 AMD
        </div>
        <div className="flex items-center gap-2">
          <QuantitySelector />
          <Trash className="cursor-pointer text-gray-400 hover:text-foreground" />
        </div>
      </div>
    </div>
  )
}
