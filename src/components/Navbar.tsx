"use client";

import { useState } from "react";
import Link from "next/link";
import { FaMicroscope, FaVial, FaDna, FaPills, FaLaptopMedical, FaChartBar, FaFlask, FaSyringe, FaStethoscope, FaBacteria, } from "react-icons/fa6";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) setActiveDropdown(null);
    else setActiveDropdown(name);
  };

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 h-16 backdrop-blur-md bg-white/90 border-b border-gray-100 z-50 px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="z-50 relative">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          <Link href="/#about" className="text-gray-600 hover:text-cyan-600 font-medium text-sm transition-colors">About Us</Link>

          {/* Products Dropdown */}
          <div className="relative h-full flex items-center group">
            <button className="text-gray-600 group-hover:text-cyan-600 font-medium text-sm transition-colors flex items-center gap-1">
              Products
            </button>
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 pointer-events-none group-hover:pointer-events-auto flex flex-col">
              <Link href="/products/fish-and-sanger-sequencing" className="px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3">
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaDna /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">FISH & Sanger Sequencing</span></div>
              </Link>
              <Link href="/products/rt-pcr-kit" className="px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3">
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaVial /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">RT-PCR Kit</span></div>
              </Link>
              <Link href="/products/extraction-kit" className="px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3">
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaFlask /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Extraction Kit</span></div>
              </Link>
              <Link href="/products/equipment" className="px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3">
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaMicroscope /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Equipment</span></div>
              </Link>
              <Link href="/products/consumable" className="px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3">
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaSyringe /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Consumables</span></div>
              </Link>
              <Link href="/products/surgical" className="px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3">
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaStethoscope /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Surgicals</span></div>
              </Link>
              <Link href="/products/culture-media" className="px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3">
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaBacteria /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Culture Media</span></div>
              </Link>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative h-full flex items-center group">
            <button className="text-gray-600 group-hover:text-cyan-600 font-medium text-sm transition-colors flex items-center gap-1">
              Services
            </button>
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 pointer-events-none group-hover:pointer-events-auto flex flex-col">
              <Link href="/services/turn-key" className="px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3">
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaLaptopMedical /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Turn Key</span><span className="text-xs text-gray-500">End-to-end lab solutions</span></div>
              </Link>
              <Link href="/services/sequencing" className="px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3">
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaVial /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Sequencing</span><span className="text-xs text-gray-500">NGS & Sanger sequencing</span></div>
              </Link>
              <Link href="/services/bioinformatics" className="px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3">
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaChartBar /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Bioinformatics</span><span className="text-xs text-gray-500">Genomic data analysis</span></div>
              </Link>
              <Link href="/services/biostatistics" className="px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3">
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaChartBar /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Biostatistics</span><span className="text-xs text-gray-500">Statistical design & analysis</span></div>
              </Link>
              <Link href="/services/drug-discovery-analysis" className="px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3">
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaPills /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Drug Discovery Analysis</span><span className="text-xs text-gray-500">Target identification & validation</span></div>
              </Link>
              <Link href="/services/cytogenetic-analysis" className="px-5 py-2.5 hover:bg-cyan-pale group/link flex items-start gap-3">
                <span className="text-xl text-cyan-500 w-5 flex justify-center mt-0.5"><FaDna /></span>
                <div className="flex flex-col"><span className="text-sm font-medium text-black">Cytogenetic Analysis</span><span className="text-xs text-gray-500">Chromosomal analysis</span></div>
              </Link>
            </div>
          </div>

          <Link href="/#health-nutrition" className="text-gray-600 hover:text-cyan-600 font-medium text-sm transition-colors">Health Nutrition</Link>
          <Link href="/#learn" className="text-gray-600 hover:text-cyan-600 font-medium text-sm transition-colors">Learn With Us</Link>
          <Link href="/#news" className="text-gray-600 hover:text-cyan-600 font-medium text-sm transition-colors">News & Media</Link>
          <Link href="/#contact" className="text-gray-600 hover:text-cyan-600 font-medium text-sm transition-colors">Contact</Link>

          <a href="mailto:quotes@biomolds.com" className="ml-4 bg-cyan-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 transition-colors shadow-sm">
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
          <Link href="/#about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-black py-3 border-b border-gray-100">About Us</Link>

          <div className="flex flex-col border-b border-gray-100">
            <button onClick={() => toggleDropdown('products')} className="flex justify-between items-center text-lg font-medium text-black py-3">
              Products
            </button>
            {activeDropdown === 'products' && (
              <div className="flex flex-col gap-2 pb-4 pl-4">
                <Link href="/products/fish-and-sanger-sequencing" onClick={() => setIsOpen(false)} className="text-gray-600 py-1">FISH & Sanger Sequencing</Link>
                <Link href="/products/rt-pcr-kit" onClick={() => setIsOpen(false)} className="text-gray-600 py-1">RT-PCR Kit</Link>
                <Link href="/products/extraction-kit" onClick={() => setIsOpen(false)} className="text-gray-600 py-1">Extraction Kit</Link>
                <Link href="/products/equipment" onClick={() => setIsOpen(false)} className="text-gray-600 py-1">Equipment</Link>
                <Link href="/products/consumable" onClick={() => setIsOpen(false)} className="text-gray-600 py-1">Consumables</Link>
                <Link href="/products/surgical" onClick={() => setIsOpen(false)} className="text-gray-600 py-1">Surgicals</Link>
                <Link href="/products/culture-media" onClick={() => setIsOpen(false)} className="text-gray-600 py-1">Culture Media</Link>
              </div>
            )}
          </div>

          <div className="flex flex-col border-b border-gray-100">
            <button onClick={() => toggleDropdown('services')} className="flex justify-between items-center text-lg font-medium text-black py-3">
              Services
            </button>
            {activeDropdown === 'services' && (
              <div className="flex flex-col gap-2 pb-4 pl-4">
                <Link href="/services/turn-key" onClick={() => setIsOpen(false)} className="text-gray-600 py-1">Turn Key</Link>
                <Link href="/services/sequencing" onClick={() => setIsOpen(false)} className="text-gray-600 py-1">Sequencing</Link>
                <Link href="/services/bioinformatics" onClick={() => setIsOpen(false)} className="text-gray-600 py-1">Bioinformatics</Link>
                <Link href="/services/biostatistics" onClick={() => setIsOpen(false)} className="text-gray-600 py-1">Biostatistics</Link>
                <Link href="/services/drug-discovery-analysis" onClick={() => setIsOpen(false)} className="text-gray-600 py-1">Drug Discovery Analysis</Link>
                <Link href="/services/cytogenetic-analysis" onClick={() => setIsOpen(false)} className="text-gray-600 py-1">Cytogenetic Analysis</Link>
              </div>
            )}
          </div>

          <Link href="/#health-nutrition" onClick={() => setIsOpen(false)} className="text-lg font-medium text-black py-3 border-b border-gray-100">Health Nutrition</Link>
          <Link href="/#learn" onClick={() => setIsOpen(false)} className="text-lg font-medium text-black py-3 border-b border-gray-100">Learn With Us</Link>
          <Link href="/#news" onClick={() => setIsOpen(false)} className="text-lg font-medium text-black py-3 border-b border-gray-100">News & Media</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-black py-3 border-b border-gray-100">Contact</Link>

          <a href="mailto:quotes@biomolds.com" className="mt-6 bg-cyan-500 text-white px-5 py-3 rounded-lg text-center font-semibold hover:bg-cyan-400 transition-colors">
            Request a Quote
          </a>
        </div>
      </div>
    </>
  );
}
