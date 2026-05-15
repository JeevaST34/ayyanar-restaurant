"use client";

import { motion } from "framer-motion";

const specials = [
  {
    title: "Mutton Meals",
    description: "Our signature homestyle platter featuring slow-cooked, tender mutton curry served with aromatic rice, sambar, rasam, and seasonal sides.",
    price: "$ 8.00",
    image: "/images/dinner/dinner/Meals.png",
    badge: "Chef's Special",
  },
  {
    title: "Masala Dosai",
    description: "Crispy, golden-brown fermented rice crepe wrapped around a savory, spiced potato filling. Served with house-made chutneys and sambar.",
    price: "$ 2.50",
    image: "/images/dinner/dinner/masala-dosai.png",
    badge: "Dinner Favorite",
  },
  {
    title: "Chicken Biryani",
    description: "Fragrant Seeraga Samba rice dum-cooked with succulent chicken, fresh mint, and our secret blend of slow-bloomed masalas.",
    price: "$ 7.00",
    image: "/images/chicken-biryani.png",
    badge: "Signature",
  },
];

export default function ChefSpecials() {
  return (
    <section id="specials" className="bg-white py-[5.5rem]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-16 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow mb-5">Chef Specials</p>
            <h2
              className="text-4xl font-black leading-[1.1] text-[#075985] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              Crafted daily for
              <br />
              <em className="font-bold italic text-[#f97316]">memorable moments.</em>
            </h2>
          </div>
          <p className="max-w-md text-[0.95rem] font-medium leading-8 text-[#0369a1] lg:self-end">
            A curated selection that reveals the kitchen's refined spice work,
            terracotta roast, and rich natural craftsmanship.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {specials.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group overflow-hidden rounded-[24px] border border-[#bae6fd] bg-[#f0f9ff] shadow-[0_12px_36px_rgba(2,132,199,0.06)] transition duration-400 hover:bg-white hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(2,132,199,0.15)] hover:border-[#7dd3fc] flex flex-col"
            >
              <div className="relative overflow-hidden" style={{ height: "300px" }}>
                <img
                  src={item.image} alt={item.title}
                  className="h-full w-full object-cover transition duration-600 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0284c7]/50 via-transparent to-transparent opacity-80" />

                {/* Badge */}
                <span className="absolute left-5 top-5 rounded-full bg-white/95 backdrop-blur-md px-4 py-2 text-[0.65rem] font-black tracking-[0.2em] text-[#0284c7] uppercase shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
                  {item.badge}
                </span>

                {/* Price */}
                <span className="absolute bottom-5 right-5 rounded-full bg-[#f97316] px-5 py-2 text-[0.9rem] font-black text-white shadow-[0_4px_20px_rgba(249,115,22,0.6)]">
                  {item.price}
                </span>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3
                  className="text-xl font-black text-[#075985] group-hover:text-[#0284c7] transition"
                  style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9rem] font-medium leading-7 text-[#0369a1]">{item.description}</p>

                <div className="mt-8 flex items-center gap-3 border-t border-[#bae6fd] pt-6">
                  <span className="h-2 w-2 rounded-full bg-[#f97316]" />
                  <span className="text-[0.65rem] font-bold tracking-[0.24em] text-[#0284c7] uppercase">
                    Seasonal kitchen story
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
