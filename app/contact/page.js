"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Instagram, Send, Loader2 } from "lucide-react";
import { branches } from "@/data/branches";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Motion";
import JoinStudioForm from "@/components/site/JoinStudioForm";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "hinjewadi",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      toast.success("Message received! We’ll get back to you within 24 hours.");
      setForm({
        name: "",
        email: "",
        phone: "",
        branch: "hinjewadi",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again or WhatsApp us.");
    }
    setLoading(false);
  };

  return (
    <div className="pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      <section className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary">
              Contact
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.02]">
              Let’s <span className="text-gradient-gold">talk</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground">
              Book a trial, register for a workshop, enquire about hall rental,
              event registration or wedding choreography — drop us a note and
              we’ll reach out within 24 hours.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />{" "}
                <a href="tel:+919923951535" className="hover:text-primary">
                  +91 99239 51535
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />{" "}
                <a href="tel:+918149663995" className="hover:text-primary">
                  +91 81496 63995
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />{" "}
                <a
                  href="mailto:mukeshchaudhari106@gmail.com"
                  className="hover:text-primary"
                >
                  mukeshchaudhari106@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-primary" />{" "}
                <a
                  href="https://www.instagram.com/mukesh_chaudhari3995/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  @mukesh_chaudhari3995
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {branches.map((b) => (
                <a
                  key={b.slug}
                  href={b.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl border border-border bg-card/40 hover:border-primary transition group"
                >
                  <div className="text-[10px] uppercase tracking-widest text-primary">
                    {b.tag}
                  </div>
                  <div className="font-display text-lg mt-1 group-hover:text-primary transition">
                    {b.name}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground flex items-start gap-1">
                    <MapPin className="h-3 w-3 mt-0.5 shrink-0" /> {b.address}
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* <div className="lg:col-span-6">
          <motion.form onSubmit={submit} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="p-8 rounded-3xl border border-border bg-card/40 backdrop-blur space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                <input required value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Preferred branch</label>
              <select value={form.branch} onChange={(e)=>setForm({...form, branch: e.target.value})} className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition">
                {branches.map((b) => (<option key={b.slug} value={b.slug}>{b.name} — {b.tag}</option>))}
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">What are you interested in?</label>
              <textarea rows={4} required value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} placeholder="Trial class, workshop, event registration, hall rental, wedding choreography..." className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition" />
            </div>
            <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition disabled:opacity-50">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} Send message
            </button>
          </motion.form>
        </div> */}
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Join Our Studio</h2>
            <p className="text-white/60 mt-2">
              Fill the form and we'll receive it on WhatsApp instantly.
            </p>
          </div>
          <JoinStudioForm
            studioName="My Style Dance Studio"
            branchLabel="Hinjewadi Phase 1"
          />
        </div>
      </section>

      <section className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps?q=Akshay+Plaza+Hinjewadi+Phase+1+Pune&output=embed"
              loading="lazy"
              className="w-full aspect-[16/9]"
              title="Jay Ganesh Films — Hinjewadi flagship map"
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
