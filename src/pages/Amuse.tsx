import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Amuse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-6xl">🎨</span>
              <h1 className="text-5xl font-bold text-foreground">AMUSE</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Augmented & Virtual Reality Museum Experience
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://marvelapp.com/prototype/5fhb9ah/screen/83226649"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View Marvel Prototype
                <ExternalLink size={20} />
              </a>
              <a
                href="https://premjoshi40.github.io/Amuse/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View Live Demo
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Vision Statement */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Vision Statement</h2>
            <p className="text-foreground/80 leading-relaxed">
              To revolutionize how people experience culture by merging art, history, and technology — enabling anyone, anywhere, to step inside the world's greatest museums through immersive AR and VR experiences.
            </p>
          </section>

          {/* Pain Points */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Pain Points</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">For Visitors</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Limited access to museums due to location, cost, or mobility",
                    "Static, text-heavy exhibits that lack interactivity and engagement",
                    "Minimal context or storytelling around artifacts"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">For Museums</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Physical space constraints restrict the number of displayed artifacts",
                    "High costs of creating and maintaining digital or interactive experiences",
                    "Difficulty attracting younger, tech-savvy audiences"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">For Educators/Institutions</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Lack of affordable tools for virtual field trips or interactive history lessons",
                    "Limited ways to make art and cultural studies engaging remotely"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Overview</h2>
            <p className="text-foreground/80 leading-relaxed">
              AMUSE is an Augmented and Virtual Reality platform designed to transform traditional museum experiences into interactive, immersive journeys. It empowers museums to digitally scan artifacts and create virtual exhibits accessible globally through AR and VR devices, bringing history and art closer to everyone.
            </p>
          </section>

          {/* Purpose / Problem Statement */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Purpose / Problem Statement</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground/90 mb-2">Problem</h3>
                  <p className="text-foreground/80">
                    Museums struggle with accessibility, engagement, and preservation challenges in the digital age. Visitors increasingly expect personalized, immersive experiences rather than static displays.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground/90 mb-2">Goal</h3>
                  <p className="text-foreground/80">
                    Create a cross-platform AR/VR museum platform that bridges the physical and digital worlds — allowing users to explore artifacts interactively and learn through immersive storytelling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Objectives & Success Metrics */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Objectives & Success Metrics</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              {[
                "Expand accessibility for remote users → ≥25% of total exhibit visits from remote users",
                "Increase visitor engagement → +30% increase in session time vs. static exhibits",
                "Reduce digital curation overhead → 40% faster artifact publishing time for curators",
                "Drive educational adoption → ≥80% positive feedback from teachers/students in pilot programs"
              ].map((metric, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground/80">{metric}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Target Users & Use Cases */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Target Users & Use Cases</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Primary Users</h3>
                <div className="bg-card border border-border rounded-lg p-6">
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Museum Visitors (on-site + virtual)</li>
                    <li>• Museum Curators & Administrators</li>
                    <li>• Educators & Students</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Use Cases</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  {[
                    { title: "Virtual Exploration", desc: "Users explore museums in VR, moving through realistic 3D galleries" },
                    { title: "On-site Augmentation", desc: "Visitors scan artifacts with their phone to unlock 3D overlays or behind-the-scenes visuals" },
                    { title: "Curator Toolset", desc: "Museums upload and manage digital artifacts, metadata, and exhibits" },
                    { title: "Educational Integration", desc: "Schools use AMUSE for virtual field trips or interactive cultural lessons" }
                  ].map((useCase, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-1">{index + 1}. {useCase.title}</h4>
                      <p className="text-foreground/70">{useCase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Core Features</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Artifact Digitization",
                  features: [
                    "Upload 3D scans or images of artifacts",
                    "Add metadata (title, history, cultural origin)",
                    "Organize exhibits by theme or timeline"
                  ]
                },
                {
                  title: "Virtual Museum Experience (VR)",
                  features: [
                    "Immersive 3D museum accessible via headset or desktop",
                    "Explore rooms, rotate artifacts, view details in context",
                    "Ambient spatial sound for realistic experience"
                  ]
                },
                {
                  title: "Augmented Reality (AR)",
                  features: [
                    "Mobile AR mode for projecting artifacts in physical spaces",
                    "Scan QR or marker to view interactive 3D models",
                    "Rotate, resize, and inspect artifacts in detail"
                  ]
                },
                {
                  title: "Curator Dashboard",
                  features: [
                    "Manage artifact uploads, exhibit organization, and visitor analytics",
                    "Edit metadata and add educational materials"
                  ]
                }
              ].map((feature, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground/90">{feature.title}</h3>
                  <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                        <p className="text-foreground/80">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Technical Overview</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Frontend (AR/VR)", value: "WebXR, Unity, or Unreal Engine for cross-device compatibility" },
                { label: "Backend", value: "Firebase / AWS backend for data hosting and artifact storage" },
                { label: "Database", value: "Firestore or DynamoDB for exhibit metadata" },
                { label: "3D Processing", value: "Integration with photogrammetry tools for model upload" },
                { label: "Supported Devices", value: "Oculus, Meta Quest, Apple Vision Pro, desktop, mobile (AR mode)" }
              ].map((tech) => (
                <div key={tech.label} className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-semibold text-foreground text-lg mb-2">{tech.label}</h4>
                  <p className="text-foreground/70">{tech.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* User Experience Flow */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">User Experience (UX) Flow</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              {[
                "Curator uploads artifact scans and enters metadata",
                "AMUSE creates a virtual exhibit automatically",
                "Visitor explores the exhibit via VR headset or browser",
                "Mobile visitors scan QR codes for AR overlays",
                "Analytics dashboard tracks engagement, popular artifacts, and session duration"
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-foreground/80 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* MVP Scope */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">MVP Scope</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">In MVP</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Artifact upload & 3D rendering",
                    "VR exploration environment",
                    "AR projection for mobile",
                    "Basic curator dashboard"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Out of Scope (Future Enhancements)</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-2">
                  {[
                    "AI-generated artifact descriptions and narrations",
                    "Multilingual audio guides",
                    "AI-driven personalized tours",
                    "Adaptive storytelling and educational recommendations"
                  ].map((item, index) => (
                    <p key={index} className="text-foreground/70">• {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Dependencies & Risks */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Dependencies & Risks</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              {[
                { risk: "Inconsistent 3D model quality", mitigation: "Provide scanning guidelines and templates" },
                { risk: "Device performance variation", mitigation: "Optimize rendering with adaptive detail levels" },
                { risk: "Limited AR/VR adoption", mitigation: "Offer browser-based WebXR fallback" },
                { risk: "Data ownership/privacy", mitigation: "Implement secure museum-level access controls" }
              ].map((item, index) => (
                <div key={index}>
                  <p className="text-foreground/80"><span className="font-semibold">Risk:</span> {item.risk}</p>
                  <p className="text-foreground/70 ml-4"><span className="font-semibold">Mitigation:</span> {item.mitigation}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Business Model & Impact */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Business Model & Impact</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Revenue Model</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Freemium model for small institutions",
                    "Subscription plans for premium features (multi-exhibit hosting, analytics)",
                    "Partnerships with schools and cultural organizations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Impact</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Expands global reach of museums",
                    "Preserves cultural heritage digitally",
                    "Encourages cross-generational learning and curiosity"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Vision Roadmap */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Vision Roadmap</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              {[
                { phase: "Phase 1 (MVP)", desc: "Core AR/VR experience, curator dashboard" },
                { phase: "Phase 2", desc: "Multi-user VR tours, advanced analytics" },
                { phase: "Phase 3 (Future Enhancements)", desc: "AI narrations, multilingual descriptions, personalization engine" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold text-foreground">{item.phase}</h4>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Long-Term Vision */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Long-Term Vision</h2>
            <p className="text-foreground/80 leading-relaxed">
              AMUSE aspires to become the global platform for immersive cultural exploration — digitizing history, preserving heritage, and enabling anyone to experience the world's museums without borders.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Amuse;
