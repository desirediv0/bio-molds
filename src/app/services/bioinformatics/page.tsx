import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { FaDna, FaPuzzlePiece, FaChartPie, FaMicroscope, FaCommentDots } from "react-icons/fa6";

export default function BioinformaticsPage() {
  return (
    <>
      <PageHero title="Bioinformatics" sub="Computational genomic and proteomic analysis for molecular research." />

      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <FadeUp>
              <p className="text-lg text-gray-600 leading-relaxed mb-12 border-l-4 border-cyan-500 pl-6">
                Bioinformatics bridges the gap between biological data and computational analysis. We provide advanced data processing and interpretation services for genomics, transcriptomics, and proteomics research.
              </p>
            </FadeUp>

            <FadeUp delay={100} className="mb-12">
              <h2 className="font-serif text-3xl text-black font-medium mb-6">Our Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-base p-6">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-2xl"><FaDna /></div>
                  <h3 className="font-semibold text-black mb-2">NGS Data Analysis</h3>
                  <p className="text-sm text-gray-500">Comprehensive analysis pipelines for Whole Genome, Exome, and RNA sequencing data.</p>
                </div>
                <div className="card-base p-6">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-2xl"><FaPuzzlePiece /></div>
                  <h3 className="font-semibold text-black mb-2">Structural Biology</h3>
                  <p className="text-sm text-gray-500">Protein structure prediction, molecular docking, and dynamic simulations for drug discovery.</p>
                </div>
                <div className="card-base p-6">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-2xl"><FaChartPie /></div>
                  <h3 className="font-semibold text-black mb-2">Biomarker Discovery</h3>
                  <p className="text-sm text-gray-500">Statistical and machine learning approaches to identify clinical biomarkers from multi-omics data.</p>
                </div>
                <div className="card-base p-6">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-2xl"><FaMicroscope /></div>
                  <h3 className="font-semibold text-black mb-2">Custom Pipelines</h3>
                  <p className="text-sm text-gray-500">Development of tailored bioinformatics workflows for specialized research needs.</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={200} className="card-base p-8">
              <h2 className="font-serif text-3xl text-black font-medium mb-4">Why Choose Us?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team combines deep biological knowledge with computational expertise to ensure your data yields actionable insights. We use industry-standard tools alongside proprietary algorithms for maximum accuracy.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Cloud Infrastructure</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Data Security</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Custom Reporting</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Dedicated Support</span>
              </div>
            </FadeUp>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeUp delay={100} className="card-base p-6 mb-6">
              <h3 className="font-semibold text-black mb-4 border-b border-gray-100 pb-2">All Services</h3>
              <ul className="flex flex-col gap-2">
                <li><Link href="/services/genetic-test" className="text-gray-500 hover:text-cyan-600 transition-colors py-1 block">Genetic Test</Link></li>
                <li><Link href="/services/drug-discovery" className="text-gray-500 hover:text-cyan-600 transition-colors py-1 block">Drug Discovery</Link></li>
                <li><Link href="/services/bioinformatics" className="text-cyan-600 font-medium flex items-center gap-2"><span aria-hidden="true">→</span> Bioinformatics</Link></li>
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
