"use client";

import FadeUp from "@/components/FadeUp";
import {
  FaDna,
  FaFlask,
  FaMicroscope,
  FaVial,
  FaChartBar,
  FaFileLines,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaLocationDot,
  FaDownload,
} from "react-icons/fa6";

// ─── Data ────────────────────────────────────────────────────────────────────

const oncologyKits = [
  {
    cat: "BMD/ONC-01-50",
    name: "Human EGFR Gene Mutation Detection Kit",
    mutations: ["L858R", "19DEL", "T790M", "G719X", "S768I", "L861Q", "20INS"],
  },
  {
    cat: "BMD/ONC-02-50",
    name: "Human KRAS Gene Mutation Detection Kit",
    mutations: ["G12C", "G12S", "G12D", "G12V", "G12A", "G13D", "Q61H"],
  },
  {
    cat: "BMD/ONC-03-50",
    name: "Human NRAS Gene Mutation Detection Kit",
    mutations: ["G12C", "G12S", "G12D", "G13D", "Q61H", "Q61R", "Q61K"],
  },
  {
    cat: "BMD/ONC-04-50",
    name: "Human BRAF V600E Gene Mutation Detection Kit",
    mutations: ["V600E", "V600K", "V600D"],
  },
  {
    cat: "BMD/ONC-05-50",
    name: "Human PIK3CA Gene Mutation Detection Kit",
    mutations: ["E542K", "E545K", "H1047R", "H1047L"],
  },
  {
    cat: "BMD/ONC-06-50",
    name: "Human JAK2 V617F Mutation Detection Kit",
    mutations: ["V617F"],
  },
  {
    cat: "BMD/ONC-07-50",
    name: "BCR-ABL Fusion Gene Detection Kit",
    mutations: ["p210", "p190", "p230"],
  },
  {
    cat: "BMD/ONC-08-50",
    name: "PML-RARA Fusion Gene Detection Kit",
    mutations: ["bcr1", "bcr2", "bcr3"],
  },
];

const extractionGroups = [
  {
    heading: "Genomic & Blood",
    items: [
      "Blood Genomic DNA Kit",
      "Blood RNA Extraction Kit",
      "RNApure Total RNA Kit",
      "HiFiScript cDNA Synthesis Kit",
    ],
  },
  {
    heading: "Viral & FFPE",
    items: [
      "Viral DNA/RNA Extraction Kit",
      "Total Nucleic Acid Kit",
      "NuClean FFPE DNA Kit",
      "NuClean FFPE RNA Kit",
    ],
  },
  {
    heading: "Liquid Biopsy & cfDNA",
    items: [
      "Bead-based cfDNA Isolation Kit",
      "BMD-02P PET cfDNA Storage Tube",
      "BMD-01G Glass cfDNA Storage Tube",
    ],
  },
];

const infectiousGroups = [
  {
    heading: "Sepsis & Respiratory",
    items: [
      "Sepsis Multiplex PCR Panel",
      "Respiratory Multiplex PCR Panel",
      "Meningitis/Encephalitis Panel",
      "Influenza A/B & RSV Detection Kit",
    ],
  },
  {
    heading: "GI, STI & Fungal",
    items: [
      "Gastroenteritis Multiplex Panel",
      "STI/UTI Detection Kit",
      "Candida Species ID Kit",
      "MTB/NTM Detection Kit",
      "MTB/MDR Detection Kit",
    ],
  },
  {
    heading: "Viral & Tropical",
    items: [
      "HCV Quantification Kit",
      "HBV Quantification Kit",
      "Dengue/Chikungunya Detection Kit",
      "HPV Genotyping Kit",
      "HLA-B27 Detection Kit",
      "AMR Multiplex Panel",
    ],
  },
];

const ngsGroups = [
  {
    heading: "NGS Core",
    items: [
      "DNA Library Prep Kit",
      "RNA Library Prep Kit",
      "NGS Adapter Kit",
      "Clean-up Beads",
      "Sanger Sequencing Mix",
      "Custom Oligo Synthesis",
    ],
  },
  {
    heading: "Viral Genotyping",
    items: [
      "HIV-1 Genotyping Kit",
      "HBV Genotyping Kit",
      "SARS-CoV-2 WGS Kit",
      "HPV Genotyping NGS",
      "16S rRNA Amplicon Kit",
      "18S rRNA Amplicon Kit",
    ],
  },
  {
    heading: "Drug Resistance Panels",
    items: [
      "CMV UL54/UL97 Resistance Panel",
      "HSV TK/POL Resistance Panel",
      "HCV NS5A GT2 Panel",
      "13-Plex KB DST Panel",
    ],
  },
];

const fishApplications = [
  "HER2/CEP17", "ALK", "BCR/ABL", "PML/RARA", "MYC", "PD-L1",
  "1p/19q", "EGFR", "RB1", "TP53", "Prenatal 13/18/21/X/Y",
  "CCND1", "BRAF", "ETV6/RUNX1",
];

const fishProbes = [
  { cat: "FP001", name: "HER2 gene amplification kit", probe: "HER2/CEP17 dual-color", vol: "100µL" },
  { cat: "FP002", name: "ALK gene fusion probe", probe: "ALK dual-color", vol: "100µL" },
  { cat: "FP003", name: "BCR/ABL fusion kit", probe: "BCR/ABL dual-color", vol: "100µL" },
  { cat: "FP004", name: "AML1/ETO fusion kit", probe: "AML1/ETO dual-color", vol: "100µL" },
  { cat: "FP005", name: "RARA probe reagent", probe: "PML/RARA dual-color", vol: "100µL" },
  { cat: "FP015", name: "MYC amplification probe", probe: "C-MYC/CEP8 dual-color", vol: "100µL" },
  { cat: "FP032", name: "P16 deletion probe", probe: "P16/CEP9 dual-color", vol: "100µL" },
  { cat: "FP045", name: "1p/19q deletion probe", probe: "1p36/1q25 + 19q13/19p13", vol: "200µL" },
  { cat: "FP227", name: "PD-L1 amplification probe", probe: "PD-L1/CEP9 dual-color", vol: "100µL" },
  { cat: "FP314", name: "Prenatal chromosomes kit", probe: "13/21 + 18/X/Y", vol: "200µL" },
];

const consumables = [
  { cat: "BMD-01G", name: "cfDNA Storage Tube", desc: "Glass, -80°C compatible" },
  { cat: "BMD-02P", name: "cfDNA Storage Tube", desc: "PET plastic, 5mL & 10mL" },
  { cat: "CL-003", name: "FISH Pretreatment Solution", desc: "Enzymatic tissue pretreatment" },
  { cat: "CL-004", name: "DAPI Staining Solution", desc: "Nuclear counterstain for FISH" },
  { cat: "BDS/G-01", name: "Plain Microscope Glass Slides", desc: "25×75mm, Super White Glass" },
  { cat: "BDS/G-02", name: "Positive Charged Slides PCI", desc: "90° corners, Roche Ventana compatible" },
  { cat: "BDS/G-03", name: "Positive Charged Slides PCL", desc: "45° corners, Leica/Dako compatible" },
  { cat: "BDS/T-01", name: "Sterile Filter Tips 10µL", desc: "Low retention, DNase/RNase free" },
  { cat: "BDS/T-02", name: "Sterile Filter Tips 20µL", desc: "Low retention, DNase/RNase free" },
  { cat: "BDS/T-03", name: "Sterile Filter Tips 100µL", desc: "Low retention, DNase/RNase free" },
  { cat: "BDS/T-04", name: "Sterile Filter Tips 200µL", desc: "Low retention, DNase/RNase free" },
  { cat: "BDS/T-05", name: "Sterile Filter Tips 1000µL", desc: "Low retention, DNase/RNase free" },
];

const services = [
  { icon: <FaMicroscope className="w-6 h-6" />, title: "Turnkey Lab Setup", desc: "Complete lab design, equipment, and workflow establishment" },
  { icon: <FaDna className="w-6 h-6" />, title: "Primer Synthesis", desc: "Custom oligonucleotide synthesis with HPLC purification" },
  { icon: <FaChartBar className="w-6 h-6" />, title: "RNAseq Sequencing", desc: "End-to-end RNA sequencing and bioinformatics analysis" },
  { icon: <FaFlask className="w-6 h-6" />, title: "Customised Oncology Panel", desc: "Bespoke mutation panels for specific cancer types" },
  { icon: <FaVial className="w-6 h-6" />, title: "Custom Synthesis", desc: "Probes, reagents, and assay development on demand" },
  { icon: <FaFileLines className="w-6 h-6" />, title: "Scientific / Medical Writing", desc: "Publications, regulatory documents, technical reports" },
];

// ─── Reusable sub-components ─────────────────────────────────────────────────

function SubGroupHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-gray-700 border-l-4 border-cyan-500 pl-3 mb-4 mt-8">
      {children}
    </h3>
  );
}

function SimpleKitCard({ name }: { name: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all duration-200 p-4 flex items-start gap-3">
      <span className="mt-1 w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0" />
      <span className="text-sm font-medium text-gray-800">{name}</span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MolecularPage() {
  return (
    <div className="min-h-screen font-[var(--font-dm-sans)]">

      {/* ── 1. HERO ── */}
      <section
        className="bg-[#0f1e2e] text-white relative overflow-hidden"
        style={{ backgroundImage: "url(/Molecular.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#0f1e2e]/75" />
        {/* Decorative blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-pink-DEFAULT/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/25 rounded-full px-4 py-1.5 mb-6">
              <FaDna className="text-cyan-400 w-4 h-4" />
              <span className="text-cyan-400 text-sm font-medium tracking-wide">Molecular Diagnostics Division</span>
            </div>

            <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 max-w-4xl">
              Precision Molecular Diagnostics<br />
              <span className="text-cyan-400">for Rare &amp; Infectious Diseases</span>
            </h1>

            <p className="text-slate-300 text-lg max-w-2xl mb-8 leading-relaxed">
              MSME Registered&nbsp;·&nbsp;DPIIT Recognised Startup&nbsp;·&nbsp;RUO Certified Products
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="mailto:biomolediscsol@biomolds.com"
                className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-7 py-3 rounded-xl transition-colors shadow-lg shadow-cyan-500/20"
              >
                Request a Sample
              </a>
              <a
                href="https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/Biomolds_catalogue_DNA%20Fast%20Fish%20Probe.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 hover:border-cyan-400 hover:text-cyan-400 text-white font-semibold px-7 py-3 rounded-xl transition-colors"
              >
                View Product Catalogue
              </a>
            </div>

            {/* Stat badges */}
            <div className="flex flex-wrap gap-3">
              {[
                "MSME Registered",
                "DPIIT Startup Recognised",
                "330+ FISH Probes",
                "RUO Certified",
              ].map((badge) => (
                <span
                  key={badge}
                  className="bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold px-4 py-2 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 2. ABOUT ── */}
      <section id="about" className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
                  About Us
                </span>
                <h2 className=" text-3xl sm:text-4xl font-bold text-black mb-6 leading-tight">
                  BioMolecular Discovery &amp;<br />Solutions Pvt. Ltd.
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  BioMolecular Discovery &amp; Solutions Pvt. Ltd. is a New Delhi-based MSME startup and DPIIT-recognised
                  innovator dedicated to advancing diagnostics for Orphan and Rare diseases. We develop multiplex detection
                  kits, high-sensitivity FISH probes, and optimised culture media enabling chromosome analysis from a
                  single blood withdrawal.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our portfolio spans oncology RT-PCR kits, infectious disease panels, NGS reagents, liquid biopsy consumables,
                  and automated hybridisation instruments — empowering molecular labs across India with research-grade
                  (RUO) precision tools.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: "330+", label: "FISH Probes" },
                    { value: "8+", label: "Oncology Kits" },
                    { value: "30+", label: "Disease Panels" },
                    { value: "2+", label: "Instruments" },
                  ].map((s) => (
                    <div key={s.label} className="bg-cyan-pale rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-cyan-600">{s.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Rare Disease Focus", desc: "Diagnostics for Orphan & Rare diseases with single blood withdrawal workflows" },
                    { title: "Multiplex Kits", desc: "Simultaneous detection of multiple targets for faster clinical decisions" },
                    { title: "FISH Probe Library", desc: "330+ fluorescent probes for chromosomal & gene anomaly detection" },
                    { title: "MSME Startup", desc: "DPIIT-recognised innovator based in Dwarka, New Delhi" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-2"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
                        <FaDna className="text-white w-4 h-4" />
                      </div>
                      <h4 className="font-semibold text-sm text-black">{card.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 3. ONCOLOGY RT-PCR KITS ── */}
      <section id="oncology" className="bg-gray-50 section-padding scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <span className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-2 block">
              Molecular Oncology
            </span>
            <h2 className=" text-3xl sm:text-4xl font-bold text-black mb-3">
              Oncology RT-PCR Kits
            </h2>
            <p className="text-gray-500 max-w-2xl mb-10">
              High-sensitivity real-time PCR kits for somatic mutation detection. Each kit contains 50 reactions and
              covers clinically relevant hotspot mutations validated for diagnostic use.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {oncologyKits.map((kit, i) => (
              <FadeUp key={kit.cat} delay={i * 60}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all duration-200 p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3 gap-2 flex-wrap">
                    <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-2 py-0.5 rounded">
                      {kit.cat}
                    </span>
                    <div className="flex gap-1.5">
                      <span className="bg-gray-100 text-gray-500 text-xs font-bold px-2 py-0.5 rounded">
                        50 RXN/Kit
                      </span>
                      <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded">
                        RUO
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-black text-sm mb-3 leading-snug flex-grow">
                    {kit.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-gray-100">
                    {kit.mutations.map((m) => (
                      <span
                        key={m}
                        className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded font-mono"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. DNA/RNA EXTRACTION KITS ── */}
      <section id="extraction" className="bg-white section-padding scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <span className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-2 block">
              Nucleic Acid Isolation
            </span>
            <h2 className=" text-3xl sm:text-4xl font-bold text-black mb-3">
              DNA / RNA Extraction Kits
            </h2>
            <p className="text-gray-500 max-w-2xl mb-2">
              High-yield, inhibitor-free nucleic acid isolation kits for a wide range of sample types — from fresh blood
              and FFPE tissue to cfDNA from liquid biopsies.
            </p>
          </FadeUp>

          {extractionGroups.map((group, gi) => (
            <FadeUp key={group.heading} delay={gi * 80}>
              <SubGroupHeading>{group.heading}</SubGroupHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
                {group.items.map((item) => (
                  <SimpleKitCard key={item} name={item} />
                ))}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── 5. INFECTIOUS DISEASE KITS ── */}
      <section id="infectious" className="bg-gray-50 section-padding scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <span className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-2 block">
              Infectious Disease
            </span>
            <h2 className=" text-3xl sm:text-4xl font-bold text-black mb-3">
              Infectious Disease Amplification Kits
            </h2>
            <p className="text-gray-500 max-w-2xl mb-2">
              Comprehensive multiplex PCR panels covering Sepsis, Respiratory, GI, STI, Tropical, and Viral pathogens
              for rapid differential diagnosis.
            </p>
          </FadeUp>

          {infectiousGroups.map((group, gi) => (
            <FadeUp key={group.heading} delay={gi * 80}>
              <SubGroupHeading>{group.heading}</SubGroupHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                {group.items.map((item) => (
                  <SimpleKitCard key={item} name={item} />
                ))}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── 6. NGS & SEQUENCING REAGENTS ── */}
      <section id="ngs" className="bg-white section-padding scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <span className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-2 block">
              Next-Generation Sequencing
            </span>
            <h2 className=" text-3xl sm:text-4xl font-bold text-black mb-3">
              NGS &amp; Sequencing Reagents
            </h2>
            <p className="text-gray-500 max-w-2xl mb-2">
              End-to-end NGS workflow reagents from library preparation and adapter ligation to viral genotyping panels
              and antimicrobial resistance sequencing.
            </p>
          </FadeUp>

          {ngsGroups.map((group, gi) => (
            <FadeUp key={group.heading} delay={gi * 80}>
              <SubGroupHeading>{group.heading}</SubGroupHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                {group.items.map((item) => (
                  <SimpleKitCard key={item} name={item} />
                ))}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── 7. DNA FAST FISH PROBE PORTFOLIO ── */}
      <section id="fish" className="bg-[#0f1e2e] text-white section-padding scroll-mt-16 relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-pink-DEFAULT/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2 block">
              Cytogenomics
            </span>
            <h2 className=" text-3xl sm:text-4xl font-bold mb-4">
              DNA Fast FISH Probe Portfolio
            </h2>
            <p className="text-slate-300 max-w-3xl leading-relaxed mb-4">
              Our library of <span className="text-cyan-400 font-semibold">330+ probes</span> consists of pools of short,
              fluorescently labelled DNA fragments that hybridise to complementary sequences on target chromosomes. Probes
              are supplied ready-to-use at optimised concentrations, enabling direct visualisation of gene amplifications,
              deletions, translocations, and numerical chromosomal abnormalities under fluorescence microscopy.
            </p>
            <p className="text-slate-400 text-sm mb-6">
              <span className="font-semibold text-slate-300">Storage:</span> -20°C · Stable for 12 months from date of manufacture.
              &nbsp;<span className="font-semibold text-slate-300">Fixation:</span> Compatible with Carnoy&apos;s fixed metaphase spreads and FFPE sections.
            </p>

            {/* Clinical application badges */}
            <div className="flex flex-wrap gap-2 mb-10">
              {fishApplications.map((app) => (
                <span
                  key={app}
                  className="bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {app}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* Probe table */}
          <FadeUp delay={100}>
            <div className="overflow-x-auto rounded-2xl border border-white/10 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5 text-slate-300 uppercase text-xs tracking-wider">
                    <th className="px-5 py-4 text-left font-semibold">Cat #</th>
                    <th className="px-5 py-4 text-left font-semibold">Product Name</th>
                    <th className="px-5 py-4 text-left font-semibold">Probe Name</th>
                    <th className="px-5 py-4 text-left font-semibold">Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {fishProbes.map((row, i) => (
                    <tr
                      key={row.cat}
                      className={`border-t border-white/5 hover:bg-white/5 transition-colors ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                        }`}
                    >
                      <td className="px-5 py-3.5 font-mono font-semibold text-cyan-400 whitespace-nowrap">
                        {row.cat}
                      </td>
                      <td className="px-5 py-3.5 text-slate-200">{row.name}</td>
                      <td className="px-5 py-3.5 text-slate-300">{row.probe}</td>
                      <td className="px-5 py-3.5 text-slate-400 font-mono">{row.vol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">
                Full catalogue of 330+ probes available on request&nbsp;&middot;&nbsp;
                <span className="text-cyan-400">Free validation samples available</span>
              </p>
              <a
                href="https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/Biomolds_catalogue_DNA%20Fast%20Fish%20Probe.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors shadow-lg shadow-cyan-500/20 whitespace-nowrap"
              >
                <FaDownload className="w-4 h-4" />
                Download FISH Catalogue (PDF)
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 8. LAB CONSUMABLES ── */}
      <section id="consumables" className="bg-white section-padding scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <span className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-2 block">
              Consumables
            </span>
            <h2 className=" text-3xl sm:text-4xl font-bold text-black mb-3">
              Lab Consumables
            </h2>
            <p className="text-gray-500 max-w-2xl mb-10">
              Precision-manufactured consumables for liquid biopsy, FISH workflows, glass slide preparation, and
              general molecular laboratory use.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {consumables.map((item, i) => (
              <FadeUp key={item.cat} delay={i * 40}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all duration-200 p-5 h-full flex flex-col gap-2">
                  <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-2 py-0.5 rounded self-start">
                    {item.cat}
                  </span>
                  <h4 className="font-semibold text-black text-sm leading-snug">{item.name}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-auto">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. INSTRUMENTS & SYSTEMS ── */}
      <section id="instruments" className="bg-gray-50 section-padding scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <span className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-2 block">
              Equipment
            </span>
            <h2 className=" text-3xl sm:text-4xl font-bold text-black mb-3">
              Instruments &amp; Systems
            </h2>
            <p className="text-gray-500 max-w-2xl mb-10">
              Integrated hardware solutions for automated hybridisation, fluorescence imaging, and NGS library
              preparation — designed for high-throughput diagnostic workflows.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <FadeUp delay={0}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all duration-200 p-7 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center mb-4">
                  <FaFlask className="text-white w-5 h-5" />
                </div>
                <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-2 py-0.5 rounded self-start mb-3">
                  BMD-HBR-01
                </span>
                <h3 className="font-bold text-black text-lg mb-2">HyberSystem</h3>
                <p className="text-gray-500 text-sm mb-5">
                  Automated hybridisation system for FISH and ISH protocols, ensuring precise temperature control
                  throughout denaturation and hybridisation cycles.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    ["Temp range", "25–80°C"],
                    ["Timing", "1–99 h programmable"],
                    ["Accuracy", "±0.5°C"],
                    ["Capacity", "20 slides"],
                    ["Dimensions", "35×28×18 cm"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex justify-between text-xs border-b border-gray-100 pb-1.5">
                      <span className="text-gray-400 font-medium">{k}</span>
                      <span className="text-gray-700 font-semibold">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Card 2 */}
            <FadeUp delay={80}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all duration-200 p-7 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#0f1e2e] flex items-center justify-center mb-4">
                  <FaMicroscope className="text-cyan-400 w-5 h-5" />
                </div>
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded self-start mb-3">
                  Partner: BioView · Israel
                </span>
                <h3 className="font-bold text-black text-lg mb-2">BioView Imaging &amp; Analysis System</h3>
                <p className="text-gray-500 text-sm mb-5">
                  Automated fluorescence scanning and AI-powered image analysis platform for high-throughput
                  cytogenetic and pathology workflows.
                </p>
                <div className="mt-auto">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Applications</p>
                  <div className="flex flex-wrap gap-2">
                    {["FISH Analysis", "Cell Imaging", "Karyotyping", "IHC Scoring", "Digital Pathology"].map((app) => (
                      <span key={app} className="bg-cyan-pale text-cyan-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Card 3 */}
            <FadeUp delay={160}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all duration-200 p-7 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center mb-4">
                  <FaVial className="text-white w-5 h-5" />
                </div>
                <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded self-start mb-3">
                  NGS AUTOMATION
                </span>
                <h3 className="font-bold text-black text-lg mb-2">NGS Liquid Handler System</h3>
                <p className="text-gray-500 text-sm mb-5">
                  Automated liquid handling platform for NGS library preparation. Supports 96-well format with
                  integrated deck mapping and protocol customisation.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    ["Format", "96-well"],
                    ["Hands-on reduction", "~80%"],
                    ["Throughput", "High-throughput"],
                    ["Compatibility", "Illumina / Ion Torrent"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex justify-between text-xs border-b border-gray-100 pb-1.5">
                      <span className="text-gray-400 font-medium">{k}</span>
                      <span className="text-gray-700 font-semibold">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 10. SERVICES ── */}
      <section id="services" className="bg-[#0f1e2e] text-white section-padding scroll-mt-16 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2 block">
              What We Offer
            </span>
            <h2 className=" text-3xl sm:text-4xl font-bold mb-3">
              Services
            </h2>
            <p className="text-slate-300 max-w-2xl mb-10">
              From lab setup to custom assay development, our expert team provides end-to-end molecular diagnostic
              solutions tailored to your clinical and research requirements.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 60}>
                <div className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-200 h-full flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    {svc.icon}
                  </div>
                  <h4 className="font-semibold text-white text-base">{svc.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. CONTACT ── */}
      <section id="contact" className="bg-[#0a1624] text-white section-padding scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
              Get In Touch
            </span>
            <h2 className=" text-3xl sm:text-4xl font-bold mb-3">
              Request Samples &amp; Product Information
            </h2>
            <p className="text-slate-300 mb-2">
              Free validation samples available for qualified diagnostic and research laboratories.
            </p>
            <p className="text-slate-400 text-sm mb-10">
              All products supplied for Research Use Only (RUO) unless stated otherwise.
            </p>
          </FadeUp>

          <FadeUp delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left">
              {/* Email */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <FaEnvelope className="text-cyan-400 w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:biomolediscsol@biomolds.com" className="text-slate-200 text-sm hover:text-cyan-400 transition-colors block">
                    biomolediscsol@biomolds.com
                  </a>
                  <a href="mailto:biomolediscsol@gmail.com" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors block mt-0.5">
                    biomolediscsol@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <FaPhone className="text-cyan-400 w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+919315465339" className="text-slate-200 text-sm hover:text-cyan-400 transition-colors block">+91 93154 65339</a>
                  <a href="tel:+916398141295" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors block mt-0.5">+91 63981 41295 (After Sales)</a>
                  <a href="tel:01145620653" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors block mt-0.5">011-45620653</a>
                </div>
              </div>

              {/* Web & Address */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <FaLocationDot className="text-cyan-400 w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Address</p>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    313, 3rd Floor, Vardhman City Mall,<br />
                    Palam Extension, Dwarka Sector-7,<br />
                    New Delhi – 110075
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <FaGlobe className="text-cyan-400 w-3 h-3" />
                    <a href="https://www.biomolds.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-xs hover:text-cyan-400 transition-colors">
                      www.biomolds.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="mailto:biomolediscsol@biomolds.com"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-cyan-500/20"
            >
              <FaEnvelope className="w-4 h-4" />
              Send Enquiry
            </a>
          </FadeUp>
        </div>
      </section>



    </div>
  );
}
