import { PageLayout } from "@/components/PageLayout";
import { HeartPulse, MapPin, Lightbulb, DollarSign, Clock, Users, Building2, GraduationCap } from "lucide-react";

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
    color: "from-violet-500 to-purple-600",
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
    color: "from-purple-500 to-pink-600",
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
    color: "from-pink-500 to-rose-600",
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
    color: "from-rose-500 to-red-600",
  },
];

const solutions = [
  {
    icon: Building2,
    title: "Expand Telehealth Services",
    description: "Virtual mental health services can bridge geographic gaps and increase access to care.",
  },
  {
    icon: GraduationCap,
    title: "Mental Health Education",
    description: "Integrate mental health awareness programs in schools, workplaces, and communities.",
  },
  {
    icon: Users,
    title: "Peer Support Programs",
    description: "Train community members to provide basic mental health support and guidance.",
  },
  {
    icon: DollarSign,
    title: "Insurance Reform",
    description: "Advocate for better mental health coverage and parity in insurance policies.",
  },
];

const CareGapAnalysis = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <section className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6">
            <HeartPulse className="w-8 h-8 text-white" />
          </div>
          
          {/* Free Analysis Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet/20 via-purple/20 to-pink/20 border border-violet/30 mb-4">
            <span className="text-sm font-semibold gradient-text">✨ Free Mental Health Care Gap Analysis</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Care Gap</span> Analysis
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding the barriers that prevent people from receiving adequate mental health care 
            is the first step toward creating meaningful solutions.
          </p>
        </section>

        {/* What is Care Gap */}
        <section className="py-8">
          <div className="bg-card rounded-3xl p-8 md:p-12 gradient-border">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              What Are Mental Health Care Gaps?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto text-center">
              Mental health care gaps refer to the difference between the mental health services 
              people need and the services they actually receive. These gaps exist due to various 
              barriers including lack of access, awareness, affordability, and availability of 
              mental health resources. Addressing these gaps is crucial for improving mental health 
              outcomes globally.
            </p>
          </div>
        </section>

        {/* Care Gap Cards */}
        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
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
                  className="bg-card rounded-3xl p-6 md:p-8 card-shadow border border-border gentle-animation hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${gap.color} flex items-center justify-center`}>
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
          <div className="gradient-primary rounded-3xl p-8 md:p-12 text-white">
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
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <Icon className="w-10 h-10 text-white mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{solution.title}</h3>
                    <p className="text-white/70 text-sm">{solution.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
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
                className="bg-card rounded-2xl p-6 text-center card-shadow border border-border"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12">
          <div className="bg-secondary rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Be Part of the Solution</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Understanding care gaps is the first step. Advocate for better mental health 
              policies, support mental health organizations, and help reduce stigma in your community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.who.int/health-topics/mental-health"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-primary text-white font-medium gentle-animation hover-lift"
              >
                Learn More at WHO
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default CareGapAnalysis;
