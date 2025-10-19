import { Code, Globe, Smartphone, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

/* About Section Component
 * Introduction and services overview
 * Modify: Update the description text and services as needed
 */
const About = () => {
  const services = [
    {
      icon: Code,
      title: "DevOps Engineering",
      description: "Building robust CI/CD pipelines and automating infrastructure deployment at a professional level.",
    },
    {
      icon: Globe,
      title: "Cloud Architecture",
      description: "Designing and implementing scalable cloud solutions on AWS, Azure, and other platforms.",
    },
    {
      icon: Smartphone,
      title: "Full-Stack Development",
      description: "Professional application development using Spring Boot, Flutter, React, and Angular frameworks.",
    },
    {
      icon: Database,
      title: "AIOps & Data Engineering",
      description: "Design and optimization of data pipelines with ML-based monitoring and predictive maintenance.",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        About Me <span className="text-primary">..</span>
      </h2>

      <p className="text-muted-foreground leading-relaxed mb-8">
        I'm a <strong className="text-foreground">Software Engineering</strong> student at the{" "}
        <strong className="text-foreground">International Institute of Technology (IIT)</strong>, passionate about
        automation, cloud systems, and AIOps. I enjoy building scalable infrastructures and improving developer
        workflows using <strong className="text-foreground">DevOps practices</strong> and modern technologies.
      </p>

      <h3 className="text-2xl font-bold mb-6 mt-12">
        What I Can Do <span className="text-primary">..</span>
      </h3>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card
            key={service.title}
            className="p-6 hover-lift bg-gradient-card border-border"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-4">
              <div className="inline-flex p-3 rounded-xl bg-primary/10">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h4 className="text-xl font-bold mb-3">{service.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;
