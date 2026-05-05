import { Instagram, Facebook, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 pt-20 pb-8">
      <div className="container grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-3xl text-gold">Tariq Road</span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Couture</span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            A house of timeless menswear and bridal couture, crafted on Tariq Road, Karachi since 1998.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: MessageCircle, href: "https://wa.me/923001234567" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-primary">Explore</div>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["#about", "About"],
              ["#products", "Collection"],
              ["#gallery", "Gallery"],
              ["#services", "Services"],
              ["#contact", "Contact"],
            ].map(([h, l]) => (
              <li key={h}><a href={h} className="text-muted-foreground hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-primary">Atelier Hours</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>Mon – Sat · 11am – 10pm</li>
            <li>Sunday · 2pm – 9pm</li>
            <li className="pt-3 text-foreground">Tariq Road, Karachi</li>
            <li>+92 300 1234567</li>
          </ul>
        </div>
      </div>

      <div className="container mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Tariq Road Couture. All rights reserved.</p>
        <p className="tracking-wider">Crafted with gold thread in Karachi.</p>
      </div>
    </footer>
  );
};
