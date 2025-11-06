import awsMlEngineer from "@/assets/aws-ml-engineer.png";
import awsSolutionsArchitect from "@/assets/aws-solutions-architect.png";
import awsCloudPractitioner from "@/assets/aws-cloud-practitioner.png";
import psm1 from "@/assets/psm-1.png";
import { ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Machine Learning Engineer – Associate",
      image: awsMlEngineer,
      url: "https://www.credly.com/badges/c87050e6-0c47-44a0-bc53-e4119d582550/public_url",
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      image: awsSolutionsArchitect,
      url: "https://www.credly.com/badges/c7603ea5-ec25-4165-90f0-3c1b8982a0bd/public_url",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      image: awsCloudPractitioner,
      url: "https://www.credly.com/badges/c46d4343-f34c-46b6-9c9a-f925d47ddb4e/public_url",
    },
    {
      title: "Professional Scrum Master™ I (PSM I)",
      image: psm1,
      url: "https://www.credly.com/badges/47a3eaa9-ffea-4535-bb32-ac32bf866afe/public_url",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 lg:px-12 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Certifications
          </h2>
          <p className="text-muted-foreground">Industry-recognized credentials and achievements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-primary animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge Image */}
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32 rounded-full bg-muted/50 p-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-center font-semibold text-foreground text-sm mb-3 leading-tight min-h-[2.5rem]">
                {cert.title}
              </h3>

              {/* View Badge Link */}
              <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Badge</span>
                <ExternalLink size={16} />
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </a>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground mt-8">
          Click any certification to view the full credential on Credly
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
