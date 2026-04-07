import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const hasShown = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!hasShown.current && e.clientY < 50) {
        hasShown.current = true;
        setTimeout(() => setIsOpen(true), 200);
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setIsOpen(false), 2000);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            className="relative bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-exit-popup-close"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary p-1.5 rounded-md">
                    <Zap className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">Wait! Don't leave</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2 leading-tight">
                  Get a Free Ad Strategy Before You Go
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Whether you sell products, run a coaching centre, or own a tech company — we'll build a custom ad plan for your business. Free, no commitment.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    data-testid="input-exit-name"
                    className="bg-secondary border-border"
                  />
                  <Input
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    type="tel"
                    data-testid="input-exit-phone"
                    className="bg-secondary border-border"
                  />
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger className="bg-secondary border-border" data-testid="select-exit-budget">
                      <SelectValue placeholder="Monthly Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-6k">Under ₹6,000</SelectItem>
                      <SelectItem value="6k-15k">₹6,000 – ₹15,000</SelectItem>
                      <SelectItem value="15k-25k">₹15,000 – ₹25,000</SelectItem>
                      <SelectItem value="25k-plus">₹25,000+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" className="w-full font-semibold text-base h-12 mt-2" data-testid="button-exit-submit">
                    Get Free Consultation
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-foreground mb-2">We'll be in touch!</h3>
                <p className="text-muted-foreground text-sm">Our team will call you within 24 hours.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
