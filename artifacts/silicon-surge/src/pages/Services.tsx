import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Target, Megaphone, Globe, TrendingUp, Repeat, CheckCircle, ArrowRight, ShoppingCart, Code2, GraduationCap, Briefcase, BookOpen, Users, LayoutTemplate, Funnel } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

const services = [
  {
    icon: Target,
    title: "Lead Generation",
    subtitle: "Core Service",
    description: "We generate high-intent, qualified leads for any business — coaching centres, job services, B2B companies, local businesses, and more. Every lead is filtered for real purchase intent.",
    features: ["Multi-platform targeting", "Lead qualification & filtering", "Real-time CRM delivery", "Custom audience building"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Ads",
    subtitle: "Sales & ROAS",
    description: "Product catalogue campaigns, dynamic retargeting, and conversion-optimised ads for Shopify, WooCommerce, or any e-commerce platform. Built to drive sales, not just clicks.",
    features: ["Catalogue & product ads", "Dynamic retargeting", "Cart abandonment recovery", "ROAS optimisation"],
  },
  {
    icon: Megaphone,
    title: "Meta & LinkedIn Ads",
    subtitle: "Paid Social",
    description: "Precision advertising on Meta (Facebook & Instagram) and LinkedIn. We reach the exact audience — by age, profession, interest, industry, job title — for any niche.",
    features: ["Facebook & Instagram Ads", "LinkedIn B2B Campaigns", "A/B tested creatives", "Lookalike audiences"],
  },
  {
    icon: GraduationCap,
    title: "Education & Coaching Ads",
    subtitle: "Admissions & Enrolments",
    description: "Admission enquiries for schools, colleges, and coaching institutes. Course enrolments for ed-tech platforms. We bring students and parents who are actively looking.",
    features: ["School admission campaigns", "Coaching centre leads", "Online course enrolments", "Parent & student targeting"],
  },
  {
    icon: Code2,
    title: "B2B & Tech Lead Gen",
    subtitle: "SaaS & Agencies",
    description: "Qualified client leads for software companies, full-stack development agencies, SaaS platforms, and IT service providers who need a steady pipeline of business clients.",
    features: ["LinkedIn B2B targeting", "Decision-maker outreach", "SaaS trial signups", "Agency client leads"],
  },
  {
    icon: Globe,
    title: "Landing Page Creation",
    subtitle: "High Conversion",
    description: "We build conversion-optimised landing pages specifically designed for your ad campaigns. Fast-loading, mobile-first pages that turn visitors into enquiries and leads.",
    features: ["Mobile-first design", "Conversion-optimised copy", "Lead form integration", "Fast load times"],
  },
  {
    icon: TrendingUp,
    title: "Funnel Optimisation",
    subtitle: "More Conversions",
    description: "Analyse and optimise your entire ad-to-sale funnel. We find where you're losing money, fix the leaks, and maximise revenue from the same or lower ad spend.",
    features: ["Full funnel audit", "Conversion rate optimisation", "Copy & creative testing", "Weekly performance reports"],
  },
  {
    icon: Repeat,
    title: "Retargeting Campaigns",
    subtitle: "Re-engage Warm Audiences",
    description: "Most people don't convert on the first visit. Our retargeting campaigns follow up with warm audiences across Meta, LinkedIn, and Google to bring them back and convert them.",
    features: ["Pixel & tracking setup", "Custom retargeting audiences", "Sequential ad messaging", "Cross-platform retargeting"],
  },
  {
    icon: Users,
    title: "Local Business Ads",
    subtitle: "Hyperlocal Targeting",
    description: "Hyperlocal ad campaigns for restaurants, clinics, gyms, salons, real estate, and any local service business that needs walk-ins, calls, or local enquiries.",
    features: ["Location-based targeting", "Google Maps ads", "Call & WhatsApp leads", "Seasonal campaign management"],
  },
];

const process = [
  { step: "01", title: "Discovery & Strategy", detail: "We study your business, competitors, and target audience to build a custom ad strategy." },
  { step: "02", title: "Campaign Setup", detail: "We create ad accounts, audiences, creatives, and landing pages — everything needed to launch." },
  { step: "03", title: "Launch & Monitor", detail: "Campaigns go live with daily monitoring — we track every metric in real time." },
  { step: "04", title: "Optimise & Scale", detail: "Double down on what works, cut what doesn't, and scale your budget intelligently." },
];

export default function Services() {
  return (
    <div>
      <section className="py-24 relative" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(45 95% 55% / 0.1) 0%, transparent 70%), hsl(30 20% 8%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">What We Offer</span>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Advertising Services for{" "}
              <span style={{ background: "linear-gradient(135deg, hsl(45 95% 55%), hsl(35 90% 50%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Every Industry
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From e-commerce to coaching, tech companies to local businesses — we run performance ads that bring real results for every type of business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, i) => (
              <FadeInSection key={i} delay={i * 0.06}>
                <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="mb-2">
                    <span className="text-xs text-primary font-semibold uppercase tracking-widest">{service.subtitle}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full border-border hover:border-primary hover:text-primary" data-testid={`button-service-${i}`}>
                    <Link href="/contact">Get Started <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "hsl(30 25% 11%)" }}>
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">How We Work</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Working Process</h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:scale-105 transition-all duration-300 relative group">
                  <div className="text-6xl font-black text-primary/8 absolute top-4 right-5 group-hover:text-primary/15 transition-colors">{p.step}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Step {i + 1}: {p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.detail}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Ready to Get Real Results?</h2>
            <p className="text-muted-foreground text-lg mb-8">Book a free strategy call and we'll show you exactly how we can grow your business with targeted ads.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 font-semibold" data-testid="button-services-cta">
                <Link href="/contact">Get Free Strategy Call</Link>
              </Button>
              <a href="https://wa.me/919732325777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 h-12 px-6 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400 font-semibold hover:bg-green-600/30 transition-all" data-testid="link-services-whatsapp">
                <FaWhatsapp className="w-5 h-5" /> WhatsApp Now
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
