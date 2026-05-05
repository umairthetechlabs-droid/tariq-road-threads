import { useState, FormEvent } from "react";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Please enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email";
    if (form.phone.trim().length < 7) e.phone = "Please enter a valid phone number";
    if (form.message.trim().length < 10) e.message = "Tell us a little more (10+ characters)";
    return e;
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      toast.success("Thank you! We'll be in touch within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  const field = (k: keyof typeof form, label: string, type = "text", textarea = false) => (
    <div>
      <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      {textarea ? (
        <textarea
          rows={4}
          value={form[k]}
          onChange={(e) => setForm({ ...form, [k]: e.target.value })}
          className="mt-2 w-full bg-input/60 border border-border focus:border-primary outline-none px-4 py-3 text-sm transition-colors resize-none"
        />
      ) : (
        <input
          type={type}
          value={form[k]}
          onChange={(e) => setForm({ ...form, [k]: e.target.value })}
          className="mt-2 w-full bg-input/60 border border-border focus:border-primary outline-none px-4 py-3 text-sm transition-colors"
        />
      )}
      {errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>}
    </div>
  );

  return (
    <section id="contact" className="py-28 md:py-36 bg-gradient-dark">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto animate-fade-in">
          <span className="divider-gold text-[11px] uppercase tracking-[0.4em]">Visit the Atelier</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">
            Let's Begin Your <span className="text-gold italic">Story</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Book a private consultation at our Tariq Road flagship, or send us a message below.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {[
              { Icon: MapPin, t: "Atelier Address", v: "Plot 206 B, motiwala centre, Tariq Rd, near Madina Masjid, Block 2 P.E.C.H.S., Karachi" },
              { Icon: Phone, t: "Call Us", v: "+92 346 2688258", href: "tel:+923462688258" },
              { Icon: MessageCircle, t: "WhatsApp", v: "Chat instantly", href: "https://wa.me/923001234567", cta: true },
              { Icon: Mail, t: "Email", v: "zubaircollection@gmail.com", href: "mailto:zubaircollection@gmail.com" },
            ].map(({ Icon, t, v, href, cta }) => (
              <a
                key={t}
                href={href ?? "#"}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`luxe-card p-5 flex items-start gap-4 ${cta ? "border-primary/60" : ""}`}
              >
                <div className={`w-11 h-11 flex-shrink-0 flex items-center justify-center border ${cta ? "bg-gradient-gold border-transparent text-primary-foreground" : "border-primary/50 text-primary"}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{t}</div>
                  <div className="mt-1 text-foreground">{v}</div>
                </div>
              </a>
            ))}

            <div className="luxe-card overflow-hidden h-56">
              <iframe
                title="Tariq Road location"
                src="https://www.google.com/maps?q=Tariq+Road,+Karachi&output=embed"
                className="w-full h-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-3 luxe-card p-8 md:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              {field("name", "Full Name")}
              {field("phone", "Phone Number", "tel")}
            </div>
            {field("email", "Email Address", "email")}
            {field("message", "Tell us about your occasion", "text", true)}
            <button type="submit" className="btn-gold w-full px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
