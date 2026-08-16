import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const colors = [
  'hsl(280, 80%, 70%)',
  'hsl(320, 80%, 75%)',
  'hsl(200, 80%, 70%)',
  'hsl(260, 70%, 65%)',
];

export const CursorSparkles = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(finePointer && !reduced);
  }, []);

  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const createSparkle = useCallback((x: number, y: number) => {
    const sparkle: Sparkle = {
      id: Date.now() + Math.random(),
      x: x + (Math.random() - 0.5) * 40,
      y: y + (Math.random() - 0.5) * 40,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    return sparkle;
  }, []);

  useEffect(() => {
    let lastSparkleTime = 0;
    const minInterval = 50;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const now = Date.now();
      if (now - lastSparkleTime > minInterval) {
        lastSparkleTime = now;
        const newSparkle = createSparkle(e.clientX, e.clientY);
        setSparkles(prev => [...prev.slice(-15), newSparkle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [createSparkle]);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setSparkles(prev => prev.filter(s => Date.now() - s.id < 800));
    }, 100);
    return () => clearInterval(cleanup);
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Glow follower */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full blur-xl opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(280, 80%, 70%) 0%, transparent 70%)',
          width: 120,
          height: 120,
        }}
        animate={{
          x: mousePosition.x - 60,
          y: mousePosition.y - 60,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
      
      {/* Sparkles */}
      <AnimatePresence>
        {sparkles.map(sparkle => (
          <motion.div
            key={sparkle.id}
            className="fixed pointer-events-none z-50"
            initial={{ 
              opacity: 1, 
              scale: 0,
              x: sparkle.x,
              y: sparkle.y,
            }}
            animate={{ 
              opacity: 0, 
              scale: 1,
              y: sparkle.y - 30,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: 'easeOut',
            }}
            style={{
              width: sparkle.size,
              height: sparkle.size,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill={sparkle.color}
              className="w-full h-full"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};
