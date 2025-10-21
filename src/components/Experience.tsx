import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import type { ComponentType } from "react";

/* Experience & Education Section Component
 * Timeline-style display of work experience and education
 * Modify: Update the experienceData and educationData arrays with your information
 */
const Experience = () => {
  const experienceData = [
    {
      title: "AIOps Platform for Predictive Maintenance",
      company: "ADHOC by Qim INFO",
      period: "July 2025 - August 2025",
      description:
        "Built an AIOps platform (LGMT stack) with ML models for anomaly detection and predictive maintenance. Created Grafana dashboards for real-time monitoring and deployed on AWS (EC2, S3, CloudWatch, Lambda) with Docker and CI/CD.",
      icon: Briefcase,
    },
    {
      title: "DevOps Project — Microservices on AWS EKS",
      company: "International Institute of Technology",
      period: "Feb. 2025 - May 2025",
      description:
        "Deployed microservices using Spring Boot and Angular, containerized with Docker and orchestrated on AWS EKS. Implemented CI/CD pipelines with Jenkins and GitLab CI and provisioned EC2 instances with Kubernetes manifests.",
      icon: Briefcase,
    },
    {
      title: "Fishermen Management & Statistics App",
      company: "WEDTECT",
      period: "June 2024 - August 2024",
      description:
        "Developed a fishermen management system with real-time statistics (Syncfusion Charts) for catch tracking, notifications, and automatic authorization number generation. Built REST APIs and frontend modules.",
      icon: Briefcase,
    },
    {
      title: "CRM and Lead Management System",
      company: "LEZART Digital",
      period: "Feb. 2023 - June 2023",
      description:
        "Developed user and client management modules with secure authentication, lead tracking, opportunity management, and contributed to DevOps practices (Git, CI/CD, staging deployments).",
      icon: Briefcase,
    },
    {
      title: "Network Sniffing Application",
      company: "PRIMATEC Engineering",
      period: "July 2022 - August 2022",
      description:
        "Designed and implemented a packet sniffing and analysis application for real-time network monitoring, with modules for packet capture, filtering, protocol analysis, and visualization.",
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

  type TimelineEntry = {
    title: string;
    company?: string;
    institution?: string;
    period: string;
    description: string;
    // SVG/react icon components typically accept a `className` prop for sizing/colors
    icon: ComponentType<{ className?: string }>;
  };

  const TimelineItem = ({ item, index }: { item: TimelineEntry; index: number }) => (
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
