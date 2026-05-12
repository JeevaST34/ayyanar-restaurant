export default function InstagramFeed() {
  const posts = [
    { image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=500&q=80", label: "Weekend thali", likes: 245 },
    { image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80", label: "Parotta layers", likes: 189 },
    { image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80", label: "Dum biryani", likes: 312 },
    { image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80", label: "Seafood fry", likes: 156 },
    { image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80", label: "Dining room", likes: 278 },
    { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80", label: "Family table", likes: 334 },
  ];

  return (
    <section id="stories" className="bg-[#181510] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Social stories
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              A living feed from the kitchen and dining room.
            </h2>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-sm leading-7 text-white/60">
              Built as a premium preview area for Instagram content, reels,
              event moments, and seasonal specials.
            </p>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 justify-center bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#17120b] transition hover:bg-accent"
            >
              Follow
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {posts.map((post) => (
            <a
              key={post.label}
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden border border-white/10"
              aria-label={`Open Instagram post: ${post.label}`}
            >
              <img
                src={post.image}
                alt={post.label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/45" />
              <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {post.label}
                </p>
                <p className="mt-1 text-xs text-white/70">{post.likes} likes</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
