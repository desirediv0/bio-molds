import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { FaDna, FaFlask, FaMicroscope, FaDesktop, FaArrowRight, FaFilePdf, FaWhatsapp } from "react-icons/fa6";

const highlights = [
  {
    icon: <FaDna className="text-3xl text-cyan-500" />,
    title: "DNA FISH Probes",
    desc: "332+ dual-color, tri-color, and single-color FISH probes for chromosomal & gene anomaly detection in oncology and prenatal diagnostics.",
    href: "/products/fish-and-sanger-sequencing",
    pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/Biomolds_catalogue_DNA%20Fast%20Fish%20Probe.pdf",
  },
  {
    icon: <FaFlask className="text-3xl text-cyan-500" />,
    title: "Cytogenetics Culture Media",
    desc: "Optimized culture media formulations for chromosome analysis, karyotyping, and cell culture workflows in clinical and research labs.",
    href: "/products/culture-media",
  },
  {
    icon: <FaMicroscope className="text-3xl text-cyan-500" />,
    title: "Microscope Glass Slides",
    desc: "Plain and positively charged adhesive slides (PCL 45° & PCI 90°) — Super White Glass, IVD & CE marked, auto-stainer compatible.",
    href: "/products/adhesion-microscope-slides",
    pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/BioMolds_%20slides%20Brochure_final.pdf",
  },
  {
    icon: <FaDesktop className="text-3xl text-cyan-500" />,
    title: "BioView Scanning Systems",
    desc: "Advanced automated fluorescence imaging and analysis systems for FISH scanning, karyotyping, IHC scoring, and digital pathology.",
    href: "/products/equipment",
    pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/BRO-SYS-03%20BioView%20Systems%20Brochure%20-Digital.pdf",
  },
];

// const products = [
//   { slug: "fish-and-sanger-sequencing", icon: <FaDna />, name: "DNA Fast FISH Probes", type: "Cytogenetics", desc: "332+ probes — HER2, ALK, BCR/ABL, PML/RARA, MYC, PD-L1, Prenatal & more. Dual/Tri/Single color.", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/Biomolds_catalogue_DNA%20Fast%20Fish%20Probe.pdf" },
//   { slug: "culture-media", icon: <FaFlask />, name: "Cytogenetics Culture Media", type: "Cytogenetics", desc: "Peripheral blood, bone marrow, amniotic fluid & CVS culture media for karyotyping and chromosomal analysis." },
//   { slug: "adhesion-microscope-slides", icon: <FaMicroscope />, name: "Adhesion Microscope Slides", type: "IVD · CE Marked", desc: "PCL (45°) & PCI (90°) positive charged slides. Super White Glass, 25×75mm, auto-stainer compatible.", pdf: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/BioMolds_%20slides%20Brochure_final.pdf" },
//   { slug: "equipment", icon: <FaDesktop />, name: "BioView Imaging System", type: "Lab Instruments", desc: "Automated fluorescence scanning for FISH, karyotyping, IHC scoring, and digital pathology." },
//   { slug: "extraction-kit", icon: <FaVial />, name: "Extraction Kits", type: "Molecular Kits", desc: "High-yield DNA/RNA extraction using magnetic bead and spin column technology." },
//   { slug: "consumable", icon: <FaBox />, name: "Consumables", type: "Lab Essentials", desc: "Sterile pipette tips, PCR tubes, plates, and microcentrifuge tubes for molecular applications." },
// ];

export default function CytogeneticsPage() {
  return (
    <>
      <PageHero
        title="Cytogenetics"
        sub="Advanced chromosome analysis, FISH probes, culture media & imaging systems for diagnostic and research laboratories."
        bgImage="/Cytogenetics.jpg"
      />

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mb-14">
              Our Cytogenetics division provides advanced solutions for chromosome analysis, diagnostics, and genomic research. We offer a comprehensive range of high-quality products including DNA FISH probes, cytogenetics culture media, plain and positively charged adhesive microscope glass slides, and advanced BioView scanning systems for automated imaging and analysis.
              <br /><br />
              Designed to support diagnostic laboratories, hospitals, research institutions, and pathology centers, our solutions ensure precision, reliability, and efficiency in cytogenetic testing and workflow management. We are committed to delivering innovative technologies that empower accurate diagnosis, genetic research, and clinical excellence.
            </p>
          </FadeUp>

          {/* 4 HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {highlights.map((card, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="bg-cyan-pale border border-cyan-border rounded-2xl p-6 flex flex-col gap-4 h-full">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-black text-lg">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-grow">{card.desc}</p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <Link href={card.href} className="inline-flex items-center gap-2 text-cyan-600 text-sm font-semibold hover:gap-3 transition-all">
                      View Products <FaArrowRight className="text-xs" />
                    </Link>
                    {card.pdf && (
                      <a href={card.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold hover:text-red-600 transition-colors">
                        <FaFilePdf /> Download Catalogue
                      </a>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* PRODUCT GRID */}
          {/* <FadeUp>
            <h2 className="font-serif text-3xl text-black font-medium mb-8">All Products</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div className="card-base p-6 group hover:border-cyan-200 flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-cyan-pale text-cyan-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded mb-3">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-semibold text-black mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-4 flex-grow">{item.desc}</p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <Link href={`/products/${item.slug}`} className="text-cyan-600 text-sm font-medium hover:text-cyan-500 transition-colors flex items-center gap-1 group-hover:gap-2">
                      View Details <FaArrowRight className="text-xs" />
                    </Link>
                    {item.pdf && (
                      <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold hover:text-red-600 transition-colors">
                        <FaFilePdf /> Download Catalogue
                      </a>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[#0f1e2e]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl text-white font-medium mb-4">Need Consultation?</h2>
            <p className="text-gray-400 mb-8">Our cytogenetics experts are ready to assist with product selection, validation samples, and custom solutions.</p>
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
