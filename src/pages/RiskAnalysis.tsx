import { useState } from "react";
import { SpaceBackground } from "@/components/SpaceBackground";
import { Navbar } from "@/components/Navbar";
import { AlertTriangle, CheckCircle, Circle, ArrowRight, BarChart3, Shield, Info, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const questions = [
  "I often feel sad or down for extended periods",
  "I have trouble sleeping or sleep too much",
  "I frequently feel anxious or worried",
  "I have lost interest in activities I used to enjoy",
  "I find it hard to concentrate on tasks",
  "I often feel overwhelmed by daily responsibilities",
  "I have experienced significant changes in appetite",
  "I feel isolated or disconnected from others",
  "I have trouble managing my emotions",
  "I feel hopeless about the future",
];

const RiskAnalysis = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const calculateRisk = () => {
    const total = answers.reduce((a, b) => a + b, 0);
    const maxScore = questions.length * 4;
    const percentage = (total / maxScore) * 100;

    if (percentage <= 25) return { level: "Low", color: "text-green-400", bg: "bg-green-500/20", border: "border-green-500/30" };
    if (percentage <= 50) return { level: "Moderate", color: "text-yellow-400", bg: "bg-yellow-500/20", border: "border-yellow-500/30" };
    if (percentage <= 75) return { level: "Elevated", color: "text-orange-400", bg: "bg-orange-500/20", border: "border-orange-500/30" };
    return { level: "High", color: "text-red-400", bg: "bg-red-500/20", border: "border-red-500/30" };
  };

  const resetAssessment = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setCompleted(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SpaceBackground />
      <Navbar />
      
      <main className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <section className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6 glow-shadow">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            
            {/* Free Assessment Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 mb-6 glow-animate">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-base font-semibold gradient-text">100% Free Mental Health Risk Assessment</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Mental Health</span> Risk Analysis
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Assess your mental health risk factors through our questionnaire and understand 
              where you might need additional support.
            </p>
          </section>

          {/* Main Content */}
          {!started ? (
            <section className="py-8 max-w-4xl mx-auto">
              {/* Start Free Assessment Button - Prominent */}
              <div className="text-center mb-12">
                <Button
                  size="lg"
                  className="btn-gradient rounded-2xl px-12 h-16 text-lg font-bold group glow-shadow hover:scale-105 transition-transform"
                  onClick={() => setStarted(true)}
                >
                  <Sparkles className="w-6 h-6 mr-3" />
                  Start Free Assessment
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: Shield, title: "Confidential", desc: "Your responses are private and secure. No data is stored or shared." },
                  { icon: BarChart3, title: "Evidence-Based", desc: "Questions are designed based on clinical mental health assessments." },
                  { icon: Info, title: "Informational", desc: "This is not a diagnosis. Consult a professional for proper evaluation." },
                ].map((item, index) => (
                  <div key={index} className="glass-strong rounded-2xl p-6 hover-lift gentle-animation">
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Assessment Info */}
              <div className="glass-strong rounded-3xl p-8 text-center glass-glow">
                <h2 className="text-2xl font-bold mb-4 gradient-text">What to Expect</h2>
                <p className="text-muted-foreground mb-6">
                  This assessment contains {questions.length} questions and takes about 3-5 minutes to complete.
                  Answer honestly for the most accurate results.
                </p>
              </div>
            </section>
          ) : !completed ? (
            <section className="py-8 max-w-2xl mx-auto">
              {/* Assessment Form - Glass Card */}
              <div className="glass-strong rounded-3xl p-8 glass-glow animate-fade-in">
                {/* Close button */}
                <button 
                  onClick={resetAssessment}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground gentle-animation"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-muted-foreground">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm font-medium gradient-text">{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full gradient-primary transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
                  {questions[currentQuestion]}
                </h2>

                {/* Options */}
                <div className="space-y-3">
                  {[
                    { value: 0, label: "Not at all" },
                    { value: 1, label: "Rarely" },
                    { value: 2, label: "Sometimes" },
                    { value: 3, label: "Often" },
                    { value: 4, label: "Very often" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full flex items-center gap-4 p-4 rounded-xl glass border border-border/50 hover:border-primary/50 hover:bg-primary/5 gentle-animation text-left group"
                    >
                      <Circle className="w-5 h-5 text-muted-foreground group-hover:text-primary gentle-animation" />
                      <span className="font-medium group-hover:text-primary gentle-animation">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          ) : (
            <section className="py-8 max-w-2xl mx-auto">
              {/* Results - Glass Card */}
              <div className="glass-strong rounded-3xl p-8 text-center glass-glow animate-fade-in">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-bold mb-4">Assessment Complete</h2>

                <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${calculateRisk().bg} ${calculateRisk().border} border mb-6`}>
                  <span className={`text-lg font-bold ${calculateRisk().color}`}>
                    Risk Level: {calculateRisk().level}
                  </span>
                </div>

                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Based on your responses, your mental health risk level has been assessed. 
                  Remember, this is not a clinical diagnosis. Please consult a mental health 
                  professional for proper evaluation and support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="rounded-xl border-border/50 hover:border-primary/50"
                    onClick={resetAssessment}
                  >
                    Take Again
                  </Button>
                  <Button
                    className="btn-gradient rounded-xl"
                    onClick={() => window.location.href = "/care-gap-analysis"}
                  >
                    Explore Care Gap Analysis
                  </Button>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 glass rounded-2xl p-6">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Important:</strong> This assessment is for informational purposes only and 
                  should not be used as a substitute for professional medical advice, diagnosis, or treatment. 
                  If you're experiencing a mental health crisis, please contact emergency services or a crisis helpline.
                </p>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default RiskAnalysis;
