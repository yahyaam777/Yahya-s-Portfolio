import { useState } from "react";
import { User, Briefcase, FolderKanban, Award, Languages, Mail } from "lucide-react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Certifications from "./Certifications";
import LanguagesSection from "./Languages";
import Contact from "./Contact";

/* Tab Navigation Component
 * Main content area with tab-based navigation
 * Modify: Add or remove tabs as needed
 */
const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Portfolio", icon: FolderKanban },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "languages", label: "Languages", icon: Languages },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="flex-1 min-w-0">
      {/* Tab Navigation */}
      <nav className="mb-8 overflow-x-auto">
        <div className="flex gap-2 p-1 rounded-2xl bg-card border border-border min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {activeTab === "profile" && (
          <div className="space-y-12">
            <About />
            <Skills />
          </div>
        )}
        {activeTab === "experience" && <Experience />}
        {activeTab === "projects" && <Projects />}
        {activeTab === "certifications" && <Certifications />}
        {activeTab === "languages" && <LanguagesSection />}
        {activeTab === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default TabNavigation;
