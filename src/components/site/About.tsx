import gallery1 from "@/assets/gallery-1.jpg";

export const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 relative">
      <div className="container grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative animate-fade-in">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={gallery1} alt="Gold zardozi embroidery detail" width={1024} height={1280} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-12 bg-card border border-primary/40 px-8 py-6 shadow-gold">
            <div className="font-serif text-4xl text-gold">25+</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">Years of Mastery</div>
          </div>
          <div className="absolute -top-6 -left-4 w-24 h-24 border border-primary/40 -z-10" />
        </div>

        <div className="animate-fade-in">
          <span className="divider-gold text-[11px] uppercase tracking-[0.4em]">Our Story</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
            A House of <span className="text-gold italic">Timeless</span> Craftsmanship
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Nestled in the heart of <span className="text-primary">Tariq Road, Karachi</span>, Tariq Road Couture has been dressing generations of gentlemen and brides since 1998. What began as a modest atelier is today a destination for those who seek more than clothing — they seek artistry.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every stitch carries decades of inherited skill. From regal sherwanis to silken shalwar kameez and breathtaking bridal ensembles, our master karigars blend traditional zardozi with modern silhouettes — crafted only with the finest fabrics sourced across the subcontinent.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { t: "Bespoke Tailoring", d: "Hand-measured, hand-finished." },
              { t: "Premium Fabrics", d: "Silks, raw cottons, jamawar." },
              { t: "Heritage Design", d: "Rooted in South Asian artistry." },
              { t: "Bridal Atelier", d: "Curated couture experiences." },
            ].map((f) => (
              <div key={f.t} className="border-l-2 border-primary/60 pl-4">
                <div className="font-serif text-lg text-foreground">{f.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
