import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-left" | "fade-in-right" | "scale-in";
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}

const Reveal = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  as: Tag = "div",
}: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(
        visible ? `animate-${animation} opacity-100` : "opacity-0",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
