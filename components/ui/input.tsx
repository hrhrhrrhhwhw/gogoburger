import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-14 w-full rounded-2xl bg-input/30 px-3 py-1 text-base outline-none md:text-xl font-bold",
        className
      )}
      {...props}
    />
  )
}

export { Input }
