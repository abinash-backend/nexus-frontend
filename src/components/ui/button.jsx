
import * as React from "react";
import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-200 ease-out outline-none select-none focus-visible:border-blue-500 focus-visible:ring-4 focus-visible:ring-blue-500/20 active:translate-y-px active:scale-[0.98] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-md hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg",

        outline:
          "border-slate-700 bg-transparent text-foreground hover:border-slate-600 hover:bg-slate-800",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",

        ghost:
          "hover:bg-slate-800 hover:text-white",

        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90",

        link:
          "text-blue-400 underline-offset-4 transition-colors hover:text-blue-300 hover:underline",
      },

      size: {
        default:
          "h-10 gap-2 px-4",

        xs:
          "h-7 gap-1 rounded-md px-2 text-xs [&_svg]:size-3",

        sm:
          "h-9 gap-1.5 rounded-md px-3 text-sm [&_svg]:size-3.5",

        lg:
          "h-11 gap-2 px-6 text-base",

        icon:
          "size-10",

        "icon-xs":
          "size-7 rounded-md [&_svg]:size-3",

        "icon-sm":
          "size-8 rounded-md",

        "icon-lg":
          "size-11",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

