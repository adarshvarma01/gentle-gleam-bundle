import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SpaceBackground } from "@/components/SpaceBackground";
import { GlassCard } from "@/components/GlassCard";
import { ArrowRight, Brain, Heart, Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 glow-animate">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">MindCare Mental Health</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Mental Health</span>
            <br />
            Care Gap Analysis
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Understanding and bridging the gaps in mental health care for a healthier tomorrow
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              className="btn-gradient rounded-xl px-8 h-14 text-base font-semibold group"
              onClick={() => navigate("/login")}
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              className="rounded-xl px-8 h-14 text-base border-border/50 hover:border-primary/50 hover:bg-primary/5"
              onClick={() => navigate("/home")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Our Mission
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            We provide resources and tools to help understand mental health challenges and bridge care gaps.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard hover glow>
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 glow-shadow">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Understand</h3>
              <p className="text-muted-foreground">
                Learn about common mental health disorders, their symptoms, and impact on daily life.
              </p>
            </GlassCard>

            <GlassCard hover glow>
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 glow-shadow">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Assess</h3>
              <p className="text-muted-foreground">
                Take free assessments to understand your mental health risk factors and care gaps.
              </p>
            </GlassCard>

            <GlassCard hover glow>
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 glow-shadow">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Heal</h3>
              <p className="text-muted-foreground">
                Discover resources and strategies to bridge care gaps and improve mental wellness.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-12 text-center glass-glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your <span className="gradient-text">Free</span> Assessment
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards understanding your mental health. Our assessments are 
              completely free and confidential.
            </p>
            <Button 
              className="btn-gradient rounded-xl px-10 h-14 text-base font-semibold group"
              onClick={() => navigate("/signup")}
            >
              Create Free Account
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
