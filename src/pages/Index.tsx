import SideRail from "@/components/SideRail";
import SocialBar from "@/components/SocialBar";
import Hero from "@/components/Hero";
import Placeholder from "@/components/Placeholder";
import SkillsSection from "@/components/SkillsSection";
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
        <Placeholder id="about" eyebrow="About me" title="A new story is on the way" />
        <SkillsSection />
        <Placeholder id="experience" eyebrow="Experience" title="Refreshed timeline arriving soon" />
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
