import {
  MotionArticle,
  MotionContainer,
  MotionImage,
  MotionSection,
} from "./Animated";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Arun Kumar",
      role: "Weekend regular",
      rating: "5.0",
      text: "The biryani has depth, the seafood fry is crisp, and the service feels genuinely attentive.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Priya S",
      role: "Family dining",
      rating: "5.0",
      text: "Ayyanar feels elegant without becoming stiff. Perfect for birthdays and family dinners.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Karthik Raj",
      role: "Corporate host",
      rating: "4.9",
      text: "The set menu made hosting simple, and every guest found something memorable on the table.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <MotionSection className="bg-[#FFE2D1] py-24 text-[#3B2A24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-[#EA5828] uppercase">
            Guest notes
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl leading-tight font-semibold md:text-5xl">
            Hospitality people remember after the meal.
          </h2>
        </div>

        <MotionContainer className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <MotionArticle className="card-surface p-8" key={testimonial.name}>
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#EA5828]">
                  {testimonial.rating}/5
                </span>
                <span className="h-px w-16 bg-[#EA5828]/20" />
              </div>
              <p className="min-h-28 text-lg leading-8 text-[#3B2A24]">
                {testimonial.text}
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-[#D8B595]/60 pt-6">
                <MotionImage
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-[52px] w-[52px] rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-[#3B2A24]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
                </div>
              </div>
            </MotionArticle>
          ))}
        </MotionContainer>
      </div>
    </MotionSection>
  );
}
