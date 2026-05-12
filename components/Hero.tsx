export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[94vh] items-center overflow-hidden bg-[#0B1A2F] px-4 pt-36 pb-16 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=80"
          alt="A refined table of South Indian dishes"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,26,47,0.96)_0%,rgba(11,26,47,0.82)_38%,rgba(11,26,47,0.34)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1A2F] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-4xl">
          <p className="border-primary/35 bg-primary/10 text-primary mb-5 inline-flex border px-4 py-2 text-xs font-semibold tracking-[0.28em] uppercase">
            Chennai heritage kitchen
          </p>
          <h1 className="max-w-4xl text-5xl leading-[0.96] font-semibold tracking-normal text-white sm:text-6xl lg:text-8xl">
            Ayyanar Restaurant
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            A polished South Indian dining room for fire-roasted spices, slow
            dum biryani, coastal seafood, layered parotta, and warm family
            celebrations.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="bg-primary hover:bg-accent inline-flex justify-center px-7 py-4 text-sm font-bold tracking-[0.18em] text-[#17120b] uppercase transition"
            >
              Explore Menu
            </a>
            <a
              href="#reservations"
              className="hover:border-primary hover:text-primary inline-flex justify-center border border-white/35 px-7 py-4 text-sm font-bold tracking-[0.18em] text-white uppercase transition"
            >
              Book a Table
            </a>
          </div>
        </div>

        <div className="border-primary/35 grid gap-3 border-l pl-5 text-sm text-white/75 sm:grid-cols-3 lg:grid-cols-1">
          <div>
            <p className="text-primary text-xs tracking-[0.22em] uppercase">
              Open Daily
            </p>
            <p className="mt-1 text-white">11:00 AM - 11:00 PM</p>
          </div>
          <div>
            <p className="text-primary text-xs tracking-[0.22em] uppercase">
              Signature
            </p>
            <p className="mt-1 text-white">Chettinad biryani and seafood fry</p>
          </div>
          <div>
            <p className="text-primary text-xs tracking-[0.22em] uppercase">
              For Events
            </p>
            <p className="mt-1 text-white">
              Private dining, family feasts, catering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
