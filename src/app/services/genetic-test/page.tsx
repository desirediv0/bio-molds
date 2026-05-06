import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { FaDna, FaPeopleGroup, FaPills, FaCommentDots } from "react-icons/fa6";

export default function GeneticTestPage() {
  return (
    <>
      <PageHero title="Genetic Test" sub="Comprehensive DNA, chromosomal, and metabolic analysis for advanced diagnostics." />

      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <FadeUp>
              <p className="text-lg text-gray-600 leading-relaxed mb-12 border-l-4 border-cyan-500 pl-6">
                Genetic tests analyse DNA, chromosomes, proteins, and metabolic processes to detect hereditary diseases related to genotype, mutations, phenotype, or karyotype.
              </p>
            </FadeUp>

            <FadeUp delay={100} className="mb-12">
              <h2 className="font-serif text-3xl text-black font-medium mb-6">Types of Tests</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card-base p-6">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-2xl"><FaDna /></div>
                  <h3 className="font-semibold text-black mb-2">Predictive Test</h3>
                  <p className="text-sm text-gray-500">Detects gene mutations associated with disorders that appear later in life.</p>
                </div>
                <div className="card-base p-6">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-2xl"><FaPeopleGroup /></div>
                  <h3 className="font-semibold text-black mb-2">Carrier Test</h3>
                  <p className="text-sm text-gray-500">Identifies people carrying one copy of a gene mutation for a recessive disease.</p>
                </div>
                <div className="card-base p-6">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-2xl"><FaPills /></div>
                  <h3 className="font-semibold text-black mb-2">Pharmacogenetic</h3>
                  <p className="text-sm text-gray-500">Helps determine the best medication and dose based on genetic profile.</p>
                </div>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <FadeUp delay={200}>
                <h2 className="font-serif text-3xl text-black font-medium mb-4">DNA FISH</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fluorescence in situ hybridization (FISH) allows detection of aberrations in oncological patients that cannot be identified by standard karyotyping. Also used in prenatal diagnostics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> High resolution and sensitivity</li>
                  <li className="flex items-center gap-2 text-sm text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Rapid turnaround time</li>
                  <li className="flex items-center gap-2 text-sm text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Single-cell level analysis</li>
                </ul>
              </FadeUp>
              <FadeUp delay={300} className="relative h-[250px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-cyan-pale">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Metafer-FISH-1.jpg/640px-Metafer-FISH-1.jpg" alt="FISH Analysis" fill className="object-cover" />
              </FadeUp>
            </div>

            <FadeUp delay={400} className="card-base p-8">
              <h2 className="font-serif text-3xl text-black font-medium mb-4">Cytogenetics Analysis</h2>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive chromosomal analysis for congenital disorders, hematological malignancies, and solid tumors using advanced G-banding and karyotyping techniques.
              </p>
            </FadeUp>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeUp delay={100} className="card-base p-6 mb-6">
              <h3 className="font-semibold text-black mb-4 border-b border-gray-100 pb-2">All Services</h3>
              <ul className="flex flex-col gap-2">
                <li><Link href="/services/genetic-test" className="text-cyan-600 font-medium flex items-center gap-2"><span aria-hidden="true">→</span> Genetic Test</Link></li>
                <li><Link href="/services/drug-discovery" className="text-gray-500 hover:text-cyan-600 transition-colors py-1 block">Drug Discovery</Link></li>
                <li><Link href="/services/bioinformatics" className="text-gray-500 hover:text-cyan-600 transition-colors py-1 block">Bioinformatics</Link></li>
                <li><Link href="/services/biostatistics" className="text-gray-500 hover:text-cyan-600 transition-colors py-1 block">Biostatistics</Link></li>
              </ul>
            </FadeUp>

            <FadeUp delay={200} className="bg-cyan-pale rounded-2xl border border-cyan-100 p-6 text-center">
              <div className="w-12 h-12 bg-white text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-xl">
                <FaCommentDots />
              </div>
              <h3 className="font-semibold text-black mb-2">Need Consultation?</h3>
              <p className="text-sm text-gray-500 mb-4">Our experts are ready to assist you.</p>
              <a href="tel:+919315465339" className="block text-cyan-600 font-bold mb-2 text-lg">9315465339</a>
              <a href="mailto:services@biomolds.com" className="text-sm text-gray-600 hover:text-cyan-600 block break-all font-medium">services@biomolds.com</a>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
