import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy pt-20 pb-16 px-[5vw]">
        <FadeUp>
          <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-semibold">About BioMolds</h1>
        </FadeUp>
      </section>

      <section className="section-padding bg-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-6">Our Story</h2>
            <p className="text-text-soft leading-relaxed mb-6">
              Our company, BioMolds (a Startup) is focused on the Discovery and development of Diagnostic products and druggable molecules against Orphan/Rare diseases which are curable but due to lack of proper diagnosis, these become acute to the point of end of survival.
            </p>
            <p className="text-text-soft leading-relaxed mb-6">
              BioMolds is also working on the development of multipurpose diagnostic kits for the detection of multiple infections or ailments on a single withdrawal of blood that will not only reduce invasiveness but cost will also be reduced. BioMolds aims to develop products to make research seamless and cheaper for the common person.
            </p>
            <p className="text-text-soft leading-relaxed mb-6">
              We provide a range of services to Diagnostic, Molecular Research and Academic organizations working in the field of proteomics, NGS, Molecular research, Scientific/Medical writing and others. We also provide custom-synthesis to meet needs of our customers.
            </p>
            <p className="text-text-soft leading-relaxed font-medium">
              Our Company is MSME Registered. We would like to assure you of our consistent Quality, Quick Service and Competitive Price.
            </p>
          </FadeUp>
          <FadeUp delay={200} className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            <Image src="https://flagshipbio.com/wp-content/uploads/2022/07/cytogenetics-1.jpg" alt="BioMolds Lab" fill className="object-cover" />
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: "🏢", title: "MSME Registered", desc: "Recognised micro, small and medium enterprise." },
            { icon: "🚀", title: "Startup India", desc: "Registered startup pushing boundaries in biotech." },
            { icon: "⚗️", title: "Custom Synthesis", desc: "Available for specialised research needs." }
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 100} className="card-base bg-white p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-teal-pale rounded-full flex items-center justify-center text-3xl mb-4">
                {item.icon}
              </div>
              <h3 className="font-sans font-semibold text-navy text-lg mb-2">{item.title}</h3>
              <p className="text-text-soft text-sm">{item.desc}</p>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">Our Scientific Team</h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[1, 2, 3, 4].map((i) => (
            <FadeUp key={i} delay={i * 100} className="card-base bg-white overflow-hidden">
              <div className="bg-teal-pale h-48 w-full flex items-center justify-center text-4xl text-teal/30">👤</div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-navy mb-1">Scientific Member {i}</h3>
                <p className="text-text-soft text-sm">Research & Development</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="bg-gradient-to-r from-teal to-teal-light rounded-3xl p-10 md:p-16 text-center shadow-xl">
          <h2 className="font-serif text-3xl md:text-5xl text-white font-semibold mb-8">Ready to partner with BioMolds?</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:biomolediscsol@biomolds.com" className="bg-white text-teal px-8 py-3.5 rounded-full font-semibold hover:bg-bg transition-colors shadow-sm">
              Email Us
            </a>
            <a href="mailto:quotes@biomolds.com" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-teal transition-colors">
              Request a Quote
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
