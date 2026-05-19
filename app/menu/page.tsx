"use client";

import { useState } from "react";
import { Sun, Moon, UtensilsCrossed, CheckCircle2 } from "lucide-react";
import {
  MotionArticle,
  MotionContainer,
  MotionImage,
  MotionLink,
  MotionSection,
} from "../../components/Animated";
import { fullMenuCategories as menuCategories } from "../../data/menu";

const weeklyMealPlan = [
  {
    day: "Monday",
    lunch: ["Rice", "Chicken Curry", "1 Veg", "Rasam"],
  },
  {
    day: "Tuesday",
    lunch: ["Rice", "Sambar", "2 Veg", "Rasam"],
  },
  {
    day: "Wednesday",
    lunch: ["Rice", "Mutton Curry", "1 Veg", "Moor"],
  },
  {
    day: "Thursday",
    lunch: ["Rice", "Fish Curry", "1 Veg", "Rasam"],
  },
  {
    day: "Friday",
    lunch: ["Veg Briyani"],
  },
  {
    day: "Saturday",
    lunch: ["Rice", "Vatthal Curry", "2 Veg", "Rasam"],
  },
  {
    day: "Sunday",
    lunch: [
      "Rice",
      "Chicken Curry",
      "1 Veg",
      "Rasam",
      "OR",
      "Chicken Briyani",
    ],
  },
];

const commonBreakfast = [
  "Pongal + 1 Vadai + Tea/Coffee",
  "3 Idly + 1 Vadai + Tea/Coffee",
  "Lemon Rice + Tea/Coffee",
  "Pepper Rice + Tea/Coffee",
  "Koozh + Tea/Coffee",
  "Puttu + Tea/Coffee",
  "2 Uthappam",
  "2 Dosa",
  "2 Poori",
];

const commonDinner = [
  "3 Chapathi",
  "4 Idly",
  "2 Poratta",
  "2 Uthappam",
  "2 Dosa",
  "OR",
  "Rice",
  "1 Curry",
  "1 Veg",
  "Rasam",
];



const imageCards = [
  {
    label: "Tea",
    src: "/images/beverages/Tea.png",
  },
  {
    label: "Coffee",
    src: "/images/beverages/Coeffe.png",
  },
  {
    label: "Horlicks",
    src: "/images/beverages/horlicks.png",
  },
  {
    label: "Milo",
    src: "/images/beverages/milo.png",
  },
  {
    label: "Masala Tea",
    src: "/images/beverages/masala-tea.png",
  },
  {
    label: "Boost",
    src: "/images/beverages/boost.png",
  },
  {
    label: "Idiyappam",
    src: "https://images.pexels.com/photos/22840373/pexels-photo-22840373.jpeg",
  },
  {
    label: "Rava Dosai",
    src: "/images/rava-dosa.png",
  },
  {
    label: "Vadai",
    src: "/images/vadai.png",
  },
  {
    label: "Koozh",
    src: "/images/koozh.png",
  },
  {
    label: "Puttu",
    src: "/images/puttu.png",
  },
  {
    label: "Rava Dosai",
    src: "/images/rava-dosa.png",
  },
  {
    label: "Mutton Biryani",
    src: "/images/mutton-briyani.png",
  },
  {
    label: "Mutton Curry",
    src: "/images/dishes/mutton-gravy.png",
  },
  {
    label: "Coconut Rice",
    src: "/images/cocunt-rice.png",
  },
  {
    label: "Fish Curry",
    src: "/images/dishes/fish-fry.jpg",
  },
  {
    label: "Fish Briyani",
    src: "/images/fish-biryani.png",
  },
  {
    label: "Egg Curry",
    src: "/images/dishes/Egg-masala.png",
  },
  {
    label: "Chicken Curry",
    src: "/images/dishes/Chicken-uppu-kari.jpg",
  },
  {
    label: "Mutton Briyani",
    src: "/images/mutton-briyani.png",
  },
  {
    label: "Prawn Briyani",
    src: "/images/prawn-briyani.png",
  },
  {
    label: "Fish Meal",
    src: "/images/fish-meal.png",
  },
  {
    label: "Set Meals",
    src: "/images/dinner/dinner/Meals.png",
  },
  {
    label: "Idli",
    src: "/images/dinner/dinner/Idly.png",
  },
  {
    label: "Dosai",
    src: "/images/dinner/dinner/Dosa.png",
  },
  {
    label: "Pongal",
    src: "/images/pongal.png",
  },
  {
    label: "Poori",
    src: "/images/dinner/dinner/Poori.png",
  },
  {
    label: "Chapathi",
    src: "/images/dinner/dinner/Chappathi.png",
  },
  {
    label: "Masala Dosai",
    src: "/images/dinner/dinner/masala-dosai.png",
  },
  {
    label: "Pepper Rice",
    src: "/images/pepper-rice.png",
  },
  
  {
    label: "Chicken Fried Rice",
    src: "/images/chicken-fried-rice.png",
  },
  {
    label: "Omlette",
    src: "/images/Omlette.png",
  },
  {
    label: "Parotta",
    src: "/images/dinner/dinner/parotta.png",
  },
];

export default function MenuPage() {
  const [activeView, setActiveView] = useState<"menu" | "monthly">("menu");

  return (
    <div className="min-h-screen bg-[#f0f9ff] text-[#075985]">
      <div className="mx-auto max-w-[90rem] px-4 py-10 sm:px-6 lg:px-8">
        <MotionSection className="mb-12 flex flex-col gap-6 rounded-[32px] border border-[#bae6fd] bg-white/90 p-8 shadow-[0_20px_60px_rgba(2,132,199,0.08)] sm:p-12">
          <div className="space-y-4">
            <p className="text-xs font-black tracking-[0.28em] text-[#f97316] uppercase">
              Full Menu
            </p>
            <h1 className="text-4xl font-black md:text-5xl text-[#075985]" style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}>
              Ayyanar Restaurant Menu
            </h1>
            <p className="max-w-3xl text-[0.95rem] font-medium leading-7 text-[#0369a1]">
              Discover the complete Ayyanar dining experience with breakfast
              staples, dosa varieties, set meals, curries and hot drinks. The
              gallery below reflects the menu items and dishes featured across
              our restaurant.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <MotionLink
              href="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#f97316] bg-white px-6 py-3 text-[0.8rem] font-black tracking-[0.18em] text-[#075985] uppercase transition hover:bg-[#f97316] hover:text-white"
            >
              Back to homepage
            </MotionLink>
            <div className="rounded-full bg-[#e0f2fe] border border-[#bae6fd] px-4 py-3 text-center text-[12px] font-bold text-[#0369a1]">
              Crafted for authentic South Indian flavour.
            </div>
          </div>
        </MotionSection>

        {/* Tab Navigation */}
        <div className="mb-8 flex gap-3">
          <button
            onClick={() => setActiveView("menu")}
            className={`rounded-full px-8 py-3 text-[0.85rem] font-black tracking-wide transition-all duration-300 ${activeView === "menu"
              ? "bg-[#0284c7] text-white shadow-[0_6px_20px_rgba(2,132,199,0.30)]"
              : "bg-white border-2 border-[#bae6fd] text-[#0369a1] hover:border-[#7dd3fc] hover:text-[#0284c7] shadow-sm"
              }`}
          >
            Menu
          </button>
          <button
            onClick={() => setActiveView("monthly")}
            className={`rounded-full px-8 py-3 text-[0.85rem] font-black tracking-wide transition-all duration-300 ${activeView === "monthly"
              ? "bg-[#0284c7] text-white shadow-[0_6px_20px_rgba(2,132,199,0.30)]"
              : "bg-white border-2 border-[#bae6fd] text-[#0369a1] hover:border-[#7dd3fc] hover:text-[#0284c7] shadow-sm"
              }`}
          >
            Monthly Meal Plan
          </button>
        </div>

        {/* Conditional Content */}
        {activeView === "monthly" ? (
          <div className="space-y-8">

            {/* HERO */}
            <MotionSection className="relative overflow-hidden rounded-[36px] border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-sky-50 p-8 md:p-12 shadow-[0_20px_60px_rgba(2,132,199,0.08)]">

              <div className="absolute top-0 right-0 h-[260px] w-[260px] rounded-full bg-sky-200/30 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 h-[220px] w-[220px] rounded-full bg-sky-100/40 blur-3xl"></div>

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* LEFT */}
                <div className="max-w-3xl">

                  <p className="text-xs font-black uppercase tracking-[0.35em] text-sky-500">
                    Monthly Subscription
                  </p>

                  <h2
                    className="mt-4 text-5xl font-black leading-tight text-sky-950 md:text-6xl"
                    style={{
                      fontFamily:
                        "var(--font-heading), 'Playfair Display', serif",
                    }}
                  >
                    Monthly Meal Plan
                  </h2>

                  <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-sky-700">
                    Fresh South Indian meals delivered daily with healthy breakfast,
                    changing lunch menu and comforting dinner options.
                  </p>

                  {/* TAGS */}
                  <div className="mt-8 flex flex-wrap gap-3">

                    <div className="rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm">
                      🌞 Breakfast Included
                    </div>

                    <div className="rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm">
                      🍛 Daily Fresh Lunch
                    </div>

                    <div className="rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm">
                      🌙 Dinner Included
                    </div>

                  </div>
                </div>

                {/* PRICE */}
                <div className="flex justify-center lg:justify-end">

                  <div className="rounded-[32px] border border-sky-300 bg-gradient-to-br from-sky-600 to-sky-800 px-12 py-10 text-center text-white shadow-[0_20px_60px_rgba(2,132,199,0.30)]">

                    {/* <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-100">
                      Starting From
                    </p> */}

                    <div className="mt-4 flex items-start justify-center">
                      <span className="mt-2 text-3xl font-bold">$</span>
                      <span className="text-7xl font-black leading-none">
                        230
                      </span>
                    </div>

                    <p className="mt-2 text-lg font-bold text-sky-100">
                      / month
                    </p>

                  </div>

                </div>
              </div>
            </MotionSection>

            {/* BREAKFAST + DINNER */}
            <MotionContainer className="grid gap-7 lg:grid-cols-2">

              {/* BREAKFAST */}
              <MotionArticle className="relative overflow-hidden rounded-[32px] border border-sky-200 bg-white/90 p-8 shadow-[0_20px_60px_rgba(2,132,199,0.06)] backdrop-blur-xl">

                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-100 opacity-50"></div>

                <div className="relative z-10">

                  <div className="flex items-center gap-4">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 shadow-inner">
                      <Sun className="h-8 w-8 text-[#f97316]" strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-sky-500">
                        Everyday
                      </p>

                      <h3
                        className="text-4xl font-black text-sky-950"
                        style={{
                          fontFamily:
                            "var(--font-heading), 'Playfair Display', serif",
                        }}
                      >
                        Breakfast
                      </h3>
                    </div>
                  </div>

                  <div className="my-7 h-[1px] bg-sky-100"></div>

                  <ul className="space-y-4">

                    {commonBreakfast.map((item, index) => (
                      <div key={item}>

                        {/* AFTER 8AM HEADER */}
                        {index === 6 && (
                          <div className="mb-3 mt-6 flex items-center gap-2">
                            <span className="rounded-full bg-[#fff7ed] border border-[#fed7aa] px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#f97316]">
                              ⏰ After 8 AM
                            </span>
                            <span className="h-px flex-1 bg-[#fed7aa]/50" />
                          </div>
                        )}

                        <li className="flex items-start gap-3 text-[15px] font-medium text-sky-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" strokeWidth={1.8} />
                          {item}
                        </li>

                      </div>
                    ))}

                  </ul>
                </div>
              </MotionArticle>

              {/* DINNER */}
              <MotionArticle className="relative overflow-hidden rounded-[32px] border border-sky-200 bg-white/90 p-8 shadow-[0_20px_60px_rgba(2,132,199,0.06)] backdrop-blur-xl">

                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-100 opacity-50"></div>

                <div className="relative z-10">

                  <div className="flex items-center gap-4">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 shadow-inner">
                      <Moon className="h-8 w-8 text-[#0284c7]" strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-sky-500">
                        Everyday
                      </p>

                      <h3
                        className="text-4xl font-black text-sky-950"
                        style={{
                          fontFamily:
                            "var(--font-heading), 'Playfair Display', serif",
                        }}
                      >
                        Dinner
                      </h3>
                    </div>
                  </div>

                  <div className="my-7 h-[1px] bg-sky-100"></div>

                  <ul className="space-y-4">

                    {commonDinner.map((item) => (

                      <div key={item}>

                        {/* OR SIDE HEADER */}
                        {item === "OR" ? (
                          <div className="flex items-center gap-2 py-1">
                            <span className="rounded-full bg-[#f0f9ff] border border-[#bae6fd] px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#0284c7]">
                              — OR —
                            </span>
                          </div>
                        ) : (
                          <li className="flex items-start gap-3 text-[15px] font-medium text-sky-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" strokeWidth={1.8} />
                            {item}
                          </li>
                        )}

                      </div>

                    ))}

                  </ul>
                </div>
              </MotionArticle>
            </MotionContainer>

            {/* WEEKLY PLAN */}
            <MotionSection className="overflow-hidden rounded-[36px] border border-sky-200 bg-white shadow-[0_20px_60px_rgba(2,132,199,0.06)]">

              {/* HEADER */}
              <div className="border-b border-sky-100 bg-gradient-to-r from-sky-50 to-white px-8 py-7">

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 shadow-inner">
                    <UtensilsCrossed className="h-8 w-8 text-sky-600" strokeWidth={1.8} />
                  </div>

                  <div>

                    <h3
                      className="text-4xl font-black text-sky-950"
                      style={{
                        fontFamily:
                          "var(--font-heading), 'Playfair Display', serif",
                      }}
                    >
                      Weekly Lunch Plan
                    </h3>

                    <p className="mt-1 text-sm font-medium text-sky-700">
                      Daily changing menu — fresh every day
                    </p>

                  </div>
                </div>
              </div>

              {/* ROWS */}
              <div className="divide-y divide-sky-100">

                {weeklyMealPlan.map((day, index) => (
                  <div
                    key={day.day}
                    className={`flex flex-col gap-5 px-8 py-6 transition hover:bg-sky-50/50 lg:flex-row lg:items-center lg:justify-between ${index % 2 === 0 ? "bg-white" : "bg-sky-50/30"
                      }`}
                  >

                    <div className="min-w-[140px]">

                      <p className="text-[11px] font-black uppercase tracking-[0.25em] text-sky-500">
                        Day {index + 1}
                      </p>

                      <h4 className="mt-1 text-2xl font-black text-sky-950">
                        {day.day}
                      </h4>

                    </div>

                    <div className="flex flex-wrap gap-3">

                      {day.lunch.map((item) => (
                        <span
                          key={item}
                          className={`rounded-full px-5 py-2 text-sm font-semibold shadow-sm ${item === "OR"
                            ? "bg-transparent px-2 text-sky-500 italic shadow-none"
                            : "border border-sky-200 bg-sky-50 text-sky-700"
                            }`}
                        >
                          {item}
                        </span>
                      ))}

                    </div>
                  </div>
                ))}
              </div>
            </MotionSection>

          </div>
        ) : (
          <div className="grid gap-6 xl:grid-cols-[0.95fr_0.5fr]">
            <MotionContainer className="space-y-6">
              {menuCategories.map((category) => (
                <MotionArticle
                  key={category.title}
                  className="card-surface p-6 md:p-8"
                >
                  <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#bae6fd] pb-5">
                    <h2 className="text-[1.75rem] font-black text-[#075985]" style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}>{category.title}</h2>
                    <span className="h-1 w-16 rounded-full bg-[#f97316]" />
                  </div>
                  <div
                    className={`grid gap-4 ${category.title === "Hot Drinks" || category.title === "Cold Drinks"
                      ? "lg:grid-cols-2"
                      : "sm:grid-cols-2"
                      }`}
                  >
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-[20px] border border-[#bae6fd] bg-[#f0f9ff] p-4 shadow-sm transition hover:border-[#7dd3fc] hover:bg-white"
                      >
                        <div
                          className={`flex gap-4 ${category.title === "Hot Drinks" || category.title === "Cold Drinks"
                            ? "items-start justify-between"
                            : "items-center justify-between"
                            }`}
                        >
                          <div className="min-w-0 flex-1">
                            <h3 className="text-[1.05rem] font-black text-[#075985]" style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}>
                              {item.name}
                            </h3>
                          </div>
                          <span className="inline-flex min-w-[4.25rem] shrink-0 items-center justify-end whitespace-nowrap rounded-full border border-[#bae6fd] bg-white px-3 py-1 text-right text-sm font-black leading-5 text-[#f97316] shadow-sm">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </MotionArticle>
              ))}
            </MotionContainer>

            <aside className="space-y-6">
              <section className="card-surface overflow-hidden rounded-[32px] border border-[#bae6fd] bg-white">
                <div className="bg-gradient-to-r from-[#38bdf8] to-[#0284c7] px-6 py-5 text-white">
                  <h2 className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}>Hot Drinks</h2>
                  <p className="mt-2 text-[0.85rem] font-bold text-white/90">
                    Comforting beverages to pair with every plate.
                  </p>
                </div>
                <div className="grid gap-1 p-3 sm:grid-cols-2">
                  {imageCards.slice(0, 6).map((image) => (
                    <figure
                      key={image.label}
                      className="overflow-hidden rounded-[12px]"
                    >
                      <MotionImage
                        src={image.src}
                        alt={image.label}
                        className="h-32 w-full object-cover transition duration-300 hover:scale-105"
                      />
                      <figcaption className="rounded-b-[20px] bg-white border-t border-[#bae6fd] px-3 py-2 text-[0.8rem] font-black text-[#075985] text-center">
                        {image.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="card-surface p-6 md:p-8">
                <h2 className="text-[1.75rem] font-black text-[#075985]" style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}>More Favorites</h2>
                <p className="mt-3 text-[0.95rem] font-medium leading-6 text-[#0369a1]">
                  From crispy dosas and street-style snacks to rich curries and
                  set meal classics, our menu is designed for sharing and
                  celebration.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {imageCards.slice(8).map((image) => (
                    <figure
                      key={image.label}
                      className="overflow-hidden rounded-[12px]"
                    >
                      <MotionImage
                        src={image.src}
                        alt={image.label}
                        className="h-32 w-full object-cover transition duration-300 hover:scale-105"
                      />
                      <figcaption className="rounded-b-[20px] bg-white border-t border-[#bae6fd] px-3 py-2 text-[0.8rem] font-black text-[#075985] text-center">
                        {image.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>

            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
