import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { FaDna, FaFlask, FaVial, FaArrowRight, FaCheck, FaWhatsapp, FaFilePdf } from "react-icons/fa6";

const highlights = [
  {
    icon: <FaFlask className="text-3xl text-cyan-500" />,
    title: "Extraction Kit",
    desc: "High-yield, inhibitor-free DNA and RNA isolation kits using magnetic bead and spin column technology. Designed for blood, FFPE tissue, and liquid biopsy samples.",
    points: [
      "Blood Genomic DNA & RNA Kits",
      "FFPE DNA & RNA Isolation",
      "Liquid Biopsy / cfDNA Isolation"
    ],
    href: "/products/extraction-kit",
    pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/Extraction_Kits_Brochure_Light_1.pdf.pdf"
  },
  {
    icon: <FaVial className="text-3xl text-cyan-500" />,
    title: "RT-PCR Kits",
    desc: "High-sensitivity real-time PCR kits for somatic mutation detection and rapid pathogenic differential diagnosis.",
    points: [
      { text: "Oncology RT-PCR Kits", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/BiOMOIDs_Oncology_Portfolio_1.pdf%20(1).pdf" },
      { text: "Infectious RT-PCR Kits", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/BioMolds_Product_Catalogue_1.pdf" }
    ],
    href: "/products/rt-pcr-kit"
  },
  {
    icon: <FaDna className="text-3xl text-cyan-500" />,
    title: "NGS ",
    desc: "End-to-end library preparation and sequencing target panels optimized for high-throughput genomic analysis.",
    points: [
      "Oncology NGS Panels",
      "Infectious NGS Panels",
      "Transplant NGS Panels",
      { text: "NIPT Solution", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/BiOMolDs_NGS_Catalog_2026_updated.pdf" }
    ],
    href: "/products/ngs",
    pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/BiOMolDs_NGS_Catalog_2026_updated.pdf"
  },
  {
    icon: <FaFlask className="text-3xl text-cyan-500" />,
    title: "Molecular Reagent",
    desc: "Our molecular reagent portfolio supports research, diagnostics, and genomic applications with high-performance solutions, including:",
    points: [
      "Real-Time PCR Master Mixes",
      "qPCR Assays & Controls",
      "Molecular Diagnostic Reagents",
      "Genomics & Sequencing Reagents"
    ],
    href: "/products/molecular-reagent"
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

          {/* highlights CARDS (Grid of 4) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-20">
            {highlights.map((card, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="bg-cyan-pale border border-cyan-border rounded-2xl p-5 flex flex-col gap-4 h-full">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-black text-lg">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">{card.desc}</p>

                  <ul className="flex flex-col gap-2.5 my-4">
                     {card.points.map((pt, index) => {
                      const isObj = typeof pt === "object";
                      const text = isObj ? pt.text : pt;
                      const pdf = isObj ? pt.pdf : null;
                      
                      const content = (
                        <>
                          <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                            <FaCheck className="text-cyan-600 text-[10px]" />
                          </div>
                          <span>{text}</span>
                          {pdf && <FaFilePdf className="ml-auto text-red-500 text-xs" />}
                        </>
                      );

                      if (pdf) {
                        return (
                          <li key={index}>
                            <a href={pdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs text-gray-900 font-medium font-sans bg-white/60 hover:bg-white px-3 py-2 rounded-xl transition-colors border border-cyan-500/10 shadow-sm w-full">
                              {content}
                            </a>
                          </li>
                        );
                      }

                      return (
                        <li key={index} className="flex items-center gap-3 text-xs text-gray-900 font-medium font-sans bg-white/60 hover:bg-white px-3 py-2 rounded-xl transition-colors border border-cyan-500/10 shadow-sm">
                          {content}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-cyan-100">
                    <Link href={card.href || "/#contact"} className="inline-flex items-center gap-2 text-cyan-600 text-sm font-semibold hover:gap-3 transition-all">
                      Inquire Details <FaArrowRight className="text-xs" />
                    </Link>
                    {card.pdf && (
                      <a href={card.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-500 text-xs font-semibold hover:text-red-600 transition-colors">
                        <FaFilePdf /> Download Catalogue
                      </a>
                    )}
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
