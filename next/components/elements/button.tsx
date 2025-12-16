import { cn } from "@/lib/utils";
import React from "react";
import { LinkProps } from "next/link"; 

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "simple" | "outline" | "primary" | "muted";
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  href?: LinkProps["href"];
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  as: Tag = "button",
  className,
  children,
  ...props
}) => {
  const variantClass =
    variant === "simple"
      ? /* Simple: Transparent -> Hover adds subtle Red Tint */
        "bg-transparent text-white hover:text-secondary border border-transparent hover:bg-white/5 transition duration-200"
      : variant === "outline"
      ? /* Outline: Glass Style (White Border) -> Hover fills White */
        "bg-transparent border border-white/20 text-white hover:bg-white hover:text-charcoal hover:border-white transition duration-200"
      : variant === "primary"
      ? /* Primary: Coral Red Background + White Text */
        "bg-secondary border border-secondary text-white shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] hover:bg-secondary/90 hover:-translate-y-1 active:-translate-y-0"
      : variant === "muted"
      ? /* Muted: Slate Navy Background */
        "bg-neutral-800 border border-transparent text-neutral-300 hover:bg-neutral-700 hover:text-white transition duration-200"
      : "";

  return (
    <Tag
      className={cn(
        "relative z-10 text-sm md:text-sm font-primary font-bold rounded-md px-4 py-2 flex items-center justify-center transition-all duration-200",
        variantClass,
        className
      )}
      {...props}
    >
      {children ?? `Get Started`}
    </Tag>
  );
};