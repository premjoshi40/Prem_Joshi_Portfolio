import awsMlEngineer from "@/assets/aws-ml-engineer.png";
import awsSolutionsArchitect from "@/assets/aws-solutions-architect.png";
import awsCloudPractitioner from "@/assets/aws-cloud-practitioner.png";
import psm1 from "@/assets/psm-1.png";
import { ArrowUpRight } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Machine Learning Engineer – Associate",
    image: awsMlEngineer,
    issued: "2024",
    credentialId: "c87050e6-0c47-44a0-bc53-e4119d582550",
    url: "https://www.credly.com/badges/c87050e6-0c47-44a0-bc53-e4119d582550/public_url",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    image: awsSolutionsArchitect,
    issued: "2023",
    credentialId: "c7603ea5-ec25-4165-90f0-3c1b8982a0bd",
    url: "https://www.credly.com/badges/c7603ea5-ec25-4165-90f0-3c1b8982a0bd/public_url",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    image: awsCloudPractitioner,
    issued: "2022",
    credentialId: "c46d4343-f34c-46b6-9c9a-f925d47ddb4e",
    url: "https://www.credly.com/badges/c46d4343-f34c-46b6-9c9a-f925d47ddb4e/public_url",
  },
  {
    title: "Professional Scrum Master™ I (PSM I)",
    image: psm1,
    issued: "2022",
    credentialId: "47a3eaa9-ffea-4535-bb32-ac32bf866afe",
    url: "https://www.credly.com/badges/47a3eaa9-ffea-4535-bb32-ac32bf866afe/public_url",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-6 lg:px-16 bg-background">
    <div className="container mx-auto max-w-5xl">
      <div className="inline-flex items-center gap-3 mb-10">
        <span className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-foreground" />
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Certifications</h2>
      </div>

      <div className="space-y-4">
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-5 rounded-2xl bg-card border border-border hover:border-foreground hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] transition-all"
          >
            <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-muted/50 p-2 flex items-center justify-center">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base lg:text-lg font-bold text-foreground leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Issued {cert.issued} · Credential ID:{" "}
                <span className="font-mono text-xs">{cert.credentialId.slice(0, 12)}…</span>
              </p>
              <span className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-foreground">
                Verify
                <ArrowUpRight
                  size={14}
                  className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
