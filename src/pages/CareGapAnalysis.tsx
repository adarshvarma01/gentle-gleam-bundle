import { useState } from "react";
import { SpaceBackground } from "@/components/SpaceBackground";
import { Navbar } from "@/components/Navbar";
import { HeartPulse, MapPin, Lightbulb, DollarSign, Clock, Users, Building2, GraduationCap, Sparkles, ArrowRight, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const careGaps = [
  {
    title: "Access Gap",
    icon: MapPin,
    description: "Many people lack physical access to mental health services due to geographic barriers.",
    details: [
      "Rural areas often have fewer mental health providers",
      "Long travel distances to reach specialists",
      "Limited public transportation options",
      "Shortage of mental health facilities",
    ],
  },
  {
    title: "Awareness Gap",
    icon: Lightbulb,
    description: "Lack of knowledge about mental health conditions, symptoms, and available treatments.",
    details: [
      "Stigma prevents people from seeking help",
      "Limited mental health education in schools",
      "Misconceptions about mental illness",
      "Unrecognized symptoms in early stages",
    ],
  },
  {
    title: "Affordability Gap",
    icon: DollarSign,
    description: "High costs of mental health care create financial barriers for many individuals.",
    details: [
      "Therapy sessions are often expensive",
      "Limited or no insurance coverage",
      "High cost of psychiatric medications",
      "Lost wages from time off for treatment",
    ],
  },
  {
    title: "Availability Gap",
    icon: Clock,
    description: "Shortage of mental health professionals leads to long wait times and limited care.",
    details: [
      "Insufficient number of psychiatrists",
      "Long waiting lists for appointments",
      "Limited after-hours services",
      "Lack of crisis intervention resources",
    ],
  },
];

const selfAssessmentQuestions = [
  { question: "Do you have access to mental health services within 30 minutes of your home?", category: "Access" },
  { question: "Are you aware of the mental health resources available in your community?", category: "Awareness" },
  { question: "Can you afford regular mental health care without financial strain?", category: "Affordability" },
  { question: "Can you get a mental health appointment within 2 weeks when needed?", category: "Availability" },
  { question: "Do you feel comfortable discussing mental health openly?", category: "Awareness" },
  { question: "Does your insurance adequately cover mental health services?", category: "Affordability" },
];

const solutions = [
  { icon: Building2, title: "Expand Telehealth Services", description: "Virtual mental health services can bridge geographic gaps and increase access to care." },
  { icon: GraduationCap, title: "Mental Health Education", description: "Integrate mental health awareness programs in schools, workplaces, and communities." },
  { icon: Users, title: "Peer Support Programs", description: "Train community members to provide basic mental health support and guidance." },
  { icon: DollarSign, title: "Insurance Reform", description: "Advocate for better mental health coverage and parity in insurance policies." },
];

const CareGapAnalysis = () => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (value: boolean) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < selfAssessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const calculateGaps = () => {
    const gaps: { [key: string]: number } = { Access: 0, Awareness: 0, Affordability: 0, Availability: 0 };
    const totals: { [key: string]: number } = { Access: 0, Awareness: 0, Affordability: 0, Availability: 0 };
    
    selfAssessmentQuestions.forEach((q, i) => {
      totals[q.category]++;
      if (!answers[i]) gaps[q.category]++;
    });

    return Object.keys(gaps).map(key => ({
      category: key,
      gapPercentage: totals[key] > 0 ? (gaps[key] / totals[key]) * 100 : 0,
      hasGap: gaps[key] > 0,
    }));
  };

  const resetAssessment = () => {
    setShowAssessment(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setCompleted(false);
  };

  const progress = ((currentQuestion + 1) / selfAssessmentQuestions.length) * 100;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SpaceBackground />
      <Navbar />
      
      <main className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <section className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6 glow-shadow">
              <HeartPulse className="w-8 h-8 text-white" />
            </div>
            
            {/* Free Analysis Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 mb-6 glow-animate">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-base font-semibold gradient-text">Free Mental Health Care Gap Analysis</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Care Gap</span> Analysis
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Understanding the barriers that prevent people from receiving adequate mental health care 
              is the first step toward creating meaningful solutions.
            </p>
          </section>

          {/* Analyze Yourself Button - Prominent */}
          {!showAssessment && (
            <section className="py-8 text-center">
              <Button
                size="lg"
                className="btn-gradient rounded-2xl px-12 h-16 text-lg font-bold group glow-shadow hover:scale-105 transition-transform"
                onClick={() => setShowAssessment(true)}
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Analyze Yourself
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </section>
          )}

          {/* Self Assessment Modal */}
          {showAssessment && !completed && (
            <section className="py-8 max-w-2xl mx-auto">
              <div className="glass-strong rounded-3xl p-8 glass-glow animate-fade-in relative">
                {/* Close button */}
                <button 
                  onClick={resetAssessment}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground gentle-animation"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold gradient-text mb-2">Care Gap Self-Assessment</h2>
                  <p className="text-muted-foreground text-sm">Answer honestly to identify your personal care gaps</p>
                </div>

                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-muted-foreground">
                      Question {currentQuestion + 1} of {selfAssessmentQuestions.length}
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

                {/* Category Badge */}
                <div className="text-center mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium glass border border-primary/30">
                    {selfAssessmentQuestions[currentQuestion].category}
                  </span>
                </div>

                {/* Question */}
                <h3 className="text-xl font-semibold mb-8 text-center">
                  {selfAssessmentQuestions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => handleAnswer(true)}
                    className="flex-1 max-w-[150px] p-4 rounded-xl glass border border-green-500/30 hover:border-green-500/50 hover:bg-green-500/10 gentle-animation text-center group"
                  >
                    <span className="font-semibold text-green-400">Yes</span>
                  </button>
                  <button
                    onClick={() => handleAnswer(false)}
                    className="flex-1 max-w-[150px] p-4 rounded-xl glass border border-red-500/30 hover:border-red-500/50 hover:bg-red-500/10 gentle-animation text-center group"
                  >
                    <span className="font-semibold text-red-400">No</span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Assessment Results */}
          {showAssessment && completed && (
            <section className="py-8 max-w-2xl mx-auto">
              <div className="glass-strong rounded-3xl p-8 glass-glow animate-fade-in">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-center mb-6">Your Care Gap Profile</h2>
                
                <div className="space-y-4 mb-8">
                  {calculateGaps().map((gap, index) => (
                    <div key={index} className="glass rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{gap.category}</span>
                        <span className={`text-sm font-semibold ${gap.hasGap ? "text-orange-400" : "text-green-400"}`}>
                          {gap.hasGap ? "Gap Identified" : "No Gap"}
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-500 ${gap.hasGap ? "bg-orange-500" : "bg-green-500"}`}
                          style={{ width: `${100 - gap.gapPercentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

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
                    onClick={() => { resetAssessment(); setShowAssessment(false); }}
                  >
                    View Solutions Below
                  </Button>
                </div>
              </div>
            </section>
          )}

          {/* What is Care Gap */}
          {!showAssessment && (
            <>
              <section className="py-8">
                <div className="glass-strong rounded-3xl p-8 md:p-12 glass-glow">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center gradient-text">
                    What Are Mental Health Care Gaps?
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto text-center">
                    Mental health care gaps refer to the difference between the mental health services 
                    people need and the services they actually receive. These gaps exist due to various 
                    barriers including lack of access, awareness, affordability, and availability of 
                    mental health resources.
                  </p>
                </div>
              </section>

              {/* Care Gap Cards */}
              <section className="py-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 gradient-text">
                  The Four Major Care Gaps
                </h2>
                <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                  These interconnected barriers create significant challenges for those seeking mental health support.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {careGaps.map((gap, index) => {
                    const Icon = gap.icon;
                    return (
                      <div
                        key={gap.title}
                        className="glass-strong rounded-3xl p-6 md:p-8 hover-lift gentle-animation animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center glow-shadow">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{gap.title}</h3>
                            <p className="text-muted-foreground">{gap.description}</p>
                          </div>
                        </div>
                        
                        <ul className="space-y-2 mt-6 pl-4">
                          {gap.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-3 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Solutions */}
              <section className="py-12">
                <div className="gradient-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
                  
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                      Bridging the Gap
                    </h2>
                    <p className="text-white/80 text-center mb-10 max-w-2xl mx-auto">
                      Together, we can work toward closing mental health care gaps through these initiatives.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {solutions.map((solution, index) => {
                        const Icon = solution.icon;
                        return (
                          <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover-lift gentle-animation"
                          >
                            <Icon className="w-10 h-10 text-white mb-4" />
                            <h3 className="font-semibold text-lg mb-2">{solution.title}</h3>
                            <p className="text-white/70 text-sm">{solution.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>

              {/* Statistics */}
              <section className="py-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 gradient-text">
                  The Global Impact
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { number: "450M+", label: "People with mental disorders worldwide" },
                    { number: "76-85%", label: "Receive no treatment in low-income countries" },
                    { number: "10 Years", label: "Average delay in receiving treatment" },
                    { number: "$1 Trillion", label: "Annual cost to global economy" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="glass-strong rounded-2xl p-6 text-center hover-lift gentle-animation"
                    >
                      <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                        {stat.number}
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default CareGapAnalysis;
