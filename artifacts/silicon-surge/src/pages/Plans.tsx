import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Zap, TrendingUp, Rocket, Trophy } from "lucide-react";
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

const plans = [
  {
    icon: Zap, badge: "", name: "Starter", emoji: "🥉",
    price: "₹6,000", priceLabel: "Ad Budget / Month", agencyFee: "+ ₹2,000 Agency Fee",
    desc: "For small businesses, solopreneurs, and coaches just starting out with paid ads.",
    features: [
      "1 Ad Campaign (Meta or Google)",
      "Up to 50 Verified Leads / Month",
      "1 Niche / Audience",
      "Basic Lead Filtering",
      "Weekly Performance Report",
      "WhatsApp Support",
    ],
    notIncluded: ["A/B Testing", "Landing Page Creation", "Retargeting Campaigns"],
    highlight: false, cta: "Get Started",
  },
  {
    icon: TrendingUp, badge: "MOST POPULAR", name: "Growth", emoji: "🥈",
    price: "₹10,000", priceLabel: "Ad Budget / Month", agencyFee: "+ ₹3,500 Agency Fee",
    desc: "For growing businesses that want more leads, better targeting, and consistent results.",
    features: [
      "2 Ad Campaigns (Meta + LinkedIn/Google)",
      "Up to 120 Verified Leads / Month",
      "2 Niches / Audiences",
      "Advanced Lead Filtering",
      "A/B Creative Testing",
      "Daily Performance Reports",
      "Landing Page Optimisation",
      "WhatsApp + Call Support",
    ],
    notIncluded: ["Retargeting Campaigns"],
    highlight: true, cta: "Get This Plan",
  },
  {
    icon: Rocket, badge: "BEST VALUE", name: "Pro", emoji: "🥇",
    price: "₹15,000", priceLabel: "Ad Budget / Month", agencyFee: "+ ₹5,000 Agency Fee",
    desc: "For established businesses ready to scale with multi-platform ads and full support.",
    features: [
      "3 Campaigns (Meta + Google + LinkedIn)",
      "Up to 250 Verified Leads / Month",
      "Up to 3 Niches / Audiences",
      "Premium Lead Filtering",
      "Full A/B Testing",
      "Retargeting Campaigns",
      "Custom Landing Page Creation",
      "Daily Reports + Strategy Calls",
      "Priority Support",
    ],
    notIncluded: [],
    highlight: false, cta: "Scale with Pro",
  },
  {
    icon: Trophy, badge: "LOWEST CPL", name: "Scale", emoji: "🏆",
    price: "₹25,000", priceLabel: "Ad Budget / Month", agencyFee: "+ ₹7,500 Agency Fee",
    desc: "For high-growth businesses wanting maximum reach, leads, and sales across all channels.",
    features: [
      "Unlimited Campaigns",
      "500+ Verified Leads / Month",
      "Multiple Niches & Geographies",
      "Elite Lead Filtering",
      "Full A/B + Multivariate Testing",
      "Cross-Platform Retargeting",
      "Custom Landing Pages + Funnels",
      "Dedicated Account Manager",
      "Daily Reports + Weekly Strategy Call",
      "24/7 Priority Support",
    ],
    notIncluded: [],
    highlight: false, cta: "Go Full Scale",
  },
];

const faqs = [
  { q: "Can you run ads for my specific industry?", a: "Yes! We serve e-commerce, coaching centres, schools, tech companies, job services, local businesses, and many more. Book a call and we'll confirm if we're the right fit." },
  { q: "What platforms do you run ads on?", a: "We run ads on Meta (Facebook & Instagram), LinkedIn, and Google Ads — depending on your niche and target audience." },
  { q: "What is the agency fee for?", a: "The agency fee covers campaign strategy, creative design, audience research, performance monitoring, optimization, and reporting." },
  { q: "How quickly will I see results?", a: "Most clients see initial leads within 48–72 hours of launch. Significant results typically come within the first 2 weeks." },
  { q: "Is there a minimum contract period?", a: "We recommend a minimum of 3 months for best results. Month-to-month options are available for the Starter plan." },
  { q: "Can I upgrade my plan anytime?", a: "Absolutely. You can upgrade at any time and we'll seamlessly transfer your campaign history and learnings." },
];

export default function Plans() {
  return (
    <div>
      <section className="py-24 relative" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(45 95% 55% / 0.1) 0%, transparent 70%), hsl(30 20% 8%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">Transparent Pricing</span>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Choose Your{" "}
              <span style={{ background: "linear-gradient(135deg, hsl(45 95% 55%), hsl(35 90% 50%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Growth Plan
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Flexible plans for any business size — e-commerce, coaching, tech companies, schools, and more. No surprises. No hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <FadeInSection key={i} delay={i * 0.08}>
                <div className={`bg-card border rounded-2xl p-7 h-full flex flex-col relative hover:scale-[1.02] transition-all duration-300 ${plan.highlight ? "border-primary shadow-xl shadow-primary/20" : "border-border"}`}>
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary rounded-full text-primary-foreground text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                      {plan.badge}
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                      <plan.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl">{plan.emoji}</div>
                      <div className="font-bold text-foreground text-lg">{plan.name} Plan</div>
                    </div>
                  </div>
                  <div className="border border-border rounded-xl p-4 mb-4">
                    <div className="text-3xl font-black text-primary">{plan.price}</div>
                    <div className="text-xs text-muted-foreground mt-1">{plan.priceLabel}</div>
                    <div className="text-xs text-primary/70 font-medium mt-1">{plan.agencyFee}</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5">{plan.desc}</p>
                  <div className="space-y-2 mb-4 flex-1">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((f, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground/50">
                        <XCircle className="w-4 h-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                        <span className="line-through">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 mt-4">
                    <Button asChild className={`w-full font-bold ${plan.highlight ? "" : "bg-secondary text-foreground hover:bg-secondary/80"}`} data-testid={`button-plan-${plan.name.toLowerCase()}`}>
                      <Link href="/contact">{plan.cta}</Link>
                    </Button>
                    <a href="https://wa.me/919732325777" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full h-9 rounded-lg bg-green-600/15 border border-green-500/20 text-green-400 text-sm font-medium hover:bg-green-600/25 transition-all" data-testid={`button-plan-whatsapp-${plan.name.toLowerCase()}`}>
                      <FaWhatsapp className="w-4 h-4" /> Ask on WhatsApp
                    </a>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "hsl(30 25% 11%)" }}>
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeInSection>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">FAQs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Common Questions</h2>
            </div>
          </FadeInSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeInSection key={i} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                  <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-8">{faq.a}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Not Sure Which Plan?</h2>
            <p className="text-muted-foreground text-lg mb-8">Book a free consultation and we'll recommend the perfect plan based on your business, goals, and budget.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 font-semibold" data-testid="button-plans-cta">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <a href="https://wa.me/919732325777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 h-12 px-6 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400 font-semibold hover:bg-green-600/30 transition-all" data-testid="link-plans-whatsapp">
                <FaWhatsapp className="w-5 h-5" /> WhatsApp to Discuss
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
