import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:9732325777"
        data-testid="button-floating-call"
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 hover:shadow-primary/40 hover:shadow-xl"
        title="Call us"
      >
        <Phone className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
      </a>
      <a
        href="https://wa.me/919732325777"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="button-floating-whatsapp"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 hover:shadow-green-500/40 hover:shadow-xl"
        title="WhatsApp us"
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
