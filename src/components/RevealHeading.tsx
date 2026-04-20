import Reveal from "@/components/Reveal";

interface RevealHeadingProps {
  title: string;
  className?: string;
}

const RevealHeading = ({ title, className }: RevealHeadingProps) => (
  <Reveal className={`inline-block mb-10 ${className ?? ""}`}>
    <div className="inline-flex items-center gap-3">
      <span className="w-9 h-9 rounded-full bg-[hsl(var(--orange)/0.15)] flex items-center justify-center animate-pulse-scale">
        <span className="w-3 h-3 rounded-full bg-[image:var(--gradient-sunset)]" />
      </span>
      <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
        {title}
      </h2>
    </div>
  </Reveal>
);

export default RevealHeading;
