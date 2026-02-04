import { SpaceBackground } from "@/components/SpaceBackground";
import { Navbar } from "@/components/Navbar";
import { Brain, CloudRain, Zap, AlertCircle, TrendingUp, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const disorders = [
  {
    name: "Depression",
    icon: CloudRain,
    description: "A persistent feeling of sadness and loss of interest that affects daily life and functioning.",
    impact: "Affects sleep, appetite, energy levels, concentration, and self-esteem. Can lead to social withdrawal and difficulty maintaining relationships or work performance.",
    tips: [
      "Seek professional help from a therapist or counselor",
      "Maintain a regular sleep schedule",
      "Exercise regularly, even light walks help",
      "Stay connected with supportive friends and family",
      "Practice mindfulness and relaxation techniques",
    ],
  },
  {
    name: "Anxiety",
    icon: Zap,
    description: "Characterized by persistent worry, nervousness, and physical symptoms like rapid heartbeat.",
    impact: "Can cause difficulty concentrating, irritability, muscle tension, and sleep problems. May lead to avoidance behaviors that limit daily activities.",
    tips: [
      "Practice deep breathing exercises",
      "Limit caffeine and alcohol intake",
      "Challenge negative thought patterns",
      "Establish a calming daily routine",
      "Consider cognitive behavioral therapy (CBT)",
    ],
  },
  {
    name: "Stress",
    icon: AlertCircle,
    description: "The body's response to pressures from situations or life events that feel overwhelming.",
    impact: "Chronic stress can lead to headaches, high blood pressure, weakened immune system, and mental health issues like anxiety and depression.",
    tips: [
      "Identify and manage stress triggers",
      "Set realistic goals and priorities",
      "Take regular breaks throughout the day",
      "Engage in physical activity",
      "Practice time management skills",
    ],
  },
  {
    name: "PTSD",
    icon: Brain,
    description: "A disorder that develops after experiencing or witnessing a traumatic event.",
    impact: "Can cause flashbacks, nightmares, severe anxiety, and uncontrollable thoughts about the event. May affect relationships and daily functioning.",
    tips: [
      "Seek trauma-focused therapy (EMDR or CPT)",
      "Build a support network of trusted people",
      "Practice grounding techniques",
      "Avoid self-isolation",
      "Be patient with your healing process",
    ],
  },
  {
    name: "Bipolar Disorder",
    icon: TrendingUp,
    description: "A condition causing extreme mood swings including emotional highs (mania) and lows (depression).",
    impact: "Affects energy levels, activity, judgment, and behavior. Can impact relationships, job performance, and overall quality of life.",
    tips: [
      "Take medications as prescribed consistently",
      "Keep a mood diary to track patterns",
      "Maintain a stable daily routine",
      "Get adequate, regular sleep",
      "Work with a psychiatrist for proper management",
    ],
  },
];

const Disorders = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <SpaceBackground />
      <Navbar />
      
      <main className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <section className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6 glow-shadow">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Understanding Mental Health</span> Disorders
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Learn about common mental health conditions, their impact on daily life, 
              and evidence-based strategies for management and recovery.
            </p>
          </section>

          {/* Disorders Grid */}
          <section className="py-8">
            <div className="grid gap-8">
              {disorders.map((disorder, index) => {
                const Icon = disorder.icon;
                return (
                  <div
                    key={disorder.name}
                    className="glass-strong rounded-3xl p-6 md:p-8 hover-lift gentle-animation animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Header */}
                      <div className="lg:w-1/3">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-primary mb-4 glow-shadow">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3 gradient-text">{disorder.name}</h2>
                        <p className="text-muted-foreground leading-relaxed">
                          {disorder.description}
                        </p>
                      </div>

                      {/* Impact */}
                      <div className="lg:w-1/3">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Heart className="w-5 h-5 text-primary" />
                          Impact on Daily Life
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {disorder.impact}
                        </p>
                      </div>

                      {/* Tips */}
                      <div className="lg:w-1/3">
                        <h3 className="font-semibold text-lg mb-3">Recovery & Management Tips</h3>
                        <ul className="space-y-2">
                          {disorder.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span className="text-sm">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Help Banner */}
          <section className="py-12">
            <div className="glass-strong rounded-3xl p-8 text-center glass-glow">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4 gradient-text">Need Immediate Help?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you or someone you know is in crisis, please reach out to a mental health professional 
                or contact a crisis helpline in your area.
              </p>
              <Button className="btn-gradient rounded-xl px-8 h-12">
                <Phone className="w-5 h-5 mr-2" />
                Crisis Helpline: 988 (US)
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Disorders;
