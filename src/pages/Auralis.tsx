import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Auralis = () => {
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
              <span className="text-6xl">💬</span>
              <h1 className="text-5xl font-bold text-foreground">Auralis</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Intelligent AI Chatbot Platform
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://premjoshi40.github.io/Auralis/"
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
              Auralis is a responsive web application that leverages AI to store, search, and retrieve documents using natural language.
            </p>
          </section>

          {/* Project Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
            <p className="text-foreground/80 leading-relaxed">
              Auralis enables users to upload PDFs, images, and docs, then retrieve them conversationally through an AI chatbot interface.
            </p>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h4 className="font-semibold text-foreground">Two distinct access modes:</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Enterprise Mode (business documentation)</li>
                <li>Household Mode (personal/home documentation)</li>
              </ul>
            </div>
          </section>

          {/* Company Mission */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Company Mission</h2>
            <p className="text-foreground/80 leading-relaxed">
              To redefine how people interact with information — making document retrieval frictionless and conversational.
            </p>
          </section>

          {/* Problem Statement */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Problem Statement</h2>
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                People waste significant time searching for documents. Traditional file systems rely on folder naming & memory recall.
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>For teams — enterprise knowledge is fragmented across tools.</li>
                <li>For individuals — important documents are scattered, forgotten, or unsearchable.</li>
              </ul>
            </div>
          </section>

          {/* Ideation & Stakeholders */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Ideation Overview</h2>
            <p className="text-foreground/80 leading-relaxed">
              Idea originated from the insight that text extraction + semantic search can allow users to query their documents like they query humans.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground text-lg mb-3">Stakeholders</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {["ML Engineers", "Data Scientists", "Design/UX Team", "Enterprise pilot customers", "Family users (alpha test group)"].map((stakeholder) => (
                  <div key={stakeholder} className="text-foreground/80">• {stakeholder}</div>
                ))}
              </div>
            </div>
          </section>

          {/* Scope */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Scope</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Conducted discovery calls with 8 enterprise knowledge workers</li>
              <li>Ran 12 user interviews with household users</li>
              <li>Built functional prototype covering upload → embedding → natural language retrieval</li>
            </ul>
          </section>

          {/* Target Customer & Personas */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Target Customer</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
              <li>Enterprise teams (HR, finance, legal, ops)</li>
              <li>Families / individuals with scattered personal documents</li>
            </ul>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground text-lg mb-2">Customer Persona 1 (Enterprise)</h4>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Name:</strong> "Tools-first Knowledge Worker – Ops Manager"<br/>
                  Uses multiple systems, struggles to find the right file at the right time, high frequency document search.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground text-lg mb-2">Customer Persona 2 (Household)</h4>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Name:</strong> "Organized Parent – Life Admin"<br/>
                  Stores bills, receipts, warranties, IDs, and periodically needs to retrieve them quickly.
                </p>
              </div>
            </div>
          </section>

          {/* Customer Segmentation & Pain Points */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Segmentation (Prioritized Segment)</h2>
            <p className="text-foreground/80 leading-relaxed">
              Enterprise knowledge workers → high–frequency searchers → HR / compliance / finance analysts.
            </p>
            
            <div className="bg-card border border-border rounded-lg p-6 mt-4">
              <h4 className="font-semibold text-foreground text-lg mb-3">Customer Pain Point (Prioritized)</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Searching for the right document during compliance / reporting cycles is slow & stressful.</li>
                <li>Existing SharePoint / drive search requires exact terms — context queries don't work.</li>
              </ul>
            </div>
          </section>

          {/* Prioritized Solutions */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Prioritized Solutions</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              Use semantic search + embeddings to allow queries like:
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80 italic">"show me all 2022 invoice PDFs with vendor &gt; $10K"</p>
              <p className="text-foreground/70 mt-3">
                Solution prioritized because: highest frequency + highest willingness to pay + recurring business value.
              </p>
            </div>
          </section>

          {/* MVP Development */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Develop MVP</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground text-lg mb-3">MVP Features:</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Document upload</li>
                <li>Auto indexing + embeddings</li>
                <li>Natural language chat retrieval interface</li>
                <li>Basic tags + metadata view</li>
              </ul>
            </div>
          </section>

          {/* North Star Metric */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">North Star Metric</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground/80 leading-relaxed">
                <strong>Search success rate %</strong> → % of queries that surface the correct document within 1 response.
              </p>
            </div>
          </section>

          {/* User Stories */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">User Stories & Acceptance Criteria</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground/80 mb-2">
                  <strong>As a user,</strong> I want to upload a doc so I can retrieve it later.
                </p>
                <p className="text-foreground/70 text-sm">
                  Acceptance: file uploaded → processed → appears in search.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground/80 mb-2">
                  <strong>As a user,</strong> I want to ask natural language questions so I can find docs by meaning not filename.
                </p>
                <p className="text-foreground/70 text-sm">
                  Acceptance: query returns correct doc or closest match.
                </p>
              </div>
            </div>
          </section>

          {/* Launch Strategy */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Launch</h2>
            <div className="space-y-4">
              <p className="text-foreground/80">
                <strong>First launch:</strong> Enterprise pilot users
              </p>
              <p className="text-foreground/80">
                <strong>Population targeted:</strong> 50 enterprise beta testers across 2 companies
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground text-lg mb-3">Promotion</h4>
                <p className="text-foreground/80">
                  Internal enablement workshop + guided onboarding + internal comms channel
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground text-lg mb-3">Rollout Plan</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Phase 1 → enterprise</li>
                  <li>Phase 2 → household web beta</li>
                </ul>
                <p className="text-foreground/70 mt-3">
                  <strong>Rollback:</strong> temporary disable semantic retrieval but keep doc storage live.
                </p>
              </div>
            </div>
          </section>

          {/* Results & Impact */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Result & Impact</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground text-lg mb-2">65%</h4>
                <p className="text-foreground/70">faster document retrieval in pilot vs. file search baseline</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground text-lg mb-2">80%</h4>
                <p className="text-foreground/70">user satisfaction based on NPS-style survey</p>
              </div>
            </div>
          </section>

          {/* Customer Feedback */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Customer Feedback & Iterations</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground text-lg mb-3">Users asked for:</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>folder view hybrid mode</li>
                <li>summaries of documents without opening them</li>
                <li>ability to export results</li>
              </ul>
              <p className="text-foreground/70 mt-3">→ added to roadmap for v2.</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auralis;
