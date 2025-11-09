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
              AMUSE is an AR/VR museum experience platform enabling museums to digitize artifacts and allow users to explore immersive virtual exhibits.
            </p>
          </section>

          {/* Project Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
            <p className="text-foreground/80 leading-relaxed">
              AMUSE supports artifact uploads, 3D visualization, AR overlays, and VR museum galleries accessible remotely via headset or browser.
            </p>
          </section>

          {/* Company Mission */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Company Mission</h2>
            <p className="text-foreground/80 leading-relaxed">
              To make cultural heritage accessible to anyone, anywhere through immersive AR and VR experiences.
            </p>
          </section>

          {/* Problem Statement */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Problem Statement</h2>
            <p className="text-foreground/80 leading-relaxed">
              Museum access is limited, exhibits are static, and traditional display formats lack engagement and personalization.
            </p>
          </section>

          {/* Ideation Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Ideation Overview</h2>
            <p className="text-foreground/80 leading-relaxed">
              Idea emerged from seeing museum visitors struggle with context depth and wanting remote access for small/local museums.
            </p>
          </section>

          {/* Stakeholders */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Stakeholders</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground text-lg mb-3">Who did you collaborate with:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {["Museum curators", "3D modelers", "AR/VR engineers", "UX designers", "Educational institutions"].map((stakeholder) => (
                  <div key={stakeholder} className="text-foreground/80">• {stakeholder}</div>
                ))}
              </div>
            </div>
          </section>

          {/* Scope */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Scope</h2>
            <p className="text-foreground/80 leading-relaxed">
              Ran curator discovery calls + tested artifact scanning with 3D modelers; built prototype for VR gallery navigation and AR item placement.
            </p>
          </section>

          {/* Target Customer */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Target Customer</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
              <li>Museum visitors (remote + on-site)</li>
              <li>Museum staff/curators</li>
              <li>Schools seeking virtual field trips</li>
            </ul>
          </section>

          {/* Customer Personas */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Personas</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground text-lg mb-2">Customer Persona 1</h4>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Remote museum visitor</strong><br/>
                  Lacks physical museum access but seeks rich cultural exploration.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground text-lg mb-2">Customer Persona 2</h4>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Curator</strong><br/>
                  Wants to publish artifacts digitally quickly and maintain storytelling quality.
                </p>
              </div>
            </div>
          </section>

          {/* Customer Segmentation */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Segmentation (Prioritized Segment)</h2>
            <p className="text-foreground/80 leading-relaxed">
              Curators digitizing artifacts for remote VR/AR consumption.
            </p>
          </section>

          {/* Customer Pain Point */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Pain Point (Prioritized)</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80">
                Physical exhibit space limitations + inability to digitally scale artifacts globally.
              </p>
            </div>
          </section>

          {/* Prioritized Solutions */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Prioritized Solutions</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80">
                VR museum environment and AR artifact placement to maximize access and engagement.
              </p>
            </div>
          </section>

          {/* MVP Development */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Develop MVP</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground text-lg mb-3">MVP Features:</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Artifact upload</li>
                <li>VR gallery</li>
                <li>Basic AR projection</li>
                <li>Curator dashboard</li>
              </ul>
            </div>
          </section>

          {/* North Star Metric */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">North Star Metric</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80 leading-relaxed">
                <strong>Avg minutes spent per artifact inside VR experience.</strong>
              </p>
            </div>
          </section>

          {/* User Stories */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">User Stories & Acceptance Criteria</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80">
                <strong>As a remote visitor,</strong> I want to explore artifacts in VR so I can learn without physically visiting a museum.
              </p>
            </div>
          </section>

          {/* Launch Strategy */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Launch</h2>
            <p className="text-foreground/80 leading-relaxed">
              Initial launch as pilot with 2 small museum partners and 1 university program.
            </p>
          </section>

          {/* Results & Impact */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Result & Impact</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80">
                Visitors spent <strong>2.4x longer</strong> exploring artifacts in VR compared to static web exhibits.
              </p>
            </div>
          </section>

          {/* Customer Feedback */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Feedback & Iterations</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground text-lg mb-3">Requests:</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Multi-language voiceover support</li>
                <li>Multi-user VR rooms</li>
                <li>Curated themed collections</li>
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
