import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Globe } from "lucide-react";

/* Languages Section Component
 * Displays language proficiency levels
 * Modify: Update the languagesData array with your language skills
 */
const Languages = () => {
  const languagesData = [
    { name: "Arabic", level: "Native", percentage: 100 },
    { name: "English", level: "Advanced", percentage: 90 },
    { name: "French", level: "Advanced", percentage: 85 },
    { name: "German", level: "Intermediate", percentage: 60 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">
        <span className="text-primary">Languages</span>
      </h2>
      <div className="h-1 w-12 bg-primary mb-8"></div>

      <Card className="p-8 bg-gradient-card border-border">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-primary/10">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold">Language Proficiency</h3>
        </div>

        <div className="space-y-6">
          {languagesData.map((language, index) => (
            <div
              key={language.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{language.name}</span>
                <span className="text-sm text-muted-foreground">{language.level}</span>
              </div>
              <Progress value={language.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Languages;
