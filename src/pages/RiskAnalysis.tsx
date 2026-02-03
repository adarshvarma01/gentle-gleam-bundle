import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { AlertTriangle, CheckCircle, Circle, ArrowRight, BarChart3, Shield, Info } from "lucide-react";
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

    if (percentage <= 25) return { level: "Low", color: "text-green-600", bg: "bg-green-100" };
    if (percentage <= 50) return { level: "Moderate", color: "text-yellow-600", bg: "bg-yellow-100" };
    if (percentage <= 75) return { level: "Elevated", color: "text-orange-600", bg: "bg-orange-100" };
    return { level: "High", color: "text-red-600", bg: "bg-red-100" };
  };

  const resetAssessment = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setCompleted(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <section className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          
          {/* Free Assessment Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet/20 via-purple/20 to-pink/20 border border-violet/30 mb-4">
            <span className="text-sm font-semibold gradient-text">✨ 100% Free Mental Health Risk Assessment</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
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
            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Confidential</h3>
                <p className="text-muted-foreground text-sm">
                  Your responses are private and secure. No data is stored or shared.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
                <BarChart3 className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Evidence-Based</h3>
                <p className="text-muted-foreground text-sm">
                  Questions are designed based on clinical mental health assessments.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
                <Info className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Informational</h3>
                <p className="text-muted-foreground text-sm">
                  This is not a diagnosis. Consult a professional for proper evaluation.
                </p>
              </div>
            </div>

            {/* Start Button */}
            <div className="text-center">
              <div className="bg-secondary rounded-3xl p-8 max-w-xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Ready to Begin?</h2>
                <p className="text-muted-foreground mb-6">
                  This assessment contains {questions.length} questions and takes about 3-5 minutes to complete.
                </p>
                <Button
                  size="lg"
                  className="btn-gradient rounded-xl px-8 h-12"
                  onClick={() => setStarted(true)}
                >
                  Start Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </section>
        ) : !completed ? (
          <section className="py-8 max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <div className="bg-card rounded-3xl p-8 card-shadow border border-border animate-fade-in">
              <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
                {questions[currentQuestion]}
              </h2>

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
                    className="w-full flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary hover:bg-secondary gentle-animation text-left group"
                  >
                    <Circle className="w-5 h-5 text-muted-foreground group-hover:text-primary gentle-animation" />
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="py-8 max-w-2xl mx-auto">
            {/* Results */}
            <div className="bg-card rounded-3xl p-8 card-shadow border border-border text-center animate-fade-in">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Assessment Complete</h2>

              <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${calculateRisk().bg} mb-6`}>
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
                  className="rounded-xl"
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
            <div className="mt-8 p-6 bg-secondary rounded-2xl">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Important:</strong> This assessment is for informational purposes only and 
                should not be used as a substitute for professional medical advice, diagnosis, or treatment. 
                If you're experiencing a mental health crisis, please contact emergency services or a crisis helpline.
              </p>
            </div>
          </section>
        )}
      </div>
    </PageLayout>
  );
};

export default RiskAnalysis;
