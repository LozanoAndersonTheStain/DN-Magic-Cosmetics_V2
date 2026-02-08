"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowLeft, Home, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname,
    );
  }, [pathname]);

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-rose-light via-background to-background px-4">
      <div className="text-center max-w-lg">
        {/* Animate 404 number */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Background glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 blur-3xl bg-primary/20 rounded-full"
          />

          {/* 404 Text */}
          <h1 className="relative font-display text-[120px] md:text-[160px] font-bold leadinf-none">
            <span className="text-gradient">4</span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block text-primary"
            >
              0
            </motion.span>
            <span className="text-gradient">4</span>
          </h1>

          {/* Decorative sparkles */}
          <motion.div
            animate={{ y: [-5, 5, -5], rotate: [0, 180, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-4 right-8 text-primary/60"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
          <motion.div
            animate={{ y: [5, -12, 5], rotate: [360, 180, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute bottom-8 left-5 text-primary/40"
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
              ¡Ups! Página no encontrada
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Parece que esta página se ha perdido en el universo de la belleza.
              No te preocupes, te ayudamos a volver.
            </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Ir al Inicio
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/products">
              <Search className="w-4 h-4" />
              Ver Productos
            </Link>
          </Button>
        </motion.div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a la página anterior
          </Button>
        </motion.div>

        {/* Decorative path indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 p-4 bg-muted/50 rounded-lg border border-border"
        >
          <p className="text-xs text-muted-foreground font-mono">
            Ruta solicitada:{" "}
            <span className="text-primary font-semibold">
                {pathname}
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
