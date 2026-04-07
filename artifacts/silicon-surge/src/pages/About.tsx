import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Target, TrendingUp, Users, Heart, Zap, ShoppingCart, Code2, GraduationCap, Briefcase, BookOpen, Globe } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaMeta, FaLinkedin, FaGoogle } from "react-icons/fa6";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

const stats = [
  { value: "500+", label: "Leads Generated" },
  { value: "50+", label: "Happy Clients" },
  { value: "6+", label: "Industries Served" },
  { value: "4x", label: "Average ROAS" },
];

const values = [
  { icon: Target, title: "Performance First", detail: "Every campaign is judged by one thing: results. We don't run ads to look busy — we run them to generate leads and sales." },
  { icon: Heart, title: "Client Success = Our Success", detail: "We treat every client's business like our own. Your growth is our benchmark. Your wins are our wins." },
  { icon: TrendingUp, title: "Data, Not Guesswork", detail: "Every decision is backed by data. We track every rupee, every click, and every conversion to improve continuously." },
  { icon: Zap, title: "Speed & Agility", detail: "Markets move fast. We react faster. Campaign pivots, creative updates, and optimisations happen in real time." },
];

const industries = [
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Code2, label: "Tech & SaaS" },
  { icon: GraduationCap, label: "Schools & Coaching" },
  { icon: Briefcase, label: "Job Services" },
  { icon: BookOpen, label: "Ed-Tech" },
  { icon: Globe, label: "Local Business" },
  { icon: Users, label: "Agencies" },
];

const platforms = [
  { icon: FaMeta, label: "Meta Ads" },
  { icon: FaLinkedin, label: "LinkedIn Ads" },
  { icon: FaGoogle, label: "Google Ads" },
];

const team = [
  { name: "Shreya Singh", role: "Founder & Lead Strategist", desc: "Performance marketer specialising in multi-industry ad campaigns and lead generation systems." },
  { name: "Media Team", role: "Creative & Copy", desc: "Designers and copywriters who craft ad creatives that stop the scroll and drive action." },
  { name: "Analytics Team", role: "Data & Optimisation", desc: "Our analytics experts track every metric and continuously optimise campaigns for the best CPL and ROAS." },
];

export default function About() {
  return (
    <div>
      <section className="py-24 relative" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(45 95% 55% / 0.1) 0%, transparent 70%), hsl(30 20% 8%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              We Are a{" "}
              <span style={{ background: "linear-gradient(135deg, hsl(45 95% 55%), hsl(35 90% 50%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Full-Service Ad Agency
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The Silicon Surge is a digital advertising agency based in Siliguri, West Bengal. We run performance ad campaigns for businesses across every industry — from e-commerce to education, tech to local services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/40 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "hsl(30 25% 11%)" }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <FadeInSection>
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">Our Mission</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Built to Deliver Real Business Results</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>The Silicon Surge was founded with one mission: to help businesses of every kind grow through targeted, data-driven advertising. We're not just an agency — we're your growth partner.</p>
                  <p>We serve clients across e-commerce, education, technology, job services, and local businesses. What unites all our clients is a desire for real results — real leads, real sales, real ROI.</p>
                  <p>Based in Siliguri, West Bengal, we bring the energy of a local partner with the expertise and systems of a national agency. Every campaign is built from scratch for your specific business.</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {platforms.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-xl text-sm text-muted-foreground hover:border-primary/40 transition-colors">
                      <p.icon className="w-4 h-4 text-primary" />
                      {p.label}
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-lg font-bold text-foreground mb-5">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((ind, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                        <ind.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{ind.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-4 bg-primary/10 border border-primary/20 rounded-xl">
                  <p className="text-sm text-primary font-medium">📍 Based in Siliguri, serving clients across India</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Stand For</h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:scale-105 transition-all duration-300 group text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/25 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.detail}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "hsl(30 25% 11%)" }}>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeInSection>
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">The Team</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">People Behind the Results</h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:scale-105 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeInSection>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-5">Contact Us</h3>
                  <div className="space-y-4">
                    <a href="tel:9732325777" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group" data-testid="link-about-phone">
                      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Call / WhatsApp</div>
                        <div className="font-semibold text-foreground">9732325777</div>
                      </div>
                    </a>
                    <a href="mailto:shreyasinghapd07@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group" data-testid="link-about-email">
                      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Email</div>
                        <div className="font-semibold text-foreground">shreyasinghapd07@gmail.com</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Location</div>
                        <div className="font-semibold text-foreground">Siliguri, West Bengal, India</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
              <FadeInSection delay={0.2}>
                <div className="flex flex-col items-start justify-center h-full gap-4">
                  <h3 className="text-xl font-bold text-foreground">Ready to Work Together?</h3>
                  <p className="text-muted-foreground text-sm">Book a free strategy call and let's talk about how we can grow your business with targeted ads.</p>
                  <Button asChild size="lg" className="h-12 px-8 font-semibold" data-testid="button-about-cta">
                    <Link href="/contact">Get Free Strategy Call</Link>
                  </Button>
                  <a href="https://wa.me/919732325777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium" data-testid="link-about-whatsapp">
                    <FaWhatsapp className="w-5 h-5" /> Or WhatsApp us directly
                  </a>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
