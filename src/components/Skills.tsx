import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* Skills Section Component
 * Displays categorized technical skills
 * Modify: Update skill categories and items in the skillsData array
 */
const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C", "Dart"],
    },
    {
      category: "Frameworks",
      skills: ["Spring Boot", "Express", "React", "Angular", "Node.js", ".NET"],
    },
    {
      category: "DevOps Tools",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "AWS EKS"],
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS (EC2, ECR, Lambda, S3)", "Azure", "Docker Hub"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "SQL Server", "PostgreSQL"],
    },
    {
      category: "Data Tools",
      skills: ["SSIS", "Power BI", "Data Warehousing"],
    },
  ];

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">
        Technical <span className="text-primary">Skills</span>
      </h3>

      <div className="grid sm:grid-cols-2 gap-6">
        {skillsData.map((category, index) => (
          <Card
            key={category.category}
            className="p-6 hover-lift bg-gradient-card border-border"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h4 className="text-lg font-bold mb-4">{category.category}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="px-3 py-1 text-xs font-medium border-primary/20 text-foreground hover:bg-primary/10"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
