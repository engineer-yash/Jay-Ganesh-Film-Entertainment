"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram, Youtube, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

// Inline WhatsApp icon (lucide-react doesn't ship one)
function WhatsAppIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.747.457 3.398 1.318 4.876L2 22l5.35-1.4a9.87 9.87 0 0 0 4.687 1.184h.004c5.462 0 9.912-4.45 9.914-9.914 0-2.648-1.03-5.14-2.9-7.01A9.822 9.822 0 0 0 12.04 2zm0 18.13h-.003a8.23 8.23 0 0 1-4.195-1.15l-.3-.178-3.174.832.847-3.093-.196-.317a8.22 8.22 0 0 1-1.26-4.365c0-4.541 3.696-8.237 8.24-8.237a8.19 8.19 0 0 1 5.83 2.416 8.19 8.19 0 0 1 2.412 5.83c-.002 4.542-3.698 8.238-8.202 8.238z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const socialLinkClass =
    "inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition";

  const SocialIcons = ({ size = "md" }) => (
    <div className="flex items-center gap-2">
      <a
        href={site.socials.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className={socialLinkClass}
      >
        <Instagram className="h-4 w-4" />
      </a>
      <a
        href={site.socials.youtube}
        target="_blank"
        rel="noreferrer"
        aria-label="YouTube"
        className={socialLinkClass}
      >
        <Youtube className="h-4 w-4" />
      </a>
      <a
        href={site.socials.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className={socialLinkClass}
      >
        <Facebook className="h-4 w-4" />
      </a>
      <a
        href={site.socials.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className={socialLinkClass}
      >
        <WhatsAppIcon className="h-4 w-4" />
      </a>
    </div>
  );

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 group min-w-0"
        >
          <div className="relative h-12 w-12 md:h-16 md:w-16 shrink-0 rounded-full overflow-hidden ring-2 ring-primary/40 group-hover:ring-primary transition">
            <Image
              src={site.logo}
              alt="Jay Ganesh Films logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="leading-tight min-w-0">
            <div className="font-display text-base sm:text-xl md:text-2xl tracking-wide text-gradient-gold truncate">
              Jay Ganesh Films
            </div>
            <div className="text-[10px] sm:text-[12px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-muted-foreground truncate">
              Entertainment Pvt. Ltd.
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {site.nav.map((n) => {
            const active =
              pathname === n.href ||
              (n.href !== "/" && pathname.startsWith(n.href));
            return (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground",
                )}
              >
                {n.label}
                {active && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right side: social icons + Join a Class */}
        <div className="hidden md:flex items-center gap-3">
          <SocialIcons />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition"
          >
            Join a Class
          </Link>
        </div>

        {/* Mobile: hamburger only */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border overflow-hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            key={open ? "x" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl"
          >
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {
                  transition: { staggerChildren: 0.02, staggerDirection: -1 },
                },
                show: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                },
              }}
              className="px-4 py-4 flex flex-col gap-1"
            >
              {site.nav.map((n) => (
                <motion.div
                  key={n.href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={n.href}
                    className="block px-3 py-3 rounded-lg text-base font-medium hover:bg-muted transition"
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-3 flex items-center justify-center gap-2"
              >
                <SocialIcons />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href="/contact"
                  className="mt-3 block text-center px-4 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
                >
                  Join a Class
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
