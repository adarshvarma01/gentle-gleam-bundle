import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export const ActionCard = ({
  title,
  description,
  icon: Icon,
  onClick,
  className,
}: ActionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-full text-left rounded-3xl p-6 md:p-8",
        "glass-strong gradient-border",
        "transition-all duration-500",
        "hover:translate-y-[-8px] hover:shadow-2xl",
        "group cursor-pointer overflow-hidden",
        className
      )}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-purple/5 to-pink/10" />
        <div className="absolute -inset-1 bg-gradient-to-r from-violet/20 via-transparent to-pink/20 blur-xl" />
      </div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 glow-shadow group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </div>
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-animate" />
    </button>
  );
};
