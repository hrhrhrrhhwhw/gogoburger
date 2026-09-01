'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from './ui/button'
import React from 'react'

export default function HeaderDelivery() {
  const [city, setCity] = React.useState('Ереван')
  const [open, setOpen] = React.useState(false)

  const handleCityChange = (city: string) => {
    setCity(city)
    setOpen(false)
  }

  return (
    <div className="hidden md:flex items-center gap-2">
      <h3 className='text-base font-medium'>Город доставки:</h3>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="text-xl font-bold text-primary hover:cursor-pointer hover:text-accent">
          {city}
        </DialogTrigger>

        <DialogContent className="w-full md:w-1/2">
          <DialogHeader>
            <DialogTitle className="m-6 text-center md:m-10">Выберите город</DialogTitle>

            <DialogDescription className="flex flex-col items-center justify-center gap-4">
              <Button variant="ghost" size="lg" className="text-4xl" onClick={() => handleCityChange('Ереван')}>
                Ереван
              </Button>

              <Button variant="ghost" size="lg" className="text-4xl" onClick={() => handleCityChange('Гюмри')}>
                Гюмри
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
