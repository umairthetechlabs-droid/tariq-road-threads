import heroImg from "@/assets/hero.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Pakistani groom in ivory and gold sherwani" width={1920} height={1080} className="w-full h-full object-cover object-center scale-105 animate-fade-in-slow" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl animate-fade-in">
          <span className="divider-gold text-[11px] uppercase tracking-[0.4em] font-medium">Since 1998 · Tariq Road, Karachi</span>
          <h1 className="mt-8 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Threads of <span className="text-gold italic">Heritage</span>,
            <br />
            Stitched in Gold.
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            Bespoke Shalwar Kameez, royal Sherwanis and bridal couture — handcrafted by master artisans for the most timeless moments of your life.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#products" className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium">
              Shop Collection <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500">
              Contact Atelier
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "25+", l: "Years of Craft" },
              { n: "10K+", l: "Outfits Stitched" },
              { n: "1.2K+", l: "Bridal Couples" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-gold">{s.n}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground animate-float">
        Scroll
      </div>
    </section>
  );
};
