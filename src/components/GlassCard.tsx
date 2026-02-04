import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const GlassCard = ({ 
  children, 
  className, 
  hover = false,
  glow = false 
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-3xl p-6 md:p-8",
        "bg-card/60 backdrop-blur-xl",
        "border border-border/50",
        "shadow-xl shadow-violet/5",
        hover && "transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-violet/10 hover:border-primary/30",
        glow && "before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-br before:from-violet/30 before:via-purple/20 before:to-pink/30 before:-z-10 before:blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
