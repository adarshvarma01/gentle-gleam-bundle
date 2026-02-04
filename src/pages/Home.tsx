import { useNavigate } from "react-router-dom";
import { Brain, AlertTriangle, HeartPulse, Sparkles, ArrowRight } from "lucide-react";
import { SpaceBackground } from "@/components/SpaceBackground";
import { ActionCard } from "@/components/ActionCard";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const motivationalQuotes = [
  "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
  "It's okay to not be okay. What matters is that you're taking steps forward.",
  "Healing is not linear. Be patient with yourself.",
  "You are stronger than your struggles and braver than your fears.",
];

const Home = () => {
  const navigate = useNavigate();
  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SpaceBackground />
      <Navbar />
      
      <main className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="relative py-12 md:py-20">
            <div className="relative text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6 animate-fade-in glow-animate">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground/80">Welcome to MindCare</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
                <span className="gradient-text">Mental Health</span>
                <br />
                Care Gap Analysis
              </h1>

              {/* Motivational Quote */}
              <div 
                className="glass-strong rounded-3xl p-6 md:p-8 glass-glow mb-8 animate-fade-in" 
                style={{ animationDelay: "0.1s" }}
              >
                <p className="text-lg md:text-xl text-foreground/80 italic leading-relaxed">
                  "{randomQuote}"
                </p>
              </div>

              <p 
                className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-in max-w-2xl mx-auto" 
                style={{ animationDelay: "0.2s" }}
              >
                Mental Health Care Gap Analysis helps identify the differences between the mental health 
                care people need and the care they actually receive. Understanding these gaps is crucial 
                for improving mental health outcomes.
              </p>
            </div>
          </section>

          {/* Action Cards */}
          <section className="py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 gradient-text">
              Explore Our Resources
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Choose an area to learn more about mental health and discover tools to help you on your journey.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <ActionCard
                title="Basic Disorders"
                description="Learn about common mental health disorders, their symptoms, impact, and management strategies."
                icon={Brain}
                onClick={() => navigate("/disorders")}
              />

              <ActionCard
                title="Risk Analysis"
                description="Understand mental health risk factors and take our free assessment to evaluate your well-being."
                icon={AlertTriangle}
                onClick={() => navigate("/risk-analysis")}
              />

              <ActionCard
                title="Care Gap Analysis"
                description="Discover the gaps in mental health care access, awareness, affordability, and availability."
                icon={HeartPulse}
                onClick={() => navigate("/care-gap-analysis")}
              />
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12">
            <div className="gradient-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Mental Health Matters</h2>
                  <p className="text-white/80 max-w-2xl mx-auto">
                    Mental health conditions affect millions worldwide. Understanding these statistics helps us 
                    recognize the importance of addressing care gaps.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { number: "1 in 4", label: "People affected globally" },
                    { number: "75%", label: "Don't receive treatment" },
                    { number: "50%", label: "Conditions start by age 14" },
                    { number: "800K", label: "Lives lost to suicide yearly" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center glass rounded-2xl p-4 bg-white/10">
                      <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 text-center">
            <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-2xl mx-auto glass-glow">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 glow-shadow">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Start Your <span className="gradient-text">Free</span> Assessment Today
              </h2>
              <p className="text-muted-foreground mb-8">
                Take the first step towards understanding your mental health. Our risk analysis tool 
                can help you identify areas that may need attention.
              </p>
              <Button
                size="lg"
                className="btn-gradient rounded-xl px-8 h-14 text-base font-semibold group"
                onClick={() => navigate("/risk-analysis")}
              >
                Take Risk Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
