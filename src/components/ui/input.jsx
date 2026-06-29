import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `
        h-11
        w-full
        min-w-0
        rounded-lg
        border
        border-slate-700
        bg-slate-900/40
        px-3
        text-sm
        text-white
        placeholder:text-slate-500
        shadow-sm
        outline-none
        transition-all
        duration-200

        file:inline-flex
        file:h-6
        file:border-0
        file:bg-transparent
        file:text-sm
        file:font-medium

        focus-visible:border-blue-500
        focus-visible:ring-4
        focus-visible:ring-blue-500/20

        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-60

        aria-invalid:border-red-500
        aria-invalid:ring-4
        aria-invalid:ring-red-500/20
        `,
        className
      )}
      {...props}
    />
  );
}

export { Input };