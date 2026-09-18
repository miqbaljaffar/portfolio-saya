import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-white focus-visible:ring-white/20 focus-visible:ring-[3px] aria-invalid:ring-spacex-flame/20 aria-invalid:border-spacex-flame",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black border border-white hover:bg-spacex-silver hover:border-spacex-silver",
        destructive:
          "bg-spacex-flame text-white border border-spacex-flame hover:bg-spacex-flame/90 focus-visible:ring-spacex-flame/20",
        outline:
          "border border-spacex-graphite bg-transparent text-white hover:border-white hover:bg-spacex-steel",
        secondary:
          "bg-spacex-steel text-white border border-spacex-graphite hover:bg-spacex-graphite hover:border-spacex-silver",
        ghost:
          "bg-transparent text-white hover:bg-spacex-steel hover:border-spacex-graphite",
        link: "text-white underline-offset-4 hover:underline border-transparent",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
