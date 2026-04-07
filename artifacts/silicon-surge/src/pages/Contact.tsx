import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

const businessTypes = [
  "E-Commerce / Online Store",
  "Coaching Centre / Institute",
  "School / College",
  "Ed-Tech / Online Courses",
  "Tech / Software Company",
  "SaaS / App",
  "Job / Career Services",
  "Resume / HR Services",
  "Real Estate",
  "Clinic / Healthcare",
  "Restaurant / Food",
  "Salon / Wellness",
  "Gym / Fitness",
  "Local Service Business",
  "Startup / Other",
];

const platforms = [
  "Meta (Facebook & Instagram)",
  "LinkedIn",
  "Google Ads",
  "All of the Above",
  "Not Sure — Please Recommend",
];

const assurances = [
  { icon: CheckCircle, text: "Free strategy call — no obligation" },
  { icon: Clock, text: "We'll respond within 2 business hours" },
  { icon: Shield, text: "Your information is completely private" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", businessType: "", businessName: "", budget: "", platform: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I'd like a free strategy call.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Business:* ${formData.businessName} (${formData.businessType})%0A*Budget:* ${formData.budget}%0A*Platform:* ${formData.platform}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919732325777?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const update = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  return (
    <div>
      <section className="py-24 relative" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(45 95% 55% / 0.1) 0%, transparent 70%), hsl(30 20% 8%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">Let's Talk</span>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Book Your{" "}
              <span style={{ background: "linear-gradient(135deg, hsl(45 95% 55%), hsl(35 90% 50%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Free Strategy Call
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tell us about your business and we'll show you exactly how many quality leads you can get and at what cost — for free. Works for any industry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <div className="space-y-5">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-foreground text-lg mb-5">Get Free Strategy Call</h3>
                  <p className="text-muted-foreground text-sm mb-6">Fill in the details below. We'll call you back to discuss exactly how we can run ads for your business.</p>
                  <div className="space-y-4">
                    {assurances.map((a, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                          <a.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm">{a.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-4">Contact Info</h3>
                  <div className="space-y-4">
                    <a href="tel:9732325777" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group" data-testid="link-contact-phone">
                      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Call Us</div>
                        <div className="font-semibold text-foreground">9732325777</div>
                      </div>
                    </a>
                    <a href="https://wa.me/919732325777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-green-400 transition-colors group" data-testid="link-contact-whatsapp">
                      <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center group-hover:bg-green-500/25 transition-colors shrink-0">
                        <FaWhatsapp className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">WhatsApp</div>
                        <div className="font-semibold text-foreground">+91 9732325777</div>
                      </div>
                    </a>
                    <a href="mailto:shreyasinghapd07@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group" data-testid="link-contact-email">
                      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Email</div>
                        <div className="font-semibold text-foreground text-xs">shreyasinghapd07@gmail.com</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Location</div>
                        <div className="font-semibold text-foreground">Siliguri, West Bengal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2} >
              <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">We've received your details and will get back to you within 2 hours. Check WhatsApp!</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="border-border hover:border-primary hover:text-primary">Submit Another</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground mb-2 block text-sm font-semibold">Your Name *</Label>
                        <Input id="name" required placeholder="Rahul Sharma" value={formData.name} onChange={e => update("name", e.target.value)} className="bg-background border-border focus:border-primary h-11" data-testid="input-name" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground mb-2 block text-sm font-semibold">Phone / WhatsApp *</Label>
                        <Input id="phone" required type="tel" placeholder="98765 43210" value={formData.phone} onChange={e => update("phone", e.target.value)} className="bg-background border-border focus:border-primary h-11" data-testid="input-phone" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-foreground mb-2 block text-sm font-semibold">Email Address</Label>
                        <Input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={e => update("email", e.target.value)} className="bg-background border-border focus:border-primary h-11" data-testid="input-email" />
                      </div>
                      <div>
                        <Label htmlFor="businessName" className="text-foreground mb-2 block text-sm font-semibold">Business Name *</Label>
                        <Input id="businessName" required placeholder="Your Business Name" value={formData.businessName} onChange={e => update("businessName", e.target.value)} className="bg-background border-border focus:border-primary h-11" data-testid="input-business-name" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="businessType" className="text-foreground mb-2 block text-sm font-semibold">Type of Business *</Label>
                      <select id="businessType" required value={formData.businessType} onChange={e => update("businessType", e.target.value)} className="w-full h-11 px-3 rounded-lg bg-background border border-border text-foreground text-sm focus:border-primary focus:outline-none transition-colors" data-testid="select-business-type">
                        <option value="" disabled>Select your industry...</option>
                        {businessTypes.map(bt => <option key={bt} value={bt}>{bt}</option>)}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget" className="text-foreground mb-2 block text-sm font-semibold">Monthly Ad Budget *</Label>
                        <Input id="budget" required placeholder="e.g. ₹15,000 / month" value={formData.budget} onChange={e => update("budget", e.target.value)} className="bg-background border-border focus:border-primary h-11" data-testid="input-budget" />
                      </div>
                      <div>
                        <Label htmlFor="platform" className="text-foreground mb-2 block text-sm font-semibold">Ad Platform Preference *</Label>
                        <select id="platform" required value={formData.platform} onChange={e => update("platform", e.target.value)} className="w-full h-11 px-3 rounded-lg bg-background border border-border text-foreground text-sm focus:border-primary focus:outline-none transition-colors" data-testid="select-platform">
                          <option value="" disabled>Select platform...</option>
                          {platforms.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground mb-2 block text-sm font-semibold">Tell Us About Your Goals</Label>
                      <textarea id="message" rows={3} placeholder="What results are you looking for? What's your biggest challenge with ads right now?" value={formData.message} onChange={e => update("message", e.target.value)} className="w-full px-3 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:border-primary focus:outline-none transition-colors resize-none" data-testid="textarea-message" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button type="submit" size="lg" className="flex-1 h-12 font-bold" data-testid="button-submit-form">
                        Book Free Strategy Call
                      </Button>
                      <a href="https://wa.me/919732325777" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 flex-1 h-12 px-6 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400 font-semibold hover:bg-green-600/30 transition-all" data-testid="link-form-whatsapp">
                        <FaWhatsapp className="w-5 h-5" /> WhatsApp Instead
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">By submitting, you agree to our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>. We never spam or sell your data.</p>
                  </form>
                )}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}
