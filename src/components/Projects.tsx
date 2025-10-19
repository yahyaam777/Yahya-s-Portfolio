import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

/* Projects Section Component
 * Showcases portfolio projects
 * Modify: Update the projectsData array with your actual projects
 */
const Projects = () => {
  const projectsData = [
    {
      title: "CI/CD Pipeline Automation",
      description:
        "Built a complete CI/CD workflow using GitLab CI/CD and Docker. Automated testing, building, and deployment processes for multiple microservices, reducing deployment time by 60%.",
      techStack: ["GitLab CI/CD", "Docker", "Kubernetes", "Python"],
      githubUrl: "#", // Replace with actual GitHub link
      liveUrl: null,
    },
    {
      title: "Infrastructure as Code Project",
      description:
        "Deployed and managed AWS infrastructure automatically using Terraform. Created reusable modules for VPC, EC2, RDS, and S3, with state management in S3 backend.",
      techStack: ["Terraform", "AWS", "Bash", "CloudFormation"],
      githubUrl: "#",
      liveUrl: null,
    },
    {
      title: "Monitoring Dashboard",
      description:
        "Implemented real-time monitoring solution using Prometheus and Grafana. Created custom dashboards for infrastructure metrics, application performance, and alerting systems.",
      techStack: ["Prometheus", "Grafana", "Docker", "Node Exporter"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Kubernetes Cluster Setup",
      description:
        "Set up production-grade Kubernetes cluster with high availability. Implemented auto-scaling, load balancing, and deployed multiple containerized applications with Helm charts.",
      techStack: ["Kubernetes", "Helm", "Docker", "Nginx"],
      githubUrl: "#",
      liveUrl: null,
    },
    {
      title: "Automated Backup System",
      description:
        "Developed automated backup solution for databases and critical files using Python scripts. Implemented encryption and cloud storage integration with AWS S3.",
      techStack: ["Python", "AWS S3", "Bash", "Cron"],
      githubUrl: "#",
      liveUrl: null,
    },
    {
      title: "Microservices Architecture",
      description:
        "Designed and deployed microservices-based application with Docker Compose and Kubernetes. Implemented service mesh, API gateway, and centralized logging.",
      techStack: ["Docker", "Kubernetes", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <Card
                key={project.title}
                className="p-6 flex flex-col hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary"
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
      </div>
    </section>
  );
};

export default Projects;
