import shalwar from "@/assets/shalwar-kameez.jpg";
import sherwani from "@/assets/sherwani.jpg";
import Omi from "@/assets/S1.jpg";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    img: shalwar,
    title: "Shalwar Kameez",
    desc: "Crisp silhouettes in raw silk, cotton and wash-and-wear — for everyday elegance and Eid occasions.",
    price: "From PKR 12,500",
    tag: "Menswear",
  },
  {
    img: sherwani,
    title: "Royal Sherwani",
    desc: "Hand-embroidered zardozi sherwanis with pearl detailing, tailored for grooms and ceremonial wear.",
    price: "From PKR 65,000",
    tag: "Groom",
  },
  {
    img: Omi,
    title: "Groom Wedding Package",
    desc: "Complete couture trousseau — lehenga, dupatta, jewelry styling and grooming essentials.",
    price: "From PKR 50,000",
    tag: "Groom",
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-28 md:py-36 bg-gradient-dark relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-60 pointer-events-none" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto animate-fade-in">
          <span className="divider-gold text-[11px] uppercase tracking-[0.4em]">Collection</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">
            Crafted for the <span className="text-gold italic">Connoisseur</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three signature lines, each born of decades of artisanship.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <article
              key={p.title}
              className="luxe-card group overflow-hidden flex flex-col animate-fade-in"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <img src={p.img} alt={p.title} width={1024} height={1280} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] bg-background/70 backdrop-blur px-3 py-1.5 text-primary border border-primary/40">
                  {p.tag}
                </span>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                <div className="mt-6 flex items-center justify-between pt-5 border-t border-border/60">
                  <span className="text-sm text-gold font-medium">{p.price}</span>
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-primary hover:gap-3 transition-all duration-500">
                    Enquire <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
