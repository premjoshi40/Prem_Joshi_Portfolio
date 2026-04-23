import { useState } from "react";
import awsMlEngineer from "@/assets/aws-ml-engineer.png";
import awsSolutionsArchitect from "@/assets/aws-solutions-architect.png";
import awsCloudPractitioner from "@/assets/aws-cloud-practitioner.png";
import psm1 from "@/assets/psm-1.png";
import googleLogo from "@/assets/google-logo.webp";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";

type SubBadge = {
  title: string;
  credentialId: string;
  url: string;
};

type Certification = {
  title: string;
  image: string;
  issued: string;
  credentialId: string;
  url: string;
  badges?: SubBadge[];
};

const certifications: Certification[] = [
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
  {
    title: "Create Generative AI Apps on Google Cloud",
    image: googleLogo,
    issued: "2026",
    credentialId: "skills.google/22475694",
    url: "https://www.skills.google/public_profiles/2a24faff-2e80-4fba-9f08-18b2403b80a0/badges/22475694",
  },
  {
    title: "Machine Learning Operations (MLOps) for Generative AI",
    image: googleLogo,
    issued: "2026",
    credentialId: "skills.google/22294964",
    url: "https://www.skills.google/public_profiles/2a24faff-2e80-4fba-9f08-18b2403b80a0/badges/22294964",
  },
  {
    title: "Architecting an AI Inference Stack",
    image: googleLogo,
    issued: "2026",
    credentialId: "skills.google/22294583",
    url: "https://www.skills.google/public_profiles/2a24faff-2e80-4fba-9f08-18b2403b80a0/badges/22294583",
  },
  {
    title: "How to Use TPUs for Inference",
    image: googleLogo,
    issued: "2026",
    credentialId: "skills.google/22294306",
    url: "https://www.skills.google/public_profiles/2a24faff-2e80-4fba-9f08-18b2403b80a0/badges/22294306",
  },
  {
    title: "Google Cloud Digital Leader",
    image: googleLogo,
    issued: "2026",
    credentialId: "skills.google/paths/9",
    url: "https://www.skills.google/paths/9",
    badges: [
      {
        title: "Digital Leader Badge – 22418133",
        credentialId: "skills.google/22418133",
        url: "https://www.skills.google/public_profiles/2a24faff-2e80-4fba-9f08-18b2403b80a0/badges/22418133",
      },
      {
        title: "Digital Leader Badge – 22419733",
        credentialId: "skills.google/22419733",
        url: "https://www.skills.google/public_profiles/2a24faff-2e80-4fba-9f08-18b2403b80a0/badges/22419733",
      },
      {
        title: "Digital Leader Badge – 22420419",
        credentialId: "skills.google/22420419",
        url: "https://www.skills.google/public_profiles/2a24faff-2e80-4fba-9f08-18b2403b80a0/badges/22420419",
      },
      {
        title: "Digital Leader Badge – 22420682",
        credentialId: "skills.google/22420682",
        url: "https://www.skills.google/public_profiles/2a24faff-2e80-4fba-9f08-18b2403b80a0/badges/22420682",
      },
      {
        title: "Digital Leader Badge – 22420870",
        credentialId: "skills.google/22420870",
        url: "https://www.skills.google/public_profiles/2a24faff-2e80-4fba-9f08-18b2403b80a0/badges/22420870",
      },
      {
        title: "Digital Leader Badge – 22420991",
        credentialId: "skills.google/22420991",
        url: "https://www.skills.google/public_profiles/2a24faff-2e80-4fba-9f08-18b2403b80a0/badges/22420991",
      },
    ],
  },
];

const CertificationCard = ({ cert }: { cert: Certification }) => {
  const [open, setOpen] = useState(false);
  const hasBadges = !!cert.badges?.length;

  return (
    <div
      className={`group rounded-2xl bg-card border border-border hover:border-[hsl(var(--orange)/0.6)] hover:shadow-[0_18px_40px_-15px_hsl(var(--orange)/0.4)] transition-all duration-500 ${
        !hasBadges ? "hover:-translate-y-1" : ""
      }`}
    >
      <div className="flex items-center gap-5 p-5">
        <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-muted/50 p-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base lg:text-lg font-bold text-foreground leading-snug group-hover:text-[hsl(var(--orange))] transition-colors">
            {cert.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Issued {cert.issued} · Credential ID:{" "}
            <span className="font-mono text-xs">{cert.credentialId.slice(0, 12)}…</span>
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-[hsl(var(--orange))] transition-colors"
            >
              Verify
              <ArrowUpRight size={14} />
            </a>
            {hasBadges && (
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-[hsl(var(--orange))] transition-colors"
                aria-expanded={open}
              >
                {open ? "Hide badges" : `View ${cert.badges!.length} badges`}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {hasBadges && open && (
        <div className="px-5 pb-5 pt-1 border-t border-border/60 mt-1">
          <ul className="grid gap-2 mt-4 sm:grid-cols-2">
            {cert.badges!.map((badge) => (
              <li key={badge.credentialId}>
                <a
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border/60 hover:border-[hsl(var(--orange)/0.6)] hover:bg-muted/70 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-background p-1.5 flex items-center justify-center">
                    <img
                      src={googleLogo}
                      alt={badge.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {badge.title}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono truncate">
                      {badge.credentialId}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-foreground flex-shrink-0"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-6 lg:px-16 bg-background">
    <div className="container mx-auto max-w-5xl">
      <RevealHeading title="Certifications" />

      <div className="space-y-4">
        {certifications.map((cert, idx) => (
          <Reveal key={cert.title} animation="fade-in-left" delay={idx * 100}>
            <CertificationCard cert={cert} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
