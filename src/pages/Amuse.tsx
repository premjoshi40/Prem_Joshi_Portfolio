import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";
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

          {/* Background */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Background</h2>
            <p className="text-foreground/80 leading-relaxed">
              AMUSE is an AR/VR museum augmentation platform that enhances on-site museum visits with immersive digital experiences. Visitors physically walk through the museum and tap NFC tags or scan QR codes placed next to artifacts to instantly unlock AR overlays, 3D models, and contextual storytelling.
            </p>
          </section>

          {/* Project Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
            <p className="text-foreground/80 leading-relaxed">
              Museums place NFC/QR markers near artifacts. Visitors tap or scan using their phone → AMUSE triggers AR models, VR reconstructions, or narrated interactive content relevant to that artifact. Curators upload artifact data, 3D scans, historical context, and metadata — AMUSE manages delivery in real time.
            </p>
          </section>

          {/* Company Mission */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Company Mission</h2>
            <p className="text-foreground/80 leading-relaxed">
              To transform physical museums into hybrid immersive experiences by combining real artifacts with interactive digital layers — making cultural learning deeper, more contextual, and accessible to every visitor.
            </p>
          </section>

          {/* Problem Statement */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Problem Statement</h2>
            <p className="text-foreground/80 leading-relaxed">
              Museum experiences are passive, text-heavy, and often lack emotional engagement. Most museums rely on small labels that fail to communicate historical depth. Also, more than half of collections are never exhibited due to physical constraints.
            </p>
          </section>

          {/* Ideation Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Ideation Overview</h2>
            <p className="text-foreground/80 leading-relaxed">
              We noticed visitors already use their phones inside museums. Instead of replacing the visit with VR, AMUSE augments the physical visit by using NFC/QR as the trigger for immersive information exactly where the artifact is standing.
            </p>
          </section>

          {/* Stakeholders */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Stakeholders</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground text-lg mb-3">Who did you collaborate with:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {["Museum curators", "XR engineers", "Mobile developers", "3D scanning specialists", "Educational program leads", "UX designers"].map((stakeholder) => (
                  <div key={stakeholder} className="text-foreground/80">• {stakeholder}</div>
                ))}
              </div>
            </div>
          </section>

          {/* Scope */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Scope</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Interviewed 6 curators (artifact digitization workflow)</li>
              <li>Interviewed 12 museum visitors (engagement behaviors)</li>
              <li>Collaborated with 3 XR engineers to integrate AR/VR pipelines</li>
              <li>Developed POC for NFC/QR artifact-triggered AR and VR scenes</li>
            </ul>
          </section>

          {/* Target Customer */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Target Customer</h2>
            <p className="text-foreground/80 leading-relaxed">
              Museums and educational exhibit institutions who want to modernize without restructuring their physical galleries.
            </p>
          </section>

          {/* Customer Personas */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Personas</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground text-lg mb-2">Customer Persona 1</h4>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>On-site visitor</strong><br/>
                  Wants deeper context and immersive explanation while standing in front of an artifact.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground text-lg mb-2">Customer Persona 2</h4>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Curator</strong><br/>
                  Wants to extend storytelling without installing expensive digital screens.
                </p>
              </div>
            </div>
          </section>

          {/* Customer Segmentation */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Segmentation (Prioritized Segment)</h2>
            <p className="text-foreground/80 leading-relaxed">
              Mid-sized museums with high visitor traffic but low digital modernization infrastructure.
            </p>
          </section>

          {/* Customer Pain Point */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Pain Point (Prioritized)</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80">
                Physical signage is static and expensive to redesign & reprint. Digital screens cost 10× more than NFC/QR installations.
              </p>
            </div>
          </section>

          {/* Prioritized Solutions */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Prioritized Solutions</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80">
                Solution prioritized = NFC or QR → mobile AR/VR experience. Instant-trigger, no friction.
              </p>
            </div>
          </section>

          {/* MVP Development */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Develop MVP</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground text-lg mb-3">MVP Features:</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>NFC tag tap → artifact AR model + fact sheet</li>
                <li>QR scan fallback to AR/VR</li>
                <li>Simple VR context scene</li>
                <li>Curator dashboard for uploading images, models, metadata</li>
              </ul>
            </div>
          </section>

          {/* North Star Metric */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">North Star Metric</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80 leading-relaxed">
                <strong>Avg time spent per "artifact interaction" session.</strong>
              </p>
            </div>
          </section>

          {/* User Stories */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">User Stories & Acceptance Criteria</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80 mb-3">
                <strong>As a museum visitor,</strong> I want to tap an NFC tag or scan a QR code so I can instantly get immersive, contextual information about the artifact I'm looking at.
              </p>
              <p className="text-foreground/80 text-sm">
                <strong>Acceptance:</strong> AR loads in &lt;2 seconds on modern mobile browsers.
              </p>
            </div>
          </section>

          {/* Launch Strategy */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Launch</h2>
            <p className="text-foreground/80 leading-relaxed">
              Pilot launched with 1 local history museum + 1 university exhibition space.
            </p>
          </section>

          {/* Results & Impact */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Result & Impact</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Visitors spent <strong>3× longer</strong> interacting with artifacts vs. traditional label reading.</li>
                <li>Curators published digital exhibits <strong>5× faster</strong> vs. building physical interactive elements.</li>
              </ul>
            </div>
          </section>

          {/* Customer Feedback */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Feedback & Iterations</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground text-lg mb-3">Feedback requested:</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Multi-language mode</li>
                <li>Save artifacts to personal "Visited Collection"</li>
                <li>Audio narration + guided thematic tours</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Amuse;
