import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Collection" },
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3" : "py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none">
          <img src="/assets/gallery-1-DM7_v2Yr.jpg" alt="Tariq Road Couture" className="h-10 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-primary link-underline transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden lg:inline-flex btn-gold px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium">
          Book Fittings
        </a>

        <button onClick={() => setOpen((v) => !v)} aria-label="Menu" className="lg:hidden text-primary">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/60 animate-fade-in">
          <nav className="container flex flex-col py-6 gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base text-foreground/90 hover:text-primary">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-center mt-2">
              Book Fittingss
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
