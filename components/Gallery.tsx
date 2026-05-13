import { MotionContainer, MotionImage, MotionSection } from "./Animated";

export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      label: "Dining room",
    },
    {
      src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
      label: "Service details",
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      label: "Evening tables",
    },
    {
      src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
      label: "Biryani",
    },
    {
      src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
      label: "Fresh from kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      label: "Grill and spice",
    },
  ];

  return (
    <MotionSection id="gallery" className="bg-[#FFF7F1] py-24 text-[#3B2A24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-[#EA5828] uppercase">
              Gallery
            </p>
            <h2 className="max-w-2xl text-4xl leading-tight font-semibold md:text-5xl">
              Warm rooms, generous plates, polished details.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#5B4A42]">
            A look at the dining mood, kitchen craft, and the plates that give
            Ayyanar its quietly luxurious character.
          </p>
        </div>

        <MotionContainer className="grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {images.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden rounded-[28px] border border-[#C89C7A] bg-white shadow-[0_18px_42px_rgba(234,88,40,0.09)] ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <MotionImage
                src={image.src}
                alt={image.label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#EA5828]/75 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 text-xs font-semibold tracking-[0.22em] text-[#FFF7F1] uppercase">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </MotionContainer>
      </div>
    </MotionSection>
  );
}
