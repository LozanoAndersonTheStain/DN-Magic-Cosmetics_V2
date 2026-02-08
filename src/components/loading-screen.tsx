"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export function LoadingScreen() {
  // Generate random values once using useState initializer (runs only on mount)
  const [particles] = useState(() =>
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x:
        typeof window !== "undefined"
          ? Math.random() * window.innerWidth
          : Math.random() * 1920,
      y:
        typeof window !== "undefined"
          ? Math.random() * window.innerHeight
          : Math.random() * 1080,
      duration: 3 + Math.random() * 2,
      delay: i * 0.4,
    })),
  );

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-rose-light via-background to-secondary/30 overflow-hidden"
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 0,
            }}
            animate={{
              y: [null, -20, 20],
              scale: [0, 1, 0.5],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Logo container */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-12 rounded-full border border-primary/10"
        />

        {/* Middle pulsing ring */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary/5 to-accent/10"
        />

        {/* Inner spinning ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/20"
        />

        {/* Logo with glow effect */}
        <div className="relative">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 blur-xl bg-primary/20 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.03, 1], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-28 h-28"
          >
            <Image
              src="/logo.svg"
              alt="DN Magic Cosmetics Logo"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Loading text with sparkle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 flex items-center gap-2"
      >
        <motion.div
          animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
        </motion.div>
        <p className="text-muted-foreground font-display text-lg tracking-wide">
          Cargando magia...
        </p>
        <motion.div
          animate={{ rotate: [360, 180, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>

      {/* Animated progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 w-48 h-1 bg-muted rounded-full overflow-hidden"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
        />
      </motion.div>

      {/* Brand tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-xs text-muted-foreground/60 tracking-widest uppercase font-body"
      >
        Belleza que transforma
      </motion.p>
    </motion.div>
  );
}
