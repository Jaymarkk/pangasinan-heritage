import Image from "next/image";
import Link from "next/link";

interface HeritageCardProps {
  number: string;
  title: string;
  location: string;
  description: string;
  image: string;
  href: string;
}

export default function HeritageCard({
  number,
  title,
  location,
  description,
  image,
  href,
}: HeritageCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[2rem] bg-white focus:outline-none focus:ring-2 focus:ring-[#E9D8B4] focus:ring-offset-4 focus:ring-offset-[#0E2958]"
    >
      <article className="relative aspect-[4/5] overflow-hidden">

        {/* Image */}
        <Image
          src={image}
          alt={`${title} in ${location}`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

        {/* Number */}
        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xs font-bold text-white backdrop-blur-md">
          {number}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E9D8B4]">
            {location}
          </p>

          <h3 className="text-2xl font-semibold leading-tight text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/70">
            {description}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm font-bold text-white">
            <span>Explore</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}