import { MotionContainer, MotionImage, MotionLink, MotionSection } from "./Animated";

const posts = [
  { image: "/images/dishes/Chicken-uppu-kari.jfif", label: "Chicken Uppu Kari", likes: 245 },
  { image: "/images/dishes/Egg-masala.png", label: "Egg Masala", likes: 189 },
  { image: "/images/dishes/fish-fry.jfif", label: "Fish Fry", likes: 312 },
  { image: "/images/dishes/mutton-nalli.png", label: "Mutton Nalli", likes: 156 },
  { image: "/images/dishes/crab-masala.jfif", label: "Crab Masala", likes: 278 },
  { image: "/images/dishes/pepperchicken.jfif", label: "Pepper Chicken", likes: 334 },
];

export default function InstagramFeed() {
  return (
    <MotionSection
      id="stories"
      className="relative py-[5.5rem] overflow-hidden bg-white"
    >
      <div className="absolute top-0 right-0 h-[400px] w-[600px] rounded-full bg-[#e0f2fe]/50 blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow mb-5">
              Social Stories
            </p>
            <h2
              className="text-4xl font-black leading-[1.1] text-[#075985] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              A living feed from
              <br />
              <em className="font-bold italic text-[#f97316]">our kitchen & table.</em>
            </h2>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-end">
            <p className="max-w-xs text-[0.9rem] font-medium leading-7 text-[#0369a1]">
              Premium preview of Instagram content, seasonal specials, and
              kitchen moments.
            </p>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0 w-fit"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
              </svg>
              Follow Us
            </a>
          </div>
        </div>

        <MotionContainer className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {posts.map((post) => (
            <MotionLink
              key={post.label}
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#bae6fd] shadow-[0_8px_24px_rgba(2,132,199,0.12)] transition duration-400 hover:shadow-[0_16px_40px_rgba(2,132,199,0.25)] hover:-translate-y-1.5 hover:border-[#7dd3fc]"
              aria-label={`Open Instagram post: ${post.label}`}
            >
              <MotionImage
                src={post.image} alt={post.label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-108"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-[#0284c7]/90 via-[#0284c7]/20 to-transparent opacity-0 transition duration-400 group-hover:opacity-100">
                <div className="translate-y-4 transition duration-400 group-hover:translate-y-0 text-center">
                  <p className="text-[0.65rem] font-black tracking-[0.2em] text-white uppercase">{post.label}</p>
                  <p className="mt-2 flex items-center justify-center gap-1.5 text-[0.65rem] font-bold text-white/90">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-[#f97316]">
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
