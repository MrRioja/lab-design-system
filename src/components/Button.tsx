import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: ReactNode;
  className?: string;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      className={clsx(
        "py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-color hover:bg-cyan-300 focus:ring-2 ring-white",
        className
      )}
    >
      {children}
    </Comp>
  );
}
