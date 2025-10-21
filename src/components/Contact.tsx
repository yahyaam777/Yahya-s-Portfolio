import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/* Contact Section Component
 * Contact form and social links
 * Modify: Update social media links and form submission logic
 */
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend
    // For now, we'll just show a success message
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:yahyaamami33@example.com", // Replace with your email
      color: "hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/yahya-amami-8168711a3/", // Replace with your LinkedIn
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yahyaam777", // Replace with your GitHub
      color: "hover:text-gray-800",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">
        Get In <span className="text-primary">Touch</span>
      </h2>
      <div className="h-1 w-12 bg-primary mb-8"></div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="p-6 md:p-8 bg-gradient-card border-border">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-background hover:bg-primary/90">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </Card>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="p-6 bg-gradient-card border-border">
            <h3 className="text-lg font-bold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground text-sm mb-6">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about DevOps
              and cloud technologies. Feel free to reach out!
            </p>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors ${link.color}`}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="font-medium text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-lg font-bold mb-2">Looking for opportunities</h3>
            <p className="text-muted-foreground text-sm">
              Currently seeking DevOps or Cloud internship positions where I can contribute my skills and continue
              learning in a dynamic environment.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
