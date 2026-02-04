import { Link, useLocation } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/disorders", label: "Disorders" },
    { path: "/risk-analysis", label: "Risk Analysis" },
    { path: "/care-gap-analysis", label: "Care Gap" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 gentle-animation hover:opacity-80">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center glow-shadow">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="font-semibold text-lg gradient-text">MindCare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium gentle-animation relative ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-primary rounded-full" />
                )}
              </Link>
            ))}
            <Link to="/login">
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-lg border-border/50 hover:border-primary/50 hover:bg-primary/5 gentle-animation"
              >
                Logout
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg glass border border-border/50 hover:border-primary/30 gentle-animation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium gentle-animation ${
                    isActive(link.path)
                      ? "glass border border-primary/30 text-primary"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/login" onClick={() => setIsOpen(false)} className="mt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full rounded-xl border-border/50"
                >
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
