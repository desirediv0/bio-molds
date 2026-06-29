"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMicroscope, FaVial, FaDna, FaPills, FaLaptopMedical, FaChartBar, FaStethoscope, FaServer } from "react-icons/fa6";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Initial hash set
      setCurrentHash(window.location.hash);

      const handleHashChange = () => {
        setCurrentHash(window.location.hash);
      };
      window.addEventListener("hashchange", handleHashChange);

      // 2. IntersectionObserver for scroll spy on Home page
      let observer: IntersectionObserver | null = null;
      if (pathname === "/") {
        const sections = ["about", "products", "services", "health-nutrition", "learn", "news", "contact"];

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              setCurrentHash("#" + id);
            }
          });
        };

        observer = new IntersectionObserver(observerCallback, {
          root: null,
          rootMargin: "-30% 0px -50% 0px", // Trigger when the section occupies the center of viewport
          threshold: 0,
        });

        sections.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            observer?.observe(element);
          }
        });
      }

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) setActiveDropdown(null);
    else setActiveDropdown(name);
  };

  const isLinkActive = (href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.substring(1); // e.g. "#about"
      if (pathname === "/" && currentHash === hash) {
        return true;
      }
      if (hash === "#products" && pathname.startsWith("/products")) {
        return true;
      }
      if (hash === "#services" && pathname.startsWith("/services")) {
        return true;
      }
      return false;
    }
    return pathname === href;
  };

  const activeClass = "text-cyan-600 font-semibold";
  const inactiveClass = "text-gray-600 hover:text-cyan-600 font-medium";

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 h-20 backdrop-blur-md bg-white/90 border-b border-gray-100 z-50 px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="z-50 relative">
          <Image src="/logo.png" alt="Logo" width={200} height={200} className="h-16 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          <Link href="/#about" className={`${isLinkActive("/#about") ? activeClass : inactiveClass} text-base transition-colors`}>
            About Us
          </Link>

          {/* Products Dropdown */}
          <div className="relative h-full flex items-center group">
            <Link href={"/#products"} className={`${isLinkActive("/#products") ? "text-cyan-600 font-semibold" : "text-gray-600 group-hover:text-cyan-600 font-medium"} text-base transition-colors flex items-center gap-1`}>
              Products
            </Link>
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[310px] bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 pointer-events-none group-hover:pointer-events-auto flex flex-col">
              <Link href="/products/cytogenetics" className={`px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3 ${pathname === "/products/cytogenetics" ? "bg-cyan-pale text-cyan-600" : ""}`}>
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaDna /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Cytogenetics</span><span className="text-xs text-gray-400">FISH Probes · Glass Slides · Culture Media </span></div>
              </Link>
              <Link href="/products/molecular" className={`px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3 ${pathname === "/products/molecular" ? "bg-cyan-pale text-cyan-600" : ""}`}>
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaVial /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Molecular Diagnostic</span><span className="text-xs text-gray-400">Extraction · Oncology · Infection · RT-PCR Kit</span></div>
              </Link>
              <Link href="/products/histo-pathology" className={`px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3 ${pathname === "/products/histo-pathology" ? "bg-cyan-pale text-cyan-600" : ""}`}>
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaMicroscope /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Histo Pathology</span><span className="text-xs text-gray-400">IHC Antibody · Positive Slides · Automation</span></div>
              </Link>
              <Link href="/products/lab-equipment" className={`px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3 ${pathname === "/products/lab-equipment" ? "bg-cyan-pale text-cyan-600" : ""}`}>
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaLaptopMedical /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Lab Equipment & Consumable</span><span className="text-xs text-gray-400">Microscope · Hub · Review Scanning</span></div>
              </Link>
              <Link href="/products/hospital-healthcare" className={`px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3 ${pathname === "/products/hospital-healthcare" ? "bg-cyan-pale text-cyan-600" : ""}`}>
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaStethoscope /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Hospital Healthcare</span></div>
              </Link>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative h-full flex items-center group">
            <Link href={"/#services"} className={`${isLinkActive("/#services") ? "text-cyan-600 font-semibold" : "text-gray-600 group-hover:text-cyan-600 font-medium"} text-base transition-colors flex items-center gap-1`}>
              Services
            </Link>
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 pointer-events-none group-hover:pointer-events-auto flex flex-col">
              <Link href="/services/turn-key" className={`px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3 ${pathname === "/services/turn-key" ? "bg-cyan-pale text-cyan-600" : ""}`}>
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaServer /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Turn Key</span><span className="text-xs text-gray-500">End-to-end lab solutions</span></div>
              </Link>
              <Link href="/services/drug-discovery-analysis" className={`px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3 ${pathname === "/services/drug-discovery-analysis" ? "bg-cyan-pale text-cyan-600" : ""}`}>
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaPills /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Drug Discovery Analysis</span><span className="text-xs text-gray-500">Target identification & validation</span></div>
              </Link>
              <Link href="/services/biostatistics" className={`px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3 ${pathname === "/services/biostatistics" ? "bg-cyan-pale text-cyan-600" : ""}`}>
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaChartBar /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Biostatistics</span><span className="text-xs text-gray-500">Statistical design & analysis</span></div>
              </Link>
              <Link href="/services/bioinformatics" className={`px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3 ${pathname === "/services/bioinformatics" ? "bg-cyan-pale text-cyan-600" : ""}`}>
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaLaptopMedical /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Bioinformatics</span><span className="text-xs text-gray-500">Genomic data analysis</span></div>
              </Link>
              <Link href="/services/sequencing" className={`px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3 ${pathname === "/services/sequencing" ? "bg-cyan-pale text-cyan-600" : ""}`}>
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaVial /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Sequencing</span><span className="text-xs text-gray-500">NGS & Sanger sequencing</span></div>
              </Link>
              <Link href="/services/genetic-test" className={`px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3 ${pathname === "/services/genetic-test" ? "bg-cyan-pale text-cyan-600" : ""}`}>
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaDna /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Genetic Test</span><span className="text-xs text-gray-500">DNA, chromosomes & hereditary disease analysis</span></div>
              </Link>
            </div>
          </div>

          <Link href="/#health-nutrition" className={`${isLinkActive("/#health-nutrition") ? activeClass : inactiveClass} text-base transition-colors`}>
            Health Nutrition
          </Link>
          <Link href="/#learn" className={`${isLinkActive("/#learn") ? activeClass : inactiveClass} text-base transition-colors`}>
            Learn With Us
          </Link>
          <Link href="/#news" className={`${isLinkActive("/#news") ? activeClass : inactiveClass} text-base transition-colors`}>
            News & Media
          </Link>
          <Link href="/#contact" className={`${isLinkActive("/#contact") ? activeClass : inactiveClass} text-base transition-colors`}>
            Contact
          </Link>

          <a href="mailto:biomolediscsol@biomolds.com" className="ml-4 bg-cyan-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 transition-colors shadow-sm">
            Request a Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-black p-2 relative z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          )}
        </button>
      </nav>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden pt-[80px] px-6 overflow-y-auto pb-10`}>
        <div className="flex flex-col gap-2">
          <Link href="/#about" onClick={() => setIsOpen(false)} className={`text-lg font-medium py-3 border-b border-gray-100 ${isLinkActive("/#about") ? "text-cyan-600 font-semibold" : "text-black"}`}>About Us</Link>

          <div className="flex flex-col border-b border-gray-100">
            <button onClick={() => toggleDropdown('products')} className={`flex justify-between items-center text-lg font-medium py-3 ${isLinkActive("/#products") ? "text-cyan-600 font-semibold" : "text-black"}`}>
              Products
            </button>
            {activeDropdown === 'products' && (
              <div className="flex flex-col gap-2 pb-4 pl-4">
                <Link href="/products/cytogenetics" onClick={() => setIsOpen(false)} className={`py-1 ${pathname === "/products/cytogenetics" ? "text-cyan-600 font-medium" : "text-gray-600"}`}>Cytogenetics</Link>
                <Link href="/products/molecular" onClick={() => setIsOpen(false)} className={`py-1 ${pathname === "/products/molecular" ? "text-cyan-600 font-medium" : "text-gray-600"}`}>Molecular</Link>
                <Link href="/products/histo-pathology" onClick={() => setIsOpen(false)} className={`py-1 ${pathname === "/products/histo-pathology" ? "text-cyan-600 font-medium" : "text-gray-600"}`}>Histo Pathology</Link>
                <Link href="/products/lab-equipment" onClick={() => setIsOpen(false)} className={`py-1 ${pathname === "/products/lab-equipment" ? "text-cyan-600 font-medium" : "text-gray-600"}`}>Lab Eq, Software and Consumable</Link>
                <Link href="/products/hospital-healthcare" onClick={() => setIsOpen(false)} className={`py-1 ${pathname === "/products/hospital-healthcare" ? "text-cyan-600 font-medium" : "text-gray-600"}`}>Hospital Healthcare</Link>
                <Link href="/products/turn-key" onClick={() => setIsOpen(false)} className={`py-1 ${pathname === "/products/turn-key" ? "text-cyan-600 font-medium" : "text-gray-600"}`}>Turn Key</Link>
              </div>
            )}
          </div>

          <div className="flex flex-col border-b border-gray-100">
            <button onClick={() => toggleDropdown('services')} className={`flex justify-between items-center text-lg font-medium py-3 ${isLinkActive("/#services") ? "text-cyan-600 font-semibold" : "text-black"}`}>
              Services
            </button>
            {activeDropdown === 'services' && (
              <div className="flex flex-col gap-2 pb-4 pl-4">
                <Link href="/services/turn-key" onClick={() => setIsOpen(false)} className={`py-1 ${pathname === "/services/turn-key" ? "text-cyan-600 font-medium" : "text-gray-600"}`}>Turn Key</Link>
                <Link href="/services/drug-discovery-analysis" onClick={() => setIsOpen(false)} className={`py-1 ${pathname === "/services/drug-discovery-analysis" ? "text-cyan-600 font-medium" : "text-gray-600"}`}>Drug Discovery Analysis</Link>
                <Link href="/services/biostatistics" onClick={() => setIsOpen(false)} className={`py-1 ${pathname === "/services/biostatistics" ? "text-cyan-600 font-medium" : "text-gray-600"}`}>Biostatistics</Link>
                <Link href="/services/bioinformatics" onClick={() => setIsOpen(false)} className={`py-1 ${pathname === "/services/bioinformatics" ? "text-cyan-600 font-medium" : "text-gray-600"}`}>Bioinformatics</Link>
                <Link href="/services/sequencing" onClick={() => setIsOpen(false)} className={`py-1 ${pathname === "/services/sequencing" ? "text-cyan-600 font-medium" : "text-gray-600"}`}>Sequencing</Link>
                <Link href="/services/genetic-test" onClick={() => setIsOpen(false)} className={`py-1 ${pathname === "/services/genetic-test" ? "text-cyan-600 font-medium" : "text-gray-600"}`}>Genetic Test</Link>
              </div>
            )}
          </div>

          <Link href="/products/molecular" onClick={() => setIsOpen(false)} className={`text-lg font-medium py-3 border-b border-gray-100 ${pathname === "/products/molecular" ? "text-cyan-600 font-semibold" : "text-black"}`}>Molecular</Link>
          <Link href="/#health-nutrition" onClick={() => setIsOpen(false)} className={`text-lg font-medium py-3 border-b border-gray-100 ${isLinkActive("/#health-nutrition") ? "text-cyan-600 font-semibold" : "text-black"}`}>Health Nutrition</Link>
          <Link href="/#learn" onClick={() => setIsOpen(false)} className={`text-lg font-medium py-3 border-b border-gray-100 ${isLinkActive("/#learn") ? "text-cyan-600 font-semibold" : "text-black"}`}>Learn With Us</Link>
          <Link href="/#news" onClick={() => setIsOpen(false)} className={`text-lg font-medium py-3 border-b border-gray-100 ${isLinkActive("/#news") ? "text-cyan-600 font-semibold" : "text-black"}`}>News & Media</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className={`text-lg font-medium py-3 border-b border-gray-100 ${isLinkActive("/#contact") ? "text-cyan-600 font-semibold" : "text-black"}`}>Contact</Link>

          <a href="mailto:biomolediscsol@biomolds.com" className="mt-6 bg-cyan-500 text-white px-5 py-3 rounded-lg text-center font-semibold hover:bg-cyan-400 transition-colors">
            Request a Quote
          </a>
        </div>
      </div>
    </>
  );
}
