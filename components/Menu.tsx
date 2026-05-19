"use client";

import { useState } from "react";
import { MotionArticle, MotionLink, MotionSection } from "./Animated";
import { previewMenuCategories as menuCategories } from "../data/menu";

const tabs = ["Breakfast", "Lunch", "Dinner", "Hot Drinks"];

export default function Menu() {
  const [activeTab, setActiveTab] = useState(0);
  const category = menuCategories[activeTab];

  return (
    <MotionSection id="menu" className="bg-[#f0f9ff] py-[5.5rem]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow mb-5">Menu Preview</p>
            <h2
              className="text-4xl font-black leading-[1.1] text-[#075985] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              A taste of our
              <br />
              <em className="font-bold italic text-[#0284c7]">everyday favourites.</em>
            </h2>
          </div>
          <p className="text-[0.9rem] font-medium leading-7 text-[#0369a1] lg:max-w-sm lg:self-end">
            Enjoy the signature South Indian dishes served at Ayyanar, then visit
            the full menu page for the complete selection.
          </p>
        </div>

        {/* Tab pills */}
        <div className="mb-8 flex flex-wrap gap-3">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`rounded-full px-6 py-2.5 text-[0.8rem] font-black tracking-wide transition-all duration-300 ${i === activeTab
                  ? "bg-[#0284c7] text-white shadow-[0_6px_20px_rgba(2,132,199,0.30)]"
                  : "bg-white border-2 border-[#bae6fd] text-[#0369a1] hover:border-[#7dd3fc] hover:text-[#0284c7] shadow-sm"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu card */}
        <MotionArticle
          key={activeTab}
          className="overflow-hidden rounded-[24px] border-[3px] border-[#bae6fd] bg-white shadow-[0_12px_48px_rgba(2,132,199,0.08)]"
        >
          {/* Card header */}
          <div
            className="relative overflow-hidden px-8 py-7"
            style={{ background: "radial-gradient(circle at center, #7dd3fc 0%, #38bdf8 100%)" }}
          >
            <h3
              className="text-[1.75rem] font-black text-[#075985]"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              {category.title}
            </h3>
            <p className="mt-1 text-[0.85rem] font-bold text-[#0369a1]">{category.note}</p>
          </div>

          {/* Menu rows */}
          <div className="divide-y divide-[#e0f2fe] px-8">
            {category.items.map((item) => (
              <div key={item.name} className="group flex items-center justify-between gap-6 py-6">
                <div className="min-w-0">
                  <h4
                    className="text-[1.05rem] font-black text-[#075985] transition group-hover:text-[#0284c7]"
                    style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
                  >
                    {item.name}
                  </h4>
                  <p className="mt-1 text-[0.85rem] font-medium text-[#0369a1]">{item.description}</p>
                </div>
                {/* Dotted line */}
                <div className="mx-4 flex-1 border-b-2 border-dashed border-[#bae6fd] self-center" />
                {/* Price */}
                <span className="shrink-0 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#f0f9ff] px-4 py-2 text-[0.95rem] font-black text-[#f97316] border border-[#bae6fd] shadow-sm">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </MotionArticle>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <MotionLink href="/menu" className="btn-primary">
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
