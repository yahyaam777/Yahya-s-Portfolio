import { Server, Cloud, Container, GitBranch, Terminal, Boxes } from "lucide-react";
import { Card } from "@/components/ui/card";

/* About Section Component
 * Introduction and tech stack overview
 * Modify: Update the description text and tech icons as needed
 */
const About = () => {
  const techStack = [
    { icon: Container, name: "Docker", color: "text-blue-500" },
    { icon: Cloud, name: "AWS", color: "text-orange-500" },
    { icon: Boxes, name: "Kubernetes", color: "text-blue-600" },
    { icon: GitBranch, name: "GitLab CI/CD", color: "text-orange-600" },
    { icon: Terminal, name: "Linux", color: "text-green-600" },
    { icon: Server, name: "Terraform", color: "text-purple-600" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <Card className="p-8 md:p-12 shadow-lg hover-lift">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a <strong>Software Engineering</strong> student at the <strong>International Institute of Technology (IIT)</strong>, 
              passionate about automation, cloud systems, and AIOps. I enjoy building scalable infrastructures and 
              improving developer workflows using <strong>DevOps practices</strong> and modern technologies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My expertise spans across cloud platforms, containerization, microservices architecture, and full-stack development. 
              I thrive on solving complex infrastructure challenges and continuously learning about emerging technologies 
              in the DevOps and AIOps ecosystem.
            </p>

            {/* Tech Stack Icons */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <tech.icon className={`h-10 w-10 ${tech.color}`} />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
