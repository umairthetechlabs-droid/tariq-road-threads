import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const reviews = [
  {
    quote: "My wedding sherwani was beyond perfection — the embroidery was a piece of art. Every guest asked where it was made.",
    name: "Hassan Ali",
    role: "Groom · 2025",
  },
  {
    quote: "The bridal package took every worry off my shoulders. From the first fitting to the final reveal, it was pure magic.",
    name: "Ayesha Khan",
    role: "Bride · 2024",
  },
  {
    quote: "I have been getting my Eid kameez stitched here for over a decade. The craftsmanship is unmatched in Karachi.",
    name: "Tariq Mahmood",
    role: "Loyal Client · 12 Years",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-28 md:py-36">
      <div className="container max-w-4xl text-center">
        <span className="divider-gold text-[11px] uppercase tracking-[0.4em]">Testimonials</span>
        <h2 className="mt-6 font-serif text-4xl md:text-5xl">
          Voices of Our <span className="text-gold italic">Clients</span>
        </h2>

        <div className="mt-16 relative min-h-[260px]">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <Quote className="mx-auto text-primary/60" size={36} />
              <p className="mt-6 font-serif text-2xl md:text-3xl leading-relaxed text-foreground/90 italic">
                "{r.quote}"
              </p>
              <div className="mt-8">
                <div className="text-gold font-medium">{r.name}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1">{r.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-px transition-all duration-500 ${
                idx === i ? "w-12 bg-primary" : "w-6 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
