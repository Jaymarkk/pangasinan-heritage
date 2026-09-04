import Image from "next/image";
import Link from "next/link";

export default function BalungaoHotSpringPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#0E2958]">

      <section className="relative h-[70vh] min-h-[600px] overflow-hidden bg-[#071A38]">

        <Image
          src="/images/balungao-hot-spring1.jpg"
          alt="Balungao Hot Spring in Pangasinan"
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
              Balungao
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Balungao Hot Spring
            </h1>

          </div>

        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:py-28">

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A7847]">
          About the destination
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Natural warmth beneath the mountain.
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          Balungao is known for its natural hot spring and the impressive
          presence of Mount Balungao. The area provides visitors with an
          opportunity to experience Pangasinan&apos;s natural landscapes in a
          relaxing setting.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          It is another example of how the province&apos;s natural environment
          contributes to its tourism and local identity.
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