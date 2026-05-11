import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-14">

          {/* Col 1 */}
          <div className="lg:col-span-1">
            <Image src="/logo-w.png" alt="Logo" width={150} height={150}
              className="bg-white px-2 rounded-lg" />
            <p className="text-gray-400 text-sm mt-4 max-w-xs leading-relaxed">
              BioMolecular Discovery and Solutions Pvt. Ltd. — advancing diagnostics, drug discovery, and molecular research across India.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-cyan-600 flex items-center justify-center transition-colors">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-cyan-600 flex items-center justify-center transition-colors">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs tracking-widest text-gray-500 uppercase mb-5 font-semibold">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="/services/turn-key" className="hover:text-cyan-400 transition-colors">Turn Key</Link></li>
              <li><Link href="/services/sequencing" className="hover:text-cyan-400 transition-colors">Sequencing</Link></li>
              <li><Link href="/services/bioinformatics" className="hover:text-cyan-400 transition-colors">Bioinformatics</Link></li>
              <li><Link href="/services/biostatistics" className="hover:text-cyan-400 transition-colors">Biostatistics</Link></li>
              <li><Link href="/services/drug-discovery-analysis" className="hover:text-cyan-400 transition-colors">Drug Discovery Analysis</Link></li>
              <li><Link href="/services/cytogenetic-analysis" className="hover:text-cyan-400 transition-colors">Cytogenetic Analysis</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs tracking-widest text-gray-500 uppercase mb-5 font-semibold">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="/#about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/products/rt-pcr-kit" className="hover:text-cyan-400 transition-colors">Products</Link></li>
              <li><Link href="/#learn" className="hover:text-cyan-400 transition-colors">Learn With Us</Link></li>
              <li><Link href="/#news" className="hover:text-cyan-400 transition-colors">News & Media</Link></li>
              <li><Link href="/products/culture-media" className="hover:text-cyan-400 transition-colors">Culture Media</Link></li>
              <li><Link href="/#contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-xs tracking-widest text-gray-500 uppercase mb-5 font-semibold">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="flex gap-3 items-start">
                <span className="text-cyan-400 mt-0.5">📍</span>
                <span>313, Vardhman City Mall, Palam Extension, Dwarka Sector-7, New Delhi-110075</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-cyan-400">📞</span>
                <span>+91 9315465339</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-cyan-400">✉️</span>
                <span>biomolediscsol@biomolds.com</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-cyan-400">✉️</span>
                <span>services@biomolds.com</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-cyan-400">✉️</span>
                <span>quotes@biomolds.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2024 BioMolecular Discovery and Solutions Private Limited. All rights reserved.</p>
          <span className="text-cyan-500 text-xs font-medium">biomolds.com</span>
        </div>
      </div>
    </footer>
  );
}
