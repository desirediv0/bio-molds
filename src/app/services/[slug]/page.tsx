"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { FaCommentDots, FaArrowRight, FaDna, FaServer, FaLaptopMedical, FaChartPie, FaMicroscope, FaVial } from "react-icons/fa6";

interface ServiceInfo {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
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
    case "genetic-test": return <FaDna />;
    default: return <FaDna />;
  }
};

const serviceData: Record<string, ServiceInfo> = {
  "turn-key": {
    id: "turn-key",
    title: "Turn-Key Laboratories",
    shortDesc: "Experience hassle-free laboratory construction — comprehensive infrastructure consultancy for life science research and pharma manufacturing.",
    icon: <FaServer />,
    overview: "BioMolds is your partner in providing comprehensive infrastructure consultancy services for the life science, research, and diagnostics industry. We offer turnkey infrastructure design and delivery for high-end specialties such as molecular diagnostics, virus culture labs, NGS and WGS, stem cell labs, IVF labs, and more. We employ design/build/operate and transfer models to ensure efficient and effective implementation of infrastructure projects.",
    features: [
      { title: "Advisory Services", desc: "Expert advisory for biosafety laboratory setup — guiding clients through the entire construction process with insights on safety, environmental, and quality compliance." },
      { title: "Managed Operations", desc: "Full-fledged managed operations from concept to commissioning — design, construction, procurement, and installation handled end-to-end." },
      { title: "High-End Specialty Infrastructure", desc: "End-to-end solutions for molecular diagnostics labs, virus culture facilities, NGS/WGS labs, stem cell labs, and IVF centers." },
      { title: "Biocontainment Clean Room", desc: "BSL-2, BSL-3, BSL-4 biocontainment solutions adhering to CDSCO Schedule V and WHO GMP international standards." },
      { title: "Regulatory Compliance", desc: "CDSCO & WHO-GMP compliant infrastructure with deep understanding of regulatory requirements for the life science industry." },
      { title: "Budget-Friendly Fixed Price", desc: "Tailored solutions for all budgets — fixed price delivery so clients can plan with certainty." },
    ],
    details: "BioMolds understands the complexities and challenges involved in laboratory renovation or construction projects. From design considerations to compliance with safety, environmental, and quality guidelines, numerous factors need to be meticulously managed. As a trusted provider of turnkey services, BioMolds offers a comprehensive solution for laboratory construction projects — ensuring a fully functional laboratory delivered within a fixed timeframe and at a fixed price.\n\nWe also offer Green Building Planning and Engineering Solutions (LEED), Design/Build/Operate and Transfer Models, and Timely Delivery through value engineering and efficient project management. Our clients include diagnostic labs, hospitals, research institutions, pharmaceutical manufacturers, and IVF centers across India."
  },
  "sequencing": {
    id: "sequencing",
    title: "Sequencing",
    shortDesc: "Next-Generation Sequencing (NGS), Sanger Sequencing, and whole-genome sequencing services for clinical and research applications.",
    icon: <FaVial />,
    overview: "BioMolds offers comprehensive sequencing services spanning Sanger Sequencing, Next-Generation Sequencing (NGS), and Whole Genome Sequencing (WGS). Our sequencing solutions support clinical diagnostics, oncology profiling, infectious disease identification, pharmacogenomics, and advanced genomic research across India.",
    features: [
      { title: "Sanger Sequencing", desc: "Gold-standard targeted sequencing for mutation confirmation, plasmid verification, and clinical diagnostics." },
      { title: "Next-Generation Sequencing (NGS)", desc: "High-throughput sequencing for whole-genome, whole-exome, targeted panels, RNA-Seq, and amplicon sequencing." },
      { title: "Whole Genome Sequencing (WGS)", desc: "Complete genome coverage for pathogen identification, rare disease diagnosis, and population genomics." },
      { title: "Oncology Sequencing Panels", desc: "Custom and pre-designed panels for somatic mutation profiling, tumor mutational burden, and MSI analysis." },
      { title: "Viral & Microbial Genotyping", desc: "HIV-1, HBV, SARS-CoV-2, HPV genotyping, 16S/18S rRNA amplicon sequencing for microbiome studies." },
      { title: "Drug Resistance Sequencing", desc: "CMV UL54/UL97, HSV TK/POL, HCV NS5A resistance panels for antiviral therapy guidance." }
    ],
    details: "Our sequencing facility is equipped to handle everything from basic plasmid sequencing to complex tumor profiling and whole-genome studies. We provide high-quality data with fast turnaround times and expert bioinformatics support to accelerate your clinical and research discoveries.\n\nAll sequencing runs are performed under strict QC protocols with comprehensive data reporting. We support downstream analysis including variant calling, annotation, pathway enrichment, and clinical interpretation for both research and diagnostic use."
  },
  "bioinformatics": {
    id: "bioinformatics",
    title: "BioInformatics",
    shortDesc: "Advanced computational analysis of biological and genomic data — from NGS pipelines to protein interaction networks.",
    icon: <FaLaptopMedical />,
    overview: "In the biological sciences, gathering and analysing data are crucial aspects of the research process. Data analysis does not have to cease when a laboratory is closed. BioMolds bioinformatics services cover gene expression profiling, genotyping, epigenetic data analysis, proteomics, metagenomics, and custom pipeline development across Illumina, Ion TorrentTM, Affymetrix, and Agilent platforms.",
    features: [
      { title: "NGS Data Analysis", desc: "Variant calling, annotation, whole-genome/exome/targeted panel analysis, mRNA expression, and gene interaction mapping." },
      { title: "Microarray & Epigenomics", desc: "Gene expression profiling, genotyping, methylation analysis, and epigenetic data interpretation across major platforms." },
      { title: "Proteomics & Metabolomics", desc: "Comprehensive protein and metabolite profiling, pathway enrichment, functional and structural characterization." },
      { title: "Metagenomics & 16S/18S rRNA", desc: "Microbiome community profiling, taxonomic classification, diversity analysis, and comparative metagenomics." },
      { title: "CRISPR & siRNA Analysis", desc: "CRISPR off-target prediction, siRNA sequence analysis, target prediction, and restriction enzyme selection." },
      { title: "Phylogenetics & Protein Networks", desc: "Evolutionary and phylogenetic analysis, protein motifs & domain analysis, protein interaction network analysis." }
    ],
    details: "Our bioinformatics services cover the full spectrum: NGS data analysis, Proteomics, Metagenomics, Gene and Nucleotide sequence analysis, mRNA expression analysis, Gene interaction and pathway enrichment, functional & structural characterization, siRNA sequence analysis and target prediction, Protein sequence analysis, Evolutionary and Phylogenetic analysis, Protein motifs & Domain analysis, and Protein interaction network analysis.\n\nAll analyses are delivered with comprehensive reports, visualizations, and interpretations suitable for publication and regulatory submission."
  },
  "biostatistics": {
    id: "biostatistics",
    title: "Biostatistics",
    shortDesc: "Rigorous statistical design and analysis for clinical research, trials, and genomic studies using SPSS and MED CALC.",
    icon: <FaChartPie />,
    overview: "BioMolds provides comprehensive biostatistics services using SPSS and MED CALC Software — covering sample size and power calculation, parametric and non-parametric tests, regression & correlation, survival and hazards models, ROC analysis, multivariate analysis, PCA, and meta-analysis for clinical and research applications.",
    features: [
      { title: "Sample Size & Study Design", desc: "Sample size calculation, power analysis, and study protocol design for clinical trials and research projects." },
      { title: "Parametric & Non-Parametric Tests", desc: "T-tests, ANOVA, Mann-Whitney, Kruskal-Wallis, Chi-square, Fisher's exact test using SPSS and MED CALC." },
      { title: "Regression & Survival Analysis", desc: "Linear, logistic, Cox regression, Kaplan-Meier survival curves, and Hazards models for clinical outcome studies." },
      { title: "ROC & Multivariate Analysis", desc: "Receiver Operating Characteristic (ROC) curves, AUC, Population Attributed Risk (PAR%), multivariate and PCA analysis." },
      { title: "Meta-Analysis", desc: "Systematic review and meta-analysis with forest plots, funnel plots, and heterogeneity assessment." },
      { title: "Genomic & NGS Statistics", desc: "Statistical analysis for NGS data, differential expression, proteomics, metagenomics, and gene interaction studies." }
    ],
    details: "Our biostatistics services are built on industry-standard tools (SPSS, MED CALC) and cover the complete analytical workflow from study design to final interpretation.\n\nServices include: Sample size & power calculation, Parametric and Non-Parametric tests, Regression & correlation, Survival and Hazards models, ROC analysis, PAR%, Multivariate analysis, PCA, Meta-analysis, NGS data statistical analysis, Proteomics and Metagenomics data analysis, mRNA expression analysis, Gene interaction and pathway enrichment, and Protein interaction network analysis."
  },
  "drug-discovery-analysis": {
    id: "drug-discovery-analysis",
    title: "Drug Discovery Analysis",
    shortDesc: "Innovative and trustworthy science for discovery and characterization of potential drug candidates for preclinical development.",
    icon: <FaMicroscope />,
    overview: "Innovative and trustworthy science is required for the discovery and characterization of potential drug candidates for preclinical development. BioMolds delivers depth and breadth in science with data and insight you can rely on — thanks to our unique combination of integrated, interdisciplinary drug discovery experience and unprecedented scope of capabilities in targets, platforms, and therapeutic areas.",
    features: [
      { title: "Integrated Drug Discovery", desc: "End-to-end integrated approach combining target validation, hit identification, and lead optimization in a single workflow." },
      { title: "Combinatorial Chemistry", desc: "Synthesis and screening of large compound libraries to identify potent, selective drug candidates rapidly." },
      { title: "Virtual Screening & Profiling Assays", desc: "In silico screening, molecular docking, and ADMET profiling to prioritize compounds before wet lab validation." },
      { title: "DMPK / ADME Analysis", desc: "Drug metabolism and pharmacokinetics studies including absorption, distribution, metabolism, excretion, and toxicity profiling." },
      { title: "Pharmaceutical Formulation & QSPR", desc: "Quantitative structure-property relationship modeling and formulation development for lead compounds." },
      { title: "Vaccine Development", desc: "End-to-end support for antigen identification, adjuvant selection, and vaccine candidate development and characterization." }
    ],
    details: "Our drug discovery services provide critical insights at every stage — from target identification through Integrated Drug Discovery, Combinatorial Chemistry, Virtual Screening and Profiling Assays, DMPK/ADME Analysis, Pharmaceutical Formulation & QSPR, and Target to Lead Discovery, through to Vaccine Development.\n\nWe help pharmaceutical and biotech researchers identify promising compounds faster, reduce development risks, and bring effective therapies to market. Our interdisciplinary team brings expertise across oncology, infectious disease, rare disease, and CNS therapeutic areas."
  },
  "genetic-test": {
    id: "genetic-test",
    title: "Genetic Test",
    shortDesc: "Analysis of DNA, chromosomes, proteins, and metabolic processes to detect hereditary diseases.",
    icon: <FaDna />,
    overview: "Genetic test aims at the analysis of DNA, chromosomes, proteins, and metabolic processes to detect hereditary diseases, being related to the genotype, mutations, the phenotype or karyotype, with clinical purposes.",
    features: [
      { title: "Predictive Test", desc: "Identify genetic predisposition to hereditary diseases before symptoms appear." },
      { title: "Carrier Test", desc: "Determine if an individual carries one copy of a gene mutation that could be passed to offspring." },
      { title: "Pharmacogenetic Test", desc: "Analyze how genes affect an individual's response to drugs for personalized treatment." }
    ],
    details: "In oncological patients, FISH method is used to detect or confirm aberrations that cannot be identified by standard karyotyping. The FISH method is generally quite sensitive and it is also commonly used to monitor the treatment of patients with onco-hematological diseases. In non-oncological patients such as prenatal diagnostics, FISH analysis complements and in certain cases replaces cytogenetic analysis of peripheral blood, amniotic fluid, and chorionic villus samples. FISH is used to confirm the cytogenetic findings and also to detect various aberrations that cannot be detected by karyotyping due to its low sensitivity, e.g., microdeletion syndromes."
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
              <div className="flex flex-col gap-4">
                {service.details.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-lg">{para}</p>
                ))}
              </div>
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
              <a href="mailto:biomolediscsol@biomolds.com" className="text-sm text-white/90 hover:text-white block break-all font-medium underline underline-offset-4">
                biomolediscsol@biomolds.com
              </a>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
