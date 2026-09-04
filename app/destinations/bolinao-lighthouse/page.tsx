import Image from "next/image";
import Link from "next/link";

export default function BolinaoLighthousePage() {
  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#0E2958]">

      <section className="relative h-[70vh] min-h-[600px] overflow-hidden bg-[#071A38]">

        <Image
          src="/images/bolinao-lighthouse1.jpg"
          alt="Bolinao Lighthouse in Pangasinan"
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
              Bolinao
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Bolinao Lighthouse
            </h1>

          </div>

        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:py-28">

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A7847]">
          About the destination
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          A landmark overlooking the coast.
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          The Bolinao Lighthouse stands as one of the recognizable landmarks
          along Pangasinan&apos;s western coastline. Its elevated location
          provides visitors with beautiful views of the surrounding landscape
          and sea.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Beyond its scenic value, the lighthouse forms part of the coastal
          heritage that helps tell the story of Bolinao.
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