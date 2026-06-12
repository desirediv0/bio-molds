import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { FaCheck, FaBullseye, FaEye, FaAward, FaHandshake, FaUserShield, FaClock } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-navy pt-24 pb-16 px-4 sm:px-6 md:px-[5vw]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-white font-medium mb-6">About Us</h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed font-sans">
              At Biomolds Pvt. Ltd., we are committed to advancing healthcare, life sciences, diagnostics, and research by delivering innovative, reliable, and high-quality solutions to laboratories, hospitals, blood banks, research institutions, and healthcare organizations across India.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main Content & Story */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7">
              <FadeUp>
                <span className="text-xs font-bold tracking-widest uppercase text-pink mb-4 block">Our Story</span>
                <h2 className="font-serif text-3xl md:text-4xl text-black font-medium leading-tight mb-6">
                  Bridging the gap between cutting-edge technology and healthcare needs
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-base font-sans">
                  Founded with a vision to bridge the gap between cutting-edge technology and healthcare needs, Biomolds has grown into a trusted partner for leading institutions by providing world-class instruments, diagnostic solutions, laboratory equipment, consumables, and technical support. Our strength lies not only in the products we offer but also in our commitment to understanding the unique requirements of every customer and delivering solutions that create real value.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6 text-base font-sans">
                  Over the years, our dedication to quality, precision, and customer satisfaction has helped us build long-lasting relationships with our clients. We believe that every successful partnership is built on trust, transparency, and consistent support. This philosophy has enabled us to grow steadily and expand our presence across multiple healthcare and research segments.
                </p>
                <p className="text-gray-600 leading-relaxed text-base font-sans">
                  Our journey is driven by continuous learning, hard work, and a passion for excellence. We constantly explore new technologies and collaborate with global innovators to bring advanced solutions that empower scientists, clinicians, and healthcare professionals to achieve better outcomes.
                </p>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={200} className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-100 bg-cyan-pale">
                <Image src="/lab-scientist.jpg" alt="BioMolds Research Lab" fill className="object-cover" />
              </FadeUp>
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <FadeUp className="bg-cyan-pale rounded-3xl p-8 md:p-10 border border-cyan-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-cyan-light/10 -z-10 blur-xl"></div>
              <div className="w-14 h-14 bg-white text-cyan-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                <FaBullseye />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-black mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-base font-sans">
                To provide innovative, reliable, and cost-effective healthcare and laboratory solutions that contribute to scientific advancement and improved patient care.
              </p>
            </FadeUp>

            <FadeUp delay={100} className="bg-pink-pale rounded-3xl p-8 md:p-10 border border-pink-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-pink-light/10 -z-10 blur-xl"></div>
              <div className="w-14 h-14 bg-white text-pink rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                <FaEye />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-black mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-base font-sans">
                To become one of India&apos;s most trusted and respected partners in healthcare, diagnostics, and life science solutions by delivering excellence, innovation, and exceptional customer service.
              </p>
            </FadeUp>
          </div>

          {/* Why Clients Choose Biomolds */}
          <div className="mb-20">
            <FadeUp className="text-center mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-cyan-600 mb-4 block">The Biomolds Advantage</span>
              <h2 className="font-serif text-3xl md:text-4xl text-black font-medium">Why Clients Choose Biomolds</h2>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: <FaHandshake />, title: "Customer-Centric", desc: "Customer-centric approach with personalized support." },
                { icon: <FaAward />, title: "Global Quality", desc: "High-quality products from globally recognized manufacturers." },
                { icon: <FaUserShield />, title: "Expert Support", desc: "Strong technical expertise and application support." },
                { icon: <FaClock />, title: "Timely Service", desc: "Timely service and commitment to long-term relationships." },
                { icon: <FaCheck />, title: "Precision", desc: "Focus on reliability, precision, and continuous improvement." }
              ].map((item, i) => (
                <FadeUp key={i} delay={i * 100} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-cyan-pale text-cyan-600 rounded-xl flex items-center justify-center text-xl mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-navy text-sm mb-2 uppercase tracking-wide">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-sans">{item.desc}</p>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Growth Outlook & Call To Action */}
          <FadeUp className="bg-navy text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-600/10 to-navy/50 pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-white font-medium mb-6">Looking Ahead</h2>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8 font-sans">
                As we continue to grow, our commitment remains unchanged—to deliver quality solutions, create lasting value for our customers, and contribute meaningfully to the advancement of healthcare and scientific research. Every milestone we achieve is a reflection of the trust our clients place in us and the dedication of our team to serve them better every day.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="mailto:biomolediscsol@biomolds.com" className="bg-cyan-500 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-cyan-600 transition-colors shadow-sm">
                  Contact Us
                </a>
                <a href="mailto:quotes@biomolds.com" className="border border-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 hover:border-white transition-colors">
                  Request a Quote
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
