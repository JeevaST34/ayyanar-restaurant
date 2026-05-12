export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[94vh] items-center overflow-hidden bg-[#11100d] px-4 pb-16 pt-36 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=80"
          alt="A refined table of South Indian dishes"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,16,13,0.96)_0%,rgba(17,16,13,0.82)_38%,rgba(17,16,13,0.34)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#11100d] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Chennai heritage kitchen
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-8xl">
            Ayyanar Restaurant
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            A polished South Indian dining room for fire-roasted spices, slow dum
            biryani, coastal seafood, layered parotta, and warm family celebrations.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex justify-center bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#17120b] transition hover:bg-accent"
            >
              Explore Menu
            </a>
            <a
              href="#reservations"
              className="inline-flex justify-center border border-white/35 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-primary hover:text-primary"
            >
              Book a Table
            </a>
          </div>
        </div>

        <div className="grid gap-3 border-l border-primary/35 pl-5 text-sm text-white/75 sm:grid-cols-3 lg:grid-cols-1">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Open Daily</p>
            <p className="mt-1 text-white">11:00 AM - 11:00 PM</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Signature</p>
            <p className="mt-1 text-white">Chettinad biryani and seafood fry</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary">For Events</p>
            <p className="mt-1 text-white">Private dining, family feasts, catering</p>
          </div>
        </div>
      </div>
    </section>
  );
}
