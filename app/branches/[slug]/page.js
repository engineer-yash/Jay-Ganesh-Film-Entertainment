import Image from "next/image";
import { notFound } from "next/navigation";
import { branches } from "@/data/branches";
import {
  MapPin,
  Phone,
  Instagram,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return branches.map((branch) => ({
    slug: branch.slug,
  }));
}

export async function generateMetadata({ params }) {
  const branch = branches.find((b) => b.slug === params.slug);

  if (!branch) {
    return {
      title: "Branch Not Found",
    };
  }

  return {
    title: `${branch.name} | Jay Ganesh Films Entertainment`,
    description: branch.tagline,
  };
}

export default async function BranchPage({ params }) {
  const branch = branches.find((b) => b.slug === params.slug);

  if (!branch) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24">

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <Link
          href="/branches"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all branches
        </Link>

        <div className="mt-8 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary">
              {branch.tag}
            </div>

            <h1 className="font-display text-5xl md:text-7xl mt-3">
              {branch.name}
            </h1>

            <p className="mt-6 text-xl text-muted-foreground italic">
              {branch.tagline}
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex gap-3">
                <MapPin className="text-primary w-5 h-5 mt-1 shrink-0" />
                <span>{branch.address}</span>
              </div>

              {branch.phone && (
                <div className="flex gap-3">
                  <Phone className="text-primary w-5 h-5" />
                  <a
                    href={`tel:+91${branch.phone}`}
                    className="hover:text-primary"
                  >
                    +91 {branch.phone}
                  </a>
                </div>
              )}

              <div className="flex gap-3">
                <Instagram className="text-primary w-5 h-5" />
                <a
                  href={branch.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  Visit Instagram
                </a>
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {branch.highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2"
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">

              <a
                href={branch.maps}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
              >
                Open in Google Maps
              </a>

              <a
                href={`tel:+91${branch.phone}`}
                className="px-6 py-3 rounded-full border border-border"
              >
                Call Now
              </a>

            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border">

            <Image
              src={branch.image}
              alt={branch.name}
              fill
              priority
              className="object-cover"
            />

          </div>

        </div>

      </section>

    </div>
  );
}