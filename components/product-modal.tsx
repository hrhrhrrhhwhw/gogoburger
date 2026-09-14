'use client'

import { useMediaQuery } from 'usehooks-ts'

import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import ProductCard from './product-card'
import { Prisma } from '@/app/generated/prisma/client'
import Image from 'next/image'
import AddItemToCart from './add-item-to-cart'
import { XIcon } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

type ProductModalProps = {
  product: Prisma.ProductGetPayload<{
    select: {
      id: true
      price: true
      imageUrl: true
      weightInGrams: true
      calories: true
      proteins: true
      fats: true
      carbs: true
      translations: {
        select: {
          name: true
          slug: true
        }
      }
    }
  }>
}

export default function ProductModal({ product }: ProductModalProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)', {
    initializeWithValue: false,
  })

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger>
          <ProductCard product={product} />
        </DialogTrigger>
        <DialogContent showCloseButton={false} className="">
          <div className="flex gap-4">
            <div className="flex items-center justify-center">
              <Image
                src={product.imageUrl}
                alt={product.translations[0]?.name ?? ''}
                width={512}
                height={512}
                className="flex items-center justify-center"
              />
            </div>
            <DialogHeader className="flex w-122.5 justify-between">
              <div>
                <DialogTitle>{product.translations[0].name}</DialogTitle>
                <DrawerDescription>
                  <span>{product.weightInGrams} гр</span>
                  {' · '}
                  <span>{product.calories} Ккал</span>
                </DrawerDescription>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-left text-2xl font-bold">{product.price} AMD</div>
                <AddItemToCart />
              </div>
            </DialogHeader>
          </div>
          <DialogClose className="absolute top-0 -right-14 z-50 flex items-center justify-center rounded-full bg-[#27272B] p-3 hover:cursor-pointer hover:bg-muted-foreground">
            <XIcon className="size-5" />
          </DialogClose>
        </DialogContent>
      </Dialog>
    )
  }
  return (
    <Sheet>
      <SheetTrigger>
        <ProductCard product={product} />
      </SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-2xl">
        <div className="overflow-y-scroll">
          <div className="flex items-center justify-center">
            <Image
              src={product.imageUrl}
              alt={product.translations[0]?.name ?? ''}
              width={256}
              height={256}
              className="mx-auto"
            />
          </div>
          <SheetHeader>
            <div className="flex flex-col gap-1 mb-4 items-center">
              <SheetTitle>{product.translations[0].name}</SheetTitle>
              <SheetDescription>
                <div className='flex gap-3'>
                  <span>{product.weightInGrams} грамм</span>
                  <span>{product.calories} Ккал</span>
                </div>
              </SheetDescription>
            </div>
            <div className="text-center text-2xl font-bold text-foreground">{product.price} AMD</div>
          </SheetHeader>
        </div>
        <SheetFooter>
          <AddItemToCart />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

{
  /* <Drawer swipeDirection="down" showSwipeHandle>
      <DrawerTrigger>
        <ProductCard product={product} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="overflow-y-scroll">
          <div className="flex items-center justify-center">
            <Image
              src={product.imageUrl}
              alt={product.translations[0]?.name ?? ''}
              width={256}
              height={256}
              className="flex items-center justify-center pt-8"
            />
          </div>
          <DrawerHeader>
            <div>
              <DrawerTitle>{product.translations[0].name}</DrawerTitle>
              <DrawerDescription className="">
                <span>{product.weightInGrams} гр</span>
                {' · '}
                <span>{product.calories} Ккал</span>
              </DrawerDescription>
              <div className="text-center text-2xl font-bold text-foreground">{product.price} AMD</div>
            </div>
          </DrawerHeader>
        </div>
        <DrawerFooter>
          
          <AddItemToCart />
        </DrawerFooter>
      </DrawerContent>
    </Drawer> */
}
