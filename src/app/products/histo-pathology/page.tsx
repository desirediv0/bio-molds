import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { FaFlask, FaMicroscope, FaServer, FaArrowRight, FaCheck, FaLaptopMedical } from "react-icons/fa6";

const highlights = [
  {
    icon: <FaFlask className="text-3xl text-cyan-500" />,
    title: "IHC Antibody",
    desc: "High-specificity diagnostic antibodies and detection systems optimized for immunohistochemical staining of clinical tissue sections.",
    points: [
      "Primary & Secondary Antibodies",
      "Ready-to-use (RTU) & Concentrated formats",
      "CE-IVD approved clinical markers"
    ],
    href: "/#contact"
  },
  {
    icon: <FaMicroscope className="text-3xl text-cyan-500" />,
    title: "Positive/Adhesive slide",
    desc: "Premium positive-charged adhesive microscope slides designed to ensure superior cell and tissue adhesion during aggressive staining protocols.",
    points: [
      "Leica & Roche Ventana compatible",
      "Superior cell & tissue adhesion",
      "90° and 45° corner options"
    ],
    href: "/#contact"
  },
  {
    icon: <FaLaptopMedical className="text-3xl text-cyan-500" />,
    title: "Colour Frosted slide Printable",
    desc: "Color-coded frosted glass slides suitable for printing on thermal and inkjet slide printers, facilitating easy sample tracking and identification.",
    points: [
      "Chemically resistant color frosting",
      "Smooth surface for clear print quality",
      "Compatible with major printing systems"
    ],
    href: "/#contact"
  },
  {
    icon: <FaServer className="text-3xl text-cyan-500" />,
    title: "IHC Automation / Slide Printer",
    desc: "Advanced automated slide printers and IHC stainer systems to streamline pathology laboratory workflow, minimize labeling errors, and increase throughput.",
    points: [
      "High-speed automated slide printing",
      "Robust automated IHC staining systems",
      "LIMS integration & barcode scanning"
    ],
    href: "/#contact"
  }
];

export default function HistoPathologyPage() {
  return (
    <>
      <PageHero
        title="Histo Pathology"
        sub="Positive charged glass slides, IHC antibodies, colour frosted slides, and automated laboratory systems for clinical pathology."
        bgImage="/histo-pathology-hero.png"
      />

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mb-14 font-sans">
              Our Histo Pathology division delivers advanced tools for high-precision tissue diagnostics, compatibility testing, and pathology workflows. We offer a comprehensive suite of solutions tailored for diagnostic laboratories, research institutions, and clinical facilities.
              <br /><br />
              With products ranging from premium positive-charged adhesive microscope slides to cutting-edge automated slide printers and IHC staining automation, Biomolds Pvt. Ltd. ensures unmatched reliability and accuracy in molecular and histopathological workflows.
            </p>
          </FadeUp>

          {/* highlights CARDS (Grid of 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {highlights.map((card, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="bg-cyan-pale border border-cyan-border rounded-2xl p-6 flex flex-col gap-4 h-full">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-black text-lg">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">{card.desc}</p>

                  <ul className="flex flex-col gap-2.5 my-4">
                    {card.points.map((pt, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-gray-900 font-medium font-sans bg-white/60 hover:bg-white px-3 py-2 rounded-xl transition-colors border border-cyan-500/10 shadow-sm">
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
            <h2 className="font-serif text-3xl text-white font-medium mb-4">Need Consultation?</h2>
            <p className="text-gray-400 mb-8 font-sans">Our histopathology diagnostics experts are ready to assist with automated stainer compatibility, validation runs, and custom solutions.</p>
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
