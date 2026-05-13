import {
  MotionContainer,
  MotionImage,
  MotionLink,
  MotionSection,
} from "./Animated";

export default function InstagramFeed() {
  const posts = [
    {
      image:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=500&q=80",
      label: "Weekend thali",
      likes: 245,
    },
    {
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80",
      label: "Parotta layers",
      likes: 189,
    },
    {
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
      label: "Dum biryani",
      likes: 312,
    },
    {
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80",
      label: "Seafood fry",
      likes: 156,
    },
    {
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80",
      label: "Dining room",
      likes: 278,
    },
    {
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
      label: "Family table",
      likes: 334,
    },
  ];

  return (
    <MotionSection id="stories" className="bg-[#F5E6DA] py-24 text-[#3B2A24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-[#EA5828] uppercase">
              Social stories
            </p>
            <h2 className="text-4xl leading-tight font-semibold md:text-5xl">
              A living feed from the kitchen and dining room.
            </h2>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-sm leading-7 text-[#6B7280]">
              Built as a premium preview area for Instagram content, reels,
              event moments, and seasonal specials.
            </p>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 justify-center rounded-full bg-[#EA5828] px-6 py-3 text-xs font-bold tracking-[0.18em] text-white! uppercase shadow-[0_18px_40px_rgba(234,88,40,0.18)] transition hover:bg-[#F80901]"
            >
              Follow
            </a>
          </div>
        </div>

        <MotionContainer className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {posts.map((post) => (
            <MotionLink
              key={post.label}
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-[24px] border border-[#C89C7A] bg-white shadow-[0_18px_35px_rgba(59,42,36,0.08)]"
              aria-label={`Open Instagram post: ${post.label}`}
            >
              <MotionImage
                src={post.image}
                alt={post.label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(234,88,40,0.75),transparent)] opacity-0 transition group-hover:opacity-100" />
              <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
                  {post.label}
                </p>
                <p className="mt-1 text-xs text-white/70">{post.likes} likes</p>
              </div>
            </MotionLink>
          ))}
        </MotionContainer>
      </div>
    </MotionSection>
  );
}
