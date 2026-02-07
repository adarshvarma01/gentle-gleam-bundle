import { useState } from "react";
import { SpaceBackground } from "@/components/SpaceBackground";
import { Navbar } from "@/components/Navbar";
import { 
  Brain, 
  Heart, 
  Moon, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  X,
  AlertCircle,
  Shield,
  Lightbulb,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Categorized questions for better insights
const assessmentCategories = [
  {
    id: "mood",
    name: "Emotional Well-being",
    icon: Heart,
    color: "text-pink-400",
    bgColor: "bg-pink-500/20",
    borderColor: "border-pink-500/30",
    questions: [
      "I often feel sad or down for extended periods",
      "I feel hopeless about the future",
      "I have trouble managing my emotions",
    ]
  },
  {
    id: "sleep",
    name: "Sleep & Energy",
    icon: Moon,
    color: "text-violet-400",
    bgColor: "bg-violet-500/20",
    borderColor: "border-violet-500/30",
    questions: [
      "I have trouble sleeping or sleep too much",
      "I feel constantly tired or lack energy",
    ]
  },
  {
    id: "cognitive",
    name: "Mental Clarity",
    icon: Brain,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500/30",
    questions: [
      "I find it hard to concentrate on tasks",
      "I frequently feel anxious or worried",
      "I feel overwhelmed by daily responsibilities",
    ]
  },
  {
    id: "social",
    name: "Social Connection",
    icon: Users,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
    questions: [
      "I feel isolated or disconnected from others",
      "I have lost interest in activities I used to enjoy",
    ]
  }
];

// Flatten all questions with category reference
const allQuestions = assessmentCategories.flatMap((cat, catIndex) => 
  cat.questions.map((q, qIndex) => ({
    question: q,
    categoryId: cat.id,
    categoryIndex: catIndex,
    icon: cat.icon
  }))
);

const getRiskInsight = (level: string) => {
  const insights = {
    Low: {
      title: "You're Doing Well",
      message: "Your responses indicate healthy mental well-being. Continue practicing self-care and maintaining your positive habits.",
      recommendations: [
        "Maintain your current self-care routines",
        "Keep nurturing your social connections",
        "Practice mindfulness to stay balanced",
        "Regular exercise and healthy sleep habits"
      ]
    },
    Moderate: {
      title: "Some Areas Need Attention",
      message: "You may be experiencing mild stress or emotional challenges. Consider incorporating more self-care practices into your routine.",
      recommendations: [
        "Try stress-reduction techniques like meditation",
        "Reach out to friends or family for support",
        "Establish a consistent sleep schedule",
        "Consider journaling your thoughts and feelings"
      ]
    },
    Elevated: {
      title: "Support Could Help",
      message: "Your responses suggest you may be facing significant challenges. Speaking with a mental health professional could be beneficial.",
      recommendations: [
        "Consider speaking with a counselor or therapist",
        "Practice daily relaxation techniques",
        "Limit stressors where possible",
        "Prioritize sleep and nutrition",
        "Reach out to trusted friends or support groups"
      ]
    },
    High: {
      title: "Professional Support Recommended",
      message: "Based on your responses, we strongly encourage you to seek professional support. You don't have to face this alone.",
      recommendations: [
        "Consult a mental health professional soon",
        "Talk to someone you trust about how you're feeling",
        "Contact a mental health helpline if needed",
        "Focus on basic self-care: rest, nutrition, hydration",
        "Remember: seeking help is a sign of strength"
      ]
    }
  };
  return insights[level as keyof typeof insights] || insights.Low;
};

const RiskAnalysis = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < allQuestions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setCompleted(true), 300);
    }
  };

  const calculateCategoryScore = (categoryId: string) => {
    const categoryQuestions = allQuestions
      .map((q, index) => ({ ...q, index }))
      .filter(q => q.categoryId === categoryId);
    
    const total = categoryQuestions.reduce((sum, q) => sum + (answers[q.index] || 0), 0);
    const maxScore = categoryQuestions.length * 4;
    return Math.round((total / maxScore) * 100);
  };

  const calculateOverallRisk = () => {
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    const maxScore = allQuestions.length * 4;
    const percentage = (total / maxScore) * 100;

    if (percentage <= 25) return { level: "Low", color: "text-green-400", bg: "bg-green-500/20", border: "border-green-500/30" };
    if (percentage <= 50) return { level: "Moderate", color: "text-yellow-400", bg: "bg-yellow-500/20", border: "border-yellow-500/30" };
    if (percentage <= 75) return { level: "Elevated", color: "text-orange-400", bg: "bg-orange-500/20", border: "border-orange-500/30" };
    return { level: "High", color: "text-red-400", bg: "bg-red-500/20", border: "border-red-500/30" };
  };

  const resetAssessment = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setCompleted(false);
  };

  const progress = ((currentQuestion + 1) / allQuestions.length) * 100;
  const currentCat = assessmentCategories[allQuestions[currentQuestion]?.categoryIndex];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SpaceBackground />
      <Navbar />
      
      <main className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <section className="text-center py-8 md:py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6 glow-shadow">
              <Brain className="w-8 h-8 text-white" />
            </div>
            
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 mb-6 glow-animate">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-base font-semibold gradient-text">Free Mental Health Awareness Assessment</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Understand Your</span> Mental Well-being
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Gain personalized insights into your emotional, cognitive, and social health. 
              This assessment helps identify areas that may need attention.
            </p>
          </section>

          {/* Main Content */}
          {!started ? (
            <section className="py-8 max-w-5xl mx-auto">
              {/* Start Button */}
              <div className="text-center mb-12">
                <Button
                  size="lg"
                  className="btn-gradient rounded-2xl px-12 h-16 text-lg font-bold group glow-shadow hover:scale-105 transition-transform"
                  onClick={() => setStarted(true)}
                >
                  <Sparkles className="w-6 h-6 mr-3" />
                  Begin Free Assessment
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Assessment Categories Preview */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {assessmentCategories.map((cat) => (
                  <div 
                    key={cat.id} 
                    className={`glass-strong rounded-2xl p-6 hover-lift gentle-animation border ${cat.borderColor}`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${cat.bgColor} flex items-center justify-center mb-4`}>
                      <cat.icon className={`w-6 h-6 ${cat.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{cat.name}</h3>
                    <p className="text-muted-foreground text-sm">{cat.questions.length} questions</p>
                  </div>
                ))}
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="glass-strong rounded-2xl p-6 hover-lift gentle-animation">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">100% Confidential</h3>
                  <p className="text-muted-foreground text-sm">Your responses are private and never stored or shared with anyone.</p>
                </div>
                <div className="glass-strong rounded-2xl p-6 hover-lift gentle-animation">
                  <Lightbulb className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Personalized Insights</h3>
                  <p className="text-muted-foreground text-sm">Get specific feedback based on your individual responses.</p>
                </div>
                <div className="glass-strong rounded-2xl p-6 hover-lift gentle-animation">
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Actionable Guidance</h3>
                  <p className="text-muted-foreground text-sm">Receive practical recommendations for improving your well-being.</p>
                </div>
              </div>

              {/* Assessment Info */}
              <div className="glass-strong rounded-3xl p-8 text-center glass-glow">
                <h2 className="text-2xl font-bold mb-4 gradient-text">What You'll Discover</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  This {allQuestions.length}-question assessment takes about 3-5 minutes and provides insights across 
                  emotional well-being, sleep quality, mental clarity, and social connection.
                </p>
              </div>
            </section>
          ) : !completed ? (
            <section className="py-8 max-w-2xl mx-auto">
              {/* Assessment Form */}
              <div className="glass-strong rounded-3xl p-6 md:p-8 glass-glow animate-fade-in relative">
                <button 
                  onClick={resetAssessment}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground gentle-animation"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Category Indicator */}
                {currentCat && (
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${currentCat.bgColor} ${currentCat.borderColor} border mb-6`}>
                    <currentCat.icon className={`w-4 h-4 ${currentCat.color}`} />
                    <span className={`text-sm font-medium ${currentCat.color}`}>{currentCat.name}</span>
                  </div>
                )}

                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-muted-foreground">
                      Question {currentQuestion + 1} of {allQuestions.length}
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
                  {allQuestions[currentQuestion]?.question}
                </h2>

                {/* Options */}
                <div className="space-y-3">
                  {[
                    { value: 0, label: "Not at all", desc: "This doesn't apply to me" },
                    { value: 1, label: "Rarely", desc: "Once in a while" },
                    { value: 2, label: "Sometimes", desc: "A few times a week" },
                    { value: 3, label: "Often", desc: "Most days" },
                    { value: 4, label: "Very often", desc: "Almost always" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl glass border border-border/50 
                        hover:border-primary/50 hover:bg-primary/5 gentle-animation text-left group
                        ${answers[currentQuestion] === option.value ? 'border-primary/70 bg-primary/10' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center gentle-animation
                          ${answers[currentQuestion] === option.value ? 'border-primary bg-primary' : 'border-muted-foreground group-hover:border-primary'}`}>
                          {answers[currentQuestion] === option.value && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <div>
                          <span className="font-medium group-hover:text-primary gentle-animation">{option.label}</span>
                          <p className="text-xs text-muted-foreground">{option.desc}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          ) : (
            <section className="py-8 max-w-4xl mx-auto">
              {/* Results */}
              <div className="glass-strong rounded-3xl p-6 md:p-8 glass-glow animate-fade-in mb-8">
                <div className="text-center mb-8">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Your Assessment Results</h2>
                  <p className="text-muted-foreground">Here's what your responses reveal about your mental well-being</p>
                </div>

                {/* Overall Risk Level */}
                <div className={`rounded-2xl p-6 ${calculateOverallRisk().bg} ${calculateOverallRisk().border} border mb-8`}>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Overall Risk Level</p>
                      <h3 className={`text-3xl font-bold ${calculateOverallRisk().color}`}>
                        {calculateOverallRisk().level}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className={`w-6 h-6 ${calculateOverallRisk().color}`} />
                      <span className={`font-medium ${calculateOverallRisk().color}`}>
                        {getRiskInsight(calculateOverallRisk().level).title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category Breakdown */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 gradient-text">Category Breakdown</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {assessmentCategories.map((cat) => {
                      const score = calculateCategoryScore(cat.id);
                      const riskLevel = score <= 25 ? "Low" : score <= 50 ? "Moderate" : score <= 75 ? "Elevated" : "High";
                      
                      return (
                        <div key={cat.id} className={`glass rounded-xl p-4 border ${cat.borderColor}`}>
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-lg ${cat.bgColor} flex items-center justify-center`}>
                              <cat.icon className={`w-5 h-5 ${cat.color}`} />
                            </div>
                            <div>
                              <h4 className="font-medium">{cat.name}</h4>
                              <p className={`text-sm ${cat.color}`}>{riskLevel} concern</p>
                            </div>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-500 ${
                                score <= 25 ? 'bg-green-500' : 
                                score <= 50 ? 'bg-yellow-500' : 
                                score <= 75 ? 'bg-orange-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${score}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Personalized Insights */}
                <div className="glass rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <span className="gradient-text">Personalized Insights</span>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {getRiskInsight(calculateOverallRisk().level).message}
                  </p>
                  <h4 className="font-medium mb-3">Recommendations for You:</h4>
                  <ul className="space-y-2">
                    {getRiskInsight(calculateOverallRisk().level).recommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="rounded-xl border-border/50 hover:border-primary/50"
                    onClick={resetAssessment}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Take Again
                  </Button>
                  <Button
                    className="btn-gradient rounded-xl"
                    onClick={() => window.location.href = "/care-gap-analysis"}
                  >
                    Explore Care Gap Analysis
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="glass rounded-2xl p-6">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Important:</strong> This assessment provides general insights and is not a medical diagnosis. 
                  If you're experiencing a mental health crisis, please contact emergency services or a crisis helpline immediately.
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
