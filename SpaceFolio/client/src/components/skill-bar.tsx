import { useState, useEffect, useRef } from "react";

interface SkillBarProps {
  percentage: number;
  className?: string;
  color?: string;
}

export default function SkillBar({ 
  percentage, 
  className = "", 
  color = "from-cyber-cyan to-cosmic-light" 
}: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            setTimeout(() => {
              setWidth(percentage);
            }, 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [percentage, hasAnimated]);

  return (
    <div ref={elementRef} className={`w-full bg-space-blue rounded-full h-2 ${className}`}>
      <div 
        className={`bg-gradient-to-r ${color} h-2 rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
