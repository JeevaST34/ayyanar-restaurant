import {
  MotionArticle,
  MotionContainer,
  MotionLink,
  MotionSection,
} from "./Animated";

export default function Menu() {
  const menuCategories = [
    {
      title: "Breakfast",
      note: "Light South Indian favorites to start your day.",
      items: [
        {
          name: "Idly",
          price: "S$ 0.80",
          description: "Steamed rice cakes served with chutney.",
        },
        {
          name: "Vadai",
          price: "S$ 0.80",
          description: "Crispy lentil donuts with a peppery crunch.",
        },
        {
          name: "Pongal",
          price: "S$ 2.00",
          description: "Creamy rice and lentil porridge with ghee.",
        },
        {
          name: "Poori (2 pcs)",
          price: "S$ 2.00",
          description: "Fluffy fried bread with potato masala.",
        },
        {
          name: "Kal Dosai",
          price: "S$ 1.50",
          description: "Thin dosa with savory coconut chutney.",
        },
        {
          name: "Variety Rice",
          price: "S$ 1.50",
          description: "Seasoned rice with peas, carrots and spices.",
        },
      ],
    },
    {
      title: "Lunch",
      note: "Hearty midday meals for every appetite.",
      items: [
        {
          name: "Veg Meals",
          price: "S$ 5.00",
          description: "Rice, curry, sambar, rasam, poriyal and appalam.",
        },
        {
          name: "Chicken Meals",
          price: "S$ 7.00",
          description: "Homestyle chicken curry with rice and sides.",
        },
        {
          name: "Mutton Meals",
          price: "S$ 8.00",
          description: "Slow-cooked mutton curry with steamed rice.",
        },
        {
          name: "Fish Meals",
          price: "S$ 8.00",
          description: "Tangy fish curry with rice and accompaniments.",
        },
      ],
    },
    {
      title: "Dinner",
      note: "Classic dinner plates and dosas served warm.",
      items: [
        {
          name: "Idly",
          price: "S$ 0.80",
          description: "Soft steamed rice cakes with sambar.",
        },
        {
          name: "Podi Idly",
          price: "S$ 3.00",
          description: "Idly tossed in spiced lentil powder.",
        },
        {
          name: "Dosai",
          price: "S$ 1.50",
          description: "Classic dosa with coconut chutney.",
        },
        {
          name: "Masala Dosai",
          price: "S$ 2.50",
          description: "Golden dosa wrapped around potato masala.",
        },
        {
          name: "Onion Dosai",
          price: "S$ 2.50",
          description: "Dosa studded with caramelized onions.",
        },
        {
          name: "Podi Dosai",
          price: "S$ 2.00",
          description: "Dosa served with spicy podi and ghee.",
        },
        {
          name: "Onion Podi Dosai",
          price: "S$ 2.50",
          description: "Onion dosa finished with podi and ghee.",
        },
        {
          name: "Vendhaya Keerai Dosai",
          price: "S$ 2.50",
          description: "Fenugreek dosa with a fragrant green hue.",
        },
      ],
    },
    {
      title: "Hot Drinks",
      note: "Comforting beverages to pair with every plate.",
      items: [
        {
          name: "Tea",
          price: "S$ 1.00",
          description: "Strong brewed tea with milk.",
        },
        {
          name: "Masala Tea",
          price: "S$ 1.00",
          description: "Tea spiced with cardamom and ginger.",
        },
        {
          name: "Coffee",
          price: "S$ 1.50",
          description: "Rich South Indian filter coffee.",
        },
        {
          name: "Horlicks Hot",
          price: "S$ 1.50",
          description: "Warm malted drink with milk.",
        },
        {
          name: "Milo Hot",
          price: "S$ 1.50",
          description: "Chocolate malt beverage served hot.",
        },
        {
          name: "Boost",
          price: "S$ 1.50",
          description: "Nutritious malt drink with milk.",
        },
      ],
    },
  ];

  return (
    <MotionSection id="menu" className="bg-[#FFF7F1] py-24 text-[#3B2A24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-[#EA5828] uppercase">
              Menu Preview
            </p>
            <h2 className="text-4xl leading-tight font-semibold md:text-5xl">
              A taste of our everyday favorites.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B7280]">
              Enjoy the signature South Indian dishes served at Ayyanar, then
              visit the full menu page for the complete selection and images.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <div className="rounded-full bg-[#EA5828] px-4 py-3 text-sm font-semibold text-white">
              Authentic breakfast staples
            </div>
            <div className="rounded-full bg-[#F5E6DA] px-4 py-3 text-sm font-semibold text-[#3B2A24]">
              Hearty lunch meals
            </div>
            <div className="rounded-full bg-[#F5E6DA] px-4 py-3 text-sm font-semibold text-[#3B2A24]">
              Warm evening plates
            </div>
          </div>
        </div>

        <MotionContainer className="grid gap-8 lg:grid-cols-2">
          {menuCategories.map((category) => (
            <MotionArticle
              key={category.title}
              className="card-surface p-6 md:p-8"
            >
              <div className="mb-7 flex items-start justify-between gap-4 border-b border-[#D8B595]/60 pb-5">
                <div>
                  <h3 className="text-2xl font-semibold text-[#3B2A24]">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6B7280]">{category.note}</p>
                </div>
                <span className="mt-1 h-px w-12 bg-[#EA5828]/20" />
              </div>

              <div className="space-y-5">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-[1fr_auto] gap-5"
                  >
                    <div>
                      <h4 className="font-medium text-[#3B2A24]">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                        {item.description}
                      </p>
                    </div>
                    <p className="font-semibold text-[#EA5828]">{item.price}</p>
                  </div>
                ))}
              </div>
            </MotionArticle>
          ))}
        </MotionContainer>

        <div className="mt-12 flex justify-center">
          <MotionLink
            href="/menu"
            className="btn-primary inline-flex items-center rounded-full px-6 py-3 text-sm font-bold tracking-[0.18em] uppercase"
          >
            View full menu
          </MotionLink>
        </div>
      </div>
    </MotionSection>
  );
}
