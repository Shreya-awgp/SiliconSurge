import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1.5 rounded-md flex items-center justify-center">
                <i className="bi bi-lightning-charge-fill text-primary-foreground" style={{ fontSize: "1.1rem", lineHeight: 1 }} />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                The Silicon Surge
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-service digital advertising agency based in Siliguri, West Bengal. We run high-ROI ad campaigns for e-commerce, coaching centres, schools, tech companies, job services, and more.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://wa.me/919732325777"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-green-400 hover:bg-green-500/10 transition-all"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp" style={{ fontSize: "1rem" }} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin" style={{ fontSize: "1rem" }} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook" style={{ fontSize: "1rem" }} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram" style={{ fontSize: "1rem" }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground flex items-center gap-2">
              <i className="bi bi-grid-3x3-gap-fill text-primary" style={{ fontSize: "0.9rem" }} />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home", icon: "bi-house-fill" },
                { href: "/services", label: "Services", icon: "bi-gear-fill" },
                { href: "/plans", label: "Pricing & Plans", icon: "bi-tag-fill" },
                { href: "/case-studies", label: "Case Studies", icon: "bi-bar-chart-fill" },
                { href: "/about", label: "About Us", icon: "bi-info-circle-fill" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
                  >
                    <i className={`bi ${item.icon} text-primary/50 group-hover:text-primary transition-colors`} style={{ fontSize: "0.75rem" }} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground flex items-center gap-2">
              <i className="bi bi-shield-check-fill text-primary" style={{ fontSize: "0.9rem" }} />
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/privacy-policy", label: "Privacy Policy", icon: "bi-lock-fill" },
                { href: "/terms", label: "Terms of Service", icon: "bi-file-text-fill" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
                  >
                    <i className={`bi ${item.icon} text-primary/50 group-hover:text-primary transition-colors`} style={{ fontSize: "0.75rem" }} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground flex items-center gap-2">
              <i className="bi bi-chat-dots-fill text-primary" style={{ fontSize: "0.9rem" }} />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9732325777"
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <i className="bi bi-telephone-fill text-primary" style={{ fontSize: "0.8rem" }} />
                  </span>
                  <span className="pt-1">9732325777</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:shreyasinghapd07@gmail.com"
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <i className="bi bi-envelope-fill text-primary" style={{ fontSize: "0.8rem" }} />
                  </span>
                  <span className="pt-1 break-all">shreyasinghapd07@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <i className="bi bi-geo-alt-fill text-primary" style={{ fontSize: "0.8rem" }} />
                  </span>
                  <span className="pt-1">Siliguri, West Bengal, India</span>
                </div>
              </li>
              <li>
                <a
                  href="https://wa.me/919732325777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-2 px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/20 transition-all w-full justify-center"
                >
                  <i className="bi bi-whatsapp" style={{ fontSize: "1rem" }} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <i className="bi bi-c-circle text-primary/60" style={{ fontSize: "0.8rem" }} />
            {currentYear} The Silicon Surge. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <i className="bi bi-meta text-primary/70" style={{ fontSize: "0.85rem" }} />
              Meta Ads
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1.5">
              <i className="bi bi-linkedin text-primary/70" style={{ fontSize: "0.85rem" }} />
              LinkedIn Ads
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1.5">
              <i className="bi bi-google text-primary/70" style={{ fontSize: "0.85rem" }} />
              Google Ads
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
