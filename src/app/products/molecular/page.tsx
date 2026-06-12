import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { FaDna, FaFlask, FaVial, FaArrowRight, FaCheck } from "react-icons/fa6";

const highlights = [
  {
    icon: <FaFlask className="text-3xl text-cyan-500" />,
    title: "Extraction Kit",
    desc: "High-yield, inhibitor-free DNA and RNA isolation kits using magnetic bead and spin column technology. Designed for blood, FFPE tissue, and liquid biopsy samples.",
    points: [
      "Blood Genomic DNA & RNA Kits",
      "FFPE DNA & RNA Isolation",
      "Liquid Biopsy cfDNA Isolation"
    ],
    href: "/products/extraction-kit"
  },
  {
    icon: <FaVial className="text-3xl text-cyan-500" />,
    title: "RT-PCR Kits",
    desc: "High-sensitivity real-time PCR kits for somatic mutation detection and rapid pathogenic differential diagnosis.",
    points: [
      "Oncology RT-PCR Kits",
      "Infectious RT-PCR Kits"
    ],
    href: "/products/rt-pcr-kits"
  },
  {
    icon: <FaDna className="text-3xl text-cyan-500" />,
    title: "NGS (Next-Generation Sequencing)",
    desc: "End-to-end library preparation and sequencing target panels optimized for high-throughput genomic analysis.",
    points: [
      "Oncology NGS Panels",
      "Infectious NGS Panels",
      "Transplant NGS Panels"
    ],
    href: "/products/ngs"
  }
];

export default function MolecularPage() {
  return (
    <>
      <PageHero
        title="Molecular Diagnostics"
        sub="High-sensitivity real-time PCR kits, extraction systems, and next-generation sequencing reagents for diagnostic labs."
        bgImage="/Molecular.jpg"
      />

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mb-14 font-sans">
              Clinical diagnosis has made extensive use of molecular techniques, including disease diagnosis, disease prognosis, and identification of infectious agents. The concepts of molecular biology laboratory practise, common techniques, and the scientific foundation for molecular diagnostics will all be covered in this fundamental molecular biology course series. This introductory-level eLearning course explains the real-time PCR and PCR concept. Real-time PCR features, PCR product analysis, and PCR processes are some of the subjects discussed.
            </p>
          </FadeUp>

          {/* highlights CARDS (Grid of 3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {highlights.map((card, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="bg-cyan-pale border border-cyan-border rounded-2xl p-6 flex flex-col gap-4 h-full">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-black text-lg">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">{card.desc}</p>
                  
                  <ul className="flex flex-col gap-2 my-4">
                    {card.points.map((pt, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-gray-600 font-sans">
                        <FaCheck className="text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-cyan-100">
                    <Link href="/#contact" className="inline-flex items-center gap-2 text-cyan-600 text-sm font-semibold hover:gap-3 transition-all">
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
            <h2 className="font-serif text-3xl text-white font-medium mb-4">Need Consultation?</h2>
            <p className="text-gray-400 mb-8 font-sans">Our molecular diagnostic experts are ready to assist with product selection, validation samples, and custom solutions.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919315465339" className="bg-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition-colors">
                Call: +91 9315465339
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
