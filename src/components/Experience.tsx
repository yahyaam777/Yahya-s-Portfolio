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
    <div className="relative pl-8 pb-8 last:pb-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 -ml-1.5 rounded-full bg-primary" />

      <Card className="p-5 hover-lift ml-4 bg-gradient-card border-border">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10 shrink-0">
            <item.icon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-bold mb-1">{item.title}</h4>
            <a href="#" className="text-primary font-medium text-sm hover:underline mb-1 inline-block">
              {item.company || item.institution}
            </a>
            <p className="text-xs text-muted-foreground mb-2">{item.period}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">
        Experience & <span className="text-primary">Education</span>
      </h2>
      <div className="h-1 w-12 bg-primary mb-8"></div>

      {/* Education Timeline */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          Education
        </h3>
        {educationData.map((item, index) => (
          <TimelineItem key={item.title} item={item} index={index} />
        ))}
      </div>

      {/* Experience Timeline */}
      <div>
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-primary" />
          Experience
        </h3>
        {experienceData.map((item, index) => (
          <TimelineItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
