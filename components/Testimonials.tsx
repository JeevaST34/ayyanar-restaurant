export default function Testimonials() {
  const testimonials = [
    {
      name: "Arun Kumar",
      role: "Weekend regular",
      rating: "5.0",
      text: "The biryani has depth, the seafood fry is crisp, and the service feels genuinely attentive.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Priya S",
      role: "Family dining",
      rating: "5.0",
      text: "Ayyanar feels elegant without becoming stiff. Perfect for birthdays and family dinners.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Karthik Raj",
      role: "Corporate host",
      rating: "4.9",
      text: "The set menu made hosting simple, and every guest found something memorable on the table.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section className="bg-[#181510] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Guest notes
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Hospitality people remember after the meal.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="bg-[#11100d] p-7">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">{testimonial.rating}/5</span>
                <span className="h-px w-16 bg-primary/35" />
              </div>
              <p className="min-h-28 text-lg leading-8 text-white/76">{testimonial.text}</p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-[52px] w-[52px] rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-white/48">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
