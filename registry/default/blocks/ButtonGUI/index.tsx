import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none glassmorphism-button [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "glassmorphism text-primary-foreground hover:scale-105 border border-primary/30 bg-gradient-to-r from-primary via-purple-500 to-pink-500 shadow-lg",
        outline:
          "glassmorphism border-2 border-primary/40 text-primary hover:scale-105 hover:border-primary/60 hover:text-primary-foreground hover:bg-gradient-to-r hover:from-primary/20 hover:via-purple-500/20 hover:to-pink-500/20",
        ghost:
          "glassmorphism-button text-foreground hover:scale-105 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:via-purple-500/10 hover:to-pink-500/10",
        glass:
          "glassmorphism-card border border-primary/20 text-foreground hover:scale-105 hover:border-primary/40 backdrop-blur-xl bg-white/10 dark:bg-black/10",
        destructive:
          "glassmorphism text-destructive-foreground hover:scale-105 border border-destructive/30 bg-gradient-to-r from-destructive to-red-600 shadow-lg",
        secondary:
          "glassmorphism text-secondary-foreground hover:scale-105 border border-secondary/30 bg-gradient-to-r from-secondary to-muted shadow-lg",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105 transition-transform",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-lg",
        md: "h-10 px-4 text-sm rounded-xl", // Backward compatibility
        default: "h-10 px-4 text-sm rounded-xl",
        lg: "h-12 px-6 text-base rounded-2xl",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface ButtonGUIProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const ButtonGUI = React.forwardRef<HTMLButtonElement, ButtonGUIProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  },
);
ButtonGUI.displayName = "ButtonGUI";
