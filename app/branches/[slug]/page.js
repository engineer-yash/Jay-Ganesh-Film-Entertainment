import Image from “next/image”; import Link from “next/link”; import {
notFound } from “next/navigation”; import { branches, getBranch } from
“@/data/branches”; import { ArrowLeft, MapPin, Phone, Instagram,
ExternalLink, } from “lucide-react”;

export async function generateStaticParams() { return branches.map((b)
=> ({ slug: b.slug, })); }

export async function generateMetadata({ params }) { const branch =
getBranch(params.slug);

if (!branch) { return { title: “Branch Not Found”, }; }

return { title: ${branch.name} | ${branch.tag}, description:
branch.tagline, openGraph: { title: branch.name, description:
branch.tagline, images: [branch.poster || branch.image], }, }; }

export default async function BranchPage({ params }) { const branch =
getBranch(params.slug);

if (!branch) { notFound(); }

return (
      <div className="mx-auto max-w-7xl px-4">

        <Link
          href="/branches"
          className="inline-flex items-center gap-2 text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all branches
        </Link>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src={branch.poster || branch.image}
              alt={branch.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-primary uppercase tracking-widest">
              {branch.tag}
            </p>

            <h1 className="text-5xl font-bold mt-3">
              {branch.name}
            </h1>

            <p className="mt-5 text-lg text-gray-500">
              {branch.tagline}
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary"/>
                <span>{branch.address}</span>
              </div>

              {branch.phone && (
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-primary"/>
                  <a href={`tel:+91${branch.phone}`}>
                    +91 {branch.phone}
                  </a>
                </div>
              )}

              <div className="flex gap-3">
                <Instagram className="h-5 w-5 text-primary"/>
                <a href={branch.instagram} target="_blank">
                  Instagram
                </a>
              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {branch.highlights?.map(item=>(
                <span
                  key={item}
                  className="border rounded-full px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

        </div>

        {branch.classes && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-6">
              Classes Offered
            </h2>

            <div className="flex flex-wrap gap-3">
              {branch.classes.map(item=>(
                <span
                  key={item}
                  className="rounded-full border px-5 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        )}

        {branch.weekday && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-6">
              Weekday Schedule
            </h2>

            <table className="w-full">
              <tbody>
                {branch.weekday.map(row=>(
                  <tr key={row.time} className="border-b">
                    <td className="py-3">{row.time}</td>
                    <td>{row.class}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {branch.weekend && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-6">
              Weekend Schedule
            </h2>

            <table className="w-full">
              <tbody>
                {branch.weekend.map(row=>(
                  <tr key={row.time} className="border-b">
                    <td className="py-3">{row.time}</td>
                    <td>{row.class}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {branch.fees && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-6">
              Fees
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {branch.fees.map(fee=>(
                <div
                  key={fee.plan}
                  className="border rounded-2xl p-5"
                >
                  <h3>{fee.plan}</h3>
                  <p className="text-primary font-bold">
                    {fee.price}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {branch.workshops && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-6">
              Workshops
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              {branch.workshops.map(ws=>(
                <div
                  key={ws.title}
                  className="border rounded-2xl p-5"
                >
                  <h3>{ws.title}</h3>
                  <p>{ws.date}</p>
                  <p>{ws.mentor}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {branch.mapsEmbed && (
          <section className="mt-20">
            <iframe
              src={branch.mapsEmbed}
              className="w-full aspect-video rounded-3xl"
              loading="lazy"
              allowFullScreen
            />
          </section>
        )}

      </div>
    </div>

); }
