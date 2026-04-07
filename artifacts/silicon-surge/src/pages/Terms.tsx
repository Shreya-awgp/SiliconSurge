import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <div>
      <section className="py-24 relative" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(45 95% 55% / 0.08) 0%, transparent 70%), hsl(30 20% 8%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8">
            {[
              {
                title: "1. Acceptance of Terms",
                content: "By accessing and using the services provided by The Silicon Surge ('we,' 'us,' or 'our'), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, you should not use our services."
              },
              {
                title: "2. Services Description",
                content: "The Silicon Surge provides digital marketing and lead generation services for resume writing and job assistance service providers. Our services include but are not limited to: paid advertising campaign management on Meta and LinkedIn platforms, landing page creation, lead filtering and verification, and lead delivery via Google Sheets or CRM systems."
              },
              {
                title: "3. Payment Terms",
                content: "Clients are responsible for paying the ad budget directly to the advertising platforms (Meta/LinkedIn). Our service fees are charged after the campaign ends, based on the actual number of leads generated. Setup fees are non-refundable once campaign setup has begun. All prices are in Indian Rupees (INR) unless otherwise stated."
              },
              {
                title: "4. Lead Quality Guarantee",
                content: "We strive to deliver verified, high-quality leads. We target working professionals and filter out students and irrelevant audiences. However, we cannot guarantee conversion rates as they depend on your service quality, pricing, and follow-up process. Lead quality disputes must be raised within 7 days of delivery."
              },
              {
                title: "5. Client Responsibilities",
                content: "Clients are responsible for: (a) Providing accurate information about their services and target audience; (b) Following up with leads promptly; (c) Maintaining adequate ad budget in their platform accounts; (d) Providing feedback on lead quality to help optimize campaigns; (e) Ensuring their business practices comply with all applicable laws."
              },
              {
                title: "6. Intellectual Property",
                content: "All content on this website, including text, graphics, logos, and campaign creatives created by us, are the property of The Silicon Surge. Clients retain ownership of their business data and leads generated through their campaigns. Campaign strategies and methodologies remain proprietary to The Silicon Surge."
              },
              {
                title: "7. Limitation of Liability",
                content: "The Silicon Surge shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our services. Our maximum liability to any client shall not exceed the service fees paid in the previous month. We are not responsible for ad platform policy changes that affect campaign performance."
              },
              {
                title: "8. Termination",
                content: "Either party may terminate service with 7 days written notice. Upon termination, all outstanding fees become immediately due. We reserve the right to terminate services immediately for violation of these terms or for fraudulent activities."
              },
              {
                title: "9. Governing Law",
                content: "These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Siliguri, West Bengal."
              },
              {
                title: "10. Contact",
                content: "For questions about these Terms, contact us at: Email: shreyasinghapd07@gmail.com | Phone: 9732325777 | Address: Siliguri, West Bengal, India."
              }
            ].map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
