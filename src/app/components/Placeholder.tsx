interface PlaceholderProps {
  ratio?: string; // e.g. '21/9', '16/9', '1/1', '4/5', '4/3'
  label?: string;
  className?: string;
  minHeight?: string;
}

export function Placeholder({
  ratio = '16/9',
  label,
  className = '',
  minHeight,
}: PlaceholderProps) {
  return (
    <div
      className={`relative w-full bg-[#E0E0E0] dark:bg-[#2D2D2D] overflow-hidden flex items-center justify-center ${className}`}
      style={{ aspectRatio: ratio, minHeight }}
    >
      {label && (
        <span
          className="text-[#AAAAAA] dark:text-[#555555] tracking-widest uppercase select-none"
          style={{ fontSize: '0.7rem', fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
