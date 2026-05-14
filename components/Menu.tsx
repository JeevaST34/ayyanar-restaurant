"use client";

import { useState } from "react";
import { MotionArticle, MotionLink, MotionSection } from "./Animated";

const menuCategories = [
  {
    title: "Breakfast",
    note: "Light South Indian favorites to start your day.",
    items: [
      { name: "Idly", price: "$ 0.80", description: "Steamed rice cakes served with chutney and sambar." },
      { name: "Vadai", price: "$ 0.80", description: "Crispy lentil donuts with a peppery crunch." },
      { name: "Pongal", price: "$ 2.00", description: "Creamy rice and lentil porridge with ghee." },
      { name: "Poori (2 pcs)", price: "$ 2.00", description: "Fluffy fried bread with potato masala." },
      { name: "Kal Dosai", price: "$ 1.50", description: "Thin crispy dosa with savory coconut chutney." },
      { name: "Variety Rice", price: "$ 1.50", description: "Seasoned rice with peas, carrots and spices." },
    ],
  },
  {
    title: "Lunch",
    note: "Hearty midday meals for every appetite.",
    items: [
      { name: "Veg Meals", price: "$ 5.00", description: "Rice, curry, sambar, rasam, poriyal and appalam." },
      { name: "Chicken Meals", price: "$ 7.00", description: "Homestyle chicken curry with rice and sides." },
      { name: "Mutton Meals", price: "$ 8.00", description: "Slow-cooked mutton curry with steamed rice." },
      { name: "Fish Meals", price: "$ 8.00", description: "Tangy fish curry with rice and accompaniments." },
    ],
  },
  {
    title: "Dinner",
    note: "Classic dinner plates and dosas served warm.",
    items: [
      { name: "Idly", price: "$ 0.80", description: "Soft steamed rice cakes with sambar." },
      { name: "Podi Idly", price: "$ 3.00", description: "Idly tossed in spiced lentil powder." },
      { name: "Masala Dosai", price: "$ 2.50", description: "Golden dosa wrapped around potato masala." },
      { name: "Onion Dosai", price: "$ 2.50", description: "Dosa studded with caramelized onions." },
      { name: "Podi Dosai", price: "$ 2.00", description: "Dosa served with spicy podi and ghee." },
      { name: "Vendhaya Keerai Dosai", price: "$ 2.50", description: "Fenugreek dosa with a fragrant green hue." },
    ],
  },
  {
    title: "Hot Drinks",
    note: "Comforting beverages to pair with every plate.",
    items: [
      { name: "Tea", price: "$ 1.00", description: "Strong brewed tea with milk." },
      { name: "Masala Tea", price: "$ 1.00", description: "Tea spiced with cardamom and ginger." },
      { name: "Coffee", price: "$ 1.50", description: "Rich South Indian filter coffee." },
      { name: "Horlicks Hot", price: "$ 1.50", description: "Warm malted drink with milk." },
      { name: "Milo Hot", price: "$ 1.50", description: "Chocolate malt beverage served hot." },
    ],
  },
];

const tabs = ["Breakfast", "Lunch", "Dinner", "Hot Drinks"];

export default function Menu() {
  const [activeTab, setActiveTab] = useState(0);
  const category = menuCategories[activeTab];

  return (
    <MotionSection id="menu" className="bg-[#e3f2fd] py-[5rem]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4">Menu Preview</p>
            <h2
              className="text-4xl font-bold leading-tight text-[#0d1b3e] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              A taste of our
              <br />
              <em className="font-normal italic text-[#e64a19]">everyday favourites.</em>
            </h2>
          </div>
          <p className="text-sm leading-7 text-[#4a6fa5] lg:max-w-sm lg:text-right lg:self-end">
            Enjoy the signature South Indian dishes served at Ayyanar, then visit
            the full menu page for the complete selection.
          </p>
        </div>

        {/* Tab pills */}
        <div className="mb-10 flex flex-wrap gap-2">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`rounded-full px-5 py-2.5 text-[0.75rem] font-semibold tracking-wide transition ${
                i === activeTab
                  ? "bg-[#1565c0] text-white border border-[#1565c0] shadow-[0_4px_16px_rgba(21,101,192,0.32)]"
                  : "bg-white border border-[#bbdefb] text-[#4a6fa5] hover:border-[#1e88e5]/50 hover:text-[#1565c0]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Parchment card */}
        <MotionArticle
          key={activeTab}
          className="overflow-hidden rounded-3xl border border-[#bbdefb] bg-[#e8f4fd] shadow-[0_8px_40px_rgba(13,27,62,0.07)]"
        >
          <div className="border-b border-[#bbdefb] px-8 py-6">
            <h3
              className="text-2xl font-bold text-[#0d1b3e]"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              {category.title}
            </h3>
            <p className="mt-1 text-sm text-[#4a6fa5]">{category.note}</p>
          </div>

          <div className="divide-y divide-[#bbdefb]/80 px-8">
            {category.items.map((item) => (
              <div key={item.name} className="flex items-baseline justify-between gap-4 py-5 group">
                <div className="min-w-0">
                  <h4
                    className="text-[0.9375rem] font-semibold text-[#0d1b3e] group-hover:text-[#1565c0] transition"
                    style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
                  >
                    {item.name}
                  </h4>
                  <p className="mt-0.5 text-[0.8rem] text-[#4a6fa5]">{item.description}</p>
                </div>
                <div className="mx-3 flex-1 border-b border-dashed border-[#90caf9]/60 self-center" />
                <p className="shrink-0 font-bold text-[#1565c0] text-[0.9375rem]">{item.price}</p>
              </div>
            ))}
          </div>
        </MotionArticle>

        <div className="mt-10 flex justify-center">
          <MotionLink href="/menu" className="btn-primary inline-flex items-center gap-2">
            View Full Menu
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </MotionLink>
        </div>
      </div>
    </MotionSection>
  );
}
