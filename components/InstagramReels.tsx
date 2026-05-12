export default function InstagramReels() {
  const reels = [
    {
      thumbnail:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=600&q=80",
      title: "Biryani dum reveal",
      views: "12.5K",
      duration: "0:45",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      title: "Pepper fry toss",
      views: "8.9K",
      duration: "1:12",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80",
      title: "Private dining setup",
      views: "15.2K",
      duration: "0:58",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
      title: "Service before dinner",
      views: "6.7K",
      duration: "2:15",
    },
  ];

  return (
    <section className="bg-[#0B1A2F] pb-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between gap-4 border-t border-white/10 pt-14">
          <div>
            <p className="text-primary mb-3 text-xs font-semibold tracking-[0.28em] uppercase">
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
            className="hover:border-primary hover:text-primary hidden border border-white/20 px-5 py-3 text-xs font-bold tracking-[0.18em] text-white uppercase transition sm:inline-flex"
          >
            Watch More
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reels.map((reel) => (
            <a
              key={reel.title}
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative min-h-[360px] overflow-hidden border border-white/10 bg-[#181510]"
            >
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2F] via-[#0B1A2F]/30 to-transparent" />
              <div className="absolute top-5 left-5 grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur">
                <svg
                  className="h-5 w-5 translate-x-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M6.5 4.75v10.5L15 10 6.5 4.75Z" />
                </svg>
              </div>
              <span className="absolute top-4 right-4 bg-black/55 px-3 py-1 text-xs text-white">
                {reel.duration}
              </span>
              <div className="absolute inset-x-5 bottom-5">
                <h3 className="text-lg font-semibold text-white">
                  {reel.title}
                </h3>
                <p className="mt-1 text-sm text-white/58">{reel.views} views</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
