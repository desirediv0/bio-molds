"use client";

import { useState, useEffect, useRef } from "react";
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
  FaServer,
} from "react-icons/fa6";

const cardSlides = [
  ["/dna-hand.jpg", "/scientist-glasses.jpg"],
  ["/lab-glassware.jpg", "/lab-computers.jpg"],
  ["/chromosomes.jpg", "/cells-microscope.jpg"],
  ["/antibodies.jpg", "/virus-diagram.jpg"],
  ["/lab-tech.jpg", "/lab-scientist.jpg"],
];

const nutritionCategories = [
  {
    title: "PROTEIN",
    icon: <FaDumbbell />,
    borderClass: "border-l-4 border-l-cyan-500",
    iconBg: "bg-cyan-pale text-cyan-600",
    items: [
      {
        name: "Concentrate",
        desc: "Constitute Glutamine Precursor & BCAA.\n\n100% Protein From Whey.\n\nRepair Muscle Tissues.\n\nEnhance Muscle Growth."
      },
      {
        name: "Pro-Concentrate",
        desc: "Mix one scoop (35gm) with 250-300ml of water or milk. Diabetic, pregnant and breastfeeding women should only use this product upon the advice of a qualified licensed physician or dietician."
      },
      {
        name: "Absolute whey protein",
        desc: "Lean Muscle Building.\n\n30g Whey Protein & 6.9g BCAA.\n\nZero Carbs & Zero Fat.\n\nBuild Lean & Ripped Muscles."
      },
      {
        name: "Turbo whey protein",
        desc: "23g Protein & 5g EAA.\n\n4g of Glutamine Precursor.\n\nGluten & Hormone Free.\n\nFaster Muscle Gain.\n\nPrevent Muscle Breakdown."
      },
      {
        name: "Power Whey protein",
        desc: "Unbeatable Strength.\n\nBoost High Energy.\n\nBuild Lean Muscle Mass.\n\nBoost Athletic Performance."
      },
      {
        name: "Nitra Whey",
        desc: "Supports Testosterone Level.\n\nEnhanced Strength and Muscle Gain.\n\nRosehip Extract for Joint Health.\n\nImproved Recovery Time.\n\nAshwagandha, Safed Musli & Tribulus Terrestris."
      }
    ]
  },
  {
    title: "GAINER",
    icon: <FaFlask />,
    borderClass: "border-l-4 border-l-pink",
    iconBg: "bg-pink-pale text-pink",
    items: [
      {
        name: "Advanced weight gainer",
        desc: "Per 100g Delivers 376 kcal Energy, 23g of Protein.\n\n2g Dietary fiber, 4g Creatine.\n\nSupports Muscle Mass Gain.\n\nSpeed Up Muscle Growth."
      },
      {
        name: "Anabolic mass gainer",
        desc: "For Lean Muscle Building.\n\n30% Protein | Creapure® | Dietary Fibers.\n\nHMB | DAA | Taurine | Ashwagandha.\n\nEnhances Natural Testosterone.\n\nRecovery & Strength."
      }
    ]
  },
  {
    title: "PRE WORKOUT",
    icon: <FaVial />,
    borderClass: "border-l-4 border-l-cyan-500",
    iconBg: "bg-cyan-pale text-cyan-600",
    items: [
      {
        name: "LSteam",
        desc: "2000 mg L-Citrulline.\n\nProvides Adaptogenic Energy.\n\nExtreme Mental Focus.\n\nBeta-Alanine | L-Citrulline | Betaine Anhydrous.\n\nVitamin C & Grape Seed Extract for Antioxidant Support.\n\nNo Caffeine Crash."
      },
      {
        name: "HSteam",
        desc: "Boost Muscular Endurance.\n\nMaximize Training Capacity.\n\nImprove Blood Circulation.\n\nProvide Extreme Mental Focus."
      }
    ]
  },
  {
    title: "WORKOUT ESSENTIALS",
    icon: <FaBox />,
    borderClass: "border-l-4 border-l-pink",
    iconBg: "bg-pink-pale text-pink",
    items: [
      {
        name: "Recharging Supplement",
        desc: "Replenish Electrolytes & Hydration.\n\nBoost Muscle Recovery.\n\nReduce Fatigue & Cramps.\n\nOptimal Intra-Workout Support."
      }
    ]
  }
];

function CardCarousel({ images, interval = 3000 }: { images: string[]; interval?: number }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images, interval]);
  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}>
          <Image src={src} alt="" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}

const galleryImages = Array.from(
  { length: 18 },
  (_, i) => `https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/bio-molds/image/img%20(${i + 1}).jpeg`
);

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; desc: string } | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.8; // increased speed slightly for better responsiveness
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      {/* 1. HERO */}
      <section className="min-h-screen pt-14 pb-16 px-4 sm:px-6 bg-white relative flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <FadeUp className="max-w-xl z-10">


            <h1 className="font-serif text-[56px] lg:text-[65px] text-black font-medium leading-tight mb-6">
              Precision <br />
              <span className="text-cyan-500">Diagnostics</span> <br />
              for a Healthier Tomorrow
            </h1>

            <p className="text-base text-gray-500 leading-relaxed mb-8">
              BioMolds delivers diagnostic kits, research tools, and healthcare solutions, focused on rare/common diseases and multi-analyte detection across India. With a strong commitment to innovation and quality, we support laboratories, hospitals, and research institutions with reliable and advanced diagnostic technologies. Our solutions are designed to enhance early detection, improve clinical decision-making, and contribute to better patient outcomes.            </p>

            <div className="flex flex-wrap gap-4 items-center mb-8">
              <Link href="#services" className="bg-cyan-500 text-white rounded-xl px-6 py-3 font-semibold hover:bg-cyan-400 transition-colors shadow-sm">
                Explore Services
              </Link>
              <Link href="#contact" className="border border-gray-200 text-gray-700 rounded-xl px-6 py-3 hover:border-cyan-400 hover:text-cyan-600 font-semibold transition-colors">
                Talk to Our Team
              </Link>
            </div>

          </FadeUp>

          {/* Desktop: 5-card collage, each with its own carousel */}
          <FadeUp delay={200} className="relative h-[560px] hidden lg:block overflow-hidden">

            {/* Card 1 - top left */}
            <div className="absolute top-[0%] left-[0%] w-[260px] h-[185px] rounded-2xl overflow-hidden shadow-lg border-2 border-white z-10 bg-white">
              <CardCarousel images={cardSlides[0]} interval={5000} />
            </div>

            {/* Card 2 - top right */}
            <div className="absolute top-[2%] right-[0%] w-[260px] h-[185px] rounded-2xl overflow-hidden shadow-lg border-2 border-white z-20 bg-white">
              <CardCarousel images={cardSlides[1]} interval={4500} />
            </div>

            {/* Card 3 - center (perfectly centered) */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[260px] h-[185px] rounded-2xl overflow-hidden shadow-lg border-2 border-white z-30 bg-white">
              <CardCarousel images={cardSlides[2]} interval={5500} />
            </div>

            {/* Card 4 - bottom left */}
            <div className="absolute bottom-[10%] left-[0%] w-[260px] h-[185px] rounded-2xl overflow-hidden shadow-lg border-2 border-white z-20 bg-white">
              <CardCarousel images={cardSlides[3]} interval={6000} />
            </div>

            {/* Card 5 - bottom right */}
            <div className="absolute bottom-[12%] right-[0%] w-[260px] h-[185px] rounded-2xl overflow-hidden shadow-lg border-2 border-white z-20 bg-white">
              <CardCarousel images={cardSlides[4]} interval={4000} />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-50 flex items-center gap-4 w-[260px]">
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

          {/* Mobile: single carousel */}
          <div className="lg:hidden w-full h-[300px] relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
            <CardCarousel images={cardSlides[0]} interval={5000} />
          </div>
        </div>
      </section>

      {/* TRUSTED BY BAR */}
      <section className="bg-cyan-pale border-y border-cyan-border py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">We are Trusted by</span>
            <div className="hidden md:block w-px h-5 bg-gray-300"></div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {["Diagnostic Labs", "Hospitals", "Research Institutions", "Pathology Centers", "Pharmaceutical Companies", "Academic Institutions", "Clinical Research Organizations", "IVF & Fertility Centers"].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700">
                <span className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT */}
      <section id="about" className="py-12 md:py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">

          <FadeUp className="relative h-[450px]">
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-pink-100 -z-10 blur-2xl"></div>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative bg-cyan-pale border-8 border-white group">
              <Image src="/lab-scientist.jpg" alt="Lab Testing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-2xl overflow-hidden border-8 border-white shadow-xl z-20 bg-black flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-3xl font-bold text-cyan-400">100+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400">Labs Partnered</div>
              </div>
            </div>

            <div className="absolute top-8 -left-6 bg-black text-white rounded-xl px-5 py-3 text-sm font-semibold shadow-2xl z-30">
              MSME Registered <span className="block text-xs font-normal text-cyan-400 mt-1 uppercase tracking-tighter">Startup</span>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <span className="text-xs font-semibold tracking-widest uppercase text-pink mb-4 block">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-black leading-tight mb-6">Science-driven solutions for diagnostics & life sciences</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-6 max-w-xl">
              At Biomolds Pvt. Ltd., we are committed to advancing healthcare, life sciences, diagnostics, and research by delivering innovative, reliable, and high-quality solutions to laboratories, hospitals, blood banks, research institutions, and healthcare organizations across India.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-xl">
              Founded with a vision to bridge the gap between technology and healthcare needs, Biomolds has grown into a trusted partner providing world-class instruments, laboratory equipment, consumables, and technical support.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/about" className="bg-cyan-500 text-white rounded-xl px-6 py-3 font-semibold hover:bg-cyan-600 transition-colors shadow-sm text-sm">
                Read Our Story
              </Link>
              <Link href="#contact" className="border border-gray-200 text-gray-700 rounded-xl px-6 py-3 hover:border-cyan-400 hover:text-cyan-600 font-semibold transition-colors text-sm">
                Get in Touch
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-16 bg-white overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
          <FadeUp>
            <span className="text-xs font-semibold tracking-widest uppercase text-pink mb-4 block">Product Showcase</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-black leading-tight">Our Laboratory Gallery</h2>
            <p className="text-sm text-gray-500 mt-2">Explore our premium molecular and cytogenetic solutions. Drag or scroll sideways to view all.</p>
          </FadeUp>
        </div>

        <div className="relative w-full">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 overflow-x-auto py-4 px-4 sm:px-8 md:px-16 cursor-grab active:cursor-grabbing select-none scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] h-[360px] md:w-[360px] md:h-[460px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group transition-transform duration-300 hover:scale-[1.02] bg-gray-50"
              >
                <img
                  src={src}
                  alt={`Laboratory Gallery ${i + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                />

              </div>
            ))}
          </div>
          <style>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </section>

      {/* 7. PRODUCTS */}
      <section id="products" className="py-12 md:py-14 px-4 sm:px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-4 block">Our Products</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-black leading-tight">Diagnostic & Research</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "Cytogenetics", icon: <FaDna />, cat: "Cytogenetics", name: "Cytogenetics", desc: "FISH Probes · Glass Slides · Culture Media ", href: "/products/cytogenetics" },
              { id: "Molecular Diagnostic", icon: <FaFlask />, cat: "Molecular", name: "Molecular Diagnostic", desc: "RT-PCR Kit · Extraction · Oncology · Infection", href: "/products/molecular" },
              { id: "IHC-antibody", icon: <FaMicroscope />, cat: "Histo Pathology", name: "Histo Pathology", desc: "Positive Slides · IHC Antibody · Automation", href: "/products/histo-pathology" },
              { id: "LAB-equipment", icon: <FaServer />, cat: "Lab Eq", name: "Lab Equipment & Consumable", desc: "Microscope · Hub · Review Scanning", href: "/products/lab-equipment" },
              { id: "Hospital-healthcare", icon: <FaSuitcaseMedical />, cat: "Hospital Healthcare", name: "Hospital Healthcare", desc: "Clinical diagnostic supplies & consumables", href: "/products/hospital-healthcare" },
              { id: "Diagnostic-kits", icon: <FaVial />, cat: "Diagnostic", name: "Diagnostic & Research Kits", desc: "RT-PCR · Sanger · FISH · Antibodies", href: "/products/molecular" }
            ].map((prod, i) => (
              <FadeUp key={i} delay={i * 100}>
                <Link href={prod.href} className="block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
                  <div className="h-28 flex items-center justify-center text-[40px] text-cyan-600 bg-cyan-pale transition-colors">
                    {prod.icon}
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-xs px-2 py-1 rounded bg-gray-100 text-gray-500 mb-2">
                      {prod.cat}
                    </span>
                    <h3 className="text-base font-semibold text-black mb-1">{prod.name}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{prod.desc}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section id="services" className="py-12 md:py-14 px-4 sm:px-6 bg-gray-50">
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
              { id: "turn-key", icon: <FaServer />, name: "Turn Key", desc: "End-to-end lab solutions & setup" },
              { id: "drug-discovery-analysis", icon: <FaPills />, name: "Drug Discovery Analysis", desc: "Target identification & validation" },
              { id: "biostatistics", icon: <FaChartBar />, name: "Biostatistics", desc: "Statistical design & clinical analysis" },
              { id: "bioinformatics", icon: <FaLaptopMedical />, name: "Bioinformatics", desc: "Genomic & computational data analysis" },
              { id: "sequencing", icon: <FaVial />, name: "Sequencing", desc: "NGS & Sanger sequencing services" },
              { id: "genetic-test", icon: <FaDna />, name: "Genetic Test", desc: "DNA, chromosomes & hereditary disease analysis" }
            ].map((service, i) => (
              <FadeUp key={i} delay={i * 100}>
                <Link href={`/services/${service.id}`} className="block card-base p-7 group h-full cursor-pointer bg-white">
                  <div className="h-1 w-10 bg-cyan-500 rounded mb-5 group-hover:w-full transition-all duration-300"></div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-pale text-cyan-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-semibold text-black mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SCIENCE SPOTLIGHT */}
      <section id="science" className="py-12 md:py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-pink mb-4 block">Our Specialisations</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-black leading-tight mb-4">Cytogenetics & Molecular Diagnostics</h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-xl">From chromosomal mapping to rapid PCR-based detection.</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { type: "Cytogenetics", img: "/dna-research.jpg", title: "DNA FISH", desc: "Fluorescence In Situ Hybridisation — detection of chromosomal aberrations in oncological and prenatal patients." },
              { type: "Molecular", img: "/lab-tech.jpg", title: "RT-PCR & Detection Kits", desc: "High-sensitivity nucleic acid detection for clinical labs, hospitals, and field diagnostics." },
              { type: "Cytogenetics", img: "/lab-scientist.jpg", title: "Chromosome Analysis & Culture Media", desc: "Karyotyping and culture media for chromosomal abnormality detection." },
              { type: "Antibodies", img: "/lab-safety.jpg", title: "Antibody Panel & Immunodiagnostics", desc: "Research-grade antibodies for immunoassay, western blot, IHC, flow cytometry." }
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

      {/* 2. TRUST BAR */}
      <section className="bg-cyan-pale border-y border-gray-100 py-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-8">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Products</span>
          <div className="hidden lg:block w-px h-5 bg-gray-200"></div>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-600">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Microscope & Hub</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>FISH Probes</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Culture Media </span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Review Scanning</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>RT-PCR Kit</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>NGS + Sanger Kit</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>HLA Typing</span>
          </div>
        </div>
      </section>
      {/* 8. HEALTH & NUTRITION */}
      <section id="health-nutrition" className="py-12 md:py-14 px-4 sm:px-6 bg-white relative">
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
                {nutritionCategories.map((cat, idx) => (
                  <div key={idx} className={`bg-white rounded-2xl ${cat.borderClass} shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow`}>
                    <div className="flex items-center gap-4 mb-4 pb-2 border-b border-gray-100">
                      <div className={`w-12 h-12 ${cat.iconBg} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>
                        {cat.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 tracking-wider text-sm uppercase">
                        {cat.title}
                      </h3>
                    </div>
                    <div className="flex flex-col">
                      {cat.items.map((item, itemIdx) => (
                        <button
                          key={itemIdx}
                          onClick={() => setSelectedProduct(item)}
                          className="flex items-center gap-3 py-3 px-1 text-left text-sm text-gray-700 hover:text-cyan-600 transition-colors group/item border-t border-gray-100 first:border-t-0"
                        >
                          <span className="text-gray-400 group-hover/item:text-cyan-500 transition-colors font-mono">&gt;</span>
                          <span className="font-medium">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
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
              <a href="mailto:biomolediscsol@biomolds.com" className="block text-cyan-600 font-bold mb-2">biomolediscsol@biomolds.com</a>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* 9. LEARN WITH US */}
      <section id="learn" className="py-12 md:py-14 px-4 sm:px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="mb-12 max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-4 block">Learn With Us</span>
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
      <section id="news" className="py-12 md:py-14 px-4 sm:px-6 bg-white border-t border-gray-100">
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
      <section id="contact" className="py-12 md:py-14 px-4 sm:px-6 bg-gray-50 relative border-t border-gray-100">
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
                    <h3 className="font-semibold text-black text-lg mb-1">Phone Numbers</h3>
                    <div className="flex flex-col gap-1 text-sm">
                      <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-center">
                        <span className="text-xs text-gray-400 font-semibold uppercase">Mobile:</span>
                        <a href="tel:+919315465339" className="text-cyan-600 font-medium hover:text-cyan-500 transition-colors">+91 9315465339</a>
                        <span className="text-gray-300">/</span>
                        <a href="tel:+918076704954" className="text-cyan-600 font-medium hover:text-cyan-500 transition-colors">8076704954</a>
                      </div>

                    </div>
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
                      <a href="mailto:biomolediscsol@gmail.com" className="text-gray-500 hover:text-cyan-600 transition-colors">biomolediscsol@gmail.com</a>

                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={200} className="h-[300px] rounded-2xl overflow-hidden card-base">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5495916780837!2d77.06927807495492!3d28.583284886316406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b6c5128528b%3A0x5bfca20689de7fcf!2sBioMolecular%20Discovery%20%26%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1779700467699!5m2!1sen!2sin"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeUp delay={300} className="card-base p-6 flex items-center justify-between group hover:border-cyan-200 transition-colors bg-white">
              <div>
                <h4 className="font-semibold text-black mb-1">For Info</h4>
                <p className="text-xs text-gray-500">biomolediscsol@biomolds.com</p>
              </div>
              <a href="mailto:biomolediscsol@biomolds.com" className="w-10 h-10 rounded-full bg-cyan-pale flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <span aria-hidden="true"><FaArrowRight /></span>
              </a>
            </FadeUp>


            <FadeUp delay={500} className="card-base p-6 flex items-center justify-between group hover:border-cyan-200 transition-colors bg-white">
              <div>
                <h4 className="font-semibold text-black mb-1">Quotes</h4>
                <p className="text-xs text-gray-500">biomolediscsol@gmail.com</p>
              </div>
              <a href="mailto:biomolediscsol@gmail.com" className="w-10 h-10 rounded-full bg-cyan-pale flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <span aria-hidden="true"><FaArrowRight /></span>
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative border border-gray-100 animate-in fade-in zoom-in duration-200">
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-5 text-white flex justify-between items-center">
              <h3 className="text-base font-bold tracking-wide">{selectedProduct.name}</h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-white hover:text-gray-200 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="text-gray-700 space-y-4 text-sm leading-relaxed whitespace-pre-line">
                {selectedProduct.desc}
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 flex justify-end border-t border-gray-100">
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
