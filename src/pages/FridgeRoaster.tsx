import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
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
              href="https://premjoshi40.github.io/Fridge_Roast/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              View Live Demo
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Vision Statement */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Vision Statement</h2>
            <p className="text-foreground/80 leading-relaxed">
              To empower every household to build smarter, more sustainable food habits by using AI to visualize, 
              optimize, and organize fridge storage — reducing waste and maximizing freshness.
            </p>
          </section>

          {/* Pain Points */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Pain Points</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">For Everyday Users</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Fridges often become cluttered and disorganized, leading to forgotten food and unnecessary waste",
                    "Users struggle to track food freshness and optimal storage conditions",
                    "There's no easy way to visualize \"how efficient\" a fridge layout actually is"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">For Families & Shared Spaces</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Misplaced or duplicated items waste space and money",
                    "Hard to manage shared inventory or meal planning efficiently"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">For Sustainability</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Up to 30–40% of household food goes to waste annually (USDA data)",
                    "Lack of visual awareness contributes to poor fridge organization and waste"
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
              Fridge Analyzer is an AI-powered web and mobile app that provides personalized feedback on how users 
              organize their refrigerators. By uploading 3 or more photos from different angles, the system analyzes 
              food placement, category grouping, expiry patterns, airflow zones, and storage optimization to deliver 
              visual insights and recommendations.
            </p>
          </section>

          {/* Purpose / Problem Statement */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Purpose / Problem Statement</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Problem</h3>
                <p className="text-foreground/80">
                  People often waste food and energy because their fridges are poorly organized — without realizing it. 
                  There's no tool that visually audits a fridge and suggests improvements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Goal</h3>
                <p className="text-foreground/80">
                  Leverage computer vision + generative AI to help users organize their refrigerators efficiently, 
                  reduce waste, and maintain food freshness — all from a few quick photos.
                </p>
              </div>
            </div>
          </section>

          {/* Objectives & Success Metrics */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Objectives & Success Metrics</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              {[
                "Improve fridge organization habits → ≥70% of users apply at least one suggestion within first week",
                "Reduce food waste → 20% reduction in weekly food waste (via self-reported or logged data)",
                "Increase engagement → Average session time ≥5 minutes",
                "Retention → ≥50% of users return weekly for feedback or tips"
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
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Homeowners, renters, and families",
                    "Students and shared apartments",
                    "Health-conscious and sustainability-focused users"
                  ].map((user, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{user}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Use Cases</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Organization Feedback: Upload fridge photos → get analysis on category grouping, airflow, and storage efficiency",
                    "Waste Reduction Insights: AI flags foods at risk of spoilage or redundancy",
                    "Weekly Optimization: Get personalized layout suggestions for better space and freshness",
                    "Gamified Challenges: Compete for \"Fridge Efficiency Scores\" with friends or communities"
                  ].map((useCase, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{useCase}</p>
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
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Photo Upload & AI Analysis</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Upload minimum 3 photos from different angles",
                    "AI detects and classifies items (produce, dairy, meats, leftovers, beverages, condiments, etc.)",
                    "Identifies poor placement zones (e.g., dairy on fridge door, fruits near vent)"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Organization Score</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Generates a Fridge Efficiency Score based on cleanliness, item grouping, airflow, and space usage",
                    "Visual heatmap showing areas for improvement"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Personalized Recommendations</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Smart suggestions for rearranging items",
                    "Food freshness reminders",
                    "Tips to reduce energy consumption and spoilage"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Sustainability Dashboard</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Estimates potential waste reduction and savings",
                    "Visualizes weekly progress and impact (food saved, CO₂ reduced)"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Social & Gamified Experience (Future Scope)</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "\"Rate My Fridge\" challenge with friends",
                    "Leaderboards for most optimized fridges"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technical Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Technical Overview</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Frontend</h3>
                <p className="text-foreground/80">React (Web) + Flutter (Mobile) for smooth UI & cross-platform support</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Backend</h3>
                <p className="text-foreground/80">AWS Lambda / Firebase for scalable processing</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Database</h3>
                <p className="text-foreground/80">Firestore or DynamoDB for user data & analysis history</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">AI Model</h3>
                <p className="text-foreground/80">Custom computer vision model (YOLOv8 or similar) for object detection & placement analysis</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Generative AI</h3>
                <p className="text-foreground/80">GPT-4 or Claude for personalized recommendations & insights</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Storage</h3>
                <p className="text-foreground/80">S3 or Firebase Storage for photo uploads</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Integrations (Future)</h3>
                <p className="text-foreground/80">Smart fridge APIs, grocery apps, food-tracking databases</p>
              </div>
            </div>
          </section>

          {/* User Experience Flow */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">User Experience (UX) Flow</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              {[
                "User uploads 3+ fridge photos",
                "AI analyzes item placement, categories, and airflow zones",
                "System generates visual insights and improvement suggestions",
                "User applies recommended layout changes",
                "App tracks engagement, improvement, and waste reduction metrics over time"
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-foreground/80 mt-1">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* MVP Scope */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">MVP Scope</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Included in MVP</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Photo upload and AI image processing",
                    "Basic fridge organization scoring",
                    "Text-based feedback and visual heatmap",
                    "Profile and history tracking"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Future Enhancements (Post-MVP)</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Gamified fridge challenges",
                    "AI recipe recommendations using existing ingredients",
                    "Smart home integrations (IoT fridge sensors)",
                    "Community sharing and \"Before vs. After\" visual reports"
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

          {/* Dependencies & Risks */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Dependencies & Risks</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              {[
                "Inaccurate AI classification → Use labeled dataset and iterative model fine-tuning",
                "Privacy concerns with photo uploads → End-to-end encryption and local photo anonymization",
                "Low initial user engagement → Gamify experience and provide instant feedback loop",
                "Limited device support → Optimize compression and cloud inference to reduce latency"
              ].map((risk, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground/80">{risk}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Business Model & Impact */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Business Model & Impact</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Revenue Streams</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Freemium model (basic analysis free, advanced insights via subscription)",
                    "Partnership with food brands, meal kit services, and sustainability orgs",
                    "Ads for smart storage containers or eco-products"
                  ].map((stream, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{stream}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Impact</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  {[
                    "Helps households waste less food and money",
                    "Promotes sustainable consumption",
                    "Creates a playful, educational experience around home organization"
                  ].map((impact, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{impact}</p>
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
                "Phase 1 (MVP): Photo upload, AI analysis, feedback screen",
                "Phase 2: Scoring system, user dashboard, improvement tracking",
                "Phase 3 (Expansion): Social sharing, gamification, IoT integration",
                "Phase 4 (Future): Personalized AI meal planning + fridge automation insights"
              ].map((phase, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-foreground/80 mt-1">{phase}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Long-Term Vision */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Long-Term Vision</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              To make "Fridge Analyzer" the go-to app for food efficiency — transforming household organization 
              into a global movement for sustainability, freshness, and fun.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FridgeRoaster;
