import SideRail from "@/components/SideRail";
import SocialBar from "@/components/SocialBar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProductsSection from "@/components/ProductsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SideRail />
      <SocialBar />
      <main className="lg:pl-20">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <div id="products">
          <ProductsSection />
        </div>
        <div id="certifications">
          <CertificationsSection />
        </div>
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
