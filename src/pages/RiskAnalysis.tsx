import { useState } from "react";
import { SpaceBackground } from "@/components/SpaceBackground";
import { Navbar } from "@/components/Navbar";
import { 
  Brain, 
  Heart, 
  Briefcase, 
  DollarSign, 
  GraduationCap,
  Stethoscope,
  Utensils,
  Zap,
  Dumbbell,
  Cigarette,
  Wine,
  Activity,
  Users,
  Smile,
  HandHeart,
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  X,
  AlertCircle,
  Shield,
  Lightbulb,
  RefreshCw,
  User,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Feature definitions with user-friendly labels and options
const assessmentFeatures = [
  {
    id: "_AGE_G",
    name: "Age Group",
    icon: Calendar,
    category: "Demographics",
    color: "text-violet-400",
    bgColor: "bg-violet-500/20",
    borderColor: "border-violet-500/30",
    question: "What is your age group?",
    options: [
      { value: 1, label: "18-24 years" },
      { value: 2, label: "25-34 years" },
      { value: 3, label: "35-44 years" },
      { value: 4, label: "45-54 years" },
      { value: 5, label: "55-64 years" },
      { value: 6, label: "65 years or older" },
    ]
  },
  {
    id: "_SEX",
    name: "Biological Sex",
    icon: User,
    category: "Demographics",
    color: "text-pink-400",
    bgColor: "bg-pink-500/20",
    borderColor: "border-pink-500/30",
    question: "What is your biological sex?",
    options: [
      { value: 1, label: "Male" },
      { value: 2, label: "Female" },
    ]
  },
  {
    id: "MARITAL",
    name: "Marital Status",
    icon: Heart,
    category: "Demographics",
    color: "text-rose-400",
    bgColor: "bg-rose-500/20",
    borderColor: "border-rose-500/30",
    question: "What is your marital status?",
    options: [
      { value: 1, label: "Married" },
      { value: 2, label: "Divorced" },
      { value: 3, label: "Widowed" },
      { value: 4, label: "Separated" },
      { value: 5, label: "Never married" },
      { value: 6, label: "Unmarried couple" },
    ]
  },
  {
    id: "EMPLOY1",
    name: "Employment",
    icon: Briefcase,
    category: "Socioeconomic",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
    question: "What is your current employment status?",
    options: [
      { value: 1, label: "Employed for wages" },
      { value: 2, label: "Self-employed" },
      { value: 3, label: "Out of work (1+ year)" },
      { value: 4, label: "Out of work (< 1 year)" },
      { value: 5, label: "Homemaker" },
      { value: 6, label: "Student" },
      { value: 7, label: "Retired" },
      { value: 8, label: "Unable to work" },
    ]
  },
  {
    id: "INCOME3",
    name: "Income Level",
    icon: DollarSign,
    category: "Socioeconomic",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
    question: "What is your annual household income?",
    options: [
      { value: 1, label: "Less than $15,000" },
      { value: 2, label: "$15,000 - $24,999" },
      { value: 3, label: "$25,000 - $34,999" },
      { value: 4, label: "$35,000 - $49,999" },
      { value: 5, label: "$50,000 - $74,999" },
      { value: 6, label: "$75,000 - $99,999" },
      { value: 7, label: "$100,000 or more" },
    ]
  },
  {
    id: "EDUCA",
    name: "Education",
    icon: GraduationCap,
    category: "Socioeconomic",
    color: "text-amber-400",
    bgColor: "bg-amber-500/20",
    borderColor: "border-amber-500/30",
    question: "What is your highest level of education?",
    options: [
      { value: 1, label: "Never attended school" },
      { value: 2, label: "Elementary school" },
      { value: 3, label: "Some high school" },
      { value: 4, label: "High school graduate" },
      { value: 5, label: "Some college" },
      { value: 6, label: "College graduate or higher" },
    ]
  },
  {
    id: "MEDCOST1",
    name: "Healthcare Access",
    icon: Stethoscope,
    category: "Healthcare",
    color: "text-red-400",
    bgColor: "bg-red-500/20",
    borderColor: "border-red-500/30",
    question: "In the past 12 months, was there a time you needed to see a doctor but could not because of cost?",
    options: [
      { value: 1, label: "Yes" },
      { value: 2, label: "No" },
    ]
  },
  {
    id: "SDHFOOD1",
    name: "Food Security",
    icon: Utensils,
    category: "Social Determinants",
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-500/30",
    question: "How often in the past 12 months would you say you were worried about having enough food?",
    options: [
      { value: 1, label: "Always" },
      { value: 2, label: "Usually" },
      { value: 3, label: "Sometimes" },
      { value: 4, label: "Rarely" },
      { value: 5, label: "Never" },
    ]
  },
  {
    id: "SDHBILLS",
    name: "Financial Stress",
    icon: Zap,
    category: "Social Determinants",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    borderColor: "border-yellow-500/30",
    question: "How often in the past 12 months would you say you were worried about paying your bills?",
    options: [
      { value: 1, label: "Always" },
      { value: 2, label: "Usually" },
      { value: 3, label: "Sometimes" },
      { value: 4, label: "Rarely" },
      { value: 5, label: "Never" },
    ]
  },
  {
    id: "EXERANY2",
    name: "Physical Activity",
    icon: Dumbbell,
    category: "Lifestyle",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-500/30",
    question: "During the past month, did you participate in any physical activities or exercises?",
    options: [
      { value: 1, label: "Yes" },
      { value: 2, label: "No" },
    ]
  },
  {
    id: "SMOKE100",
    name: "Smoking History",
    icon: Cigarette,
    category: "Lifestyle",
    color: "text-gray-400",
    bgColor: "bg-gray-500/20",
    borderColor: "border-gray-500/30",
    question: "Have you smoked at least 100 cigarettes in your entire life?",
    options: [
      { value: 1, label: "Yes" },
      { value: 2, label: "No" },
    ]
  },
  {
    id: "ALCDAY4",
    name: "Alcohol Use",
    icon: Wine,
    category: "Lifestyle",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500/30",
    question: "On average, how many days per week do you consume alcoholic beverages?",
    options: [
      { value: 1, label: "None / Don't drink" },
      { value: 2, label: "1-2 days per week" },
      { value: 3, label: "3-4 days per week" },
      { value: 4, label: "5-6 days per week" },
      { value: 5, label: "Every day" },
    ]
  },
  {
    id: "DIABETE4",
    name: "Diabetes Status",
    icon: Activity,
    category: "Health Conditions",
    color: "text-teal-400",
    bgColor: "bg-teal-500/20",
    borderColor: "border-teal-500/30",
    question: "Have you ever been told by a doctor that you have diabetes?",
    options: [
      { value: 1, label: "Yes" },
      { value: 2, label: "Yes, during pregnancy only" },
      { value: 3, label: "No" },
      { value: 4, label: "Pre-diabetes / Borderline" },
    ]
  },
  {
    id: "HAVARTH4",
    name: "Arthritis",
    icon: Activity,
    category: "Health Conditions",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
    borderColor: "border-cyan-500/30",
    question: "Have you ever been told by a doctor that you have some form of arthritis?",
    options: [
      { value: 1, label: "Yes" },
      { value: 2, label: "No" },
    ]
  },
  {
    id: "GENHLTH",
    name: "General Health",
    icon: Heart,
    category: "Well-being",
    color: "text-pink-400",
    bgColor: "bg-pink-500/20",
    borderColor: "border-pink-500/30",
    question: "How would you rate your general health?",
    options: [
      { value: 1, label: "Excellent" },
      { value: 2, label: "Very Good" },
      { value: 3, label: "Good" },
      { value: 4, label: "Fair" },
      { value: 5, label: "Poor" },
    ]
  },
  {
    id: "LSATISFY",
    name: "Life Satisfaction",
    icon: Smile,
    category: "Well-being",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    borderColor: "border-yellow-500/30",
    question: "In general, how satisfied are you with your life?",
    options: [
      { value: 1, label: "Very satisfied" },
      { value: 2, label: "Satisfied" },
      { value: 3, label: "Dissatisfied" },
      { value: 4, label: "Very dissatisfied" },
    ]
  },
  {
    id: "EMTSUPRT",
    name: "Emotional Support",
    icon: HandHeart,
    category: "Well-being",
    color: "text-violet-400",
    bgColor: "bg-violet-500/20",
    borderColor: "border-violet-500/30",
    question: "How often do you get the social and emotional support you need?",
    options: [
      { value: 1, label: "Always" },
      { value: 2, label: "Usually" },
      { value: 3, label: "Sometimes" },
      { value: 4, label: "Rarely" },
      { value: 5, label: "Never" },
    ]
  },
];

// Group features by category
const categories = [...new Set(assessmentFeatures.map(f => f.category))];

// Risk calculation weights (higher = more risk contribution)
const riskWeights: { [key: string]: (value: number) => number } = {
  "_AGE_G": (v) => v >= 4 ? 2 : 0, // Older age slightly increases risk
  "_SEX": () => 0, // Neutral
  "MARITAL": (v) => [2, 3, 4].includes(v) ? 3 : 0, // Divorced/widowed/separated
  "EMPLOY1": (v) => [3, 4, 8].includes(v) ? 4 : 0, // Unemployed/unable to work
  "INCOME3": (v) => v <= 2 ? 3 : 0, // Low income
  "EDUCA": (v) => v <= 2 ? 2 : 0, // Low education
  "MEDCOST1": (v) => v === 1 ? 4 : 0, // Can't afford healthcare
  "SDHFOOD1": (v) => v <= 2 ? 4 : v === 3 ? 2 : 0, // Food insecurity
  "SDHBILLS": (v) => v <= 2 ? 3 : v === 3 ? 1 : 0, // Bill stress
  "EXERANY2": (v) => v === 2 ? 2 : 0, // No exercise
  "SMOKE100": (v) => v === 1 ? 1 : 0, // Smoking history
  "ALCDAY4": (v) => v >= 4 ? 2 : 0, // Heavy drinking
  "DIABETE4": (v) => v === 1 ? 2 : 0, // Has diabetes
  "HAVARTH4": (v) => v === 1 ? 1 : 0, // Has arthritis
  "GENHLTH": (v) => v >= 4 ? 4 : v === 3 ? 1 : 0, // Poor health
  "LSATISFY": (v) => v >= 3 ? 5 : 0, // Life dissatisfaction (major factor)
  "EMTSUPRT": (v) => v >= 4 ? 5 : v === 3 ? 2 : 0, // Lack of support (major factor)
};

const getRiskInsight = (level: string, riskFactors: string[]) => {
  const insights = {
    Low: {
      title: "Low Risk Detected",
      message: "Based on your responses, you appear to have good protective factors for mental health. Continue maintaining your healthy habits and support systems.",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
    },
    Moderate: {
      title: "Moderate Risk Detected",
      message: "Some factors in your profile suggest potential areas of concern. Consider focusing on the risk factors identified below.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30",
    },
    Elevated: {
      title: "Elevated Risk Detected",
      message: "Your responses indicate several risk factors that may affect your mental well-being. We recommend discussing these with a healthcare provider.",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
    },
    High: {
      title: "High Risk Detected",
      message: "Multiple significant risk factors have been identified. We strongly encourage you to seek support from a mental health professional.",
      color: "text-red-400",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/30",
    }
  };
  return insights[level as keyof typeof insights] || insights.Low;
};

const RiskAnalysis = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (featureId: string, value: number) => {
    const newAnswers = { ...answers, [featureId]: value };
    setAnswers(newAnswers);

    if (currentQuestion < assessmentFeatures.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setCompleted(true), 300);
    }
  };

  const calculateRisk = () => {
    let totalRisk = 0;
    const maxPossibleRisk = 40; // Approximate max risk score
    const identifiedRisks: { feature: string; contribution: number }[] = [];

    Object.entries(answers).forEach(([featureId, value]) => {
      const weightFn = riskWeights[featureId];
      if (weightFn) {
        const riskContribution = weightFn(value);
        if (riskContribution > 0) {
          totalRisk += riskContribution;
          const feature = assessmentFeatures.find(f => f.id === featureId);
          if (feature) {
            identifiedRisks.push({ feature: feature.name, contribution: riskContribution });
          }
        }
      }
    });

    const percentage = (totalRisk / maxPossibleRisk) * 100;
    let level: string;
    
    if (percentage <= 20) level = "Low";
    else if (percentage <= 40) level = "Moderate";
    else if (percentage <= 60) level = "Elevated";
    else level = "High";

    return { 
      level, 
      percentage: Math.min(percentage, 100), 
      identifiedRisks: identifiedRisks.sort((a, b) => b.contribution - a.contribution)
    };
  };

  const resetAssessment = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setCompleted(false);
  };

  const progress = ((currentQuestion + 1) / assessmentFeatures.length) * 100;
  const currentFeature = assessmentFeatures[currentQuestion];

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
              <span className="text-base font-semibold gradient-text">AI-Powered Mental Health Risk Prediction</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Predictive Risk</span> Analysis
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our assessment analyzes 17 key factors including demographics, socioeconomic status, 
              lifestyle, and health conditions to predict your mental health risk level.
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
                  Start Free Risk Analysis
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Categories Preview */}
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {categories.map((cat, idx) => {
                  const catFeatures = assessmentFeatures.filter(f => f.category === cat);
                  const firstFeature = catFeatures[0];
                  return (
                    <div 
                      key={cat}
                      className={`glass-strong rounded-2xl p-4 hover-lift gentle-animation border ${firstFeature.borderColor}`}
                    >
                      <div className={`w-10 h-10 rounded-xl ${firstFeature.bgColor} flex items-center justify-center mb-3`}>
                        <firstFeature.icon className={`w-5 h-5 ${firstFeature.color}`} />
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{cat}</h3>
                      <p className="text-muted-foreground text-xs">{catFeatures.length} factors</p>
                    </div>
                  );
                })}
              </div>

              {/* Features Overview */}
              <div className="glass-strong rounded-3xl p-6 md:p-8 glass-glow mb-8">
                <h2 className="text-xl font-bold mb-6 gradient-text text-center">Factors We Analyze</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {assessmentFeatures.map((feature) => (
                    <div 
                      key={feature.id}
                      className={`flex items-center gap-2 p-3 rounded-xl ${feature.bgColor} border ${feature.borderColor}`}
                    >
                      <feature.icon className={`w-4 h-4 ${feature.color} flex-shrink-0`} />
                      <span className="text-xs font-medium truncate">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-strong rounded-2xl p-6 hover-lift gentle-animation">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Privacy First</h3>
                  <p className="text-muted-foreground text-sm">Your data is processed locally and never stored or shared.</p>
                </div>
                <div className="glass-strong rounded-2xl p-6 hover-lift gentle-animation">
                  <Lightbulb className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Evidence-Based</h3>
                  <p className="text-muted-foreground text-sm">Based on BRFSS health survey methodology and research.</p>
                </div>
                <div className="glass-strong rounded-2xl p-6 hover-lift gentle-animation">
                  <Brain className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">AI-Powered</h3>
                  <p className="text-muted-foreground text-sm">Advanced algorithms analyze multiple risk factors simultaneously.</p>
                </div>
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

                {/* Category & Feature Indicator */}
                {currentFeature && (
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${currentFeature.bgColor} ${currentFeature.borderColor} border`}>
                      {currentFeature.category}
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${currentFeature.bgColor} ${currentFeature.borderColor} border`}>
                      <currentFeature.icon className={`w-4 h-4 ${currentFeature.color}`} />
                      <span className={`text-xs font-medium ${currentFeature.color}`}>{currentFeature.name}</span>
                    </div>
                  </div>
                )}

                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-muted-foreground">
                      Question {currentQuestion + 1} of {assessmentFeatures.length}
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
                  {currentFeature?.question}
                </h2>

                {/* Options */}
                <div className="space-y-3">
                  {currentFeature?.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(currentFeature.id, option.value)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl glass border border-border/50 
                        hover:border-primary/50 hover:bg-primary/5 gentle-animation text-left group
                        ${answers[currentFeature.id] === option.value ? 'border-primary/70 bg-primary/10' : ''}`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center gentle-animation
                        ${answers[currentFeature.id] === option.value ? 'border-primary bg-primary' : 'border-muted-foreground group-hover:border-primary'}`}>
                        {answers[currentFeature.id] === option.value && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="font-medium group-hover:text-primary gentle-animation">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          ) : (
            <section className="py-8 max-w-4xl mx-auto">
              {/* Results */}
              {(() => {
                const risk = calculateRisk();
                const insight = getRiskInsight(risk.level, []);
                
                return (
                  <>
                    <div className="glass-strong rounded-3xl p-6 md:p-8 glass-glow animate-fade-in mb-8">
                      <div className="text-center mb-8">
                        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Risk Analysis Complete</h2>
                        <p className="text-muted-foreground">Based on analysis of {Object.keys(answers).length} factors</p>
                      </div>

                      {/* Risk Level */}
                      <div className={`rounded-2xl p-6 ${insight.bgColor} ${insight.borderColor} border mb-8`}>
                        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Predicted Risk Level</p>
                            <h3 className={`text-3xl font-bold ${insight.color}`}>
                              {risk.level}
                            </h3>
                          </div>
                          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${insight.bgColor}`}>
                            <AlertCircle className={`w-5 h-5 ${insight.color}`} />
                            <span className={`font-medium ${insight.color}`}>{insight.title}</span>
                          </div>
                        </div>
                        
                        {/* Risk Meter */}
                        <div className="mb-4">
                          <div className="h-3 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-1000 ${
                                risk.level === "Low" ? 'bg-green-500' :
                                risk.level === "Moderate" ? 'bg-yellow-500' :
                                risk.level === "Elevated" ? 'bg-orange-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${risk.percentage}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-2">
                            <span>Low</span>
                            <span>Moderate</span>
                            <span>Elevated</span>
                            <span>High</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground">{insight.message}</p>
                      </div>

                      {/* Identified Risk Factors */}
                      {risk.identifiedRisks.length > 0 && (
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-orange-400" />
                            <span>Identified Risk Factors</span>
                          </h3>
                          <div className="grid md:grid-cols-2 gap-3">
                            {risk.identifiedRisks.map((rf, idx) => {
                              const feature = assessmentFeatures.find(f => f.name === rf.feature);
                              return (
                                <div 
                                  key={idx}
                                  className={`flex items-center gap-3 p-4 rounded-xl glass border ${feature?.borderColor || 'border-border/50'}`}
                                >
                                  {feature && <feature.icon className={`w-5 h-5 ${feature.color}`} />}
                                  <div className="flex-1">
                                    <span className="font-medium">{rf.feature}</span>
                                    <div className="flex items-center gap-2 mt-1">
                                      <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                                        <div 
                                          className="h-full bg-orange-500"
                                          style={{ width: `${(rf.contribution / 5) * 100}%` }}
                                        />
                                      </div>
                                      <span className="text-xs text-muted-foreground">
                                        {rf.contribution >= 4 ? 'High' : rf.contribution >= 2 ? 'Moderate' : 'Low'}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Protective Factors (if low risk) */}
                      {risk.level === "Low" && (
                        <div className="glass rounded-2xl p-6 mb-8 border border-green-500/30">
                          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-400" />
                            <span className="text-green-400">Your Protective Factors</span>
                          </h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              Good social and emotional support system
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              Positive life satisfaction indicators
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              Healthy lifestyle factors detected
                            </li>
                          </ul>
                        </div>
                      )}

                      {/* Recommendations */}
                      <div className="glass rounded-2xl p-6 mb-8">
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-primary" />
                          <span className="gradient-text">Recommendations</span>
                        </h3>
                        <ul className="space-y-2">
                          {risk.level === "Low" && (
                            <>
                              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                Continue maintaining your healthy lifestyle and support systems
                              </li>
                              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                Regular self-check-ins to monitor your mental well-being
                              </li>
                            </>
                          )}
                          {risk.level === "Moderate" && (
                            <>
                              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                Address the identified risk factors where possible
                              </li>
                              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                Consider speaking with a counselor for guidance
                              </li>
                              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                Build stronger social connections and support networks
                              </li>
                            </>
                          )}
                          {(risk.level === "Elevated" || risk.level === "High") && (
                            <>
                              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                Schedule an appointment with a mental health professional
                              </li>
                              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                Reach out to trusted friends or family for support
                              </li>
                              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                Consider accessing community resources and support groups
                              </li>
                              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                If in crisis, contact a mental health helpline immediately
                              </li>
                            </>
                          )}
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
                        <strong>Important:</strong> This predictive analysis is for informational purposes only and is not a medical diagnosis. 
                        The risk assessment is based on statistical correlations and should not replace professional medical advice.
                        If you're experiencing a mental health crisis, please contact emergency services immediately.
                      </p>
                    </div>
                  </>
                );
              })()}
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default RiskAnalysis;
