import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border-3 border-black text-sm font-black uppercase tracking-wider whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none dark:border-white dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-secondary text-black hover:bg-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400",
        outline: "bg-white text-black hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800",
        secondary: "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-violet-600 dark:text-white dark:hover:bg-violet-500",
        ghost: "border-transparent bg-transparent shadow-none dark:border-transparent dark:shadow-none hover:bg-zinc-100 hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-0 active:translate-y-0 active:shadow-none dark:hover:bg-zinc-800 dark:hover:border-white dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
        destructive: "bg-rose-400 text-black hover:bg-rose-500",
        link: "border-transparent bg-transparent shadow-none dark:border-transparent dark:shadow-none text-primary underline-offset-4 hover:underline hover:-translate-x-0 hover:-translate-y-0 hover:shadow-none",
      },
      size: {
        default: "h-10 gap-1.5 px-4",
        xs: "h-7 gap-1 rounded-lg px-2.5 text-xs border-2 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1.5px_1.5px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2.5px_2.5px_0px_0px_rgba(255,255,255,1)] [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-lg px-3 text-xs border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]",
        lg: "h-12 gap-1.5 px-6 text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
        icon: "size-10 p-0",
        "icon-xs": "size-7 rounded-lg border-2 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1.5px_1.5px_0px_0px_rgba(255,255,255,1)] p-0 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-lg border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] p-0",
        "icon-lg": "size-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] p-0",
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
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
