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
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=1200&q=80",
      label: "Fresh from kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      label: "Grill and spice",
    },
  ];

  return (
    <section id="gallery" className="bg-[#0B1A2F] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Gallery
            </p>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
              Warm rooms, generous plates, polished details.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/60">
            A look at the dining mood, kitchen craft, and the plates that give
            Ayyanar its quietly luxurious character.
          </p>
        </div>

        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {images.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden border border-white/10 ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-85" />
              <figcaption className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
