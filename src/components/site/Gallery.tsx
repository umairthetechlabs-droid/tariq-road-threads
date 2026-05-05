import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import sherwani from "@/assets/sherwani.jpg";
import s1 from "@/assets/S1.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/s2.jpg";
import s4 from "@/assets/s2.jpg";
import s5 from "@/assets/s2.jpg";
import s6 from "@/assets/s2.jpg";
import s7 from "@/assets/s2.jpg";

const items = [
  { src: g3, alt: "Bride and groom couple", span: "md:col-span-2 md:row-span-2" },
  { src: sherwani, alt: "Ivory sherwani close-up", span: "" },
  { src: g1, alt: "Gold zardozi embroidery", span: "" },
  { src: g2, alt: "Groom side portrait in black", span: "" },
  { src: s1, alt: "mens sherwani", span: "" },
  { src: g4, alt: "Hand stitching gold thread", span: "md:col-span-2" },
  { src: s2, alt: "Hand stitching gold thread", span: "md:col-span-2" },
  { src: s3, alt: "Hand stitching gold thread", span: "md:col-span-2" },
  { src: s4, alt: "Hand stitching gold thread", span: "md:col-span-2" },
  { src: s5, alt: "Hand stitching gold thread", span: "md:col-span-2" },
  { src: s6, alt: "Hand stitching gold thread", span: "md:col-span-2" },
  { src: s7, alt: "Hand stitching gold thread", span: "md:col-span-2" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-28 md:py-36">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto animate-fade-in">
          <span className="divider-gold text-[11px] uppercase tracking-[0.4em]">Gallery</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">
            Moments inwe <span className="text-gold italic">Couturees</span>
          </h2>
          <p className="mt-4 text-muted-foreground">A glimpse into our atelier and the silhouettes we craft.</p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group animate-fade-in ${it.span}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/0 group-hover:ring-primary/60 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
