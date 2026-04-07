import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div>
      <section className="py-24 relative" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(45 95% 55% / 0.08) 0%, transparent 70%), hsl(30 20% 8%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8">
            {[
              {
                title: "1. Information We Collect",
                content: "We collect information you voluntarily provide to us when you fill out contact forms on our website. This includes your name, phone number, email address, business type, and budget information. We also collect basic analytics data about website visits such as browser type, IP address, and pages visited."
              },
              {
                title: "2. How We Use Your Information",
                content: "The information we collect is used to: (a) Contact you about our lead generation services; (b) Provide you with requested information about our pricing and plans; (c) Improve our website and services; (d) Send you relevant updates about our services if you have opted in. We do not sell, trade, or share your personal information with third parties without your consent, except as required by law."
              },
              {
                title: "3. Data Security",
                content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security."
              },
              {
                title: "4. Cookies",
                content: "Our website may use cookies to enhance your experience. Cookies are small files placed on your device that help us analyze website traffic and improve our services. You can disable cookies in your browser settings, though this may affect some functionality of our website."
              },
              {
                title: "5. Third-Party Services",
                content: "We use third-party services such as Google Analytics and Facebook Pixel for advertising and analytics purposes. These services may collect information about your visit to our website in accordance with their own privacy policies. We recommend reviewing the privacy policies of these services."
              },
              {
                title: "6. Your Rights",
                content: "You have the right to: (a) Access the personal information we hold about you; (b) Request correction of inaccurate data; (c) Request deletion of your data; (d) Opt out of marketing communications at any time. To exercise these rights, contact us at shreyasinghapd07@gmail.com."
              },
              {
                title: "7. Contact Us",
                content: "If you have questions about this Privacy Policy, please contact us at: Email: shreyasinghapd07@gmail.com | Phone: 9732325777 | Address: Siliguri, West Bengal, India."
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
