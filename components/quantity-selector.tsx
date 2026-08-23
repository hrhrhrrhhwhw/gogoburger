import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'

export function QuantitySelector({ quantity = 1 }) {
  return (
    <div className="flex w-30 items-center gap-2 rounded-2xl bg-muted">
      <Button variant="ghost" size="sm">
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-8 text-center font-medium text-foreground">{quantity}</span>
      <Button variant="ghost" size="sm">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}
