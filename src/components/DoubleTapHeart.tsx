import { useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";

interface HeartBurst {
  id: number;
  x: number;
  y: number;
}

const DoubleTapHeart = ({ children }: { children: React.ReactNode }) => {
  const [hearts, setHearts] = useState<HeartBurst[]>([]);
  const lastTap = useRef(0);
  const idRef = useRef(0);

  const handleTap = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const now = Date.now();
    if (now - lastTap.current < 400) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      let clientX: number, clientY: number;
      
      if ("touches" in e) {
        clientX = e.touches[0]?.clientX ?? 0;
        clientY = e.touches[0]?.clientY ?? 0;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const id = idRef.current++;
      
      setHearts((prev) => [...prev, { id, x, y }]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 1500);
    }
    lastTap.current = now;
  }, []);

  return (
    <div
      className="relative"
      onClick={handleTap}
      onTouchStart={handleTap}
    >
      {children}
      <AnimatePresence>
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="pointer-events-none absolute z-50"
            style={{ left: heart.x, top: heart.y }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary"
                initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1.2, 0.8],
                  x: Math.cos((i * Math.PI * 2) / 8) * (50 + Math.random() * 40),
                  y: Math.sin((i * Math.PI * 2) / 8) * (50 + Math.random() * 40) - 30,
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Heart size={10 + Math.random() * 14} fill="currentColor" />
              </motion.div>
            ))}
            <motion.div
              className="absolute text-primary -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 0], y: -60, opacity: [0, 1, 0] }}
              transition={{ duration: 1 }}
            >
              <Heart size={40} fill="currentColor" />
            </motion.div>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default DoubleTapHeart;
