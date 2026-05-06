export default function Logo({ size = "md", white = false }: { size?: "sm" | "md" | "lg", white?: boolean }) {
  const sizes = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12"
  };

  const textClass = white ? "text-white" : "text-black";
  const grayClass = white ? "fill-white/80" : "fill-gray-light";
  const darkClass = white ? "fill-white" : "fill-black";

  return (
    <div className={`flex items-center gap-3 ${sizes[size]}`}>
      {/* Molecular Cluster Icon */}
      <svg viewBox="0 0 40 40" className="h-full w-auto overflow-visible" aria-hidden="true">
        {/* Gray dots */}
        <circle cx="28" cy="8" r="3" className={grayClass} />
        <circle cx="35" cy="14" r="2" className={grayClass} />
        <circle cx="24" cy="15" r="2.5" className={grayClass} />
        
        <circle cx="8" cy="24" r="2.5" className={grayClass} />
        <circle cx="14" cy="30" r="2" className={grayClass} />
        <circle cx="6" cy="32" r="1.5" className={grayClass} />

        {/* Black dots */}
        <circle cx="18" cy="18" r="4.5" className={darkClass} />
        <circle cx="26" cy="24" r="3.5" className={darkClass} />
        
        <circle cx="18" cy="34" r="3" className={darkClass} />
        <circle cx="25" cy="32" r="2.5" className={darkClass} />
      </svg>

      {/* Text Mark */}
      <div className={`font-serif font-bold flex items-center tracking-tight leading-none ${size === 'lg' ? 'text-4xl' : size === 'md' ? 'text-2xl' : 'text-xl'}`}>
        <span className={textClass}>Bi</span>
        <span className="text-pink -mx-0.5" style={{ transform: 'scaleX(0.85) scaleY(1.1)' }}>O</span>
        <span className={textClass}>M</span>
        <span className="text-cyan -mx-0.5" style={{ transform: 'scaleX(0.85) scaleY(1.1)' }}>O</span>
        <span className={textClass}>lds</span>
      </div>
    </div>
  );
}
