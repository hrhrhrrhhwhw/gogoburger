'use client'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

export function QuantitySelector({ quantity = 1, onChange }) {
  const handleDecrement = () => {
    const newQuantity = Math.max(1, quantity - 1)
    onChange?.(newQuantity)
  }

  const handleIncrement = () => {
    onChange?.(quantity + 1)
  }

  return (
    <div className="flex items-center gap-2 rounded-2xl bg-muted w-30">
      <Button variant="ghost" size='sm' onClick={handleDecrement}>
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-8 text-center font-medium text-foreground">{quantity}</span>
      <Button variant="ghost" size="sm" onClick={handleIncrement}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}
