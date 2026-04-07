import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Plans", path: "/plans" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-md group-hover:scale-110 transition-transform flex items-center justify-center">
            <i className="bi bi-lightning-charge-fill text-primary-foreground" style={{ fontSize: "1.1rem", lineHeight: 1 }} />
          </div>
          <span className="font-bold text-xl md:text-2xl tracking-tight text-foreground">
            The Silicon Surge
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.path ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="font-semibold shadow-md hover:scale-105 transition-transform gap-2" data-testid="button-nav-cta">
            <Link href="/contact">
              <i className="bi bi-rocket-takeoff-fill" style={{ fontSize: "0.85rem" }} />
              Get Started
            </Link>
          </Button>
        </nav>

        {/* Mobile Hamburger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-secondary transition-colors"
              data-testid="button-mobile-menu"
              aria-label="Open menu"
            >
              <i
                className={`bi ${isOpen ? "bi-x-lg" : "bi-list"} text-foreground`}
                style={{ fontSize: "1.4rem", lineHeight: 1 }}
              />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] flex flex-col pt-16 bg-background border-l-border">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary flex items-center gap-3 ${
                    location === link.path ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {location === link.path && (
                    <i className="bi bi-chevron-right text-primary" style={{ fontSize: "0.75rem" }} />
                  )}
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="font-semibold mt-4 gap-2"
                data-testid="button-mobile-cta"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/contact">
                  <i className="bi bi-rocket-takeoff-fill" style={{ fontSize: "0.85rem" }} />
                  Get Started
                </Link>
              </Button>

              {/* Mobile contact quick links */}
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href="tel:9732325777"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <i className="bi bi-telephone-fill text-primary" style={{ fontSize: "0.9rem" }} />
                  9732325777
                </a>
                <a
                  href="https://wa.me/919732325777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-green-400 transition-colors"
                >
                  <i className="bi bi-whatsapp" style={{ fontSize: "0.9rem", color: "#25d366" }} />
                  WhatsApp Us
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
