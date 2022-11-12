import { clsx } from "clsx";
import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextProps {
  asChild?: boolean;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export function Text({ size = "md", children, asChild }: TextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
