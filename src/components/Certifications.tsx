import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

/* Certifications Section Component
 * Displays professional certifications
 * Modify: Update the certificationsData array with your certifications
 */
const Certifications = () => {
  const certificationsData = [
    {
      name: "Scrum Fundamentals Certified (SFC)",
      issuer: "SCRUMstudy",
      year: "2024",
    },
    {
      name: "Cisco Networking Academy (CCNAv7)",
      issuer: "Cisco",
      year: "2024",
    },
    {
      name: "Goethe-Institut German Certificate (B1)",
      issuer: "Goethe-Institut",
      year: "2019",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">
        <span className="text-primary">Certifications</span>
      </h2>
      <div className="h-1 w-12 bg-primary mb-8"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert, index) => (
          <Card
            key={cert.name}
            className="p-6 hover-lift text-center bg-gradient-card border-border"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Award className="h-7 w-7 text-primary" />
              </div>
            </div>
            <h3 className="text-base font-bold mb-2">{cert.name}</h3>
            <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
            <Badge variant="outline" className="border-primary/20 text-primary">
              {cert.year}
            </Badge>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
