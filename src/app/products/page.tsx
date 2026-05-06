import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import {
  FaFlask,
  FaSuitcaseMedical,
  FaDumbbell,
  FaArrowRight,
} from "react-icons/fa6";

interface ProductItem {
  name: string;
  slug: string;
  type: string;
  desc: string;
  icon: React.ReactNode;
  image?: string;
}

interface ProductCategory {
  title: string;
  id: string;
  desc: string;
  icon: React.ReactNode;
  items: ProductItem[];
}

export default function ProductsPage() {
  const productCategories: ProductCategory[] = [
    {
      id: "protein",
      title: "PROTEIN",
      desc: "Premium quality whey protein for muscle recovery and growth.",
      icon: <FaDumbbell />,
      items: [
        { name: "Concentrate", slug: "concentrate", type: "Whey Protein", desc: "100% Protein From Whey. Repair Muscle Tissues.", icon: <FaDumbbell />, image: "/Concentrate.png" },
        { name: "Pro-Concentrate", slug: "pro-concentrate", type: "Isolate Blend", desc: "Advanced formula for faster absorption.", icon: <FaDumbbell />, image: "/Pro-Concentrate.png" },
        { name: "Absolute whey protein", slug: "absolute-whey", type: "Pure Whey", desc: "Zero additives, maximum purity.", icon: <FaDumbbell />, image: "/Absolute.png" },
        { name: "Turbo whey protein", slug: "turbo-whey", type: "Performance", desc: "Enriched with digestive enzymes.", icon: <FaDumbbell /> },
        { name: "Power Whey protein", slug: "power-whey", type: "Muscle Building", desc: "High BCAA and Glutamine content.", icon: <FaDumbbell /> },
        { name: "Nitra Whey", slug: "nitra-whey", type: "Strength", desc: "Creatine and Nitric Oxide boost.", icon: <FaDumbbell />, image: "/Nitra.png" }
      ]
    },
    {
      id: "gainer",
      title: "GAINER",
      desc: "High-calorie formulas for mass and strength gains.",
      icon: <FaArrowRight />,
      items: [
        { name: "Advanced weight gainer", slug: "advanced-gainer", type: "Mass Gainer", desc: "Complex carbs and protein blend.", icon: <FaArrowRight /> },
        { name: "Anabolic mass gainer", slug: "anabolic-gainer", type: "Anabolic Mass", desc: "Supports rapid weight and muscle gain.", icon: <FaArrowRight /> }
      ]
    },
    {
      id: "preworkout",
      title: "PRE WORKOUT",
      desc: "Energy and focus boosters for intense training sessions.",
      icon: <FaFlask />,
      items: [
        { name: "LSteam", slug: "lsteam", type: "Energy Boost", desc: "Focus and endurance formula.", icon: <FaFlask /> },
        { name: "HSteam", slug: "hsteam", type: "Intense Pump", desc: "Maximum nitric oxide production.", icon: <FaFlask /> }
      ]
    },
    {
      id: "essentials",
      title: "WORKOUT ESSENTIALS",
      desc: "Daily supplements for overall health and performance.",
      icon: <FaSuitcaseMedical />,
      items: [
        { name: "Recharging Supplement", slug: "recharging", type: "Recovery", desc: "Electrolytes and vitamin support.", icon: <FaSuitcaseMedical /> }
      ]
    }
  ];

  return (
    <>
      <PageHero title="Health Nutrition" sub="Science-backed supplements developed for athletes and health enthusiasts." />

      <section className="py-20 px-4 sm:px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row gap-8 mb-16">
            {/* Quick Navigation */}
            <div className="md:w-64 flex-shrink-0">
              <div className="sticky top-24 bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-4">Categories</h3>
                <ul className="flex flex-col gap-3">
                  {productCategories.map(cat => (
                    <li key={cat.id}>
                      <a href={`#${cat.id}`} className="text-sm text-gray-500 hover:text-cyan-600 transition-colors flex items-center gap-2">
                        <span className="text-cyan-500">{cat.icon}</span>
                        {cat.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Product Lists */}
            <div className="flex-grow space-y-16">
              {productCategories.map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-24">
                  <FadeUp delay={100}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl text-cyan-500">{category.icon}</span>
                      <h2 className="font-serif text-3xl text-black font-medium">{category.title}</h2>
                    </div>
                    <p className="text-gray-500 mb-8">{category.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.items.map((item, i) => (
                        <div key={i} className="card-base p-6 group hover:border-cyan-200 flex flex-col items-start h-full">
                          {item.image ? (
                            <div className="w-full aspect-square relative rounded-xl overflow-hidden mb-4 bg-gray-50 border border-gray-100 flex items-center justify-center p-4">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={200}
                                height={200}
                                className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-xl bg-cyan-pale text-cyan-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                              {item.icon}
                            </div>
                          )}
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded mb-3">
                            {item.type}
                          </span>
                          <h3 className="text-lg font-semibold text-black mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-500 mb-6 flex-grow">{item.desc}</p>
                          <Link href={`/products/${item.slug}`} className="mt-auto text-cyan-600 text-sm font-medium hover:text-cyan-500 transition-colors flex items-center gap-1 group-hover:gap-2">
                            View Details <span><FaArrowRight /></span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </FadeUp>
                </div>
              ))}
            </div>
          </div>

          <FadeUp className="bg-black rounded-2xl p-8 md:p-12 text-center flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-2xl">
              <h2 className="font-serif text-3xl text-white font-medium mb-3">Become a Distributor</h2>
              <p className="text-gray-400">
                Join our network of partners and bring BioMolds Health Nutrition to your region.
              </p>
            </div>
            <Link href="/#contact" className="flex-shrink-0 bg-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition-colors shadow-sm whitespace-nowrap">
              Enquire Now
            </Link>
          </FadeUp>

        </div>
      </section>
    </>
  );
}
