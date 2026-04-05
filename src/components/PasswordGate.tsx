import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Heart, Sparkles, KeyRound } from "lucide-react";

interface PasswordGateProps {
  onUnlock: () => void;
}

const hintLetters = ["D", "M", "@", "2", "0", "2", "4"];

const PasswordGate = ({ onUnlock }: PasswordGateProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === "DM@2024") {
      setUnlocking(true);
      setTimeout(() => {
        localStorage.setItem("mishtu-unlocked", "true");
        onUnlock();
      }, 2000);
    } else {
      setError(true);
      setAttempts((p) => p + 1);
      setTimeout(() => setError(false), 3000);
    }
  };

  // Show hint after 2 failed attempts
  useEffect(() => {
    if (attempts >= 2) setShowHint(true);
  }, [attempts]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(340 40% 20%), hsl(260 30% 15%), hsl(340 35% 18%))" }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(340 60% 65%), transparent)" }}
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-20 top-20 h-72 w-72 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(30 60% 78%), transparent)" }}
        animate={{ x: [0, -50, 30, 0], y: [0, 50, -20, 0], scale: [1, 0.8, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating sparkle particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          initial={{
            y: "110vh",
            x: `${Math.random() * 100}vw`,
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {i % 3 === 0 ? (
            <Heart size={10 + Math.random() * 14} fill="hsl(340 60% 65%)" stroke="none" className="opacity-30" />
          ) : (
            <Sparkles size={8 + Math.random() * 10} color="hsl(30 60% 78%)" className="opacity-25" />
          )}
        </motion.div>
      ))}

      {/* Twinkling stars */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            width: 2 + Math.random() * 2,
            height: 2 + Math.random() * 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: "hsl(30 50% 90%)",
          }}
          animate={{ opacity: [0.1, 0.7, 0.1], scale: [1, 1.5, 1] }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      <AnimatePresence mode="wait">
        {!unlocking ? (
          <motion.div
            key="gate"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center gap-6 px-6"
          >
            {/* Lock icon with glow ring */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{ background: "hsl(340 60% 65% / 0.3)" }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <div
                className="relative flex h-24 w-24 items-center justify-center rounded-full border"
                style={{
                  background: "linear-gradient(135deg, hsl(340 60% 65% / 0.15), hsl(30 60% 78% / 0.1))",
                  borderColor: "hsl(340 60% 65% / 0.3)",
                  boxShadow: "0 0 40px hsl(340 60% 65% / 0.2), inset 0 0 20px hsl(340 60% 65% / 0.05)",
                }}
              >
                <motion.div
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <KeyRound className="h-10 w-10" style={{ color: "hsl(30 60% 78%)" }} />
                </motion.div>
              </div>
            </motion.div>

            {/* Title with gradient text */}
            <div className="text-center">
              <motion.h1
                className="text-3xl font-display font-bold md:text-4xl"
                style={{
                  background: "linear-gradient(135deg, hsl(30 50% 92%), hsl(340 60% 80%), hsl(30 60% 78%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Yeh jagah kisi khaas ke liye hai
              </motion.h1>
              <motion.p
                className="mt-3 font-body text-sm"
                style={{ color: "hsl(30 30% 65%)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Darwaza kholo... agar tum wahi ho 🤍
              </motion.p>
            </div>

            {/* Input form with glass effect */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password daalo..."
                  className="w-72 rounded-full px-6 py-3.5 text-center font-body text-sm focus:outline-none transition-all duration-300"
                  style={{
                    background: "hsl(340 30% 25% / 0.5)",
                    border: `1.5px solid ${error ? "hsl(0 70% 55%)" : "hsl(340 40% 40% / 0.4)"}`,
                    color: "hsl(30 50% 92%)",
                    boxShadow: error
                      ? "0 0 20px hsl(0 70% 55% / 0.2)"
                      : "0 0 20px hsl(340 60% 65% / 0.1), inset 0 0 10px hsl(340 60% 65% / 0.05)",
                    backdropFilter: "blur(10px)",
                  }}
                  autoFocus
                />
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4"
                  style={{ color: "hsl(30 30% 55%)" }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(340 60% 65% / 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full px-10 py-3.5 font-display text-sm font-medium transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, hsl(340 60% 65%), hsl(340 50% 55%))",
                  color: "hsl(0 0% 100%)",
                  boxShadow: "0 4px 20px hsl(340 60% 65% / 0.3)",
                }}
              >
                Unlock 🤍
              </motion.button>
            </motion.form>

            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm font-display italic"
                  style={{ color: "hsl(340 60% 75%)" }}
                >
                  Galat password — sirf uske liye hai yeh 🤍
                </motion.p>
              )}
            </AnimatePresence>

            {/* Hint section */}
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-2 mt-2"
                >
                  <p className="text-xs font-body" style={{ color: "hsl(30 30% 55%)" }}>
                    Hint: Humaari initials + year ✨
                  </p>
                  <div className="flex gap-1.5">
                    {hintLetters.map((letter, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.12 }}
                        className="flex h-8 w-8 items-center justify-center rounded-lg font-display text-sm font-bold"
                        style={{
                          background: "hsl(340 40% 30% / 0.5)",
                          border: "1px solid hsl(30 60% 78% / 0.2)",
                          color: "hsl(30 60% 78%)",
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Unlock animation */
          <motion.div
            key="unlock"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: 3 }}
            >
              <Heart className="h-24 w-24" fill="hsl(340 60% 65%)" stroke="hsl(340 60% 65%)" />
            </motion.div>
            {/* Heart burst particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 20) * 140,
                  y: Math.sin((i * Math.PI * 2) / 20) * 140,
                  opacity: [1, 0],
                }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                {i % 2 === 0 ? (
                  <Heart size={12} fill="hsl(340 60% 65%)" stroke="none" />
                ) : (
                  <Sparkles size={10} color="hsl(30 60% 78%)" />
                )}
              </motion.div>
            ))}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="font-display text-xl"
              style={{ color: "hsl(30 50% 92%)" }}
            >
              Welcome, Mishtu 🤍
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PasswordGate;
