import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex items-center justify-center gap-1 rounded-lg border-2 border-black px-2 py-0.5 text-xs font-black uppercase tracking-wider text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] select-none dark:border-white dark:text-white dark:shadow-[1.5px_1.5px_0px_0px_rgba(255,255,255,1)] [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-secondary text-black hover:bg-yellow-400 dark:bg-yellow-300 dark:text-black",
        secondary: "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-violet-600 dark:text-white",
        destructive: "bg-rose-400 text-black hover:bg-rose-500",
        outline: "bg-white text-black hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800",
        ghost: "bg-transparent border-transparent shadow-none px-0 py-0 dark:border-transparent dark:shadow-none",
        link: "bg-transparent border-transparent shadow-none text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants }
