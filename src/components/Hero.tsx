import premPhoto from "@/assets/prem-sunset-photo.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Hero = () => {

  return (
    <section id="home" className="pt-24 pb-16 px-6 lg:px-12 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start pt-12">
          {/* Left: Profile Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px]">
              <div className="w-full h-full rounded-full overflow-hidden shadow-xl">
                <img
                  src={premPhoto}
                  alt="Prem Joshi - Product Manager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Info Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-normal text-foreground/80 mb-2">Hello</h2>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
                I'm Prem Joshi
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  A Bit About Me
                </h2>
                
                <p className="text-base text-foreground/80 leading-relaxed max-w-xl">
                  Product Manager and builder with 6+ years of experience launching and scaling AI-driven, B2B SaaS, B2B2C, and cloud platform products. Passionate about solving hard problems, turning ideas into products that impact thousands of users, and driving measurable business outcomes. I thrive at the intersection of strategy and execution building at scale from concept to launch and beyond.
                </p>
                
                <div className="pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2">
                        <span>More About Me</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">More About Me</DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="h-[70vh] pr-4">
                        <div className="space-y-6 text-foreground/90">
                          <section>
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                              🧭 More About Me
                            </h3>
                            <div className="space-y-4 text-base leading-relaxed">
                              <p>
                                I'm Prem Joshi, a Product Manager and technologist passionate about building intelligent, scalable products that simplify complexity and deliver measurable impact. With over 6 years of experience spanning software engineering, consulting, and product management, I specialize in driving end-to-end product lifecycles — from discovery to launch to scale.
                              </p>
                              <p>
                                My foundation in electronics and telecommunications engineering sharpened my problem-solving mindset and love for systems thinking. I began my career as a software developer, building enterprise-grade applications using Java, Python, and cloud-native architectures - experience that now enables me to collaborate deeply with engineering teams while keeping a strong focus on user and business outcomes.
                              </p>
                              <p>
                                At EY (Ernst & Young), I lead product strategy for Risk GPT, an AI-powered risk intelligence platform that automated cybersecurity audit workflows across global regions. The product delivered a 70% efficiency gain, $8.5M+ annual profit uplift, and 99.99% uptime - proving the business value of automation and intelligent design at enterprise scale.
                              </p>
                              <p>
                                Outside of EY, I build products that explore how technology can enhance daily life - from Auralis, an AI chatbot that revolutionizes document retrieval using natural language, to AMUSE, an AR/VR museum experience platform that transforms how visitors interact with artifacts through immersive storytelling.
                              </p>
                              <p>
                                I'm driven by a simple belief: great products are where technology, empathy, and data converge to create real impact.
                              </p>
                            </div>
                          </section>

                          <section>
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                              ⚙️ Tech & Product Stack
                            </h3>
                            <div className="space-y-2 text-base">
                              <p><strong>Product:</strong> Strategy, Roadmapping, MVPs, A/B Testing, Metrics, B2B SaaS, AI/ML Integration</p>
                              <p><strong>Tech:</strong> Java, Python, JavaScript, React, SQL/NoSQL, AWS, GCP, Docker, Kubernetes, Terraform</p>
                              <p><strong>Analytics:</strong> Data Visualization, Experiment Design, KPI Tracking, Product Analytics (Mixpanel, Amplitude)</p>
                            </div>
                          </section>

                          <section>
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                              📈 Impact So Far
                            </h3>
                            <div className="space-y-3 text-base">
                              <p className="flex gap-2">
                                <span>🚀</span>
                                <span>70% faster audit workflows and $8.5M annual profit uplift through AI-driven automation (Risk GPT @ EY)</span>
                              </p>
                              <p className="flex gap-2">
                                <span>🧠</span>
                                <span>Projected: Up to 80% faster document retrieval and 2× productivity gain through AI semantic search and intelligent query matching (Auralis – AI chatbot for document management)</span>
                              </p>
                              <p className="flex gap-2">
                                <span>🎨</span>
                                <span>Projected: 3× higher visitor engagement and 40% improved satisfaction via AR/VR-powered artifact exploration (AMUSE – immersive museum experience platform)</span>
                              </p>
                              <p className="flex gap-2">
                                <span>💻</span>
                                <span>Delivered multiple enterprise and consumer-facing applications as a software developer - including an e-commerce platform for Adhesives, Vodafone mPower enterprise application, and a high-traffic website for one of India's largest electronics retailers, enhancing customer experience and digital conversion rates.</span>
                              </p>
                              <p className="flex gap-2">
                                <span>☁️</span>
                                <span>$1.2M annual cloud cost savings and 45% faster performance achieved through multi-tenant AWS scaling and optimization initiatives.</span>
                              </p>
                              <p className="flex gap-2">
                                <span>🤝</span>
                                <span>Mentored 12+ engineers, improving cross-functional collaboration and boosting team productivity by 30%.</span>
                              </p>
                            </div>
                          </section>

                          <section>
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                              ⚽ Beyond Work
                            </h3>
                            <div className="space-y-4 text-base leading-relaxed">
                              <p>
                                Outside of product and technology, I'm deeply passionate about soccer - both on and off the field. I've played competitively for over a decade as a semi-professional player and currently contribute as a part-time soccer analyst, focusing on match breakdowns, team dynamics, and performance insights.
                              </p>
                              <p>
                                As a lifelong Manchester United fan, the game has taught me the value of teamwork, adaptability, and strategic decision-making - qualities that translate directly into how I lead teams and build products. Whether on the pitch or in a product room, I thrive on collaboration, fast execution, and a shared goal of winning as a team.
                              </p>
                            </div>
                          </section>
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
