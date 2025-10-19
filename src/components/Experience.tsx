import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

/* Experience & Education Section Component
 * Timeline-style display of work experience and education
 * Modify: Update the experienceData and educationData arrays with your information
 */
const Experience = () => {
  const experienceData = [
    {
      title: "DevOps Intern",
      company: "Aziro Technologies",
      period: "Summer 2024 - Present",
      description:
        "Working on CI/CD pipeline optimization, container orchestration with Kubernetes, and cloud infrastructure management on AWS. Implemented automated deployment workflows.",
      icon: Briefcase,
    },
    {
      title: "Cloud Engineering Intern",
      company: "Capgemini",
      period: "Summer 2023",
      description:
        "Assisted in migrating legacy applications to AWS cloud. Worked with EC2, S3, RDS, and Lambda services. Gained hands-on experience with Terraform and CloudFormation.",
      icon: Briefcase,
    },
  ];

  const educationData = [
    {
      title: "Engineering Cycle — Software Engineering & Decision Support Systems",
      institution: "International Institute of Technology (IIT)",
      period: "2023 - Present",
      description:
        "Specializing in Software Engineering, DevOps, Cloud Computing, and AIOps. Focus on building scalable systems, automation, and modern development practices.",
      icon: GraduationCap,
    },
    {
      title: "Bachelor's Degree — Software Engineering & Information Systems",
      institution: "International Institute of Technology (IIT)",
      period: "2020 - 2023",
      description:
        "Focused on fundamentals of software engineering, programming, databases, and system design. Strong foundation in computer science principles.",
      icon: GraduationCap,
    },
  ];

  const TimelineItem = ({ item, index }: { item: any; index: number }) => (
    <div className="relative pl-8 pb-12 last:pb-0 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-primary" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 -ml-2 rounded-full bg-primary shadow-glow" />

      <Card className="p-6 hover-lift ml-4">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <item.icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
            <p className="text-primary font-medium mb-2">{item.company || item.institution}</p>
            <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <section id="experience" className="py-20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Experience & <span className="gradient-text">Education</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                Experience
              </h3>
              {experienceData.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} />
              ))}
            </div>

            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              {educationData.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
