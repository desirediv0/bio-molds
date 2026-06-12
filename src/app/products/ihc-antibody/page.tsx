import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { FaDna, FaFlask, FaMicroscope, FaVial, FaArrowRight, FaCheck } from "react-icons/fa6";

const highlights = [
  {
    icon: <FaMicroscope className="text-3xl text-cyan-500" />,
    title: "Positive Charged Glass Slides",
    desc: "Plain and positively charged adhesive slides (PCL 45° & PCI 90°) — Super White Glass, IVD & CE marked, fully compatible with automated stainers for IHC and cytology.",
    points: [
      "Leica & Roche Ventana compatible",
      "Superior cell & tissue adhesion",
      "90° and 45° corner options"
    ],
    href: "/#contact"
  },
  {
    icon: <FaDna className="text-3xl text-cyan-500" />,
    title: "Next-Generation Sequencing (NGS)",
    desc: "Advanced NGS library preparation reagents, adapters, and custom target panels designed for high-resolution genetic profiling.",
    points: [
      "Oncology panels",
      "Infectious disease panels",
      "High-throughput sequencing workflow"
    ],
    href: "/#contact"
  },
  {
    icon: <FaFlask className="text-3xl text-cyan-500" />,
    title: "Sanger Sequencing",
    desc: "Custom oligonucleotide synthesis, Sanger sequencing mixes, and high-accuracy reagents for genetic variant verification.",
    points: [
      "Oligo synthesis with HPLC purification",
      "Sequencing master mixes",
      "Robust validation reagents"
    ],
    href: "/#contact"
  },
  {
    icon: <FaVial className="text-3xl text-cyan-500" />,
    title: "HLA Typing (HLA)",
    desc: "High-resolution Human Leukocyte Antigen (HLA) typing kits and services designed for transplant compatibility, disease association, and pharmacogenomics.",
    points: [
      "Transplant compatibility screening",
      "High-resolution genotyping",
      "Disease-association HLA typing"
    ],
    href: "/#contact"
  }
];

export default function IhcAntibodyPage() {
  return (
    <>
      <PageHero
        title="IHC Antibody & HLA"
        sub="Positive charged glass slides, NGS, Sanger sequencing & HLA Typing solutions for clinical diagnostics and pathology."
        bgImage="/Ihc.jpg"
      />

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mb-14 font-sans">
              Our Immunohistochemistry (IHC) Antibody and HLA division delivers advanced tools for high-precision tissue diagnostics, compatibility testing, and genomic analysis. We offer a comprehensive suite of solutions tailored for diagnostic laboratories, research institutions, and transplant facilities.
              <br /><br />
              With products ranging from premium positive-charged adhesive microscope slides to cutting-edge HLA typing kits and sequencing reagents, Biomolds Pvt. Ltd. ensures unmatched reliability and accuracy in molecular and histopathological workflows.
            </p>
          </FadeUp>

          {/* highlights CARDS (Grid of 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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
            <p className="text-gray-400 mb-8 font-sans">Our IHC and HLA diagnostics experts are ready to assist with compatibility typing, validation runs, and custom solutions.</p>
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
