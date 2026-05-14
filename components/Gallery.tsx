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
    <MotionSection id="gallery" className="bg-[#e3f2fd] py-[5rem]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Gallery</p>
            <h2
              className="max-w-xl text-4xl font-bold leading-tight text-[#0d1b3e] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              Warm rooms,
              <br />
              <em className="font-normal italic text-[#e64a19]">generous plates.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-[#4a6fa5]">
            A look at the dining mood, kitchen craft, and the plates that give
            Ayyanar its quietly distinguished character.
          </p>
        </div>

        <div className="masonry-grid">
          {images.map((img) => (
            <figure
              key={img.src}
              className="group relative overflow-hidden rounded-[12px] border border-[#bbdefb] shadow-[0_8px_24px_rgba(13,27,62,0.08)] transition duration-400 hover:shadow-[0_16px_40px_rgba(13,71,161,0.14)]"
            >
              <div className="relative overflow-hidden" style={{ height: img.tall ? "440px" : "260px" }}>
                <MotionImage
                  src={img.src}
                  alt={img.label}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0a2459]/0 transition duration-400 group-hover:bg-[#0a2459]/25" />
              </div>
              <figcaption className="absolute bottom-4 left-4 z-10">
                <span className="inline-flex items-center rounded-full bg-[rgba(10,36,89,0.6)] px-3.5 py-1.5 text-[0.65rem] font-bold tracking-[0.18em] text-white uppercase backdrop-blur-sm">
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
