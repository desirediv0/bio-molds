import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import {
  FaFlask,
  FaSuitcaseMedical,
  FaDumbbell,
  FaArrowRight,
  FaDna,
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
      id: "cytogenetics",
      title: "CYTOGENETICS",
      desc: "Chromosomal analysis kits, FISH probes, culture media, and karyotyping solutions.",
      icon: <FaDna />,
      items: [
        { name: "Adhesion Microscope Slides", slug: "adhesion-microscope-slides", type: "IVD · CE Marked", desc: "Super White Glass, Positive Charged slides (PCL/PCI) for Histopathology, Cytology & IHC. Auto-stainer compatible.", icon: <FaDna /> },
        { name: "FISH Probes", slug: "fish-and-sanger-sequencing", type: "Cytogenetics", desc: "Fluorescence In Situ Hybridisation probes for chromosomal aberration detection in oncological and prenatal patients.", icon: <FaDna /> },
        { name: "RT-PCR Detection Kits", slug: "rt-pcr-kit", type: "Molecular Kits", desc: "High-sensitivity nucleic acid detection kits for respiratory, hepatitis, STD, enterovirus, and tumor diseases.", icon: <FaDna /> },
        { name: "Extraction Kits", slug: "extraction-kit", type: "Molecular Kits", desc: "High-yield DNA/RNA extraction kits using magnetic bead and spin column technology.", icon: <FaDna /> },
        { name: "Culture Media", slug: "culture-media", type: "Cytogenetics", desc: "Chromosome analysis and culture media for karyotyping and chromosomal abnormality detection.", icon: <FaDna /> },
        { name: "Equipment", slug: "equipment", type: "Lab Instruments", desc: "Thermal cyclers, centrifuges, automated nucleic acid extractors, and biosafety cabinets.", icon: <FaDna /> },
        { name: "Consumables", slug: "consumable", type: "Lab Essentials", desc: "Sterile pipette tips, PCR tubes, plates, and microcentrifuge tubes for molecular applications.", icon: <FaDna /> }
      ]
    },
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

                    {category.id === "cytogenetics" && (
                      <div className="mb-10">
                        <p className="text-gray-600 leading-relaxed text-base mb-8 max-w-4xl">
                          Our Cytogenetics division provides advanced solutions for chromosome analysis, diagnostics, and genomic research. We offer a comprehensive range of high-quality products including DNA FISH probes, cytogenetics culture media, plain and positively charged adhesive microscope glass slides, and advanced BioView scanning systems for automated imaging and analysis. Designed to support diagnostic laboratories, hospitals, research institutions, and pathology centers, our solutions ensure precision, reliability, and efficiency in cytogenetic testing and workflow management.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                          {[
                            { title: "DNA FISH Probes", desc: "332+ probes for chromosomal & gene anomaly detection. Dual-color, tri-color, and single-color options.", icon: "🧬" },
                            { title: "Culture Media", desc: "Cytogenetics culture media optimized for chromosome analysis, karyotyping, and cell culture workflows.", icon: "🔬" },
                            { title: "Microscope Glass Slides", desc: "Plain and positively charged adhesive slides (PCL/PCI) for Histopathology, Cytology & IHC.", icon: "🧪" },
                            { title: "BioView Scanning Systems", desc: "Advanced automated imaging and analysis systems for cytogenetic scanning and review workflows.", icon: "💻" },
                          ].map((card, i) => (
                            <div key={i} className="bg-cyan-pale border border-cyan-border rounded-2xl p-5 flex flex-col gap-3">
                              <span className="text-3xl">{card.icon}</span>
                              <h4 className="font-semibold text-black text-base">{card.title}</h4>
                              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

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
