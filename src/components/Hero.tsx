import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

/* Hero Section Component
 * Main landing section with intro, photo, and CTAs
 * Modify: Update name, title, or button links
 */
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-hero">
      <div className="container px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Profile Photo Placeholder */}
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-primary shadow-glow mx-auto flex items-center justify-center text-white text-6xl font-bold">
              YA
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Yahya Amami</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
            DevOps & Cloud Enthusiast | Software Engineering Student
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building automated, scalable systems with DevOps and Cloud technologies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8"
              onClick={() => {
                // Replace with your actual CV link
                window.open('#', '_blank');
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
