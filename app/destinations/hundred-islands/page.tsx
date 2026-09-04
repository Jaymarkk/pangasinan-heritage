import Image from "next/image";
import Link from "next/link";

export default function HundredIslandsPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#0E2958]">

      <section className="relative h-[70vh] min-h-[600px] overflow-hidden bg-[#071A38]">

        <Image
          src="/images/hundred-island.jpg"
          alt="Hundred Islands in Alaminos City, Pangasinan"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071A38] via-black/30 to-black/10" />

        <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-16 lg:px-10">

          <div>
            <Link
              href="/"
              className="mb-8 inline-flex text-sm font-semibold text-white/70 hover:text-white"
            >
              ← Back to home
            </Link>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E9D8B4]">
              Alaminos City
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Hundred Islands
            </h1>

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:py-28">

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A7847]">
          About the destination
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          A landscape shaped by the sea.
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          Hundred Islands is one of Pangasinan&apos;s most recognizable natural
          attractions. Its collection of limestone islands and surrounding
          waters creates a unique landscape that attracts visitors from
          different places.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          The destination represents the province&apos;s connection to nature,
          tourism, and local communities.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-[#0E2958] px-7 py-4 text-sm font-bold text-white"
        >
          Explore more destinations →
        </Link>

      </section>

    </main>
  );
}