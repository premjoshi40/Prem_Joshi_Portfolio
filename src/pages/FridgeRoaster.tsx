import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const FridgeRoaster = () => {
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
              <span className="text-6xl">🧊</span>
              <h1 className="text-5xl font-bold text-foreground">Fridge Analyzer</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Smart AI Feedback for Fridge Organization — Reduce waste, maximize freshness
            </p>
            <a
              href="https://premjoshi40.github.io/Fridge_Analyzer/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Live Demo
              <ExternalLink size={20} />
            </a>
          </div>

          {/* Background */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Background</h2>
            <p className="text-foreground/80 leading-relaxed">
              Fridge Analyzer is an AI-powered application that analyzes fridge photos and gives feedback on organization, storage optimization, and food freshness.
            </p>
          </section>

          {/* Project Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
            <p className="text-foreground/80 leading-relaxed">
              Users upload 3+ images of their fridge from different angles → the system uses computer vision to detect items and provide actionable recommendations to reduce waste and improve storage efficiency.
            </p>
          </section>

          {/* Company Mission */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Company Mission</h2>
            <p className="text-foreground/80 leading-relaxed">
              To help households minimize food waste, save money, and maintain better food preservation through smarter storage habits.
            </p>
          </section>

          {/* Problem Statement */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Problem Statement</h2>
            <p className="text-foreground/80 leading-relaxed">
              People forget what's inside their fridge, store items inefficiently, and often throw away expired food — not because they intend to waste, but because there is no easy way to visualize usage patterns or organization quality.
            </p>
          </section>

          {/* Ideation Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Ideation Overview</h2>
            <p className="text-foreground/80 leading-relaxed">
              Concept emerged from observing households over-buy food and misplace critical items (like dairy in the door) causing early spoilage — a problem AI can help quantify.
            </p>
          </section>

          {/* Stakeholders */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Stakeholders</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground text-lg mb-3">Who did you collaborate with:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {["Computer vision engineers", "Backend engineer", "UX designer", "Sustainability-focused testers"].map((stakeholder) => (
                  <div key={stakeholder} className="text-foreground/80">• {stakeholder}</div>
                ))}
              </div>
            </div>
          </section>

          {/* Scope */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Scope</h2>
            <p className="text-foreground/80 leading-relaxed">
              Interviewed 6 family households + 4 roommates living in shared apartments; built prototype for photo upload + AI categorization + suggestion engine.
            </p>
          </section>

          {/* Target Customer */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Target Customer</h2>
            <p className="text-foreground/80 leading-relaxed">
              Primary: households / individuals who regularly cook and store weekly groceries.
            </p>
          </section>

          {/* Customer Personas */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Personas</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground text-lg mb-2">Customer Persona 1</h4>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Busy working parent</strong><br/>
                  Needs to keep track of items quickly to reduce waste and save on grocery costs.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground text-lg mb-2">Customer Persona 2</h4>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Roommate in shared flat</strong><br/>
                  Needs to keep shared items visible to avoid duplication and confusion.
                </p>
              </div>
            </div>
          </section>

          {/* Customer Segmentation */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Segmentation (Prioritized Segment)</h2>
            <p className="text-foreground/80 leading-relaxed">
              Families who do weekly grocery shopping and waste the most per fridge cycle.
            </p>
          </section>

          {/* Customer Pain Point */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Pain Point (Prioritized)</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80">
                Forgotten items + poor placement (wrong storage zones) leading to spoilage + wasted money.
              </p>
            </div>
          </section>

          {/* Prioritized Solutions */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Prioritized Solutions</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80">
                Automated fridge audit → upload photos → AI highlights improvement areas + sends optimized placement suggestions.
              </p>
            </div>
          </section>

          {/* MVP Development */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Develop MVP</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground text-lg mb-3">MVP Features:</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Photo upload feature</li>
                <li>Item detection</li>
                <li>Fridge efficiency score</li>
                <li>Improvement suggestions</li>
              </ul>
            </div>
          </section>

          {/* North Star Metric */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">North Star Metric</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80 leading-relaxed">
                <strong>% reduction in wasted/expired items per household per month.</strong>
              </p>
            </div>
          </section>

          {/* User Stories */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">User Stories & Acceptance Criteria</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80">
                <strong>As a user,</strong> I want to upload photos and get clear suggestions so I can rearrange my fridge to extend freshness and reduce waste.
              </p>
            </div>
          </section>

          {/* Launch Strategy */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Launch</h2>
            <p className="text-foreground/80 leading-relaxed">
              Soft launched to 5 households for alpha testing.
            </p>
          </section>

          {/* Results & Impact */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Result & Impact</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80">
                Early users reported <strong>~22% reduction</strong> in wasted groceries in first 4 weeks.
              </p>
            </div>
          </section>

          {/* Customer Feedback */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Feedback & Iterations</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground text-lg mb-3">Users requested:</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Weekly "re-audit" reminders</li>
                <li>AI recipe ideas based on what's in the fridge</li>
                <li>Multi-user dashboard to separate shared items</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FridgeRoaster;
