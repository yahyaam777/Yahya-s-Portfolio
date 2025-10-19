import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/* Sidebar Component
 * Fixed sidebar with profile information
 * Modify: Update personal info, avatar, and social links
 */
const Sidebar = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "yahya.amami@example.com", // Replace with your email
      link: "mailto:yahya.amami@example.com",
    },
    {
      icon: Phone,
      label: "PHONE NUMBER",
      value: "+216 XX XXX XXX", // Replace with your phone
      link: "tel:+216XXXXXXXX",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Sfax, Tunisia", // Replace with your location
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, url: "https://linkedin.com/in/yahya-amami", label: "LinkedIn" },
    { icon: Github, url: "https://github.com/yahya-amami", label: "GitHub" },
  ];

  return (
    <aside className="w-full lg:w-80 xl:w-96 shrink-0">
      <Card className="p-8 sticky top-8">
        {/* Profile Image */}
        <div className="mb-6">
          <div className="w-48 h-48 mx-auto rounded-3xl bg-gradient-primary flex items-center justify-center text-6xl font-bold text-background overflow-hidden">
            {/* Replace with actual image: <img src="your-photo.jpg" alt="Yahya Amami" className="w-full h-full object-cover" /> */}
            YA
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Yahya Amami</h1>
          <div className="inline-block px-4 py-2 rounded-lg bg-muted">
            <p className="text-sm text-muted-foreground">Software Engineer</p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Contact Info */}
        <div className="space-y-6">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-primary/10 shrink-0">
                <info.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {info.label}
                </p>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-sm hover:text-primary transition-colors break-all"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-muted hover:bg-primary/10 hover:text-primary transition-all"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </Card>
    </aside>
  );
};

export default Sidebar;
