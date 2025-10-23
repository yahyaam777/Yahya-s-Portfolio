import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, YoutubeIcon } from "lucide-react";

/* Projects Section Component
 * Showcases portfolio projects
 * Modify: Update the projectsData array with your actual projects
 */
const Projects = () => {
  const projectsData = [
    {
      title: "AIOps Platform for Predictive Maintenance",
      description:
        "Built ML-based monitoring dashboards on AWS for anomaly detection. Implemented predictive maintenance algorithms to identify system failures before they occur.",
      techStack: ["AWS", "Python", "Machine Learning", "Monitoring"],
      githubUrl: "#", // Replace with actual GitHub link
      liveUrl: null,
    },
    {
      title: "Microservices on AWS EKS",
      description:
        "Designed and deployed microservices architecture using AWS EKS. Built complete CI/CD pipeline with Jenkins & GitLab for Spring Boot + Angular applications.",
      techStack: ["AWS EKS", "Kubernetes", "Jenkins", "GitLab", "Spring Boot", "Angular"],
      githubUrl: "https://gitlab.com/pfa8582418",
      liveUrl: null,
    },
    {
      title: "Fishermen Management & Statistics App",
      description:
        "Flutter mobile application with real-time analytics and statistics. Integrated Syncfusion charts for data visualization and performance tracking.",
      techStack: ["Flutter", "Dart", "Syncfusion", "Firebase"],
      demoUrl: "https://youtube.com/shorts/tAoYCfDVbrM", // Replace with your actual YouTube demo link
      githubUrl: null,
      liveUrl: null,
    },
    {
      title: "CRM and Lead Management System",
      description:
        "Comprehensive CRM solution for client tracking with authentication. Built using Flutter for mobile interface and MongoDB for data storage.",
      techStack: ["Flutter", "MongoDB", "Node.js", "Authentication"],
      githubUrl: "#",
      liveUrl: null,
    },
    {
      title: "Network Sniffing Application",
      description:
        "Real-time network packet analysis tool built with C# WinForms. Captures and analyzes network traffic with detailed protocol information.",
      techStack: ["C#", "WinForms", ".NET", "Networking"],
      githubUrl: "#",
      liveUrl: null,
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Featured <span className="text-primary">Projects</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <Card
            key={project.title}
            className="p-6 flex flex-col hover-lift bg-gradient-card border-border"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-lg font-bold mb-3">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2 mt-auto">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              )}
              {project.demoUrl && (
                <Button
                  size="sm"
                  className="flex-1 bg-red-600 text-white hover:bg-red-700"
                  onClick={() => window.open(project.demoUrl, "_blank")}
                >
                  <YoutubeIcon className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  size="sm"
                  className="flex-1 bg-primary text-background hover:bg-primary/90"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
