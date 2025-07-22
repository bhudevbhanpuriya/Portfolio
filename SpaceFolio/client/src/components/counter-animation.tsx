import { useState, useEffect, useRef } from "react";

interface CounterAnimationProps {
  target: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function CounterAnimation({ 
  target, 
  suffix = "", 
  decimals = 0, 
  className = "" 
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const increment = target / 100;
            const timer = setInterval(() => {
              setCount((prevCount) => {
                const newCount = prevCount + increment;
                if (newCount >= target) {
                  clearInterval(timer);
                  return target;
                }
                return newCount;
              });
            }, 20);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  const formatNumber = (num: number) => {
    if (decimals === 0) {
      return Math.ceil(num).toString();
    }
    return num.toFixed(decimals);
  };

  return (
    <div ref={elementRef} className={className}>
      {formatNumber(count)}{suffix}
    </div>
  );
}
