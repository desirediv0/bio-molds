import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import {
  FaDna,
  FaPills,
  FaLaptopMedical,
  FaChartBar,
  FaMicroscope,
  FaVial,
  FaBox,
  FaCheck,
  FaRegNewspaper,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaFlask,
  FaDumbbell,
  FaSuitcaseMedical,

} from "react-icons/fa6";

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="min-h-screen pt-20 pb-16 px-4 sm:px-6 bg-white relative overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <FadeUp className="max-w-xl z-10">
            <div className="inline-flex items-center gap-2 bg-pink-pale text-pink px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-pink"></span>
              Registered Startup · New Delhi, India
            </div>

            <h1 className="font-serif text-[56px] lg:text-[72px] text-black font-medium leading-tight mb-6">
              Precision <br />
              <span className="text-cyan-500">Diagnostics</span> <br />
              for a Healthier Tomorrow
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              BioMolds develops diagnostic kits, molecular research tools, and drug-discovery solutions — focused on rare diseases and multi-analyte detection across India.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-8">
              <Link href="#services" className="bg-cyan-500 text-white rounded-xl px-6 py-3 font-semibold hover:bg-cyan-400 transition-colors shadow-sm">
                Explore Services
              </Link>
              <Link href="#contact" className="border border-gray-200 text-gray-700 rounded-xl px-6 py-3 hover:border-cyan-400 hover:text-cyan-600 font-semibold transition-colors">
                Talk to Our Team
              </Link>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="font-medium text-gray-400">Trusted by:</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>Diagnostic Labs</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>Hospitals</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>Research Institutions</span>
            </div>
          </FadeUp>

          <FadeUp delay={200} className="relative h-[500px] lg:h-[600px] hidden lg:block">
            {/* Absolute positioned collage */}
            <div className="absolute top-[5%] left-[5%] w-[280px] h-[200px] rounded-2xl overflow-hidden shadow-lg border-2 border-white z-10 bg-white">
              <Image src="/home-1.png" alt="Diagnostics" fill className="object-cover" />
            </div>

            <div className="absolute top-[10%] right-[10%] w-[220px] h-[180px] rounded-2xl overflow-hidden shadow-lg border-2 border-white z-20 bg-white">
              <Image src="/home-2.png" alt="Medical Computing" fill className="object-cover" />
            </div>

            <div className="absolute bottom-[20%] left-[10%] w-[260px] h-[190px] rounded-2xl overflow-hidden shadow-lg border-2 border-white z-30 bg-white">
              <Image src="/home-3.png" alt="DNA Research" fill className="object-cover" />
            </div>

            <div className="absolute bottom-[10%] right-[5%] w-[200px] h-[160px] rounded-2xl overflow-hidden shadow-lg border-2 border-white z-40 bg-white">
              <Image src="/home-4.png" alt="Lab Testing" fill className="object-cover" />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-50 flex items-center gap-4 w-[280px]">
              <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-black text-sm">Multi-Analyte Detection</span>
                <span className="text-xs text-gray-500">Single blood draw · Rapid results</span>
              </div>
            </div>
          </FadeUp>

          {/* Mobile visual (fallback) */}
          <div className="lg:hidden w-full h-[300px] relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-cyan-pale flex items-center justify-center text-8xl text-cyan-500">
            <FaMicroscope />
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-gray-50 border-y border-gray-100 py-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-8">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Serving</span>
          <div className="hidden lg:block w-px h-5 bg-gray-200"></div>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-600">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Diagnostic Laboratories</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Hospital Networks</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Academic Research</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Govt. Health Programmes</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Molecular Research Centres</span>
          </div>
        </div>
      </section>

      {/* 3. ABOUT */}
      <section id="about" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">

          <FadeUp className="relative h-[450px]">
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-pink-100 -z-10 blur-2xl"></div>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative bg-cyan-pale border-8 border-white group">
              <Image src="/about.png" alt="Lab Testing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-2xl overflow-hidden border-8 border-white shadow-xl z-20 bg-black flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-3xl font-bold text-cyan-400">100+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400">Labs Partnered</div>
              </div>
            </div>

            <div className="absolute top-8 -left-6 bg-black text-white rounded-xl px-5 py-3 text-sm font-semibold shadow-2xl z-30">
              Est. 2022 <span className="block text-xs font-normal text-cyan-400 mt-1 uppercase tracking-tighter">Startup India Registered</span>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <span className="text-xs font-semibold tracking-widest uppercase text-pink mb-4 block">Who we are</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-black leading-tight mb-6">Science-driven solutions for diagnostics & drug discovery</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-xl">
              BioMolds is a New Delhi–based startup focused on developing diagnostic products and druggable molecules targeting orphan and rare diseases — conditions that are curable but chronically underdiagnosed. We also develop multipurpose diagnostic kits for detection of multiple infections from a single blood draw, reducing invasiveness and cost.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Multiplex diagnostic kits — detect multiple conditions from a single blood draw",
                "Drug discovery targeting rare & neglected diseases",
                "Services for labs, molecular research & academic institutions",
                "MSME & Startup India registered company"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0"></div>
                  <span className="text-black text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section id="services" className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-4 block">What We Do</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-black leading-tight">Our Core Services</h2>
            </div>
            <Link href="#contact" className="border border-cyan-500 text-cyan-600 rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-cyan-500 hover:text-white transition-colors">
              Contact for Services →
            </Link>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaDna />, name: "Genetic Testing", desc: "DNA-based diagnostic services" },
              { icon: <FaPills />, name: "Drug Discovery", desc: "Druggable molecules for rare diseases" },
              { icon: <FaLaptopMedical />, name: "Bioinformatics", desc: "Computational genomic & proteomic analysis" },
              { icon: <FaChartBar />, name: "Biostatistics", desc: "Statistical analysis for research & clinical trials" },
              { icon: <FaMicroscope />, name: "Cytogenetics (DNA FISH)", desc: "Chromosomal analysis & FISH" },
              { icon: <FaVial />, name: "Molecular Diagnostics", desc: "RT-PCR kits, Sanger sequencing" }
            ].map((service, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="block card-base p-7 group h-full cursor-pointer">
                  <div className="h-1 w-10 bg-cyan-500 rounded mb-5 group-hover:w-full transition-all duration-300"></div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-pale text-cyan-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-semibold text-black mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SCIENCE SPOTLIGHT */}
      <section id="science" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-pink mb-4 block">Our Specialisations</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-black leading-tight mb-4">Cytogenetics & Molecular Diagnostics</h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-xl">From chromosomal mapping to rapid PCR-based detection.</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { type: "Cytogenetics", img: "/Cytogenetics.png", title: "DNA FISH", desc: "Fluorescence In Situ Hybridisation — detection of chromosomal aberrations in oncological and prenatal patients." },
              { type: "Molecular", img: "/Cytogenetics-2.png", title: "RT-PCR & Detection Kits", desc: "High-sensitivity nucleic acid detection for clinical labs, hospitals, and field diagnostics." },
              { type: "Cytogenetics", img: "/Cytogenetics-3.png", title: "Chromosome Analysis & Culture Media", desc: "Karyotyping and culture media for chromosomal abnormality detection." },
              { type: "Antibodies", img: "/Cytogenetics-4.png", title: "Antibody Panel & Immunodiagnostics", desc: "Research-grade antibodies for immunoassay, western blot, IHC, flow cytometry." }
            ].map((card, i) => (
              <FadeUp key={i} delay={i * 100} className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col bg-white">
                <div className="h-64 w-full bg-gray-50 overflow-hidden relative">
                  <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">View Details</span>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <span className="inline-block bg-cyan-pale text-cyan-600 text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1 mb-4">
                    {card.type}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-black mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATS STRIP */}
      <section className="bg-black py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            {[
              { val: "Multi", label: "Analyte detection from a single draw", color: "text-cyan-500" },
              { val: "6+", label: "Core diagnostic service areas", color: "text-pink" },
              { val: "B2B", label: "Labs, hospitals & research orgs", color: "text-cyan-500" },
              { val: "Pan-IN", label: "Supply across India", color: "text-pink" }
            ].map((stat, i) => (
              <FadeUp key={i} delay={i * 100} className="pt-6 md:pt-0">
                <div className={`font-serif text-5xl mb-2 ${stat.color}`}>{stat.val}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRODUCTS */}
      <section id="products" className="py-20 px-4 sm:px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-4 block">Featured Products</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-black leading-tight">Diagnostic & Research Kits</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaFlask />, cat: "Life Care", name: "Culture Media", desc: "Ready-to-use culture media for cytogenetic & molecular biology" },
              { icon: <FaVial />, cat: "Molecular", name: "RT-PCR Kit", desc: "High-sensitivity kits for nucleic acid detection" },
              { icon: <FaMicroscope />, cat: "Antibodies", name: "Antibody Panel", desc: "Research-grade antibodies for immunoassay & flow cytometry" },
              { icon: <FaDumbbell />, cat: "Health Nutrition", name: "Whey Protein Range", desc: "Science-backed nutritional supplements" },
              { icon: <FaPills />, cat: "Pharma & Cosmetics", name: "Pharmaceutical Range", desc: "Formulations with rigorous quality standards" },
              { icon: <FaDna />, cat: "Molecular", name: "Sanger Sequencing Kit", desc: "PCR & sequencing kits for clinical applications" }
            ].map((prod, i) => (
              <FadeUp key={i} delay={i * 100} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
                <div className="h-28 bg-gray-50 flex items-center justify-center text-[40px] text-gray-400 group-hover:text-cyan-600 group-hover:bg-cyan-pale transition-colors">
                  {prod.icon}
                </div>
                <div className="p-5">
                  <span className="inline-block text-xs px-2 py-1 rounded bg-gray-100 text-gray-500 mb-2">
                    {prod.cat}
                  </span>
                  <h3 className="text-sm font-semibold text-black mb-1">{prod.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{prod.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HEALTH & NUTRITION */}
      <section id="health-nutrition" className="py-20 px-4 sm:px-6 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">

          <div className="lg:col-span-2">
            <FadeUp>
              <span className="text-xs font-semibold tracking-widest uppercase text-pink mb-4 block">Division</span>
              <h2 className="font-serif text-3xl md:text-4xl text-black font-medium mb-6">Health & Nutrition</h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                BioMolds is committed to holistic health. Our Health & Nutrition division develops premium, science-backed supplements designed to support active lifestyles, recovery, and overall wellbeing.
              </p>
            </FadeUp>

            <FadeUp delay={100} className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-base p-6 border-l-4 border-l-cyan-500">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center mb-4 text-2xl"><FaDumbbell /></div>
                  <h3 className="font-semibold text-black mb-2">Whey Protein Range</h3>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex gap-2 items-center"><FaCheck className="text-cyan-500 text-xs" /> Premium Isolate</li>
                    <li className="flex gap-2 items-center"><FaCheck className="text-cyan-500 text-xs" /> Mass Gainer</li>
                    <li className="flex gap-2 items-center"><FaCheck className="text-cyan-500 text-xs" /> Recovery Formulas</li>
                  </ul>
                </div>
                <div className="card-base p-6 border-l-4 border-l-pink">
                  <div className="w-12 h-12 bg-pink-pale text-pink rounded-xl flex items-center justify-center mb-4 text-2xl"><FaPills /></div>
                  <h3 className="font-semibold text-black mb-2">Vitamins & Minerals</h3>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex gap-2 items-center"><FaCheck className="text-pink text-xs" /> Daily Multivitamins</li>
                    <li className="flex gap-2 items-center"><FaCheck className="text-pink text-xs" /> Joint Support</li>
                    <li className="flex gap-2 items-center"><FaCheck className="text-pink text-xs" /> Immunity Boosters</li>
                  </ul>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <h2 className="font-serif text-3xl text-black font-medium mb-6">Pharmaceuticals & Cosmetics</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Through rigorous R&D and quality control, we produce formulations that meet the highest standards of safety and efficacy.
              </p>

              <div className="card-base p-8 bg-gray-50">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-pale text-cyan-600 flex items-center justify-center"><FaCheck /></div>
                    <span className="text-sm text-black font-medium">Tablets & Capsules</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-pale text-cyan-600 flex items-center justify-center"><FaCheck /></div>
                    <span className="text-sm text-black font-medium">Syrups & Liquids</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-pale text-cyan-600 flex items-center justify-center"><FaCheck /></div>
                    <span className="text-sm text-black font-medium">Dermatological Creams</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-pale text-cyan-600 flex items-center justify-center"><FaCheck /></div>
                    <span className="text-sm text-black font-medium">Cosmeceuticals</span>
                  </li>
                </ul>
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-1">
            <FadeUp delay={100} className="card-base p-6 mb-6">
              <h3 className="font-semibold text-black mb-4 border-b border-gray-100 pb-2">Looking for Products?</h3>
              <p className="text-sm text-gray-500 mb-4">Explore our full range of health, nutrition, and pharmaceutical products.</p>
              <Link href="#products" className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-medium hover:bg-cyan-400 transition-colors">
                View Catalog
              </Link>
            </FadeUp>

            <FadeUp delay={200} className="bg-cyan-pale rounded-2xl border border-cyan-100 p-6 text-center">
              <div className="w-12 h-12 bg-white text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-xl">
                <FaBox />
              </div>
              <h3 className="font-semibold text-black mb-2">Bulk Orders</h3>
              <p className="text-sm text-gray-500 mb-4">We supply to pharmacies, gyms, and distributors.</p>
              <a href="mailto:quotes@biomolds.com" className="block text-cyan-600 font-bold mb-2">quotes@biomolds.com</a>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* 9. LEARN WITH US */}
      <section id="learn" className="py-20 px-4 sm:px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="mb-12 max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-4 block">Education</span>
            <h2 className="font-serif text-3xl md:text-4xl text-black font-medium mb-4">Empowering the Scientific Community</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At BioMolds, we believe that knowledge should be accessible. We provide free educational modules, protocols, and technical resources to support the next generation of scientists and improve lab practices.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaFlask />, title: "Culture Media Preparation", category: "Lab Protocols", desc: "Step-by-step guides on preparing and storing various culture media for cytogenetic analysis." },
              { icon: <FaMicroscope />, title: "Microscopy Techniques", category: "Imaging", desc: "Fundamentals of light and fluorescence microscopy, including troubleshooting and maintenance." },
              { icon: <FaDna />, title: "Molecular Biology Basics", category: "Theory", desc: "Core concepts in DNA/RNA structure, replication, transcription, and translation." },
              { icon: <FaLaptopMedical />, title: "Intro to Bioinformatics", category: "Data Analysis", desc: "Getting started with sequence alignment, database searching, and basic genomic analysis." },
              { icon: <FaVial />, title: "Nucleic Acid Extraction", category: "Lab Protocols", desc: "Best practices for extracting high-yield, high-purity DNA and RNA from various sample types." },
              { icon: <FaChartBar />, title: "Biostatistics for Research", category: "Data Analysis", desc: "Understanding p-values, t-tests, ANOVA, and how to properly design an experiment." }
            ].map((mod, i) => (
              <FadeUp key={i} delay={i * 100} className="card-base p-6 group bg-white">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-4">
                  {mod.category}
                </span>
                <div className="text-4xl mb-4 text-cyan-600">{mod.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-3 group-hover:text-cyan-600 transition-colors">{mod.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{mod.desc}</p>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={300} className="mt-16 bg-pink-pale rounded-2xl p-8 md:p-12 text-center border border-pink-100">
            <h2 className="font-serif text-3xl text-black font-medium mb-4">Looking for customized training?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We offer specialized, hands-on training sessions and workshops for institutions and laboratory staff on advanced diagnostic techniques and bioinformatics.
            </p>
            <Link href="#contact" className="inline-block bg-pink text-white px-8 py-3 rounded-xl font-semibold hover:bg-pink-light transition-colors shadow-sm">
              Inquire About Training
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* 10. NEWS & MEDIA */}
      <section id="news" className="py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-pink mb-4 block">Updates</span>
            <h2 className="font-serif text-3xl md:text-4xl text-black font-medium mb-4">News & Media</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Latest updates, research breakthroughs, and press releases from BioMolds.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: "May 15, 2024",
                category: "Press Release",
                title: "BioMolds Announces New Multiplex Diagnostic Kit for Rare Genetic Disorders",
                excerpt: "Our new multi-analyte kit aims to reduce the time and cost of diagnosing several rare genetic markers, requiring only a single blood draw.",
                icon: <FaVial />
              },
              {
                date: "April 02, 2024",
                category: "Research",
                title: "Breakthrough in Target Identification for Autoimmune Pathway",
                excerpt: "The BioMolds drug discovery team has successfully identified a novel target protein that shows promise in modulating specific autoimmune responses in pre-clinical models.",
                icon: <FaLaptopMedical />
              },
              {
                date: "March 18, 2024",
                category: "Company News",
                title: "BioMolds Recognized as 'Startup India' Registered Entity",
                excerpt: "We are proud to announce our official recognition under the Startup India initiative, marking a significant milestone in our journey to innovate healthcare diagnostics.",
                icon: <FaSuitcaseMedical />
              }
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 100} className="card-base overflow-hidden group flex flex-col h-full">
                <div className="relative h-48 w-full bg-cyan-pale flex items-center justify-center text-7xl text-cyan-500 overflow-hidden">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-gray-400 text-xs font-medium mb-3">{item.date}</span>
                  <h3 className="font-serif text-xl font-medium text-black mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={300} className="mt-16 text-center">
            <div className="inline-flex flex-col items-center justify-center p-8 bg-gray-50 rounded-2xl border border-gray-100 max-w-2xl mx-auto w-full">
              <span className="text-3xl mb-4 text-cyan-600"><FaRegNewspaper /></span>
              <h3 className="font-serif text-2xl font-medium text-black mb-2">Media & Press Inquiries</h3>
              <p className="text-gray-500 text-sm mb-6">For press kits, media inquiries, or interview requests, please contact our communications team.</p>
              <a href="mailto:biomolediscsol@biomolds.com" className="bg-cyan-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-cyan-400 transition-colors shadow-sm">
                Contact Media Team
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 11. CONTACT */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-gray-50 relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-4 block">Get In Touch</span>
            <h2 className="font-serif text-3xl md:text-4xl text-black font-medium mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Get in touch with our team for inquiries, quotes, and support.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            <FadeUp className="card-base p-8 md:p-10 order-2 lg:order-1 bg-white">
              <h2 className="font-serif text-3xl text-black font-medium mb-2">Send us a message</h2>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and our team will get back to you shortly.</p>

              <form action="https://formsubmit.co/biomolediscsol@biomolds.com" method="POST" className="flex flex-col gap-5">
                {/* FormSubmit Config */}
                <input type="hidden" name="_subject" value="New submission from BioMolds Contact Form" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Full Name*</label>
                  <input type="text" name="name" required className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-black" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Email Address*</label>
                    <input type="email" name="email" required className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-black" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" name="phone" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-black" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <select name="inquiry_type" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-black">
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Product Enquiry">Product Enquiry</option>
                    <option value="Service Request">Service Request</option>
                    <option value="Quote Request">Quote Request</option>
                    <option value="Training">Training</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Your Message*</label>
                  <textarea name="message" required rows={5} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-y text-black"></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-cyan-500 text-white py-3.5 rounded-lg font-semibold hover:bg-cyan-400 transition-colors mt-2 shadow-sm"
                >
                  Submit Message
                </button>
              </form>
            </FadeUp>

            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <FadeUp delay={100} className="card-base p-8 flex flex-col gap-8 bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-xl">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-lg mb-1">Our Location</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">313, Vardhman City Mall, Palam Extension, Dwarka Sector-7, New Delhi-110075</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-xl">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-lg mb-1">Phone Number</h3>
                    <a href="tel:+919315465339" className="text-cyan-600 font-medium hover:text-cyan-500 transition-colors">+91 9315465339</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-lg mb-1">Email Addresses</h3>
                    <div className="flex flex-col gap-2 text-sm">
                      <a href="mailto:biomolediscsol@biomolds.com" className="text-gray-500 hover:text-cyan-600 transition-colors">biomolediscsol@biomolds.com</a>
                      <a href="mailto:services@biomolds.com" className="text-gray-500 hover:text-cyan-600 transition-colors">services@biomolds.com</a>
                      <a href="mailto:quotes@biomolds.com" className="text-gray-500 hover:text-cyan-600 transition-colors">quotes@biomolds.com</a>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={200} className="h-[300px] rounded-2xl overflow-hidden card-base">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.97371991789!2d77.06583907615024!3d28.59868498555816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b3ca878074b%3A0xc6822c91cff356f9!2sVardhman%20City%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </FadeUp>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp delay={300} className="card-base p-6 flex items-center justify-between group hover:border-cyan-200 transition-colors bg-white">
              <div>
                <h4 className="font-semibold text-black mb-1">General</h4>
                <p className="text-xs text-gray-500">biomolediscsol@biomolds.com</p>
              </div>
              <a href="mailto:biomolediscsol@biomolds.com" className="w-10 h-10 rounded-full bg-cyan-pale flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <span aria-hidden="true"><FaArrowRight /></span>
              </a>
            </FadeUp>

            <FadeUp delay={400} className="card-base p-6 flex items-center justify-between group hover:border-cyan-200 transition-colors bg-white">
              <div>
                <h4 className="font-semibold text-black mb-1">Services</h4>
                <p className="text-xs text-gray-500">services@biomolds.com</p>
              </div>
              <a href="mailto:services@biomolds.com" className="w-10 h-10 rounded-full bg-cyan-pale flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <span aria-hidden="true"><FaArrowRight /></span>
              </a>
            </FadeUp>

            <FadeUp delay={500} className="card-base p-6 flex items-center justify-between group hover:border-cyan-200 transition-colors bg-white">
              <div>
                <h4 className="font-semibold text-black mb-1">Quotes</h4>
                <p className="text-xs text-gray-500">quotes@biomolds.com</p>
              </div>
              <a href="mailto:quotes@biomolds.com" className="w-10 h-10 rounded-full bg-cyan-pale flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <span aria-hidden="true"><FaArrowRight /></span>
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

    </>
  );
}
