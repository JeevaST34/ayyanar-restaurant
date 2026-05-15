import { MotionImage, MotionSection } from "./Animated";

// Each item has a CSS class name for explicit bento placement at lg breakpoint
const images = [
  {
    src: "/images/ChatGPT Image May 13, 2026, 06_57_32 PM.png",
    label: "Biryani",
    cls: "gi-biryani",
  },
  {
    src: "/images/ChatGPT Image May 13, 2026, 06_52_47 PM.png",
    label: "Pongal",
    cls: "gi-pongal",
  },
  {
    src: "/images/rava-dosa.png",
    label: "Rava Dosa",
    cls: "gi-rava-dosa",
  },
  {
    src: "/images/ChatGPT Image May 13, 2026, 06_52_38 PM.png",
    label: "Idly",
    cls: "gi-idly",
  },
  {
    src: "/images/ChatGPT Image May 13, 2026, 06_52_44 PM.png",
    label: "Vadai",
    cls: "gi-vadai",
  },
  {
    src: "/images/ChatGPT Image May 13, 2026, 06_59_55 PM.png",
    label: "Meals",
    cls: "gi-meals",
  },
];

export default function Gallery() {
  return (
    <MotionSection
      id="gallery"
      className="relative overflow-hidden py-[5.5rem] bg-white"
    >
      {/* Bento layout styles — only active at lg (1024px+) */}
      <style>{`
        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 210px);
          }
          .gi-biryani   { grid-column: 1; grid-row: 1 / span 2; }
          .gi-pongal    { grid-column: 2; grid-row: 1; }
          .gi-rava-dosa { grid-column: 3; grid-row: 1 / span 2; }
          .gi-idly      { grid-column: 1; grid-row: 3; }
          .gi-vadai     { grid-column: 2; grid-row: 2 / span 2; }
          .gi-meals     { grid-column: 3; grid-row: 3; }
        }

        /* Fixed height on mobile & tablet so images don't collapse */
        .gallery-item { height: 240px; }

        @media (min-width: 640px) {
          .gallery-item { height: 260px; }
        }

        /* On lg the height is driven by the grid rows — remove fixed height */
        @media (min-width: 1024px) {
          .gallery-item { height: 100%; }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">Gallery</p>
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

        {/*
          Mobile  → 1 column
          Tablet  → 2 columns
          Desktop → 3-column bento (placed by .gi-* CSS classes above)
        */}
        <div className="gallery-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <figure
              key={img.label}
              className={`gallery-item ${img.cls} group relative overflow-hidden rounded-[24px] shadow-[0_8px_24px_rgba(2,132,199,0.12)] transition duration-400 hover:shadow-[0_20px_48px_rgba(2,132,199,0.25)] hover:-translate-y-1.5`}
            >
              <MotionImage
                src={img.src}
                alt={img.label}
                className="h-full w-full object-cover transition duration-600 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#075985]/60 via-transparent to-transparent opacity-70 transition duration-400 group-hover:opacity-100" />

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