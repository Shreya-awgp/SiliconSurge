import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Phone, CheckCircle, XCircle, ArrowRight, TrendingUp, Users, DollarSign,
  Target, Filter, BarChart3, Megaphone, Globe, ShoppingCart, Code2, BookOpen, Briefcase, GraduationCap
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaMeta, FaLinkedin } from "react-icons/fa6";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const problemCards = [
  { icon: XCircle, text: "Spending on ads with no returns?", detail: "Budget disappears without any real sales, enquiries, or measurable ROI from your campaigns." },
  { icon: XCircle, text: "Wrong audience seeing your ads?", detail: "Your ads reach people who will never buy — wasted impressions, zero conversions, pure loss." },
  { icon: XCircle, text: "No strategy, just guessing?", detail: "Running ads without a clear funnel means burning money daily with no direction or consistency." },
];

const niches = [
  { icon: ShoppingCart, text: "E-Commerce Brands", detail: "Product ads, retargeting, and catalogue campaigns that drive real sales on your store." },
  { icon: Code2, text: "Tech & Dev Companies", detail: "B2B lead gen for SaaS, full-stack agencies, and software companies seeking qualified clients." },
  { icon: GraduationCap, text: "Schools & Coaching", detail: "Admission enquiries and student leads for schools, coaching centres, and online courses." },
  { icon: Briefcase, text: "Job & Career Services", detail: "Resume writing, placement agencies, and career coaches — reach active professionals." },
  { icon: BookOpen, text: "Ed-Tech Platforms", detail: "Course enrolments and app installs for online education platforms targeting real learners." },
  { icon: Users, text: "Local & Service Businesses", detail: "Any local business or service provider that needs consistent, qualified lead flow every month." },
];

const steps = [
  { icon: Megaphone, step: "01", title: "Study Your Business", detail: "Deep dive into your niche, competitors, and target audience to build the right strategy." },
  { icon: Globe, step: "02", title: "Launch Targeted Ads", detail: "Precision campaigns on Meta, LinkedIn, or Google — wherever your buyers spend their time." },
  { icon: Filter, step: "03", title: "Filter & Qualify", detail: "Every lead is quality-checked for intent and relevance before it reaches your hands." },
  { icon: ArrowRight, step: "04", title: "Deliver & Optimise", detail: "Real-time delivery to your CRM or Google Sheet, with ongoing campaign optimization." },
];

const stats = [
  { icon: BarChart3, value: 500, suffix: "+", label: "Leads Generated Across Niches" },
  { icon: TrendingUp, value: 50, suffix: "+", label: "Clients Across Different Industries" },
  { icon: DollarSign, value: 4, suffix: "x", label: "Average Return on Ad Spend" },
];

const pricingPreview = [
  { name: "Starter", price: "₹6,000", desc: "Perfect for small businesses & solopreneurs", badge: "" },
  { name: "Growth", price: "₹10,000", desc: "Scale with advanced targeting & A/B testing", badge: "Popular" },
  { name: "Scale", price: "₹25,000", desc: "Full-funnel domination with retargeting", badge: "Best ROI" },
];

const whyUs = [
  { icon: Target, title: "Niche-Specific Strategy", detail: "We don't run generic ads — every campaign is built around your specific business and audience." },
  { icon: Filter, title: "Lead Filtering System", detail: "Only qualified, interested leads reach you. No time wasters, no irrelevant traffic." },
  { icon: CheckCircle, title: "Transparent Reporting", detail: "Daily and weekly reports with real numbers — CPL, CTR, ROAS, conversions." },
  { icon: TrendingUp, title: "ROI-Focused Campaigns", detail: "Every rupee is tracked. We stop what doesn't work and double down on what does." },
];

const clientTypes = [
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Code2, label: "Tech / SaaS" },
  { icon: GraduationCap, label: "Schools & Coaching" },
  { icon: Briefcase, label: "Job Services" },
  { icon: BookOpen, label: "Ed-Tech" },
  { icon: Users, label: "Local Business" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(45 95% 55% / 0.12) 0%, transparent 70%), hsl(30 20% 8%)" }}
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "linear-gradient(hsl(45 95% 55% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(45 95% 55% / 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">Full-Service Digital Advertising Agency</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            We Run Ads That{" "}
            <span style={{ background: "linear-gradient(135deg, hsl(45 95% 55%), hsl(35 90% 50%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Actually Convert
            </span>{" "}🚀
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            The Silicon Surge is a full-service digital advertising agency. We drive real leads and sales for e-commerce, coaching, tech companies, schools, job services, and every business in between.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {clientTypes.map((c, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
                <c.icon className="w-3.5 h-3.5 text-primary" />
                {c.label}
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button asChild size="lg" className="h-14 px-8 text-base font-bold shadow-lg hover:scale-105 transition-all duration-200 shadow-primary/30" data-testid="button-hero-cta">
              <Link href="/contact">Get a Free Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border-border hover:border-primary hover:text-primary transition-all duration-200" data-testid="button-hero-plans">
              <Link href="/plans">View Plans</Link>
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="tel:9732325777" className="flex items-center gap-2 hover:text-primary transition-colors" data-testid="link-hero-phone">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-foreground text-base">9732325777</span>
            </a>
            <a href="https://wa.me/919732325777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors" data-testid="link-hero-whatsapp">
              <div className="w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center">
                <FaWhatsapp className="w-4 h-4 text-green-500" />
              </div>
              <span className="font-semibold text-foreground text-base">WhatsApp Us</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24" style={{ background: "hsl(30 25% 11%)" }}>
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">The Problem</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Sound Familiar?</h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {problemCards.map((card, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-7 hover:border-red-500/40 hover:scale-105 transition-all duration-300 group">
                  <XCircle className="w-8 h-8 text-red-500 mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{card.text}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.detail}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection delay={0.3}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl border border-primary/40 bg-primary/10">
                <ArrowRight className="w-6 h-6 text-primary" />
                <span className="text-primary text-xl font-bold">We fix this — for every industry.</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* NICHES / WHO WE SERVE */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">Industries We Serve</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">We Run Ads For Every Business</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From e-commerce stores to coaching institutes — if you need clients, we deliver them.</p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {niches.map((niche, i) => (
              <FadeInSection key={i} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 group flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                    <niche.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <h3 className="font-bold text-foreground">{niche.text}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{niche.detail}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24" style={{ background: "hsl(30 25% 11%)" }}>
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">Our Process</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A proven 4-step system adapted to your specific industry and audience.</p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <FadeInSection key={i} delay={i * 0.12}>
                <div className="relative bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:scale-105 transition-all duration-300 group">
                  <div className="text-5xl font-black text-primary/10 absolute top-4 right-5 group-hover:text-primary/20 transition-colors">{step.step}</div>
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Step {i + 1}: {step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.detail}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary/50" />
                    </div>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection delay={0.5}>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-2 text-sm text-muted-foreground"><FaMeta className="w-5 h-5 text-primary" /> Meta Ads</span>
              <span className="text-muted-foreground">+</span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground"><FaLinkedin className="w-5 h-5 text-primary" /> LinkedIn Ads</span>
              <span className="text-muted-foreground">+</span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground"><Globe className="w-5 h-5 text-primary" /> Google Ads</span>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">Proven Results</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Real Numbers. Real Impact.</h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/40 hover:scale-105 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/25 transition-colors">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-24" style={{ background: "hsl(30 25% 11%)" }}>
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">Pricing</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Flexible plans for every business size. No hidden fees. No surprises.</p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {pricingPreview.map((plan, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className={`bg-card border rounded-2xl p-7 hover:scale-105 transition-all duration-300 relative ${plan.badge === "Popular" ? "border-primary shadow-lg shadow-primary/20" : "border-border"}`}>
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-primary-foreground text-xs font-bold uppercase tracking-wider">{plan.badge}</div>
                  )}
                  <h3 className="text-lg font-bold text-foreground mb-2">{plan.name} Plan</h3>
                  <div className="text-4xl font-black text-primary mb-2">{plan.price}</div>
                  <p className="text-muted-foreground text-sm mb-4">Ad Budget</p>
                  <p className="text-sm text-muted-foreground">{plan.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection delay={0.4}>
            <div className="text-center">
              <Button asChild size="lg" className="h-12 px-8 font-semibold" data-testid="button-view-plans">
                <Link href="/plans">View Full Pricing Details</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">Why Us</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Why Choose The Silicon Surge</h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:scale-105 transition-all duration-300 group text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/25 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 relative overflow-hidden" style={{ background: "radial-gradient(ellipse 90% 70% at 50% 50%, hsl(45 95% 55% / 0.15) 0%, hsl(30 20% 8%) 70%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10 max-w-3xl">
          <FadeInSection>
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              Ready to Grow Your{" "}
              <span style={{ background: "linear-gradient(135deg, hsl(45 95% 55%), hsl(35 90% 50%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Business
              </span>{" "}
              With Ads? 🚀
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Book a free strategy call. We'll analyze your business, identify the right ad channels, and show you a clear roadmap to consistent leads and sales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-10 text-base font-bold shadow-xl hover:scale-105 transition-all duration-200 shadow-primary/30" data-testid="button-final-cta">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <a href="https://wa.me/919732325777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 h-14 px-8 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400 font-semibold hover:bg-green-600/30 transition-all duration-200 hover:scale-105" data-testid="link-final-whatsapp">
                <FaWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
