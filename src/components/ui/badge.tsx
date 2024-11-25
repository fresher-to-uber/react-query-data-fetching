import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 data-[state=on]:bg-primary/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-primary/80 data-[state=on]:ring-offset-black",
        normal:
          "border-transparent bg-gray-200 text-primary-foreground shadow hover:bg-gray-200/80 data-[state=on]:bg-gray-200/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-gray-200/80 data-[state=on]:ring-offset-black",
        fire:
          "border-transparent bg-red-700 text-primary shadow hover:bg-red-700/80 data-[state=on]:bg-red-700/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-red-700/80 data-[state=on]:ring-offset-black",
        water:
          "border-transparent bg-blue-700 text-primary shadow hover:bg-blue-700/80 data-[state=on]:bg-blue-700/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-blue-700/80 data-[state=on]:ring-offset-black",
        electric:
          "border-transparent bg-yellow-400 text-primary shadow hover:bg-yellow-400/80 data-[state=on]:bg-yellow-400/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-yellow-400/80 data-[state=on]:ring-offset-black",
        grass:
          "border-transparent bg-green-500 text-primary shadow hover:bg-green-500/80 data-[state=on]:bg-green-500/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-green-500/80 data-[state=on]:ring-offset-black",
        ice:
          "border-transparent bg-sky-500 text-primary shadow hover:bg-sky-500/80 data-[state=on]:bg-sky-500/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-sky-500/80 data-[state=on]:ring-offset-black",
        fighting:
          "border-transparent bg-red-950 text-primary shadow hover:bg-red-950/80 data-[state=on]:bg-red-950/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-red-950/80 data-[state=on]:ring-offset-black",
        poison:
          "border-transparent bg-fuchsia-900 text-primary shadow hover:bg-fuchsia-900/80 data-[state=on]:bg-fuchsia-900/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-fuchsia-900/80 data-[state=on]:ring-offset-black",
        ground:
          "border-transparent bg-amber-700 text-primary shadow hover:bg-amber-700/80 data-[state=on]:bg-amber-700/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-amber-700/80 data-[state=on]:ring-offset-black",
        flying:
          "border-transparent bg-indigo-400 text-primary shadow hover:bg-indigo-400/80 data-[state=on]:bg-indigo-400/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-indigo-400/80 data-[state=on]:ring-offset-black",
        psychic:
          "border-transparent bg-pink-600 text-primary shadow hover:bg-pink-600/80 data-[state=on]:bg-pink-600/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-pink-600/80 data-[state=on]:ring-offset-black",
        bug:
          "border-transparent bg-lime-600 text-primary shadow hover:bg-lime-600/80 data-[state=on]:bg-lime-600/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-lime-600/80 data-[state=on]:ring-offset-black",
        rock:
          "border-transparent bg-yellow-800 text-primary shadow hover:bg-yellow-800/80 data-[state=on]:bg-yellow-800/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-yellow-800/80 data-[state=on]:ring-offset-black",
        ghost:
          "border-transparent bg-indigo-950 text-primary shadow hover:bg-indigo-950/80 data-[state=on]:bg-indigo-950/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-indigo-950/80 data-[state=on]:ring-offset-black",
        dragon:
          "border-transparent bg-violet-800 text-primary shadow hover:bg-violet-800/80 data-[state=on]:bg-violet-800/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-violet-800/80 data-[state=on]:ring-offset-black",
        dark:
          "border-transparent bg-amber-950 text-primary shadow hover:bg-amber-950/80 data-[state=on]:bg-amber-950/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-amber-950/80 data-[state=on]:ring-offset-black",
        steel:
          "border-transparent bg-zinc-500 text-primary shadow hover:bg-zinc-500/80 data-[state=on]:bg-zinc-500/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-zinc-500/80 data-[state=on]:ring-offset-black",
        fairy:
          "border-transparent bg-pink-400 text-primary shadow hover:bg-pink-400/80 data-[state=on]:bg-pink-400/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-pink-400/80 data-[state=on]:ring-offset-black",
        stellar:
          "border-transparent bg-teal-700 text-primary shadow hover:bg-teal-700/80 data-[state=on]:bg-teal-700/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-teal-700/80 data-[state=on]:ring-offset-black",
        shadow:
          "border-transparent bg-violet-950 text-primary shadow hover:bg-gray-950/80 data-[state=on]:bg-gray-950/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-gray-950/80 data-[state=on]:ring-offset-black",
        unknown:
          "border-transparent bg-emerald-900 text-primary shadow hover:bg-emerald-900/80 data-[state=on]:bg-emerald-900/80 data-[state=on]:ring-2 data-[state=on]:ring-offset-2 data-[state=on]:ring-emerald-900/80 data-[state=on]:ring-offset-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
