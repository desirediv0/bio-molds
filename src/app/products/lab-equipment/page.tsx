import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { FaFlask, FaServer, FaArrowRight, FaCheck, FaWhatsapp } from "react-icons/fa6";

const highlights = [
  {
    icon: <FaServer className="text-3xl text-cyan-500" />,
    title: "Laboratory Equipment",
    desc: "Our equipment portfolio includes advanced laboratory instruments designed to meet the needs of modern clinical, research, and diagnostics laboratories.",
    points: [
      "Hybridization Chambers & CO₂ Incubators",
      "Centrifuges & Thermal Cyclers",
      "Biosafety Cabinets & Sterile Systems",
      "Specialized Diagnostic Instruments"
    ],
    href: "/#contact"
  },
  {
    icon: <FaFlask className="text-3xl text-cyan-500" />,
    title: "Laboratory Consumables",
    desc: "High-quality lab plastics, reagents, and collection supplies sourced from trusted global partners to ensure accuracy and operational efficiency.",
    points: [
      "Laboratory Plastics (Tubes, Tips, Plates)",
      "Sample Collection & Storage Products",
      "High-Performance Lab Reagents",
      "Essential General Lab Supplies"
    ],
    href: "/#contact"
  }
];

export default function LabEquipmentPage() {
  return (
    <>
      <PageHero
        title="Laboratory Equipment & Consumables"
        sub="Advanced laboratory instruments, hybridization chambers, incubators, and high-quality lab consumables for research and diagnostic workflows."
        bgImage="/lab-equipment-hero.png"
      />

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mb-14 font-sans">
              BioMolds offers a comprehensive range of laboratory equipment and consumables to support clinical diagnostics, life science research, molecular biology, and cell culture workflows. Our equipment portfolio includes advanced laboratory instruments such as hybridization chambers, CO₂ incubators, centrifuges, thermal cyclers, biosafety cabinets, and other specialized systems designed to meet the needs of modern laboratories.
              <br /><br />
              Complementing our equipment offerings, we provide a wide range of high-quality consumables, including laboratory plastics, reagents, sample collection and storage products, and essential laboratory supplies sourced from trusted global partners. Designed to ensure accuracy, reliability, and operational efficiency, our solutions enable laboratories to maintain seamless workflows, achieve consistent results, and uphold the highest standards of quality and performance.
            </p>
          </FadeUp>

          {/* highlights CARDS (Grid of 2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mb-20">
            {highlights.map((card, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="bg-cyan-pale border border-cyan-border rounded-2xl p-5 flex flex-col gap-4 h-full">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-black text-lg">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">{card.desc}</p>

                  <ul className="flex flex-col gap-2.5 my-4">
                    {card.points.map((pt, index) => (
                      <li key={index} className="flex items-center gap-3 text-xs text-gray-900 font-medium font-sans bg-white/60 hover:bg-white px-3 py-2 rounded-xl transition-colors border border-cyan-500/10 shadow-sm">
                        <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                          <FaCheck className="text-cyan-600 text-[10px]" />
                        </div>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-cyan-100">
                    <Link href={card.href} className="inline-flex items-center gap-2 text-cyan-600 text-sm font-semibold hover:gap-3 transition-all">
                      Inquire Details <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[#0f1e2e]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl text-white font-medium mb-4">Looking for Custom Lab Setup?</h2>
            <p className="text-gray-400 mb-8 font-sans">Our technical sales team can help design custom packages for new labs, including equipment validation, installation, and consumable bulk pricing.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/919315465339" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-500 transition-colors flex items-center gap-2">
                <FaWhatsapp className="text-xl" /> WhatsApp Now
              </a>
              <a href="mailto:biomolediscsol@biomolds.com" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-500/10 transition-colors">
                biomolediscsol@biomolds.com
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
