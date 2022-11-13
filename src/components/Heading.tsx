import { clsx } from "clsx";
import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface HeadingProps {
  asChild?: boolean;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export function Heading({ size = "md", children, asChild }: HeadingProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
