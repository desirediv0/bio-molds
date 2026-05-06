import Link from "next/link";

export default function PageHero({ title, sub }: { title: string, sub?: string }) {
  return (
    <section className="bg-black py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
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
