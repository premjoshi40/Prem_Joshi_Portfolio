import SideRail from "@/components/SideRail";
import Hero from "@/components/Hero";
import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import HonorsSection from "@/components/HonorsSection";
import HobbiesSection from "@/components/HobbiesSection";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SideRail />
      <main className="lg:pl-20">
        <Hero />
        <ExperienceSection />
        <CertificationsSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <HonorsSection />
        <HobbiesSection />
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
