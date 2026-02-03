import { useNavigate } from "react-router-dom";
import { Brain, AlertTriangle, HeartPulse, Activity, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { GradientCard } from "@/components/GradientCard";
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
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet/25 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple/15 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Welcome to MindCare</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">Mental Health</span>
              <br />
              Care Gap Analysis
            </h1>

            {/* Motivational Quote */}
            <div className="bg-card rounded-2xl p-6 card-shadow gradient-border mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                "{randomQuote}"
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Mental Health Care Gap Analysis helps identify the differences between the mental health 
              care people need and the care they actually receive. Understanding these gaps is crucial 
              for improving mental health outcomes and ensuring everyone has access to proper support.
            </p>
          </div>
        </section>

        {/* Action Cards */}
        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Explore Our Resources
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Choose an area to learn more about mental health and discover tools to help you on your journey.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <GradientCard
              title="Basic Disorders"
              description="Learn about common mental health disorders, their symptoms, impact, and management strategies."
              icon={Brain}
              onClick={() => navigate("/disorders")}
            />

            <GradientCard
              title="Risk Analysis"
              description="Understand mental health risk factors and take assessments to evaluate your well-being."
              icon={AlertTriangle}
              onClick={() => navigate("/risk-analysis")}
            />

            <GradientCard
              title="Care Gap Analysis"
              description="Discover the gaps in mental health care access, awareness, affordability, and availability."
              icon={HeartPulse}
              onClick={() => navigate("/care-gap-analysis")}
            />
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12">
          <div className="gradient-primary rounded-3xl p-8 md:p-12 text-white">
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
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 text-center">
          <div className="max-w-2xl mx-auto">
            <Activity className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start Your Assessment Today
            </h2>
            <p className="text-muted-foreground mb-8">
              Take the first step towards understanding your mental health. Our risk analysis tool 
              can help you identify areas that may need attention.
            </p>
            <Button
              size="lg"
              className="btn-gradient rounded-xl px-8 h-12"
              onClick={() => navigate("/risk-analysis")}
            >
              Take Risk Assessment
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Home;
