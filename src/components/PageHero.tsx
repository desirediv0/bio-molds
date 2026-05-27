import Link from "next/link";

export default function PageHero({ title, sub, bgImage }: { title: string, sub?: string, bgImage?: string }) {
  return (
    <section
      className="relative bg-black py-20 px-4 sm:px-6 overflow-hidden"
      style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      {bgImage && <div className="absolute inset-0 bg-black/65" />}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-gray-500 text-sm mb-6">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-cyan-400">{title}</span>
        </div>
        
        <div className="inline-block bg-pink-pale text-pink-light px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
          BIOMOLDS
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl text-white font-medium mb-4">{title}</h1>
        
        {sub && (
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
