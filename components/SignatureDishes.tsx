export default function SignatureDishes() {
  const dishes = [
    {
      name: "Chicken Biryani",
      price: "Rs. 290",
      description:
        "Dum-cooked seeraga samba rice, tender chicken, mint, and slow-bloomed masala.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Parotta Combo",
      price: "Rs. 220",
      description:
        "Flaky layered parotta served with rich salna, onion relish, and curry.",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Meals Special",
      price: "Rs. 180",
      description:
        "A proper banana-leaf style spread with sambar, rasam, kootu, poriyal, and curd.",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Seafood Fry",
      price: "Rs. 350",
      description:
        "Fresh catch marinated with chilli, pepper, curry leaf, and crisp-fried edges.",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="bg-[#181510] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-primary mb-4 text-xs font-semibold tracking-[0.28em] uppercase">
              Signature menu
            </p>
            <h2 className="max-w-3xl text-4xl leading-tight font-semibold md:text-5xl">
              The plates guests come back for.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/62">
            A tighter edit of house favorites, built around aroma, texture, and
            the comforting heat South Indian food does so well.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish, index) => (
            <article key={index} className="group bg-[#0B1A2F]">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2F]/75 to-transparent" />
                <p className="text-primary absolute bottom-4 left-4 text-sm font-semibold">
                  {dish.price}
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {dish.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
