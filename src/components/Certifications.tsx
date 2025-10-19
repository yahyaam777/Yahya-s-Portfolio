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
      color: "bg-blue-500/10 text-blue-700 border-blue-200",
    },
    {
      name: "Cisco Networking Academy (CCNAv7)",
      issuer: "Cisco",
      year: "2024",
      color: "bg-green-500/10 text-green-700 border-green-200",
    },
    {
      name: "Goethe-Institut German Certificate (B1)",
      issuer: "Goethe-Institut",
      year: "2019",
      color: "bg-orange-500/10 text-orange-700 border-orange-200",
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <Card
                key={cert.name}
                className="p-6 hover-lift text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
                <Badge variant="outline" className={cert.color}>
                  {cert.year}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
