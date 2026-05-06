"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { FaCommentDots, FaArrowRight, FaDna, FaServer, FaLaptopMedical, FaChartPie, FaMicroscope, FaVial } from "react-icons/fa6";
import Image from "next/image";

interface ServiceInfo {
  id: string;
  title: string;
  shortDesc: string;
  icon: any;
  overview: string;
  features: { title: string; desc: string }[];
  details: string;
}

const getIconForService = (id: string) => {
  switch (id) {
    case "turn-key": return <FaServer />;
    case "sequencing": return <FaVial />;
    case "bioinformatics": return <FaLaptopMedical />;
    case "biostatistics": return <FaChartPie />;
    case "drug-discovery-analysis": return <FaMicroscope />;
    case "cytogenetic-analysis": return <FaDna />;
    default: return <FaDna />;
  }
};

const serviceData: Record<string, ServiceInfo> = {
  "turn-key": {
    id: "turn-key",
    title: "Turn Key",
    shortDesc: "Complete end-to-end laboratory and research solutions from setup to operational support.",
    icon: <FaServer />,
    overview: "Our turn-key solutions provide a comprehensive approach to setting up and managing advanced diagnostic and research laboratories, ensuring compliance, efficiency, and state-of-the-art capabilities.",
    features: [
      { title: "Lab Setup", desc: "Design and deployment of specialized medical and research facilities." },
      { title: "Equipment Procurement", desc: "Sourcing high-quality instruments tailored to your specific workflows." },
      { title: "Operational Training", desc: "Comprehensive staff training on protocols and equipment handling." }
    ],
    details: "Whether you're establishing a new cytogenetics lab or upgrading your molecular diagnostics capabilities, our turn-key service manages every detail. From regulatory compliance and equipment installation to final workflow validation, we ensure your facility is ready to deliver precise and reliable results."
  },
  "sequencing": {
    id: "sequencing",
    title: "Sequencing",
    shortDesc: "Next-Generation and Sanger Sequencing services for in-depth genomic analysis.",
    icon: <FaVial />,
    overview: "We offer robust sequencing services to identify genetic mutations, analyze gene expression, and support comprehensive genomic research.",
    features: [
      { title: "Sanger Sequencing", desc: "Gold-standard method for targeted mutation analysis and confirmation." },
      { title: "NGS Solutions", desc: "High-throughput sequencing for whole-genome, exome, and targeted panels." },
      { title: "Data Accuracy", desc: "Stringent quality control measures ensuring high-fidelity readouts." }
    ],
    details: "Our sequencing facility is equipped to handle everything from basic plasmid sequencing to complex tumor profiling. We provide high-quality data with fast turnaround times to accelerate your clinical and research discoveries."
  },
  "bioinformatics": {
    id: "bioinformatics",
    title: "Bioinformatics",
    shortDesc: "Advanced computational analysis of complex biological and genomic data.",
    icon: <FaLaptopMedical />,
    overview: "Transforming massive datasets into actionable biological insights through cutting-edge algorithms and expert data analysis.",
    features: [
      { title: "Genomic Data Analysis", desc: "Variant calling, annotation, and interpretation from sequencing data." },
      { title: "Pipeline Development", desc: "Custom bioinformatic pipelines tailored to specific research needs." },
      { title: "Transcriptomics", desc: "Differential gene expression analysis and pathway mapping." }
    ],
    details: "Our bioinformatics team bridges the gap between biological data and computational science. We help researchers and clinicians interpret complex genomic, transcriptomic, and proteomic data to drive personalized medicine and innovative discoveries."
  },
  "biostatistics": {
    id: "biostatistics",
    title: "Biostatistics",
    shortDesc: "Rigorous statistical analysis and experimental design for clinical and biological studies.",
    icon: <FaChartPie />,
    overview: "Providing the statistical backbone necessary for valid, reproducible, and impactful scientific research and clinical trials.",
    features: [
      { title: "Study Design", desc: "Sample size calculation and protocol development." },
      { title: "Clinical Trial Analysis", desc: "Efficacy and safety data analysis meeting regulatory standards." },
      { title: "Data Modeling", desc: "Advanced predictive modeling and survival analysis." }
    ],
    details: "We ensure your research is built on a solid statistical foundation. From the initial design phase to final data interpretation, our biostatisticians apply appropriate methodologies to maximize the reliability and significance of your findings."
  },
  "drug-discovery-analysis": {
    id: "drug-discovery-analysis",
    title: "Drug Discovery Analysis",
    shortDesc: "Accelerating the identification and validation of novel therapeutic compounds.",
    icon: <FaMicroscope />,
    overview: "Comprehensive analytical support to streamline the complex pipeline of modern drug discovery and development.",
    features: [
      { title: "Target Identification", desc: "Genomic and proteomic screening for viable drug targets." },
      { title: "Compound Screening", desc: "High-throughput assays to evaluate efficacy and toxicity." },
      { title: "Lead Optimization", desc: "In-depth molecular analysis to refine therapeutic candidates." }
    ],
    details: "Our drug discovery services provide critical insights at every stage, helping pharmaceutical and biotech researchers identify promising compounds faster, reduce development risks, and bring effective therapies to market."
  },
  "cytogenetic-analysis": {
    id: "cytogenetic-analysis",
    title: "Cytogenetic Analysis",
    shortDesc: "Detailed chromosomal studies to detect abnormalities and genetic disorders.",
    icon: <FaDna />,
    overview: "State-of-the-art cytogenetic testing including Karyotyping and FISH to diagnose congenital diseases and hematological malignancies.",
    features: [
      { title: "Karyotyping", desc: "High-resolution G-banding to detect structural and numerical chromosomal abnormalities." },
      { title: "FISH Analysis", desc: "Targeted detection of specific genetic deletions, duplications, and translocations." },
      { title: "Prenatal Diagnostics", desc: "Accurate analysis of amniotic fluid and chorionic villus samples." }
    ],
    details: "We provide comprehensive cytogenetic evaluation essential for accurate clinical diagnosis, prognosis determination, and treatment planning in oncology, pediatrics, and reproductive medicine."
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-black mb-4">Service Not Found</h1>
          <Link href="/#about" className="text-cyan-500 flex items-center justify-center gap-2">
            <FaArrowRight className="rotate-180" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero title={service.title} sub={service.shortDesc} />

      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-cyan-pale text-cyan-600 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                   {getIconForService(service.id)}
                </div>
                <h2 className="font-serif text-4xl text-black font-medium">{service.title} Overview</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed mb-12 border-l-4 border-cyan-500 pl-6 bg-gray-50/50 py-4 rounded-r-2xl">
                {service.overview}
              </p>
            </FadeUp>

            <FadeUp delay={100} className="mb-12">
              <h3 className="font-serif text-3xl text-black font-medium mb-8">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="card-base p-6 bg-white hover:border-cyan-500 transition-colors border border-gray-100 shadow-sm rounded-2xl">
                    <div className="w-10 h-10 bg-gray-50 text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-xl">
                      <FaArrowRight className="-rotate-45" />
                    </div>
                    <h4 className="font-semibold text-black mb-3 text-lg">{feat.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={200} className="card-base p-8 md:p-10 bg-gray-50 rounded-3xl border border-gray-100">
              <h3 className="font-serif text-3xl text-black font-medium mb-6">Detailed Description</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.details}
              </p>
            </FadeUp>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeUp delay={100} className="card-base p-6 mb-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-black mb-4 border-b border-gray-100 pb-3 text-lg">All Services</h3>
              <ul className="flex flex-col gap-3">
                {Object.values(serviceData).map((s) => (
                  <li key={s.id}>
                    {s.id === service.id ? (
                       <span className="text-cyan-600 font-medium flex items-center gap-2 bg-cyan-pale px-3 py-2 rounded-lg">
                         <span aria-hidden="true" className="text-xs">▶</span> {s.title}
                       </span>
                    ) : (
                       <Link href={`/services/${s.id}`} className="text-gray-500 hover:text-cyan-600 transition-colors py-2 px-3 block hover:bg-gray-50 rounded-lg">
                         {s.title}
                       </Link>
                    )}
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={200} className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 text-center text-white shadow-lg">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                <FaCommentDots />
              </div>
              <h3 className="font-semibold text-xl mb-3">Need Consultation?</h3>
              <p className="text-sm text-white/80 mb-6 leading-relaxed">Our clinical and research experts are ready to assist you with tailored solutions.</p>
              <a href="tel:+919315465339" className="block bg-white text-cyan-600 font-bold py-3 px-4 rounded-xl mb-3 shadow-sm hover:bg-gray-50 transition-colors">
                Call: 9315465339
              </a>
              <a href="mailto:services@biomolds.com" className="text-sm text-white/90 hover:text-white block break-all font-medium underline underline-offset-4">
                services@biomolds.com
              </a>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
