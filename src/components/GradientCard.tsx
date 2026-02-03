import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface GradientCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "outlined";
}

export const GradientCard = ({
  title,
  description,
  icon: Icon,
  className,
  onClick,
  variant = "default",
}: GradientCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative rounded-2xl p-6 gentle-animation card-shadow cursor-pointer overflow-hidden group",
        variant === "default" 
          ? "bg-card border border-border hover-lift" 
          : "border-2 border-primary/20 hover:border-primary/40",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 gentle-animation" />
      
      <div className="relative z-10">
        {Icon && (
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
