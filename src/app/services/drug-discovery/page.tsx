import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { FaBullseye, FaVial, FaCommentDots } from "react-icons/fa6";

export default function DrugDiscoveryPage() {
  return (
    <>
      <PageHero title="Drug Discovery" sub="Developing targeted druggable molecules for rare and orphan diseases." />

      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <FadeUp>
              <p className="text-lg text-gray-600 leading-relaxed mb-12 border-l-4 border-cyan-500 pl-6">
                Our drug discovery division focuses on identifying and developing novel therapeutic molecules. We specialise in targeting orphan diseases—conditions that affect a small percentage of the population but have high unmet medical needs.
              </p>
            </FadeUp>

            <FadeUp delay={100} className="mb-12">
              <h2 className="font-serif text-3xl text-black font-medium mb-6">Our Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-base p-6 border-l-4 border-l-pink">
                  <div className="w-12 h-12 bg-pink-pale text-pink rounded-xl flex items-center justify-center mb-4 text-2xl"><FaBullseye /></div>
                  <h3 className="font-semibold text-black mb-2">Target Identification</h3>
                  <p className="text-sm text-gray-500">Using advanced multi-omics and bioinformatics to identify novel targets in rare disease pathways.</p>
                </div>
                <div className="card-base p-6 border-l-4 border-l-cyan-500">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-2xl"><FaVial /></div>
                  <h3 className="font-semibold text-black mb-2">Lead Optimization</h3>
                  <p className="text-sm text-gray-500">Refining molecular structures to improve efficacy, reduce toxicity, and enhance pharmacokinetics.</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={200} className="card-base p-8 mb-12">
              <h2 className="font-serif text-3xl text-black font-medium mb-4">Focus on Orphan Diseases</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Orphan diseases often lack dedicated research funding. BioMolds is committed to changing this landscape by dedicating resources to diseases that larger pharmaceutical companies often overlook.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <span className="text-sm text-black font-medium">Rare Genetic Disorders</span>
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-pink"></span>
                  <span className="text-sm text-black font-medium">Autoimmune Conditions</span>
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <span className="text-sm text-black font-medium">Targeted Oncology</span>
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-pink"></span>
                  <span className="text-sm text-black font-medium">Metabolic Disorders</span>
                </li>
              </ul>
            </FadeUp>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeUp delay={100} className="card-base p-6 mb-6">
              <h3 className="font-semibold text-black mb-4 border-b border-gray-100 pb-2">All Services</h3>
              <ul className="flex flex-col gap-2">
                <li><Link href="/services/genetic-test" className="text-gray-500 hover:text-cyan-600 transition-colors py-1 block">Genetic Test</Link></li>
                <li><Link href="/services/drug-discovery" className="text-cyan-600 font-medium flex items-center gap-2"><span aria-hidden="true">→</span> Drug Discovery</Link></li>
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
