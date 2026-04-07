import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, DollarSign, CheckCircle, ShoppingCart, GraduationCap, Code2, Briefcase, BookOpen } from "lucide-react";
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

const chartData = [
  { name: "Week 1", ecom: 18, coaching: 12, tech: 8 },
  { name: "Week 2", ecom: 34, coaching: 22, tech: 14 },
  { name: "Week 3", ecom: 52, coaching: 38, tech: 24 },
  { name: "Week 4", ecom: 78, coaching: 55, tech: 39 },
  { name: "Week 5", ecom: 95, coaching: 72, tech: 51 },
  { name: "Week 6", ecom: 120, coaching: 90, tech: 68 },
];

const caseStudies = [
  {
    icon: ShoppingCart,
    industry: "E-Commerce",
    client: "Fashion Brand, Kolkata",
    headline: "0 to ₹4.2L Revenue in 45 Days",
    problem: "A fashion store selling ethnic wear online had a Meta ad account but was spending ₹15,000/month with barely ₹40,000 in revenue and a ROAS of 2.6x.",
    solution: "We rebuilt their campaign structure with product catalogue ads, built lookalike audiences from their buyers, and added a cart abandonment retargeting sequence.",
    results: [
      { label: "Monthly Revenue", before: "₹40,000", after: "₹4,20,000" },
      { label: "ROAS", before: "2.6x", after: "8.4x" },
      { label: "Cost Per Purchase", before: "₹385", after: "₹119" },
    ],
    duration: "45 Days",
    color: "text-orange-400",
  },
  {
    icon: GraduationCap,
    industry: "Coaching Centre",
    client: "IIT-JEE Coaching, Siliguri",
    headline: "248 Admission Enquiries in 30 Days",
    problem: "A coaching institute was struggling to fill seats for its new batch. They relied on word-of-mouth and had no digital presence.",
    solution: "We ran targeted Meta ads focused on Class 11–12 students and parents in Siliguri and North Bengal, with a lead form optimised for admissions.",
    results: [
      { label: "Leads Generated", before: "12 / month", after: "248 in 30 days" },
      { label: "Cost Per Lead", before: "₹—", after: "₹38" },
      { label: "Seats Filled", before: "60%", after: "100%" },
    ],
    duration: "30 Days",
    color: "text-blue-400",
  },
  {
    icon: Code2,
    industry: "Tech / SaaS",
    client: "Full-Stack Agency, Bangalore",
    headline: "32 B2B Clients Acquired via LinkedIn",
    problem: "A software development agency had a great portfolio but no inbound pipeline. Cold emails were getting ignored and referrals were inconsistent.",
    solution: "We launched LinkedIn lead gen campaigns targeting CTOs, Startup Founders, and Tech Heads at SMBs in Bangalore, Mumbai, and Delhi NCR.",
    results: [
      { label: "Qualified Leads", before: "3–4 / month", after: "32 in 60 days" },
      { label: "Cost Per Lead", before: "₹—", after: "₹1,850" },
      { label: "Deal Value Closed", before: "₹0 inbound", after: "₹18.5L" },
    ],
    duration: "60 Days",
    color: "text-purple-400",
  },
  {
    icon: Briefcase,
    industry: "Job & Career Services",
    client: "Resume Writing Service, Delhi",
    headline: "500+ Job-Seeker Leads at ₹42 CPL",
    problem: "A resume writing and LinkedIn profile optimisation service was struggling to find job seekers who were ready to pay for help.",
    solution: "We targeted working professionals aged 24–38 actively updating their profiles or searching for jobs on Meta, with a high-converting landing page.",
    results: [
      { label: "Leads Generated", before: "40 / month", after: "500+ in 30 days" },
      { label: "Cost Per Lead", before: "₹280", after: "₹42" },
      { label: "Conversion Rate", before: "4%", after: "18%" },
    ],
    duration: "30 Days",
    color: "text-green-400",
  },
  {
    icon: BookOpen,
    industry: "Ed-Tech",
    client: "Online Learning Platform, Remote",
    headline: "₹8L in Course Sales from ₹1.2L Ad Spend",
    problem: "An ed-tech platform selling online courses on digital marketing had low course sales despite organic traffic. Their ads were untargeted and creative was poor.",
    solution: "We built a two-stage funnel: awareness ads to cold audiences followed by retargeting with testimonials and limited-time offers. Created 12 ad variants.",
    results: [
      { label: "Revenue Generated", before: "₹90,000/mo", after: "₹8,00,000" },
      { label: "ROAS", before: "1.8x", after: "6.7x" },
      { label: "Enrolments", before: "45/mo", after: "312" },
    ],
    duration: "60 Days",
    color: "text-yellow-400",
  },
];

const proofMessages = [
  { name: "Ritesh M. (E-Commerce)", time: "2 days ago", msg: "Our Shopify sales went from ₹40k to ₹4.2L in one month. These guys know e-commerce ads inside out. 🔥" },
  { name: "Priya S. (Coaching Centre)", time: "1 week ago", msg: "248 admission leads in 30 days for only ₹38 per lead. Our batch is 100% full now. Highly recommend!" },
  { name: "Arjun T. (Tech Agency)", time: "2 weeks ago", msg: "Closed ₹18.5 lakhs worth of deals from LinkedIn ads alone. Never thought B2B ads could be this effective." },
  { name: "Neha G. (Ed-Tech)", time: "3 weeks ago", msg: "From 45 enrolments a month to 312 in 60 days. The retargeting funnel they built is pure gold. 🎯" },
];

export default function CaseStudies() {
  return (
    <div>
      <section className="py-24 relative" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(45 95% 55% / 0.1) 0%, transparent 70%), hsl(30 20% 8%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">Proven Results</span>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Real Results Across{" "}
              <span style={{ background: "linear-gradient(135deg, hsl(45 95% 55%), hsl(35 90% 50%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Every Industry
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From e-commerce brands to coaching centres, tech companies to job services — see how we've driven measurable results for businesses just like yours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeInSection>
            <div className="text-center mb-10">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">Lead Growth Trend</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Leads Generated Per Week — Multi-Niche View</h2>
              <p className="text-muted-foreground mt-2">Across e-commerce, coaching, and tech clients over 6 weeks</p>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-4">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(30 25% 18%)" />
                  <XAxis dataKey="name" stroke="hsl(30 15% 50%)" tick={{ fill: "hsl(30 15% 60%)", fontSize: 12 }} />
                  <YAxis stroke="hsl(30 15% 50%)" tick={{ fill: "hsl(30 15% 60%)", fontSize: 12 }} />
                  <Tooltip contentStyle={{ background: "hsl(30 25% 14%)", border: "1px solid hsl(30 25% 22%)", borderRadius: "12px", color: "white" }} />
                  <Bar dataKey="ecom" name="E-Commerce" fill="hsl(45 95% 55%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="coaching" name="Coaching" fill="hsl(210 80% 60%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="tech" name="Tech / SaaS" fill="hsl(280 70% 65%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-3 h-3 rounded-sm bg-primary inline-block" /> E-Commerce</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-3 h-3 rounded-sm bg-blue-500 inline-block" /> Coaching / Education</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-3 h-3 rounded-sm bg-purple-500 inline-block" /> Tech / SaaS</div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="py-10" style={{ background: "hsl(30 25% 11%)" }}>
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">Client Case Studies</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Industry-Specific Results</h2>
            </div>
          </FadeInSection>
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <FadeInSection key={i} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                        <cs.icon className={`w-7 h-7 ${cs.color}`} />
                      </div>
                      <div>
                        <div className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">{cs.industry}</div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">{cs.headline}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{cs.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-primary text-sm font-semibold">{cs.duration}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                    <div className="md:col-span-2 grid grid-cols-1 gap-4">
                      <div className="bg-background border border-border rounded-xl p-4">
                        <div className="text-xs text-red-400 font-semibold uppercase tracking-widest mb-2">The Problem</div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{cs.problem}</p>
                      </div>
                      <div className="bg-background border border-border rounded-xl p-4">
                        <div className="text-xs text-primary font-semibold uppercase tracking-widest mb-2">Our Solution</div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4">
                      <div className="text-xs text-primary font-semibold uppercase tracking-widest mb-3">Results</div>
                      <div className="space-y-3">
                        {cs.results.map((r, j) => (
                          <div key={j} className="border border-border rounded-lg p-3">
                            <div className="text-xs text-muted-foreground mb-1">{r.label}</div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-muted-foreground/60 text-xs line-through">{r.before}</span>
                              <span className="text-primary">→</span>
                              <span className="text-primary font-bold">{r.after}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeInSection>
            <div className="text-center mb-10">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">Client Feedback</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">What Our Clients Say</h2>
            </div>
          </FadeInSection>
          <div className="space-y-4">
            {proofMessages.map((msg, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-5 hover:border-green-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <FaWhatsapp className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{msg.name}</div>
                      <div className="text-xs text-muted-foreground">{msg.time}</div>
                    </div>
                    <div className="ml-auto">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{msg.msg}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "hsl(30 25% 11%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Ready for Your Own Success Story?</h2>
            <p className="text-muted-foreground text-lg mb-8">Let's build a campaign that gets you real results — just like these businesses.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 font-semibold" data-testid="button-case-studies-cta">
                <Link href="/contact">Get Free Strategy Call</Link>
              </Button>
              <a href="https://wa.me/919732325777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 h-12 px-6 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400 font-semibold hover:bg-green-600/30 transition-all" data-testid="link-case-studies-whatsapp">
                <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
