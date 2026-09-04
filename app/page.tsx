import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/Navbar";
import HeritageCard from "./components/HeritageCard";

const destinations = [
  {
    number: "01",
    title: "Hundred Islands",
    location: "Alaminos City",
    description:
      "Discover a breathtaking collection of limestone islands surrounded by the waters of Lingayen Gulf.",
    image: "/images/hundred-islands.jpg",
    href: "/destinations/hundred-islands",
  },
  {
    number: "02",
    title: "Bolinao Lighthouse",
    location: "Bolinao",
    description:
      "Visit one of Pangasinan's most iconic coastal landmarks and experience spectacular sea views.",
    image: "/images/bolinao-lighthouse.jpg",
    href: "/destinations/bolinao-lighthouse",
  },
  {
    number: "03",
    title: "Balungao Hot Spring",
    location: "Balungao",
    description:
      "Experience the warmth of natural hot springs nestled at the foot of majestic Mount Balungao.",
    image: "/images/balungao-hot-spring.jpg",
    href: "/destinations/balungao-hot-spring",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#0E2958]">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[760px] overflow-hidden bg-[#071A38]">

        <Image
          src="/images/hero-pangasinan.jpg"
          alt="Beautiful landscape of Pangasinan"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A38]/95 via-[#071A38]/60 to-[#071A38]/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071A38]/90 via-transparent to-[#071A38]/20" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-6 pb-24 pt-36 lg:px-10 lg:pb-32">

          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#E9D8B4]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E9D8B4]">
                Province of Pangasinan
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Where heritage
              <br />
              meets{" "}
              <span className="font-normal italic text-[#E9D8B4]">
                wonder.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Discover the stories, landscapes, traditions, and unforgettable
              places that make Pangasinan one of Northern Luzon&apos;s
              remarkable destinations.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="#destinations"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F4E9D2] px-7 py-4 text-sm font-bold text-[#0E2958] transition hover:bg-white"
              >
                Explore destinations

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Discover our story
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Information */}
        <div className="absolute bottom-0 left-0 right-0 hidden border-t border-white/15 bg-black/10 backdrop-blur-md md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-5">

            <p className="text-xs uppercase tracking-[0.25em] text-white/60">
              Culture • History • Nature • Community
            </p>

            <p className="text-xs text-white/50">
              Explore the heart of Pangasinan
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A7847]">
              A place worth discovering
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Stories shaped by
              <br />

              <span className="font-normal italic">
                land and sea.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Pangasinan is a province where natural beauty and cultural
              heritage come together. From island landscapes and historic
              lighthouses to refreshing mountain springs, every destination
              carries a story waiting to be experienced.
            </p>
          </div>

        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section
        id="destinations"
        className="bg-[#0E2958] px-6 py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E9D8B4]">
                Featured destinations
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Three places.
                <br />

                <span className="font-normal italic text-white/70">
                  Endless stories.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/60">
              Start your journey through some of Pangasinan&apos;s most
              recognizable heritage and natural attractions.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {destinations.map((destination) => (
              <HeritageCard
                key={destination.number}
                number={destination.number}
                title={destination.title}
                location={destination.location}
                description={destination.description}
                image={destination.image}
                href={destination.href}
              />
            ))}

          </div>
        </div>
      </section>

      {/* ================= HERITAGE STATEMENT ================= */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9A7847]">
            More than a destination
          </p>

          <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Every corner of Pangasinan
            <br className="hidden sm:block" />

            <span className="font-normal italic">
              tells a story.
            </span>
          </h2>

          <div className="mx-auto mt-8 h-px w-16 bg-[#D8C49E]" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-600">
            Preserve the past, experience the present, and discover the places
            that shape the identity of Pangasinan.
          </p>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        id="contact"
        className="px-6 pb-8 lg:px-10"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#DCC8A5] px-7 py-16 sm:px-12 lg:px-20 lg:py-20">

          <div className="relative z-10 max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0E2958]/60">
              Your journey starts here
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#0E2958] sm:text-5xl">
              Experience the heart of Pangasinan.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-[#0E2958]/70">
              Explore heritage sites, natural wonders, and stories that make
              Pangasinan worth remembering.
            </p>

            <Link
              href="#destinations"
              className="mt-8 inline-flex rounded-full bg-[#0E2958] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#071A38]"
            >
              Begin exploring →
            </Link>

          </div>

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-[#0E2958]/10" />

          <div className="absolute -bottom-32 -right-5 h-72 w-72 rounded-full border-[30px] border-[#0E2958]/10" />

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="px-6 pb-10 pt-16 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 border-b border-[#0E2958]/10 pb-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="lg:col-span-2">

              <p className="text-lg font-bold tracking-[0.15em]">
                PANGASINAN
              </p>

              <p className="mt-1 text-xs tracking-[0.3em] text-slate-500">
                HERITAGE
              </p>

              <p className="mt-6 max-w-sm text-sm leading-6 text-slate-500">
                A digital showcase celebrating the culture, heritage, and
                natural wonders of Pangasinan.
              </p>

            </div>

            {/* Explore */}
            <div>

              <p className="text-sm font-bold">
                Explore
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">

                <Link
                  href="#destinations"
                  className="transition hover:text-[#0E2958]"
                >
                  Destinations
                </Link>

                <Link
                  href="#about"
                  className="transition hover:text-[#0E2958]"
                >
                  About Pangasinan
                </Link>

                <Link
                  href="#contact"
                  className="transition hover:text-[#0E2958]"
                >
                  Contact
                </Link>

              </div>
            </div>

            {/* Heritage */}
            <div>

              <p className="text-sm font-bold">
                Heritage
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">

                <span>Culture</span>
                <span>History</span>
                <span>Nature</span>
                <span>Community</span>

              </div>

            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-slate-400 sm:flex-row">

            <p>
              © 2026 Pangasinan Heritage. All rights reserved.
            </p>

            <p>
              Built for a faster, more accessible web.
            </p>

          </div>

        </div>
      </footer>

    </main>
  );
}