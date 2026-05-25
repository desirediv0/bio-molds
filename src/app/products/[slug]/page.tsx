"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import {
  FaArrowLeft,
  FaCircleCheck,
  FaEnvelope,
  FaMicroscope,
  FaVial,
  FaDna,
  FaFlask,
  FaSyringe,
  FaStethoscope,
  FaBacteria,
  FaFilePdf
} from "react-icons/fa6";

interface ProductTableItem {
  refNo: string;
  description: string;
  specification: string;
  certificate: string;
}

interface ProductCategory {
  name: string;
  items: ProductTableItem[];
}

interface ProductSection {
  title: string;
  content: string;
}

interface MedicalProduct {
  name: string;
  category: string;
  overview: string[];
  description: string;
  sections?: ProductSection[];
  tableCategories?: ProductCategory[];
  images?: string[];
  catalogueUrl?: string;
}

const medicalProductData: Record<string, MedicalProduct> = {
  "adhesion-microscope-slides": {
    name: "Adhesion Microscope Slides",
    category: "Lab Instruments",
    overview: [
      "IVD Compliant",
      "CE Marked",
      "Super White Glass",
      "Positive Charged · PCL / PCI",
      "Ideal for Histopathology · Cytology · IHC",
      "Auto-Stainer Compatible"
    ],
    description: "BioMolds Adhesion Microscope Slides are engineered for superior tissue adherence, optical clarity and consistency — purpose-built for advanced diagnostic and research laboratories. Each slide features a uniform positive-charge coating for reliable specimen retention throughout the complete staining workflow.",
    sections: [
      {
        title: "Premium Quality · Laboratory Tested · IVD Compliant · CE Marked",
        content: "Available in two variants — PCL Slides (45° Beveled Corners) and PCI Slides (90° Ground Corners). Both variants feature Super White Glass, 25×75mm dimensions, 1.0–1.2mm thickness, Positive Charged surface, Pre-cleaned, Thermal Transfer printing, 50 pcs/pack."
      },
      {
        title: "Why Choose BioMolds?",
        content: "ADH — Superior Adhesion: Uniform +charge coating for reliable retention. OPT — Optical Clarity: Super white glass for transparency & true colour. LAB — Lab Ready: Pre-cleaned, compatible with auto-staining systems. 25×75 — Precise Dimensions: 25×75mm ±0.2mm, ground edges, safe grip."
      },
      {
        title: "Company",
        content: "Biomolecular Discovery and Solution Pvt. Ltd. | 313, 3rd Floor, Vardhman Mall, Dwarka Sector-7, New Delhi – 110075 | www.biomolds.com"
      }
    ],
    catalogueUrl: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/BioMolds_%20slides%20Brochure_final.pdf",
    tableCategories: [
      {
        name: "PCL Slides — 45° Corners · Positive Charged",
        items: [
          { refNo: "Glass Type", description: "Super White Glass", specification: "—", certificate: "—" },
          { refNo: "Dimensions", description: "25 × 75 mm", specification: "—", certificate: "—" },
          { refNo: "Thickness", description: "1.0 – 1.2 mm", specification: "—", certificate: "—" },
          { refNo: "Corners", description: "45°", specification: "—", certificate: "—" },
          { refNo: "Surface", description: "Positive Charged", specification: "—", certificate: "—" },
          { refNo: "Cleaning", description: "Pre-cleaned", specification: "—", certificate: "—" },
          { refNo: "Printing", description: "Thermal Transfer", specification: "—", certificate: "—" },
          { refNo: "Quantity", description: "50 pcs / pack", specification: "—", certificate: "—" }
        ]
      },
      {
        name: "PCI Slides — 90° Corners · Positive Charged",
        items: [
          { refNo: "Glass Type", description: "Super White Glass", specification: "—", certificate: "—" },
          { refNo: "Dimensions", description: "25 × 75 mm", specification: "—", certificate: "—" },
          { refNo: "Thickness", description: "1.0 – 1.2 mm", specification: "—", certificate: "—" },
          { refNo: "Corners", description: "90°", specification: "—", certificate: "—" },
          { refNo: "Surface", description: "Positive Charged", specification: "—", certificate: "—" },
          { refNo: "Cleaning", description: "Pre-cleaned", specification: "—", certificate: "—" },
          { refNo: "Printing", description: "Thermal Transfer", specification: "—", certificate: "—" },
          { refNo: "Quantity", description: "50 pcs / pack", specification: "—", certificate: "—" }
        ]
      }
    ]
  },
  "fish-and-sanger-sequencing": {
    name: "FISH & Sanger Sequencing",
    category: "Diagnostics",
    overview: [
      "High Sensitivity Analysis",
      "Prenatal Diagnostics",
      "Oncological Aberration Detection",
      "Microdeletion Syndrome Confirmation"
    ],
    description: "Fluorescence in situ hybridization (FISH) and Sanger Sequencing solutions for advanced cytogenetic and molecular diagnostics.",
    sections: [
      {
        title: "What FISH Is Used For?",
        content: "In oncological patients, FISH method is used to detect or confirm aberrations that cannot be identified by standard karyotyping. The FISH method is generally quite sensitive and it is also commonly used to monitor the treatment of patients with onco-hematological diseases. In non-oncological patients such prenatal diagnostics, FISH analysis complements and in certain cases replaces cytogenetic analysis of peripheral blood, amniotic fluid, and chorionic villus samples. FISH is used to confirm the cytogenetic findings and also to detect various aberrations that cannot be detected by karyotyping due to its low sensitivity, e.g., microdeletion syndromes."
      },
      {
        title: "FISH Advantages",
        content: "FISH provides rapid, highly specific detection of chromosomal abnormalities. It does not require cell culturing for interphase FISH, allowing for faster turnaround times compared to standard karyotyping. It's an essential tool in Life Care's Solid Tumor and Blood Tumor diagnostics."
      },
      {
        title: "FISH Probe Characteristics",
        content: "Our FISH probes are designed with high specificity and brightness, ensuring clear signals and low background noise. They are validated for use with various sample types including blood, bone marrow, and solid tumor tissues."
      }
    ],
    images: ["/placeholder-fish.png"],
    catalogueUrl: "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/Biomolds_catalogue_DNA%20Fast%20Fish%20Probe.pdf"
  },
  "rt-pcr-kit": {
    name: "RT-PCR Kits",
    category: "Molecular Kits",
    overview: [
      "Real-Time PCR Detection",
      "High Specificity & Sensitivity",
      "Multiple Pathogen Panels",
      "CE-IVD & RUO Options"
    ],
    description: "Comprehensive range of Real-Time PCR kits for the detection of respiratory, hepatitis, sexually transmitted, enterovirus, and tumor diseases.",
    tableCategories: [
      {
        name: "Respiratory Pathogens Diseases",
        items: [
          { refNo: "BMDO-R04750H", description: "12 Respiratory Virus Detection Kit (Real-time PCR)", specification: "50 Rxn/kit", certificate: "RUO" },
          { refNo: "BMDO-R04650M", description: "18 Respiratory Virus Detection Kit (Real-time PCR)", specification: "50 Rxn/kit", certificate: "RUO" },
          { refNo: "BMDO-R04850H", description: "6 Respiratory Virus Detection Kit (Real-time PCR)", specification: "50 Rxn/kit", certificate: "RUO" },
          { refNo: "BMDO-R01150H", description: "Adeno virus Detection Kit (Real-time PCR)", specification: "50 Rxn/kit", certificate: "RUO" },
          { refNo: "BMDO-R01250M", description: "Adenovirus Quantitative Detection Kit (Real-time PCR)", specification: "50 Rxn/kit", certificate: "RUO" },
          { refNo: "BMDO-R00450M", description: "Chlamydia trachomatis, Chlamydia Pneumoniae, Mycoplasma Pneumoniae Detection Kit", specification: "16 Rxn/kit", certificate: "RUO" },
          { refNo: "BMDO-R00950M", description: "Epstein-barr (EB) virus Detection Kit (Real-time PCR)", specification: "50 Rxn/kit", certificate: "RUO" },
          { refNo: "BMDO-R03350H", description: "Human Bocavirus Detection Kit (Real-time PCR)", specification: "50 Rxn/kit", certificate: "RUO" },
          { refNo: "BMDO-R03450H", description: "Legionella Detection Kit (Real-time PCR)", specification: "50 Rxn/kit", certificate: "RUO" },
          { refNo: "BMDO-R02750H", description: "Middle East respiratory syndrome coronavirus (MERS-CoV) Detection Kit", specification: "50 Rxn/kit", certificate: "RUO" },
          { refNo: "BMDO-R00350H", description: "Mycobacterium tuberculosis (MTB) (Rifampicin) Detection Kit", specification: "50 Rxn/kit", certificate: "RUO" },
          { refNo: "BMDO-R00150H", description: "Mycobacterium tuberculosis (MTB) Detection Kit (Real-time PCR)", specification: "50 Rxn/kit", certificate: "RUO" },
          { refNo: "BMDO-R00250H", description: "Mycobacterium tuberculosis (MTB) Isoniazid (INH) Detection Kit", specification: "50 Rxn/kit", certificate: "RUO" },
          { refNo: "BMDO-R00550M", description: "Mycoplasma pneumoniae and Macrolides-resistant strain Detection Kit", specification: "16 Rxn/kit", certificate: "RUO" }
        ]
      },
      {
        name: "Other Diseases",
        items: [
          { refNo: "-", description: "Hepatitis Diseases Detection Kit", specification: "Various", certificate: "RUO" },
          { refNo: "-", description: "Sexual Transmitted Diseases Detection Kit", specification: "Various", certificate: "RUO" },
          { refNo: "-", description: "Enterovirus Diseases Detection Kit", specification: "Various", certificate: "RUO" },
          { refNo: "-", description: "Tumor Diseases & Genetics Diseases Panels", specification: "Various", certificate: "RUO" },
          { refNo: "-", description: "Animal Diseases Pathogen Detection", specification: "Various", certificate: "RUO" }
        ]
      }
    ]
  },
  "extraction-kit": {
    name: "Extraction Kits",
    category: "Molecular Kits",
    overview: [
      "High Yield DNA/RNA",
      "Magnetic Bead Technology",
      "Spin Column Options",
      "Rapid Processing Time"
    ],
    description: "Advanced nucleic acid extraction kits for fast, reliable, and high-yield isolation of DNA and RNA from various biological samples.",
    sections: [
      {
        title: "Overview",
        content: "Our extraction kits are optimized for downstream applications such as Real-Time PCR, NGS, and Sanger Sequencing. They ensure maximum purity and yield, minimizing inhibitors that can affect sensitive assays."
      }
    ]
  },
  "equipment": {
    name: "Equipment",
    category: "Lab Instruments",
    overview: [
      "Precision Engineering",
      "Automated Workflows",
      "Durable Construction",
      "User-Friendly Interface"
    ],
    description: "State-of-the-art laboratory equipment designed for molecular biology, cytogenetics, and general clinical diagnostics.",
    sections: [
      {
        title: "Laboratory Equipment Solutions",
        content: "We provide high-quality thermal cyclers, centrifuges, automated nucleic acid extractors, and biosafety cabinets essential for modern diagnostic and research laboratories."
      }
    ]
  },
  "consumable": {
    name: "Consumables",
    category: "Lab Essentials",
    overview: [
      "Sterile & RNase/DNase Free",
      "High Precision Molding",
      "Wide Compatibility",
      "Bulk Packaging Options"
    ],
    description: "Premium laboratory consumables including pipette tips, PCR tubes, plates, and microcentrifuge tubes.",
    sections: [
      {
        title: "Essential Lab Consumables",
        content: "Our range of consumables is manufactured under strict quality control standards to ensure zero contamination and perfect fit for major equipment brands, vital for sensitive molecular applications."
      }
    ]
  },
  "surgical": {
    name: "Surgicals",
    category: "Clinical Supplies",
    overview: [
      "Medical Grade Materials",
      "Sterile Packaging",
      "Precision Instruments",
      "Reliable Performance"
    ],
    description: "High-quality surgical instruments and supplies for clinical and research applications.",
    sections: [
      {
        title: "Surgical Supplies",
        content: "A comprehensive selection of surgical tools and disposable supplies designed to meet the rigorous demands of healthcare professionals and clinical researchers."
      }
    ]
  },
  "culture-media": {
    name: "Cytogenetics Culture Media",
    category: "Cytogenetics",
    overview: [
      "Chromosome Analysis",
      "Karyotyping Support",
      "Peripheral Blood Culture",
      "Bone Marrow & Amniotic Fluid",
      "Pre-natal Diagnostics",
      "Optimized Growth Formulations"
    ],
    description: "Specialized cytogenetics culture media optimized for chromosome analysis, karyotyping, and cell culture workflows in clinical diagnostics and research laboratories.",
    sections: [
      {
        title: "Cytogenetics Culture Media",
        content: "BioMolds provides a comprehensive range of cytogenetics culture media specifically formulated for chromosomal analysis. Our media support peripheral blood lymphocyte culture, bone marrow culture, amniotic fluid culture, and chorionic villus sampling — enabling reliable karyotype preparation for congenital disease diagnosis, prenatal diagnostics, and hematological malignancy assessment."
      },
      {
        title: "Applications",
        content: "Peripheral blood karyotyping · Bone marrow cytogenetics for haematological disorders · Prenatal diagnosis from amniotic fluid and CVS · Solid tumor chromosome analysis · Constitutional chromosome disorders · Oncological cytogenetics for treatment monitoring."
      },
      {
        title: "Quality & Compliance",
        content: "All culture media are manufactured under stringent quality control standards. Formulations are optimized for maximum mitotic index, clear banding, and consistent chromosome morphology — critical for accurate G-banding and FISH analysis."
      }
    ],
    tableCategories: [
      {
        name: "Culture Media Range",
        items: [
          { refNo: "CM-001", description: "Peripheral Blood Lymphocyte Culture Medium", specification: "500 mL", certificate: "RUO" },
          { refNo: "CM-002", description: "Bone Marrow Culture Medium", specification: "500 mL", certificate: "RUO" },
          { refNo: "CM-003", description: "Amniotic Fluid Culture Medium", specification: "500 mL", certificate: "RUO" },
          { refNo: "CM-004", description: "Chorionic Villus Sampling (CVS) Medium", specification: "500 mL", certificate: "RUO" },
          { refNo: "CM-005", description: "Solid Tumor Disaggregation & Culture Medium", specification: "500 mL", certificate: "RUO" },
          { refNo: "CM-006", description: "Colcemid Solution (10 µg/mL)", specification: "10 mL", certificate: "RUO" },
          { refNo: "CM-007", description: "Hypotonic Solution (KCl 0.075M)", specification: "500 mL", certificate: "RUO" },
          { refNo: "CM-008", description: "Carnoy's Fixative (3:1 Methanol:Acetic Acid)", specification: "500 mL", certificate: "RUO" }
        ]
      }
    ]
  }
};

const getIconForCategory = (category: string) => {
  switch (category) {
    case "Diagnostics": return <FaDna />;
    case "Molecular Kits": return <FaVial />;
    case "Lab Instruments": return <FaMicroscope />;
    case "Lab Essentials": return <FaSyringe />;
    case "Clinical Supplies": return <FaStethoscope />;
    case "Microbiology": return <FaBacteria />;
    default: return <FaFlask />;
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = medicalProductData[slug];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-black mb-4">Product Not Found</h1>
          <Link href="/#about" className="text-cyan-500 flex items-center justify-center gap-2">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/products/rt-pcr-kit" className="text-sm text-gray-400 hover:text-cyan-500 flex items-center gap-2 transition-colors">
            <FaArrowLeft /> Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          {/* Left: Product Image */}
          <div className="space-y-4">
            <FadeUp className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center group">
              <div className="text-center px-8 w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-cyan-500 text-6xl shadow-sm mb-6">
                  {getIconForCategory(product.category)}
                </div>
                <h2 className="text-2xl font-bold mb-2 tracking-tighter text-black">{product.name}</h2>
                <p className="text-sm text-gray-500 uppercase tracking-widest">{product.category}</p>
              </div>
            </FadeUp>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col gap-8">
            <FadeUp>
              <div className="flex items-center gap-2 text-cyan-500 font-semibold text-sm mb-2 uppercase tracking-widest">
                {getIconForCategory(product.category)} {product.category}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-black font-medium mb-4 leading-tight">
                {product.name}
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                {product.overview.map((item: string, i: number) => (
                  <span key={i} className="flex items-center gap-2 bg-gray-50 text-gray-600 px-4 py-2 rounded-full text-sm border border-gray-100">
                    <FaCircleCheck className="text-cyan-500" /> {item}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 leading-relaxed text-lg mb-10">
                {product.description}
              </p>

              <div className="flex gap-4">
                <Link href="/#contact" className="flex-grow bg-cyan-500 text-white py-4 rounded-2xl font-bold hover:bg-cyan-400 transition-all shadow-lg flex items-center justify-center gap-2">
                  <FaEnvelope /> Request a Quote
                </Link>
                <a href="tel:+919315465339" className="flex-grow bg-white border-2 border-gray-100 text-gray-600 py-4 rounded-2xl font-bold hover:border-cyan-500 transition-all flex items-center justify-center gap-2">
                  Call Us
                </a>
              </div>
              {product.catalogueUrl && (
                <a href={product.catalogueUrl} target="_blank" rel="noopener noreferrer" className="w-full mt-3 flex items-center justify-center gap-3 border-2 border-red-100 text-red-500 bg-red-50 py-4 rounded-2xl font-bold hover:bg-red-100 hover:border-red-300 transition-all">
                  <FaFilePdf className="text-xl" /> Download Full Catalogue (PDF)
                </a>
              )}
            </FadeUp>
          </div>
        </div>

        {/* Dynamic Sections (e.g. FISH details) */}
        {product.sections && product.sections.length > 0 && (
          <FadeUp delay={100} className="space-y-12 mb-16">
            {product.sections.map((sec, idx) => (
              <div key={idx} className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100">
                <h3 className="font-serif text-2xl text-black font-medium mb-4">{sec.title}</h3>
                <p className="text-gray-600 leading-relaxed">{sec.content}</p>
              </div>
            ))}
          </FadeUp>
        )}

        {/* Dynamic Table (e.g. RT-PCR Kit details) */}
        {product.tableCategories && product.tableCategories.length > 0 && (
          <FadeUp delay={200} className="space-y-12">
            {product.tableCategories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="bg-gray-50 p-6 md:p-8 border-b border-gray-100">
                  <h2 className="font-serif text-2xl text-black font-medium">{cat.name}</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-gray-50/50">
                        <th className="p-4 md:p-6 text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100">REF No.</th>
                        <th className="p-4 md:p-6 text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100">Description</th>
                        <th className="p-4 md:p-6 text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100">Specification</th>
                        <th className="p-4 md:p-6 text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100">Certificate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {cat.items.map((row, i) => (
                        <tr key={i} className="hover:bg-cyan-pale/30 transition-colors">
                          <td className="p-4 md:p-6 text-sm text-cyan-600 font-bold">{row.refNo}</td>
                          <td className="p-4 md:p-6 text-sm text-gray-700 font-medium">{row.description}</td>
                          <td className="p-4 md:p-6 text-sm text-gray-600">{row.specification}</td>
                          <td className="p-4 md:p-6 text-sm text-gray-500 font-medium">{row.certificate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </FadeUp>
        )}

      </div>
    </div>
  );
}
