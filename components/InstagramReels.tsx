import {
  MotionContainer,
  MotionImage,
  MotionLink,
  MotionSection,
} from "./Animated";

export default function InstagramReels() {
  const reels = [
    {
      thumbnail: "/images/dishes/Mutton-bone-Soup.png",
      title: "Mutton Bone Soup",
      views: "12.5K",
      duration: "0:45",
    },
    {
      thumbnail: "/images/dishes/chettinad-masala.jfif",
      title: "Chettinad Masala",
      views: "8.9K",
      duration: "1:12",
    },
    {
      thumbnail: "/images/dishes/prawn-masala.jfif",
      title: "Prawn Masala",
      views: "15.2K",
      duration: "0:58",
    },
    {
      thumbnail: "/images/dishes/mutton-gravy.png",
      title: "Mutton Gravy",
      views: "6.7K",
      duration: "2:15",
    },
  ];

  return (
    <MotionSection className="bg-[#F5E6DA] pb-16 text-[#3B2A24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between gap-4 border-t border-[#C89C7A]/70 pt-14">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-[#EA5828] uppercase">
              Reels
            </p>
            <h2 className="text-3xl font-semibold">
              Kitchen stories in motion.
            </h2>
          </div>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-[#C89C7A] px-5 py-3 text-xs font-bold tracking-[0.18em] text-[#3B2A24] uppercase transition hover:border-[#EA5828] hover:text-[#EA5828] sm:inline-flex"
          >
            Watch More
          </a>
        </div>

        <MotionContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reels.map((reel) => (
            <MotionLink
              key={reel.title}
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative min-h-[360px] overflow-hidden rounded-[24px] border border-[#C89C7A] bg-white shadow-[0_18px_35px_rgba(59,42,36,0.08)]"
            >
              <MotionImage
                src={reel.thumbnail}
                alt={reel.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A24]/60 via-[#3B2A24]/20 to-transparent" />
              <div className="absolute top-5 left-5 grid h-12 w-12 place-items-center rounded-full border border-[#C89C7A] bg-white/90 text-[#3B2A24] backdrop-blur">
                <svg
                  className="h-5 w-5 translate-x-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M6.5 4.75v10.5L15 10 6.5 4.75Z" />
                </svg>
              </div>
              <span className="absolute top-4 right-4 bg-[#3B2A24]/80 px-3 py-1 text-xs text-white">
                {reel.duration}
              </span>
              <div className="absolute inset-x-5 bottom-5">
                <h3 className="text-lg font-semibold text-white!">
                  {reel.title}
                </h3>
                <p className="mt-1 text-sm text-white/75">{reel.views} views</p>
              </div>
            </MotionLink>
          ))}
        </MotionContainer>
      </div>
    </MotionSection>
  );
}
