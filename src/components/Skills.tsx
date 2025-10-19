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
      color: "bg-blue-500/10 text-blue-700 border-blue-200",
    },
    {
      category: "Frameworks",
      skills: ["Spring Boot", "Express", "React", "Angular", "Node.js", ".NET"],
      color: "bg-green-500/10 text-green-700 border-green-200",
    },
    {
      category: "DevOps Tools",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "AWS EKS"],
      color: "bg-orange-500/10 text-orange-700 border-orange-200",
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS (EC2, ECR, Lambda, S3)", "Azure", "Docker Hub"],
      color: "bg-purple-500/10 text-purple-700 border-purple-200",
    },
    {
      category: "Databases",
      skills: ["MySQL", "SQL Server", "PostgreSQL"],
      color: "bg-pink-500/10 text-pink-700 border-pink-200",
    },
    {
      category: "Data Tools",
      skills: ["SSIS", "Power BI", "Data Warehousing"],
      color: "bg-indigo-500/10 text-indigo-700 border-indigo-200",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((category, index) => (
              <Card
                key={category.category}
                className="p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`${category.color} px-4 py-2 text-sm font-medium`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
