import { MotionContainer, MotionImage, MotionLink, MotionSection } from "./Animated";

const reels = [
  { thumbnail: "/images/dishes/Mutton-bone-Soup.png",   title: "Mutton Bone Soup",   views: "12.5K", duration: "0:45" },
  { thumbnail: "/images/dishes/chettinad-masala.jfif",  title: "Chettinad Masala",   views: "8.9K",  duration: "1:12" },
  { thumbnail: "/images/dishes/prawn-masala.jfif",      title: "Prawn Masala",       views: "15.2K", duration: "0:58" },
  { thumbnail: "/images/dishes/mutton-gravy.png",       title: "Mutton Gravy",       views: "6.7K",  duration: "2:15" },
];

export default function InstagramReels() {
  return (
    <MotionSection className="bg-[#bbdefb] py-[5rem]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 flex items-end justify-between gap-8 border-b border-[#90caf9] pb-8">
          <div>
            <p className="eyebrow mb-3">Reels</p>
            <h2
              className="text-3xl font-bold text-[#0d1b3e] md:text-4xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              Kitchen stories
              <em className="font-normal italic text-[#e64a19]"> in motion.</em>
            </h2>
          </div>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 rounded-full border border-[#90caf9] px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.12em] text-[#1565c0] uppercase transition hover:border-[#1565c0] hover:text-[#0d47a1] sm:inline-flex"
          >
            Watch More
          </a>
        </div>

        {/* Reel cards */}
        <MotionContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reels.map((reel) => (
            <MotionLink
              key={reel.title}
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-[#bbdefb] bg-white shadow-[0_4px_20px_rgba(13,27,62,0.08)]"
              style={{ minHeight: "340px" }}
            >
              <MotionImage
                src={reel.thumbnail}
                alt={reel.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2459]/80 via-[#0a2459]/20 to-transparent" />

              {/* Play button */}
              <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition duration-300 group-hover:border-[#e64a19]/70 group-hover:bg-[#e64a19]/20 group-hover:text-[#e64a19]">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 translate-x-0.5">
                  <path d="M6.5 4.75v10.5L15 10 6.5 4.75Z" />
                </svg>
              </div>

              {/* Duration pill */}
              <span className="absolute right-3 top-3 rounded-full bg-[#0a2459]/70 px-2.5 py-1 text-[0.65rem] font-semibold text-white backdrop-blur-sm">
                {reel.duration}
              </span>

              {/* Bottom info */}
              <div className="absolute inset-x-4 bottom-4">
                <h3
                  className="text-base font-bold text-white"
                  style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
                >
                  {reel.title}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-white/60">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41z" clipRule="evenodd" />
                  </svg>
                  {reel.views} views
                </p>
              </div>
            </MotionLink>
          ))}
        </MotionContainer>
      </div>
    </MotionSection>
  );
}
