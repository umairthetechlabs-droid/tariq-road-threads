import { Scissors, Crown, Gem, Sparkles } from "lucide-react";

const services = [
  { icon: Scissors, title: "Custom Stitching", desc: "Bespoke tailoring with personal measurements, multiple fittings, and on-time delivery." },
  { icon: Crown, title: "Bridal Packages", desc: "End-to-end bridal couture — from concept consultation to final reveal, including styling." },
  { icon: Gem, title: "Premium Fabrics", desc: "Hand-picked silk, jamawar, banarasi, raw cotton and imported wool from trusted weavers." },
  { icon: Sparkles, title: "Heritage Embroidery", desc: "Traditional zardozi, dabka, sequin and pearl work executed by master karigars." },
];

export const Services = () => {
  return (
    <section id="services" className="py-28 md:py-36 bg-gradient-dark relative">
      <div className="container relative">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 animate-fade-in">
            <span className="divider-gold text-[11px] uppercase tracking-[0.4em]">Services</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
              The Atelier <span className="text-gold italic">Experience</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Beyond garments — a service rooted in tradition, refined for the modern client. Every appointment is private, every fitting personal.
            </p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="luxe-card p-7 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-primary/50 text-primary mb-5">
                  <s.icon size={20} />
                </div>
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
