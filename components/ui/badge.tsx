<<<<<<< HEAD
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
=======
import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
<<<<<<< HEAD
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
=======
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
<<<<<<< HEAD
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
=======
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
>>>>>>> 4cec3053f77e644786a4b9660e9c7ef6809fbbfa
}

export { Badge, badgeVariants }
