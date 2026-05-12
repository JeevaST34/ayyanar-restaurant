export default function Menu() {
  const menuCategories = [
    {
      title: "Morning & Tiffin",
      note: "Comforting classics served with fresh chutneys.",
      items: [
        {
          name: "Idli Sambar",
          price: "Rs. 80",
          description: "Soft steamed rice cakes, ghee, sambar, coconut chutney",
        },
        {
          name: "Medu Vada",
          price: "Rs. 90",
          description: "Crisp lentil vada, pepper, curry leaves, sambar",
        },
        {
          name: "Ghee Roast Dosa",
          price: "Rs. 140",
          description: "Paper-thin dosa with potato masala and podi",
        },
      ],
    },
    {
      title: "House Curries",
      note: "Slow-cooked gravies with layered spice.",
      items: [
        {
          name: "Chettinad Chicken",
          price: "Rs. 310",
          description: "Black pepper, fennel, coconut, roasted country spices",
        },
        {
          name: "Paneer Tikka Masala",
          price: "Rs. 250",
          description: "Charred paneer, tomato gravy, fenugreek finish",
        },
        {
          name: "Meen Kuzhambu",
          price: "Rs. 340",
          description: "Tamarind fish curry with shallots and curry leaves",
        },
      ],
    },
    {
      title: "Biryani & Rice",
      note: "Aromatic rice dishes for the main event.",
      items: [
        {
          name: "Chicken Biryani",
          price: "Rs. 290",
          description: "Seeraga samba rice, raita, brinjal gravy",
        },
        {
          name: "Mutton Biryani",
          price: "Rs. 390",
          description: "Slow-cooked mutton, saffron, mint, fried onion",
        },
        {
          name: "Vegetable Meals",
          price: "Rs. 180",
          description: "Rice, sambar, rasam, poriyal, kootu, appalam, curd",
        },
      ],
    },
    {
      title: "Sweets & Sips",
      note: "A softer finish after the spice.",
      items: [
        {
          name: "Elaneer Payasam",
          price: "Rs. 130",
          description: "Tender coconut, milk, cardamom, roasted cashew",
        },
        {
          name: "Gulab Jamun",
          price: "Rs. 100",
          description: "Warm milk dumplings in light rose syrup",
        },
        {
          name: "Filter Coffee",
          price: "Rs. 70",
          description: "Strong decoction, frothy milk, brass tumbler style",
        },
      ],
    },
  ];

  const experiences = [
    "Chef tasting thali",
    "Private dining set menu",
    "Weekend seafood specials",
  ];

  return (
    <section id="menu" className="bg-[#0B1A2F] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-primary mb-4 text-xs font-semibold tracking-[0.28em] uppercase">
              Menu
            </p>
            <h2 className="text-4xl leading-tight font-semibold md:text-5xl">
              Refined South Indian classics, served generously.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {experiences.map((experience) => (
              <div
                key={experience}
                className="border-primary/20 bg-primary/10 text-accent border px-4 py-4 text-sm font-medium"
              >
                {experience}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {menuCategories.map((category) => (
            <section
              key={category.title}
              className="border border-white/10 bg-[#181510] p-6 md:p-8"
            >
              <div className="mb-7 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <h3 className="text-primary text-2xl font-semibold">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/55">{category.note}</p>
                </div>
                <span className="bg-primary/50 mt-1 h-px w-12" />
              </div>

              <div className="space-y-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-[1fr_auto] gap-5"
                  >
                    <div>
                      <h4 className="font-medium text-white">{item.name}</h4>
                      <p className="mt-1 text-sm leading-6 text-white/55">
                        {item.description}
                      </p>
                    </div>
                    <p className="text-primary font-semibold">{item.price}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
