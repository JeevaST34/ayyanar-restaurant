import { MotionContainer, MotionImage, MotionSection } from "./Animated";

const images = [
  { src: "/images/ChatGPT Image May 13, 2026, 06_57_32 PM.png", label: "Biryani",  tall: true  },
  { src: "/images/ChatGPT Image May 13, 2026, 06_52_38 PM.png", label: "Idly",     tall: false },
  { src: "/images/ChatGPT Image May 13, 2026, 06_52_47 PM.png", label: "Pongal",   tall: false },
  { src: "/images/ChatGPT Image May 13, 2026, 06_52_44 PM.png", label: "Vadai",    tall: true  },
  { src: "/images/ChatGPT Image May 13, 2026, 06_59_55 PM.png", label: "Thali",    tall: false },
];

export default function Gallery() {
  return (
    <MotionSection
      id="gallery"
      className="relative overflow-hidden py-[5.5rem] bg-white"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">
              Gallery
            </p>
            <h2
              className="max-w-lg text-4xl font-black leading-[1.1] text-[#075985] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              Warm rooms,
              <br />
              <em className="font-bold italic text-[#f97316]">generous plates.</em>
            </h2>
          </div>
          <p className="max-w-xs text-[0.9rem] font-medium leading-7 text-[#0369a1]">
            A look at the dining mood, kitchen craft, and the plates that give
            Ayyanar its quietly distinguished character.
          </p>
        </div>

        {/* Masonry */}
        <div className="masonry-grid">
          {images.map((img) => (
            <figure
              key={img.src}
              className="group relative overflow-hidden rounded-[24px] shadow-[0_8px_24px_rgba(2,132,199,0.12)] transition duration-400 hover:shadow-[0_20px_48px_rgba(2,132,199,0.25)] hover:-translate-y-1.5"
            >
              <div className="relative overflow-hidden" style={{ height: img.tall ? "460px" : "280px" }}>
                <MotionImage
                  src={img.src}
                  alt={img.label}
                  className="h-full w-full object-cover transition duration-600 group-hover:scale-105"
                />
                {/* Soft gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#075985]/60 via-transparent to-transparent opacity-70 transition duration-400 group-hover:opacity-100" />
              </div>

              {/* Label chip */}
              <figcaption className="absolute bottom-5 left-5 z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-[0.7rem] font-black tracking-[0.2em] text-[#075985] uppercase backdrop-blur-md shadow-[0_4px_16px_rgba(2,132,199,0.15)] transition group-hover:bg-white group-hover:border-[#7dd3fc]">
                  <span className="h-2 w-2 rounded-full bg-[#f97316]" />
                  {img.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
