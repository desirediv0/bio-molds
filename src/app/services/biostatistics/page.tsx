import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { FaClipboardList, FaChartLine, FaChartBar, FaFileSignature, FaCommentDots } from "react-icons/fa6";

export default function BiostatisticsPage() {
  return (
    <>
      <PageHero title="Biostatistics" sub="Rigorous statistical analysis for clinical research and multi-omics data." />

      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <FadeUp>
              <p className="text-lg text-gray-600 leading-relaxed mb-12 border-l-4 border-cyan-500 pl-6">
                Our biostatistics team ensures your research findings are robust, reproducible, and ready for publication or regulatory submission. We handle complex biological datasets with rigorous statistical methodologies.
              </p>
            </FadeUp>

            <FadeUp delay={100} className="mb-12">
              <h2 className="font-serif text-3xl text-black font-medium mb-6">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-base p-6">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-2xl"><FaClipboardList /></div>
                  <h3 className="font-semibold text-black mb-2">Study Design</h3>
                  <p className="text-sm text-gray-500">Power analysis, sample size determination, and experimental design optimization for clinical and pre-clinical studies.</p>
                </div>
                <div className="card-base p-6">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-2xl"><FaChartLine /></div>
                  <h3 className="font-semibold text-black mb-2">Clinical Data Analysis</h3>
                  <p className="text-sm text-gray-500">Comprehensive statistical analysis of clinical trial data, including survival analysis and longitudinal models.</p>
                </div>
                <div className="card-base p-6">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-2xl"><FaChartBar /></div>
                  <h3 className="font-semibold text-black mb-2">Multi-Omics Integration</h3>
                  <p className="text-sm text-gray-500">Advanced statistical methods to integrate genomics, proteomics, and clinical data for holistic insights.</p>
                </div>
                <div className="card-base p-6">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-2xl"><FaFileSignature /></div>
                  <h3 className="font-semibold text-black mb-2">Regulatory Support</h3>
                  <p className="text-sm text-gray-500">Preparation of statistical analysis plans (SAPs) and reports compliant with regulatory guidelines.</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={200} className="card-base p-8 border-t-4 border-t-pink">
              <h2 className="font-serif text-3xl text-black font-medium mb-4">Ensuring Data Integrity</h2>
              <p className="text-gray-600 leading-relaxed">
                We believe that good science requires good statistics. We work closely with your research team from the initial planning stages through to final publication, ensuring that every conclusion is supported by rigorous data analysis.
              </p>
            </FadeUp>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeUp delay={100} className="card-base p-6 mb-6">
              <h3 className="font-semibold text-black mb-4 border-b border-gray-100 pb-2">All Services</h3>
              <ul className="flex flex-col gap-2">
                <li><Link href="/services/genetic-test" className="text-gray-500 hover:text-cyan-600 transition-colors py-1 block">Genetic Test</Link></li>
                <li><Link href="/services/drug-discovery" className="text-gray-500 hover:text-cyan-600 transition-colors py-1 block">Drug Discovery</Link></li>
                <li><Link href="/services/bioinformatics" className="text-gray-500 hover:text-cyan-600 transition-colors py-1 block">Bioinformatics</Link></li>
                <li><Link href="/services/biostatistics" className="text-cyan-600 font-medium flex items-center gap-2"><span aria-hidden="true">→</span> Biostatistics</Link></li>
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
