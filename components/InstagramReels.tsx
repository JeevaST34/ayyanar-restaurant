import { MotionContainer, MotionImage, MotionLink, MotionSection } from "./Animated";

const reels = [
  { thumbnail: "/images/dishes/Mutton-bone-Soup.png",   title: "Mutton Bone Soup",   views: "12.5K", duration: "0:45" },
  { thumbnail: "/images/dishes/chettinad-masala.jfif",  title: "Chettinad Masala",   views: "8.9K",  duration: "1:12" },
  { thumbnail: "/images/dishes/prawn-masala.jfif",      title: "Prawn Masala",       views: "15.2K", duration: "0:58" },
  { thumbnail: "/images/dishes/mutton-gravy.png",       title: "Mutton Gravy",       views: "6.7K",  duration: "2:15" },
];

export default function InstagramReels() {
  return (
    <MotionSection className="bg-[#f0f9ff] py-[5.5rem]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14 flex items-end justify-between gap-8 border-b-2 border-[#bae6fd] pb-8">
          <div>
            <p className="eyebrow mb-4">Reels</p>
            <h2
              className="text-3xl font-black text-[#075985] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              Kitchen stories
              <em className="font-bold italic text-[#f97316]"> in motion.</em>
            </h2>
          </div>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 rounded-full border-2 border-[#0284c7] px-6 py-2.5 text-[0.8rem] font-bold tracking-[0.15em] text-[#0284c7] uppercase transition hover:bg-[#0284c7] hover:text-white sm:inline-flex shadow-sm"
          >
            Watch More
          </a>
        </div>

        {/* Reel cards */}
        <MotionContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reels.map((reel) => (
            <MotionLink
              key={reel.title}
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[24px] border border-[#bae6fd] bg-white shadow-[0_12px_24px_rgba(2,132,199,0.08)] transition duration-400 hover:shadow-[0_20px_48px_rgba(2,132,199,0.2)] hover:-translate-y-1.5 hover:border-[#7dd3fc]"
              style={{ minHeight: "380px" }}
            >
              <MotionImage
                src={reel.thumbnail} alt={reel.title}
                className="h-full w-full object-cover transition duration-600 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#075985]/90 via-[#075985]/20 to-transparent opacity-80 transition group-hover:opacity-100" />

              {/* Play button */}
              <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/25 text-white backdrop-blur-md transition duration-400 group-hover:bg-[#f97316] group-hover:shadow-[0_4px_20px_rgba(249,115,22,0.6)]">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 translate-x-0.5">
                  <path d="M6.5 4.75v10.5L15 10 6.5 4.75Z" />
                </svg>
              </div>

              {/* Duration pill */}
              <span className="absolute right-4 top-4 rounded-full bg-[#075985]/80 px-3 py-1 text-[0.65rem] font-bold text-white backdrop-blur-md shadow-sm">
                {reel.duration}
              </span>

              {/* Bottom info */}
              <div className="absolute inset-x-5 bottom-5">
                <h3
                  className="text-[1.1rem] font-black text-white transition group-hover:text-[#bae6fd]"
                  style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
                >
                  {reel.title}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-xs font-bold text-white/80">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-[#f97316]">
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
