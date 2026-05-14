import { MotionContainer, MotionImage, MotionLink, MotionSection } from "./Animated";

const posts = [
  { image: "/images/dishes/Chicken-uppu-kari.jfif",  label: "Chicken Uppu Kari", likes: 245 },
  { image: "/images/dishes/Egg-masala.png",           label: "Egg Masala",        likes: 189 },
  { image: "/images/dishes/fish-fry.jfif",            label: "Fish Fry",          likes: 312 },
  { image: "/images/dishes/mutton-nalli.png",         label: "Mutton Nalli",      likes: 156 },
  { image: "/images/dishes/crab-masala.jfif",         label: "Crab Masala",       likes: 278 },
  { image: "/images/dishes/pepperchicken.jfif",       label: "Pepper Chicken",    likes: 334 },
];

export default function InstagramFeed() {
  return (
    <MotionSection id="stories" className="bg-[#0d47a1] py-[5rem]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 inline-block text-[0.6875rem] font-semibold tracking-[0.28em] uppercase text-[#42a5f5]">
              Social Stories
            </p>
            <h2
              className="text-4xl font-bold leading-tight text-[#e3f2fd] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              A living feed from
              <br />
              <em className="font-normal italic text-[#e64a19]">our kitchen & table.</em>
            </h2>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end">
            <p className="max-w-xs text-sm leading-7 text-[#e3f2fd]/60">
              Premium preview of Instagram content, seasonal specials, and
              kitchen moments.
            </p>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex shrink-0 items-center gap-2 whitespace-nowrap"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none"/>
              </svg>
              Follow Us
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
              className="group relative aspect-square overflow-hidden rounded-2xl border border-[#1565c0] bg-white shadow-[0_4px_16px_rgba(13,27,62,0.10)]"
              aria-label={`Open Instagram post: ${post.label}`}
            >
              <MotionImage
                src={post.image}
                alt={post.label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-108"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a2459]/0 transition duration-350 group-hover:bg-[#0a2459]/65">
                <div className="translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-center px-2">
                  <p className="text-[0.7rem] font-bold tracking-[0.15em] text-white uppercase">{post.label}</p>
                  <p className="mt-1 flex items-center justify-center gap-1 text-[0.65rem] text-white/70">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-[#e64a19]">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                    {post.likes}
                  </p>
                </div>
              </div>
            </MotionLink>
          ))}
        </MotionContainer>
      </div>
    </MotionSection>
  );
}
